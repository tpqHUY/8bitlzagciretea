/* ============================================================
   toeic.js — TOEIC Listening & Reading content.
   TOEIC = { lc: [parts 1-4], rc: [parts 5-7] }
   Part shape: { id,no,title,alias,meta,blurb, essence,
                 format:[{k,v}], tips:[{t,ex}], traps:[{n,d,ex}] }
     format  -> the "Format" tab (spec sheet + essence)
     tips    -> the "Strategy" tab (ol.steps)
     traps   -> the "Traps" tab (ul.traps)
   ============================================================ */

const TOEIC = {

  /* ==================== LISTENING (Parts 1-4) ==================== */
  lc: [
    {
      id: "lc-p1", no: "P1", title: "Photographs", alias: "describe the picture", meta: "6 questions",
      blurb: "You see one photo and hear four statements (A&ndash;D) spoken once. Choose the statement that best describes the picture.",
      essence: "A literal-listening test: the correct option matches what is <b>actually visible</b> &mdash; the right subject, action and place. No reading; the four choices are audio only.",
      format: [
        { k: "Questions", v: "6 (the easiest part)" },
        { k: "Audio", v: "4 short statements per photo, spoken once" },
        { k: "On the page", v: "the photo only &mdash; choices are not printed" },
        { k: "Tests", v: "vocabulary for people&rsquo;s actions, objects, and locations" }
      ],
      types: [
        { name: "Office / meeting", ex: "people typing, reviewing papers, seated around a table, giving a presentation." },
        { name: "Factory / warehouse", ex: "loading boxes, operating a machine, wearing hard hats, goods stacked on shelves." },
        { name: "Street / transport", ex: "pedestrians crossing, vehicles parked in a row, a road under construction." },
        { name: "Store / restaurant", ex: "a customer browsing, a server pouring water, merchandise on display." },
        { name: "1-person vs no-person", ex: "one person &rarr; expect &lsquo;He/She is V-ing&rsquo;; empty scene &rarr; expect &lsquo;there is/are&rsquo; or a passive state." },
        { name: "Statement grammar", ex: "present continuous (action) · &lsquo;is being + pp&rsquo; (action on an object) · &lsquo;has been + pp&rsquo; (finished state)." }
      ],
      tips: [
        { t: "<b>Study the photo before the audio starts.</b> Ask: who? what action? where?", ex: ["Pre-load likely words: a worker, a desk, holding, leaning, on the wall.", "Decide first: is this about <em>people</em> or about the <em>scene</em>?"] },
        { t: "Decide if it is a <b>people photo</b> (focus on actions) or a <b>scene/object photo</b> (focus on location/state).", ex: ["People &rarr; &lsquo;She is typing&rsquo;. Objects &rarr; &lsquo;Chairs are arranged in rows&rsquo;.", "A crowd &rarr; listen for &lsquo;they are&hellip;&rsquo;; an empty room &rarr; &lsquo;there is/are&hellip;&rsquo;."] },
        { t: "Hold all four in mind and <b>eliminate</b> as you hear each one; keep the last one standing.", ex: ["A (no &mdash; wrong action) &middot; B (no &mdash; not shown) &middot; C (yes) &middot; D (no) &rarr; mark C.", "Don&rsquo;t wait for a &lsquo;perfect&rsquo; option &mdash; keep the only one with no error."] },
        { t: "Match the <b>verb tense and subject</b> exactly to the image.", ex: ["&lsquo;is being loaded&rsquo; (in progress) vs &lsquo;has been loaded&rsquo; (already done).", "Check the subject too: &lsquo;The men are&hellip;&rsquo; is wrong if only one person is shown."] }
      ],
      traps: [
        { n: "Similar sounds.", d: "A wrong option swaps in a word that sounds like a right one.", ex: ["&lsquo;working&rsquo; vs &lsquo;walking&rsquo;, &lsquo;copy&rsquo; vs &lsquo;coffee&rsquo;.", "&lsquo;writing&rsquo; vs &lsquo;riding&rsquo;, &lsquo;glasses&rsquo; vs &lsquo;glass&rsquo;."] },
        { n: "Right object, wrong action.", d: "The noun is in the photo but the verb describes something not happening.", ex: ["There is a car, but no one &lsquo;is washing&rsquo; it.", "A laptop sits on the desk, but nobody &lsquo;is using&rsquo; it."] },
        { n: "Active vs passive state.", d: "&lsquo;is being painted&rsquo; needs a person painting now; &lsquo;has been painted&rsquo; just needs paint.", ex: ["A finished wall &rarr; &lsquo;has been painted&rsquo; (right); &lsquo;is being painted&rsquo; with no painter is the trap.", "Stocked shelves &rarr; &lsquo;are stocked&rsquo;, not &lsquo;are being stocked&rsquo;."] },
        { n: "Plausible but not shown.", d: "A reasonable real-world guess the photo doesn&rsquo;t actually depict.", ex: ["Reject anything you cannot see.", "A kitchen photo &ne; &lsquo;they are cooking&rsquo; unless someone is actually cooking."] }
      ]
    },
    {
      id: "lc-p2", no: "P2", title: "Question&ndash;Response", alias: "pick the reply", meta: "25 questions",
      blurb: "You hear a question or statement followed by three responses (A&ndash;C), spoken once. Choose the most logical response. Nothing is printed.",
      essence: "Tests whether you catch the <b>question type</b> and choose a natural reply. The <b>first word</b> usually decides everything; it is pure listening with no text to fall back on.",
      format: [
        { k: "Questions", v: "25 (the most numerous LC part)" },
        { k: "Audio", v: "a prompt + 3 responses, spoken once" },
        { k: "On the page", v: "nothing at all" },
        { k: "Tests", v: "WH- vs Yes/No vs tag questions, and indirect replies" }
      ],
      types: [
        { name: "WH- question", ex: "&lsquo;Where&rsquo;s the meeting?&rsquo; &rarr; a place; a Yes/No reply is impossible." },
        { name: "Yes/No question", ex: "&lsquo;Has the order shipped?&rsquo; &rarr; Yes/No, or an indirect &lsquo;I&rsquo;ll check.&rsquo;" },
        { name: "Tag question", ex: "&lsquo;You&rsquo;ve met Sara, haven&rsquo;t you?&rsquo; &rarr; confirm or deny." },
        { name: "Negative question", ex: "&lsquo;Isn&rsquo;t the office closed today?&rsquo; &rarr; answer the fact; ignore the &lsquo;not&rsquo;." },
        { name: "Choice / alternative", ex: "&lsquo;Monday or Tuesday?&rsquo; &rarr; pick one, or &lsquo;Either works for me.&rsquo;" },
        { name: "Request / offer / suggestion", ex: "&lsquo;Could you send the file?&rsquo; &rarr; &lsquo;Sure, right away.&rsquo;" },
        { name: "Statement (not a question)", ex: "&lsquo;The printer&rsquo;s out of ink.&rsquo; &rarr; offer help or react." },
        { name: "Indirect / embedded", ex: "&lsquo;Do you know when it opens?&rsquo; &rarr; the time, or &lsquo;Let me find out.&rsquo;" }
      ],
      tips: [
        { t: "<b>Lock onto the first word</b> (Who / Where / When / Why / How / Do / Are / Have&hellip;).", ex: ["It tells you what kind of answer is even possible.", "&lsquo;Who&rsquo; &rarr; a person; &lsquo;How long&rsquo; &rarr; a duration; &lsquo;Whose&rsquo; &rarr; an owner."] },
        { t: "A <b>WH- question cannot</b> be answered &lsquo;Yes / No&rsquo; &mdash; eliminate those instantly.", ex: ["&lsquo;Where is the report?&rsquo; &rarr; &lsquo;Yes, I did&rsquo; is impossible.", "&lsquo;When does it close?&rsquo; &rarr; cross off any &lsquo;No, &hellip;&rsquo; at once."] },
        { t: "Expect <b>indirect answers</b> &mdash; they are often correct.", ex: ["&lsquo;When does it start?&rsquo; &rarr; &lsquo;I&rsquo;ll check the schedule.&rsquo;", "&lsquo;Who&rsquo;s leading it?&rsquo; &rarr; &lsquo;Hasn&rsquo;t it been decided yet?&rsquo;", "&lsquo;Where&rsquo;s Mr Lee?&rsquo; &rarr; &lsquo;He called in sick.&rsquo;"] },
        { t: "For statements / tag questions, look for <b>agreement or a relevant reaction</b>.", ex: ["&lsquo;This room is cold.&rsquo; &rarr; &lsquo;I&rsquo;ll turn up the heating.&rsquo;", "&lsquo;The meeting went well, didn&rsquo;t it?&rsquo; &rarr; &lsquo;Yes, better than expected.&rsquo;"] }
      ],
      traps: [
        { n: "Repeated-word trap.", d: "A response echoes a word from the prompt &mdash; almost always wrong.", ex: ["&lsquo;Did you finish the report?&rsquo; &rarr; &lsquo;The report is on the desk&rsquo; (related, doesn&rsquo;t answer).", "&lsquo;When&rsquo;s the flight?&rsquo; &rarr; &lsquo;The flight was great&rsquo; (echoes &lsquo;flight&rsquo;, ignores &lsquo;when&rsquo;)."] },
        { n: "Similar-sounding word.", d: "A near-homophone planted to mislead.", ex: ["&lsquo;fare&rsquo; vs &lsquo;fair&rsquo;, &lsquo;leave&rsquo; vs &lsquo;live&rsquo;.", "&lsquo;cost&rsquo; vs &lsquo;coast&rsquo;, &lsquo;quite&rsquo; vs &lsquo;quiet&rsquo;."] },
        { n: "Yes/No to a WH- question.", d: "Grammatically impossible &mdash; a quick elimination.", ex: ["&lsquo;Where&rsquo;s the manager?&rsquo; &rarr; &lsquo;Yes, this morning&rsquo; is impossible; &lsquo;In her office&rsquo; is right.", "&lsquo;Why was it cancelled?&rsquo; &rarr; &lsquo;No, it wasn&rsquo;t&rsquo; cannot answer &lsquo;why&rsquo;."] },
        { n: "Right topic, wrong response.", d: "On the same subject but not a logical reply to the actual question.", ex: ["&lsquo;How was the trip?&rsquo; &rarr; &lsquo;Next Monday&rsquo; (answers &lsquo;when&rsquo;, not &lsquo;how&rsquo;).", "&lsquo;Who ordered lunch?&rsquo; &rarr; &lsquo;At the new café&rsquo; (answers &lsquo;where&rsquo;)."] }
      ]
    },
    {
      id: "lc-p3", no: "P3", title: "Conversations", alias: "2&ndash;3 speakers", meta: "39 questions · 13 sets",
      blurb: "You hear a conversation between 2&ndash;3 people and answer three printed questions (with four options each). Some sets include a visual/graphic.",
      essence: "Tests gist, specific detail, inference and <b>speaker intent</b>. The questions are printed, so the real skill is <b>reading ahead</b> and knowing what to listen for &mdash; the audio plays once.",
      format: [
        { k: "Questions", v: "39 &mdash; 13 conversations, 3 questions each" },
        { k: "Speakers", v: "2 or 3 (watch for three-person sets)" },
        { k: "Graphics", v: "some sets show a table / map / schedule" },
        { k: "On the page", v: "the 3 questions + options (+ any graphic)" }
      ],
      types: [
        { name: "Topic / gist", ex: "&lsquo;What are the speakers mainly discussing?&rsquo;" },
        { name: "Purpose", ex: "&lsquo;Why is the man calling?&rsquo;" },
        { name: "Speaker / place", ex: "&lsquo;Where do the speakers most likely work?&rsquo;" },
        { name: "Specific detail", ex: "&lsquo;What time will the delivery arrive?&rsquo;" },
        { name: "Inference", ex: "&lsquo;What is suggested about the new policy?&rsquo;" },
        { name: "Intent (why say)", ex: "&lsquo;Why does the woman say, &ldquo;That&rsquo;s a tall order&rdquo;?&rsquo;" },
        { name: "Next action", ex: "&lsquo;What will the man probably do next?&rsquo;" },
        { name: "Graphic-linked", ex: "&lsquo;Look at the graphic. Which room will they use?&rsquo;" },
        { name: "Scenarios", ex: "two colleagues, a customer&ndash;service call, a three-person discussion, or a set with a chart." }
      ],
      tips: [
        { t: "<b>Read the three questions before the audio</b> and predict what to listen for.", ex: ["Underline keywords: &lsquo;Why is the man calling?&rsquo;, &lsquo;What will the woman do next?&rsquo;", "Spot the type so you know to listen for a reason, a time or a plan."] },
        { t: "Questions follow the <b>conversation order</b> (Q1 = early, Q3 = late).", ex: ["Q1 &lsquo;What is the problem?&rsquo; (start) &rarr; Q3 &lsquo;What will the man do next?&rsquo; (end).", "Once you hear the Q2 answer, the Q1 answer has already passed &mdash; don&rsquo;t backtrack."] },
        { t: "Track <b>who says what</b> &mdash; detail is often attributed to a specific speaker.", ex: ["Three-speaker sets love &lsquo;What does the second man suggest?&rsquo;", "Note role/gender: &lsquo;the woman&rsquo;, &lsquo;the receptionist&rsquo;, &lsquo;the second speaker&rsquo;."] },
        { t: "For graphic questions, the answer <b>links the audio to the visual</b> &mdash; don&rsquo;t just read the chart.", ex: ["Audio: &lsquo;the 2 p.m. session&rsquo; &rarr; look up its room on the schedule.", "The audio gives the <em>other</em> column (price, day, gate) &mdash; never the answer word itself."] }
      ],
      traps: [
        { n: "Detail-swap distractor.", d: "A choice uses real words from the audio but the wrong number, time or place.", ex: ["Audio: &lsquo;the order ships Friday&rsquo; &rarr; trap says &lsquo;Thursday&rsquo;.", "Audio: &lsquo;Room 305&rsquo; &rarr; trap says &lsquo;Room 350&rsquo;."] },
        { n: "Misattributed speaker.", d: "Something the woman said is offered as the man&rsquo;s view.", ex: ["The woman booked the room, but a choice credits &lsquo;the man&rsquo;.", "The client &mdash; not the manager &mdash; asked for the refund."] },
        { n: "Mentioned-but-not-asked.", d: "True in the conversation but not the answer to this question.", ex: ["They discuss price and a deadline; the question asks only about the deadline.", "A place is named in passing, but the question wants the reason for the call."] },
        { n: "Intent questions.", d: "&lsquo;Why does she say &hellip;?&rsquo; needs the context/feeling, not the literal meaning.", ex: ["&lsquo;That&rsquo;s great&rsquo; can be genuine or sarcastic depending on context.", "&lsquo;I&rsquo;ve seen the figures&rsquo; may mean &lsquo;you needn&rsquo;t explain&rsquo;, not the literal sense."] }
      ]
    },
    {
      id: "lc-p4", no: "P4", title: "Talks", alias: "one speaker", meta: "30 questions · 10 sets",
      blurb: "You hear a short monologue &mdash; an announcement, voicemail, broadcast, ad or speech &mdash; and answer three printed questions. Some include a graphic.",
      essence: "Like Part 3 but a <b>single speaker</b>. The opening lines reveal who is talking, to whom and where &mdash; identify the talk type fast and read the questions ahead.",
      format: [
        { k: "Questions", v: "30 &mdash; 10 talks, 3 questions each" },
        { k: "Speaker", v: "one (announcement, voicemail, news, advert, tour&hellip;)" },
        { k: "Graphics", v: "some talks show a visual" },
        { k: "On the page", v: "the 3 questions + options (+ any graphic)" }
      ],
      types: [
        { name: "Announcement", ex: "airport / station / store PA: &lsquo;Attention passengers&hellip;&rsquo;" },
        { name: "Voicemail / phone message", ex: "&lsquo;Hi, this is Tom from&hellip; I&rsquo;m calling about&hellip;&rsquo;" },
        { name: "Broadcast", ex: "a radio news, weather or traffic report." },
        { name: "Advertisement", ex: "&lsquo;Visit us this weekend for&hellip;&rsquo; promoting a product or service." },
        { name: "Tour / guided talk", ex: "&lsquo;Welcome to&hellip; On your left you&rsquo;ll see&hellip;&rsquo;" },
        { name: "Meeting excerpt", ex: "a manager briefing staff on a change or plan." },
        { name: "Speaker introduction", ex: "&lsquo;It&rsquo;s my pleasure to introduce&hellip;&rsquo; at an event." },
        { name: "Instructions / training", ex: "how to use a machine or follow a procedure." }
      ],
      tips: [
        { t: "<b>Identify the talk type from the first sentence</b> (speaker, audience, place).", ex: ["&lsquo;Attention shoppers&hellip;&rsquo; = store announcement; &lsquo;You&rsquo;ve reached&hellip;&rsquo; = voicemail.", "&lsquo;Welcome aboard&hellip;&rsquo; = transport; &lsquo;Thank you all for coming&hellip;&rsquo; = a speech."] },
        { t: "Read the questions first; the <b>first</b> is often purpose/speaker/location.", ex: ["&lsquo;Where would this be heard?&rsquo;, &lsquo;Who is the speaker?&rsquo;", "&lsquo;What is the purpose?&rsquo; &rarr; usually answered in the first 1&ndash;2 lines."] },
        { t: "The <b>last</b> question is often &lsquo;what will happen next&rsquo; or &lsquo;what are listeners asked to do&rsquo;.", ex: ["Listen for the closing instruction or call to action.", "&lsquo;Please press 2&hellip;&rsquo;, &lsquo;Visit our website&hellip;&rsquo;, &lsquo;Don&rsquo;t forget to&hellip;&rsquo; at the end."] },
        { t: "Map answers to the talk&rsquo;s order, just like Part 3.", ex: ["Q1 comes from the opening line; Q3 from the closing instruction.", "Detail (Q2) sits in the middle &mdash; the dates, prices and names."] }
      ],
      traps: [
        { n: "Specific-detail distractor.", d: "Right area of the talk, wrong figure / date / name.", ex: ["Talk: &lsquo;the tour starts at 9 a.m.&rsquo; &rarr; trap says &lsquo;10 a.m.&rsquo;", "Talk: &lsquo;a 20% discount&rsquo; &rarr; trap says &lsquo;12%&rsquo;."] },
        { n: "Misread purpose.", d: "A reason that&rsquo;s plausible but not the speaker&rsquo;s actual aim.", ex: ["A sale advert &rarr; trap: &lsquo;to announce a new branch&rsquo;.", "A delay notice &rarr; trap: &lsquo;to apologise for poor service&rsquo;."] },
        { n: "Future-action confusion.", d: "Mixing what already happened with what the speaker says will happen.", ex: ["&lsquo;We have relocated&rsquo; (done) vs &lsquo;we will relocate&rsquo; (next) &mdash; a choice swaps them.", "&lsquo;The road was closed&rsquo; (past) vs &lsquo;will be closed&rsquo; (upcoming)."] },
        { n: "Paraphrase mismatch.", d: "The correct answer rewords the talk; a trap reuses its exact words about a side point.", ex: ["Talk: &lsquo;the flight is delayed&rsquo; &rarr; answer &lsquo;the departure is postponed&rsquo;, not the option echoing &lsquo;flight&rsquo;.", "Talk: &lsquo;free parking&rsquo; &rarr; answer &lsquo;parking at no cost&rsquo;."] }
      ]
    }
  ],

  /* ==================== READING (Parts 5-7) ==================== */
  rc: [
    {
      id: "rc-p5", no: "P5", title: "Incomplete Sentences", alias: "grammar & vocab", meta: "30 questions",
      blurb: "A single sentence with one blank; choose the word or phrase (A&ndash;D) that completes it. Pure grammar and vocabulary, no passage.",
      essence: "Sentence-level grammar (word form, tense, prepositions, conjunctions, pronouns) and <b>vocabulary/collocation</b>. The fastest points in Reading &mdash; speed here buys time for Part 7.",
      format: [
        { k: "Questions", v: "30, each a one-sentence item" },
        { k: "Choices", v: "A&ndash;D, a single word or short phrase" },
        { k: "Tests", v: "word form, tense, prepositions, conjunctions, collocation" },
        { k: "Pace", v: "aim ~20&ndash;30 seconds each" }
      ],
      tips: [
        { t: "<b>Look at the options first</b> to tell the question type.", ex: "Forms of one word (succeed / success / successful / successfully) = grammar; four different words = vocabulary." },
        { t: "For grammar items, find the <b>part of speech</b> the blank needs.", ex: "After &lsquo;a/an/the + adjective&rsquo; &rarr; a noun; before a verb &rarr; an adverb." },
        { t: "Use structural clues: <b>subject&ndash;verb agreement, tense markers, parallelism, prepositions</b>.", ex: "&lsquo;every / yesterday / since&rsquo; fix the tense; &lsquo;both&hellip; and&hellip;&rsquo; needs parallel forms." },
        { t: "For vocabulary items, test <b>collocation and meaning</b> in the whole sentence.", ex: "&lsquo;conduct&rsquo; research, &lsquo;meet&rsquo; a deadline, &lsquo;comply with&rsquo; rules." }
      ],
      traps: [
        { n: "Word-form trap.", d: "The right root word in the wrong form.", ex: "&lsquo;a successfully launch&rsquo; (adv) when a noun&rsquo;s slot needs &lsquo;success&rsquo;." },
        { n: "Tempting but ungrammatical.", d: "A word that fits the meaning but not the structure.", ex: "&lsquo;______ it rained, we went&rsquo; needs &lsquo;Although&rsquo; (+ clause), not &lsquo;Despite&rsquo; (+ noun)." },
        { n: "Preposition / phrasal-verb confusion.", d: "&lsquo;result in&rsquo; vs &lsquo;result from&rsquo;, &lsquo;depend on&rsquo;.", ex: "&lsquo;The delay resulted ______ a strike&rsquo; &rarr; &lsquo;from&rsquo;, not &lsquo;in&rsquo;." },
        { n: "&lsquo;Sounds right&rsquo; without checking.", d: "Trust the grammar evidence, not your ear.", ex: "&lsquo;informations&rsquo; sounds fine but is uncountable &rarr; &lsquo;information&rsquo;." }
      ]
    },
    {
      id: "rc-p6", no: "P6", title: "Text Completion", alias: "gaps in a passage", meta: "16 questions · 4 texts",
      blurb: "A short text (email, notice, article) with four blanks &mdash; words, grammar, and one <b>full-sentence</b> insertion. Choose A&ndash;D for each.",
      essence: "Part 5 skills <b>in context</b>: some blanks can only be solved by reading the whole passage &mdash; tense across sentences, cohesion, and an inserted sentence that must fit the logic before and after it.",
      format: [
        { k: "Questions", v: "16 &mdash; 4 texts, 4 blanks each" },
        { k: "Special", v: "one blank per text is a whole-sentence choice" },
        { k: "Tests", v: "grammar + vocabulary + cohesion across sentences" },
        { k: "Texts", v: "emails, memos, notices, short articles" }
      ],
      tips: [
        { t: "<b>Read the whole text</b>, not just the line with the blank &mdash; this is the key difference from Part 5.", ex: "A blank verb&rsquo;s tense can depend on a date mentioned two sentences earlier." },
        { t: "For the <b>sentence-insertion</b>, check what comes before and after.", ex: "Look at pronouns, linkers and topic flow: does &lsquo;However&rsquo; / &lsquo;This&rsquo; fit here?" },
        { t: "Keep <b>tense and time consistent</b> across the passage.", ex: "An email about a past event keeps the past throughout." },
        { t: "Use cohesion devices to choose connectors.", ex: "Contrast &rarr; however / nevertheless; result &rarr; therefore; addition &rarr; moreover." }
      ],
      traps: [
        { n: "Locally fine, globally wrong.", d: "A choice that is grammatical in its own line but breaks the passage&rsquo;s logic.", ex: "&lsquo;However&rsquo; is fine grammar but wrong if the next line continues rather than contrasts." },
        { n: "Sentence-insertion that repeats or contradicts.", d: "It restates known info or clashes with the next line.", ex: "Inserting &lsquo;The store will open soon&rsquo; just before a line that says it is &lsquo;now open&rsquo;." },
        { n: "Context tense error.", d: "Right tense for the sentence alone, wrong for the passage&rsquo;s timeline.", ex: "&lsquo;will ship&rsquo; reads fine, but the email says the order &lsquo;was sent yesterday&rsquo;." },
        { n: "Pronoun with no referent.", d: "An inserted sentence whose &lsquo;they / it / this&rsquo; points to nothing.", ex: "&lsquo;They praised it&rsquo; inserted where no group has been named yet." }
      ]
    },
    {
      id: "rc-p7", no: "P7", title: "Reading Comprehension", alias: "single + multiple passages", meta: "54 questions",
      blurb: "Read texts &mdash; emails, ads, articles, forms, text-message chains, and linked sets of 2&ndash;3 documents &mdash; and answer questions: gist, detail, inference, vocab-in-context, NOT/true, intent and cross-document.",
      essence: "The decisive part: it tests <b>scanning, skimming, inference and synthesis under time pressure</b>. Most test-takers lose points here by running out of time, not by lacking the skill.",
      format: [
        { k: "Questions", v: "54 &mdash; single passages (29) + double/triple sets (25)" },
        { k: "Text types", v: "emails, adverts, articles, forms, chats, multi-document sets" },
        { k: "Question types", v: "gist, detail, inference, vocabulary-in-context, NOT, intent, sentence-insertion, cross-reference" },
        { k: "Pace", v: "leave ~50&ndash;55 min for RC; roughly 1 min per question" }
      ],
      tips: [
        { t: "<b>Read the questions first</b>, then scan the text for the answer&rsquo;s location.", ex: "Single-passage answers tend to follow the text order." },
        { t: "For <b>multiple passages, cross-reference</b> &mdash; the answer often needs info from two documents.", ex: "Doc 1 gives a price; Doc 2 gives a discount &rarr; combine them." },
        { t: "Locate by <b>paraphrase</b>, not the exact word; confirm with the line.", ex: "Question &lsquo;reduce costs&rsquo; &rarr; text &lsquo;cut spending&rsquo;." },
        { t: "<b>Manage time ruthlessly</b>: flag a hard question and move on; never sink 4 minutes into one item.", ex: "Do single passages first if multi-sets slow you down." }
      ],
      traps: [
        { n: "Paraphrase distractor.", d: "An option reuses the passage&rsquo;s words but distorts the meaning; the right one paraphrases.", ex: "Text &lsquo;sales fell&rsquo; &rarr; trap &lsquo;sales rose&rsquo; (reuses &lsquo;sales&rsquo;, flips the meaning)." },
        { n: "NOT / EXCEPT questions.", d: "Invert your reading &mdash; tick the three that ARE stated; the leftover is the answer.", ex: "&lsquo;What is NOT mentioned as a benefit?&rsquo;" },
        { n: "Wrong document.", d: "True information, but found in a different document than the question is about.", ex: "The price sits in the invoice, but the question asks the deadline from the email." },
        { n: "Over-inference.", d: "A reasonable real-world conclusion the text never actually states.", ex: "&lsquo;The CEO will visit&rsquo; does not mean &lsquo;the company is in trouble&rsquo;." },
        { n: "Vocabulary-in-context.", d: "The common meaning of the word is the trap; the passage uses a secondary sense.", ex: "&lsquo;figure&rsquo; = number, not shape, in a report." },
        { n: "The time sink.", d: "One dense triple-passage set can eat the time you need for ten easier questions.", ex: "A triple set with a schedule + two emails can swallow 6&ndash;8 minutes." }
      ]
    }
  ]
};

window.TOEIC = TOEIC;
