/* ============================================================
   clean-sources.js — one-time: remove the bank arrays from the
   mixed source files (they now live in js/data/, generated from
   the Sheet). String-aware bracket matching so brackets inside
   string literals don't confuse it. Idempotent (no-op if absent).
   ============================================================ */
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");

function removeDecl(src, name) {
  const start = src.indexOf("\nconst " + name + " =");
  if (start < 0) return src;
  let i = src.indexOf("=", start) + 1;
  while (i < src.length && /\s/.test(src[i])) i++;
  const open = src[i], close = open === "[" ? "]" : "}";
  let depth = 0, j = i, inStr = false, q = "";
  for (; j < src.length; j++) {
    const c = src[j];
    if (inStr) { if (c === "\\") { j++; continue; } if (c === q) inStr = false; continue; }
    if (c === '"' || c === "'" || c === "`") { inStr = true; q = c; continue; }
    if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) { j++; break; } }
  }
  let end = j;
  if (src[end] === ";") end++;
  let out = src.slice(0, start) + src.slice(end);
  out = out.replace(new RegExp("\\n?\\s*window\\." + name + "\\s*=\\s*" + name + "\\s*;"), "");
  return out;
}

const JOBS = [
  ["js/writing.js", ["WLANG"]],
  ["js/speaking.js", ["SLANG"]],
  ["js/toeicsw.js", ["TSPLANG", "TWRLANG"]]
];

JOBS.forEach(function (job) {
  const file = job[0], names = job[1];
  const p = path.join(ROOT, file);
  let src = fs.readFileSync(p, "utf8");
  names.forEach(function (n) { src = removeDecl(src, n); });
  src = src.replace(/\n{3,}/g, "\n\n");   // tidy blank runs
  fs.writeFileSync(p, src);
  console.log("cleaned " + file + " (" + names.join(", ") + ")");
});
