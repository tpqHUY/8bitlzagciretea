# Content pipeline — edit in Google Sheets, sync into the app

The list-type "banks" (vocabulary, collocations, easily-confused pairs, and the
Writing / Speaking / TOEIC language banks) live in a **Google Sheet** so they're
easy to add to and edit. A small script pulls the Sheet and regenerates the
static data files the app loads (`js/data/*.js`). The app stays fully static —
no database, works offline.

```
Google Sheet  →  node tools/sync-content.js  →  js/data/*.js  →  git push  →  site
 (you edit)        (pull + validate)             (generated)
```

## One-time setup

1. Create a Google Sheet with **one tab per bank**, named exactly:

   | Tab | Columns (row 1) |
   |-----|-----------------|
   | `Vocab`           | group, sense, tag, note, word, def, example |
   | `Confusables`     | pair, note, word, pos, def |
   | `Collocations`    | group, sense, word, def, example |
   | `WritingLang`     | group, sense, tag, word, def, example |
   | `SpeakingLang`    | group, sense, tag, word, def, example |
   | `ToeicSpeakLang`  | group, sense, tag, word, def, example |
   | `ToeicWriteLang`  | group, sense, tag, word, def, example |

2. **Import the starter data**: in each tab, File → Import → upload the matching
   `content/<bank>.csv` (Replace current sheet). Everything you have now is
   already in there, ready to edit.

3. **Share**: Share → General access → *Anyone with the link* → **Viewer**.

4. Copy the Sheet id from its URL
   (`docs.google.com/spreadsheets/d/`**`THIS_PART`**`/edit`) into
   [`tools/content.config.json`](../tools/content.config.json).

## Everyday editing

1. Edit the Sheet (add rows, fix text). Rows with the **same `group`** (or
   `pair`) become one card, **in row order**. Type punctuation normally
   (`'`, `—`, `…`, `→`) — it renders as-is.
2. Sync + deploy:
   ```bash
   node tools/sync-content.js      # pull the Sheet, validate, rewrite js/data/*
   # review: git diff
   git add -A && git commit -m "content update" && git push
   ```
   `--local` rebuilds from the CSV snapshots instead of the Sheet (for testing).

The script **validates** before writing (every row needs a group/pair and a
word) and refuses to write a half-broken bank.

> Note: sync is one-way (Sheet → app). Don't hand-edit `js/data/*.js` — those
> are generated. To re-snapshot the current app data back to CSV, run
> `node tools/export-content.js`.
