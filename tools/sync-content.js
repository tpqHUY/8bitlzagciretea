/* ============================================================
   sync-content.js — pull the content Google Sheet and regenerate
   the js/data/<bank>.js files (with validation).

   Usage:
     node tools/sync-content.js            # fetch from the Sheet
     node tools/sync-content.js --local    # rebuild from content/*.csv (test)

   Set your Sheet id in tools/content.config.json first. The Sheet
   must be shared "Anyone with the link → Viewer", and each tab named
   exactly: Vocab, Confusables, Collocations, WritingLang,
   SpeakingLang, ToeicSpeakLang, ToeicWriteLang.
   ============================================================ */
"use strict";
const fs = require("fs");
const path = require("path");
const https = require("https");
const lib = require("./content-lib");

const ROOT = path.join(__dirname, "..");
const LOCAL = process.argv.includes("--local");

let sheetId = "";
try { sheetId = (JSON.parse(fs.readFileSync(path.join(__dirname, "content.config.json"), "utf8")).sheetId || ""); } catch (e) {}

function get(url) {
  return new Promise(function (resolve, reject) {
    https.get(url, { headers: { "User-Agent": "node" } }, function (r) {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) {
        r.resume(); return get(r.headers.location).then(resolve, reject);
      }
      if (r.statusCode !== 200) { r.resume(); return reject(new Error("HTTP " + r.statusCode)); }
      let d = ""; r.setEncoding("utf8");
      r.on("data", function (c) { d += c; });
      r.on("end", function () { resolve(d); });
    }).on("error", reject);
  });
}

function tabCSV(bank) {
  if (LOCAL) return Promise.resolve(fs.readFileSync(path.join(ROOT, "content/" + bank.key + ".csv"), "utf8"));
  if (!sheetId || /PASTE|YOUR/i.test(sheetId)) {
    return Promise.reject(new Error("set sheetId in tools/content.config.json (or run with --local)"));
  }
  const url = "https://docs.google.com/spreadsheets/d/" + sheetId +
    "/gviz/tq?tqx=out:csv&sheet=" + encodeURIComponent(bank.tab);
  return get(url);
}

(async function () {
  const problems = [];
  let wrote = 0;
  for (const bank of lib.BANKS) {
    let csv;
    try { csv = await tabCSV(bank); }
    catch (e) { problems.push(bank.tab + ": " + e.message); continue; }
    const rows = lib.csvToObjects(csv);
    const errs = lib.validateRows(bank, rows);
    if (errs.length) { problems.push.apply(problems, errs); continue; }
    const data = bank.fromRows(rows);
    fs.writeFileSync(path.join(ROOT, bank.dataFile), lib.genFile(bank.global, data));
    console.log("✓ " + bank.tab.padEnd(16) + " groups:" + data.length + " items:" + rows.length);
    wrote++;
  }
  if (problems.length) {
    console.log("\n✗ PROBLEMS — nothing partial was trusted:\n  " + problems.join("\n  "));
    process.exit(1);
  }
  console.log("\nSynced " + wrote + " banks" + (LOCAL ? " from content/*.csv" : " from the Sheet") + ". Review `git diff`, then commit.");
})();
