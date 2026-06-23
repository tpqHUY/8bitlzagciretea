/* ============================================================
   cases.js — content for every IELTS Academic Reading question type.
   Edit freely: add steps, traps, or patterns and the page rebuilds.
   Each pattern pair: { q: question wording, p: passage wording, note }
   ============================================================ */

const CASES = [
  {
    id: "tfng",
    no: "01",
    title: "True / False / Not Given",
    alias: "TFNG · facts",
    order: "in order",
    orderClass: "seq",
    blurb: "You decide whether each statement agrees with, contradicts, or is absent from the passage. The whole game is False vs Not Given.",
    steps: [
      { t: "Read the statement and lock onto its <b>claim</b>, not its topic.", ex: "Underline the part that could be true or false — usually a detail, number, or qualifier." },
      { t: "Scan for the statement&rsquo;s <b>location</b> using paraphrased content words.", ex: "Answers run in order, so start after your last answer&rsquo;s line." },
      { t: "Read the licensing sentence (and the one before/after) <b>slowly</b>.", ex: "The verdict often turns on one qualifier — only, may, all, after." },
      { t: "Ask in this order: does the text <b>state the same thing</b> (True) or the <b>opposite</b> (False)?", ex: "" },
      { t: "If neither — the text is silent or only partly overlaps — answer <b>Not Given</b> and move on.", ex: "Do not hunt endlessly; absence is itself the answer." }
    ],
    traps: [
      { n: "False vs Not Given.", d: "False needs a direct contradiction in the text. If you are reasoning &lsquo;this is probably untrue,&rsquo; that&rsquo;s Not Given.", ex: "Statement: &ldquo;X is the largest.&rdquo; Text mentions X but never compares sizes &rarr; Not Given, not False." },
      { n: "The extreme statement.", d: "Statements with all / never / only / the most are often False because the text hedges with some / many / may.", ex: "" },
      { n: "Half-true.", d: "Both halves of the statement must be supported. One unsupported clause makes the whole thing False or Not Given.", ex: "" },
      { n: "Your own knowledge.", d: "A statement can be world-true but Not Given because the passage never says it. Judge only against the text.", ex: "" }
    ],
    patterns: [
      { label: "Negated antonym = False trigger", q: "The reform was popular.", p: "The reform met with widespread resistance.", note: "Opposite meaning &rarr; False." },
      { label: "Silence = Not Given", q: "The author prefers method A to method B.", p: "Both methods are described; no preference is stated.", note: "No comparison made &rarr; Not Given." },
      { label: "Qualifier flip", q: "All migratory birds return to the same site.", p: "Most, but not all, return to their birthplace.", note: "all vs most &rarr; False." }
    ]
  },

  {
    id: "ynng",
    no: "02",
    title: "Yes / No / Not Given",
    alias: "YNNG · views & claims",
    order: "in order",
    orderClass: "seq",
    blurb: "The TFNG of opinions. You judge statements against the writer&rsquo;s views and claims, not against objective facts.",
    steps: [
      { t: "Identify <b>whose</b> opinion the statement is about — almost always the writer&rsquo;s.", ex: "" },
      { t: "Locate the writer&rsquo;s view via paraphrase, watching for <b>opinion verbs</b>.", ex: "argues, claims, doubts, concedes, dismisses, advocates." },
      { t: "Check whether the statement <b>agrees</b> (Yes) or <b>conflicts</b> (No) with that view.", ex: "" },
      { t: "If the writer expresses <b>no view</b> on it, answer <b>Not Given</b>.", ex: "Watch for views the writer reports but does not share." }
    ],
    traps: [
      { n: "Reported vs held view.", d: "&lsquo;Some scholars claim X&rsquo; is not the writer claiming X. If the writer doesn&rsquo;t endorse it, a statement about the writer&rsquo;s belief is Not Given.", ex: "" },
      { n: "Strength of opinion.", d: "&lsquo;The writer is certain&rsquo; vs the text&rsquo;s tentative &lsquo;the writer suspects&rsquo; — a mismatch in conviction is No.", ex: "" },
      { n: "Fact dressed as opinion.", d: "Some statements describe a fact the writer never evaluates. No expressed stance &rarr; Not Given.", ex: "" }
    ],
    patterns: [
      { label: "Concession signals a real view", q: "The writer fully supports nuclear power.", p: "While acknowledging its risks, the author ultimately endorses it.", note: "Net stance = support &rarr; Yes." },
      { label: "Distancing language", q: "The writer believes the policy worked.", p: "Supporters of the policy claim it worked.", note: "Writer reports, not endorses &rarr; Not Given." }
    ]
  },

  {
    id: "headings",
    no: "03",
    title: "Matching Headings",
    alias: "Paragraph main ideas",
    order: "not in order",
    orderClass: "scatter",
    blurb: "Match a heading to each paragraph. Headings test the main idea / gist — not whether a word appears in the paragraph.",
    steps: [
      { t: "Do this set <b>last</b> for the passage if possible — you&rsquo;ll know the paragraphs.", ex: "" },
      { t: "Read the <b>whole paragraph</b> for its central point; note the topic sentence but verify with the body.", ex: "Main idea often sits in sentence 1 or the last sentence." },
      { t: "Summarise the paragraph in <b>your own 4&ndash;5 words</b> before looking at the options.", ex: "This stops the heading list from biasing you." },
      { t: "Match your summary to the closest heading; <b>eliminate</b> headings that fit only a detail.", ex: "" },
      { t: "Cross off used headings; leave the <b>hardest paragraphs</b> until the option list is smaller.", ex: "There are always more headings than paragraphs." }
    ],
    traps: [
      { n: "Detail-not-gist heading.", d: "A heading that matches one sentence in the paragraph but not its overall point. Tempting because the words appear.", ex: "" },
      { n: "Two plausible headings.", d: "Often two headings fit loosely. The right one covers the <em>whole</em> paragraph; the other covers only part.", ex: "" },
      { n: "Keyword overlap.", d: "A heading sharing a noun with the paragraph is bait. Ask what the paragraph is mainly doing, not which words it shares.", ex: "" },
      { n: "Anchoring on paragraph 1.", d: "If you misassign an early paragraph, it cascades. Verify each independently.", ex: "" }
    ],
    patterns: [
      { label: "Gist verbs reveal function", q: "Heading: &lsquo;Reasons for a decline&rsquo;", p: "Paragraph explains why numbers fell — cause language: due to, as a result, owing to.", note: "Match the rhetorical function." },
      { label: "Problem vs solution paragraphs", q: "Heading: &lsquo;An unexpected solution&rsquo;", p: "Para opens with a problem but pivots on however / instead to a fix.", note: "The pivot decides the heading." }
    ]
  },

  {
    id: "info",
    no: "04",
    title: "Matching Information",
    alias: "Which paragraph contains&hellip;",
    order: "not in order",
    orderClass: "scatter",
    blurb: "Find which paragraph contains a specific piece of information (an example, a reason, a comparison). Information can be anywhere; paragraphs may be used more than once or not at all.",
    steps: [
      { t: "Read the prompt and note the <b>type</b> of information sought.", ex: "an example, a definition, a contrast, a cause, a prediction." },
      { t: "Scan paragraphs for that <b>function</b>, not just topic words.", ex: "&lsquo;An example of&rsquo; &rarr; look for for instance, such as, e.g." },
      { t: "Confirm the paragraph genuinely <b>contains</b> the information, not just the topic.", ex: "" },
      { t: "Do these <b>after</b> heading/global questions — they&rsquo;re slow and out of order.", ex: "Budget tightly; don&rsquo;t re-read whole paragraphs repeatedly." }
    ],
    traps: [
      { n: "Topic vs information.", d: "A paragraph about the topic may not contain the specific information described. Match the thing asked for, exactly.", ex: "" },
      { n: "Re-use confusion.", d: "Unless told &lsquo;you may use any letter once,&rsquo; a paragraph can answer several prompts — don&rsquo;t cross paragraphs off.", ex: "" },
      { n: "Time sink.", d: "These don&rsquo;t follow passage order, so they reward broad familiarity. Hunting blindly burns your clock.", ex: "" }
    ],
    patterns: [
      { label: "Function words flag the answer", q: "Prompt: &lsquo;a comparison between two periods&rsquo;", p: "Text: &lsquo;whereas in the 1970s &hellip;, by 2010 &hellip;&rsquo;", note: "whereas / by contrast = comparison." },
      { label: "Definition vs example", q: "Prompt: &lsquo;a definition of a term&rsquo;", p: "Text: &lsquo;X, that is, the process by which &hellip;&rsquo;", note: "that is / refers to = definition, not example." }
    ]
  },

  {
    id: "features",
    no: "05",
    title: "Matching Features",
    alias: "Match items to a list",
    order: "loosely ordered",
    orderClass: "scatter",
    blurb: "Match statements to a set of options — people, theories, periods, places. Options can be used more than once or not at all.",
    steps: [
      { t: "Underline the <b>features</b> (the named people/categories) in the passage first.", ex: "Build a mini-map of where each option lives." },
      { t: "Take each statement and find which feature the text <b>links</b> it to.", ex: "" },
      { t: "Match on <b>meaning</b>, since the statement paraphrases what the text says about that feature.", ex: "" },
      { t: "Verify the <b>attribution</b> — that this view/trait belongs to that exact option.", ex: "Two researchers may hold contrasting views in adjacent lines." }
    ],
    traps: [
      { n: "Adjacent-name confusion.", d: "When two names sit close together, it&rsquo;s easy to attach a claim to the wrong one. Pin the subject of the verb.", ex: "&lsquo;Unlike Brown, Lee argued &hellip;&rsquo; — the claim is Lee&rsquo;s." },
      { n: "Shared trait.", d: "If a feature can be used more than once, don&rsquo;t assume one statement per option.", ex: "" },
      { n: "The decoy option.", d: "Some options are never used. Don&rsquo;t force a match just to use every letter.", ex: "" }
    ],
    patterns: [
      { label: "Contrast separates two people", q: "Statement &lsquo;believed climate was the main cause&rsquo; &rarr; ?", p: "&lsquo;Whereas Patel stressed economics, Okoro pointed to climate.&rsquo;", note: "The claim belongs to Okoro." },
      { label: "Anaphora hides the subject", q: "Whose view is &lsquo;this&rsquo;?", p: "&lsquo;Marsh proposed the model. This was later disputed by &hellip;&rsquo;", note: "Track what &lsquo;this / the latter&rsquo; refers back to." }
    ]
  },

  {
    id: "endings",
    no: "06",
    title: "Matching Sentence Endings",
    alias: "Complete the sentence",
    order: "in order",
    orderClass: "seq",
    blurb: "Join each sentence beginning to the correct ending from a list. Both meaning and grammar must fit. More endings than beginnings.",
    steps: [
      { t: "Read the sentence <b>beginning</b> and predict what kind of ending it needs.", ex: "a reason? a result? a date? a noun phrase?" },
      { t: "Locate the matching content in the passage; the beginnings <b>run in order</b>.", ex: "" },
      { t: "Choose the ending that is both <b>true to the text and grammatically fits</b>.", ex: "Read the whole combined sentence aloud in your head." },
      { t: "Eliminate endings that are true but <b>don&rsquo;t connect</b> to this beginning.", ex: "" }
    ],
    traps: [
      { n: "Grammatically smooth, factually wrong.", d: "An ending can fit the grammar perfectly yet state something the text doesn&rsquo;t support.", ex: "" },
      { n: "True-but-unrelated ending.", d: "Several endings may be true statements; only one completes <em>this</em> beginning per the text.", ex: "" },
      { n: "Order drift.", d: "Beginnings follow the passage. If your matches jump backwards, re-check.", ex: "" }
    ],
    patterns: [
      { label: "Beginning predicts grammar", q: "&lsquo;The experiment failed because &hellip;&rsquo;", p: "needs a cause clause, not a noun.", note: "because &rarr; reason ending only." },
      { label: "Result vs reason", q: "&lsquo;Funding was cut, so &hellip;&rsquo;", p: "needs a consequence.", note: "so / therefore &rarr; result ending." }
    ]
  },

  {
    id: "mcq",
    no: "07",
    title: "Multiple Choice",
    alias: "MCQ · single & multi-answer",
    order: "in order",
    orderClass: "seq",
    blurb: "Choose A&ndash;D (or several from a longer list). The slowest, most distractor-heavy type — where band 8 is won or lost.",
    steps: [
      { t: "Read the <b>stem</b> first and turn it into a question in your head.", ex: "Cover the options so they don&rsquo;t bias your search." },
      { t: "Locate the relevant text; MCQs <b>run in order</b> through the passage.", ex: "" },
      { t: "Form your <b>own answer</b> from the text before reading the options.", ex: "" },
      { t: "Eliminate by <b>fault</b>: too extreme, partly false, out of scope, true-but-not-asked.", ex: "Name the flaw in each wrong option — it confirms the right one." },
      { t: "For &lsquo;choose TWO/THREE&rsquo;, treat each option as its own TFNG against the text.", ex: "" }
    ],
    traps: [
      { n: "True but doesn&rsquo;t answer the stem.", d: "An option can be a true statement from the passage yet not answer the question asked. Re-read the stem.", ex: "" },
      { n: "The verbatim lure.", d: "The option reusing the passage&rsquo;s exact words is often the trap; the correct one paraphrases.", ex: "" },
      { n: "Half-right.", d: "One clause supported, one not. Reject any option with an unsupported part.", ex: "" },
      { n: "Extreme wording.", d: "always / only / proves / never rarely survive against a hedged text.", ex: "" }
    ],
    patterns: [
      { label: "Right answer paraphrases", q: "Stem asks the main reason for X.", p: "Text gives the reason in fresh words; the trap option quotes the passage but about a side point.", note: "Meaning-match beats word-match." },
      { label: "Scope check", q: "Option: &lsquo;the method always works.&rsquo;", p: "Text: &lsquo;the method usually succeeds.&rsquo;", note: "always vs usually &rarr; reject." }
    ]
  },

  {
    id: "sentence",
    no: "08",
    title: "Sentence Completion",
    alias: "Fill from the passage",
    order: "in order",
    orderClass: "seq",
    blurb: "Complete sentences using words taken from the passage, within a strict word limit (e.g. NO MORE THAN TWO WORDS).",
    steps: [
      { t: "Read the <b>word limit</b> and obey it absolutely.", ex: "&lsquo;ONE WORD ONLY&rsquo; means a two-word answer scores zero — even if correct in meaning." },
      { t: "Predict the <b>part of speech / type</b> the gap needs.", ex: "noun? a number? a material? a verb?" },
      { t: "Locate the paraphrased sentence and lift the <b>exact word(s)</b> from the text.", ex: "Spelling must be exact; copy carefully." },
      { t: "Re-read the completed sentence to confirm it&rsquo;s <b>grammatical and true</b>.", ex: "" }
    ],
    traps: [
      { n: "Word-limit violation.", d: "The single most common avoidable error. Hyphenated words usually count as one; numbers written as figures count as one word.", ex: "" },
      { n: "Form change needed?", d: "Usually you copy words unchanged. If the grammar demands a change, the answer is likely elsewhere — IELTS prefers exact lifts.", ex: "" },
      { n: "Right meaning, wrong words.", d: "You must use words from the passage, not synonyms of your own.", ex: "" },
      { n: "Spelling.", d: "A misspelled transferred word is marked wrong. Copy letter by letter.", ex: "" }
    ],
    patterns: [
      { label: "Gap signals the type", q: "&lsquo;The bridge is made of ______.&rsquo;", p: "Scan for a material noun near the paraphrase.", note: "Predict the slot before searching." },
      { label: "Paraphrased frame, lifted answer", q: "&lsquo;Costs rose because of ______.&rsquo;", p: "Text: &lsquo;the increase stemmed from rising fuel prices.&rsquo;", note: "Frame paraphrased; answer = &lsquo;fuel prices&rsquo;." }
    ]
  },

  {
    id: "summary",
    no: "09",
    title: "Summary / Note / Table / Flow-chart",
    alias: "Completion grids",
    order: "in order (per section)",
    orderClass: "seq",
    blurb: "Fill gaps in a condensed version of part of the passage — prose summary, notes, a table, or a flow-chart. Either lift words or pick from a box of options.",
    steps: [
      { t: "Check whether you <b>lift from the passage</b> or <b>choose from a list</b> — the rules differ.", ex: "A word box means no word limit issue, but more synonym distractors." },
      { t: "Identify which <b>part of the passage</b> the summary covers; it&rsquo;s usually one section.", ex: "Summaries rarely span the whole text." },
      { t: "Predict each gap&rsquo;s <b>word type</b> from the surrounding grammar.", ex: "" },
      { t: "For flow-charts, follow the <b>process order</b>; for tables, read column + row headers as the key.", ex: "" },
      { t: "If using a word box, do the <b>easy gaps first</b> to shrink the option pool.", ex: "" }
    ],
    traps: [
      { n: "Word-box synonyms.", d: "The box often contains near-synonyms of the right word designed to mislead. Match the precise meaning the gap needs.", ex: "" },
      { n: "Summary is paraphrased.", d: "The summary won&rsquo;t use the passage&rsquo;s wording around the gap, so keyword-hunting fails. Track meaning.", ex: "" },
      { n: "Grammar mismatch.", d: "The lifted word must fit the summary&rsquo;s grammar — singular/plural, verb form.", ex: "" },
      { n: "Wrong section.", d: "Answers come from the relevant section only; a matching word elsewhere is a decoy.", ex: "" }
    ],
    patterns: [
      { label: "Header is the search key (tables)", q: "Row &lsquo;Cost&rsquo;, Column &lsquo;2020&rsquo; &rarr; ?", p: "Find where the text states the 2020 cost.", note: "Intersect the two labels." },
      { label: "Process verbs (flow-charts)", q: "&lsquo;The mixture is then ______.&rsquo;", p: "Text: &lsquo;next, the solution is heated.&rsquo;", note: "next / then / finally map the steps." }
    ]
  },

  {
    id: "diagram",
    no: "10",
    title: "Diagram Label Completion",
    alias: "Label the figure",
    order: "by diagram",
    orderClass: "scatter",
    blurb: "Label parts of a diagram (a machine, a process, an organism) with words from the passage, within a word limit.",
    steps: [
      { t: "Study the diagram and read the <b>labels already given</b> to orient yourself.", ex: "They anchor you to the right section of text." },
      { t: "Find the passage section that <b>describes the diagram</b> — usually one dense paragraph.", ex: "" },
      { t: "Use <b>spatial / positional language</b> in the text to map words to parts.", ex: "above, beneath, attached to, surrounds, at the base." },
      { t: "Lift the exact words within the <b>word limit</b> and check spelling.", ex: "" }
    ],
    traps: [
      { n: "Position words misread.", d: "Mixing up &lsquo;above/below&rsquo; or &lsquo;inner/outer&rsquo; assigns the right word to the wrong part.", ex: "" },
      { n: "Technical noun distractors.", d: "The paragraph names several parts; only some are labelled. Match the description, not the first noun you see.", ex: "" },
      { n: "Word limit & spelling.", d: "Same discipline as sentence completion — exact words, exact spelling, within the cap.", ex: "" }
    ],
    patterns: [
      { label: "Spatial mapping", q: "Label the part &lsquo;at the top&rsquo;.", p: "Text: &lsquo;the uppermost chamber, known as the ______.&rsquo;", note: "uppermost = top of the diagram." },
      { label: "Function describes the part", q: "Label the component that filters water.", p: "Text: &lsquo;the membrane removes impurities.&rsquo;", note: "Match by function &rarr; membrane." }
    ]
  }
];

/* Top-level `const` does not attach to window; expose it explicitly so main.js can read it. */
window.CASES = CASES;
