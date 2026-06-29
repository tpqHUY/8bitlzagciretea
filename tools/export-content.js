/* ============================================================
   export-content.js — one-time bootstrap.
   Loads the CURRENT bank data, then:
     • writes js/data/<bank>.js   (decoded to Unicode; the live files)
     • writes content/<bank>.csv  (import these into the Google Sheet)
     • round-trip checks toRows -> fromRows keeps the structure
   Run: node tools/export-content.js
   ============================================================ */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const lib = require("./content-lib");

const ROOT = path.join(__dirname, "..");
const SRC = ["js/vocab.js", "js/extras.js", "js/writing.js", "js/speaking.js", "js/toeicsw.js"];

// load current globals
const ctx = { window: {} };
vm.createContext(ctx);
SRC.forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f }); });

fs.mkdirSync(path.join(ROOT, "js/data"), { recursive: true });
fs.mkdirSync(path.join(ROOT, "content"), { recursive: true });

let fail = 0;
lib.BANKS.forEach(function (bank) {
  const live = ctx.window[bank.global];
  if (!Array.isArray(live)) { console.log("✗ missing window." + bank.global); fail++; return; }
  const decoded = lib.decodeDeep(live);

  // canonical = the normalised form sync will produce (drops empty optional
  // fields, forces {w,d,x}); the live data file uses this exact shape.
  const rows = bank.toRows(decoded);
  const canonical = bank.fromRows(rows);

  fs.writeFileSync(path.join(ROOT, bank.dataFile), lib.genFile(bank.global, canonical));
  fs.writeFileSync(path.join(ROOT, "content/" + bank.key + ".csv"), lib.csvWrite(bank.cols, rows));

  // idempotency: Sheet -> data -> Sheet -> data must be stable
  const stable = JSON.stringify(canonical) === JSON.stringify(bank.fromRows(bank.toRows(canonical)));
  if (!stable) fail++;
  const normNote = JSON.stringify(canonical) === JSON.stringify(decoded) ? "" : "  (normalised)";
  console.log((stable ? "✓ " : "✗ ") + bank.tab.padEnd(16) +
    " groups:" + canonical.length + " items:" + rows.length + (stable ? normNote : "  NOT STABLE"));
});

console.log(fail ? "\nFAILED (" + fail + ")" : "\nAll banks exported + round-trip OK.");
process.exit(fail ? 1 : 0);
