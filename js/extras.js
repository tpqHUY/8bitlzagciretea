/* ============================================================
   extras.js
   CONFUSABLES — word pairs/triples that look or sound alike but
                 differ in meaning; examiners exploit the slip.
   COLLOCATIONS — fixed academic word partnerships that recur in
                 reading passages (and signal where answers hide).
   Edit freely.
   ============================================================ */

/* ---- easily confused ---- */
const CONFUSABLES = [
  {
    items: [
      { w: "affect", pos: "verb", d: "to influence or have an impact on" },
      { w: "effect", pos: "noun / verb", d: "a result (n); to bring about (v: 'effect change')" }
    ],
    note: "Almost always: affect = the action, effect = the result."
  },
  {
    items: [
      { w: "economic", pos: "adj", d: "relating to the economy or finance" },
      { w: "economical", pos: "adj", d: "thrifty; not wasteful, good value" }
    ],
    note: "An economical car saves fuel; an economic policy concerns the economy."
  },
  {
    items: [
      { w: "principle", pos: "noun", d: "a rule, law or fundamental truth" },
      { w: "principal", pos: "adj / noun", d: "main, chief; or a head of a school" }
    ],
    note: "The principAL is your pAL (or the main one)."
  },
  {
    items: [
      { w: "continual", pos: "adj", d: "repeated, happening again and again with breaks" },
      { w: "continuous", pos: "adj", d: "uninterrupted, without any break" }
    ],
    note: "Continual interruptions stop and start; continuous noise never pauses."
  },
  {
    items: [
      { w: "discrete", pos: "adj", d: "separate, individually distinct" },
      { w: "discreet", pos: "adj", d: "careful, tactful, unobtrusive" }
    ],
    note: "Discrete categories are separate; a discreet person keeps a secret."
  },
  {
    items: [
      { w: "imply", pos: "verb", d: "(the speaker/text) to suggest indirectly" },
      { w: "infer", pos: "verb", d: "(the reader/listener) to deduce from evidence" }
    ],
    note: "A text implies; you infer. Reading questions hinge on this direction."
  },
  {
    items: [
      { w: "elicit", pos: "verb", d: "to draw out (a response, information)" },
      { w: "illicit", pos: "adj", d: "illegal, forbidden" }
    ],
    note: "Elicit a reaction vs illicit trade."
  },
  {
    items: [
      { w: "disinterested", pos: "adj", d: "impartial, unbiased" },
      { w: "uninterested", pos: "adj", d: "bored, not interested" }
    ],
    note: "A good judge is disinterested, not uninterested — a classic trap word."
  },
  {
    items: [
      { w: "historic", pos: "adj", d: "momentous, of great importance" },
      { w: "historical", pos: "adj", d: "relating to history / the past" }
    ],
    note: "A historic event changed the world; a historical novel is set in the past."
  },
  {
    items: [
      { w: "adverse", pos: "adj", d: "unfavourable, harmful" },
      { w: "averse", pos: "adj", d: "opposed to, reluctant ('averse to risk')" }
    ],
    note: "Adverse weather vs averse to change."
  },
  {
    items: [
      { w: "precede", pos: "verb", d: "to come before in time or order" },
      { w: "proceed", pos: "verb", d: "to continue or go ahead" }
    ],
    note: "What precedes X comes first; to proceed is to carry on."
  },
  {
    items: [
      { w: "stationary", pos: "adj", d: "not moving, fixed in place" },
      { w: "stationery", pos: "noun", d: "writing materials (paper, pens)" }
    ],
    note: "StationAry = At rest; stationEry = paper (E)."
  },
  {
    items: [
      { w: "comprise", pos: "verb", d: "to consist of / be made up of (whole comprises parts)" },
      { w: "compose", pos: "verb", d: "to make up (parts compose the whole)" },
      { w: "constitute", pos: "verb", d: "to form / amount to" }
    ],
    note: "The whole comprises the parts; the parts constitute the whole. Avoid 'is comprised of' in precise reading."
  },
  {
    items: [
      { w: "practical", pos: "adj", d: "useful, hands-on, concerned with action" },
      { w: "practicable", pos: "adj", d: "able to be done, feasible" }
    ],
    note: "A practical skill vs a practicable plan (one that can actually be carried out)."
  },
  {
    items: [
      { w: "alternate", pos: "adj / verb", d: "every other one; to switch back and forth" },
      { w: "alternative", pos: "adj / noun", d: "a different option or choice" }
    ],
    note: "Alternate days = every second day; an alternative = another option."
  },
  {
    items: [
      { w: "credible", pos: "adj", d: "believable, convincing" },
      { w: "credulous", pos: "adj", d: "too ready to believe; gullible" }
    ],
    note: "A credible source is trustworthy; a credulous reader is easily fooled."
  },
  {
    items: [
      { w: "ensure", pos: "verb", d: "to make certain" },
      { w: "insure", pos: "verb", d: "to protect with insurance" },
      { w: "assure", pos: "verb", d: "to tell someone confidently, reassure" }
    ],
    note: "Ensure a result, insure a car, assure a person."
  },
  {
    items: [
      { w: "complement", pos: "noun / verb", d: "something that completes or goes well with" },
      { w: "compliment", pos: "noun / verb", d: "praise, a flattering remark" }
    ],
    note: "Complement = complete; compliment = 'I like it'."
  },
  {
    items: [
      { w: "explicit", pos: "adj", d: "stated directly and clearly" },
      { w: "implicit", pos: "adj", d: "implied, understood without being said" }
    ],
    note: "An explicit claim is on the page; an implicit one must be inferred — see imply/infer."
  },
  {
    items: [
      { w: "assume", pos: "verb", d: "to suppose without proof" },
      { w: "presume", pos: "verb", d: "to suppose based on probability or grounds" }
    ],
    note: "presume rests on some reason; assume needs none."
  },
  {
    items: [
      { w: "deduce", pos: "verb", d: "to reach a conclusion by reasoning" },
      { w: "deduct", pos: "verb", d: "to subtract an amount" }
    ],
    note: "You deduce a conclusion but deduct a number."
  },
  {
    items: [
      { w: "adopt", pos: "verb", d: "to take up or start using" },
      { w: "adapt", pos: "verb", d: "to adjust or modify to suit" }
    ],
    note: "Adopt a method as it is; adapt it by changing it."
  },
  {
    items: [
      { w: "later", pos: "adv / adj", d: "at a subsequent time" },
      { w: "latter", pos: "adj / noun", d: "the second of two things mentioned" }
    ],
    note: "the former / the latter = the first / the second; later = afterwards."
  },
  {
    items: [
      { w: "systematic", pos: "adj", d: "done methodically, according to a system" },
      { w: "systemic", pos: "adj", d: "affecting an entire system or body" }
    ],
    note: "A systematic search is orderly; systemic failure runs through the whole system."
  },
  {
    items: [
      { w: "exhaustive", pos: "adj", d: "thorough, covering everything" },
      { w: "exhausting", pos: "adj", d: "extremely tiring" }
    ],
    note: "An exhaustive study is complete; an exhausting one wears you out."
  },
  {
    items: [
      { w: "definite", pos: "adj", d: "clear, certain, fixed" },
      { w: "definitive", pos: "adj", d: "final and authoritative, settling the matter" }
    ],
    note: "A definite answer is certain; the definitive account is the last word on it."
  },
  {
    items: [
      { w: "successive", pos: "adj", d: "following one after another, consecutive" },
      { w: "successful", pos: "adj", d: "achieving the aim" }
    ],
    note: "Three successive years = three in a row, regardless of success."
  },
  {
    items: [
      { w: "industrial", pos: "adj", d: "relating to industry or factories" },
      { w: "industrious", pos: "adj", d: "hard-working, diligent" }
    ],
    note: "An industrial region has factories; an industrious worker puts in effort."
  },
  {
    items: [
      { w: "notable", pos: "adj", d: "worthy of attention, remarkable" },
      { w: "notorious", pos: "adj", d: "famous for something bad" }
    ],
    note: "notorious is negative — a trap when a statement calls something merely 'famous'."
  },
  {
    items: [
      { w: "temporal", pos: "adj", d: "relating to time (or worldly, not spiritual)" },
      { w: "temporary", pos: "adj", d: "lasting only a short time" }
    ],
    note: "Temporal order = time order; a temporary measure is short-lived."
  },
  {
    items: [
      { w: "judicial", pos: "adj", d: "relating to courts and judges" },
      { w: "judicious", pos: "adj", d: "showing good judgement, sensible" }
    ],
    note: "A judicial ruling is a court's; a judicious choice is a wise one."
  },
  {
    items: [
      { w: "prescribe", pos: "verb", d: "to recommend or order officially" },
      { w: "proscribe", pos: "verb", d: "to forbid or ban" }
    ],
    note: "Near-opposites — a high-value trap. Prescribe = require; proscribe = prohibit."
  },
  {
    items: [
      { w: "emigrate", pos: "verb", d: "to leave one's own country to live elsewhere" },
      { w: "immigrate", pos: "verb", d: "to come into a country to live" },
      { w: "migrate", pos: "verb", d: "to move from one place to another (often seasonally)" }
    ],
    note: "Emigrate FROM, immigrate TO; migrate is the neutral, general move."
  },
  {
    items: [
      { w: "council", pos: "noun", d: "an assembly or governing body" },
      { w: "counsel", pos: "noun / verb", d: "advice; to advise; a lawyer" }
    ],
    note: "A council meets; counsel is the advice it might give."
  },
  {
    items: [
      { w: "dependent", pos: "adj", d: "relying on something or someone" },
      { w: "dependant", pos: "noun", d: "a person who depends on another (UK spelling)" }
    ],
    note: "Be dependent (adj) on aid; support a dependant (n)."
  },
  {
    items: [
      { w: "device", pos: "noun", d: "a tool, gadget or plan" },
      { w: "devise", pos: "verb", d: "to invent or plan" }
    ],
    note: "You devise (v) a clever device (n)."
  },
  {
    items: [
      { w: "allusion", pos: "noun", d: "an indirect reference" },
      { w: "illusion", pos: "noun", d: "a false impression or belief" }
    ],
    note: "An allusion points to something; an illusion deceives you."
  },
  {
    items: [
      { w: "perspective", pos: "noun", d: "a point of view or way of seeing" },
      { w: "prospective", pos: "adj", d: "expected or likely in the future, potential" }
    ],
    note: "Your perspective is your viewpoint; a prospective student is a future one."
  },
  {
    items: [
      { w: "eminent", pos: "adj", d: "distinguished, famous and respected" },
      { w: "imminent", pos: "adj", d: "about to happen very soon" }
    ],
    note: "An eminent scientist is renowned; an imminent storm is close."
  },
  {
    items: [
      { w: "rebut", pos: "verb", d: "to argue against, claim something is false" },
      { w: "refute", pos: "verb", d: "to prove something is false (stronger)" }
    ],
    note: "Refute implies success; rebut is only the attempt. Reading tests this strength gap."
  }
];

/* ---- academic collocations ---- */
const COLLOCATIONS = [
 {
  "g": "Research & evidence",
  "sense": "verbs and phrases around studying and proof",
  "items": [
   {
    "w": "conduct / carry out research",
    "d": "to do a planned, systematic investigation into a topic or question",
    "x": "The university conducted research into how sleep affects students' memory and concentration."
   },
   {
    "w": "a study found that",
    "d": "phrase introducing a research result or conclusion when reporting findings",
    "x": "A recent study found that regular exercise improves mood more than previously assumed."
   },
   {
    "w": "a body of evidence",
    "d": "a large collection of facts or proof supporting a particular conclusion",
    "x": "A growing body of evidence links air pollution to long-term respiratory disease."
   },
   {
    "w": "empirical evidence",
    "d": "proof based on observation or experiment rather than theory or opinion",
    "x": "The theory lacked empirical evidence, so few scientists were willing to accept it."
   },
   {
    "w": "anecdotal evidence",
    "d": "informal proof from personal stories, considered unreliable in serious research",
    "x": "The claim rested only on anecdotal evidence, not on any controlled experiments."
   },
   {
    "w": "shed light on",
    "d": "to provide new information that helps explain or clarify something",
    "x": "The excavation sheds light on how ancient farmers managed scarce water supplies."
   },
   {
    "w": "lend support to",
    "d": "to provide evidence that strengthens a theory, claim or argument",
    "x": "The new fossils lend support to the idea that birds descended from dinosaurs."
   },
   {
    "w": "cast doubt on",
    "d": "to make something seem less certain, true or reliable",
    "x": "The flawed method casts doubt on the reliability of the entire experiment."
   },
   {
    "w": "yield results",
    "d": "to produce findings or outcomes, often from research or effort",
    "x": "The long-term trial finally yielded results that surprised the research team."
   },
   {
    "w": "gather data",
    "d": "to collect facts, figures or information for analysis",
    "x": "Researchers gathered data from thousands of households across several regions."
   },
   {
    "w": "draw on findings",
    "d": "to use existing research results as a basis for new work",
    "x": "The report draws on findings from earlier studies of urban migration patterns."
   },
   {
    "w": "corroborate a claim",
    "d": "to confirm or support a statement with additional evidence",
    "x": "Independent witnesses corroborated the claim that the eruption began at dawn."
   },
   {
    "w": "replicate a study",
    "d": "to repeat research under the same conditions to test its reliability",
    "x": "Other scientists failed to replicate the study, raising doubts about its conclusions."
   },
   {
    "w": "a sample size",
    "d": "the number of people or items included in a research study",
    "x": "The small sample size meant the results could not be generalised confidently."
   },
   {
    "w": "statistically significant",
    "d": "unlikely to be caused by chance, in statistical terms",
    "x": "The difference between the two groups was statistically significant, supporting the hypothesis."
   }
  ]
 },
 {
  "g": "Cause & impact",
  "sense": "expressing influence and consequence",
  "items": [
   {
    "w": "pose a threat / risk",
    "d": "to be a possible source of danger or harm to something",
    "x": "Rising sea levels pose a serious threat to low-lying coastal communities."
   },
   {
    "w": "give rise to",
    "d": "to cause something to happen or exist, often a problem",
    "x": "Rapid urban growth gave rise to severe traffic congestion and housing shortages."
   },
   {
    "w": "have an impact on",
    "d": "to have a noticeable effect or influence on something",
    "x": "Social media has had a profound impact on how teenagers communicate."
   },
   {
    "w": "account for (40%)",
    "d": "to form or make up a particular share or proportion of something",
    "x": "Transport accounts for nearly 40% of the country's carbon emissions."
   },
   {
    "w": "exert influence over",
    "d": "to have power that affects how something develops or behaves",
    "x": "Multinational firms exert considerable influence over local environmental policy."
   },
   {
    "w": "take a toll on",
    "d": "to cause gradual harm, damage or loss to something",
    "x": "Years of overwork took a heavy toll on her physical and mental health."
   },
   {
    "w": "contribute to",
    "d": "to be one of the causes that helps produce a result",
    "x": "Deforestation contributes to soil erosion and the loss of biodiversity."
   },
   {
    "w": "stem from",
    "d": "to be caused by or originate from a particular source",
    "x": "Many of these conflicts stem from competition over scarce natural resources."
   },
   {
    "w": "trigger a response",
    "d": "to cause a reaction or set of actions to begin",
    "x": "The new tax policy triggered an immediate response from business leaders."
   },
   {
    "w": "result in",
    "d": "to cause a particular outcome or consequence to happen",
    "x": "Prolonged drought resulted in widespread crop failure across the region."
   },
   {
    "w": "a knock-on effect",
    "d": "an indirect result that follows from an earlier event or action",
    "x": "Factory closures had a knock-on effect on local shops and services."
   },
   {
    "w": "a ripple effect",
    "d": "a spreading series of consequences arising from one event",
    "x": "The bank's collapse created a ripple effect throughout the global economy."
   },
   {
    "w": "the root cause",
    "d": "the most basic, underlying reason for a problem",
    "x": "Poverty was identified as the root cause of the region's poor health."
   },
   {
    "w": "a contributing factor",
    "d": "one of several things that helps cause a result",
    "x": "Poor diet is a major contributing factor in the rise of obesity."
   },
   {
    "w": "far-reaching consequences",
    "d": "effects that are extensive and affect many things over time",
    "x": "The decision had far-reaching consequences for the country's energy supply."
   }
  ]
 },
 {
  "g": "Argument & reasoning",
  "sense": "how writers build and weigh claims",
  "items": [
   {
    "w": "draw a conclusion",
    "d": "to form a judgement or decision after considering the evidence",
    "x": "From these results, we can draw the conclusion that the treatment is effective."
   },
   {
    "w": "draw a distinction",
    "d": "to point out a clear difference between two things",
    "x": "The author draws a distinction between weather and long-term climate patterns."
   },
   {
    "w": "reach a consensus",
    "d": "to arrive at general agreement among a group of people",
    "x": "After lengthy debate, the committee finally reached a consensus on the proposal."
   },
   {
    "w": "make a case for",
    "d": "to give arguments supporting a particular idea or course of action",
    "x": "The report makes a strong case for investing in renewable energy."
   },
   {
    "w": "put forward a theory",
    "d": "to suggest or propose an explanation for consideration",
    "x": "Darwin put forward a theory that revolutionised our understanding of life."
   },
   {
    "w": "raise questions about",
    "d": "to cause people to feel doubt or uncertainty about something",
    "x": "The findings raise serious questions about the safety of the drug."
   },
   {
    "w": "challenge the assumption",
    "d": "to question whether a widely accepted belief is actually true",
    "x": "The study challenges the assumption that money always increases happiness."
   },
   {
    "w": "lend weight to",
    "d": "to make an argument or idea seem more convincing or important",
    "x": "The fresh data lends weight to the theory of early human migration."
   },
   {
    "w": "call into question",
    "d": "to cause doubt about whether something is true or valid",
    "x": "The errors call into question the accuracy of the entire dataset."
   },
   {
    "w": "concede a point",
    "d": "to admit that part of an opposing argument is correct",
    "x": "Even critics concede the point that the policy reduced unemployment."
   },
   {
    "w": "a compelling argument",
    "d": "a persuasive argument that is difficult to disagree with",
    "x": "She presented a compelling argument for reforming the examination system."
   },
   {
    "w": "a line of reasoning",
    "d": "a connected sequence of thoughts leading to a conclusion",
    "x": "His line of reasoning was logical, but it rested on a false premise."
   },
   {
    "w": "a counter-argument",
    "d": "an argument made against another argument or position",
    "x": "The essay anticipates the obvious counter-argument and refutes it effectively."
   },
   {
    "w": "on the grounds that",
    "d": "used to give the reason or justification for something",
    "x": "The proposal was rejected on the grounds that it was too expensive."
   },
   {
    "w": "in light of",
    "d": "considering or taking account of a particular fact",
    "x": "In light of recent evidence, the original theory must be revised."
   }
  ]
 },
 {
  "g": "Quantity & range",
  "sense": "vague but high-frequency measure phrases",
  "items": [
   {
    "w": "a wide range of",
    "d": "a large variety of different things of the same type",
    "x": "The museum displays a wide range of artefacts from many ancient cultures."
   },
   {
    "w": "a wealth of",
    "d": "a large, valuable amount of something, especially information",
    "x": "The archive contains a wealth of information about the city's history."
   },
   {
    "w": "a growing body of",
    "d": "an increasing collection of research, evidence or knowledge",
    "x": "A growing body of research suggests that gardening reduces stress levels."
   },
   {
    "w": "the vast majority of",
    "d": "almost all of a group of people or things",
    "x": "The vast majority of respondents supported stricter recycling regulations."
   },
   {
    "w": "a handful of",
    "d": "a very small number of people or things",
    "x": "Only a handful of species can survive in such extreme desert conditions."
   },
   {
    "w": "a significant proportion",
    "d": "a fairly large share or percentage of a total",
    "x": "A significant proportion of the population now works from home."
   },
   {
    "w": "a marked increase",
    "d": "a clear and noticeable rise in something",
    "x": "There was a marked increase in tourism after the new airport opened."
   },
   {
    "w": "a steady decline",
    "d": "a gradual, continuous decrease over a period of time",
    "x": "The region has seen a steady decline in manufacturing jobs since 1990."
   },
   {
    "w": "few, if any",
    "d": "very few or possibly none at all",
    "x": "Few, if any, of the original buildings have survived the centuries."
   },
   {
    "w": "a fraction of",
    "d": "a very small part or amount of something",
    "x": "The repairs cost only a fraction of the price of a replacement."
   },
   {
    "w": "an overwhelming majority",
    "d": "a very large majority, far more than half",
    "x": "An overwhelming majority of scientists agree that the climate is warming."
   },
   {
    "w": "a negligible amount",
    "d": "an amount so small it is not worth considering",
    "x": "The change added only a negligible amount to the overall budget."
   },
   {
    "w": "a broad spectrum of",
    "d": "a wide and varied range of things or opinions",
    "x": "The survey captured a broad spectrum of views across all age groups."
   },
   {
    "w": "a steady stream of",
    "d": "a continuous, regular flow of people or things",
    "x": "The site attracts a steady stream of visitors throughout the year."
   }
  ]
 },
 {
  "g": "Importance & role",
  "sense": "signalling what matters in the text",
  "items": [
   {
    "w": "play a key role",
    "d": "to be very important in causing or achieving something",
    "x": "Bees play a key role in pollinating the crops we depend on."
   },
   {
    "w": "highlight the importance of",
    "d": "to draw attention to how important something is",
    "x": "The disaster highlighted the importance of strong building regulations."
   },
   {
    "w": "be widely regarded as",
    "d": "to be generally considered or accepted as something by many people",
    "x": "The painting is widely regarded as the artist's greatest achievement."
   },
   {
    "w": "set a precedent",
    "d": "to establish an example or rule that others may follow later",
    "x": "The ruling set a precedent for future environmental court cases."
   },
   {
    "w": "be of paramount importance",
    "d": "to be more important than anything else",
    "x": "Safety is of paramount importance when designing nuclear power stations."
   },
   {
    "w": "take centre stage",
    "d": "to become the main focus of attention",
    "x": "Climate policy took centre stage at this year's international summit."
   },
   {
    "w": "be instrumental in",
    "d": "to play an important part in making something happen",
    "x": "She was instrumental in establishing the country's first national park."
   },
   {
    "w": "lie at the heart of",
    "d": "to be the central or most essential part of something",
    "x": "Trust lies at the heart of any successful business relationship."
   },
   {
    "w": "be central to",
    "d": "to be the most important element of something",
    "x": "Access to clean water is central to the region's development plans."
   },
   {
    "w": "a turning point",
    "d": "a moment when an important change begins to happen",
    "x": "The invention of printing marked a turning point in human history."
   },
   {
    "w": "a defining feature",
    "d": "a characteristic that makes something distinctive or recognisable",
    "x": "Sloping roofs are a defining feature of traditional Alpine architecture."
   },
   {
    "w": "the cornerstone of",
    "d": "the most basic and essential part on which something depends",
    "x": "Free education is the cornerstone of the government's social policy."
   },
   {
    "w": "take precedence over",
    "d": "to be treated as more important than something else",
    "x": "Public health must take precedence over short-term economic gains."
   },
   {
    "w": "a key driver",
    "d": "a main factor that causes something to develop or grow",
    "x": "Technology has been a key driver of change in modern workplaces."
   }
  ]
 },
 {
  "g": "Change & development",
  "sense": "describing how things shift over time",
  "items": [
   {
    "w": "undergo a transformation",
    "d": "to experience a complete and significant change",
    "x": "The neighbourhood has undergone a remarkable transformation in recent years."
   },
   {
    "w": "bring about change",
    "d": "to cause something to change or happen",
    "x": "New legislation helped bring about lasting change in working conditions."
   },
   {
    "w": "gain momentum",
    "d": "to develop greater speed, force or support over time",
    "x": "The campaign for cleaner air is steadily gaining momentum nationwide."
   },
   {
    "w": "pave the way for",
    "d": "to create conditions that make a later development possible",
    "x": "The discovery paved the way for major advances in modern medicine."
   },
   {
    "w": "fall out of favour",
    "d": "to stop being popular, accepted or fashionable",
    "x": "Coal gradually fell out of favour as cleaner fuels became available."
   },
   {
    "w": "come to the fore",
    "d": "to become important, prominent or widely noticed",
    "x": "Environmental concerns came to the fore during the 1970s."
   },
   {
    "w": "evolve over time",
    "d": "to develop and change gradually across a long period",
    "x": "Languages evolve over time, gaining new words and losing old ones."
   },
   {
    "w": "mark a shift",
    "d": "to indicate or represent a change in direction or attitude",
    "x": "The policy marks a clear shift towards renewable energy sources."
   },
   {
    "w": "usher in",
    "d": "to introduce or mark the start of a new period or era",
    "x": "The internet ushered in a new age of instant global communication."
   },
   {
    "w": "be on the decline",
    "d": "to be gradually decreasing in number, amount or quality",
    "x": "Traditional crafts are on the decline as factories take over production."
   },
   {
    "w": "a paradigm shift",
    "d": "a fundamental change in basic assumptions or approach",
    "x": "The theory caused a paradigm shift in how scientists viewed the universe."
   },
   {
    "w": "a sea change",
    "d": "a profound and far-reaching transformation in attitudes or conditions",
    "x": "There has been a sea change in public attitudes towards recycling."
   },
   {
    "w": "a watershed moment",
    "d": "a turning point that marks an important change",
    "x": "The election proved a watershed moment in the nation's political history."
   },
   {
    "w": "a gradual progression",
    "d": "a slow, steady development from one stage to another",
    "x": "The disease shows a gradual progression over many years."
   }
  ]
 },
 {
  "g": "Belief & attitude",
  "sense": "tracking opinions (attribution-critical)",
  "items": [
   {
    "w": "a widely held belief",
    "d": "an opinion or idea that many people accept as true",
    "x": "It is a widely held belief that exercise improves overall wellbeing."
   },
   {
    "w": "a common misconception",
    "d": "a mistaken idea that many people wrongly believe",
    "x": "A common misconception is that we only use ten percent of our brains."
   },
   {
    "w": "a vested interest",
    "d": "a personal reason for wanting something, usually for gain",
    "x": "Oil companies have a vested interest in delaying climate regulation."
   },
   {
    "w": "be sceptical of",
    "d": "to doubt whether something is true, valid or worthwhile",
    "x": "Many experts remain sceptical of the new diet's bold claims."
   },
   {
    "w": "be at odds with",
    "d": "to disagree with or conflict with something",
    "x": "His conclusions are at odds with the findings of earlier studies."
   },
   {
    "w": "subscribe to a view",
    "d": "to agree with or support a particular opinion or theory",
    "x": "Few historians now subscribe to that view of the war's causes."
   },
   {
    "w": "take issue with",
    "d": "to disagree with or challenge a statement or idea",
    "x": "Several scientists took issue with the way the data was interpreted."
   },
   {
    "w": "a school of thought",
    "d": "a group of people who share a particular opinion or approach",
    "x": "One school of thought argues that creativity cannot be taught."
   },
   {
    "w": "conventional wisdom",
    "d": "the generally accepted opinion that most people hold",
    "x": "Conventional wisdom holds that breakfast is the most important meal."
   },
   {
    "w": "a prevailing view",
    "d": "the opinion that is most common or dominant at a time",
    "x": "The prevailing view among economists is that interest rates will fall."
   },
   {
    "w": "a deep-seated belief",
    "d": "a firmly established belief that is hard to change",
    "x": "The reforms challenged deep-seated beliefs about the role of women."
   },
   {
    "w": "a growing consensus",
    "d": "an increasing level of agreement among people",
    "x": "There is a growing consensus that plastic waste must be reduced."
   },
   {
    "w": "a contentious issue",
    "d": "a subject that causes strong disagreement or argument",
    "x": "Immigration remains a contentious issue in many wealthy countries."
   },
   {
    "w": "polarise opinion",
    "d": "to divide people into two strongly opposed groups",
    "x": "The controversial film polarised opinion among critics and audiences alike."
   }
  ]
 },
 {
  "g": "Problem & solution",
  "sense": "the problem–response arc passages love",
  "items": [
   {
    "w": "address an issue",
    "d": "to deal with or take action on a problem",
    "x": "The government has promised to address the issue of rising house prices."
   },
   {
    "w": "tackle a problem",
    "d": "to make a determined effort to deal with a problem",
    "x": "Several charities are working to tackle the problem of homelessness."
   },
   {
    "w": "overcome an obstacle",
    "d": "to successfully deal with a difficulty or barrier",
    "x": "The team overcame numerous obstacles to complete the bridge on time."
   },
   {
    "w": "bridge the gap",
    "d": "to reduce or remove the difference between two things",
    "x": "The programme aims to bridge the gap between rich and poor schools."
   },
   {
    "w": "find a remedy",
    "d": "to discover a way of solving or improving a problem",
    "x": "Scientists are racing to find a remedy for the spreading crop disease."
   },
   {
    "w": "mitigate the effects",
    "d": "to make the harmful effects of something less severe",
    "x": "Planting trees can help mitigate the effects of urban air pollution."
   },
   {
    "w": "a lasting solution",
    "d": "a solution that solves a problem permanently rather than temporarily",
    "x": "Short-term aid is useful, but the region needs a lasting solution."
   },
   {
    "w": "a stumbling block",
    "d": "an obstacle that prevents progress or agreement",
    "x": "The high cost remains the main stumbling block to wider adoption."
   },
   {
    "w": "fall short of",
    "d": "to fail to reach a required or expected standard",
    "x": "The results fell short of the targets set at the project's start."
   },
   {
    "w": "grapple with",
    "d": "to struggle to deal with a difficult problem or task",
    "x": "Many cities are grappling with the challenge of reducing traffic congestion."
   },
   {
    "w": "pose a challenge",
    "d": "to be something difficult that must be dealt with",
    "x": "An ageing population poses a significant challenge for health services."
   },
   {
    "w": "a viable solution",
    "d": "a solution that is practical and likely to succeed",
    "x": "Solar power offers a viable solution for remote, off-grid communities."
   },
   {
    "w": "a quick fix",
    "d": "a fast but usually temporary or superficial solution",
    "x": "There is no quick fix for problems caused by decades of neglect."
   },
   {
    "w": "get to the root of",
    "d": "to discover the fundamental cause of a problem",
    "x": "Researchers are trying to get to the root of the recurring outbreaks."
   }
  ]
 },
 {
  "g": "Time & sequence",
  "sense": "ordering events — vital for process & history passages",
  "items": [
   {
    "w": "prior to",
    "d": "before a particular time or event",
    "x": "Prior to the invention of the wheel, goods were carried by hand."
   },
   {
    "w": "in the wake of",
    "d": "following and as a result of an event, often negative",
    "x": "In the wake of the flood, the government tightened building regulations."
   },
   {
    "w": "over the course of",
    "d": "during a particular period of time",
    "x": "The glacier retreated significantly over the course of the last century."
   },
   {
    "w": "in the aftermath of",
    "d": "in the period following an important, usually harmful, event",
    "x": "In the aftermath of the war, the economy took years to recover."
   },
   {
    "w": "at the outset",
    "d": "at the very beginning of something",
    "x": "The risks were clearly explained to participants at the outset."
   },
   {
    "w": "in due course",
    "d": "at an appropriate time in the future, eventually",
    "x": "The results of the inquiry will be published in due course."
   },
   {
    "w": "by the time",
    "d": "used to say that one event happens before or as another occurs",
    "x": "By the time help arrived, the fire had destroyed several buildings."
   },
   {
    "w": "in the interim",
    "d": "during the period between two events; meanwhile",
    "x": "A new system is planned; in the interim, the old one continues."
   },
   {
    "w": "simultaneously",
    "d": "happening or done at the same time",
    "x": "The two experiments were carried out simultaneously in separate laboratories."
   },
   {
    "w": "in retrospect",
    "d": "when looking back on a past event with present knowledge",
    "x": "In retrospect, the warning signs of the collapse were obvious."
   },
   {
    "w": "from then on",
    "d": "starting from that time and continuing afterwards",
    "x": "The treaty was signed, and from then on relations steadily improved."
   },
   {
    "w": "no sooner than",
    "d": "used to say one thing happened immediately after another",
    "x": "No sooner had the rains stopped than the river burst its banks."
   }
  ]
 },
 {
  "g": "Comparison & contrast",
  "sense": "linkers that flag a similarity or a difference",
  "items": [
   {
    "w": "in contrast to",
    "d": "used to highlight a clear difference between two things.",
    "x": "In contrast to coastal cities, inland regions saw little change in rainfall."
   },
   {
    "w": "by comparison",
    "d": "linker introducing how one thing differs when measured against another.",
    "x": "The first group improved slowly; the second, by comparison, advanced rapidly."
   },
   {
    "w": "on the other hand",
    "d": "introduces a contrasting point or alternative viewpoint.",
    "x": "Solar power is clean; on the other hand, it depends heavily on weather."
   },
   {
    "w": "in much the same way",
    "d": "signals a close similarity between two situations or processes.",
    "x": "Cities grow in much the same way as living organisms expand and adapt."
   },
   {
    "w": "as opposed to",
    "d": "contrasts one option directly with another, preferred alternative.",
    "x": "Researchers favoured field studies as opposed to laboratory experiments."
   },
   {
    "w": "relative to",
    "d": "compared with, used to measure one thing against a reference point.",
    "x": "Wages rose only slightly relative to the steep increase in housing costs."
   },
   {
    "w": "when set against",
    "d": "introduces a contrast by comparing something with another factor.",
    "x": "When set against earlier estimates, the new figures appear surprisingly modest."
   },
   {
    "w": "on a par with",
    "d": "at the same level or standard as something else.",
    "x": "Their literacy rates are now on a par with far wealthier nations."
   },
   {
    "w": "in stark contrast",
    "d": "emphasises a very sharp, striking difference between two things.",
    "x": "Rural incomes stagnated, in stark contrast to the booming urban economy."
   },
   {
    "w": "conversely",
    "d": "introduces an opposite or reversed situation; used to flip a statement.",
    "x": "Wealthier students often attend longer; conversely, poorer students leave early."
   },
   {
    "w": "likewise",
    "d": "in the same way; used to add a parallel similar point.",
    "x": "Diet affects longevity; likewise, regular exercise extends healthy life expectancy."
   },
   {
    "w": "whereas",
    "d": "links two clauses to mark a direct contrast between them.",
    "x": "Northern soils were fertile, whereas southern land remained dry and barren."
   }
  ]
 },
 {
  "g": "Degree & extent",
  "sense": "hedging how much / how far — answer-deciders",
  "items": [
   {
    "w": "to a large extent",
    "d": "mostly, but not completely; hedges how far something is true.",
    "x": "To a large extent, the project's success depended on early community support."
   },
   {
    "w": "to some degree",
    "d": "partly true; acknowledges something is true only in part.",
    "x": "The findings support the theory to some degree, but doubts remain."
   },
   {
    "w": "by and large",
    "d": "generally, when considering the whole situation overall.",
    "x": "By and large, the reforms improved access to higher education nationwide."
   },
   {
    "w": "for the most part",
    "d": "mainly or in most cases, allowing for some exceptions.",
    "x": "For the most part, the data confirmed the researchers' initial predictions."
   },
   {
    "w": "on the whole",
    "d": "considering everything; a general overall judgement.",
    "x": "On the whole, the policy reduced emissions without harming economic growth."
   },
   {
    "w": "more or less",
    "d": "approximately or almost completely; an informal hedge.",
    "x": "The two surveys produced more or less identical results across regions."
   },
   {
    "w": "to a certain extent",
    "d": "partly; limits a claim to being true only in part.",
    "x": "Genetics explains the disease to a certain extent, though lifestyle matters too."
   },
   {
    "w": "in large measure",
    "d": "to a great degree; mostly responsible for an outcome.",
    "x": "The recovery was, in large measure, due to sustained government investment."
   },
   {
    "w": "up to a point",
    "d": "true only partly, with clear limits beyond which it fails.",
    "x": "Higher pay motivates workers up to a point, then other factors dominate."
   },
   {
    "w": "if anything",
    "d": "used to suggest the opposite or a stronger version is true.",
    "x": "The new method was not slower; if anything, it proved faster."
   },
   {
    "w": "at best / at worst",
    "d": "expressing the most or least favourable interpretation of something.",
    "x": "The estimate is, at best, optimistic and, at worst, seriously misleading."
   }
  ]
 },
 {
  "g": "Trends & statistics",
  "sense": "describing figures in graphs and data passages",
  "items": [
   {
    "w": "a sharp rise",
    "d": "a sudden, steep increase in a figure or measurement.",
    "x": "The graph shows a sharp rise in unemployment during the early 1990s."
   },
   {
    "w": "a steady increase",
    "d": "a gradual, consistent growth over a period of time.",
    "x": "There was a steady increase in tourist numbers throughout the decade."
   },
   {
    "w": "a dramatic decline",
    "d": "a large, striking fall in a figure or quantity.",
    "x": "Fish stocks suffered a dramatic decline after the new fishing methods spread."
   },
   {
    "w": "peak at",
    "d": "to reach the highest point before falling, used with figures.",
    "x": "Visitor numbers peak at around two million during the summer months."
   },
   {
    "w": "account for (30%)",
    "d": "to make up a stated proportion of a total.",
    "x": "Renewable sources now account for 30% of the country's electricity supply."
   },
   {
    "w": "on average",
    "d": "typically, when figures are balanced across a whole group.",
    "x": "On average, households spent a quarter of their income on rent."
   },
   {
    "w": "a downward trend",
    "d": "a general pattern of decreasing values over time.",
    "x": "The figures reveal a downward trend in smoking among young adults."
   },
   {
    "w": "reach a record high",
    "d": "to climb to the highest level ever recorded.",
    "x": "Global temperatures reached a record high during the past calendar year."
   },
   {
    "w": "level off",
    "d": "to stop rising or falling and become stable.",
    "x": "After years of rapid growth, sales began to level off in 2010."
   },
   {
    "w": "fluctuate widely",
    "d": "to change frequently and by large amounts, with no steady pattern.",
    "x": "Oil prices fluctuated widely throughout the period of political instability."
   },
   {
    "w": "a tenfold increase",
    "d": "growth to ten times the original amount.",
    "x": "The city saw a tenfold increase in population over a single century."
   },
   {
    "w": "the figure stood at",
    "d": "used to state the exact value reached at a given time.",
    "x": "By 2005, the figure stood at just over four million users."
   }
  ]
 },
 {
  "g": "Economy & money",
  "sense": "recurring economics vocabulary",
  "items": [
   {
    "w": "economic growth",
    "d": "an increase in a country's production of goods and services.",
    "x": "Sustained economic growth allowed the government to expand public services."
   },
   {
    "w": "disposable income",
    "d": "money left for spending or saving after taxes are paid.",
    "x": "Rising disposable income enabled families to spend more on leisure activities."
   },
   {
    "w": "market forces",
    "d": "the natural effects of supply and demand on prices.",
    "x": "Left to market forces alone, housing became unaffordable for many residents."
   },
   {
    "w": "supply and demand",
    "d": "the relationship between available goods and buyers' desire for them.",
    "x": "Prices are determined by the balance between supply and demand."
   },
   {
    "w": "generate revenue",
    "d": "to produce income, usually for a business or government.",
    "x": "The new tourist attraction is expected to generate substantial revenue annually."
   },
   {
    "w": "financial constraints",
    "d": "limits on activity caused by a lack of money.",
    "x": "Financial constraints forced the university to postpone its expansion plans."
   },
   {
    "w": "a budget deficit",
    "d": "when spending exceeds the money a government takes in.",
    "x": "The country ran a large budget deficit after the costly recovery programme."
   },
   {
    "w": "the cost of living",
    "d": "the amount needed to cover basic everyday expenses.",
    "x": "The rising cost of living put pressure on low-income households."
   },
   {
    "w": "a competitive edge",
    "d": "an advantage that helps one outperform rivals.",
    "x": "Investment in research gave the firm a clear competitive edge."
   },
   {
    "w": "economies of scale",
    "d": "cost savings gained by producing goods in larger quantities.",
    "x": "Large factories benefit from economies of scale, lowering the price per unit."
   },
   {
    "w": "a thriving industry",
    "d": "an industry that is growing and very successful.",
    "x": "Tourism has become a thriving industry along the southern coastline."
   }
  ]
 },
 {
  "g": "Society & people",
  "sense": "social-science passages lean on these",
  "items": [
   {
    "w": "social cohesion",
    "d": "the sense of unity and cooperation within a community.",
    "x": "Shared public spaces are thought to strengthen social cohesion among residents."
   },
   {
    "w": "public opinion",
    "d": "the views held collectively by most people in society.",
    "x": "Public opinion gradually shifted in favour of stricter environmental laws."
   },
   {
    "w": "a demographic shift",
    "d": "a change in the structure of a population over time.",
    "x": "A demographic shift towards older citizens strained the pension system."
   },
   {
    "w": "an ageing population",
    "d": "a population in which older people form a growing share.",
    "x": "An ageing population increases demand for healthcare and long-term care."
   },
   {
    "w": "social mobility",
    "d": "the ability to move between social or economic classes.",
    "x": "Better access to education is widely seen as boosting social mobility."
   },
   {
    "w": "living standards",
    "d": "the level of comfort and wealth available to people.",
    "x": "Improved infrastructure gradually raised living standards across the region."
   },
   {
    "w": "the wider community",
    "d": "the broader group of people beyond an immediate circle.",
    "x": "The project aimed to benefit not just students but the wider community."
   },
   {
    "w": "a generation gap",
    "d": "differences in attitudes between younger and older people.",
    "x": "A widening generation gap emerged over the use of new technology."
   },
   {
    "w": "cultural identity",
    "d": "the sense of belonging shaped by shared traditions and values.",
    "x": "Migration can both enrich and threaten a community's cultural identity."
   },
   {
    "w": "the workforce",
    "d": "all the people engaged in or available for paid work.",
    "x": "More women entered the workforce as childcare options expanded."
   },
   {
    "w": "urban sprawl",
    "d": "the uncontrolled spread of a city into surrounding land.",
    "x": "Urban sprawl consumed valuable farmland on the outskirts of the capital."
   }
  ]
 },
 {
  "g": "Environment & nature",
  "sense": "the most common Reading topic area",
  "items": [
   {
    "w": "natural resources",
    "d": "materials from nature, such as minerals, water, or timber.",
    "x": "The region's wealth was built on its abundant natural resources."
   },
   {
    "w": "biological diversity",
    "d": "the variety of living species within an ecosystem.",
    "x": "Deforestation poses a serious threat to the area's biological diversity."
   },
   {
    "w": "ecological balance",
    "d": "the stable relationship between organisms and their environment.",
    "x": "Introducing a new predator can disrupt the ecological balance entirely."
   },
   {
    "w": "carbon footprint",
    "d": "the total greenhouse gases produced by a person or activity.",
    "x": "Cycling to work helps individuals reduce their personal carbon footprint."
   },
   {
    "w": "climate change",
    "d": "long-term shifts in temperature and weather patterns globally.",
    "x": "Many scientists link climate change to rising sea levels worldwide."
   },
   {
    "w": "fossil fuels",
    "d": "energy sources like coal, oil, and gas formed underground.",
    "x": "Burning fossil fuels releases large quantities of carbon dioxide."
   },
   {
    "w": "renewable energy",
    "d": "power from sources that naturally replenish, such as wind or sun.",
    "x": "Investment in renewable energy reduced the country's dependence on imported oil."
   },
   {
    "w": "habitat loss",
    "d": "the destruction of natural areas where species live.",
    "x": "Habitat loss is the leading cause of decline among many bird species."
   },
   {
    "w": "the food chain",
    "d": "the order in which organisms feed on one another.",
    "x": "Pollutants accumulate as they move up through the food chain."
   },
   {
    "w": "an endangered species",
    "d": "a type of animal or plant at risk of extinction.",
    "x": "Conservation programmes were launched to protect several endangered species."
   },
   {
    "w": "greenhouse gases",
    "d": "gases that trap heat and contribute to global warming.",
    "x": "Reducing greenhouse gases requires cooperation between many industrialised nations."
   }
  ]
 },
 {
  "g": "Knowledge & learning",
  "sense": "education and cognition passages",
  "items": [
   {
    "w": "acquire knowledge",
    "d": "to gain understanding or information through study or experience.",
    "x": "Students acquire knowledge more effectively when they apply it practically."
   },
   {
    "w": "broaden one's horizons",
    "d": "to widen one's experience, ideas, or understanding.",
    "x": "Studying abroad can broaden one's horizons in unexpected ways."
   },
   {
    "w": "a steep learning curve",
    "d": "a process requiring rapid, demanding effort to master something.",
    "x": "New employees faced a steep learning curve during their first month."
   },
   {
    "w": "critical thinking",
    "d": "careful, reasoned analysis of ideas and evidence.",
    "x": "Universities increasingly emphasise critical thinking over memorising facts."
   },
   {
    "w": "hands-on experience",
    "d": "practical learning gained by doing something directly.",
    "x": "Internships give graduates valuable hands-on experience before they enter work."
   },
   {
    "w": "transferable skills",
    "d": "abilities useful across many different jobs or contexts.",
    "x": "Teamwork and communication are transferable skills sought by most employers."
   },
   {
    "w": "rote learning",
    "d": "memorising information through repetition without understanding it.",
    "x": "Critics argue that rote learning discourages genuine intellectual engagement."
   },
   {
    "w": "retain information",
    "d": "to keep facts or knowledge in one's memory over time.",
    "x": "Students retain information better when they revise at regular intervals."
   },
   {
    "w": "a body of knowledge",
    "d": "the accumulated information and theory within a field.",
    "x": "Each experiment adds to the growing body of knowledge on memory."
   },
   {
    "w": "trial and error",
    "d": "learning by trying different methods until one succeeds.",
    "x": "The inventor refined the design through years of trial and error."
   },
   {
    "w": "intellectual curiosity",
    "d": "a strong desire to learn and understand new things.",
    "x": "Genuine intellectual curiosity drives many scientists to question accepted ideas."
   }
  ]
 },
 {
  "g": "Health & wellbeing",
  "sense": "medicine and lifestyle passages",
  "items": [
   {
    "w": "a balanced diet",
    "d": "eating a healthy variety of foods in proper proportions.",
    "x": "Doctors recommend a balanced diet rich in fruit and vegetables."
   },
   {
    "w": "life expectancy",
    "d": "the average number of years a person is likely to live.",
    "x": "Improved sanitation greatly increased life expectancy during the last century."
   },
   {
    "w": "mental health",
    "d": "a person's emotional and psychological wellbeing.",
    "x": "Workplace stress can have a serious effect on employees' mental health."
   },
   {
    "w": "a sedentary lifestyle",
    "d": "a way of living involving little physical activity.",
    "x": "A sedentary lifestyle is linked to higher rates of heart disease."
   },
   {
    "w": "physical activity",
    "d": "any movement that uses energy and benefits the body.",
    "x": "Regular physical activity reduces the risk of several chronic conditions."
   },
   {
    "w": "the immune system",
    "d": "the body's defence against infection and disease.",
    "x": "Poor sleep can weaken the immune system and increase illness."
   },
   {
    "w": "a chronic illness",
    "d": "a long-lasting disease that often cannot be fully cured.",
    "x": "Managing a chronic illness places considerable strain on healthcare resources."
   },
   {
    "w": "well-being",
    "d": "a state of being comfortable, healthy, and content.",
    "x": "Access to green spaces is thought to improve residents' well-being."
   },
   {
    "w": "a healthy lifestyle",
    "d": "habits and choices that support good physical health.",
    "x": "Schools increasingly promote a healthy lifestyle through diet and exercise programmes."
   },
   {
    "w": "the onset of (a disease)",
    "d": "the moment a disease or condition first begins.",
    "x": "Early screening can delay the onset of certain age-related diseases."
   },
   {
    "w": "prone to",
    "d": "likely to suffer from or experience something, often negative.",
    "x": "People who skip meals are more prone to fatigue and poor concentration."
   }
  ]
 },
 {
  "g": "Risk & uncertainty",
  "sense": "weighing danger and probability",
  "items": [
   {
    "w": "run the risk of",
    "d": "to expose oneself to the possibility of something bad.",
    "x": "Companies that ignore safety run the risk of costly legal action."
   },
   {
    "w": "a calculated risk",
    "d": "a deliberate risk taken after weighing likely outcomes.",
    "x": "Investing early was a calculated risk that eventually paid off handsomely."
   },
   {
    "w": "mitigate risk",
    "d": "to reduce the chance or severity of potential harm.",
    "x": "Diversifying crops helped farmers mitigate the risk of total failure."
   },
   {
    "w": "a high degree of uncertainty",
    "d": "a situation in which outcomes are very difficult to predict.",
    "x": "The forecasts carried a high degree of uncertainty about future demand."
   },
   {
    "w": "weigh the risks",
    "d": "to consider and compare possible dangers before deciding.",
    "x": "Policymakers must weigh the risks before approving the new treatment."
   },
   {
    "w": "at stake",
    "d": "able to be won or lost depending on what happens.",
    "x": "With thousands of jobs at stake, the negotiations attracted national attention."
   },
   {
    "w": "a potential hazard",
    "d": "something that could possibly cause harm or danger.",
    "x": "Researchers identified the chemical as a potential hazard to marine life."
   },
   {
    "w": "err on the side of caution",
    "d": "to choose the safer, more careful option when unsure.",
    "x": "Lacking firm data, the committee chose to err on the side of caution."
   },
   {
    "w": "a worst-case scenario",
    "d": "the most unfavourable outcome that could possibly occur.",
    "x": "In a worst-case scenario, the entire reservoir could run dry."
   },
   {
    "w": "a margin of error",
    "d": "the allowed amount by which a measurement may be inaccurate.",
    "x": "The survey results carried a margin of error of three percent."
   },
   {
    "w": "fraught with",
    "d": "full of something undesirable, such as danger or difficulty.",
    "x": "The expedition was fraught with unexpected dangers and logistical problems."
   }
  ]
 }
];

window.CONFUSABLES = CONFUSABLES;
window.COLLOCATIONS = COLLOCATIONS;
