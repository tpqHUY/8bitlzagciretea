/* ============================================================
   content-lib.js — shared transforms for the content pipeline.
   Maps the list-type "banks" between:
     • the live data shape (window.VOCAB, window.WLANG, ...)
     • flat rows (one per item) <-> CSV (Google Sheet tabs)
   Used by export-content.js (bootstrap) and sync-content.js (pull).
   ============================================================ */
"use strict";

/* ---- entity <-> unicode (so the Sheet shows clean punctuation) ---- */
const ENT = {
  rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“",
  mdash: "—", ndash: "–", hellip: "…", amp: "&",
  rarr: "→", larr: "←", uarr: "↑", darr: "↓",
  times: "×", deg: "°", nbsp: " ", ensp: " ",
  frac12: "½", frac13: "⅓", frac14: "¼",
  frac23: "⅔", frac34: "¾", eacute: "é"
};
function decodeEntities(s) {
  return String(s == null ? "" : s).replace(/&([a-zA-Z]+);/g, function (m, n) {
    return Object.prototype.hasOwnProperty.call(ENT, n) ? ENT[n] : m;
  });
}

/* ---- CSV (RFC-4180-ish) ---- */
function csvCell(s) {
  s = String(s == null ? "" : s);
  return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
function csvWrite(cols, rows) {
  const lines = [cols.map(csvCell).join(",")];
  rows.forEach(function (r) { lines.push(cols.map(function (c) { return csvCell(r[c]); }).join(",")); });
  return lines.join("\r\n") + "\r\n";
}
function csvParse(text) {
  // returns array of cell arrays
  const rows = [];
  let row = [], field = "", i = 0, inQ = false;
  text = String(text).replace(/^﻿/, "");
  while (i < text.length) {
    const c = text[i];
    if (inQ) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i += 2; continue; }
        inQ = false; i++; continue;
      }
      field += c; i++; continue;
    }
    if (c === '"') { inQ = true; i++; continue; }
    if (c === ",") { row.push(field); field = ""; i++; continue; }
    if (c === "\r") { i++; continue; }
    if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; i++; continue; }
    field += c; i++;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}
// CSV text -> array of objects keyed by header row
function csvToObjects(text) {
  const rows = csvParse(text).filter(function (r) { return r.some(function (c) { return String(c).trim() !== ""; }); });
  if (!rows.length) return [];
  const head = rows[0].map(function (h) { return String(h).trim(); });
  return rows.slice(1).map(function (r) {
    const o = {};
    head.forEach(function (h, idx) { o[h] = r[idx] == null ? "" : r[idx]; });
    return o;
  });
}

/* ---- group rows, preserving first-seen order of the key ---- */
function groupBy(rows, field, build) {
  const order = [], map = {};
  rows.forEach(function (r) {
    const k = r[field];
    if (!(k in map)) { map[k] = []; order.push(k); }
    map[k].push(r);
  });
  return order.map(function (k) { return build(k, map[k]); });
}
function firstNote(rs) { const r = rs.find(function (x) { return x.note && String(x.note).trim(); }); return r ? r.note : ""; }
function wd(r) { return { w: r.word, d: r.def || "", x: r.example || "" }; }

/* ---- the seven banks ---- */
const LANG_TABS = [
  ["WLANG", "wlang", "WritingLang"],
  ["SLANG", "slang", "SpeakingLang"],
  ["TSPLANG", "tsplang", "ToeicSpeakLang"],
  ["TWRLANG", "twrlang", "ToeicWriteLang"]
];

const BANKS = [
  {
    key: "vocab", global: "VOCAB", tab: "Vocab", dataFile: "js/data/vocab.js",
    cols: ["group", "sense", "tag", "note", "word", "def", "example"],
    toRows: function (d) {
      const out = [];
      d.forEach(function (g) {
        (g.words || []).forEach(function (it) {
          const w = typeof it === "string" ? it : it.w;
          out.push({ group: g.g, sense: g.sense || "", tag: g.tag || "", note: g.note || "",
            word: w, def: typeof it === "string" ? "" : (it.d || ""), example: typeof it === "string" ? "" : (it.x || "") });
        });
      });
      return out;
    },
    fromRows: function (rows) {
      return groupBy(rows, "group", function (k, rs) {
        const g = { g: k, sense: rs[0].sense || "", tag: rs[0].tag || "" };
        const note = firstNote(rs); if (note) g.note = note;   // keep note before words
        g.words = rs.map(wd);
        return g;
      });
    }
  },
  {
    key: "confusables", global: "CONFUSABLES", tab: "Confusables", dataFile: "js/data/confusables.js",
    cols: ["pair", "note", "word", "pos", "def"],
    toRows: function (d) {
      const out = [];
      d.forEach(function (c) {
        const label = c.items.map(function (i) { return i.w; }).join(" / ");
        c.items.forEach(function (it) { out.push({ pair: label, note: c.note || "", word: it.w, pos: it.pos || "", def: it.d || "" }); });
      });
      return out;
    },
    fromRows: function (rows) {
      return groupBy(rows, "pair", function (k, rs) {
        return { items: rs.map(function (r) { return { w: r.word, pos: r.pos || "", d: r.def || "" }; }), note: firstNote(rs) };
      });
    }
  },
  {
    key: "collocations", global: "COLLOCATIONS", tab: "Collocations", dataFile: "js/data/collocations.js",
    cols: ["group", "sense", "word", "def", "example"],
    toRows: function (d) {
      const out = [];
      d.forEach(function (g) { g.items.forEach(function (it) { out.push({ group: g.g, sense: g.sense || "", word: it.w, def: it.d || "", example: it.x || "" }); }); });
      return out;
    },
    fromRows: function (rows) {
      return groupBy(rows, "group", function (k, rs) { return { g: k, sense: rs[0].sense || "", items: rs.map(wd) }; });
    }
  }
].concat(LANG_TABS.map(function (t) {
  const global = t[0], key = t[1], tab = t[2];
  return {
    key: key, global: global, tab: tab, dataFile: "js/data/" + key + ".js",
    cols: ["group", "sense", "tag", "word", "def", "example"],
    toRows: function (d) {
      const out = [];
      d.forEach(function (g) { g.items.forEach(function (it) { out.push({ group: g.g, sense: g.sense || "", tag: g.tag || "", word: it.w, def: it.d || "", example: it.x || "" }); }); });
      return out;
    },
    fromRows: function (rows) {
      return groupBy(rows, "group", function (k, rs) { return { g: k, sense: rs[0].sense || "", tag: rs[0].tag || "", items: rs.map(wd) }; });
    }
  };
}));

/* deep-decode entities in every string of a value */
function decodeDeep(v) {
  if (typeof v === "string") return decodeEntities(v);
  if (Array.isArray(v)) return v.map(decodeDeep);
  if (v && typeof v === "object") { const o = {}; for (const k in v) o[k] = decodeDeep(v[k]); return o; }
  return v;
}

/* the generated data-file text */
function genFile(global, data) {
  return "/* AUTO-GENERATED from the content Google Sheet by tools/sync-content.js.\n" +
    "   Edit the Sheet, then run `node tools/sync-content.js` — do NOT edit by hand. */\n" +
    "window." + global + " = " + JSON.stringify(data, null, 2) + ";\n";
}

/* validate rows for a bank; returns array of human-readable problems */
function validateRows(bank, rows) {
  const problems = [];
  const groupKey = bank.cols.indexOf("group") !== -1 ? "group" : "pair";
  rows.forEach(function (r, i) {
    const line = i + 2; // +1 header, +1 to 1-based
    if (!String(r[groupKey] || "").trim()) problems.push(bank.tab + " row " + line + ": empty " + groupKey);
    if (!String(r.word || "").trim()) problems.push(bank.tab + " row " + line + ": empty word");
  });
  if (!rows.length) problems.push(bank.tab + ": no rows");
  return problems;
}

module.exports = { ENT, decodeEntities, decodeDeep, csvWrite, csvParse, csvToObjects, groupBy, BANKS, genFile, validateRows };
