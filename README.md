# The Band 8 Reading Casebook

A visual study tool for **IELTS Academic Reading** (target band 8.0). A static, self-contained website — no build step, no dependencies.

## What's inside

- **The Band 8 mindset** — timing strategy and core principles.
- **The paraphrase engine** — the synonym swaps examiners hide answers behind.
- **Hard sentence patterns** — concession, hedging, attribution, qualifiers, etc.
- **The trap taxonomy** — the families of wrong answers, named.
- **Question types (10 case files)** — strategy / traps / patterns per type, in tabs.
- **Synonym banks** — 54 sense-groups, 638 words, each with a definition + example.
- **Easily confused pairs** — 40 look-/sound-alike sets with a one-line discriminator.
- **Academic collocations** — 18 themed groups, 228 phrases, each with meaning + example.

## Study features

- **Focus flashcards** — tap any card to study it word-by-word in a blurred overlay.
- **Spaced repetition** — five levels (12h · 12h · 12h · 1d · 2d) with a red→green signal.
  Learned cards frost over and show a centre **recall %** that counts down 100 → 0; once due
  they "wither" red the longer they wait. "Review due" runs the due cards as a queue.
- **Cambridge pronunciation** — a button (and the **Enter** key) opens the current word on the
  Cambridge dictionary for audio.
- Progress is saved locally (`localStorage`).

## Run it

Just open `index.html` in a browser. An internet connection is used only for the Google
Fonts and the Cambridge dictionary links.

## Project structure

```
index.html        markup + foundation sections
css/styles.css    all styling
js/cases.js       the 10 question-type case files (data)
js/vocab.js       synonym banks (data: word, definition, example)
js/extras.js      easily-confused pairs + collocations (data)
js/main.js        rendering, navigation, tabs, search
js/srs.js         spaced-repetition engine + focus flashcard overlay
```

All content lives in the `js/*.js` data files and re-renders automatically — edit a data
array to add or change material.
