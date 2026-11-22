// Curated Italian Sounds, Digraphs & Double Consonants Curriculum (Pronuncia & Doppie)
// Designed for reading fluency, native it-IT pronunciation, and minimal-pair contrast drills.

const SOUND_CATEGORIES = [
  { id: "all", name: "All Sounds (24)", symbol: "gn / gli / doppie", count: 24 },
  { id: "c_ch", name: "c / ci / ce vs ch (Soft 'ch' vs Hard 'k')", symbol: "ci / chi", description: "Before e/i, 'c' is soft 'ch' (ciao, cena). Add 'h' (che, chi) to make it hard 'k'!" },
  { id: "g_gh", name: "g / gi / ge vs gh (Soft 'j' vs Hard 'g')", symbol: "gi / ghi", description: "Before e/i, 'g' is soft 'j' (gelato, giorno). Add 'h' (ghe, ghi) to make it hard 'g'!" },
  { id: "gli_gn", name: "gli & gn (Palatal Treasures)", symbol: "gli / gn", description: "'gli' is like 'lli' in 'million' (famiglia); 'gn' is like 'ny' in 'canyon' (gnocchi, bagno)." },
  { id: "sc_sch", name: "sce / sci vs sche / schi ('sh' vs 'sk')", symbol: "sci / schi", description: "'sc' before e/i is 'sh' (pesce, uscire); add 'h' for hard 'sk' (pesche, scherzo)!" },
  { id: "doppie", name: "Double Consonants (Le Doppie)", symbol: "ll / tt / nn", description: "Hold double consonants twice as long — they change word meanings (pala vs palla, capello vs cappello)!" },
  { id: "z_r", name: "z / zz ('ts'/'dz') & Trilled r", symbol: "zz / rr", description: "Italian 'z/zz' is crisp 'ts' (pizza) or 'dz' (zero); 'r' is tapped or trilled." }
];

const SOUND_CURRICULUM = [
  // --- 1. c / ci / ce vs ch ---
  {
    id: "ciao",
    target: "ciao",
    phonetic: "CHAH-oh",
    english: "hi / bye",
    soundId: "c_ch",
    soundName: "Soft 'ci' (/tʃ/)",
    soundVowel: "ci",
    soundSymbol: "ci",
    soundType: "Soft Palatal Affricate",
    phonics: "CHAH-oh ('i' softens 'c', glides into 'a')",
    breakdown: "ci + a + o",
    length: 2,
    rule: "Before 'i' or 'e', Italian 'c' is ALWAYS soft 'ch' (never 's' or 'k').",
    examplePhrase: { target: "Ciao a tutti!", phonetic: "CHAH-oh ah TOOT-tee", english: "Hi everyone!" }
  },
  {
    id: "cena_s",
    target: "cena",
    phonetic: "CHEH-nah",
    english: "dinner",
    soundId: "c_ch",
    soundName: "Soft 'ce' (/tʃ/)",
    soundVowel: "ce",
    soundSymbol: "ce",
    soundType: "Soft Palatal Affricate",
    phonics: "CHEH-nah (crisp 'ch' + open 'eh')",
    breakdown: "ce + na",
    length: 2,
    rule: "'c' + 'e' always sounds like 'cheh' (as in 'check').",
    examplePhrase: { target: "Buona cena!", phonetic: "BWOH-nah CHEH-nah", english: "Enjoy your dinner!" }
  },
  {
    id: "chiave_s",
    target: "chiave",
    phonetic: "KYAH-veh",
    english: "key",
    soundId: "c_ch",
    soundName: "Hard 'chi' (/k/)",
    soundVowel: "chi",
    soundSymbol: "ch",
    soundType: "Hard Velar Stop",
    phonics: "KYAH-veh (the 'h' keeps 'c' hard like 'k')",
    breakdown: "chi + a + ve",
    length: 2,
    rule: "Whenever you see 'ch' in Italian, it is ALWAYS hard 'k' — NEVER English 'ch'!",
    examplePhrase: { target: "Le chiavi di casa", phonetic: "leh KYAH-vee dee KAH-zah", english: "the house keys" }
  },
  {
    id: "chiesa",
    target: "chiesa",
    phonetic: "KYEH-zah",
    english: "church",
    soundId: "c_ch",
    soundName: "Hard 'chi' (/k/)",
    soundVowel: "chi",
    soundSymbol: "ch",
    soundType: "Hard Velar Stop",
    phonics: "KYEH-zah (hard 'k' + 'yeh')",
    breakdown: "chi + e + sa",
    length: 2,
    rule: "'ch' + 'i'/'e' = hard 'k' (like 'Chianti' = KYAHN-tee, 'bruschetta' = broos-KEHT-tah!).",
    examplePhrase: { target: "Una chiesa antica", phonetic: "OO-nah KYEH-zah ahn-TEE-kah", english: "an old church" }
  },

  // --- 2. g / gi / ge vs gh ---
  {
    id: "gelato",
    target: "gelato",
    phonetic: "jeh-LAH-toh",
    english: "ice cream",
    soundId: "g_gh",
    soundName: "Soft 'ge' (/dʒ/)",
    soundVowel: "ge",
    soundSymbol: "ge",
    soundType: "Soft Palatal Affricate",
    phonics: "jeh-LAH-toh (soft 'j' as in 'gem')",
    breakdown: "ge + la + to",
    length: 3,
    rule: "'g' before 'e' or 'i' is ALWAYS soft 'j' (never hard 'g').",
    examplePhrase: { target: "Un gelato al pistacchio", phonetic: "oon jeh-LAH-toh ahl pees-TAHK-kyoh", english: "a pistachio gelato" }
  },
  {
    id: "giorno",
    target: "giorno",
    phonetic: "JOHR-noh",
    english: "day",
    soundId: "g_gh",
    soundName: "Soft 'gi' (/dʒ/)",
    soundVowel: "gi",
    soundSymbol: "gi",
    soundType: "Soft Palatal Affricate",
    phonics: "JOHR-noh ('i' softens 'g', silent before 'o')",
    breakdown: "gio + r + no",
    length: 2,
    rule: "In 'gia/gio/giu', the 'i' is just a softener for 'g' — don't pronounce a separate 'ee'!",
    examplePhrase: { target: "Buongiorno!", phonetic: "bwohn-JOHR-noh", english: "Good morning!" }
  },
  {
    id: "spaghetti",
    target: "spaghetti",
    phonetic: "spah-GEHT-tee",
    english: "spaghetti",
    soundId: "g_gh",
    soundName: "Hard 'ghe' (/g/)",
    soundVowel: "ghe",
    soundSymbol: "gh",
    soundType: "Hard Velar Stop",
    phonics: "spah-GEHT-tee (hard 'g' + held double 'tt')",
    breakdown: "spa + ghet + ti",
    length: 3,
    rule: "Adding 'h' after 'g' before e/i keeps it hard 'g' as in 'go' (spaghetti, ghiaccio).",
    examplePhrase: { target: "Spaghetti al pomodoro", phonetic: "spah-GEHT-tee ahl poh-moh-DOH-roh", english: "spaghetti with tomato sauce" }
  },
  {
    id: "ghiaccio",
    target: "ghiaccio",
    phonetic: "GYAHT-choh",
    english: "ice",
    soundId: "g_gh",
    soundName: "Hard 'ghi' (/g/)",
    soundVowel: "ghi",
    soundSymbol: "gh",
    soundType: "Hard Velar Stop",
    phonics: "GYAHT-choh (hard 'g' + double soft 'cc')",
    breakdown: "ghi + ac + cio",
    length: 2,
    rule: "Great double-rule word: 'ghi' = hard 'g' (GYAH) and 'ccio' = soft held 'ch' (T-choh)!",
    examplePhrase: { target: "Senza ghiaccio, grazie", phonetic: "SEHN-tsah GYAHT-choh, GRAH-tsyeh", english: "Without ice, thanks" }
  },

  // --- 3. gli & gn ---
  {
    id: "famiglia_s",
    target: "famiglia",
    phonetic: "fah-MEE-lyah",
    english: "family",
    soundId: "gli_gn",
    soundName: "Palatal 'gli' (/ʎ/)",
    soundVowel: "gli",
    soundSymbol: "gli",
    soundType: "Palatal Lateral",
    phonics: "fah-MEE-lyah (press middle of tongue to roof of mouth)",
    breakdown: "fa + mi + glia",
    length: 3,
    rule: "'gli' sounds like the 'lli' in 'million' — never pronounce a hard 'g'!",
    examplePhrase: { target: "La mia famiglia", phonetic: "lah MEE-ah fah-MEE-lyah", english: "my family" }
  },
  {
    id: "figlio",
    target: "figlio",
    phonetic: "FEE-lyoh",
    english: "son",
    soundId: "gli_gn",
    soundName: "Palatal 'gli' (/ʎ/)",
    soundVowel: "gli",
    soundSymbol: "gli",
    soundType: "Palatal Lateral",
    phonics: "FEE-lyoh ('ly' fused smoothly)",
    breakdown: "fi + glio",
    length: 2,
    rule: "Keep the 'l' and 'y' fused into one smooth palatal glide: FEE-lyoh.",
    examplePhrase: { target: "Mio figlio ha dieci anni", phonetic: "MEE-oh FEE-lyoh ah DYEH-chee AHN-nee", english: "My son is ten years old" }
  },
  {
    id: "gnocchi",
    target: "gnocchi",
    phonetic: "NYOHK-kee",
    english: "gnocchi (potato dumplings)",
    soundId: "gli_gn",
    soundName: "Palatal 'gn' (/ɲ/)",
    soundVowel: "gn",
    soundSymbol: "gn",
    soundType: "Palatal Nasal",
    phonics: "NYOHK-kee ('gn' = 'ny' + double hard 'cch')",
    breakdown: "gnoc + chi",
    length: 2,
    rule: "'gn' is ALWAYS pronounced like Spanish 'ñ' or 'ny' in 'canyon' (never hard 'g').",
    examplePhrase: { target: "Gnocchi al pesto", phonetic: "NYOHK-kee ahl PEHS-toh", english: "gnocchi with pesto" }
  },
  {
    id: "bagno",
    target: "bagno",
    phonetic: "BAH-nyoh",
    english: "bathroom / bath",
    soundId: "gli_gn",
    soundName: "Palatal 'gn' (/ɲ/)",
    soundVowel: "gn",
    soundSymbol: "gn",
    soundType: "Palatal Nasal",
    phonics: "BAH-nyoh (crisp 'ny' sound)",
    breakdown: "ba + gno",
    length: 2,
    rule: "One of the most useful travel words in Italy: 'Dov'è il bagno?'",
    examplePhrase: { target: "Scusi, dov'è il bagno?", phonetic: "SKOO-zee, doh-VEH eel BAH-nyoh", english: "Excuse me, where is the bathroom?" }
  },

  // --- 4. sce / sci vs sche / schi ---
  {
    id: "pesce",
    target: "pesce",
    phonetic: "PEH-sheh",
    english: "fish",
    soundId: "sc_sch",
    soundName: "Soft 'sce' (/ʃ/)",
    soundVowel: "sce",
    soundSymbol: "sc",
    soundType: "Palatal Fricative ('sh')",
    phonics: "PEH-sheh ('sc' before 'e' = 'sh')",
    breakdown: "pe + sce",
    length: 2,
    rule: "'sc' before 'e' or 'i' is always 'sh' (as in 'ship'). Compare 'pesce' (fish) vs 'pesche' (peaches)!",
    examplePhrase: { target: "Pesce fresco del giorno", phonetic: "PEH-sheh FREHS-koh dehl JOHR-noh", english: "fresh fish of the day" }
  },
  {
    id: "uscire_s",
    target: "uscire",
    phonetic: "oo-SHEE-reh",
    english: "to go out",
    soundId: "sc_sch",
    soundName: "Soft 'sci' (/ʃ/)",
    soundVowel: "sci",
    soundSymbol: "sc",
    soundType: "Palatal Fricative ('sh')",
    phonics: "oo-SHEE-reh ('sci' = 'shee')",
    breakdown: "u + sci + re",
    length: 3,
    rule: "Compare 'uscita' (oo-SHEE-tah = exit) with 'esco' (EHS-koh = I go out, hard 'sc' before 'o').",
    examplePhrase: { target: "Uscita di emergenza", phonetic: "oo-SHEE-tah dee eh-mehr-JEHN-tsah", english: "emergency exit" }
  },
  {
    id: "pesche",
    target: "pesche",
    phonetic: "PEHS-keh",
    english: "peaches",
    soundId: "sc_sch",
    soundName: "Hard 'sche' (/sk/)",
    soundVowel: "sche",
    soundSymbol: "sch",
    soundType: "Hard Cluster ('sk')",
    phonics: "PEHS-keh ('h' turns 'sh' into 'sk')",
    breakdown: "pe + sche",
    length: 2,
    rule: "Adding 'h' after 'sc' makes it hard 'sk': pesche (peaches), scherzo (joke), bruschetta!",
    examplePhrase: { target: "Pesche dolci d'estate", phonetic: "PEHS-keh DOHL-chee dehs-TAH-teh", english: "sweet summer peaches" }
  },
  {
    id: "scherzo",
    target: "scherzo",
    phonetic: "SKEHR-tsoh",
    english: "joke / prank",
    soundId: "sc_sch",
    soundName: "Hard 'sche' (/sk/)",
    soundVowel: "sche",
    soundSymbol: "sch",
    soundType: "Hard Cluster ('sk')",
    phonics: "SKEHR-tsoh ('sch' = 'sk' + 'z' = 'ts')",
    breakdown: "sche + r + zo",
    length: 2,
    rule: "'Sto scherzando!' = 'I'm just kidding!' — always hard 'sk'.",
    examplePhrase: { target: "Dai, è solo uno scherzo!", phonetic: "dah-ee, eh SOH-loh OO-noh SKEHR-tsoh", english: "Come on, it's just a joke!" }
  },

  // --- 5. Double Consonants (Le Doppie) ---
  {
    id: "palla",
    target: "palla",
    phonetic: "PAHL-lah",
    english: "ball",
    soundId: "doppie",
    soundName: "Double 'll'",
    soundVowel: "ll",
    soundSymbol: "ll",
    soundType: "Geminate Consonant",
    phonics: "PAHL-lah (hold the 'l' twice as long!)",
    breakdown: "pal + la",
    length: 2,
    rule: "In Italian, double consonants are genuinely HELD longer. 'pala' = shovel; 'palla' = ball!",
    examplePhrase: { target: "Passami la palla!", phonetic: "PAHS-sah-mee lah PAHL-lah", english: "Pass me the ball!" }
  },
  {
    id: "cappello",
    target: "cappello",
    phonetic: "kahp-PEHL-loh",
    english: "hat",
    soundId: "doppie",
    soundName: "Double 'pp' & 'll'",
    soundVowel: "pp / ll",
    soundSymbol: "pp",
    soundType: "Geminate Consonants",
    phonics: "kahp-PEHL-loh (pause on both 'pp' and 'll')",
    breakdown: "cap + pel + lo",
    length: 3,
    rule: "The #1 classic pair: 'capello' (single p) = a single hair; 'cappello' (double pp) = hat!",
    examplePhrase: { target: "Che bel cappello!", phonetic: "keh behl kahp-PEHL-loh", english: "What a nice hat!" }
  },
  {
    id: "nonno",
    target: "nonno",
    phonetic: "NOHN-noh",
    english: "grandfather",
    soundId: "doppie",
    soundName: "Double 'nn'",
    soundVowel: "nn",
    soundSymbol: "nn",
    soundType: "Geminate Nasal",
    phonics: "NOHN-noh (hum the 'n' twice as long)",
    breakdown: "non + no",
    length: 2,
    rule: "Hold 'nn' clearly: 'nono' (single n) = ninth; 'nonno' (double nn) = grandfather!",
    examplePhrase: { target: "La pasta della nonna", phonetic: "lah PAHS-tah DEHL-lah NOHN-nah", english: "grandma's pasta" }
  },
  {
    id: "sette_s",
    target: "sette",
    phonetic: "SEHT-teh",
    english: "seven (7)",
    soundId: "doppie",
    soundName: "Double 'tt'",
    soundVowel: "tt",
    soundSymbol: "tt",
    soundType: "Geminate Stop",
    phonics: "SEHT-teh (brief stop before releasing 't')",
    breakdown: "set + te",
    length: 2,
    rule: "'sete' (single t) = thirst; 'sette' (double tt) = seven!",
    examplePhrase: { target: "Alle sette di sera", phonetic: "AHL-leh SEHT-teh dee SEH-rah", english: "at seven in the evening" }
  },

  // --- 6. z / zz & Trilled r ---
  {
    id: "pizza",
    target: "pizza",
    phonetic: "PEET-tsah",
    english: "pizza",
    soundId: "z_r",
    soundName: "Voiceless 'zz' (/tts/)",
    soundVowel: "zz",
    soundSymbol: "zz",
    soundType: "Geminate Affricate",
    phonics: "PEET-tsah (crisp 't-ts')",
    breakdown: "piz + za",
    length: 2,
    rule: "Voiceless 'zz' sounds like a held 'ts' (pizza, piazza, ragazzo).",
    examplePhrase: { target: "Una pizza margherita", phonetic: "OO-nah PEET-tsah mahr-geh-REE-tah", english: "a margherita pizza" }
  },
  {
    id: "zero",
    target: "zero",
    phonetic: "DZEH-roh",
    english: "zero",
    soundId: "z_r",
    soundName: "Voiced 'z' (/dz/)",
    soundVowel: "z",
    soundSymbol: "z",
    soundType: "Voiced Affricate",
    phonics: "DZEH-roh (like 'ds' in 'beds')",
    breakdown: "ze + ro",
    length: 2,
    rule: "Word-initial 'z' is usually voiced 'dz' (zero, zaino, zio).",
    examplePhrase: { target: "Sotto zero", phonetic: "SOHT-toh DZEH-roh", english: "below zero" }
  },
  {
    id: "birra",
    target: "birra",
    phonetic: "BEER-rah",
    english: "beer",
    soundId: "z_r",
    soundName: "Trilled Double 'rr'",
    soundVowel: "rr",
    soundSymbol: "rr",
    soundType: "Alveolar Trill",
    phonics: "BEER-rah (rolled tongue-tip 'rr')",
    breakdown: "bir + ra",
    length: 2,
    rule: "Single 'r' is a quick tap (caro); double 'rr' is a full rolled trill (birra, carro, terra)!",
    examplePhrase: { target: "Una birra alla spina", phonetic: "OO-nah BEER-rah AHL-lah SPEE-nah", english: "a draft beer" }
  },
  {
    id: "terra",
    target: "terra",
    phonetic: "TEHR-rah",
    english: "earth / ground / land",
    soundId: "z_r",
    soundName: "Trilled Double 'rr'",
    soundVowel: "rr",
    soundSymbol: "rr",
    soundType: "Alveolar Trill",
    phonics: "TEHR-rah (open 'eh' + rolled 'rr')",
    breakdown: "ter + ra",
    length: 2,
    rule: "Practice rolling the tip of your tongue against the ridge behind your upper teeth.",
    examplePhrase: { target: "Con i piedi per terra", phonetic: "kohn ee PYEH-dee pehr TEHR-rah", english: "down to earth (lit. feet on the ground)" }
  }
];

const MINIMAL_PAIR_CATEGORIES = [
  { id: "all", name: "All Pairs (10)" },
  { id: "doppie_pairs", name: "Single vs Double Consonants (Doppie)" },
  { id: "hard_vs_soft", name: "Soft vs Hard (sc/sch & c/ch)" },
  { id: "palatal_pairs", name: "Palatals (gli vs l, gn vs n)" }
];

const MINIMAL_PAIRS = [
  // --- 1. Single vs Double Consonants ---
  {
    id: "mp_capello_cappello",
    category: "doppie_pairs",
    categoryName: "Single vs Double Consonants (Doppie)",
    contrastSymbol: "p ↔ pp",
    contrastRule: "The most famous Italian minimal pair! Single 'p' means a strand of hair; held double 'pp' means a hat.",
    wordA: {
      target: "capello",
      phonetic: "kah-PEHL-loh",
      phonics: "kah-PEHL-loh (quick single 'p')",
      english: "a single hair",
      soundSymbol: "p",
      soundName: "Single 'p'",
      breakdown: "ca + pel + lo",
      examplePhrase: { target: "Un capello bianco", phonetic: "oon kah-PEHL-loh BYAHN-koh", english: "a white hair" }
    },
    wordB: {
      target: "cappello",
      phonetic: "kahp-PEHL-loh",
      phonics: "kahp-PEHL-loh (held double 'pp')",
      english: "hat",
      soundSymbol: "pp",
      soundName: "Double 'pp'",
      breakdown: "cap + pel + lo",
      examplePhrase: { target: "Metti il cappello!", phonetic: "MEHT-tee eel kahp-PEHL-loh", english: "Put on your hat!" }
    }
  },
  {
    id: "mp_pala_palla",
    category: "doppie_pairs",
    categoryName: "Single vs Double Consonants (Doppie)",
    contrastSymbol: "l ↔ ll",
    contrastRule: "Hold 'll' twice as long! Single 'l' = shovel; double 'll' = ball.",
    wordA: {
      target: "pala",
      phonetic: "PAH-lah",
      phonics: "PAH-lah (single 'l')",
      english: "shovel / pizza peel",
      soundSymbol: "l",
      soundName: "Single 'l'",
      breakdown: "pa + la",
      examplePhrase: { target: "La pala da pizza", phonetic: "lah PAH-lah dah PEET-tsah", english: "the pizza peel" }
    },
    wordB: {
      target: "palla",
      phonetic: "PAHL-lah",
      phonics: "PAHL-lah (held 'll')",
      english: "ball",
      soundSymbol: "ll",
      soundName: "Double 'll'",
      breakdown: "pal + la",
      examplePhrase: { target: "Giocare a palla", phonetic: "joh-KAH-reh ah PAHL-lah", english: "to play ball" }
    }
  },
  {
    id: "mp_casa_cassa",
    category: "doppie_pairs",
    categoryName: "Single vs Double Consonants (Doppie)",
    contrastSymbol: "s ↔ ss",
    contrastRule: "Single 's' between vowels is voiced 'z' (KAH-zah = house); double 'ss' is ALWAYS sharp voiceless 'ss' (KAHS-sah = cash register).",
    wordA: {
      target: "casa",
      phonetic: "KAH-zah",
      phonics: "KAH-zah (voiced 'z')",
      english: "house / home",
      soundSymbol: "s",
      soundName: "Single 's'",
      breakdown: "ca + sa",
      examplePhrase: { target: "Torno a casa", phonetic: "TOHR-noh ah KAH-zah", english: "I'm going home" }
    },
    wordB: {
      target: "cassa",
      phonetic: "KAHS-sah",
      phonics: "KAHS-sah (sharp held 'ss')",
      english: "cash register / checkout / crate",
      soundSymbol: "ss",
      soundName: "Double 'ss'",
      breakdown: "cas + sa",
      examplePhrase: { target: "Pagare alla cassa", phonetic: "pah-GAH-reh AHL-lah KAHS-sah", english: "to pay at the register" }
    }
  },
  {
    id: "mp_nono_nonno",
    category: "doppie_pairs",
    categoryName: "Single vs Double Consonants (Doppie)",
    contrastSymbol: "n ↔ nn",
    contrastRule: "Single 'n' = ninth; double 'nn' = grandfather.",
    wordA: {
      target: "nono",
      phonetic: "NOH-noh",
      phonics: "NOH-noh (single 'n')",
      english: "ninth (9th)",
      soundSymbol: "n",
      soundName: "Single 'n'",
      breakdown: "no + no",
      examplePhrase: { target: "Al nono piano", phonetic: "ahl NOH-noh PYAH-noh", english: "on the ninth floor" }
    },
    wordB: {
      target: "nonno",
      phonetic: "NOHN-noh",
      phonics: "NOHN-noh (held 'nn')",
      english: "grandfather",
      soundSymbol: "nn",
      soundName: "Double 'nn'",
      breakdown: "non + no",
      examplePhrase: { target: "Mio nonno ha 80 anni", phonetic: "MEE-oh NOHN-noh ah oht-TAHN-tah AHN-nee", english: "My grandpa is 80" }
    }
  },
  {
    id: "mp_sete_sette",
    category: "doppie_pairs",
    categoryName: "Single vs Double Consonants (Doppie)",
    contrastSymbol: "t ↔ tt",
    contrastRule: "Single 't' = thirst ('ho sete' = I'm thirsty); double 'tt' = seven.",
    wordA: {
      target: "sete",
      phonetic: "SEH-teh",
      phonics: "SEH-teh (single 't')",
      english: "thirst",
      soundSymbol: "t",
      soundName: "Single 't'",
      breakdown: "se + te",
      examplePhrase: { target: "Ho molta sete!", phonetic: "oh MOHL-tah SEH-teh", english: "I'm very thirsty!" }
    },
    wordB: {
      target: "sette",
      phonetic: "SEHT-teh",
      phonics: "SEHT-teh (held 'tt')",
      english: "seven (7)",
      soundSymbol: "tt",
      soundName: "Double 'tt'",
      breakdown: "set + te",
      examplePhrase: { target: "Sette giorni", phonetic: "SEHT-teh JOHR-nee", english: "seven days" }
    }
  },
  {
    id: "mp_caro_carro",
    category: "doppie_pairs",
    categoryName: "Single vs Double Consonants (Doppie)",
    contrastSymbol: "r ↔ rr",
    contrastRule: "Single 'r' is one light tap (caro = dear/expensive); double 'rr' is a full trill (carro = cart/wagon).",
    wordA: {
      target: "caro",
      phonetic: "KAH-roh",
      phonics: "KAH-roh (quick tap 'r')",
      english: "dear / expensive",
      soundSymbol: "r",
      soundName: "Single Tap 'r'",
      breakdown: "ca + ro",
      examplePhrase: { target: "Troppo caro!", phonetic: "TROHP-poh KAH-roh", english: "Too expensive!" }
    },
    wordB: {
      target: "carro",
      phonetic: "KAHR-roh",
      phonics: "KAHR-roh (rolled trill 'rr')",
      english: "cart / wagon",
      soundSymbol: "rr",
      soundName: "Trilled 'rr'",
      breakdown: "car + ro",
      examplePhrase: { target: "Il carro allegorico", phonetic: "eel KAHR-roh ahl-leh-GOH-ree-koh", english: "the carnival float" }
    }
  },

  // --- 2. Soft vs Hard (sc/sch & c/ch) ---
  {
    id: "mp_pesce_pesche",
    category: "hard_vs_soft",
    categoryName: "Soft vs Hard (sc/sch & c/ch)",
    contrastSymbol: "sce ↔ sche",
    contrastRule: "Classic restaurant trap! 'pesce' ('sh') = fish; 'pesche' ('sk') = peaches!",
    wordA: {
      target: "pesce",
      phonetic: "PEH-sheh",
      phonics: "PEH-sheh ('sce' = 'sheh')",
      english: "fish",
      soundSymbol: "sce",
      soundName: "Soft 'sce' ('sh')",
      breakdown: "pe + sce",
      examplePhrase: { target: "Ristorante di pesce", phonetic: "rees-toh-RAHN-teh dee PEH-sheh", english: "seafood restaurant" }
    },
    wordB: {
      target: "pesche",
      phonetic: "PEHS-keh",
      phonics: "PEHS-keh ('sche' = 'skeh')",
      english: "peaches",
      soundSymbol: "sche",
      soundName: "Hard 'sche' ('sk')",
      breakdown: "pe + sche",
      examplePhrase: { target: "Torta alle pesche", phonetic: "TOHR-tah AHL-leh PEHS-keh", english: "peach cake" }
    }
  },
  {
    id: "mp_cina_china",
    category: "hard_vs_soft",
    categoryName: "Soft vs Hard (sc/sch & c/ch)",
    contrastSymbol: "ci ↔ chi",
    contrastRule: "Adding 'h' after 'c' before 'i' flips soft 'ch' (CHEE-nah = China) to hard 'k' (KEE-nah = slope/ink).",
    wordA: {
      target: "Cina",
      phonetic: "CHEE-nah",
      phonics: "CHEE-nah (soft 'ch')",
      english: "China",
      soundSymbol: "ci",
      soundName: "Soft 'ci' ('ch')",
      breakdown: "Ci + na",
      examplePhrase: { target: "Viaggio in Cina", phonetic: "VYAHJ-joh een CHEE-nah", english: "trip to China" }
    },
    wordB: {
      target: "china",
      phonetic: "KEE-nah",
      phonics: "KEE-nah (hard 'k')",
      english: "slope / India ink",
      soundSymbol: "chi",
      soundName: "Hard 'chi' ('k')",
      breakdown: "chi + na",
      examplePhrase: { target: "Disegno a china", phonetic: "dee-ZEH-nyoh ah KEE-nah", english: "ink drawing" }
    }
  },

  // --- 3. Palatals (gli vs l, gn vs n) ---
  {
    id: "mp_figlio_filo",
    category: "palatal_pairs",
    categoryName: "Palatals (gli vs l, gn vs n)",
    contrastSymbol: "gli ↔ l",
    contrastRule: "'gli' is palatal 'ly' (FEE-lyoh = son), while single 'l' is plain 'l' (FEE-loh = thread/wire).",
    wordA: {
      target: "figlio",
      phonetic: "FEE-lyoh",
      phonics: "FEE-lyoh (palatal 'ly')",
      english: "son",
      soundSymbol: "gli",
      soundName: "Palatal 'gli'",
      breakdown: "fi + glio",
      examplePhrase: { target: "Nostro figlio", phonetic: "NOHS-troh FEE-lyoh", english: "our son" }
    },
    wordB: {
      target: "filo",
      phonetic: "FEE-loh",
      phonics: "FEE-loh (plain 'l')",
      english: "thread / wire",
      soundSymbol: "l",
      soundName: "Plain 'l'",
      breakdown: "fi + lo",
      examplePhrase: { target: "Un filo d'olio", phonetic: "oon FEE-loh DOH-lyoh", english: "a drizzle of olive oil" }
    }
  },
  {
    id: "mp_sogno_sono",
    category: "palatal_pairs",
    categoryName: "Palatals (gli vs l, gn vs n)",
    contrastSymbol: "gn ↔ n",
    contrastRule: "'gn' is palatal 'ny' (SOH-nyoh = dream), whereas single 'n' is plain 'n' (SOH-noh = I am / they are).",
    wordA: {
      target: "sogno",
      phonetic: "SOH-nyoh",
      phonics: "SOH-nyoh (palatal 'ny')",
      english: "dream",
      soundSymbol: "gn",
      soundName: "Palatal 'gn'",
      breakdown: "so + gno",
      examplePhrase: { target: "Sogni d'oro!", phonetic: "SOH-nyee DOH-roh", english: "Sweet dreams! (lit. golden dreams)" }
    },
    wordB: {
      target: "sono",
      phonetic: "SOH-noh",
      phonics: "SOH-noh (plain 'n')",
      english: "I am / they are",
      soundSymbol: "n",
      soundName: "Plain 'n'",
      breakdown: "so + no",
      examplePhrase: { target: "Sono pronto!", phonetic: "SOH-noh PROHN-toh", english: "I'm ready!" }
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
