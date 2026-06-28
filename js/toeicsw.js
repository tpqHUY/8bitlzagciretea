/* ============================================================
   toeicsw.js — TOEIC Speaking & Writing (the S&W test, 0–200).
   TOEIC_SP / TOEIC_WR = { principles, criteria, techniques,
                           structures, tasks[], practice, mistakes }
   TSPLANG / TWRLANG    = language-bank groups (items {w,d,x}).
   task shape: { id,no,title,alias,meta,blurb, steps[], blueprint[], pitfalls[] }
     steps     -> { t, ex }        (Approach tab)
     blueprint -> { part, detail } (Structure tab)
     pitfalls  -> { n, d, ex }     (Pitfalls tab)
   ============================================================ */

/* ====================================================================
   TOEIC SPEAKING — 11 questions · ~20 min · 0–200 (8 levels)
   ==================================================================== */
const TOEIC_SP = {

  principles: [
    { n: "TS-01", h: "You talk to a machine", p: "There is no examiner to react to &mdash; you speak into a microphone on a <b>strict timer</b>, and the recording is scored by AI plus human raters. Treat the clock, not a person, as your audience: start speaking the instant the beep sounds." },
    { n: "TS-02", h: "Completeness beats polish", p: "Filling the full response time with <b>relevant</b> content scores higher than a short, &lsquo;perfect&rsquo; answer that stops early. Keep going until time runs out &mdash; an unfinished or half-empty answer caps the task score." },
    { n: "TS-03", h: "Three things are scored", p: "Every task is rated on <b>delivery</b> (pronunciation, intonation, stress), <b>language use</b> (grammar, vocabulary) and <b>relevance / completeness</b>. Different tasks weight them differently &mdash; read-aloud is all delivery; the opinion is mostly content and language." },
    { n: "TS-04", h: "Templates are allowed &mdash; use them", p: "Unlike IELTS, TOEIC rewards consistent, rehearsed frameworks. Build a fixed routine for picture description and the opinion answer, drill it, and slot in the specifics on the day. A reliable skeleton frees your attention for delivery." }
  ],

  criteria: [
    {
      code: "DELIVERY", pct: "all tasks",
      name: "Pronunciation &amp; delivery",
      intro: "How clear and natural you sound: individual sounds, word and sentence stress, intonation, and a steady pace.",
      b6: "Generally intelligible but word endings (-ed, -s) and stress are often off; flat or unnatural intonation; pace either rushed or halting, forcing the listener to work.",
      b8: "Highly intelligible throughout; accurate sounds and stress, natural rise-and-fall intonation, and a steady, confident pace. Accent does not get in the way."
    },
    {
      code: "LANGUAGE", pct: "Q3&ndash;11",
      name: "Grammar &amp; vocabulary",
      intro: "Accuracy and range of structures and words, used appropriately for the task and topic.",
      b6: "Basic structures with frequent errors under time pressure; limited, repetitive vocabulary; meaning occasionally unclear.",
      b8: "A range of structures used accurately; precise, varied, topic-appropriate vocabulary; errors are minor and rare."
    },
    {
      code: "COHESION", pct: "Q5&ndash;11",
      name: "Cohesion &amp; coherence",
      intro: "Whether ideas are organised and connected so the answer flows logically from start to finish.",
      b6: "Ideas listed with few or repeated connectors (and, so); jumps between points; the answer feels like fragments.",
      b8: "Ideas clearly sequenced and linked with varied connectors; a recognisable opening, development and close even in a 30&ndash;60-second answer."
    },
    {
      code: "RELEVANCE", pct: "Q3&ndash;11",
      name: "Relevance &amp; completeness",
      intro: "Whether your answer actually addresses the prompt and uses the available time fully.",
      b6: "Partly on-topic or too short; misses part of the question; leaves silence before the timer ends.",
      b8: "Fully addresses every part of the prompt with relevant, developed content and uses essentially all of the response time."
    }
  ],

  techniques: [
    { name: "Read aloud in chunks, not word-by-word", crit: "Delivery", ex: ["&lsquo;The new fitness centre / on Main Street / will open / next Monday.&rsquo; &mdash; pause at the slashes.", "Stress the content words: &lsquo;<em>new</em> fitness <em>centre</em>&hellip; <em>open</em>&hellip; <em>Monday</em>.&rsquo;"], why: "Q1&ndash;2 are pure delivery. Reading in sense-groups with stress on the key words sounds natural and lets you control pace; a flat, word-by-word read loses delivery marks even with perfect pronunciation." },
    { name: "Mind intonation on questions and lists", crit: "Delivery", ex: ["List rises then falls: &lsquo;coffee&uarr;, tea&uarr;, and juice&darr;.&rsquo;", "Yes/no question rises: &lsquo;Are you ready to begin&uarr;?&rsquo;"], why: "Read-aloud texts are often ads or announcements full of lists and questions. Correct rising/falling intonation is exactly what the delivery rubric listens for." },
    { name: "Use a fixed picture-description framework", crit: "Cohesion · Relevance", ex: ["Where &rarr; what overall &rarr; foreground &rarr; background &rarr; a detail &rarr; a guess.", "&lsquo;This photo was taken in an office. It looks like a meeting&hellip;&rsquo;"], why: "Q3&ndash;4 give you 45s to prepare and 30s to talk. A memorised order means you never run out of things to say and always fill the time &mdash; the single biggest score-lifter for picture tasks." },
    { name: "Describe with present continuous + there is/are", crit: "Language", ex: ["&lsquo;A man <em>is wearing</em> a suit and <em>is typing</em> on a laptop.&rsquo;", "&lsquo;<em>There are</em> several people sitting around a table.&rsquo;"], why: "Pictures show actions in progress, so present continuous is the natural tense; &lsquo;there is/are&rsquo; lets you list what is present. Getting these two patterns automatic keeps grammar accurate under the clock." },
    { name: "Anchor everything in space", crit: "Language · Cohesion", ex: ["&lsquo;In the foreground&hellip; in the background&hellip; on the left&hellip; next to the window&hellip;&rsquo;"], why: "Prepositions of place organise a picture description and pad it with accurate language. They also move the listener&rsquo;s eye logically through the image, which the cohesion rubric rewards." },
    { name: "Answer directly, then add &mdash; and invent freely", crit: "Relevance", ex: ["Q: &lsquo;How often do you eat out?&rsquo; &rarr; &lsquo;Maybe twice a week, usually on weekends with friends at a local Vietnamese place.&rsquo;"], why: "Q5&ndash;7 have no prep time. Give a direct answer, then extend with details &mdash; and it is completely fine to make them up. The content isn&rsquo;t fact-checked; only language and relevance are scored." },
    { name: "Read the schedule before the questions", crit: "Relevance", ex: ["Scan column headers (time, event, room, speaker) in the 45s reading window.", "Q: &lsquo;What time does the workshop start?&rsquo; &rarr; &lsquo;The workshop starts at 10 a.m. in Room B.&rsquo;"], why: "Q8&ndash;10 give you a table and you must answer questions from it. Knowing where each fact lives before the questions play means you can locate and read it back accurately and confidently." },
    { name: "Restate the question to buy time and frame the answer", crit: "Cohesion", ex: ["Q: &lsquo;Is the keynote in the morning?&rsquo; &rarr; &lsquo;Yes, the keynote is scheduled for 9 a.m., so it is in the morning.&rsquo;"], why: "In Q8&ndash;10 there is no prep per question. Echoing the question gives you a second to find the answer and produces a full, grammatical sentence instead of a bare fact." },
    { name: "Open the opinion with a clear position", crit: "Relevance · Cohesion", ex: ["&lsquo;I believe that working from home is more productive, for two main reasons.&rsquo;"], why: "Q11 gives 45s prep, 60s to speak. State your stance in the first sentence and signal how many reasons are coming &mdash; raters can immediately see a structured, on-topic answer." },
    { name: "Develop the opinion with reason + example", crit: "Cohesion · Language", ex: ["&lsquo;First of all, there are fewer distractions. For example, I finish reports much faster at home.&rsquo;", "&lsquo;Secondly, it saves commuting time, which I spend on family.&rsquo;"], why: "Two developed reasons fill the 60 seconds and show coherence and range. Listing five undeveloped reasons sounds thin; depth beats breadth here too." },
    { name: "Pronounce the endings", crit: "Delivery · Language", ex: ["&lsquo;work<em>ed</em>&rsquo;, &lsquo;need<em>s</em>&rsquo;, &lsquo;meeting<em>s</em>&rsquo; &mdash; don&rsquo;t swallow the final sound.", "&lsquo;He <em>walks</em>&rsquo; not &lsquo;he walk&rsquo;."], why: "Dropped -ed/-s endings hit both delivery and grammar scores at once. They are the most common, most fixable mistake for learners across all the speaking tasks." }
  ],

  structures: [
    { name: "Frame a picture", tag: "Q3-4", frame: "This picture was taken in / at + [place]. It looks like + [situation].", ex: ["This picture was taken in a busy restaurant. It looks like the lunch rush.", "This photo was taken at a train station during rush hour."], use: "Your reliable opening sentence for the picture tasks &mdash; sets the scene and buys you a moment to scan the details." },
    { name: "List what is present", tag: "Q3-4", frame: "There is / are + [noun] + [location].", ex: ["There are several people waiting in line.", "There is a large screen on the back wall."], use: "The simplest way to inventory a picture accurately. Pair it with a location phrase to add cohesion." },
    { name: "Describe an action", tag: "Q3-4", frame: "[Subject] is + [verb-ing] + [object / detail].", ex: ["A woman is presenting to a group of colleagues.", "Two men are shaking hands near the entrance."], use: "Present continuous is the natural tense for a snapshot &mdash; use it for every person or moving object you describe." },
    { name: "Position in the frame", tag: "Q3-4", frame: "In the foreground / background, / On the left / right, + [clause].", ex: ["In the foreground, a chef is preparing food.", "On the right, there are shelves full of books."], use: "Sequences your description so it flows top-to-bottom or front-to-back &mdash; the cohesion the raters want, plus extra accurate language." },
    { name: "Direct answer + extension", tag: "Q5-7", frame: "[Direct answer], + because / and + [detail / reason].", ex: ["Yes, I exercise regularly, mainly because it helps me relax after work.", "I&rsquo;d say the morning, since I&rsquo;m far more focused then."], use: "The two-part shape for the no-prep questions: commit, then fill the time with a freely-invented reason or example." },
    { name: "Quote the schedule", tag: "Q8-10", frame: "According to the schedule, + [event] + [time / place].", ex: ["According to the schedule, the workshop begins at 2 p.m. in Room C.", "Based on the agenda, there are three sessions before lunch."], use: "A confident frame for answering from a table &mdash; signals you&rsquo;ve located the fact and states it in a full sentence." },
    { name: "Correct a wrong assumption", tag: "Q8-10", frame: "Actually, + [correction]. The [item] is + [correct detail], not + [wrong detail].", ex: ["Actually, the meeting is at 3 p.m., not 2 p.m. as you mentioned.", "I&rsquo;m afraid that&rsquo;s not quite right &mdash; the talk is in Room A."], use: "One Q8&ndash;10 question usually contains a deliberate error for you to fix. Have a polite correction frame ready." },
    { name: "State your position", tag: "Q11", frame: "I believe / think that + [opinion], for + [number] main reasons.", ex: ["I believe that students should take a gap year, for two main reasons.", "In my opinion, online shopping is better, mainly for convenience and price."], use: "Your opening line for the opinion task &mdash; clear stance plus a signal of the structure to come." },
    { name: "Sequence reasons", tag: "Q11", frame: "First of all, &hellip; Secondly, &hellip; For example, &hellip;", ex: ["First of all, it saves time. For example, I avoid a one-hour commute.", "Secondly, it&rsquo;s cheaper, since I spend less on transport and lunch."], use: "Transitions that organise the 60-second answer and make each reason easy to follow." },
    { name: "Close the opinion", tag: "Q11", frame: "For these reasons, I (strongly) believe + [restated opinion].", ex: ["For these reasons, I strongly believe remote work is the future.", "That&rsquo;s why I think every student would benefit from a gap year."], use: "A clean wrap-up if time remains &mdash; signals a complete, structured answer to the raters." }
  ],

  tasks: [
    {
      id: "read", no: "1&ndash;2", title: "Read a text aloud", alias: "Questions 1&ndash;2", meta: "45s prep · 45s read",
      blurb: "A short text (an announcement, advertisement or news clip) appears on screen. You get 45 seconds to prepare and 45 to read it aloud. Scored purely on <b>delivery</b> &mdash; pronunciation, intonation, stress and pace.",
      steps: [
        { t: "In the prep time, mark <b>chunks</b> and the words to <b>stress</b>.", ex: "Underline content words; draw a slash where you&rsquo;ll pause." },
        { t: "Read at a <b>steady, unhurried</b> pace &mdash; clarity beats speed.", ex: "Aim to finish with a little time to spare, not to race." },
        { t: "Use <b>intonation</b>: rise on questions and mid-list items, fall to finish.", ex: "&lsquo;&hellip;parking&uarr;, dining&uarr;, and entertainment&darr;.&rsquo;" },
        { t: "Pronounce <b>endings and numbers</b> fully.", ex: "&lsquo;opens&rsquo;, &lsquo;located&rsquo;, &lsquo;at 9:30 a.m.&rsquo;" }
      ],
      blueprint: [
        { part: "Scan", detail: "Read the whole text silently once for meaning and spot hard words / numbers." },
        { part: "Mark", detail: "Chunk into sense-groups and choose the stressed word in each." },
        { part: "Deliver", detail: "Read aloud with steady pace, clear endings and natural rise-and-fall." },
        { part: "Finish clean", detail: "End on a falling tone; don&rsquo;t trail off or speed up at the end." }
      ],
      pitfalls: [
        { n: "Racing through it.", d: "Speeding up to finish blurs your sounds and flattens intonation. A calm pace is clearer and scores better.", ex: ["Nerves make everyone speed up &mdash; consciously slow the first line."] },
        { n: "Monotone delivery.", d: "Reading every word at the same pitch is the most common delivery fault. Move your pitch on questions and lists.", ex: [""] },
        { n: "Stumbling on a hard word.", d: "If you misread a word, keep going &mdash; don&rsquo;t stop or repeat. A smooth read with one slip beats a halting, self-corrected one.", ex: [""] }
      ]
    },
    {
      id: "picture", no: "3&ndash;4", title: "Describe a picture", alias: "Questions 3&ndash;4", meta: "45s prep · 30s talk",
      blurb: "A photograph appears; you describe it for 30 seconds after 45 of prep. Scored on delivery, grammar, vocabulary and how <b>completely</b> you use the time. A fixed framework is everything here.",
      steps: [
        { t: "Open with <b>where</b> the photo was taken and what it shows overall.", ex: "&lsquo;This picture was taken in a park on a sunny day.&rsquo;" },
        { t: "Describe <b>main people / actions</b> with present continuous.", ex: "&lsquo;In the centre, a group of children are playing football.&rsquo;" },
        { t: "Move through the frame with <b>location language</b>.", ex: "&lsquo;In the background&hellip; on the left&hellip; next to&hellip;&rsquo;" },
        { t: "If time remains, add a <b>detail, colour or guess</b>.", ex: "&lsquo;They look like they&rsquo;re enjoying themselves.&rsquo;" }
      ],
      blueprint: [
        { part: "Scene", detail: "Where it is + overall impression (one sentence)." },
        { part: "Main subject", detail: "The most obvious person/action, in present continuous." },
        { part: "Around it", detail: "Two or three more elements, anchored with prepositions of place." },
        { part: "Detail / guess", detail: "Colours, weather, mood, or what might be happening &mdash; to fill the full 30s." }
      ],
      pitfalls: [
        { n: "Running out at 15 seconds.", d: "Stopping early wastes half the score. The framework exists so you always have a next sentence &mdash; add details, colours, guesses.", ex: ["Practise until 30 seconds of speech feels comfortable."] },
        { n: "Wrong tense.", d: "A photo is a moment in progress &mdash; use present continuous (&lsquo;is sitting&rsquo;), not past or future.", ex: [""] },
        { n: "Naming objects with no structure.", d: "&lsquo;Table. Chair. Window.&rsquo; is a list, not a description. Put each in a sentence with a location.", ex: ["&lsquo;There is a table next to the window.&rsquo; not just &lsquo;table&rsquo;."] }
      ]
    },
    {
      id: "respond", no: "5&ndash;7", title: "Respond to questions", alias: "Questions 5&ndash;7", meta: "no prep · 15/15/30s",
      blurb: "An interview-style set of three questions on an everyday topic (e.g. shopping, transport). No preparation time &mdash; you answer 15, 15 and 30 seconds. Scored on delivery, language, relevance and completeness.",
      steps: [
        { t: "Answer the <b>actual question</b> in the first words.", ex: "Q: &lsquo;How do you usually travel to work?&rsquo; &rarr; &lsquo;I usually take the bus.&rsquo;" },
        { t: "<b>Extend</b> to fill the time &mdash; invent details freely.", ex: "&lsquo;&hellip;because it&rsquo;s cheap and drops me right outside the office.&rsquo;" },
        { t: "On the 30-second question, give <b>two points</b>.", ex: "A reason plus an example, or two preferences." },
        { t: "Keep talking until the timer ends; never stop early.", ex: "" }
      ],
      blueprint: [
        { part: "Direct answer", detail: "Respond to exactly what was asked, in one clear sentence." },
        { part: "Reason / detail", detail: "Add why, or a specific (invented) detail &mdash; this fills the 15s answers." },
        { part: "Second point", detail: "For the 30s question, add a second reason or an example." },
        { part: "Round off", detail: "A short closing phrase if you have a second left." }
      ],
      pitfalls: [
        { n: "Freezing because there&rsquo;s no prep.", d: "Have a default shape (answer + reason) ready so you never stall. Start the instant the beep ends.", ex: [""] },
        { n: "One-word answers.", d: "&lsquo;The bus.&rsquo; leaves most of the time empty. Always add a reason or detail to use the seconds.", ex: ["&lsquo;The bus &mdash; it&rsquo;s cheaper than driving and I can read on the way.&rsquo;"] },
        { n: "Over-thinking the truth.", d: "Don&rsquo;t hunt for an honest answer; invent the easiest one to talk about. Only language and relevance count.", ex: [""] }
      ]
    },
    {
      id: "info", no: "8&ndash;10", title: "Respond using information", alias: "Questions 8&ndash;10", meta: "45s to read · 15/15/30s",
      blurb: "You get a schedule, agenda or itinerary and 45 seconds to read it, then answer three questions from it (one usually corrects a wrong assumption). Scored on accuracy of the information and your language.",
      steps: [
        { t: "Use the 45s to <b>map the table</b>: what each column / row holds.", ex: "Note times, events, rooms, names &mdash; where each lives." },
        { t: "<b>Restate</b> the question, then give the fact in a full sentence.", ex: "&lsquo;The afternoon session starts at 2 p.m. in Room B.&rsquo;" },
        { t: "Listen for the <b>correction</b> question and fix the error politely.", ex: "&lsquo;Actually, that talk is on Tuesday, not Monday.&rsquo;" },
        { t: "Read <b>times and numbers</b> precisely and clearly.", ex: "&lsquo;from 9:30 to 11 a.m.&rsquo;" }
      ],
      blueprint: [
        { part: "Read first", detail: "Spend the 45s building a mental map of the table, not memorising it." },
        { part: "Locate", detail: "When a question plays, find the exact cell it points to." },
        { part: "Answer in a sentence", detail: "Restate + state the fact accurately &mdash; not a bare number." },
        { part: "Correct if needed", detail: "For the &lsquo;is it&hellip;?&rsquo; question, confirm or politely correct with the right detail." }
      ],
      pitfalls: [
        { n: "Reading bare facts.", d: "&lsquo;2 p.m.&rsquo; alone is weak. Wrap every answer in a full sentence for the language score.", ex: ["&lsquo;The keynote begins at 2 p.m.&rsquo; not just &lsquo;2 p.m.&rsquo;"] },
        { n: "Missing the correction trap.", d: "One question states something false to test if you catch it. Listen for assumptions that don&rsquo;t match the table.", ex: ["&lsquo;I heard the lunch is at noon&rsquo; &rarr; &lsquo;Actually, lunch is at 1 p.m.&rsquo;"] },
        { n: "Panicking over an unread detail.", d: "If a question hits something you didn&rsquo;t scan, find it calmly &mdash; you can glance at the table while answering.", ex: [""] }
      ]
    },
    {
      id: "opinion", no: "11", title: "Express an opinion", alias: "Question 11", meta: "45s prep · 60s talk",
      blurb: "You hear a question asking your view on a familiar issue (work, education, technology) and speak for 60 seconds after 45 of prep. The highest-weighted task &mdash; scored on language, cohesion, relevance and completeness.",
      steps: [
        { t: "In prep, pick a <b>side</b> and jot <b>two reasons</b> with an example each.", ex: "Choose the side that&rsquo;s easiest to argue, not the &lsquo;right&rsquo; one." },
        { t: "Open with a <b>clear position</b> and signal your structure.", ex: "&lsquo;I believe&hellip;, for two main reasons.&rsquo;" },
        { t: "Develop each reason with a <b>transition + example</b>.", ex: "&lsquo;First of all&hellip; For example&hellip; Secondly&hellip;&rsquo;" },
        { t: "<b>Conclude</b> if time remains; keep talking to 60s.", ex: "&lsquo;For these reasons, I strongly believe&hellip;&rsquo;" }
      ],
      blueprint: [
        { part: "Position", detail: "State your opinion in the first sentence and how many reasons you&rsquo;ll give." },
        { part: "Reason 1", detail: "Topic point + transition + a concrete (invented) example." },
        { part: "Reason 2", detail: "A second, different point developed the same way." },
        { part: "Conclusion", detail: "Restate the position to round off &mdash; fills the last seconds and signals completeness." }
      ],
      pitfalls: [
        { n: "No clear stance.", d: "Sitting on the fence weakens relevance. Commit to one side in the first sentence, even if you can see both.", ex: ["&lsquo;While both have merits, I firmly believe&hellip;&rsquo;"] },
        { n: "Listing reasons without developing them.", d: "Five quick reasons sound thin. Two reasons, each with an example, fill 60 seconds far better.", ex: [""] },
        { n: "Stopping at 40 seconds.", d: "Leaving 20 seconds of silence caps the score. Add another example or restate your view to reach the end.", ex: ["Have a back-pocket &lsquo;Another point worth mentioning is&hellip;&rsquo;"] }
      ]
    }
  ],

  practice: [
    { tag: "Daily · 10 min", name: "Read-aloud shadowing", how: "Take a short announcement or ad, mark the chunks and stress, then read it aloud and record it.", steps: ["Find a 40&ndash;60 word text (news blurb, product ad).", "Mark sense-group pauses and the stressed word in each.", "Record, then compare your intonation and endings to a clear model."], ex: ["Drill rising tone on every list and question.", "Check you pronounce every -ed and -s ending."] },
    { tag: "Daily · 10 min", name: "30-second picture sprints", how: "Open any photo and describe it for exactly 30 seconds using your fixed framework.", steps: ["Set a 30-second timer.", "Run the framework: scene &rarr; main action &rarr; around it &rarr; a guess.", "If you finish early, the fix is more detail, not more pictures."], ex: ["Use random stock photos so you can&rsquo;t pre-plan.", "Force present continuous and two location phrases each time."] },
    { tag: "Daily · 5 min", name: "No-prep Q&amp;A reflex", how: "Answer everyday interview questions cold, with no thinking time, in the answer + reason shape.", steps: ["Pick a random question (transport, food, weekends).", "Answer the instant you read it &mdash; no pause.", "Always tack on a reason or example to fill the time."], ex: ["&lsquo;Do you prefer tea or coffee?&rsquo; &rarr; commit and justify in one breath."] },
    { tag: "2&ndash;3× / week", name: "Schedule-reading drill", how: "Practise reading times, dates and details off a table into full, accurate sentences.", steps: ["Use any agenda or timetable.", "Have someone (or yourself) fire questions about it.", "Answer by restating + stating the fact, reading numbers precisely."], ex: ["&lsquo;9:30 a.m.&rsquo;, &lsquo;the third of June&rsquo;, &lsquo;Room 204&rsquo;.", "Build in one &lsquo;catch the wrong assumption&rsquo; question."] },
    { tag: "Daily · 10 min", name: "60-second opinion template", how: "Rehearse one opinion skeleton until it&rsquo;s automatic, then plug in random topics.", steps: ["Memorise: position &rarr; First of all + example &rarr; Secondly + example &rarr; conclusion.", "Give yourself 45s prep, then talk for the full 60s.", "Record and check you reached the end without long pauses."], ex: ["Topics: remote work, school uniforms, public transport, social media."] },
    { tag: "After each rep", name: "Record &amp; self-score", how: "Rate every recording on the four dimensions before moving on.", steps: ["Score delivery, language, cohesion and completeness 1&ndash;5.", "Note the single weakest one.", "Make the next session target that weakness."], ex: ["Endings weak? &rarr; a week of read-aloud focus.", "Time not filled? &rarr; framework drills."] },
    { tag: "Daily · 5 min", name: "Ending &amp; number drill", how: "Target the sounds that cost both delivery and grammar marks.", steps: ["Drill -ed (/t/,/d/,/ɪd/) and plural/3rd-person -s.", "Read prices, dates and times aloud.", "Record and listen specifically for dropped endings."], ex: ["&lsquo;asked, needed, planned&rsquo;.", "&lsquo;$19.95&rsquo;, &lsquo;at 8:45&rsquo;, &lsquo;on May 3rd&rsquo;."] },
    { tag: "Mindset", name: "Talk to the timer, not the truth", how: "Train yourself to invent content fast and fill every second, since facts aren&rsquo;t graded.", steps: ["For any question, grab the easiest answer to talk about.", "Never leave silence &mdash; a filler then keep going.", "Treat the beep as your only audience."], ex: ["&lsquo;I don&rsquo;t really cook&rsquo; &rarr; still invent a favourite dish to describe."] }
  ],

  mistakes: [
    { n: "Leaving silence at the end.", d: "Unused response time is the biggest avoidable loss. Every task is partly scored on completeness &mdash; keep talking until the timer stops.", ex: ["A 15-second answer that ends at 8 seconds throws away half the marks."] },
    { n: "Rushing the read-aloud.", d: "Speed blurs sounds and kills intonation. A steady pace with clear endings scores higher on delivery.", ex: [""] },
    { n: "No framework for the picture.", d: "Without a fixed order you stall and under-fill the 30 seconds. Memorise scene &rarr; action &rarr; location &rarr; guess.", ex: [""] },
    { n: "Dropping word endings.", d: "Swallowed -ed and -s endings cost both delivery and grammar across every task &mdash; the most common single error.", ex: ["&lsquo;He work here&rsquo; instead of &lsquo;He works here&rsquo;."] },
    { n: "Bare facts in Q8&ndash;10.", d: "Answering with just a number or name wastes the language score. Wrap every answer in a sentence.", ex: ["&lsquo;Room B&rsquo; &rarr; &lsquo;That session is held in Room B.&rsquo;"] },
    { n: "Missing the correction question.", d: "One Q8&ndash;10 item plants a false assumption. If you don&rsquo;t listen for it, you confirm wrong information.", ex: ["&lsquo;The talk&rsquo;s on Monday, right?&rsquo; &rarr; &lsquo;Actually, it&rsquo;s on Tuesday.&rsquo;"] },
    { n: "No opinion in Q11.", d: "A balanced &lsquo;both sides&rsquo; answer with no stance loses relevance. Pick a side in sentence one.", ex: [""] },
    { n: "Flat, monotone delivery.", d: "Even accurate speech sounds robotic without pitch movement, and is harder to follow. Stress content words and vary intonation.", ex: [""] },
    { n: "Memorised, irrelevant content.", d: "A pre-learned speech that doesn&rsquo;t fit the actual prompt scores low on relevance. Adapt your template to the question.", ex: [""] },
    { n: "Trying to be perfect.", d: "Hunting for the &lsquo;best&rsquo; word mid-answer creates pauses. Fluent, complete and slightly imperfect beats accurate but halting.", ex: [""] }
  ]
};

/* TOEIC Speaking language bank — tag by task group / function */
const TSPLANG = [
  {
    g: "Reading aloud &mdash; delivery cues", sense: "phrases that pattern in Q1&ndash;2 texts", tag: "Q1-2",
    items: [
      { w: "We are pleased to announce", d: "common opener in announcements; stress &lsquo;pleased&rsquo; and &lsquo;announce&rsquo;", x: "We are pleased to announce the opening of our new branch." },
      { w: "Don&rsquo;t miss", d: "advertising imperative; falling, emphatic tone", x: "Don&rsquo;t miss our biggest sale of the year!" },
      { w: "located at / on", d: "introduces an address; read the number clearly", x: "The store is conveniently located on Fifth Avenue." },
      { w: "for more information, visit", d: "closing call-to-action; steady pace to the end", x: "For more information, visit our website or call us today." },
      { w: "ranging from &hellip; to &hellip;", d: "a list/scale; rise on the first item, fall on the last", x: "We offer classes ranging from beginner to advanced." },
      { w: "whether you are &hellip; or &hellip;", d: "paired structure; keep parallel intonation", x: "Whether you are a student or a professional, we have a plan for you." }
    ]
  },
  {
    g: "Framing a picture", sense: "open the description (Q3&ndash;4)", tag: "Q3-4",
    items: [
      { w: "This picture was taken in / at", d: "your reliable opening line; sets the scene", x: "This picture was taken in a modern office." },
      { w: "It appears to be / It looks like", d: "make a safe guess about the situation", x: "It looks like a team meeting is taking place." },
      { w: "The first thing I notice is", d: "lead into the main subject naturally", x: "The first thing I notice is a woman giving a presentation." },
      { w: "in the foreground / background", d: "position elements front-to-back", x: "In the foreground, a man is typing on a laptop." },
      { w: "on the left / right / in the centre", d: "position elements left-to-right", x: "On the right, there are several bookshelves." },
      { w: "they seem to be / they appear to be", d: "guess at actions or feelings to add detail", x: "They seem to be enjoying the discussion." }
    ]
  },
  {
    g: "Describing actions &amp; presence", sense: "what people are doing (Q3&ndash;4)", tag: "Q3-4",
    items: [
      { w: "is / are + -ing", d: "present continuous for actions in progress", x: "A waiter is serving food to the customers." },
      { w: "there is / there are", d: "state what exists in the scene", x: "There are a few people standing near the door." },
      { w: "is wearing", d: "describe clothing precisely", x: "The man is wearing a dark suit and glasses." },
      { w: "is holding / carrying", d: "describe what someone has in hand", x: "She is holding a cup of coffee." },
      { w: "next to / behind / in front of", d: "prepositions linking objects in space", x: "There is a plant next to the window." },
      { w: "is filled with / is full of", d: "describe a crowded or busy scene", x: "The room is filled with people." }
    ]
  },
  {
    g: "Answering personal questions", sense: "direct answer + extension (Q5&ndash;7)", tag: "Q5-7",
    items: [
      { w: "I usually / I tend to", d: "describe a habit naturally", x: "I usually go shopping on weekends." },
      { w: "Personally, I prefer", d: "state a preference clearly", x: "Personally, I prefer online shopping to going to the mall." },
      { w: "mainly because / since", d: "add a reason to fill the time", x: "I take the bus, mainly because it&rsquo;s cheaper." },
      { w: "for example / for instance", d: "back a point with an (invented) example", x: "For example, last week I bought a jacket online." },
      { w: "If I had to choose", d: "commit when asked to pick", x: "If I had to choose, I&rsquo;d say the afternoon." },
      { w: "to be honest", d: "soften or emphasise a quick personal answer", x: "To be honest, I don&rsquo;t do it very often." }
    ]
  },
  {
    g: "Answering from a schedule", sense: "read facts in full sentences (Q8&ndash;10)", tag: "Q8-10",
    items: [
      { w: "According to the schedule", d: "frame an answer drawn from the table", x: "According to the schedule, the session starts at 10 a.m." },
      { w: "is scheduled for / is set to begin at", d: "state a time accurately", x: "The keynote is scheduled for 9:30 in the main hall." },
      { w: "will be held in / will take place in", d: "state a location from the table", x: "The workshop will be held in Room 204." },
      { w: "Yes, that&rsquo;s correct", d: "confirm a true assumption before adding detail", x: "Yes, that&rsquo;s correct &mdash; lunch is served at noon." },
      { w: "Actually, / I&rsquo;m afraid that&rsquo;s not right", d: "politely correct a wrong assumption", x: "Actually, the meeting is on Tuesday, not Monday." },
      { w: "There are + [number] + sessions", d: "summarise a count from the table", x: "There are three sessions before the break." }
    ]
  },
  {
    g: "Stating an opinion", sense: "open the 60-second answer (Q11)", tag: "Q11",
    items: [
      { w: "I believe / I think that", d: "state your position plainly", x: "I believe that working from home is more productive." },
      { w: "In my opinion", d: "alternative opener for your view", x: "In my opinion, students should learn a second language early." },
      { w: "for two main reasons", d: "signal the structure of your answer", x: "I support this idea for two main reasons." },
      { w: "I&rsquo;m strongly in favour of", d: "express a firm positive stance", x: "I&rsquo;m strongly in favour of flexible working hours." },
      { w: "While some people think &hellip;, I", d: "acknowledge the other side, then commit", x: "While some people think it&rsquo;s risky, I believe it&rsquo;s worth it." },
      { w: "If you ask me", d: "casual, confident way to give a view", x: "If you ask me, public transport is the better option." }
    ]
  },
  {
    g: "Reasons, examples &amp; transitions", sense: "develop the answer (Q11)", tag: "Q11",
    items: [
      { w: "First of all", d: "introduce your first reason", x: "First of all, it saves a lot of time." },
      { w: "Secondly / On top of that", d: "add a second reason", x: "Secondly, it reduces stress from commuting." },
      { w: "For example / For instance", d: "support a reason with a concrete case", x: "For example, I can start work without a long commute." },
      { w: "This means that", d: "draw a consequence from a point", x: "This means that I have more time for my family." },
      { w: "Another point worth mentioning", d: "back-pocket phrase to add time", x: "Another point worth mentioning is the cost savings." },
      { w: "For these reasons", d: "signal your conclusion", x: "For these reasons, I strongly believe it&rsquo;s the better choice." }
    ]
  },
  {
    g: "Buying time &amp; staying fluent", sense: "avoid silence (any task)", tag: "any",
    items: [
      { w: "Well, let me see", d: "a natural beat before a no-prep answer", x: "Well, let me see&hellip; I&rsquo;d say twice a week." },
      { w: "That&rsquo;s a good question", d: "buys a moment on the opinion task", x: "That&rsquo;s a good question. Personally, I think&hellip;" },
      { w: "As I mentioned", d: "links back and fills time coherently", x: "As I mentioned, convenience is the main factor." },
      { w: "What I mean is", d: "rephrase to recover and keep talking", x: "What I mean is, it&rsquo;s simply more efficient." },
      { w: "in other words", d: "restate a point to extend an answer", x: "In other words, it benefits both sides." },
      { w: "all in all", d: "wrap up smoothly if time is short", x: "All in all, it&rsquo;s the option I&rsquo;d recommend." }
    ]
  }
];

/* ====================================================================
   TOEIC WRITING — 8 questions · ~60 min · 0–200
   ==================================================================== */
const TOEIC_WR = {

  principles: [
    { n: "TW-01", h: "Accuracy over ambition", p: "Questions 1&ndash;5 reward a <b>correct, clear</b> sentence that uses the two given words, full stop. A simple sentence with no errors scores higher than an ambitious one that breaks. Don&rsquo;t reach for complexity you can&rsquo;t control." },
    { n: "TW-02", h: "Match the register", p: "The two long tasks have different voices. The emails (Q6&ndash;7) need a <b>polite business tone</b>; the essay (Q8) needs <b>formal, academic</b> English. Slipping into casual language in either is a quick way to lose marks." },
    { n: "TW-03", h: "Answer the whole request", p: "Q6&ndash;7 emails are scored on whether you address <b>every</b> point asked &mdash; and you&rsquo;ll often need to <b>invent</b> plausible specifics (dates, reasons, details). Missing one required point caps the task." },
    { n: "TW-04", h: "The essay is won on structure", p: "Q8 is rated on organisation, development, and grammar/vocabulary. A clear <b>intro &rarr; two body paragraphs &rarr; conclusion</b> plan, each idea developed with a reason and example, beats a long unstructured wall of text." }
  ],

  criteria: [
    {
      code: "GRAMMAR", pct: "all tasks",
      name: "Grammar &amp; accuracy",
      intro: "Whether your sentences are grammatically correct &mdash; agreement, tense, articles, word form and punctuation.",
      b6: "Frequent errors in agreement, tense, articles or word form; mistakes sometimes obscure meaning, especially in complex sentences.",
      b8: "A range of structures used accurately; the large majority of sentences are error-free; punctuation is well controlled."
    },
    {
      code: "VOCABULARY", pct: "Q6&ndash;8",
      name: "Vocabulary &amp; word choice",
      intro: "Range and precision of vocabulary, including collocation and register-appropriate business / academic words.",
      b6: "Adequate but repetitive vocabulary; noticeable errors in word choice or collocation; register sometimes too casual.",
      b8: "Wide, precise vocabulary used naturally; correct collocation; consistently appropriate register for an email or essay."
    },
    {
      code: "ORGANISATION", pct: "Q6&ndash;8",
      name: "Organisation &amp; cohesion",
      intro: "Whether the response is logically structured into paragraphs and connected with clear linking.",
      b6: "Some organisation but weak paragraphing; mechanical or missing connectors; ideas not always in a logical order.",
      b8: "Clear paragraphs with one idea each, a logical sequence, and smooth, varied cohesive devices."
    },
    {
      code: "TASK", pct: "all tasks",
      name: "Task completion &amp; relevance",
      intro: "Whether you did exactly what each task asked &mdash; used the given words, addressed every point, and stayed on topic.",
      b6: "Addresses the task partly; misses a required word or email point; essay under-develops or drifts off-topic.",
      b8: "Fully completes the task: both words used naturally, every email point covered, and a developed, on-topic essay of sufficient length."
    }
  ],

  techniques: [
    { name: "Use both given words &mdash; exactly", crit: "Task · Grammar", ex: ["Words: <b>man / read</b> &rarr; &lsquo;The man is reading a newspaper on a bench.&rsquo;", "Words: <b>because / rain</b> &rarr; &lsquo;They are using umbrellas because it is raining.&rsquo;"], why: "Q1&ndash;5 are zero unless both supplied words appear, in correct form, in a grammatical sentence about the picture. Build the sentence around the two words first; everything else is decoration." },
    { name: "Keep the picture sentence simple and correct", crit: "Grammar", ex: ["&lsquo;A woman is buying flowers at a market.&rsquo; &mdash; one clean clause.", "Avoid: &lsquo;A woman who, while she was at the market that&hellip;&rsquo; &mdash; too much to control."], why: "Marks come from accuracy, not length. One well-formed sentence with present continuous or &lsquo;there is/are&rsquo; is safer than a complex one that introduces errors." },
    { name: "Vary the picture sentences with connectors", crit: "Grammar · Vocabulary", ex: ["with conjunction: &lsquo;He is smiling <em>because</em> he won.&rsquo;", "with preposition: &lsquo;The cat is sleeping <em>under</em> the table.&rsquo;"], why: "When the given word is a conjunction (because, while, although) or preposition (next to, during), it dictates the structure. Recognising the word type tells you instantly what sentence to build." },
    { name: "Decode the email task before writing", crit: "Task", ex: ["Note the sender, your role, and the verbs: &lsquo;ask two questions&rsquo;, &lsquo;make a suggestion&rsquo;, &lsquo;explain a problem&rsquo;.", "Tick off each instruction as you cover it."], why: "Q6&ndash;7 emails fail mostly on missed instructions. The prompt tells you exactly how many things to do &mdash; treat it as a checklist and address every one." },
    { name: "Open and close emails by formula", crit: "Vocabulary · Organisation", ex: ["Open: &lsquo;Thank you for your email regarding&hellip;&rsquo;", "Close: &lsquo;Please let me know if you need anything further. Best regards, &hellip;&rsquo;"], why: "A reliable greeting and sign-off frame every email, set the right business register, and save thinking time for the content in the middle." },
    { name: "Invent specific details confidently", crit: "Task", ex: ["Asked for two questions about a product &rarr; &lsquo;Does it come with a warranty? Is it available in blue?&rsquo;", "Asked to explain a delay &rarr; &lsquo;Our supplier missed a shipment last week.&rsquo;"], why: "Emails require concrete specifics that aren&rsquo;t given. Make them up &mdash; plausibility and grammar are scored, not truth. Vague answers (&lsquo;I have some questions&rsquo;) don&rsquo;t complete the task." },
    { name: "Plan the essay before writing", crit: "Organisation", ex: ["1 min: pick a side, choose two reasons, jot one example each &mdash; then write.", "Intro &rarr; reason 1 + example &rarr; reason 2 + example &rarr; conclusion."], why: "Q8 gives ~30 minutes for ~300 words. Two minutes planning prevents the two worst faults &mdash; drifting off-topic and repeating yourself &mdash; and guarantees a visible structure." },
    { name: "Lead every essay paragraph with a topic sentence", crit: "Organisation", ex: ["&lsquo;The main advantage of remote work is flexibility.&rsquo;", "&lsquo;A second benefit is the reduction in commuting costs.&rsquo;"], why: "A clear topic sentence makes your plan obvious to the rater and keeps each paragraph to one idea &mdash; the backbone of the organisation score." },
    { name: "Develop with reason + example", crit: "Organisation · Task", ex: ["Point &rarr; explain &rarr; example: &lsquo;It saves time. Without a commute, I gain two hours a day, which I spend on deep work.&rsquo;"], why: "An undeveloped essay of bald assertions scores low. Each paragraph needs explanation and a concrete example &mdash; depth, not a list of points." },
    { name: "Vary sentence structure with control", crit: "Grammar · Vocabulary", ex: ["Concession: &lsquo;Although it is convenient, it has drawbacks.&rsquo;", "Conditional: &lsquo;If companies adopt this, productivity will rise.&rsquo;"], why: "Range scores in Q6&ndash;8 &mdash; a mix of simple and complex sentences. Use complex forms you can control accurately rather than one tangled sentence to look advanced." },
    { name: "Leave two minutes to proofread", crit: "Grammar", ex: ["Check the high-frequency killers: subject&ndash;verb agreement, articles (a/the), plural -s, verb tense.", "&lsquo;He need&rsquo; &rarr; &lsquo;He needs&rsquo;; &lsquo;informations&rsquo; &rarr; &lsquo;information&rsquo;."], why: "Many grammar errors are catchable on a quick reread. A clean final pass directly lifts the grammar score on every task." }
  ],

  structures: [
    { name: "Action sentence (present continuous)", tag: "Q1-5", frame: "[Subject] is / are + [verb-ing] + [object / place].", ex: ["The children are playing in the park.", "A woman is paying for her groceries."], use: "Your default picture sentence &mdash; reliable, accurate, and works for almost any photo. Slot the given word in as the verb or object." },
    { name: "Conjunction sentence", tag: "Q1-5", frame: "[Clause] + because / while / although + [clause].", ex: ["He is wearing a coat because it is cold.", "She is reading while she waits for the bus."], use: "Use when the given word is a conjunction &mdash; it forces a two-clause sentence and shows range safely." },
    { name: "Preposition sentence", tag: "Q1-5", frame: "There is / are + [noun] + [preposition] + [noun].", ex: ["There is a lamp next to the sofa.", "Several cars are parked in front of the building."], use: "Use when the given word is a preposition of place &mdash; &lsquo;there is/are&rsquo; pairs neatly with it." },
    { name: "Email opening", tag: "Q6-7", frame: "Thank you for your email regarding + [topic]. / I am writing in response to + [topic].", ex: ["Thank you for your email regarding the upcoming conference.", "I am writing in response to your inquiry about our services."], use: "Sets a polite business register and references the prompt in one line &mdash; your standard first sentence." },
    { name: "Email request / question", tag: "Q6-7", frame: "Could you please + [verb]? / I would like to know + [indirect question].", ex: ["Could you please confirm the delivery date?", "I would like to know whether the room is available on Friday."], use: "The polite way to ask the questions an email task demands &mdash; indirect questions sound more professional than direct ones." },
    { name: "Email giving information", tag: "Q6-7", frame: "I would like to inform you that + [detail]. / Please note that + [detail].", ex: ["I would like to inform you that the meeting has been moved to 3 p.m.", "Please note that the office will be closed next Monday."], use: "Delivers the facts or explanations the task asks for, in the right formal register." },
    { name: "Email closing", tag: "Q6-7", frame: "Please let me know if + [clause]. + Best regards, / I look forward to + [verb-ing].", ex: ["Please let me know if you have any further questions. Best regards, Minh.", "I look forward to hearing from you soon."], use: "Closes every email cleanly and politely &mdash; pair with a sign-off to complete the format." },
    { name: "Essay introduction", tag: "Q8", frame: "It is often said that + [topic]. In my opinion, + [position], for + [number] reasons.", ex: ["It is often said that technology isolates people. In my opinion, it does the opposite, for two reasons.", "Many people debate whether&hellip; I firmly believe that&hellip;"], use: "Paraphrases the prompt and states your thesis with a structure signal &mdash; the model essay opening." },
    { name: "Essay body linker", tag: "Q8", frame: "First and foremost, &hellip; Moreover, &hellip; For instance, &hellip;", ex: ["First and foremost, remote work boosts productivity. For instance, employees avoid daily commutes.", "Moreover, it cuts company costs significantly."], use: "Transitions that lead and connect body paragraphs &mdash; vary them so the cohesion doesn&rsquo;t read mechanically." },
    { name: "Concession", tag: "Q8", frame: "Although / While + [opposing point], + [your stronger point].", ex: ["Although remote work has challenges, its benefits are far greater.", "While critics raise valid concerns, the advantages outweigh them."], use: "Acknowledges the other side then returns to your view &mdash; a mature move that lifts both organisation and the essay&rsquo;s argument." },
    { name: "Essay conclusion", tag: "Q8", frame: "In conclusion, + [restated position]. + [recommendation / final thought].", ex: ["In conclusion, the advantages clearly outweigh the drawbacks, and companies should embrace remote work.", "For these reasons, I firmly believe this trend is positive."], use: "Restates your thesis and rounds off &mdash; no new ideas. Signals a complete, well-organised essay." }
  ],

  tasks: [
    {
      id: "sentence", no: "1&ndash;5", title: "Write a sentence from a picture", alias: "Questions 1&ndash;5", meta: "~8 min · 5 sentences",
      blurb: "Each question shows a photo and gives <b>two words or phrases</b> you must use in one sentence that describes the picture. Scored 0&ndash;3 on grammar and relevance. Both words, correct grammar, on-topic &mdash; that&rsquo;s the whole game.",
      steps: [
        { t: "Identify the <b>word type</b> of each given word &mdash; it dictates the sentence.", ex: "Verb &rarr; action sentence; conjunction &rarr; two clauses; preposition &rarr; there is/are." },
        { t: "Build one <b>simple, correct</b> sentence around both words.", ex: "&lsquo;man / wait&rsquo; &rarr; &lsquo;The man is waiting for a taxi.&rsquo;" },
        { t: "Make sure it actually <b>describes the photo</b>.", ex: "Relevance is scored &mdash; an off-picture sentence loses marks even if perfect." },
        { t: "Check agreement, tense and articles before moving on.", ex: "Spend ~90 seconds per item; don&rsquo;t overthink." }
      ],
      blueprint: [
        { part: "Read the words", detail: "Note both given words and their grammatical type." },
        { part: "Choose a frame", detail: "Action (is/are -ing), conjunction (because/while), or preposition (there is + next to)." },
        { part: "Write one clause", detail: "Keep it to a single, clean, picture-relevant sentence using both words." },
        { part: "Proof", detail: "Agreement, tense, article, spelling &mdash; then next." }
      ],
      pitfalls: [
        { n: "Missing or altering a given word.", d: "Both words must appear, in usable form. Changing &lsquo;buy&rsquo; to &lsquo;bought&rsquo; is fine; dropping it scores zero.", ex: ["If you can&rsquo;t fit both, change the sentence &mdash; not the words."] },
        { n: "Over-complicating.", d: "A long, clever sentence invites errors. One correct clause earns full marks; a broken complex one doesn&rsquo;t.", ex: [""] },
        { n: "Ignoring the picture.", d: "A grammatical sentence that doesn&rsquo;t match the photo loses the relevance half of the score.", ex: ["Words &lsquo;dog / run&rsquo; with a photo of a sleeping dog &rarr; describe what&rsquo;s shown."] }
      ]
    },
    {
      id: "email", no: "6&ndash;7", title: "Respond to a written request", alias: "Questions 6&ndash;7", meta: "~10 min each",
      blurb: "You read a short email and write a reply that completes specific instructions (e.g. ask two questions, make a request, give two pieces of information). Scored 0&ndash;4 on quality, vocabulary and whether you addressed every point.",
      steps: [
        { t: "Read the email and your <b>role</b>; underline every <b>instruction</b>.", ex: "&lsquo;Reply&hellip; ask TWO questions and make ONE suggestion.&rsquo;" },
        { t: "Open with a <b>greeting</b> and a reference to their email.", ex: "&lsquo;Dear Mr Lee, Thank you for your email regarding&hellip;&rsquo;" },
        { t: "Address <b>each instruction</b> in its own short paragraph, inventing specifics.", ex: "One paragraph per task, with concrete details." },
        { t: "Close politely and <b>sign off</b>.", ex: "&lsquo;Please let me know&hellip; Best regards, [name].&rsquo;" }
      ],
      blueprint: [
        { part: "Greeting", detail: "&lsquo;Dear [name],&rsquo; + a line acknowledging their email." },
        { part: "Body", detail: "One short paragraph per instruction &mdash; every required point, with invented specifics." },
        { part: "Closing", detail: "A polite closing line + sign-off with your name." },
        { part: "Register check", detail: "Keep it business-formal: no contractions-heavy, casual or slangy tone." }
      ],
      pitfalls: [
        { n: "Missing an instruction.", d: "If it says ask TWO questions, one isn&rsquo;t enough. Count the required actions and cover them all.", ex: ["Re-read the prompt after writing and tick each task off."] },
        { n: "Wrong register.", d: "Too casual a tone (&lsquo;Hey&rsquo;, &lsquo;wanna&rsquo;) breaks the business email format. Stay polite and professional.", ex: ["&lsquo;Hi there, gimme a call&rsquo; &rarr; &lsquo;Please feel free to contact me.&rsquo;"] },
        { n: "Vague, detail-free reply.", d: "&lsquo;I have some questions&rsquo; doesn&rsquo;t complete the task. Write the actual questions, with specifics.", ex: ["Invent product names, dates, numbers &mdash; plausibility is enough."] },
        { n: "No greeting or sign-off.", d: "Skipping the email frame costs format marks. Always open with &lsquo;Dear&hellip;&rsquo; and close with a sign-off.", ex: [""] }
      ]
    },
    {
      id: "essay", no: "8", title: "Write an opinion essay", alias: "Question 8", meta: "~30 min · ~300 words",
      blurb: "You&rsquo;re given a question on a familiar issue and write an opinion essay of around 300 words in 30 minutes. The highest-weighted task &mdash; scored 0&ndash;5 on organisation, development, and grammar / vocabulary.",
      steps: [
        { t: "<b>Plan</b> first: pick a side, two reasons, an example for each.", ex: "Two minutes of planning saves the whole essay from drifting." },
        { t: "Write an <b>introduction</b>: paraphrase the prompt + state your position.", ex: "&lsquo;It is often argued that&hellip; In my opinion&hellip; for two reasons.&rsquo;" },
        { t: "Write <b>two body paragraphs</b>, each a topic sentence + reason + example.", ex: "One clear idea per paragraph, developed &mdash; not listed." },
        { t: "Write a <b>conclusion</b> restating your view; then proofread.", ex: "&lsquo;In conclusion&hellip;&rsquo; &mdash; no new ideas." }
      ],
      blueprint: [
        { part: "Introduction", detail: "Paraphrase the question, then state your clear position and signal two reasons." },
        { part: "Body 1", detail: "Topic sentence (reason 1) &rarr; explain &rarr; concrete example." },
        { part: "Body 2", detail: "Topic sentence (reason 2) &rarr; explain &rarr; concrete example." },
        { part: "Conclusion", detail: "Restate your position and summarise; add a final thought. No new points." }
      ],
      pitfalls: [
        { n: "No clear position.", d: "An essay that argues both sides equally with no stance loses task and organisation marks. Commit in the introduction.", ex: ["State your side in the first paragraph and hold it to the end."] },
        { n: "Listing instead of developing.", d: "Five undeveloped reasons score worse than two with explanation and examples. Depth beats breadth.", ex: [""] },
        { n: "Too short.", d: "Well under ~300 words signals an undeveloped response. Plan enough content to develop two full paragraphs.", ex: [""] },
        { n: "No paragraphing.", d: "One long block hurts organisation badly. Use four visible paragraphs: intro, two bodies, conclusion.", ex: [""] },
        { n: "Repeating the prompt verbatim.", d: "Copying the question word-for-word in the intro wastes the chance to show vocabulary. Paraphrase it.", ex: [""] }
      ]
    }
  ],

  practice: [
    { tag: "Daily · 10 min", name: "Five picture sentences", how: "Drill the Q1&ndash;5 reflex: a correct, picture-relevant sentence using two random words.", steps: ["Grab any photo and write down two random words (one a verb or connector).", "Write one clean sentence using both, on-topic.", "Check word type drove the structure, then proof it."], ex: ["&lsquo;phone / while&rsquo; &rarr; &lsquo;She is checking her phone while waiting in line.&rsquo;", "&lsquo;box / heavy&rsquo; &rarr; &lsquo;The man is carrying a heavy box.&rsquo;"] },
    { tag: "Daily · 5 min", name: "Word-type recognition", how: "Train yourself to see instantly what sentence a given word forces.", steps: ["Take a list of words; label each verb / noun / conjunction / preposition.", "Say the frame it triggers out loud.", "Speed up until it&rsquo;s automatic."], ex: ["&lsquo;because&rsquo; &rarr; two-clause sentence.", "&lsquo;next to&rsquo; &rarr; there is/are + location."] },
    { tag: "2&ndash;3× / week", name: "Timed email reply", how: "Write a full Q6&ndash;7 email in 10 minutes, covering every instruction.", steps: ["Use a sample email prompt with 2&ndash;3 required actions.", "Write greeting &rarr; one paragraph per task &rarr; closing.", "Re-read and tick off each instruction; check the register."], ex: ["Prompt asks for two questions + a suggestion &rarr; cover all three.", "Time it &mdash; train to finish with a minute to proof."] },
    { tag: "Weekly", name: "Full essay under 30 min", how: "Write a complete ~300-word Q8 essay to time, including planning and proofreading.", steps: ["Spend 2&ndash;3 min planning a side and two reasons.", "Write intro &rarr; two bodies &rarr; conclusion straight through.", "Leave 3 min to proof grammar and check ~300 words."], ex: ["Topics: remote work, online learning, city vs country, social media."] },
    { tag: "Daily · 10 min", name: "Grammar accuracy reps", how: "Target the errors that cost the most: agreement, articles, tense, plurals.", steps: ["Write 5 sentences focusing on one rule (e.g. subject&ndash;verb agreement).", "Self-check or paste into a checker.", "Log any error type that repeats."], ex: ["&lsquo;The team are&rsquo; vs &lsquo;The team is&rsquo;.", "&lsquo;a information&rsquo; &rarr; &lsquo;information&rsquo; (uncountable)."] },
    { tag: "Ongoing", name: "Build phrase banks", how: "Collect ready-made email and essay phrases by function so you don&rsquo;t invent the frame on the day.", steps: ["Keep lists: email openers, requests, closings; essay intros, linkers, conclusions.", "Drill them in the Language bank below as flashcards.", "Reuse them so only the content changes under exam pressure."], ex: ["&lsquo;Thank you for your email regarding&hellip;&rsquo;", "&lsquo;First and foremost&hellip; / In conclusion&hellip;&rsquo;"] },
    { tag: "Weekly", name: "Reverse-engineer a model", how: "Study a high-scoring sample email and essay for structure, not content.", steps: ["Label each paragraph&rsquo;s job and the linkers used.", "Note the register and the developed examples.", "Reuse the skeleton on a fresh prompt."], ex: ["Copy the intro&ndash;thesis&ndash;reasons shape onto a new essay topic."] },
    { tag: "Weekly", name: "Error log", how: "Keep a running list of your repeat mistakes and review it before each timed practice.", steps: ["After marking, write each recurring error and its fix in one line.", "Re-read before you write next time.", "Retire an error once it hasn&rsquo;t appeared for three pieces."], ex: ["&lsquo;Drops articles&rsquo; &rarr; check every a/the.", "&lsquo;Casual register in emails&rsquo; &rarr; no contractions, polite forms."] }
  ],

  mistakes: [
    { n: "Not using both given words.", d: "Q1&ndash;5 score zero if a supplied word is missing or unusable. Build the sentence around the two words first.", ex: ["If a word won&rsquo;t fit, rewrite the sentence &mdash; never drop the word."] },
    { n: "Over-complicating picture sentences.", d: "A clever long sentence invites grammar errors; a simple correct one earns full marks. Keep Q1&ndash;5 clean.", ex: [""] },
    { n: "Missing email instructions.", d: "Q6&ndash;7 require every requested action. Asking one question when two are demanded caps the task.", ex: ["Count the verbs in the prompt and cover each."] },
    { n: "Wrong register in emails.", d: "Casual tone, slang or heavy contractions break the business-email format and lower the score.", ex: ["&lsquo;Hey, what&rsquo;s up&rsquo; &rarr; &lsquo;Dear Mr Tran, I hope you are well.&rsquo;"] },
    { n: "Vague emails with no specifics.", d: "&lsquo;I have a few questions&rsquo; doesn&rsquo;t complete the task. Write the actual questions and invent concrete details.", ex: [""] },
    { n: "No clear essay position.", d: "An undecided Q8 essay loses task and organisation marks. State a clear stance in the introduction.", ex: [""] },
    { n: "Listing without developing.", d: "An essay of bald assertions scores low. Each body paragraph needs a reason and a concrete example.", ex: [""] },
    { n: "Weak or missing paragraphing.", d: "One long block badly hurts organisation. Use four visible paragraphs: intro, two bodies, conclusion.", ex: [""] },
    { n: "Essay too short.", d: "Well under ~300 words reads as undeveloped. Plan enough to fill two full body paragraphs.", ex: [""] },
    { n: "No proofreading.", d: "Many grammar slips are catchable on a reread. Skipping the final pass leaves easy marks on the table.", ex: ["Always reserve ~2 minutes to check agreement, articles and tense."] }
  ]
};

/* TOEIC Writing language bank — tag by task group / function */
const TWRLANG = [
  {
    g: "Picture-sentence verbs", sense: "common actions for Q1&ndash;5", tag: "Q1-5",
    items: [
      { w: "is / are + -ing", d: "present continuous &mdash; the default picture tense", x: "The woman is writing in a notebook." },
      { w: "there is / there are", d: "state what exists in the photo", x: "There are several boxes on the floor." },
      { w: "is wearing", d: "describe clothing", x: "The man is wearing a yellow helmet." },
      { w: "is holding", d: "describe what someone has in hand", x: "She is holding an umbrella." },
      { w: "is looking at", d: "describe gaze or attention", x: "The students are looking at the screen." },
      { w: "is being + past participle", d: "passive for an action done to something", x: "The car is being repaired in the garage." }
    ]
  },
  {
    g: "Connectors &amp; prepositions", sense: "when the given word sets the structure (Q1&ndash;5)", tag: "Q1-5",
    items: [
      { w: "because", d: "give a reason; forces a two-clause sentence", x: "He is running because he is late." },
      { w: "while", d: "two things happening at once", x: "She is cooking while she talks on the phone." },
      { w: "although", d: "concession in one sentence", x: "Although it is raining, they are playing outside." },
      { w: "next to / beside", d: "preposition of place; pairs with there is/are", x: "There is a chair next to the desk." },
      { w: "in front of / behind", d: "relative position of objects", x: "A car is parked in front of the store." },
      { w: "during", d: "preposition of time within an event", x: "People are taking photos during the parade." }
    ]
  },
  {
    g: "Email openings", sense: "start a reply politely (Q6&ndash;7)", tag: "Q6-7",
    items: [
      { w: "Thank you for your email regarding", d: "polite opener referencing their message", x: "Thank you for your email regarding the job opening." },
      { w: "I am writing in response to", d: "formal opener stating your purpose", x: "I am writing in response to your advertisement." },
      { w: "I hope this email finds you well", d: "courteous opening line", x: "I hope this email finds you well." },
      { w: "Thank you for reaching out", d: "warm but professional acknowledgement", x: "Thank you for reaching out about our services." },
      { w: "It was a pleasure to", d: "open after a prior interaction", x: "It was a pleasure to meet you at the conference." }
    ]
  },
  {
    g: "Email requests &amp; questions", sense: "ask politely (Q6&ndash;7)", tag: "Q6-7",
    items: [
      { w: "Could you please", d: "polite request for an action", x: "Could you please send me the updated schedule?" },
      { w: "I would like to know", d: "introduce an indirect question", x: "I would like to know whether the item is in stock." },
      { w: "Would it be possible to", d: "polite, tentative request", x: "Would it be possible to reschedule our meeting?" },
      { w: "I was wondering if", d: "soft, professional way to ask", x: "I was wondering if you offer a discount for bulk orders." },
      { w: "Please let me know whether", d: "request a yes/no decision", x: "Please let me know whether Friday works for you." }
    ]
  },
  {
    g: "Email giving information", sense: "state facts &amp; suggestions (Q6&ndash;7)", tag: "Q6-7",
    items: [
      { w: "I would like to inform you that", d: "deliver information formally", x: "I would like to inform you that your order has shipped." },
      { w: "Please note that", d: "flag an important detail", x: "Please note that the deadline is this Friday." },
      { w: "I would suggest", d: "make a polite suggestion", x: "I would suggest booking the venue in advance." },
      { w: "Unfortunately,", d: "soften delivering bad news", x: "Unfortunately, the product is currently out of stock." },
      { w: "As requested,", d: "introduce something they asked for", x: "As requested, I have attached the report." }
    ]
  },
  {
    g: "Email closings", sense: "sign off professionally (Q6&ndash;7)", tag: "Q6-7",
    items: [
      { w: "Please let me know if you have any questions", d: "standard helpful closing line", x: "Please let me know if you have any questions." },
      { w: "I look forward to hearing from you", d: "polite forward-looking close", x: "I look forward to hearing from you soon." },
      { w: "Thank you for your time and consideration", d: "courteous close, esp. for requests", x: "Thank you for your time and consideration." },
      { w: "Best regards, / Kind regards,", d: "standard formal sign-off", x: "Best regards, Lan Nguyen." },
      { w: "Should you need anything further", d: "offer continued help formally", x: "Should you need anything further, please contact me." }
    ]
  },
  {
    g: "Essay introductions", sense: "open the Q8 essay", tag: "Q8",
    items: [
      { w: "It is often argued that", d: "introduce a common view to frame the topic", x: "It is often argued that technology harms communication." },
      { w: "In today&rsquo;s world,", d: "set a contemporary context", x: "In today&rsquo;s world, remote work is increasingly common." },
      { w: "In my opinion / I firmly believe that", d: "state your thesis clearly", x: "In my opinion, the benefits clearly outweigh the drawbacks." },
      { w: "for several / two main reasons", d: "signal the essay&rsquo;s structure", x: "I support this view for two main reasons." },
      { w: "This essay will argue that", d: "explicit thesis statement", x: "This essay will argue that flexible hours improve productivity." }
    ]
  },
  {
    g: "Essay body linkers", sense: "develop &amp; connect ideas (Q8)", tag: "Q8",
    items: [
      { w: "First and foremost", d: "introduce the strongest first reason", x: "First and foremost, remote work increases flexibility." },
      { w: "Moreover / Furthermore", d: "add a further supporting point", x: "Moreover, it reduces commuting costs." },
      { w: "For instance / For example", d: "support a claim with a concrete case", x: "For example, employees save hours each week." },
      { w: "As a result / Consequently", d: "introduce a consequence", x: "As a result, productivity tends to rise." },
      { w: "Although / While", d: "concede the other side before countering", x: "Although there are challenges, the benefits are greater." },
      { w: "This is because", d: "explain the reasoning behind a point", x: "This is because workers feel more in control of their time." }
    ]
  },
  {
    g: "Essay conclusions", sense: "close the Q8 essay", tag: "Q8",
    items: [
      { w: "In conclusion", d: "the standard concluding signpost", x: "In conclusion, the advantages far outweigh the disadvantages." },
      { w: "To sum up", d: "alternative wrap-up opener", x: "To sum up, flexible work benefits both sides." },
      { w: "For these reasons", d: "tie the conclusion to your arguments", x: "For these reasons, I firmly believe it is a positive trend." },
      { w: "Overall,", d: "give a final balanced judgement", x: "Overall, the shift toward remote work should be encouraged." },
      { w: "Therefore, I strongly believe that", d: "restate your position emphatically", x: "Therefore, I strongly believe companies should adopt it." }
    ]
  }
];

window.TOEIC_SP = TOEIC_SP;
window.TSPLANG = TSPLANG;
window.TOEIC_WR = TOEIC_WR;
window.TWRLANG = TWRLANG;
