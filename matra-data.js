// Curated Hungarian Sounds, Digraphs & Vowel Length Curriculum (Kiejtés & Hangrend)
// Designed for reading fluency, native pronunciation, and minimal-pair contrast drills.
// Field names match the Language Lab Engine schema (MATRA_CATEGORIES, MATRA_CURRICULUM, HINDI_MINIMAL_PAIRS, MINIMAL_PAIR_CATEGORIES).

const MATRA_CATEGORIES = [
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

const MATRA_CURRICULUM = [
  // --- 1. Foundational Short Vowels (mukta) ---
  {
    id: "nap",
    hindi: "nap",
    roman: "nawp",
    english: "day / sun",
    matra: "mukta",
    matraName: "Short 'a' (/ɒ/)",
    matraVowel: "a",
    matraSymbol: "a",
    matraType: "Short Rounded Back Vowel",
    phonics: "nawp (rounded 'o' as in British 'hot')",
    breakdown: "n + a + p",
    length: 2,
    rule: "Hungarian short 'a' is NOT like 'cat' — round your lips slightly like British 'hot' or 'watch'.",
    examplePhrase: { hindi: "Jó napot!", roman: "yoh naw-pot", english: "Good day / Hello!" }
  },
  {
    id: "nem",
    hindi: "nem",
    roman: "nem",
    english: "no / not",
    matra: "mukta",
    matraName: "Short 'e' (/ɛ/)",
    matraVowel: "e",
    matraSymbol: "e",
    matraType: "Short Front Vowel",
    phonics: "nem (crisp 'eh' as in 'bet')",
    breakdown: "n + e + m",
    length: 2,
    rule: "Stress is ALWAYS on the first syllable in Hungarian.",
    examplePhrase: { hindi: "Nem tudom", roman: "nem tu-dom", english: "I don't know" }
  },
  {
    id: "igen",
    hindi: "igen",
    roman: "i-gen",
    english: "yes",
    matra: "mukta",
    matraName: "Short 'i' & 'e'",
    matraVowel: "i / e",
    matraSymbol: "i",
    matraType: "Short Front Vowels",
    phonics: "i-gen (stress on 'i')",
    breakdown: "i + g + e + n",
    length: 2,
    rule: "Two crisp syllables: 'i-gen'. Never reduce unstressed vowels to 'uh' in Hungarian.",
    examplePhrase: { hindi: "Igen, kérek!", roman: "i-gen, kay-rek", english: "Yes, please!" }
  },

  // --- 2. a vs á (aa) ---
  {
    id: "nyar",
    hindi: "nyár",
    roman: "nyaar",
    english: "summer",
    matra: "aa",
    matraName: "a vs á (Open Long á)",
    matraVowel: "á",
    matraSymbol: "á",
    matraType: "Long Open Vowel",
    phonics: "nyaar (open 'ah' as in 'father')",
    breakdown: "ny + á + r",
    length: 2,
    rule: "The acute accent on 'á' opens the mouth wide (/aː/) and holds it twice as long as 'a'.",
    examplePhrase: { hindi: "Forró nyár", roman: "for-roh nyaar", english: "hot summer" }
  },
  {
    id: "ar",
    hindi: "ár",
    roman: "aar",
    english: "price / flood",
    matra: "aa",
    matraName: "a vs á (Open Long á)",
    matraVowel: "á",
    matraSymbol: "á",
    matraType: "Long Open Vowel",
    phonics: "aar (long open 'ah')",
    breakdown: "á + r",
    length: 2,
    rule: "Long open 'á' + trilled 'r'. Notice 'ár' (price) vs 'ar-any' (gold, short rounded a).",
    examplePhrase: { hindi: "Jó ár", roman: "yoh aar", english: "good price" }
  },
  {
    id: "vasar",
    hindi: "vásár",
    roman: "vaa-shaar",
    english: "market / fair",
    matra: "aa",
    matraName: "a vs á (Open Long á)",
    matraVowel: "á",
    matraSymbol: "á",
    matraType: "Long Open Vowel",
    phonics: "vaa-shaar (both vowels long + 's' = sh)",
    breakdown: "v + á + s + á + r",
    length: 3,
    rule: "Keep both 'á' vowels long and open, even in the second syllable!",
    examplePhrase: { hindi: "Karácsonyi vásár", roman: "kaw-raa-cho-nyi vaa-shaar", english: "Christmas market" }
  },
  {
    id: "tanar",
    hindi: "tanár",
    roman: "taw-naar",
    english: "teacher",
    matra: "aa",
    matraName: "a vs á (Contrast in 1 Word!)",
    matraVowel: "a → á",
    matraSymbol: "á",
    matraType: "Short 'a' + Long 'á'",
    phonics: "taw-naar (1st vowel rounded 'aw', 2nd open 'aa')",
    breakdown: "t + a + n + á + r",
    length: 3,
    rule: "Perfect practice word: first syllable has short rounded 'a' (taw-), second has long open 'á' (-naar), while stress stays on the first syllable!",
    examplePhrase: { hindi: "A magyar tanár", roman: "aw maw-dyawr taw-naar", english: "the Hungarian teacher" }
  },

  // --- 3. e vs é (e) ---
  {
    id: "kave_m",
    hindi: "kávé",
    roman: "kaa-vay",
    english: "coffee",
    matra: "e",
    matraName: "e vs é (Closed Long é)",
    matraVowel: "é",
    matraSymbol: "é",
    matraType: "Long Closed Front Vowel",
    phonics: "kaa-vay (long pure 'ay')",
    breakdown: "k + á + v + é",
    length: 2,
    rule: "Long 'é' is a pure tense vowel like 'ay' in 'bay' (without gliding into 'ee').",
    examplePhrase: { hindi: "Fekete kávé", roman: "feh-keh-teh kaa-vay", english: "black coffee" }
  },
  {
    id: "het",
    hindi: "hét",
    roman: "hayt",
    english: "week / seven (7)",
    matra: "e",
    matraName: "e vs é (Closed Long é)",
    matraVowel: "é",
    matraSymbol: "é",
    matraType: "Long Closed Front Vowel",
    phonics: "hayt",
    breakdown: "h + é + t",
    length: 2,
    rule: "Means both 'seven' and 'week' (7 days in a week).",
    examplePhrase: { hindi: "Jövő héten", roman: "yoe-voe hay-ten", english: "next week" }
  },
  {
    id: "szel",
    hindi: "szél",
    roman: "sayl",
    english: "wind / edge",
    matra: "e",
    matraName: "e vs é (Closed Long é)",
    matraVowel: "é",
    matraSymbol: "é",
    matraType: "Long Closed Front Vowel",
    phonics: "sayl ('sz' = s, 'é' = ay)",
    breakdown: "sz + é + l",
    length: 2,
    rule: "Contrast with 'szel' (short e = slices). Long 'é' makes it 'szél' (wind).",
    examplePhrase: { hindi: "Erős szél fúj", roman: "eh-roesh sayl fooy", english: "a strong wind is blowing" }
  },
  {
    id: "zene",
    hindi: "zene",
    roman: "zeh-neh",
    english: "music",
    matra: "e",
    matraName: "e vs é (Short Open e)",
    matraVowel: "e",
    matraSymbol: "e",
    matraType: "Short Open Front Vowel",
    phonics: "zeh-neh (both vowels short 'eh')",
    breakdown: "z + e + n + e",
    length: 2,
    rule: "Both 'e' vowels are pronounced clearly as short [ɛ] (like 'bet').",
    examplePhrase: { hindi: "Élő zene", roman: "ay-loe zeh-neh", english: "live music" }
  },

  // --- 4. i / í & u / ú (i) ---
  {
    id: "viz_m",
    hindi: "víz",
    roman: "veez",
    english: "water",
    matra: "i",
    matraName: "i / í & u / ú (Long Vowel)",
    matraVowel: "í",
    matraSymbol: "í",
    matraType: "Long High Vowel",
    phonics: "veez (held long 'ee')",
    breakdown: "v + í + z",
    length: 2,
    rule: "Hold the 'í' sound twice as long as short 'i'. Shortens to 'i' in 'vizet' (water, acc.).",
    examplePhrase: { hindi: "Hideg víz", roman: "hi-deg veez", english: "cold water" }
  },
  {
    id: "hid",
    hindi: "híd",
    roman: "heed",
    english: "bridge",
    matra: "i",
    matraName: "i / í & u / ú (Long Vowel)",
    matraVowel: "í",
    matraSymbol: "í",
    matraType: "Long High Vowel",
    phonics: "heed",
    breakdown: "h + í + d",
    length: 2,
    rule: "Long 'í' — famous in Budapest's 'Lánchíd' (Chain Bridge).",
    examplePhrase: { hindi: "A Lánchíd", roman: "aw laants-heed", english: "the Chain Bridge" }
  },
  {
    id: "ut",
    hindi: "út",
    roman: "oot",
    english: "road / way / trip",
    matra: "i",
    matraName: "i / í & u / ú (Long Vowel)",
    matraVowel: "ú",
    matraSymbol: "ú",
    matraType: "Long Back Rounded Vowel",
    phonics: "oot (long 'oo')",
    breakdown: "ú + t",
    length: 2,
    rule: "Long 'ú' means 'road/journey' (shortens to 'utat' in the accusative).",
    examplePhrase: { hindi: "Jó utat!", roman: "yoh u-tawt", english: "Have a good trip! (Bon voyage)" }
  },
  {
    id: "hus",
    hindi: "hús",
    roman: "hoosh",
    english: "meat",
    matra: "i",
    matraName: "i / í & u / ú (Long Vowel)",
    matraVowel: "ú",
    matraSymbol: "ú",
    matraType: "Long Back Rounded Vowel",
    phonics: "hoosh (long 'oo' + 's' = sh)",
    breakdown: "h + ú + s",
    length: 2,
    rule: "Long 'ú' + 's' (/ʃ/). Don't confuse with 'húsz' (/huːs/ = twenty)!",
    examplePhrase: { hindi: "Friss hús", roman: "frishsh hoosh", english: "fresh meat" }
  },

  // --- 5. o vs ó (o) ---
  {
    id: "ora",
    hindi: "óra",
    roman: "oh-raw",
    english: "hour / clock / watch / class",
    matra: "o",
    matraName: "o / ó (Long Rounded ó)",
    matraVowel: "ó",
    matraSymbol: "ó",
    matraType: "Long Mid Back Vowel",
    phonics: "oh-raw",
    breakdown: "ó + r + a",
    length: 2,
    rule: "Hold the first 'ó' long, followed by short rounded 'a'.",
    examplePhrase: { hindi: "Hány óra van?", roman: "haany oh-raw vawn", english: "What time is it?" }
  },
  {
    id: "so",
    hindi: "só",
    roman: "shoh",
    english: "salt",
    matra: "o",
    matraName: "o / ó (Long Rounded ó)",
    matraVowel: "ó",
    matraSymbol: "ó",
    matraType: "Long Mid Back Vowel",
    phonics: "shoh ('s' = sh + long 'oh')",
    breakdown: "s + ó",
    length: 2,
    rule: "Single 's' is 'sh' + long 'ó'. Contrast with 'szó' (/soː/ = word)!",
    examplePhrase: { hindi: "Só és bors", roman: "shoh aysh borsh", english: "salt and pepper" }
  },
  {
    id: "kor",
    hindi: "kor",
    roman: "kor",
    english: "age / era",
    matra: "o",
    matraName: "o / ó (Short Rounded o)",
    matraVowel: "o",
    matraSymbol: "o",
    matraType: "Short Mid Back Vowel",
    phonics: "kor (crisp short 'o')",
    breakdown: "k + o + r",
    length: 2,
    rule: "Keep 'o' short! Lengthening it to 'kór' changes the meaning to 'disease'!",
    examplePhrase: { hindi: "Középkor", roman: "koe-zayp-kor", english: "Middle Ages" }
  },

  // --- 6. ö vs ő (oe) ---
  {
    id: "sor_m",
    hindi: "sör",
    roman: "shoer",
    english: "beer",
    matra: "oe",
    matraName: "ö / ő (Front Rounded)",
    matraVowel: "ö",
    matraSymbol: "ö",
    matraType: "Short Front Rounded Vowel",
    phonics: "shoer (say 'eh' through rounded lips)",
    breakdown: "s + ö + r",
    length: 2,
    rule: "Position your tongue for 'e' (as in 'bet') and round your lips as if saying 'o'.",
    examplePhrase: { hindi: "Hideg sör", roman: "hi-deg shoer", english: "cold beer" }
  },
  {
    id: "ot",
    hindi: "öt",
    roman: "oet",
    english: "five (5)",
    matra: "oe",
    matraName: "ö / ő (Front Rounded)",
    matraVowel: "ö",
    matraSymbol: "ö",
    matraType: "Short Front Rounded Vowel",
    phonics: "oet (short rounded front vowel)",
    breakdown: "ö + t",
    length: 2,
    rule: "Short 'ö' = 5 ('öt'). Compare with 'őt' (long double-acute 'ő' = him/her, accusative)!",
    examplePhrase: { hindi: "Öt perc", roman: "oet perts", english: "five minutes" }
  },
  {
    id: "ido",
    hindi: "idő",
    roman: "i-doe:",
    english: "time / weather",
    matra: "oe",
    matraName: "ö / ő (Double Acute ő)",
    matraVowel: "ő",
    matraSymbol: "ő",
    matraType: "Long Front Rounded Vowel",
    phonics: "i-doe: (long held 'ö')",
    breakdown: "i + d + ő",
    length: 2,
    rule: "The Hungarian double acute 'ő' (kettős éles ékezet) is the long version of 'ö'. Word-final 'ö' is ALWAYS long 'ő' in Hungarian!",
    examplePhrase: { hindi: "Szép idő van", roman: "sayp i-doe: vawn", english: "The weather is nice" }
  },
  {
    id: "erdo",
    hindi: "erdő",
    roman: "er-doe:",
    english: "forest / woods",
    matra: "oe",
    matraName: "ö / ő (Double Acute ő)",
    matraVowel: "ő",
    matraSymbol: "ő",
    matraType: "Long Front Rounded Vowel",
    phonics: "er-doe:",
    breakdown: "e + r + d + ő",
    length: 2,
    rule: "Hungarian words never end in short 'ö' or 'ü' — at the end of a word they are always written and pronounced long ('ő', 'ű').",
    examplePhrase: { hindi: "Zöld erdő", roman: "zoeld er-doe:", english: "green forest" }
  },

  // --- 7. ü vs ű (ue) ---
  {
    id: "ul",
    hindi: "ül",
    roman: "uel",
    english: "sits / to sit",
    matra: "ue",
    matraName: "ü / ű (High Front Rounded)",
    matraVowel: "ü",
    matraSymbol: "ü",
    matraType: "Short High Front Rounded Vowel",
    phonics: "uel (say 'ee' with tightly rounded lips)",
    breakdown: "ü + l",
    length: 2,
    rule: "Say English 'ee' (as in 'see'), then purse your lips into a tight circle without moving your tongue.",
    examplePhrase: { hindi: "Foglaljon helyet, üljön le!", roman: "fog-lawl-yon heh-yet, uel-yoen leh", english: "Take a seat, sit down!" }
  },
  {
    id: "tuz",
    hindi: "tűz",
    roman: "tue:z",
    english: "fire",
    matra: "ue",
    matraName: "ü / ű (Double Acute ű)",
    matraVowel: "ű",
    matraSymbol: "ű",
    matraType: "Long High Front Rounded Vowel",
    phonics: "tue:z (long held 'ü')",
    breakdown: "t + ű + z",
    length: 2,
    rule: "Double acute 'ű' is the long partner of 'ü'. (Shortens to 'ü' in 'tüzet' = fire, acc.).",
    examplePhrase: { hindi: "Tűzoltó", roman: "tue:z-ol-toh", english: "firefighter" }
  },
  {
    id: "gyumolcs",
    hindi: "gyümölcs",
    roman: "dyue-moelch",
    english: "fruit",
    matra: "ue",
    matraName: "ü / ű (Rounded Front Combo)",
    matraVowel: "ü + ö",
    matraSymbol: "ü",
    matraType: "Front Rounded Showcase",
    phonics: "dyue-moelch (gy + ü + m + ö + l + cs)",
    breakdown: "gy + ü + m + ö + l + cs",
    length: 4,
    rule: "Combines palatal 'gy', rounded 'ü', rounded 'ö', and 'cs' (/tʃ/) in one essential everyday word!",
    examplePhrase: { hindi: "Friss gyümölcs", roman: "frishsh dyue-moelch", english: "fresh fruit" }
  },

  // --- 8. sz vs s (sz_s) ---
  {
    id: "szia",
    hindi: "szia",
    roman: "si-aw",
    english: "hi / bye (informal)",
    matra: "sz_s",
    matraName: "sz vs s (Sibilant Pair)",
    matraVowel: "sz (/s/)",
    matraSymbol: "sz",
    matraType: "Digraph 'sz' = /s/",
    phonics: "see-aw ('sz' is pure 's')",
    breakdown: "sz + i + a",
    length: 2,
    rule: "In Hungarian, 'sz' is pronounced like English 's' in 'see'. Saying it to one person is 'Szia!', to multiple people is 'Sziasztok!'.",
    examplePhrase: { hindi: "Sziasztok!", roman: "si-aws-tok", english: "Hi / Bye everyone!" }
  },
  {
    id: "sajnos",
    hindi: "sajnos",
    roman: "shawy-nosh",
    english: "unfortunately",
    matra: "sz_s",
    matraName: "sz vs s (Sibilant Pair)",
    matraVowel: "s (/ʃ/)",
    matraSymbol: "s",
    matraType: "Single 's' = /ʃ/ ('sh')",
    phonics: "shawy-nosh (both 's' letters are 'sh'!)",
    breakdown: "s + a + j + n + o + s",
    length: 3,
    rule: "Single letter 's' is ALWAYS 'sh' (/ʃ/) in Hungarian, and 'j' is always 'y' (/j/).",
    examplePhrase: { hindi: "Sajnos nem érek rá", roman: "shawy-nosh nem ay-rek raa", english: "Unfortunately I'm not free" }
  },
  {
    id: "egeszsegedre",
    hindi: "egészségedre",
    roman: "eh-gays-shay-ged-reh",
    english: "cheers! / bless you! (to your health)",
    matra: "sz_s",
    matraName: "sz vs s (Both Side by Side!)",
    matraVowel: "sz + s",
    matraSymbol: "sz/s",
    matraType: "Digraph 'sz' (/s/) + 's' (/ʃ/)",
    phonics: "eh-gays-shay-ged-reh",
    breakdown: "e + g + é + sz + s + é + g + e + d + r + e",
    length: 5,
    rule: "The ultimate Hungarian pronunciation milestone: 'sz' (/s/) is followed immediately by 's' (/ʃ/) — 'egész' (whole/health) + '-ség' (-ness) + '-ed' (your) + '-re' (onto)!",
    examplePhrase: { hindi: "Egészségedre! Koccintsunk!", roman: "eh-gays-shay-ged-reh! kot-chint-chunk", english: "Cheers! Let's clink glasses!" }
  },
  {
    id: "koszonom",
    hindi: "köszönöm",
    roman: "koe-soe-noem",
    english: "thank you",
    matra: "sz_s",
    matraName: "sz vs s (Sibilant Pair)",
    matraVowel: "sz + ö",
    matraSymbol: "sz",
    matraType: "Digraph 'sz' + Rounded 'ö'",
    phonics: "koe-soe-noem (three identical 'ö' vowels + pure 's')",
    breakdown: "k + ö + sz + ö + n + ö + m",
    length: 4,
    rule: "All three vowels are short rounded 'ö', and the middle consonant is pure 's' ('sz').",
    examplePhrase: { hindi: "Köszönöm szépen!", roman: "koe-soe-noem say-pen", english: "Thank you very much!" }
  },

  // --- 9. cs, c & zs (cs_c) ---
  {
    id: "csokolade",
    hindi: "csokoládé",
    roman: "cho-ko-laa-day",
    english: "chocolate",
    matra: "cs_c",
    matraName: "cs, c & zs (Affricates)",
    matraVowel: "cs (/tʃ/)",
    matraSymbol: "cs",
    matraType: "Digraph 'cs' = 'ch'",
    phonics: "cho-ko-laa-day",
    breakdown: "cs + o + k + o + l + á + d + é",
    length: 4,
    rule: "Digraph 'cs' is always English 'ch' as in 'chocolate' or 'church'.",
    examplePhrase: { hindi: "Forró csokoládé", roman: "for-roh cho-ko-laa-day", english: "hot chocolate" }
  },
  {
    id: "citrom",
    hindi: "citrom",
    roman: "tsit-rom",
    english: "lemon",
    matra: "cs_c",
    matraName: "cs, c & zs (Affricates)",
    matraVowel: "c (/ts/)",
    matraSymbol: "c",
    matraType: "Single 'c' = 'ts'",
    phonics: "tsit-rom (starts with 'ts' as in 'cats'!)",
    breakdown: "c + i + t + r + o + m",
    length: 3,
    rule: "Single 'c' in Hungarian is NEVER 'k' or 's' — it is always 'ts' (/ts/), even at the start of a word!",
    examplePhrase: { hindi: "Tea citrommal", roman: "teh-aw tsit-rom-mawl", english: "tea with lemon" }
  },
  {
    id: "utca_m",
    hindi: "utca",
    roman: "ut-tsaw",
    english: "street",
    matra: "cs_c",
    matraName: "cs, c & zs (Affricates)",
    matraVowel: "c (/ts/)",
    matraSymbol: "c",
    matraType: "Single 'c' = 'ts'",
    phonics: "ut-tsaw",
    breakdown: "u + t + c + a",
    length: 2,
    rule: "'t' + 'c' creates a held /tts/ sound: 'ut-tsaw'.",
    examplePhrase: { hindi: "Váci utca", roman: "vaa-tsi ut-tsaw", english: "Váci Street" }
  },
  {
    id: "zseb",
    hindi: "zseb",
    roman: "zheb",
    english: "pocket",
    matra: "cs_c",
    matraName: "cs, c & zs (Affricates)",
    matraVowel: "zs (/ʒ/)",
    matraSymbol: "zs",
    matraType: "Digraph 'zs' = 'zh'",
    phonics: "zheb ('s' in 'treasure' / 'measure')",
    breakdown: "zs + e + b",
    length: 2,
    rule: "Just as 's' is 'sh' (/ʃ/), 'zs' is its voiced partner 'zh' (/ʒ/ as in 'vision' or French 'je').",
    examplePhrase: { hindi: "A kabátom zsebében", roman: "aw kaw-baa-tom zheh-bay-ben", english: "in my coat pocket" }
  },

  // --- 10. Palatals: gy, ny, ty, ly (palatal) ---
  {
    id: "magyar",
    hindi: "magyar",
    roman: "maw-dyawr",
    english: "Hungarian",
    matra: "palatal",
    matraName: "gy, ny, ty, ly (Palatals)",
    matraVowel: "gy (/ɟ/)",
    matraSymbol: "gy",
    matraType: "Palatal Stop 'gy'",
    phonics: "maw-dyawr ('gy' = soft 'dy' as in 'due')",
    breakdown: "m + a + gy + a + r",
    length: 2,
    rule: "'gy' is a single consonant sound made by pressing the middle of the tongue against the roof of the mouth (like 'd' + 'y' fused together in British 'duke').",
    examplePhrase: { hindi: "Magyarország", roman: "maw-dyawr-or-saag", english: "Hungary" }
  },
  {
    id: "egy",
    hindi: "egy",
    roman: "edy",
    english: "one (1) / a, an",
    matra: "palatal",
    matraName: "gy, ny, ty, ly (Palatals)",
    matraVowel: "gy (/ɟ/)",
    matraSymbol: "gy",
    matraType: "Palatal Stop 'gy'",
    phonics: "edy",
    breakdown: "e + gy",
    length: 2,
    rule: "Counts as a 2-letter word in Hungarian (e + gy)! Means both '1' and the indefinite article 'a/an'.",
    examplePhrase: { hindi: "Egy kávét kérek", roman: "edy kaa-vayt kay-rek", english: "I'd like a coffee" }
  },
  {
    id: "nyelv",
    hindi: "nyelv",
    roman: "nyelv",
    english: "language / tongue",
    matra: "palatal",
    matraName: "gy, ny, ty, ly (Palatals)",
    matraVowel: "ny (/ɲ/)",
    matraSymbol: "ny",
    matraType: "Palatal Nasal 'ny'",
    phonics: "nyelv ('ny' as in 'canyon' or Spanish 'ñ')",
    breakdown: "ny + e + l + v",
    length: 2,
    rule: "'ny' is a single palatal nasal sound, identical to Spanish 'ñ' or 'ny' in 'canyon'.",
    examplePhrase: { hindi: "A magyar nyelv", roman: "aw maw-dyawr nyelv", english: "the Hungarian language" }
  },
  {
    id: "hely",
    hindi: "hely",
    roman: "hey",
    english: "place / seat / space",
    matra: "palatal",
    matraName: "gy, ny, ty, ly (Palatals)",
    matraVowel: "ly (/j/)",
    matraSymbol: "ly",
    matraType: "Digraph 'ly' = 'y'",
    phonics: "hey ('ly' is pronounced identically to 'j' = English 'y'!)",
    breakdown: "h + e + ly",
    length: 2,
    rule: "In modern standard Hungarian, 'ly' is pronounced identically to 'j' (/j/, like English 'y' in 'yes'). The 'l' is completely silent!",
    examplePhrase: { hindi: "Szabad ez a hely?", roman: "saw-bawd ez aw hey", english: "Is this seat free?" }
  },
  {
    id: "gulyas",
    hindi: "gulyás",
    roman: "gu-yaash",
    english: "goulash (traditional beef soup)",
    matra: "palatal",
    matraName: "gy, ny, ty, ly (Palatals)",
    matraVowel: "ly (/j/)",
    matraSymbol: "ly",
    matraType: "Digraph 'ly' = 'y'",
    phonics: "gu-yaash (NOT 'goo-lash' — 'ly' is 'y'!)",
    breakdown: "g + u + ly + á + s",
    length: 3,
    rule: "English borrowed 'goulash' with an 'l', but in Hungarian 'ly' is pronounced 'y': 'gu-yaash'!",
    examplePhrase: { hindi: "Forró gulyásleves", roman: "for-roh gu-yaash-leh-vesh", english: "hot goulash soup" }
  },
  {
    id: "kartya",
    hindi: "kártya",
    roman: "kaar-tyaw",
    english: "card",
    matra: "palatal",
    matraName: "gy, ny, ty, ly (Palatals)",
    matraVowel: "ty (/c/)",
    matraSymbol: "ty",
    matraType: "Palatal Stop 'ty'",
    phonics: "kaar-tyaw ('ty' fused together)",
    breakdown: "k + á + r + ty + a",
    length: 3,
    rule: "'ty' is the voiceless partner of 'gy' (like 't' + 'y' fused in British 'Tuesday' or 'tune').",
    examplePhrase: { hindi: "Bankkártya", roman: "bawnk-kaar-tyaw", english: "bank card" }
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

const HINDI_MINIMAL_PAIRS = [
  // --- 1. a vs á ---
  {
    id: "mp_kar_kaar",
    category: "a_vs_aa",
    categoryName: "a vs á (Rounded aw vs Open aa)",
    contrastSymbol: "a ↔ á",
    contrastRule: "Short 'a' is pronounced with rounded lips (/ɒ/ like British 'hot'). Long 'á' opens the jaw wide (/aː/ like 'father') and lasts twice as long.",
    wordA: {
      hindi: "kar",
      roman: "kawr",
      phonics: "kawr (short rounded a)",
      english: "arm / faculty / choir",
      matraSymbol: "a",
      matraName: "Short 'a' (/ɒ/)",
      breakdown: "k + a + r",
      examplePhrase: { hindi: "Erős kar", roman: "eh-roesh kawr", english: "strong arm" }
    },
    wordB: {
      hindi: "kár",
      roman: "kaar",
      phonics: "kaar (long open aa)",
      english: "damage / a pity ('Milyen kár!' = What a pity!)",
      matraSymbol: "á",
      matraName: "Long 'á' (/aː/)",
      breakdown: "k + á + r",
      examplePhrase: { hindi: "Milyen kár!", roman: "mi-yen kaar", english: "What a pity!" }
    }
  },
  {
    id: "mp_hat_haat",
    category: "a_vs_aa",
    categoryName: "a vs á (Rounded aw vs Open aa)",
    contrastSymbol: "a ↔ á",
    contrastRule: "'hat' with short rounded 'a' is the number 6; 'hát' with long open 'á' means 'back' (body part) or 'well then'.",
    wordA: {
      hindi: "hat",
      roman: "hawt",
      phonics: "hawt",
      english: "six (6)",
      matraSymbol: "a",
      matraName: "Short 'a' (/ɒ/)",
      breakdown: "h + a + t",
      examplePhrase: { hindi: "Hat óra", roman: "hawt oh-raw", english: "six o'clock" }
    },
    wordB: {
      hindi: "hát",
      roman: "haat",
      phonics: "haat",
      english: "back (anatomy) / well...",
      matraSymbol: "á",
      matraName: "Long 'á' (/aː/)",
      breakdown: "h + á + t",
      examplePhrase: { hindi: "Hát persze!", roman: "haat per-seh", english: "Well of course!" }
    }
  },
  {
    id: "mp_var_vaar",
    category: "a_vs_aa",
    categoryName: "a vs á (Rounded aw vs Open aa)",
    contrastSymbol: "a ↔ á",
    contrastRule: "'varr' with short rounded 'a' means 'sews'; 'vár' with long open 'á' means 'waits' or 'castle'.",
    wordA: {
      hindi: "varr",
      roman: "vawrr",
      phonics: "vawrr",
      english: "sews",
      matraSymbol: "a",
      matraName: "Short 'a' (/ɒ/)",
      breakdown: "v + a + rr",
      examplePhrase: { hindi: "Ruhát varr", roman: "ru-haat vawrr", english: "sews a dress" }
    },
    wordB: {
      hindi: "vár",
      roman: "vaar",
      phonics: "vaar",
      english: "castle / waits",
      matraSymbol: "á",
      matraName: "Long 'á' (/aː/)",
      breakdown: "v + á + r",
      examplePhrase: { hindi: "A Budai Vár", roman: "aw bu-daw-i vaar", english: "Buda Castle" }
    }
  },
  {
    id: "mp_alma_aalma",
    category: "a_vs_aa",
    categoryName: "a vs á (Rounded aw vs Open aa)",
    contrastSymbol: "a ↔ á",
    contrastRule: "'alma' with short 'a' means apple; 'álma' with long 'á' means 'his/her dream' (from álom).",
    wordA: {
      hindi: "alma",
      roman: "awl-maw",
      phonics: "awl-maw",
      english: "apple",
      matraSymbol: "a",
      matraName: "Short 'a' (/ɒ/)",
      breakdown: "a + l + m + a",
      examplePhrase: { hindi: "Piros alma", roman: "pi-rosh awl-maw", english: "red apple" }
    },
    wordB: {
      hindi: "álma",
      roman: "aal-maw",
      phonics: "aal-maw",
      english: "his/her dream",
      matraSymbol: "á",
      matraName: "Long 'á' (/aː/)",
      breakdown: "á + l + m + a",
      examplePhrase: { hindi: "Szép álma volt", roman: "sayp aal-maw volt", english: "he/she had a nice dream" }
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
      hindi: "szel",
      roman: "sel",
      phonics: "sel (short 'eh')",
      english: "slices / cuts (bread)",
      matraSymbol: "e",
      matraName: "Short 'e' (/ɛ/)",
      breakdown: "sz + e + l",
      examplePhrase: { hindi: "Kenyeret szel", roman: "keh-nyeh-ret sel", english: "slices bread" }
    },
    wordB: {
      hindi: "szél",
      roman: "sayl",
      phonics: "sayl (long 'ay')",
      english: "wind / edge",
      matraSymbol: "é",
      matraName: "Long 'é' (/eː/)",
      breakdown: "sz + é + l",
      examplePhrase: { hindi: "Hideg szél", roman: "hi-deg sayl", english: "cold wind" }
    }
  },
  {
    id: "mp_ver_veer",
    category: "e_vs_ee",
    categoryName: "e vs é (Open eh vs Closed ay)",
    contrastSymbol: "e ↔ é",
    contrastRule: "'ver' with short 'e' means 'beats/hits'; 'vér' with long 'é' means 'blood'.",
    wordA: {
      hindi: "ver",
      roman: "ver",
      phonics: "ver (short 'eh')",
      english: "beats / hits",
      matraSymbol: "e",
      matraName: "Short 'e' (/ɛ/)",
      breakdown: "v + e + r",
      examplePhrase: { hindi: "Gyorsan ver a szívem", roman: "dyor-shawn ver aw see-vem", english: "my heart beats fast" }
    },
    wordB: {
      hindi: "vér",
      roman: "vayr",
      phonics: "vayr (long 'ay')",
      english: "blood",
      matraSymbol: "é",
      matraName: "Long 'é' (/eː/)",
      breakdown: "v + é + r",
      examplePhrase: { hindi: "Vörös vér", roman: "voe-roesh vayr", english: "red blood" }
    }
  },
  {
    id: "mp_meg_meeg",
    category: "e_vs_ee",
    categoryName: "e vs é (Open eh vs Closed ay)",
    contrastSymbol: "e ↔ é",
    contrastRule: "'meg' (short e) is the completion prefix or 'and'; 'még' (long é) means 'still / yet / more'!",
    wordA: {
      hindi: "meg",
      roman: "meg",
      phonics: "meg (short 'eh')",
      english: "and / completion prefix",
      matraSymbol: "e",
      matraName: "Short 'e' (/ɛ/)",
      breakdown: "m + e + g",
      examplePhrase: { hindi: "Te meg én", roman: "teh meg ayn", english: "you and I" }
    },
    wordB: {
      hindi: "még",
      roman: "mayg",
      phonics: "mayg (long 'ay')",
      english: "still / yet / more",
      matraSymbol: "é",
      matraName: "Long 'é' (/eː/)",
      breakdown: "m + é + g",
      examplePhrase: { hindi: "Még egy kávét!", roman: "mayg edy kaa-vayt", english: "One more coffee!" }
    }
  },
  {
    id: "mp_felel_feelel",
    category: "e_vs_ee",
    categoryName: "e vs é (Open eh vs Closed ay)",
    contrastSymbol: "e ↔ é",
    contrastRule: "'felel' (short e) means 'answers/replies'; 'fél' (long é) means 'is afraid' or 'half'.",
    wordA: {
      hindi: "felel",
      roman: "feh-lel",
      phonics: "feh-lel",
      english: "answers / replies",
      matraSymbol: "e",
      matraName: "Short 'e' (/ɛ/)",
      breakdown: "f + e + l + e + l",
      examplePhrase: { hindi: "A diák felel", roman: "aw di-aak feh-lel", english: "the student answers" }
    },
    wordB: {
      hindi: "fél",
      roman: "fayl",
      phonics: "fayl",
      english: "half / is afraid",
      matraSymbol: "é",
      matraName: "Long 'é' (/eː/)",
      breakdown: "f + é + l",
      examplePhrase: { hindi: "Fél óra", roman: "fayl oh-raw", english: "half an hour" }
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
      hindi: "kor",
      roman: "kor",
      phonics: "kor (short o)",
      english: "age / era",
      matraSymbol: "o",
      matraName: "Short 'o' (/o/)",
      breakdown: "k + o + r",
      examplePhrase: { hindi: "Középkor", roman: "koe-zayp-kor", english: "Middle Ages" }
    },
    wordB: {
      hindi: "kór",
      roman: "kohr",
      phonics: "kohr (long ó)",
      english: "disease / malady (cf. kórház = hospital)",
      matraSymbol: "ó",
      matraName: "Long 'ó' (/oː/)",
      breakdown: "k + ó + r",
      examplePhrase: { hindi: "Kórház", roman: "kohr-haaz", english: "hospital" }
    }
  },
  {
    id: "mp_sor_soer",
    category: "o_vs_oo_oe",
    categoryName: "o / ó / ö / ő (Back vs Front Rounded)",
    contrastSymbol: "o ↔ ö",
    contrastRule: "Back vowel 'o' in 'sor' means line/queue/row; front rounded 'ö' in 'sör' means beer!",
    wordA: {
      hindi: "sor",
      roman: "shor",
      phonics: "shor (back vowel o)",
      english: "line / queue / row",
      matraSymbol: "o",
      matraName: "Back Vowel 'o'",
      breakdown: "s + o + r",
      examplePhrase: { hindi: "Hosszú sor", roman: "hos-soo shor", english: "long queue" }
    },
    wordB: {
      hindi: "sör",
      roman: "shoer",
      phonics: "shoer (front rounded ö)",
      english: "beer",
      matraSymbol: "ö",
      matraName: "Front Rounded 'ö'",
      breakdown: "s + ö + r",
      examplePhrase: { hindi: "Egy korsó sör", roman: "edy kor-shoh shoer", english: "a mug of beer" }
    }
  },
  {
    id: "mp_orul_oerul",
    category: "o_vs_oo_oe",
    categoryName: "o / ó / ö / ő (Back vs Front Rounded)",
    contrastSymbol: "ö ↔ ő",
    contrastRule: "Famous Hungarian minimal pair! Short 'ö' in 'örül' means 'rejoices / is glad'; long 'ő' in 'őrül' means 'goes crazy'!",
    wordA: {
      hindi: "örül",
      roman: "oe-ruel",
      phonics: "oe-ruel (short ö)",
      english: "is glad / rejoices (Örülök = Nice to meet you!)",
      matraSymbol: "ö",
      matraName: "Short 'ö' (/ø/)",
      breakdown: "ö + r + ü + l",
      examplePhrase: { hindi: "Nagyon örülök!", roman: "naw-dyon oe-rue-loek", english: "I'm very glad / Pleased to meet you!" }
    },
    wordB: {
      hindi: "őrül",
      roman: "oe:-ruel",
      phonics: "oe:-ruel (long held ő)",
      english: "goes crazy / loses one's mind",
      matraSymbol: "ő",
      matraName: "Long 'ő' (/øː/)",
      breakdown: "ő + r + ü + l",
      examplePhrase: { hindi: "Megőrülök!", roman: "meg-oe:-rue-loek", english: "I'm going crazy!" }
    }
  },
  {
    id: "mp_ot_oet",
    category: "o_vs_oo_oe",
    categoryName: "o / ó / ö / ő (Back vs Front Rounded)",
    contrastSymbol: "ö ↔ ő",
    contrastRule: "Short 'ö' in 'öt' means five (5); long 'ő' in 'őt' means him/her (direct object of ő).",
    wordA: {
      hindi: "öt",
      roman: "oet",
      phonics: "oet (short ö)",
      english: "five (5)",
      matraSymbol: "ö",
      matraName: "Short 'ö' (/ø/)",
      breakdown: "ö + t",
      examplePhrase: { hindi: "Öt óra", roman: "oet oh-raw", english: "five o'clock" }
    },
    wordB: {
      hindi: "őt",
      roman: "oe:t",
      phonics: "oe:t (long ő)",
      english: "him / her (accusative)",
      matraSymbol: "ő",
      matraName: "Long 'ő' (/øː/)",
      breakdown: "ő + t",
      examplePhrase: { hindi: "Ismerem őt", roman: "ish-meh-rem oe:t", english: "I know him/her" }
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
      hindi: "szó",
      roman: "soh",
      phonics: "soh (pure s)",
      english: "word",
      matraSymbol: "sz",
      matraName: "Digraph 'sz' (/s/)",
      breakdown: "sz + ó",
      examplePhrase: { hindi: "Magyar szó", roman: "maw-dyawr soh", english: "Hungarian word" }
    },
    wordB: {
      hindi: "só",
      roman: "shoh",
      phonics: "shoh ('sh')",
      english: "salt",
      matraSymbol: "s",
      matraName: "Single 's' (/ʃ/)",
      breakdown: "s + ó",
      examplePhrase: { hindi: "Egy csipet só", roman: "edy chi-pet shoh", english: "a pinch of salt" }
    }
  },
  {
    id: "mp_szam_sam",
    category: "sz_vs_s",
    categoryName: "sz vs s (/s/ vs /ʃ/ 'sh')",
    contrastSymbol: "sz ↔ s",
    contrastRule: "'szám' (/saːm/) means number or my mouth; 'sál' (/ʃaːl/) starts with /ʃ/ and means scarf.",
    wordA: {
      hindi: "szám",
      roman: "saam",
      phonics: "saam (pure s)",
      english: "number / account",
      matraSymbol: "sz",
      matraName: "Digraph 'sz' (/s/)",
      breakdown: "sz + á + m",
      examplePhrase: { hindi: "Telefonszám", roman: "teh-leh-fon-saam", english: "phone number" }
    },
    wordB: {
      hindi: "sál",
      roman: "shaal",
      phonics: "shaal ('sh')",
      english: "scarf / shawl",
      matraSymbol: "s",
      matraName: "Single 's' (/ʃ/)",
      breakdown: "s + á + l",
      examplePhrase: { hindi: "Meleg sál", roman: "meh-leg shaal", english: "warm scarf" }
    }
  },
  {
    id: "mp_husz_hus",
    category: "sz_vs_s",
    categoryName: "sz vs s (/s/ vs /ʃ/ 'sh')",
    contrastSymbol: "sz ↔ s",
    contrastRule: "At the end of a word: 'húsz' (/huːs/) means twenty (20); 'hús' (/huːʃ/) means meat!",
    wordA: {
      hindi: "húsz",
      roman: "hoos",
      phonics: "hoos (ends in /s/)",
      english: "twenty (20)",
      matraSymbol: "sz",
      matraName: "Digraph 'sz' (/s/)",
      breakdown: "h + ú + sz",
      examplePhrase: { hindi: "Húsz perc", roman: "hoos perts", english: "twenty minutes" }
    },
    wordB: {
      hindi: "hús",
      roman: "hoosh",
      phonics: "hoosh (ends in 'sh')",
      english: "meat",
      matraSymbol: "s",
      matraName: "Single 's' (/ʃ/)",
      breakdown: "h + ú + s",
      examplePhrase: { hindi: "Marhahús", roman: "mawr-haw-hoosh", english: "beef" }
    }
  },
  {
    id: "mp_szep_seb",
    category: "sz_vs_s",
    categoryName: "sz vs s (/s/ vs /ʃ/ 'sh')",
    contrastSymbol: "sz ↔ s",
    contrastRule: "'szép' (/seːp/) starts with /s/ and means beautiful; 'seb' (/ʃɛb/) starts with 'sh' and means wound/speed.",
    wordA: {
      hindi: "szép",
      roman: "sayp",
      phonics: "sayp (pure s)",
      english: "beautiful / nice",
      matraSymbol: "sz",
      matraName: "Digraph 'sz' (/s/)",
      breakdown: "sz + é + p",
      examplePhrase: { hindi: "Szép napot!", roman: "sayp naw-pot", english: "Have a nice day!" }
    },
    wordB: {
      hindi: "seb",
      roman: "sheb",
      phonics: "sheb ('sh')",
      english: "wound / gear (sebesség = speed)",
      matraSymbol: "s",
      matraName: "Single 's' (/ʃ/)",
      breakdown: "s + e + b",
      examplePhrase: { hindi: "Sebesség", roman: "sheh-besh-shayg", english: "speed" }
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
      hindi: "cápa",
      roman: "tsaa-paw",
      phonics: "tsaa-paw ('c' = ts)",
      english: "shark",
      matraSymbol: "c",
      matraName: "Single 'c' (/ts/)",
      breakdown: "c + á + p + a",
      examplePhrase: { hindi: "Fehér cápa", roman: "feh-hayr tsaa-paw", english: "white shark" }
    },
    wordB: {
      hindi: "csap",
      roman: "chawp",
      phonics: "chawp ('cs' = ch)",
      english: "faucet / tap / strikes",
      matraSymbol: "cs",
      matraName: "Digraph 'cs' (/tʃ/)",
      breakdown: "cs + a + p",
      examplePhrase: { hindi: "Csapvíz", roman: "chawp-veez", english: "tap water" }
    }
  },
  {
    id: "mp_cica_csoda",
    category: "cs_c_gy",
    categoryName: "c / cs / gy / d (Affricates & Palatals)",
    contrastSymbol: "c ↔ cs",
    contrastRule: "'cica' (/tsitsɒ/) uses two /ts/ sounds for 'kitty'; 'csoda' (/tʃodɒ/) starts with /tʃ/ 'ch' for 'miracle/wonder'.",
    wordA: {
      hindi: "cica",
      roman: "tsi-tsaw",
      phonics: "tsi-tsaw (both 'c' = ts)",
      english: "kitten / kitty",
      matraSymbol: "c",
      matraName: "Single 'c' (/ts/)",
      breakdown: "c + i + c + a",
      examplePhrase: { hindi: "Kiscica", roman: "kish-tsi-tsaw", english: "little kitten" }
    },
    wordB: {
      hindi: "csoda",
      roman: "cho-daw",
      phonics: "cho-daw ('cs' = ch)",
      english: "miracle / wonder",
      matraSymbol: "cs",
      matraName: "Digraph 'cs' (/tʃ/)",
      breakdown: "cs + o + d + a",
      examplePhrase: { hindi: "Csodálatos!", roman: "cho-daa-law-tosh", english: "Wonderful!" }
    }
  },
  {
    id: "mp_nagy_nad",
    category: "cs_c_gy",
    categoryName: "c / cs / gy / d (Affricates & Palatals)",
    contrastSymbol: "gy ↔ d",
    contrastRule: "Palatal 'gy' (/ɟ/) in 'nagy' softens the stop against the roof of the mouth; dental 'd' in 'nád' is pronounced at the upper teeth.",
    wordA: {
      hindi: "nagy",
      roman: "nawdy",
      phonics: "nawdy (palatal gy)",
      english: "big / large",
      matraSymbol: "gy",
      matraName: "Palatal 'gy' (/ɟ/)",
      breakdown: "n + a + gy",
      examplePhrase: { hindi: "Nagy ház", roman: "nawdy haaz", english: "big house" }
    },
    wordB: {
      hindi: "nád",
      roman: "naad",
      phonics: "naad (dental d)",
      english: "reed / cane",
      matraSymbol: "d",
      matraName: "Dental 'd' (/d/)",
      breakdown: "n + á + d",
      examplePhrase: { hindi: "Cukornád", roman: "tsu-kor-naad", english: "sugarcane" }
    }
  },
  {
    id: "mp_agy_aagy",
    category: "cs_c_gy",
    categoryName: "c / cs / gy / d (Affricates & Palatals)",
    contrastSymbol: "agy ↔ ágy",
    contrastRule: "'agy' with short rounded 'a' + palatal 'gy' means 'brain'; 'ágy' with long open 'á' + palatal 'gy' means 'bed'!",
    wordA: {
      hindi: "agy",
      roman: "awdy",
      phonics: "awdy (short rounded a + gy)",
      english: "brain",
      matraSymbol: "a+gy",
      matraName: "Short 'a' + 'gy'",
      breakdown: "a + gy",
      examplePhrase: { hindi: "Emberi agy", roman: "em-beh-ri awdy", english: "human brain" }
    },
    wordB: {
      hindi: "ágy",
      roman: "aady",
      phonics: "aady (long open á + gy)",
      english: "bed",
      matraSymbol: "á+gy",
      matraName: "Long 'á' + 'gy'",
      breakdown: "á + gy",
      examplePhrase: { hindi: "Kényelmes ágy", roman: "kay-nyel-mesh aady", english: "comfortable bed" }
    }
  }
];

if (typeof window !== 'undefined') {
  window.MATRA_CATEGORIES = MATRA_CATEGORIES;
  window.MATRA_CURRICULUM = MATRA_CURRICULUM;
  window.MINIMAL_PAIR_CATEGORIES = MINIMAL_PAIR_CATEGORIES;
  window.HINDI_MINIMAL_PAIRS = HINDI_MINIMAL_PAIRS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MATRA_CATEGORIES, MATRA_CURRICULUM, MINIMAL_PAIR_CATEGORIES, HINDI_MINIMAL_PAIRS };
}
