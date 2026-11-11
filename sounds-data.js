// Curated Hungarian Sounds, Digraphs & Vowel Length Curriculum (Kiejtés & Hangrend)
// Designed for reading fluency, native pronunciation, and minimal-pair contrast drills.
// Field names match the Language Lab Engine schema (SOUND_CATEGORIES, SOUND_CURRICULUM, MINIMAL_PAIRS, MINIMAL_PAIR_CATEGORIES).

const SOUND_CATEGORIES = [
  { id: "all", name: "All Sounds (42)", symbol: "á–ű / sz–zs", count: 42 },
  { id: "mukta", name: "Short Base Vowels (a, e, i, o, u)", symbol: "a/e", description: "Short foundational vowels without accent marks (note: 'a' is rounded /ɒ/ like British 'hot')" },
  { id: "aa", name: "a vs á (Short /ɒ/ vs Long /aː/)", symbol: "a / á", description: "Short 'a' is rounded [aw]; long 'á' opens the jaw wide [aa] as in 'father'" },
  { id: "e", name: "e vs é (Open /ɛ/ vs Closed /eː/)", symbol: "e / é", description: "Short 'e' is open [eh] as in 'bet'; long 'é' is pure [ay] as in 'cafe'" },
  { id: "i", name: "i / í & u / ú (Length Contrasts)", symbol: "í / ú", description: "Acute accent doubles the duration of the vowel without changing lip shape" },
  { id: "o", name: "o / ó (Short vs Long Rounded Back)", symbol: "o / ó", description: "Short 'o' vs long held 'ó' — changes word meanings (kor = age vs kór = disease)" },
  { id: "oe", name: "ö / ő (Short vs Long Front Rounded)", symbol: "ö / ő", description: "Say 'eh' with rounded lips; double acute 'ő' holds the sound twice as long" },
  { id: "ue", name: "ü / ű (Short vs Long High Rounded)", symbol: "ü / ű", description: "Say 'ee' with tightly rounded lips; double acute 'ű' is long" },
  { id: "sz_s", name: "sz vs s (The #1 English Trap!)", symbol: "sz / s", description: "'sz' is pure English 's' (/s/), whereas single 's' is ALWAYS 'sh' (/ʃ/)!" },
  { id: "cs_c", name: "cs, c & zs (Affricates & Sibilants)", symbol: "cs / c", description: "'cs' is 'ch' (/tʃ/), single 'c' is 'ts' (/ts/), and 'zs' is 'zh' (/ʒ/ as in 'measure')" },
  { id: "palatal", name: "gy, ny, ty, ly (Palatal Digraphs)", symbol: "gy / ny", description: "Single palatal sounds written with two letters: gy (/ɟ/), ny (/ɲ/), ty (/c/), ly (/j/ = 'y')" }
];

const SOUND_CURRICULUM = [
  // --- 1. Foundational Short Vowels (mukta) ---
  {
    id: "nap",
    target: "nap",
    phonetic: "nawp",
    english: "day / sun",
    soundId: "mukta",
    soundName: "Short 'a' (/ɒ/)",
    soundVowel: "a",
    soundSymbol: "a",
    soundType: "Short Rounded Back Vowel",
    phonics: "nawp (rounded 'o' as in British 'hot')",
    breakdown: "n + a + p",
    length: 2,
    rule: "Hungarian short 'a' is NOT like 'cat' — round your lips slightly like British 'hot' or 'watch'.",
    examplePhrase: { target: "Jó napot!", phonetic: "yoh naw-pot", english: "Good day / Hello!" }
  },
  {
    id: "nem",
    target: "nem",
    phonetic: "nem",
    english: "no / not",
    soundId: "mukta",
    soundName: "Short 'e' (/ɛ/)",
    soundVowel: "e",
    soundSymbol: "e",
    soundType: "Short Front Vowel",
    phonics: "nem (crisp 'eh' as in 'bet')",
    breakdown: "n + e + m",
    length: 2,
    rule: "Stress is ALWAYS on the first syllable in Hungarian.",
    examplePhrase: { target: "Nem tudom", phonetic: "nem tu-dom", english: "I don't know" }
  },
  {
    id: "igen",
    target: "igen",
    phonetic: "i-gen",
    english: "yes",
    soundId: "mukta",
    soundName: "Short 'i' & 'e'",
    soundVowel: "i / e",
    soundSymbol: "i",
    soundType: "Short Front Vowels",
    phonics: "i-gen (stress on 'i')",
    breakdown: "i + g + e + n",
    length: 2,
    rule: "Two crisp syllables: 'i-gen'. Never reduce unstressed vowels to 'uh' in Hungarian.",
    examplePhrase: { target: "Igen, kérek!", phonetic: "i-gen, kay-rek", english: "Yes, please!" }
  },

  // --- 2. a vs á (aa) ---
  {
    id: "nyar",
    target: "nyár",
    phonetic: "nyaar",
    english: "summer",
    soundId: "aa",
    soundName: "a vs á (Open Long á)",
    soundVowel: "á",
    soundSymbol: "á",
    soundType: "Long Open Vowel",
    phonics: "nyaar (open 'ah' as in 'father')",
    breakdown: "ny + á + r",
    length: 2,
    rule: "The acute accent on 'á' opens the mouth wide (/aː/) and holds it twice as long as 'a'.",
    examplePhrase: { target: "Forró nyár", phonetic: "for-roh nyaar", english: "hot summer" }
  },
  {
    id: "ar",
    target: "ár",
    phonetic: "aar",
    english: "price / flood",
    soundId: "aa",
    soundName: "a vs á (Open Long á)",
    soundVowel: "á",
    soundSymbol: "á",
    soundType: "Long Open Vowel",
    phonics: "aar (long open 'ah')",
    breakdown: "á + r",
    length: 2,
    rule: "Long open 'á' + trilled 'r'. Notice 'ár' (price) vs 'ar-any' (gold, short rounded a).",
    examplePhrase: { target: "Jó ár", phonetic: "yoh aar", english: "good price" }
  },
  {
    id: "vasar",
    target: "vásár",
    phonetic: "vaa-shaar",
    english: "market / fair",
    soundId: "aa",
    soundName: "a vs á (Open Long á)",
    soundVowel: "á",
    soundSymbol: "á",
    soundType: "Long Open Vowel",
    phonics: "vaa-shaar (both vowels long + 's' = sh)",
    breakdown: "v + á + s + á + r",
    length: 3,
    rule: "Keep both 'á' vowels long and open, even in the second syllable!",
    examplePhrase: { target: "Karácsonyi vásár", phonetic: "kaw-raa-cho-nyi vaa-shaar", english: "Christmas market" }
  },
  {
    id: "tanar",
    target: "tanár",
    phonetic: "taw-naar",
    english: "teacher",
    soundId: "aa",
    soundName: "a vs á (Contrast in 1 Word!)",
    soundVowel: "a → á",
    soundSymbol: "á",
    soundType: "Short 'a' + Long 'á'",
    phonics: "taw-naar (1st vowel rounded 'aw', 2nd open 'aa')",
    breakdown: "t + a + n + á + r",
    length: 3,
    rule: "Perfect practice word: first syllable has short rounded 'a' (taw-), second has long open 'á' (-naar), while stress stays on the first syllable!",
    examplePhrase: { target: "A magyar tanár", phonetic: "aw maw-dyawr taw-naar", english: "the Hungarian teacher" }
  },

  // --- 3. e vs é (e) ---
  {
    id: "kave_m",
    target: "kávé",
    phonetic: "kaa-vay",
    english: "coffee",
    soundId: "e",
    soundName: "e vs é (Closed Long é)",
    soundVowel: "é",
    soundSymbol: "é",
    soundType: "Long Closed Front Vowel",
    phonics: "kaa-vay (long pure 'ay')",
    breakdown: "k + á + v + é",
    length: 2,
    rule: "Long 'é' is a pure tense vowel like 'ay' in 'bay' (without gliding into 'ee').",
    examplePhrase: { target: "Fekete kávé", phonetic: "feh-keh-teh kaa-vay", english: "black coffee" }
  },
  {
    id: "het",
    target: "hét",
    phonetic: "hayt",
    english: "week / seven (7)",
    soundId: "e",
    soundName: "e vs é (Closed Long é)",
    soundVowel: "é",
    soundSymbol: "é",
    soundType: "Long Closed Front Vowel",
    phonics: "hayt",
    breakdown: "h + é + t",
    length: 2,
    rule: "Means both 'seven' and 'week' (7 days in a week).",
    examplePhrase: { target: "Jövő héten", phonetic: "yoe-voe hay-ten", english: "next week" }
  },
  {
    id: "szel",
    target: "szél",
    phonetic: "sayl",
    english: "wind / edge",
    soundId: "e",
    soundName: "e vs é (Closed Long é)",
    soundVowel: "é",
    soundSymbol: "é",
    soundType: "Long Closed Front Vowel",
    phonics: "sayl ('sz' = s, 'é' = ay)",
    breakdown: "sz + é + l",
    length: 2,
    rule: "Contrast with 'szel' (short e = slices). Long 'é' makes it 'szél' (wind).",
    examplePhrase: { target: "Erős szél fúj", phonetic: "eh-roesh sayl fooy", english: "a strong wind is blowing" }
  },
  {
    id: "zene",
    target: "zene",
    phonetic: "zeh-neh",
    english: "music",
    soundId: "e",
    soundName: "e vs é (Short Open e)",
    soundVowel: "e",
    soundSymbol: "e",
    soundType: "Short Open Front Vowel",
    phonics: "zeh-neh (both vowels short 'eh')",
    breakdown: "z + e + n + e",
    length: 2,
    rule: "Both 'e' vowels are pronounced clearly as short [ɛ] (like 'bet').",
    examplePhrase: { target: "Élő zene", phonetic: "ay-loe zeh-neh", english: "live music" }
  },

  // --- 4. i / í & u / ú (i) ---
  {
    id: "viz_m",
    target: "víz",
    phonetic: "veez",
    english: "water",
    soundId: "i",
    soundName: "i / í & u / ú (Long Vowel)",
    soundVowel: "í",
    soundSymbol: "í",
    soundType: "Long High Vowel",
    phonics: "veez (held long 'ee')",
    breakdown: "v + í + z",
    length: 2,
    rule: "Hold the 'í' sound twice as long as short 'i'. Shortens to 'i' in 'vizet' (water, acc.).",
    examplePhrase: { target: "Hideg víz", phonetic: "hi-deg veez", english: "cold water" }
  },
  {
    id: "hid",
    target: "híd",
    phonetic: "heed",
    english: "bridge",
    soundId: "i",
    soundName: "i / í & u / ú (Long Vowel)",
    soundVowel: "í",
    soundSymbol: "í",
    soundType: "Long High Vowel",
    phonics: "heed",
    breakdown: "h + í + d",
    length: 2,
    rule: "Long 'í' — famous in Budapest's 'Lánchíd' (Chain Bridge).",
    examplePhrase: { target: "A Lánchíd", phonetic: "aw laants-heed", english: "the Chain Bridge" }
  },
  {
    id: "ut",
    target: "út",
    phonetic: "oot",
    english: "road / way / trip",
    soundId: "i",
    soundName: "i / í & u / ú (Long Vowel)",
    soundVowel: "ú",
    soundSymbol: "ú",
    soundType: "Long Back Rounded Vowel",
    phonics: "oot (long 'oo')",
    breakdown: "ú + t",
    length: 2,
    rule: "Long 'ú' means 'road/journey' (shortens to 'utat' in the accusative).",
    examplePhrase: { target: "Jó utat!", phonetic: "yoh u-tawt", english: "Have a good trip! (Bon voyage)" }
  },
  {
    id: "hus",
    target: "hús",
    phonetic: "hoosh",
    english: "meat",
    soundId: "i",
    soundName: "i / í & u / ú (Long Vowel)",
    soundVowel: "ú",
    soundSymbol: "ú",
    soundType: "Long Back Rounded Vowel",
    phonics: "hoosh (long 'oo' + 's' = sh)",
    breakdown: "h + ú + s",
    length: 2,
    rule: "Long 'ú' + 's' (/ʃ/). Don't confuse with 'húsz' (/huːs/ = twenty)!",
    examplePhrase: { target: "Friss hús", phonetic: "frishsh hoosh", english: "fresh meat" }
  },

  // --- 5. o vs ó (o) ---
  {
    id: "ora",
    target: "óra",
    phonetic: "oh-raw",
    english: "hour / clock / watch / class",
    soundId: "o",
    soundName: "o / ó (Long Rounded ó)",
    soundVowel: "ó",
    soundSymbol: "ó",
    soundType: "Long Mid Back Vowel",
    phonics: "oh-raw",
    breakdown: "ó + r + a",
    length: 2,
    rule: "Hold the first 'ó' long, followed by short rounded 'a'.",
    examplePhrase: { target: "Hány óra van?", phonetic: "haany oh-raw vawn", english: "What time is it?" }
  },
  {
    id: "so",
    target: "só",
    phonetic: "shoh",
    english: "salt",
    soundId: "o",
    soundName: "o / ó (Long Rounded ó)",
    soundVowel: "ó",
    soundSymbol: "ó",
    soundType: "Long Mid Back Vowel",
    phonics: "shoh ('s' = sh + long 'oh')",
    breakdown: "s + ó",
    length: 2,
    rule: "Single 's' is 'sh' + long 'ó'. Contrast with 'szó' (/soː/ = word)!",
    examplePhrase: { target: "Só és bors", phonetic: "shoh aysh borsh", english: "salt and pepper" }
  },
  {
    id: "kor",
    target: "kor",
    phonetic: "kor",
    english: "age / era",
    soundId: "o",
    soundName: "o / ó (Short Rounded o)",
    soundVowel: "o",
    soundSymbol: "o",
    soundType: "Short Mid Back Vowel",
    phonics: "kor (crisp short 'o')",
    breakdown: "k + o + r",
    length: 2,
    rule: "Keep 'o' short! Lengthening it to 'kór' changes the meaning to 'disease'!",
    examplePhrase: { target: "Középkor", phonetic: "koe-zayp-kor", english: "Middle Ages" }
  },

  // --- 6. ö vs ő (oe) ---
  {
    id: "sor_m",
    target: "sör",
    phonetic: "shoer",
    english: "beer",
    soundId: "oe",
    soundName: "ö / ő (Front Rounded)",
    soundVowel: "ö",
    soundSymbol: "ö",
    soundType: "Short Front Rounded Vowel",
    phonics: "shoer (say 'eh' through rounded lips)",
    breakdown: "s + ö + r",
    length: 2,
    rule: "Position your tongue for 'e' (as in 'bet') and round your lips as if saying 'o'.",
    examplePhrase: { target: "Hideg sör", phonetic: "hi-deg shoer", english: "cold beer" }
  },
  {
    id: "ot",
    target: "öt",
    phonetic: "oet",
    english: "five (5)",
    soundId: "oe",
    soundName: "ö / ő (Front Rounded)",
    soundVowel: "ö",
    soundSymbol: "ö",
    soundType: "Short Front Rounded Vowel",
    phonics: "oet (short rounded front vowel)",
    breakdown: "ö + t",
    length: 2,
    rule: "Short 'ö' = 5 ('öt'). Compare with 'őt' (long double-acute 'ő' = him/her, accusative)!",
    examplePhrase: { target: "Öt perc", phonetic: "oet perts", english: "five minutes" }
  },
  {
    id: "ido",
    target: "idő",
    phonetic: "i-doe:",
    english: "time / weather",
    soundId: "oe",
    soundName: "ö / ő (Double Acute ő)",
    soundVowel: "ő",
    soundSymbol: "ő",
    soundType: "Long Front Rounded Vowel",
    phonics: "i-doe: (long held 'ö')",
    breakdown: "i + d + ő",
    length: 2,
    rule: "The Hungarian double acute 'ő' (kettős éles ékezet) is the long version of 'ö'. Word-final 'ö' is ALWAYS long 'ő' in Hungarian!",
    examplePhrase: { target: "Szép idő van", phonetic: "sayp i-doe: vawn", english: "The weather is nice" }
  },
  {
    id: "erdo",
    target: "erdő",
    phonetic: "er-doe:",
    english: "forest / woods",
    soundId: "oe",
    soundName: "ö / ő (Double Acute ő)",
    soundVowel: "ő",
    soundSymbol: "ő",
    soundType: "Long Front Rounded Vowel",
    phonics: "er-doe:",
    breakdown: "e + r + d + ő",
    length: 2,
    rule: "Hungarian words never end in short 'ö' or 'ü' — at the end of a word they are always written and pronounced long ('ő', 'ű').",
    examplePhrase: { target: "Zöld erdő", phonetic: "zoeld er-doe:", english: "green forest" }
  },

  // --- 7. ü vs ű (ue) ---
  {
    id: "ul",
    target: "ül",
    phonetic: "uel",
    english: "sits / to sit",
    soundId: "ue",
    soundName: "ü / ű (High Front Rounded)",
    soundVowel: "ü",
    soundSymbol: "ü",
    soundType: "Short High Front Rounded Vowel",
    phonics: "uel (say 'ee' with tightly rounded lips)",
    breakdown: "ü + l",
    length: 2,
    rule: "Say English 'ee' (as in 'see'), then purse your lips into a tight circle without moving your tongue.",
    examplePhrase: { target: "Foglaljon helyet, üljön le!", phonetic: "fog-lawl-yon heh-yet, uel-yoen leh", english: "Take a seat, sit down!" }
  },
  {
    id: "tuz",
    target: "tűz",
    phonetic: "tue:z",
    english: "fire",
    soundId: "ue",
    soundName: "ü / ű (Double Acute ű)",
    soundVowel: "ű",
    soundSymbol: "ű",
    soundType: "Long High Front Rounded Vowel",
    phonics: "tue:z (long held 'ü')",
    breakdown: "t + ű + z",
    length: 2,
    rule: "Double acute 'ű' is the long partner of 'ü'. (Shortens to 'ü' in 'tüzet' = fire, acc.).",
    examplePhrase: { target: "Tűzoltó", phonetic: "tue:z-ol-toh", english: "firefighter" }
  },
  {
    id: "gyumolcs",
    target: "gyümölcs",
    phonetic: "dyue-moelch",
    english: "fruit",
    soundId: "ue",
    soundName: "ü / ű (Rounded Front Combo)",
    soundVowel: "ü + ö",
    soundSymbol: "ü",
    soundType: "Front Rounded Showcase",
    phonics: "dyue-moelch (gy + ü + m + ö + l + cs)",
    breakdown: "gy + ü + m + ö + l + cs",
    length: 4,
    rule: "Combines palatal 'gy', rounded 'ü', rounded 'ö', and 'cs' (/tʃ/) in one essential everyday word!",
    examplePhrase: { target: "Friss gyümölcs", phonetic: "frishsh dyue-moelch", english: "fresh fruit" }
  },

  // --- 8. sz vs s (sz_s) ---
  {
    id: "szia",
    target: "szia",
    phonetic: "si-aw",
    english: "hi / bye (informal)",
    soundId: "sz_s",
    soundName: "sz vs s (Sibilant Pair)",
    soundVowel: "sz (/s/)",
    soundSymbol: "sz",
    soundType: "Digraph 'sz' = /s/",
    phonics: "see-aw ('sz' is pure 's')",
    breakdown: "sz + i + a",
    length: 2,
    rule: "In Hungarian, 'sz' is pronounced like English 's' in 'see'. Saying it to one person is 'Szia!', to multiple people is 'Sziasztok!'.",
    examplePhrase: { target: "Sziasztok!", phonetic: "si-aws-tok", english: "Hi / Bye everyone!" }
  },
  {
    id: "sajnos",
    target: "sajnos",
    phonetic: "shawy-nosh",
    english: "unfortunately",
    soundId: "sz_s",
    soundName: "sz vs s (Sibilant Pair)",
    soundVowel: "s (/ʃ/)",
    soundSymbol: "s",
    soundType: "Single 's' = /ʃ/ ('sh')",
    phonics: "shawy-nosh (both 's' letters are 'sh'!)",
    breakdown: "s + a + j + n + o + s",
    length: 3,
    rule: "Single letter 's' is ALWAYS 'sh' (/ʃ/) in Hungarian, and 'j' is always 'y' (/j/).",
    examplePhrase: { target: "Sajnos nem érek rá", phonetic: "shawy-nosh nem ay-rek raa", english: "Unfortunately I'm not free" }
  },
  {
    id: "egeszsegedre",
    target: "egészségedre",
    phonetic: "eh-gays-shay-ged-reh",
    english: "cheers! / bless you! (to your health)",
    soundId: "sz_s",
    soundName: "sz vs s (Both Side by Side!)",
    soundVowel: "sz + s",
    soundSymbol: "sz/s",
    soundType: "Digraph 'sz' (/s/) + 's' (/ʃ/)",
    phonics: "eh-gays-shay-ged-reh",
    breakdown: "e + g + é + sz + s + é + g + e + d + r + e",
    length: 5,
    rule: "The ultimate Hungarian pronunciation milestone: 'sz' (/s/) is followed immediately by 's' (/ʃ/) — 'egész' (whole/health) + '-ség' (-ness) + '-ed' (your) + '-re' (onto)!",
    examplePhrase: { target: "Egészségedre! Koccintsunk!", phonetic: "eh-gays-shay-ged-reh! kot-chint-chunk", english: "Cheers! Let's clink glasses!" }
  },
  {
    id: "koszonom",
    target: "köszönöm",
    phonetic: "koe-soe-noem",
    english: "thank you",
    soundId: "sz_s",
    soundName: "sz vs s (Sibilant Pair)",
    soundVowel: "sz + ö",
    soundSymbol: "sz",
    soundType: "Digraph 'sz' + Rounded 'ö'",
    phonics: "koe-soe-noem (three identical 'ö' vowels + pure 's')",
    breakdown: "k + ö + sz + ö + n + ö + m",
    length: 4,
    rule: "All three vowels are short rounded 'ö', and the middle consonant is pure 's' ('sz').",
    examplePhrase: { target: "Köszönöm szépen!", phonetic: "koe-soe-noem say-pen", english: "Thank you very much!" }
  },

  // --- 9. cs, c & zs (cs_c) ---
  {
    id: "csokolade",
    target: "csokoládé",
    phonetic: "cho-ko-laa-day",
    english: "chocolate",
    soundId: "cs_c",
    soundName: "cs, c & zs (Affricates)",
    soundVowel: "cs (/tʃ/)",
    soundSymbol: "cs",
    soundType: "Digraph 'cs' = 'ch'",
    phonics: "cho-ko-laa-day",
    breakdown: "cs + o + k + o + l + á + d + é",
    length: 4,
    rule: "Digraph 'cs' is always English 'ch' as in 'chocolate' or 'church'.",
    examplePhrase: { target: "Forró csokoládé", phonetic: "for-roh cho-ko-laa-day", english: "hot chocolate" }
  },
  {
    id: "citrom",
    target: "citrom",
    phonetic: "tsit-rom",
    english: "lemon",
    soundId: "cs_c",
    soundName: "cs, c & zs (Affricates)",
    soundVowel: "c (/ts/)",
    soundSymbol: "c",
    soundType: "Single 'c' = 'ts'",
    phonics: "tsit-rom (starts with 'ts' as in 'cats'!)",
    breakdown: "c + i + t + r + o + m",
    length: 3,
    rule: "Single 'c' in Hungarian is NEVER 'k' or 's' — it is always 'ts' (/ts/), even at the start of a word!",
    examplePhrase: { target: "Tea citrommal", phonetic: "teh-aw tsit-rom-mawl", english: "tea with lemon" }
  },
  {
    id: "utca_m",
    target: "utca",
    phonetic: "ut-tsaw",
    english: "street",
    soundId: "cs_c",
    soundName: "cs, c & zs (Affricates)",
    soundVowel: "c (/ts/)",
    soundSymbol: "c",
    soundType: "Single 'c' = 'ts'",
    phonics: "ut-tsaw",
    breakdown: "u + t + c + a",
    length: 2,
    rule: "'t' + 'c' creates a held /tts/ sound: 'ut-tsaw'.",
    examplePhrase: { target: "Váci utca", phonetic: "vaa-tsi ut-tsaw", english: "Váci Street" }
  },
  {
    id: "zseb",
    target: "zseb",
    phonetic: "zheb",
    english: "pocket",
    soundId: "cs_c",
    soundName: "cs, c & zs (Affricates)",
    soundVowel: "zs (/ʒ/)",
    soundSymbol: "zs",
    soundType: "Digraph 'zs' = 'zh'",
    phonics: "zheb ('s' in 'treasure' / 'measure')",
    breakdown: "zs + e + b",
    length: 2,
    rule: "Just as 's' is 'sh' (/ʃ/), 'zs' is its voiced partner 'zh' (/ʒ/ as in 'vision' or French 'je').",
    examplePhrase: { target: "A kabátom zsebében", phonetic: "aw kaw-baa-tom zheh-bay-ben", english: "in my coat pocket" }
  },

  // --- 10. Palatals: gy, ny, ty, ly (palatal) ---
  {
    id: "magyar",
    target: "magyar",
    phonetic: "maw-dyawr",
    english: "Hungarian",
    soundId: "palatal",
    soundName: "gy, ny, ty, ly (Palatals)",
    soundVowel: "gy (/ɟ/)",
    soundSymbol: "gy",
    soundType: "Palatal Stop 'gy'",
    phonics: "maw-dyawr ('gy' = soft 'dy' as in 'due')",
    breakdown: "m + a + gy + a + r",
    length: 2,
    rule: "'gy' is a single consonant sound made by pressing the middle of the tongue against the roof of the mouth (like 'd' + 'y' fused together in British 'duke').",
    examplePhrase: { target: "Magyarország", phonetic: "maw-dyawr-or-saag", english: "Hungary" }
  },
  {
    id: "egy",
    target: "egy",
    phonetic: "edy",
    english: "one (1) / a, an",
    soundId: "palatal",
    soundName: "gy, ny, ty, ly (Palatals)",
    soundVowel: "gy (/ɟ/)",
    soundSymbol: "gy",
    soundType: "Palatal Stop 'gy'",
    phonics: "edy",
    breakdown: "e + gy",
    length: 2,
    rule: "Counts as a 2-letter word in Hungarian (e + gy)! Means both '1' and the indefinite article 'a/an'.",
    examplePhrase: { target: "Egy kávét kérek", phonetic: "edy kaa-vayt kay-rek", english: "I'd like a coffee" }
  },
  {
    id: "nyelv",
    target: "nyelv",
    phonetic: "nyelv",
    english: "language / tongue",
    soundId: "palatal",
    soundName: "gy, ny, ty, ly (Palatals)",
    soundVowel: "ny (/ɲ/)",
    soundSymbol: "ny",
    soundType: "Palatal Nasal 'ny'",
    phonics: "nyelv ('ny' as in 'canyon' or Spanish 'ñ')",
    breakdown: "ny + e + l + v",
    length: 2,
    rule: "'ny' is a single palatal nasal sound, identical to Spanish 'ñ' or 'ny' in 'canyon'.",
    examplePhrase: { target: "A magyar nyelv", phonetic: "aw maw-dyawr nyelv", english: "the Hungarian language" }
  },
  {
    id: "hely",
    target: "hely",
    phonetic: "hey",
    english: "place / seat / space",
    soundId: "palatal",
    soundName: "gy, ny, ty, ly (Palatals)",
    soundVowel: "ly (/j/)",
    soundSymbol: "ly",
    soundType: "Digraph 'ly' = 'y'",
    phonics: "hey ('ly' is pronounced identically to 'j' = English 'y'!)",
    breakdown: "h + e + ly",
    length: 2,
    rule: "In modern standard Hungarian, 'ly' is pronounced identically to 'j' (/j/, like English 'y' in 'yes'). The 'l' is completely silent!",
    examplePhrase: { target: "Szabad ez a hely?", phonetic: "saw-bawd ez aw hey", english: "Is this seat free?" }
  },
  {
    id: "gulyas",
    target: "gulyás",
    phonetic: "gu-yaash",
    english: "goulash (traditional beef soup)",
    soundId: "palatal",
    soundName: "gy, ny, ty, ly (Palatals)",
    soundVowel: "ly (/j/)",
    soundSymbol: "ly",
    soundType: "Digraph 'ly' = 'y'",
    phonics: "gu-yaash (NOT 'goo-lash' — 'ly' is 'y'!)",
    breakdown: "g + u + ly + á + s",
    length: 3,
    rule: "English borrowed 'goulash' with an 'l', but in Hungarian 'ly' is pronounced 'y': 'gu-yaash'!",
    examplePhrase: { target: "Forró gulyásleves", phonetic: "for-roh gu-yaash-leh-vesh", english: "hot goulash soup" }
  },
  {
    id: "kartya",
    target: "kártya",
    phonetic: "kaar-tyaw",
    english: "card",
    soundId: "palatal",
    soundName: "gy, ny, ty, ly (Palatals)",
    soundVowel: "ty (/c/)",
    soundSymbol: "ty",
    soundType: "Palatal Stop 'ty'",
    phonics: "kaar-tyaw ('ty' fused together)",
    breakdown: "k + á + r + ty + a",
    length: 3,
    rule: "'ty' is the voiceless partner of 'gy' (like 't' + 'y' fused in British 'Tuesday' or 'tune').",
    examplePhrase: { target: "Bankkártya", phonetic: "bawnk-kaar-tyaw", english: "bank card" }
  }
];

const MINIMAL_PAIR_CATEGORIES = [
  { id: "all", name: "All Pairs (20)" },
  { id: "a_vs_aa", name: "a vs á (Rounded aw vs Open aa)" },
  { id: "e_vs_ee", name: "e vs é (Open eh vs Closed ay)" },
  { id: "o_vs_oo_oe", name: "o / ó / ö / ő (Back vs Front Rounded)" },
  { id: "sz_vs_s", name: "sz vs s (/s/ vs /ʃ/ 'sh')" },
  { id: "cs_c_gy", name: "c / cs / gy / d (Affricates & Palatals)" }
];

const MINIMAL_PAIRS = [
  // --- 1. a vs á ---
  {
    id: "mp_kar_kaar",
    category: "a_vs_aa",
    categoryName: "a vs á (Rounded aw vs Open aa)",
    contrastSymbol: "a ↔ á",
    contrastRule: "Short 'a' is pronounced with rounded lips (/ɒ/ like British 'hot'). Long 'á' opens the jaw wide (/aː/ like 'father') and lasts twice as long.",
    wordA: {
      target: "kar",
      phonetic: "kawr",
      phonics: "kawr (short rounded a)",
      english: "arm / faculty / choir",
      soundSymbol: "a",
      soundName: "Short 'a' (/ɒ/)",
      breakdown: "k + a + r",
      examplePhrase: { target: "Erős kar", phonetic: "eh-roesh kawr", english: "strong arm" }
    },
    wordB: {
      target: "kár",
      phonetic: "kaar",
      phonics: "kaar (long open aa)",
      english: "damage / a pity ('Milyen kár!' = What a pity!)",
      soundSymbol: "á",
      soundName: "Long 'á' (/aː/)",
      breakdown: "k + á + r",
      examplePhrase: { target: "Milyen kár!", phonetic: "mi-yen kaar", english: "What a pity!" }
    }
  },
  {
    id: "mp_hat_haat",
    category: "a_vs_aa",
    categoryName: "a vs á (Rounded aw vs Open aa)",
    contrastSymbol: "a ↔ á",
    contrastRule: "'hat' with short rounded 'a' is the number 6; 'hát' with long open 'á' means 'back' (body part) or 'well then'.",
    wordA: {
      target: "hat",
      phonetic: "hawt",
      phonics: "hawt",
      english: "six (6)",
      soundSymbol: "a",
      soundName: "Short 'a' (/ɒ/)",
      breakdown: "h + a + t",
      examplePhrase: { target: "Hat óra", phonetic: "hawt oh-raw", english: "six o'clock" }
    },
    wordB: {
      target: "hát",
      phonetic: "haat",
      phonics: "haat",
      english: "back (anatomy) / well...",
      soundSymbol: "á",
      soundName: "Long 'á' (/aː/)",
      breakdown: "h + á + t",
      examplePhrase: { target: "Hát persze!", phonetic: "haat per-seh", english: "Well of course!" }
    }
  },
  {
    id: "mp_var_vaar",
    category: "a_vs_aa",
    categoryName: "a vs á (Rounded aw vs Open aa)",
    contrastSymbol: "a ↔ á",
    contrastRule: "'varr' with short rounded 'a' means 'sews'; 'vár' with long open 'á' means 'waits' or 'castle'.",
    wordA: {
      target: "varr",
      phonetic: "vawrr",
      phonics: "vawrr",
      english: "sews",
      soundSymbol: "a",
      soundName: "Short 'a' (/ɒ/)",
      breakdown: "v + a + rr",
      examplePhrase: { target: "Ruhát varr", phonetic: "ru-haat vawrr", english: "sews a dress" }
    },
    wordB: {
      target: "vár",
      phonetic: "vaar",
      phonics: "vaar",
      english: "castle / waits",
      soundSymbol: "á",
      soundName: "Long 'á' (/aː/)",
      breakdown: "v + á + r",
      examplePhrase: { target: "A Budai Vár", phonetic: "aw bu-daw-i vaar", english: "Buda Castle" }
    }
  },
  {
    id: "mp_alma_aalma",
    category: "a_vs_aa",
    categoryName: "a vs á (Rounded aw vs Open aa)",
    contrastSymbol: "a ↔ á",
    contrastRule: "'alma' with short 'a' means apple; 'álma' with long 'á' means 'his/her dream' (from álom).",
    wordA: {
      target: "alma",
      phonetic: "awl-maw",
      phonics: "awl-maw",
      english: "apple",
      soundSymbol: "a",
      soundName: "Short 'a' (/ɒ/)",
      breakdown: "a + l + m + a",
      examplePhrase: { target: "Piros alma", phonetic: "pi-rosh awl-maw", english: "red apple" }
    },
    wordB: {
      target: "álma",
      phonetic: "aal-maw",
      phonics: "aal-maw",
      english: "his/her dream",
      soundSymbol: "á",
      soundName: "Long 'á' (/aː/)",
      breakdown: "á + l + m + a",
      examplePhrase: { target: "Szép álma volt", phonetic: "sayp aal-maw volt", english: "he/she had a nice dream" }
    }
  },

  // --- 2. e vs é ---
  {
    id: "mp_szel_szeel",
    category: "e_vs_ee",
    categoryName: "e vs é (Open eh vs Closed ay)",
    contrastSymbol: "e ↔ é",
    contrastRule: "Short 'e' is open (/ɛ/ as in 'bet'); long 'é' is closed and tense (/eː/ as in 'cafe').",
    wordA: {
      target: "szel",
      phonetic: "sel",
      phonics: "sel (short 'eh')",
      english: "slices / cuts (bread)",
      soundSymbol: "e",
      soundName: "Short 'e' (/ɛ/)",
      breakdown: "sz + e + l",
      examplePhrase: { target: "Kenyeret szel", phonetic: "keh-nyeh-ret sel", english: "slices bread" }
    },
    wordB: {
      target: "szél",
      phonetic: "sayl",
      phonics: "sayl (long 'ay')",
      english: "wind / edge",
      soundSymbol: "é",
      soundName: "Long 'é' (/eː/)",
      breakdown: "sz + é + l",
      examplePhrase: { target: "Hideg szél", phonetic: "hi-deg sayl", english: "cold wind" }
    }
  },
  {
    id: "mp_ver_veer",
    category: "e_vs_ee",
    categoryName: "e vs é (Open eh vs Closed ay)",
    contrastSymbol: "e ↔ é",
    contrastRule: "'ver' with short 'e' means 'beats/hits'; 'vér' with long 'é' means 'blood'.",
    wordA: {
      target: "ver",
      phonetic: "ver",
      phonics: "ver (short 'eh')",
      english: "beats / hits",
      soundSymbol: "e",
      soundName: "Short 'e' (/ɛ/)",
      breakdown: "v + e + r",
      examplePhrase: { target: "Gyorsan ver a szívem", phonetic: "dyor-shawn ver aw see-vem", english: "my heart beats fast" }
    },
    wordB: {
      target: "vér",
      phonetic: "vayr",
      phonics: "vayr (long 'ay')",
      english: "blood",
      soundSymbol: "é",
      soundName: "Long 'é' (/eː/)",
      breakdown: "v + é + r",
      examplePhrase: { target: "Vörös vér", phonetic: "voe-roesh vayr", english: "red blood" }
    }
  },
  {
    id: "mp_meg_meeg",
    category: "e_vs_ee",
    categoryName: "e vs é (Open eh vs Closed ay)",
    contrastSymbol: "e ↔ é",
    contrastRule: "'meg' (short e) is the completion prefix or 'and'; 'még' (long é) means 'still / yet / more'!",
    wordA: {
      target: "meg",
      phonetic: "meg",
      phonics: "meg (short 'eh')",
      english: "and / completion prefix",
      soundSymbol: "e",
      soundName: "Short 'e' (/ɛ/)",
      breakdown: "m + e + g",
      examplePhrase: { target: "Te meg én", phonetic: "teh meg ayn", english: "you and I" }
    },
    wordB: {
      target: "még",
      phonetic: "mayg",
      phonics: "mayg (long 'ay')",
      english: "still / yet / more",
      soundSymbol: "é",
      soundName: "Long 'é' (/eː/)",
      breakdown: "m + é + g",
      examplePhrase: { target: "Még egy kávét!", phonetic: "mayg edy kaa-vayt", english: "One more coffee!" }
    }
  },
  {
    id: "mp_felel_feelel",
    category: "e_vs_ee",
    categoryName: "e vs é (Open eh vs Closed ay)",
    contrastSymbol: "e ↔ é",
    contrastRule: "'felel' (short e) means 'answers/replies'; 'fél' (long é) means 'is afraid' or 'half'.",
    wordA: {
      target: "felel",
      phonetic: "feh-lel",
      phonics: "feh-lel",
      english: "answers / replies",
      soundSymbol: "e",
      soundName: "Short 'e' (/ɛ/)",
      breakdown: "f + e + l + e + l",
      examplePhrase: { target: "A diák felel", phonetic: "aw di-aak feh-lel", english: "the student answers" }
    },
    wordB: {
      target: "fél",
      phonetic: "fayl",
      phonics: "fayl",
      english: "half / is afraid",
      soundSymbol: "é",
      soundName: "Long 'é' (/eː/)",
      breakdown: "f + é + l",
      examplePhrase: { target: "Fél óra", phonetic: "fayl oh-raw", english: "half an hour" }
    }
  },

  // --- 3. o / ó / ö / ő ---
  {
    id: "mp_kor_koor",
    category: "o_vs_oo_oe",
    categoryName: "o / ó / ö / ő (Back vs Front Rounded)",
    contrastSymbol: "o ↔ ó",
    contrastRule: "Short 'o' in 'kor' means age/era; long 'ó' in 'kór' means disease (and 'kör' with ö means circle!).",
    wordA: {
      target: "kor",
      phonetic: "kor",
      phonics: "kor (short o)",
      english: "age / era",
      soundSymbol: "o",
      soundName: "Short 'o' (/o/)",
      breakdown: "k + o + r",
      examplePhrase: { target: "Középkor", phonetic: "koe-zayp-kor", english: "Middle Ages" }
    },
    wordB: {
      target: "kór",
      phonetic: "kohr",
      phonics: "kohr (long ó)",
      english: "disease / malady (cf. kórház = hospital)",
      soundSymbol: "ó",
      soundName: "Long 'ó' (/oː/)",
      breakdown: "k + ó + r",
      examplePhrase: { target: "Kórház", phonetic: "kohr-haaz", english: "hospital" }
    }
  },
  {
    id: "mp_sor_soer",
    category: "o_vs_oo_oe",
    categoryName: "o / ó / ö / ő (Back vs Front Rounded)",
    contrastSymbol: "o ↔ ö",
    contrastRule: "Back vowel 'o' in 'sor' means line/queue/row; front rounded 'ö' in 'sör' means beer!",
    wordA: {
      target: "sor",
      phonetic: "shor",
      phonics: "shor (back vowel o)",
      english: "line / queue / row",
      soundSymbol: "o",
      soundName: "Back Vowel 'o'",
      breakdown: "s + o + r",
      examplePhrase: { target: "Hosszú sor", phonetic: "hos-soo shor", english: "long queue" }
    },
    wordB: {
      target: "sör",
      phonetic: "shoer",
      phonics: "shoer (front rounded ö)",
      english: "beer",
      soundSymbol: "ö",
      soundName: "Front Rounded 'ö'",
      breakdown: "s + ö + r",
      examplePhrase: { target: "Egy korsó sör", phonetic: "edy kor-shoh shoer", english: "a mug of beer" }
    }
  },
  {
    id: "mp_orul_oerul",
    category: "o_vs_oo_oe",
    categoryName: "o / ó / ö / ő (Back vs Front Rounded)",
    contrastSymbol: "ö ↔ ő",
    contrastRule: "Famous Hungarian minimal pair! Short 'ö' in 'örül' means 'rejoices / is glad'; long 'ő' in 'őrül' means 'goes crazy'!",
    wordA: {
      target: "örül",
      phonetic: "oe-ruel",
      phonics: "oe-ruel (short ö)",
      english: "is glad / rejoices (Örülök = Nice to meet you!)",
      soundSymbol: "ö",
      soundName: "Short 'ö' (/ø/)",
      breakdown: "ö + r + ü + l",
      examplePhrase: { target: "Nagyon örülök!", phonetic: "naw-dyon oe-rue-loek", english: "I'm very glad / Pleased to meet you!" }
    },
    wordB: {
      target: "őrül",
      phonetic: "oe:-ruel",
      phonics: "oe:-ruel (long held ő)",
      english: "goes crazy / loses one's mind",
      soundSymbol: "ő",
      soundName: "Long 'ő' (/øː/)",
      breakdown: "ő + r + ü + l",
      examplePhrase: { target: "Megőrülök!", phonetic: "meg-oe:-rue-loek", english: "I'm going crazy!" }
    }
  },
  {
    id: "mp_ot_oet",
    category: "o_vs_oo_oe",
    categoryName: "o / ó / ö / ő (Back vs Front Rounded)",
    contrastSymbol: "ö ↔ ő",
    contrastRule: "Short 'ö' in 'öt' means five (5); long 'ő' in 'őt' means him/her (direct object of ő).",
    wordA: {
      target: "öt",
      phonetic: "oet",
      phonics: "oet (short ö)",
      english: "five (5)",
      soundSymbol: "ö",
      soundName: "Short 'ö' (/ø/)",
      breakdown: "ö + t",
      examplePhrase: { target: "Öt óra", phonetic: "oet oh-raw", english: "five o'clock" }
    },
    wordB: {
      target: "őt",
      phonetic: "oe:t",
      phonics: "oe:t (long ő)",
      english: "him / her (accusative)",
      soundSymbol: "ő",
      soundName: "Long 'ő' (/øː/)",
      breakdown: "ő + t",
      examplePhrase: { target: "Ismerem őt", phonetic: "ish-meh-rem oe:t", english: "I know him/her" }
    }
  },

  // --- 4. sz vs s ---
  {
    id: "mp_szo_so",
    category: "sz_vs_s",
    categoryName: "sz vs s (/s/ vs /ʃ/ 'sh')",
    contrastSymbol: "sz ↔ s",
    contrastRule: "Digraph 'sz' is pure /s/ ('szó' = word). Single letter 's' is /ʃ/ 'sh' ('só' = salt).",
    wordA: {
      target: "szó",
      phonetic: "soh",
      phonics: "soh (pure s)",
      english: "word",
      soundSymbol: "sz",
      soundName: "Digraph 'sz' (/s/)",
      breakdown: "sz + ó",
      examplePhrase: { target: "Magyar szó", phonetic: "maw-dyawr soh", english: "Hungarian word" }
    },
    wordB: {
      target: "só",
      phonetic: "shoh",
      phonics: "shoh ('sh')",
      english: "salt",
      soundSymbol: "s",
      soundName: "Single 's' (/ʃ/)",
      breakdown: "s + ó",
      examplePhrase: { target: "Egy csipet só", phonetic: "edy chi-pet shoh", english: "a pinch of salt" }
    }
  },
  {
    id: "mp_szam_sam",
    category: "sz_vs_s",
    categoryName: "sz vs s (/s/ vs /ʃ/ 'sh')",
    contrastSymbol: "sz ↔ s",
    contrastRule: "'szám' (/saːm/) means number or my mouth; 'sál' (/ʃaːl/) starts with /ʃ/ and means scarf.",
    wordA: {
      target: "szám",
      phonetic: "saam",
      phonics: "saam (pure s)",
      english: "number / account",
      soundSymbol: "sz",
      soundName: "Digraph 'sz' (/s/)",
      breakdown: "sz + á + m",
      examplePhrase: { target: "Telefonszám", phonetic: "teh-leh-fon-saam", english: "phone number" }
    },
    wordB: {
      target: "sál",
      phonetic: "shaal",
      phonics: "shaal ('sh')",
      english: "scarf / shawl",
      soundSymbol: "s",
      soundName: "Single 's' (/ʃ/)",
      breakdown: "s + á + l",
      examplePhrase: { target: "Meleg sál", phonetic: "meh-leg shaal", english: "warm scarf" }
    }
  },
  {
    id: "mp_husz_hus",
    category: "sz_vs_s",
    categoryName: "sz vs s (/s/ vs /ʃ/ 'sh')",
    contrastSymbol: "sz ↔ s",
    contrastRule: "At the end of a word: 'húsz' (/huːs/) means twenty (20); 'hús' (/huːʃ/) means meat!",
    wordA: {
      target: "húsz",
      phonetic: "hoos",
      phonics: "hoos (ends in /s/)",
      english: "twenty (20)",
      soundSymbol: "sz",
      soundName: "Digraph 'sz' (/s/)",
      breakdown: "h + ú + sz",
      examplePhrase: { target: "Húsz perc", phonetic: "hoos perts", english: "twenty minutes" }
    },
    wordB: {
      target: "hús",
      phonetic: "hoosh",
      phonics: "hoosh (ends in 'sh')",
      english: "meat",
      soundSymbol: "s",
      soundName: "Single 's' (/ʃ/)",
      breakdown: "h + ú + s",
      examplePhrase: { target: "Marhahús", phonetic: "mawr-haw-hoosh", english: "beef" }
    }
  },
  {
    id: "mp_szep_seb",
    category: "sz_vs_s",
    categoryName: "sz vs s (/s/ vs /ʃ/ 'sh')",
    contrastSymbol: "sz ↔ s",
    contrastRule: "'szép' (/seːp/) starts with /s/ and means beautiful; 'seb' (/ʃɛb/) starts with 'sh' and means wound/speed.",
    wordA: {
      target: "szép",
      phonetic: "sayp",
      phonics: "sayp (pure s)",
      english: "beautiful / nice",
      soundSymbol: "sz",
      soundName: "Digraph 'sz' (/s/)",
      breakdown: "sz + é + p",
      examplePhrase: { target: "Szép napot!", phonetic: "sayp naw-pot", english: "Have a nice day!" }
    },
    wordB: {
      target: "seb",
      phonetic: "sheb",
      phonics: "sheb ('sh')",
      english: "wound / gear (sebesség = speed)",
      soundSymbol: "s",
      soundName: "Single 's' (/ʃ/)",
      breakdown: "s + e + b",
      examplePhrase: { target: "Sebesség", phonetic: "sheh-besh-shayg", english: "speed" }
    }
  },

  // --- 5. c / cs / gy / d ---
  {
    id: "mp_cap_csap",
    category: "cs_c_gy",
    categoryName: "c / cs / gy / d (Affricates & Palatals)",
    contrastSymbol: "c ↔ cs",
    contrastRule: "Single 'c' is /ts/ ('cáp-a' = shark); digraph 'cs' is /tʃ/ 'ch' ('csap' = tap/faucet).",
    wordA: {
      target: "cápa",
      phonetic: "tsaa-paw",
      phonics: "tsaa-paw ('c' = ts)",
      english: "shark",
      soundSymbol: "c",
      soundName: "Single 'c' (/ts/)",
      breakdown: "c + á + p + a",
      examplePhrase: { target: "Fehér cápa", phonetic: "feh-hayr tsaa-paw", english: "white shark" }
    },
    wordB: {
      target: "csap",
      phonetic: "chawp",
      phonics: "chawp ('cs' = ch)",
      english: "faucet / tap / strikes",
      soundSymbol: "cs",
      soundName: "Digraph 'cs' (/tʃ/)",
      breakdown: "cs + a + p",
      examplePhrase: { target: "Csapvíz", phonetic: "chawp-veez", english: "tap water" }
    }
  },
  {
    id: "mp_cica_csoda",
    category: "cs_c_gy",
    categoryName: "c / cs / gy / d (Affricates & Palatals)",
    contrastSymbol: "c ↔ cs",
    contrastRule: "'cica' (/tsitsɒ/) uses two /ts/ sounds for 'kitty'; 'csoda' (/tʃodɒ/) starts with /tʃ/ 'ch' for 'miracle/wonder'.",
    wordA: {
      target: "cica",
      phonetic: "tsi-tsaw",
      phonics: "tsi-tsaw (both 'c' = ts)",
      english: "kitten / kitty",
      soundSymbol: "c",
      soundName: "Single 'c' (/ts/)",
      breakdown: "c + i + c + a",
      examplePhrase: { target: "Kiscica", phonetic: "kish-tsi-tsaw", english: "little kitten" }
    },
    wordB: {
      target: "csoda",
      phonetic: "cho-daw",
      phonics: "cho-daw ('cs' = ch)",
      english: "miracle / wonder",
      soundSymbol: "cs",
      soundName: "Digraph 'cs' (/tʃ/)",
      breakdown: "cs + o + d + a",
      examplePhrase: { target: "Csodálatos!", phonetic: "cho-daa-law-tosh", english: "Wonderful!" }
    }
  },
  {
    id: "mp_nagy_nad",
    category: "cs_c_gy",
    categoryName: "c / cs / gy / d (Affricates & Palatals)",
    contrastSymbol: "gy ↔ d",
    contrastRule: "Palatal 'gy' (/ɟ/) in 'nagy' softens the stop against the roof of the mouth; dental 'd' in 'nád' is pronounced at the upper teeth.",
    wordA: {
      target: "nagy",
      phonetic: "nawdy",
      phonics: "nawdy (palatal gy)",
      english: "big / large",
      soundSymbol: "gy",
      soundName: "Palatal 'gy' (/ɟ/)",
      breakdown: "n + a + gy",
      examplePhrase: { target: "Nagy ház", phonetic: "nawdy haaz", english: "big house" }
    },
    wordB: {
      target: "nád",
      phonetic: "naad",
      phonics: "naad (dental d)",
      english: "reed / cane",
      soundSymbol: "d",
      soundName: "Dental 'd' (/d/)",
      breakdown: "n + á + d",
      examplePhrase: { target: "Cukornád", phonetic: "tsu-kor-naad", english: "sugarcane" }
    }
  },
  {
    id: "mp_agy_aagy",
    category: "cs_c_gy",
    categoryName: "c / cs / gy / d (Affricates & Palatals)",
    contrastSymbol: "agy ↔ ágy",
    contrastRule: "'agy' with short rounded 'a' + palatal 'gy' means 'brain'; 'ágy' with long open 'á' + palatal 'gy' means 'bed'!",
    wordA: {
      target: "agy",
      phonetic: "awdy",
      phonics: "awdy (short rounded a + gy)",
      english: "brain",
      soundSymbol: "a+gy",
      soundName: "Short 'a' + 'gy'",
      breakdown: "a + gy",
      examplePhrase: { target: "Emberi agy", phonetic: "em-beh-ri awdy", english: "human brain" }
    },
    wordB: {
      target: "ágy",
      phonetic: "aady",
      phonics: "aady (long open á + gy)",
      english: "bed",
      soundSymbol: "á+gy",
      soundName: "Long 'á' + 'gy'",
      breakdown: "á + gy",
      examplePhrase: { target: "Kényelmes ágy", phonetic: "kay-nyel-mesh aady", english: "comfortable bed" }
    }
  }
];

if (typeof window !== 'undefined') {
  window.SOUND_CATEGORIES = SOUND_CATEGORIES;
  window.SOUND_CURRICULUM = SOUND_CURRICULUM;
  window.MINIMAL_PAIR_CATEGORIES = MINIMAL_PAIR_CATEGORIES;
  window.MINIMAL_PAIRS = MINIMAL_PAIRS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SOUND_CATEGORIES, SOUND_CURRICULUM, MINIMAL_PAIR_CATEGORIES, MINIMAL_PAIRS };
}
