// Core Curated Hungarian Vocabulary Curriculum (Magyar Szókincs Stúdió)
// Annotated with Vowel Harmony class ('Back' = Mély hangrend, 'Front' = Magas hangrend)
// stored in the `nounTrait` field of the Language Lab Engine schema.
// Includes Nominative Plural (-k/-ok/-ek/-ök), Accusative (-t/-ot/-at/-et/-öt), and Inessive (-ban/-ben) forms.

const VOCAB_CURRICULUM = [
  // --- 1. People & Family ---
  {
    id: "ember",
    target: "ember",
    phonetic: "em-ber",
    english: "person / human / man",
    pos: "Noun",
    nounTrait: "Front",
    category: "People & Family",
    pluralDirect: "emberek (-ek)",
    pluralOblique: "embert (acc.) • emberben (-ben)",
    mnemonic: "Think of a glowing 'EMBER' — a warm human being.",
    inflection: {
      direct_sg: "ember",
      direct_pl: "emberek",
      oblique_sg: "embert (acc.)",
      oblique_pl: "emberben (in)"
    },
    example: {
      target: "Sok ember van a téren.",
      phonetic: "shok em-ber vawn aw tay-ren",
      english: "There are many people in the square.",
      explanation: "After quantity words like 'sok' (many) or numbers, Hungarian nouns stay SINGULAR ('sok ember', not *sok emberek)!"
    }
  },
  {
    id: "barat",
    target: "barát",
    phonetic: "baw-raat",
    english: "friend",
    pos: "Noun",
    nounTrait: "Back",
    category: "People & Family",
    pluralDirect: "barátok (-ok)",
    pluralOblique: "barátot (acc.) • baráttal (with)",
    mnemonic: "A 'barát' is a 'bro' / friend.",
    inflection: {
      direct_sg: "barát",
      direct_pl: "barátok",
      oblique_sg: "barátot (acc.)",
      oblique_pl: "barátnak (to/for)"
    },
    example: {
      target: "Ő a legjobb barátom.",
      phonetic: "oe aw leg-yobb baw-raa-tom",
      english: "He/she is my best friend.",
      explanation: "Back-vowel noun: takes -om for 'my friend' (barátom) and -ok for plural (barátok)."
    }
  },
  {
    id: "csalad",
    target: "család",
    phonetic: "chaw-laad",
    english: "family",
    pos: "Noun",
    nounTrait: "Back",
    category: "People & Family",
    pluralDirect: "családok (-ok)",
    pluralOblique: "családot (acc.) • családban (-ban)",
    mnemonic: "Eating 'enchiladas' (család) together with the whole FAMILY.",
    inflection: {
      direct_sg: "család",
      direct_pl: "családok",
      oblique_sg: "családot (acc.)",
      oblique_pl: "családban (in)"
    },
    example: {
      target: "A családom Budapesten él.",
      phonetic: "aw chaw-laa-dom bu-daw-pesh-ten ayl",
      english: "My family lives in Budapest.",
      explanation: "Back vowel (a, á) → takes -om (my), -ok (plural), -ban (in)."
    }
  },
  {
    id: "gyerek",
    target: "gyerek",
    phonetic: "dyeh-rek",
    english: "child / kid",
    pos: "Noun",
    nounTrait: "Front",
    category: "People & Family",
    pluralDirect: "gyerekek (-ek)",
    pluralOblique: "gyereket (acc.) • gyereknek (for)",
    mnemonic: "Starts with palatal 'gy' (dyeh-rek) — a lively child.",
    inflection: {
      direct_sg: "gyerek",
      direct_pl: "gyerekek",
      oblique_sg: "gyereket (acc.)",
      oblique_pl: "gyerekeknek (to/for)"
    },
    example: {
      target: "A gyerekek a parkban játszanak.",
      phonetic: "aw dyeh-reh-kek aw pawrk-bawn yaat-saw-nawk",
      english: "The children are playing in the park.",
      explanation: "Front-vowel noun (e, e) → plural adds -ek (gyerekek), accusative adds -et (gyereket)."
    }
  },
  {
    id: "anya",
    target: "anya",
    phonetic: "aw-nyaw",
    english: "mother / mom",
    pos: "Noun",
    nounTrait: "Back",
    category: "People & Family",
    pluralDirect: "anyák (-k)",
    pluralOblique: "anyát (acc.) • anyának (to)",
    mnemonic: "Sounds like a warm 'Anya' — mother.",
    inflection: {
      direct_sg: "anya",
      direct_pl: "anyák",
      oblique_sg: "anyát (acc.)",
      oblique_pl: "édesanyám (my mom)"
    },
    example: {
      target: "Édesanyám nagyon jól főz.",
      phonetic: "ay-desh-aw-nyaam naw-dyon yohl foez",
      english: "My mother cooks very well.",
      explanation: "Final short 'a' lengthens to 'á' before suffixes: anya → anyát (acc.), anyák (pl.)."
    }
  },
  {
    id: "apa",
    target: "apa",
    phonetic: "aw-paw",
    english: "father / dad",
    pos: "Noun",
    nounTrait: "Back",
    category: "People & Family",
    pluralDirect: "apák (-k)",
    pluralOblique: "apát (acc.) • apának (to)",
    mnemonic: "'Apa' = Papa / Dad.",
    inflection: {
      direct_sg: "apa",
      direct_pl: "apák",
      oblique_sg: "apát (acc.)",
      oblique_pl: "édesapám (my dad)"
    },
    example: {
      target: "Apám mérnök.",
      phonetic: "aw-paam mayr-noek",
      english: "My father is an engineer.",
      explanation: "Final 'a' lengthens to 'á' before suffixes: apa → apám (my dad), apát (acc.)."
    }
  },

  // --- 2. Home & Everyday ---
  {
    id: "haz",
    target: "ház",
    phonetic: "haaz",
    english: "house",
    pos: "Noun",
    nounTrait: "Back",
    category: "Home & Everyday",
    pluralDirect: "házak (-ak)",
    pluralOblique: "házat (acc.) • házban (-ban)",
    mnemonic: "Cognate-like sound with English 'house' (ház).",
    inflection: {
      direct_sg: "ház",
      direct_pl: "házak",
      oblique_sg: "házat (acc.)",
      oblique_pl: "házban (in the house)"
    },
    example: {
      target: "Ez egy régi, szép ház.",
      phonetic: "ez edy ray-gi, sayp haaz",
      english: "This is an old, beautiful house.",
      explanation: "Lowering back-vowel stem: takes '-ak' in plural (házak) and '-at' in accusative (házat)."
    }
  },
  {
    id: "szoba",
    target: "szoba",
    phonetic: "so-baw",
    english: "room",
    pos: "Noun",
    nounTrait: "Back",
    category: "Home & Everyday",
    pluralDirect: "szobák (-k)",
    pluralOblique: "szobát (acc.) • szobában (-ban)",
    mnemonic: "Remember 'sz' is pure 's' (so-baw) — a cozy room.",
    inflection: {
      direct_sg: "szoba",
      direct_pl: "szobák",
      oblique_sg: "szobát (acc.)",
      oblique_pl: "szobában (in the room)"
    },
    example: {
      target: "A szobában van egy nagy asztal.",
      phonetic: "aw so-baa-bawn vawn edy nawdy aws-tawl",
      english: "There is a big table in the room.",
      explanation: "Final 'a' lengthens to 'á' before suffixes: szoba + ban → szobában!"
    }
  },
  {
    id: "asztal",
    target: "asztal",
    phonetic: "aws-tawl",
    english: "table / desk",
    pos: "Noun",
    nounTrait: "Back",
    category: "Home & Everyday",
    pluralDirect: "asztalok (-ok)",
    pluralOblique: "asztalt (acc.) • asztalon (on)",
    mnemonic: "Sitting at the 'aws-tawl' (table) in a café.",
    inflection: {
      direct_sg: "asztal",
      direct_pl: "asztalok",
      oblique_sg: "asztalt (acc.)",
      oblique_pl: "asztalon (on the table)"
    },
    example: {
      target: "A könyv az asztalon van.",
      phonetic: "aw koenyv awz aws-taw-lon vawn",
      english: "The book is on the table.",
      explanation: "Ends in -l, so accusative -t attaches directly without a linking vowel: 'asztalt'."
    }
  },
  {
    id: "szek",
    target: "szék",
    phonetic: "sayk",
    english: "chair",
    pos: "Noun",
    nounTrait: "Front",
    category: "Home & Everyday",
    pluralDirect: "székek (-ek)",
    pluralOblique: "széket (acc.) • széken (on)",
    mnemonic: "'Take a seat' → 'szék' (sayk).",
    inflection: {
      direct_sg: "szék",
      direct_pl: "székek",
      oblique_sg: "széket (acc.)",
      oblique_pl: "széken (on the chair)"
    },
    example: {
      target: "Szabad ez a szék?",
      phonetic: "saw-bawd ez aw sayk",
      english: "Is this chair free / taken?",
      explanation: "Front vowel 'é' → plural 'székek', accusative 'széket'."
    }
  },
  {
    id: "konyv",
    target: "könyv",
    phonetic: "koenyv",
    english: "book",
    pos: "Noun",
    nounTrait: "Front",
    category: "Home & Everyday",
    pluralDirect: "könyvek (-ek)",
    pluralOblique: "könyvet (acc.) • könyvben (-ben)",
    mnemonic: "Has the rounded front vowel 'ö' and palatal 'ny' — könyv.",
    inflection: {
      direct_sg: "könyv",
      direct_pl: "könyvek",
      oblique_sg: "könyvet (acc.)",
      oblique_pl: "könyvtár (library)"
    },
    example: {
      target: "Ez egy nagyon érdekes könyv.",
      phonetic: "ez edy naw-dyon ayr-deh-kesh koenyv",
      english: "This is a very interesting book.",
      explanation: "Front noun → takes -ek in plural (könyvek), -et in accusative (könyvet), -ben in inessive (könyvben)."
    }
  },
  {
    id: "kulcs",
    target: "kulcs",
    phonetic: "kulch",
    english: "key",
    pos: "Noun",
    nounTrait: "Back",
    category: "Home & Everyday",
    pluralDirect: "kulcsok (-ok)",
    pluralOblique: "kulcsot (acc.) • kulccsal (with key)",
    mnemonic: "Sounds like 'clutch' — clutching your house KEY.",
    inflection: {
      direct_sg: "kulcs",
      direct_pl: "kulcsok",
      oblique_sg: "kulcsot (acc.)",
      oblique_pl: "kulccsal (with a key)"
    },
    example: {
      target: "Hol van a kulcsom?",
      phonetic: "hol vawn aw kul-chom",
      english: "Where is my key?",
      explanation: "Back vowel 'u' → takes -ok (kulcsok), -ot (kulcsot), -om (kulcsom)."
    }
  },
  {
    id: "ajto",
    target: "ajtó",
    phonetic: "awy-toh",
    english: "door",
    pos: "Noun",
    nounTrait: "Back",
    category: "Home & Everyday",
    pluralDirect: "ajtók (-k)",
    pluralOblique: "ajtót (acc.) • ajtón (on)",
    mnemonic: "'Ajtó' — open the door.",
    inflection: {
      direct_sg: "ajtó",
      direct_pl: "ajtók",
      oblique_sg: "ajtót (acc.)",
      oblique_pl: "ajtóban (in the doorway)"
    },
    example: {
      target: "Csukd be az ajtót, kérlek!",
      phonetic: "chukd beh awz awy-toht, kayr-lek",
      english: "Close the door, please!",
      explanation: "Ends in long vowel 'ó', so plural -k (ajtók) and accusative -t (ajtót) attach directly!"
    }
  },
  {
    id: "ablak",
    target: "ablak",
    phonetic: "awb-lawk",
    english: "window",
    pos: "Noun",
    nounTrait: "Back",
    category: "Home & Everyday",
    pluralDirect: "ablakok (-ok)",
    pluralOblique: "ablakot (acc.) • ablaknál (by)",
    mnemonic: "'A BLOCK' of glass in the wall = window (ablak).",
    inflection: {
      direct_sg: "ablak",
      direct_pl: "ablakok",
      oblique_sg: "ablakot (acc.)",
      oblique_pl: "ablaknál (by the window)"
    },
    example: {
      target: "Az ablaknál szeretnék ülni.",
      phonetic: "awz awb-lawk-naal seh-ret-nayk uel-ni",
      english: "I would like to sit by the window.",
      explanation: "Back-vowel noun: ablakok (pl.), ablakot (acc.), ablaknál (at/by the window)."
    }
  },

  // --- 3. Food & Drinks ---
  {
    id: "viz",
    target: "víz",
    phonetic: "veez",
    english: "water",
    pos: "Noun",
    nounTrait: "Front",
    category: "Food & Drinks",
    pluralDirect: "vizek (shortens í → i!)",
    pluralOblique: "vizet (acc.) • vízben (-ben)",
    mnemonic: "Fizzy 'víz' (water).",
    inflection: {
      direct_sg: "víz",
      direct_pl: "vizek",
      oblique_sg: "vizet (acc.)",
      oblique_pl: "vízben (in water)"
    },
    example: {
      target: "Egy üveg szénsavmentes vizet kérek.",
      phonetic: "edy ue-veg sayn-shawv-men-tesh vi-zet kay-rek",
      english: "I'd like a bottle of still water, please.",
      explanation: "Vowel-shortening stem! Long 'í' shortens to 'i' in accusative (vizet) and plural (vizek), but stays long in 'vízben'."
    }
  },
  {
    id: "kenyer",
    target: "kenyér",
    phonetic: "keh-nyayr",
    english: "bread",
    pos: "Noun",
    nounTrait: "Front",
    category: "Food & Drinks",
    pluralDirect: "kenyerek (shortens é → e!)",
    pluralOblique: "kenyeret (acc.) • kenyérrel (with)",
    mnemonic: "Fresh warm 'keh-nyayr' from the bakery.",
    inflection: {
      direct_sg: "kenyér",
      direct_pl: "kenyerek",
      oblique_sg: "kenyeret (acc.)",
      oblique_pl: "kenyérben (in bread)"
    },
    example: {
      target: "Friss kenyeret vettem a pékségben.",
      phonetic: "frishsh keh-nyeh-ret vet-tem aw payk-shayg-ben",
      english: "I bought fresh bread at the bakery.",
      explanation: "Vowel-shortening front noun: kenyér → kenyeret (acc.), kenyerek (pl.)."
    }
  },
  {
    id: "kave",
    target: "kávé",
    phonetic: "kaa-vay",
    english: "coffee",
    pos: "Noun",
    nounTrait: "Back",
    category: "Food & Drinks",
    pluralDirect: "kávék (-k)",
    pluralOblique: "kávét (acc.) • kávézó (café)",
    mnemonic: "Cognate with café / coffee — 'kávé'.",
    inflection: {
      direct_sg: "kávé",
      direct_pl: "kávék",
      oblique_sg: "kávét (acc.)",
      oblique_pl: "kávéval (with coffee)"
    },
    example: {
      target: "Tejjel vagy cukorral iszod a kávét?",
      phonetic: "tey-yel vawdy tsu-kor-rawl i-sod aw kaa-vayt",
      english: "Do you drink your coffee with milk or sugar?",
      explanation: "Mixed vowel word ('á' + 'é'): because 'é' is neutral, the back vowel 'á' governs harmony → back-vowel suffixes (kávémat, kávéval)!"
    }
  },
  {
    id: "bor",
    target: "bor",
    phonetic: "bor",
    english: "wine",
    pos: "Noun",
    nounTrait: "Back",
    category: "Food & Drinks",
    pluralDirect: "borok (-ok)",
    pluralOblique: "bort (acc.) • borban (-ban)",
    mnemonic: "Pour a glass of Tokaji 'bor' (wine).",
    inflection: {
      direct_sg: "bor",
      direct_pl: "borok",
      oblique_sg: "bort (acc.)",
      oblique_pl: "borok (wines)"
    },
    example: {
      target: "A magyar bor világhírű.",
      phonetic: "aw maw-dyawr bor vi-laag-hee-rue",
      english: "Hungarian wine is world-famous.",
      explanation: "Ends in -r, so accusative -t attaches directly without linking vowel: 'bort'."
    }
  },
  {
    id: "sor",
    target: "sör",
    phonetic: "shoer",
    english: "beer",
    pos: "Noun",
    nounTrait: "Front",
    category: "Food & Drinks",
    pluralDirect: "sörök (-ök)",
    pluralOblique: "sört (acc.) • söröző (pub)",
    mnemonic: "Watch the dots! 'sör' (with ö) = beer; 'sor' (with o) = line/queue!",
    inflection: {
      direct_sg: "sör",
      direct_pl: "sörök",
      oblique_sg: "sört (acc.)",
      oblique_pl: "sörben (in beer)"
    },
    example: {
      target: "Két korsó sört kérünk!",
      phonetic: "kayt kor-shoh shoert kay-ruenk",
      english: "Two mugs of beer, please!",
      explanation: "Rounded front vowel 'ö' → plural uses rounded linking vowel '-ök' (sörök)."
    }
  },
  {
    id: "alma",
    target: "alma",
    phonetic: "awl-maw",
    english: "apple",
    pos: "Noun",
    nounTrait: "Back",
    category: "Food & Drinks",
    pluralDirect: "almák (-k)",
    pluralOblique: "almát (acc.) • almában (-ban)",
    mnemonic: "'Alma' — crisp red apple.",
    inflection: {
      direct_sg: "alma",
      direct_pl: "almák",
      oblique_sg: "almát (acc.)",
      oblique_pl: "almából (from apple)"
    },
    example: {
      target: "Piros almát vettem a piacon.",
      phonetic: "pi-rosh awl-maat vet-tem aw pi-aw-tson",
      english: "I bought a red apple at the market.",
      explanation: "Final 'a' lengthens to 'á' before suffixes: alma → almát (acc.), almák (pl.)."
    }
  },
  {
    id: "leves",
    target: "leves",
    phonetic: "leh-vesh",
    english: "soup",
    pos: "Noun",
    nounTrait: "Front",
    category: "Food & Drinks",
    pluralDirect: "levesek (-ek)",
    pluralOblique: "levest (acc.) • levesben (-ben)",
    mnemonic: "Hungarian meals always start with a delicious 'leves' (soup) like gulyásleves.",
    inflection: {
      direct_sg: "leves",
      direct_pl: "levesek",
      oblique_sg: "levest (acc.)",
      oblique_pl: "levesben (in soup)"
    },
    example: {
      target: "A gulyásleves nagyon finom.",
      phonetic: "aw gu-yaash-leh-vesh naw-dyon fi-nom",
      english: "The goulash soup is very delicious.",
      explanation: "Ends in sibilant -s, so accusative -t attaches directly: 'levest'."
    }
  },

  // --- 4. Places & Nature ---
  {
    id: "varos",
    target: "város",
    phonetic: "vaa-rosh",
    english: "city / town",
    pos: "Noun",
    nounTrait: "Back",
    category: "Places & Nature",
    pluralDirect: "városok (-ok)",
    pluralOblique: "várost (acc.) • városban (-ban)",
    mnemonic: "Built around a 'vár' (castle/fortress) → 'város' (city).",
    inflection: {
      direct_sg: "város",
      direct_pl: "városok",
      oblique_sg: "várost (acc.)",
      oblique_pl: "városban (in the city)"
    },
    example: {
      target: "Budapest egy gyönyörű város.",
      phonetic: "bu-daw-pesht edy dyoe-nyoe-rue vaa-rosh",
      english: "Budapest is a gorgeous city.",
      explanation: "Back-vowel noun: városban (in the city), városba (into the city)."
    }
  },
  {
    id: "utca",
    target: "utca",
    phonetic: "ut-tsaw",
    english: "street",
    pos: "Noun",
    nounTrait: "Back",
    category: "Places & Nature",
    pluralDirect: "utcák (-k)",
    pluralOblique: "utcát (acc.) • utcán (on the street)",
    mnemonic: "You see 'utca' on every street sign in Hungary (e.g., Váci utca).",
    inflection: {
      direct_sg: "utca",
      direct_pl: "utcák",
      oblique_sg: "utcát (acc.)",
      oblique_pl: "utcán (on the street)"
    },
    example: {
      target: "Melyik utcában laksz?",
      phonetic: "meh-yik ut-tsaa-bawn lawks",
      english: "Which street do you live on?",
      explanation: "Final 'a' lengthens to 'á': utca → utcában, utcán, utcát."
    }
  },
  {
    id: "bolt",
    target: "bolt",
    phonetic: "bolt",
    english: "shop / store",
    pos: "Noun",
    nounTrait: "Back",
    category: "Places & Nature",
    pluralDirect: "boltok (-ok)",
    pluralOblique: "boltot (acc.) • boltban (-ban)",
    mnemonic: "'BOLT' to the store before it closes!",
    inflection: {
      direct_sg: "bolt",
      direct_pl: "boltok",
      oblique_sg: "boltot (acc.)",
      oblique_pl: "boltba (to the shop)"
    },
    example: {
      target: "Elmegyek a boltba tejért.",
      phonetic: "el-meh-dyek aw bolt-baw te-yayrt",
      english: "I'm going to the shop for milk.",
      explanation: "Notice the 3-way spatial distinction: boltban (in the shop), boltba (into the shop), boltból (out of the shop)!"
    }
  },
  {
    id: "etterem",
    target: "étterem",
    phonetic: "ayt-teh-rem",
    english: "restaurant",
    pos: "Noun",
    nounTrait: "Front",
    category: "Places & Nature",
    pluralDirect: "éttermek (drops second 'e'!)",
    pluralOblique: "éttermet (acc.) • étteremben (-ben)",
    mnemonic: "From 'étel' (food) + 'terem' (hall) = dining hall / restaurant.",
    inflection: {
      direct_sg: "étterem",
      direct_pl: "éttermek",
      oblique_sg: "éttermet (acc.)",
      oblique_pl: "étteremben (in)"
    },
    example: {
      target: "Ma este egy jó étteremben vacsorázunk.",
      phonetic: "maw esh-teh edy yoh ayt-teh-rem-ben vaw-cho-raa-zunk",
      english: "Tonight we are having dinner in a good restaurant.",
      explanation: "Fleeting-vowel stem: drops the last 'e' before vowel-initial endings (éttermek, éttermet), keeps it before consonant endings (étteremben)."
    }
  },
  {
    id: "vonat",
    target: "vonat",
    phonetic: "vo-nawt",
    english: "train",
    pos: "Noun",
    nounTrait: "Back",
    category: "Places & Nature",
    pluralDirect: "vonatok (-ok)",
    pluralOblique: "vonatot (acc.) • vonaton (on the train)",
    mnemonic: "'Vonat' — pulled along the tracks.",
    inflection: {
      direct_sg: "vonat",
      direct_pl: "vonatok",
      oblique_sg: "vonatot (acc.)",
      oblique_pl: "vonattal (by train)"
    },
    example: {
      target: "A vonaton olvasok.",
      phonetic: "aw vo-naw-ton ol-vaw-shok",
      english: "I am reading on the train.",
      explanation: "Public transport vehicles in Hungarian use the superessive surface case (-on/-en/-ön = 'on the train/bus')."
    }
  },
  {
    id: "kutya",
    target: "kutya",
    phonetic: "ku-tyaw",
    english: "dog",
    pos: "Noun",
    nounTrait: "Back",
    category: "Places & Nature",
    pluralDirect: "kutyák (-k)",
    pluralOblique: "kutyát (acc.) • kutyával (with)",
    mnemonic: "A 'CUTE-ya' (kutya) puppy!",
    inflection: {
      direct_sg: "kutya",
      direct_pl: "kutyák",
      oblique_sg: "kutyát (acc.)",
      oblique_pl: "kutyának (for the dog)"
    },
    example: {
      target: "A kutyám nagyon barátságos.",
      phonetic: "aw ku-tyaam naw-dyon baw-raat-shaa-gosh",
      english: "My dog is very friendly.",
      explanation: "Practicing the palatal 'ty' digraph + final 'a → á' lengthening (kutya → kutyám, kutyát)."
    }
  },
  {
    id: "macska",
    target: "macska",
    phonetic: "mawch-kaw",
    english: "cat",
    pos: "Noun",
    nounTrait: "Back",
    category: "Places & Nature",
    pluralDirect: "macskák (-k)",
    pluralOblique: "macskát (acc.) • macskával (with)",
    mnemonic: "Digraph 'cs' = 'ch' (mawch-kaw).",
    inflection: {
      direct_sg: "macska",
      direct_pl: "macskák",
      oblique_sg: "macskát (acc.)",
      oblique_pl: "macskának (to the cat)"
    },
    example: {
      target: "A fekete macska az ablakban ül.",
      phonetic: "aw feh-keh-teh mawch-kaw awz awb-lawk-bawn uel",
      english: "The black cat is sitting in the window.",
      explanation: "Final 'a' lengthens to 'á' before suffixes: macska → macskák, macskát."
    }
  },

  // --- 5. Descriptive Adjectives ---
  {
    id: "jo",
    target: "jó",
    phonetic: "yoh",
    english: "good",
    pos: "Adjective",
    nounTrait: "Back",
    category: "Descriptive Adjectives",
    isInflecting: true,
    mnemonic: "'Jó napot!' = Good day! ('j' is pronounced like English 'y').",
    inflection: {
      m_sg: "jó (singular)",
      m_pl: "jók (plural)",
      f_sg: "jobban / jól (adverb: well)",
      f_pl: "jobb (comparative: better)"
    },
    example: {
      target: "Jó reggelt kívánok!",
      phonetic: "yoh reg-gelt kee-vaa-nok",
      english: "Good morning! (I wish a good morning)",
      explanation: "Adjectives BEFORE a noun never change for plural or case ('jó könyvek', 'jó reggelt'); they only take plural -k when standing alone as predicates ('A könyvek jók')."
    }
  },
  {
    id: "szep",
    target: "szép",
    phonetic: "sayp",
    english: "beautiful / nice",
    pos: "Adjective",
    nounTrait: "Front",
    category: "Descriptive Adjectives",
    isInflecting: true,
    mnemonic: "A 'szép' (sayp) view of the Danube.",
    inflection: {
      m_sg: "szép (singular)",
      m_pl: "szépek (plural predicate)",
      f_sg: "szépen (nicely / please)",
      f_pl: "szebb (more beautiful)"
    },
    example: {
      target: "Ma nagyon szép az idő.",
      phonetic: "maw naw-dyon sayp awz ee-doe",
      english: "The weather is very nice today.",
      explanation: "'Köszönöm szépen' literally means 'I thank [it] nicely'!"
    }
  },
  {
    id: "nagy",
    target: "nagy",
    phonetic: "nawdy",
    english: "big / large / great",
    pos: "Adjective",
    nounTrait: "Back",
    category: "Descriptive Adjectives",
    isInflecting: true,
    mnemonic: "One of the most common Hungarian family names (Nagy) — pronounced 'nawdy'.",
    inflection: {
      m_sg: "nagy (singular)",
      m_pl: "nagyok (plural predicate)",
      f_sg: "nagyon (very / very much)",
      f_pl: "nagyobb (bigger)"
    },
    example: {
      target: "Budapest egy nagy város.",
      phonetic: "bu-daw-pesht edy nawdy vaa-rosh",
      english: "Budapest is a big city.",
      explanation: "Adding '-on' gives 'nagyon' = 'very'!"
    }
  },
  {
    id: "kicsi",
    target: "kicsi (kis)",
    phonetic: "ki-chi (kish)",
    english: "small / little",
    pos: "Adjective",
    nounTrait: "Front",
    category: "Descriptive Adjectives",
    isInflecting: true,
    mnemonic: "Sounds cute and tiny: 'ki-chi'. Short form before nouns is 'kis'.",
    inflection: {
      m_sg: "kicsi (standalone) / kis (before noun)",
      m_pl: "kicsik (plural predicate)",
      f_sg: "egy kicsit (a little bit)",
      f_pl: "kisebb (smaller)"
    },
    example: {
      target: "Ez a kávézó kicsi, de hangulatos.",
      phonetic: "ez aw kaa-vay-zoh ki-chi, deh hawn-gu-law-tosh",
      english: "This café is small, but cozy.",
      explanation: "Before a noun you usually use the short form 'kis' ('egy kis kávé'), while after the noun or alone you use 'kicsi' ('A lakás kicsi')."
    }
  },
  {
    id: "finom",
    target: "finom",
    phonetic: "fi-nom",
    english: "delicious / fine",
    pos: "Adjective",
    nounTrait: "Back",
    category: "Descriptive Adjectives",
    isInflecting: true,
    mnemonic: "'FINOM-enal' food = delicious!",
    inflection: {
      m_sg: "finom (singular)",
      m_pl: "finomak (plural predicate)",
      f_sg: "finoman (delicately)",
      f_pl: "finomabb (more delicious)"
    },
    example: {
      target: "Ez a rétes nagyon finom!",
      phonetic: "ez aw ray-tesh naw-dyon fi-nom",
      english: "This strudel is very delicious!",
      explanation: "Mixed vowels 'i' + 'o' → back vowel 'o' dominates, so plural predicate is 'finomak'."
    }
  },
  {
    id: "draga",
    target: "drága",
    phonetic: "draa-gaw",
    english: "expensive / dear",
    pos: "Adjective",
    nounTrait: "Back",
    category: "Descriptive Adjectives",
    isInflecting: true,
    mnemonic: "A 'DRAGON's' hoard of gold is very EXPENSIVE (drága).",
    inflection: {
      m_sg: "drága (singular)",
      m_pl: "drágák (plural predicate)",
      f_sg: "drágán (expensively)",
      f_pl: "drágább (more expensive)"
    },
    example: {
      target: "Ez a szálloda túl drága.",
      phonetic: "ez aw saal-lo-daw tool draa-gaw",
      english: "This hotel is too expensive.",
      explanation: "Also used affectionately like 'dear' ('Drága barátom!' = My dear friend!)."
    }
  },
  {
    id: "olcso",
    target: "olcsó",
    phonetic: "ol-choh",
    english: "cheap / inexpensive",
    pos: "Adjective",
    nounTrait: "Back",
    category: "Descriptive Adjectives",
    isInflecting: true,
    mnemonic: "'Olcsó' (ol-choh) is the opposite of 'drága'.",
    inflection: {
      m_sg: "olcsó (singular)",
      m_pl: "olcsók (plural predicate)",
      f_sg: "olcsón (cheaply)",
      f_pl: "olcsóbb (cheaper)"
    },
    example: {
      target: "A piacon olcsó a gyümölcs.",
      phonetic: "aw pi-aw-tson ol-choh aw dyue-moelch",
      english: "Fruit is cheap at the market.",
      explanation: "Back-vowel adjective ending in long -ó."
    }
  },
  {
    id: "meleg",
    target: "meleg",
    phonetic: "meh-leg",
    english: "warm / hot",
    pos: "Adjective",
    nounTrait: "Front",
    category: "Descriptive Adjectives",
    isInflecting: true,
    mnemonic: "'Meleg' = warm weather or warm soup.",
    inflection: {
      m_sg: "meleg (singular)",
      m_pl: "melegek (plural predicate)",
      f_sg: "melegem van (I am hot)",
      f_pl: "melegebb (warmer)"
    },
    example: {
      target: "Ma nagyon meleg van.",
      phonetic: "maw naw-dyon meh-leg vawn",
      english: "It is very warm today.",
      explanation: "Note: To say 'I feel hot', say 'Melegem van' (literally 'My-warmth there-is')."
    }
  },
  {
    id: "hideg",
    target: "hideg",
    phonetic: "hi-deg",
    english: "cold",
    pos: "Adjective",
    nounTrait: "Front",
    category: "Descriptive Adjectives",
    isInflecting: true,
    mnemonic: "When it's COLD ('hideg'), you 'HIDE' under a blanket.",
    inflection: {
      m_sg: "hideg (singular)",
      m_pl: "hidegek (plural predicate)",
      f_sg: "hidegen (coldly)",
      f_pl: "hidegebb (colder)"
    },
    example: {
      target: "Télen hideg van Magyarországon.",
      phonetic: "tay-len hi-deg vawn maw-dyawr-or-saa-gon",
      english: "In winter it is cold in Hungary.",
      explanation: "Front-vowel adjective: hidegek (plural), hidegebb (colder)."
    }
  },
  {
    id: "uj",
    target: "új",
    phonetic: "ooy",
    english: "new",
    pos: "Adjective",
    nounTrait: "Back",
    category: "Descriptive Adjectives",
    isInflecting: true,
    mnemonic: "'Ooh!' (új) — look at that shiny NEW car!",
    inflection: {
      m_sg: "új (singular)",
      m_pl: "újak (plural predicate)",
      f_sg: "újonnan (newly)",
      f_pl: "újabb (newer)"
    },
    example: {
      target: "Boldog új évet!",
      phonetic: "bol-dog ooy ay-vet",
      english: "Happy New Year!",
      explanation: "Back-vowel adjective: takes lowering '-ak' in plural ('újak')."
    }
  },

  // --- 6. Postpositions & Connectors ---
  {
    id: "alatt",
    target: "alatt",
    phonetic: "aw-lawtt",
    english: "under / underneath / during",
    pos: "Postposition",
    nounTrait: "Back",
    category: "Postpositions & Connectors",
    mnemonic: "A 'LOT' of things hidden UNDER the bed (alatt).",
    example: {
      target: "A macska az asztal alatt alszik.",
      phonetic: "aw mawch-kaw awz aws-tawl aw-lawtt awl-sik",
      english: "The cat is sleeping under the table.",
      explanation: "Hungarian postpositions follow the noun in its basic nominative form ('az asztal alatt' = the table under)."
    }
  },
  {
    id: "felett",
    target: "felett (fölött)",
    phonetic: "feh-lett",
    english: "above / over",
    pos: "Postposition",
    nounTrait: "Front",
    category: "Postpositions & Connectors",
    mnemonic: "Opposite of 'alatt': 'felett' = above.",
    example: {
      target: "A kép az ágy felett lóg.",
      phonetic: "aw kayp awz aady feh-lett lohg",
      english: "The picture hangs above the bed.",
      explanation: "Follows the nominative noun without any case suffix on the noun."
    }
  },
  {
    id: "mellett",
    target: "mellett",
    phonetic: "mel-lett",
    english: "next to / beside",
    pos: "Postposition",
    nounTrait: "Front",
    category: "Postpositions & Connectors",
    mnemonic: "'Mellett' = right beside you.",
    example: {
      target: "A bank a posta mellett van.",
      phonetic: "aw bawnk aw posh-taw mel-lett vawn",
      english: "The bank is next to the post office.",
      explanation: "Notice the Hungarian spatial trio: mellett (at/next to), mellé (moving to beside), mellől (away from beside)."
    }
  },
  {
    id: "elott",
    target: "előtt",
    phonetic: "eh-loett",
    english: "in front of / before (in time)",
    pos: "Postposition",
    nounTrait: "Front",
    category: "Postpositions & Connectors",
    mnemonic: "From 'el-' (fore/front) → 'előtt' = in front of / before.",
    example: {
      target: "A színház előtt találkozunk.",
      phonetic: "aw seen-haaz eh-loett taw-laal-ko-zunk",
      english: "We'll meet in front of the theater.",
      explanation: "Used for both space ('a ház előtt' = in front of the house) and time ('ebéd előtt' = before lunch)."
    }
  },
  {
    id: "mogott",
    target: "mögött",
    phonetic: "moe-goett",
    english: "behind",
    pos: "Postposition",
    nounTrait: "Front",
    category: "Postpositions & Connectors",
    mnemonic: "Opposite of 'előtt': 'mögött' = behind.",
    example: {
      target: "A kert a ház mögött van.",
      phonetic: "aw kert aw haaz moe-goett vawn",
      english: "The garden is behind the house.",
      explanation: "Can also take personal possessive suffixes: mögöttem (behind me), mögötted (behind you)."
    }
  },
  {
    id: "utan",
    target: "után",
    phonetic: "u-taan",
    english: "after",
    pos: "Postposition",
    nounTrait: "Back",
    category: "Postpositions & Connectors",
    mnemonic: "'Munka után' = after work.",
    example: {
      target: "Munka után találkozunk.",
      phonetic: "mun-kaw u-taan taw-laal-ko-zunk",
      english: "We'll meet after work.",
      explanation: "Follows the noun directly: 'ebéd után' (after lunch), 'három óra után' (after 3 o'clock)."
    }
  },
  {
    id: "nelkul",
    target: "nélkül",
    phonetic: "nayl-kuel",
    english: "without",
    pos: "Postposition",
    nounTrait: "Front",
    category: "Postpositions & Connectors",
    mnemonic: "'Cukor nélkül' = without sugar.",
    example: {
      target: "Cukor nélkül iszom a kávét.",
      phonetic: "tsu-kor nayl-kuel i-som aw kaa-vayt",
      english: "I drink coffee without sugar.",
      explanation: "With pronouns, it takes personal endings: nélkülem (without me), nélküled (without you)."
    }
  },

  // --- 7. Time & Calendar ---
  {
    id: "ma",
    target: "ma",
    phonetic: "maw",
    english: "today",
    pos: "Adverb",
    nounTrait: "Back",
    category: "Time & Calendar",
    mnemonic: "Short and punchy: 'ma' = today.",
    example: {
      target: "Ma nagyon szép nap van.",
      phonetic: "maw naw-dyon sayp nawp vawn",
      english: "Today is a very nice day.",
      explanation: "Adjective form is 'mai' (today's)."
    }
  },
  {
    id: "holnap",
    target: "holnap",
    phonetic: "hol-nawp",
    english: "tomorrow",
    pos: "Adverb",
    nounTrait: "Back",
    category: "Time & Calendar",
    mnemonic: "Ends in 'nap' (day/sun) — 'holnap' = tomorrow.",
    example: {
      target: "Holnap találkozunk!",
      phonetic: "hol-nawp taw-laal-ko-zunk",
      english: "See you tomorrow! (We meet tomorrow)",
      explanation: "'Holnapután' = the day after tomorrow."
    }
  },
  {
    id: "tegnap",
    target: "tegnap",
    phonetic: "teg-nawp",
    english: "yesterday",
    pos: "Adverb",
    nounTrait: "Back",
    category: "Time & Calendar",
    mnemonic: "Pairs with 'holnap': 'tegnap' = yesterday.",
    example: {
      target: "Tegnap esett az eső.",
      phonetic: "teg-nawp eh-shett awz eh-shoe",
      english: "Yesterday it rained.",
      explanation: "'Tegnapelőtt' = the day before yesterday."
    }
  },
  {
    id: "most",
    target: "most",
    phonetic: "mosht",
    english: "now",
    pos: "Adverb",
    nounTrait: "Back",
    category: "Time & Calendar",
    mnemonic: "Remember Hungarian 's' = 'sh', so 'most' is pronounced 'mosht' = NOW.",
    example: {
      target: "Most indul a vonat!",
      phonetic: "mosht in-dul aw vo-nawt",
      english: "The train is departing right now!",
      explanation: "Lookalike warning: spelled like English 'most', pronounced 'mosht', means 'now'!"
    }
  },
  {
    id: "mindig",
    target: "mindig",
    phonetic: "min-dig",
    english: "always",
    pos: "Adverb",
    nounTrait: "Front",
    category: "Time & Calendar",
    mnemonic: "From 'mind' (all/every) → 'mindig' = always.",
    example: {
      target: "Ő mindig pontosan érkezik.",
      phonetic: "oe min-dig pon-to-shawn ayr-keh-zik",
      english: "He/she always arrives on time.",
      explanation: "Opposite is 'soha' (never)."
    }
  },

  // --- 8. Question Words & Pronouns ---
  {
    id: "mi_mit",
    target: "mi? / mit?",
    phonetic: "mi / mit",
    english: "what? (subject / object)",
    pos: "Pronoun",
    nounTrait: "Front",
    category: "Question Words & Pronouns",
    mnemonic: "'Mi ez?' = What is this? 'Mit csinálsz?' = What are you doing?",
    example: {
      target: "Mi ez? És mit keresel?",
      phonetic: "mi ez? aysh mit keh-reh-shel",
      english: "What is this? And what are you looking for?",
      explanation: "'Mi?' is the subject; 'Mit?' has the accusative -t for direct objects (and always triggers Indefinite verb conjugation!)."
    }
  },
  {
    id: "ki_kit",
    target: "ki? / kit?",
    phonetic: "ki / kit",
    english: "who? / whom?",
    pos: "Pronoun",
    nounTrait: "Front",
    category: "Question Words & Pronouns",
    mnemonic: "'Ki vagy?' = Who are you?",
    example: {
      target: "Ki ez a lány?",
      phonetic: "ki ez aw laany",
      english: "Who is this girl?",
      explanation: "Just like 'mi?', 'ki?' takes Indefinite verb conjugation."
    }
  },
  {
    id: "hol_hova",
    target: "hol? / hová?",
    phonetic: "hol / ho-vaa",
    english: "where? (at vs. to)",
    pos: "Pronoun",
    nounTrait: "Back",
    category: "Question Words & Pronouns",
    mnemonic: "'Hol van?' (Where is it?) vs. 'Hová mész?' (Where are you going to?).",
    example: {
      target: "Hol vagy most, és hová mész?",
      phonetic: "hol vawdy mosht, aysh ho-vaa mays",
      english: "Where are you now, and where are you going?",
      explanation: "Hungarian distinguishes location ('hol?'), destination ('hová?'), and origin ('honnan?' = from where?)."
    }
  },

  // --- 10. Swearing & Slang (Káromkodás és szleng) ---
  {
    id: "a_fenebe",
    target: "a fenébe!",
    phonetic: "aw feh-nay-beh",
    english: "damn it! / drat!",
    pos: "Expression",
    nounTrait: "Front",
    category: "Swearing & Slang",
    mnemonic: "[Mild] Literally 'into the abyss/bottom!' Safe everyday exclamation when you drop your keys or miss a train.",
    inflection: null,
    example: {
      target: "A fenébe, itthon hagytam a kulcsomat!",
      phonetic: "aw feh-nay-beh, it-hon hawdy-tawm aw kul-cho-mawt",
      english: "Damn it, I left my keys at home!",
      explanation: "Uses the illative case '-be' (into) on 'fene' (front-vowel noun)."
    }
  },
  {
    id: "hulye",
    target: "hülye",
    phonetic: "hue-yeh",
    english: "stupid / idiot / dumb",
    pos: "Adjective",
    nounTrait: "Front",
    category: "Swearing & Slang",
    pluralDirect: "hülyék (-ék)",
    pluralOblique: "hülyét (acc.) • hülyének (to)",
    mnemonic: "[Mild] Everyday word for 'stupid' or 'idiot'. Common among friends and siblings.",
    inflection: {
      direct_sg: "hülye",
      direct_pl: "hülyék",
      oblique_sg: "hülyét (acc.)",
      oblique_pl: "hülyéknek (to/for)"
    },
    example: {
      target: "Ne légy már ilyen hülye!",
      phonetic: "neh laydy maar i-yen hue-yeh",
      english: "Don't be so stupid!",
      explanation: "Front-vowel word; final -e lengthens to -é before suffixes (hülyék, hülyét)."
    }
  },
  {
    id: "barom",
    target: "barom",
    phonetic: "baw-rom",
    english: "moron / brute / idiot",
    pos: "Noun",
    nounTrait: "Back",
    category: "Swearing & Slang",
    pluralDirect: "barmok (-ok)",
    pluralOblique: "barmot (acc.) • baromnak (to)",
    mnemonic: "[Mild–Moderate] Literally 'cattle / ox'. Used like 'moron' or 'jackass' when someone does something clumsy or inconsiderate.",
    inflection: {
      direct_sg: "barom",
      direct_pl: "barmok",
      oblique_sg: "barmot (acc.)",
      oblique_pl: "barmoknak (to/for)"
    },
    example: {
      target: "Micsoda barom vagy!",
      phonetic: "mi-cho-daw baw-rom vawdy",
      english: "What a moron you are!",
      explanation: "Drops the internal 'o' when adding vowel-initial suffixes: barom → barmok, barmot."
    }
  },
  {
    id: "marha",
    target: "marha",
    phonetic: "mawr-haw",
    english: "idiot / fool (or 'bloody/super' as slang)",
    pos: "Noun",
    nounTrait: "Back",
    category: "Swearing & Slang",
    pluralDirect: "marhák (-ák)",
    pluralOblique: "marhát (acc.) • marhának (to)",
    mnemonic: "[Mild–Moderate] Literally 'beef/cattle'. As a noun it means 'idiot', but as an adverb ('marha jó!') it means 'bloody awesome!'",
    inflection: {
      direct_sg: "marha",
      direct_pl: "marhák",
      oblique_sg: "marhát (acc.)",
      oblique_pl: "marháknak (to/for)"
    },
    example: {
      target: "Ez a film marha jó volt!",
      phonetic: "ez aw film mawr-haw yoh volt",
      english: "This movie was bloody awesome!",
      explanation: "Final -a lengthens to -á before suffixes (marhák, marhát). Used as an intensifier before adjectives."
    }
  },
  {
    id: "pofatlan",
    target: "pofátlan",
    phonetic: "po-faat-lawn",
    english: "shameless / brazen / cheeky jerk",
    pos: "Adjective",
    nounTrait: "Back",
    category: "Swearing & Slang",
    pluralDirect: "pofátlanok (-ok)",
    pluralOblique: "pofátlant (acc.) • pofátlannak (to)",
    mnemonic: "[Mild–Moderate] From 'pofa' (mug/snout) + '-tlan' (without). Describes someone with zero shame or nerve.",
    inflection: {
      direct_sg: "pofátlan",
      direct_pl: "pofátlanok",
      oblique_sg: "pofátlant (acc.)",
      oblique_pl: "pofátlanoknak (to/for)"
    },
    example: {
      target: "Milyen pofátlan ember!",
      phonetic: "mi-yen po-faat-lawn em-ber",
      english: "What a shameless person!",
      explanation: "Back-vowel adjective with the privative suffix '-tlan' (-less)."
    }
  },
  {
    id: "basszus",
    target: "basszus!",
    phonetic: "baws-sush",
    english: "damn it! / shoot! (minced oath)",
    pos: "Expression",
    nounTrait: "Back",
    category: "Swearing & Slang",
    mnemonic: "[Moderate] Literally 'bass' (music), used as a polite-ish stand-in for 'baszd meg!' — like 'shoot!' or 'dang!'",
    inflection: null,
    example: {
      target: "Basszus, lekéstem a buszt!",
      phonetic: "baws-sush, leh-kaysh-tem aw bust",
      english: "Damn it, I missed the bus!",
      explanation: "Safe around most adults, though clearly a minced swear."
    }
  },
  {
    id: "szar",
    target: "szar",
    phonetic: "sawr",
    english: "shit / crap / terrible",
    pos: "Noun",
    nounTrait: "Back",
    category: "Swearing & Slang",
    pluralDirect: "szarok (-ok)",
    pluralOblique: "szart (acc.) • szarban (-ban)",
    mnemonic: "[Moderate] Exact equivalent of 'shit' (both noun and adjective). Very common in casual Hungarian.",
    inflection: {
      direct_sg: "szar",
      direct_pl: "szarok",
      oblique_sg: "szart (acc.)",
      oblique_pl: "szarban (in)"
    },
    example: {
      target: "Ez a nap teljesen szar.",
      phonetic: "ez aw nawp tel-yeh-shen sawr",
      english: "This day is total shit.",
      explanation: "Back-vowel word: 'szarban vagyok' = 'I'm in deep shit'."
    }
  },
  {
    id: "szarok_ra",
    target: "szarok rá",
    phonetic: "saw-rok raa",
    english: "I don't give a shit",
    pos: "Expression",
    nounTrait: "Back",
    category: "Swearing & Slang",
    mnemonic: "[Moderate] Literally 'I shit onto it' ('szarik' + 'rá'). The classic Hungarian way to say 'I couldn't care less'.",
    inflection: null,
    example: {
      target: "Szarok rá, mit gondolnak mások.",
      phonetic: "saw-rok raa, mit gon-dol-nawk maa-shok",
      english: "I don't give a shit what others think.",
      explanation: "1st-person singular indefinite of 'szarik' (to shit) + sublative pronoun 'rá' (onto it)."
    }
  },
  {
    id: "seggfej",
    target: "seggfej",
    phonetic: "shegg-fey",
    english: "asshole / shithead (lit. ass-head)",
    pos: "Noun",
    nounTrait: "Front",
    category: "Swearing & Slang",
    pluralDirect: "seggfejek (-ek)",
    pluralOblique: "seggfejet (acc.) • seggfejnek (to)",
    mnemonic: "[Moderate] Compound of 'segg' (ass) + 'fej' (head). Direct equivalent of 'asshole' or 'butthead'.",
    inflection: {
      direct_sg: "seggfej",
      direct_pl: "seggfejek",
      oblique_sg: "seggfejet (acc.)",
      oblique_pl: "seggfejeknek (to/for)"
    },
    example: {
      target: "Az a seggfej megint elkésett.",
      phonetic: "awz aw shegg-fey meh-gint el-kay-shett",
      english: "That asshole is late again.",
      explanation: "Front-vowel compound noun: takes -ek for plural and -et for accusative."
    }
  },
  {
    id: "kurva",
    target: "kurva",
    phonetic: "kur-vaw",
    english: "whore / bitch (also 'fucking' intensifier)",
    pos: "Noun",
    nounTrait: "Back",
    category: "Swearing & Slang",
    pluralDirect: "kurvák (-ák)",
    pluralOblique: "kurvát (acc.) • kurvának (to)",
    mnemonic: "[Strong] Literally 'whore', but most often used as an adverbial intensifier meaning 'fucking / super' (e.g. 'kurva jó', 'kurva hideg').",
    inflection: {
      direct_sg: "kurva",
      direct_pl: "kurvák",
      oblique_sg: "kurvát (acc.)",
      oblique_pl: "kurváknak (to/for)"
    },
    example: {
      target: "Kurva hideg van ma!",
      phonetic: "kur-vaw hi-deg vawn maw",
      english: "It's fucking cold today!",
      explanation: "Final -a lengthens to -á before suffixes (kurvák, kurvát). Extremely common in casual speech."
    }
  },
  {
    id: "kurva_eletbe",
    target: "a kurva életbe!",
    phonetic: "aw kur-vaw ay-let-beh",
    english: "goddammit! / fuck my life!",
    pos: "Expression",
    nounTrait: "Back",
    category: "Swearing & Slang",
    mnemonic: "[Strong] Literally 'into the whore life!' One of the most iconic Hungarian outbursts when something breaks or goes wrong.",
    inflection: null,
    example: {
      target: "A kurva életbe, megint elromlott!",
      phonetic: "aw kur-vaw ay-let-beh, meh-gint el-rom-lott",
      english: "Goddammit, it broke again!",
      explanation: "'élet' (life) + '-be' (into) = 'életbe'."
    }
  },
  {
    id: "baszd_meg",
    target: "baszd meg!",
    phonetic: "bawzd meg",
    english: "fuck it! / fuck you!",
    pos: "Expression",
    nounTrait: "Back",
    category: "Swearing & Slang",
    mnemonic: "[Strong] Imperative of 'baszik' (to fuck) + 'meg'. Used like 'fuck!' when you stub your toe, or 'fuck you!' when angry.",
    inflection: null,
    example: {
      target: "Baszd meg, ezt elrontottam!",
      phonetic: "bawzd meg, ezt el-ron-tot-tawm",
      english: "Fuck, I messed this up!",
      explanation: "Uses the 2nd-person definite imperative '-d' ('baszd') + verbal prefix 'meg'."
    }
  },
  {
    id: "lofaszt",
    target: "lófaszt!",
    phonetic: "loh-fawst",
    english: "bullshit! / no way in hell!",
    pos: "Expression",
    nounTrait: "Back",
    category: "Swearing & Slang",
    mnemonic: "[Strong] Literally 'horse dick!' (in the accusative '-t'). Classic blunt Hungarian way to say 'hell no!' or 'bullshit!'",
    inflection: null,
    example: {
      target: "Lófaszt, én ezt nem hiszem el!",
      phonetic: "loh-fawst, ayn ezt nem hi-sem el",
      english: "Bullshit, I don't believe this!",
      explanation: "'ló' (horse) + 'fasz' (dick) + accusative '-t'."
    }
  },
  {
    id: "picsaba",
    target: "a picsába!",
    phonetic: "aw pi-chaa-baw",
    english: "fuck! / damn it!",
    pos: "Expression",
    nounTrait: "Back",
    category: "Swearing & Slang",
    mnemonic: "[Strong] Literally 'into the cunt!' ('picsa' + '-ba'). Used just like 'fuck!' or 'oh shit!' when something goes wrong.",
    inflection: null,
    example: {
      target: "A picsába, elfelejtettem!",
      phonetic: "aw pi-chaa-baw, el-feh-ley-tet-tem",
      english: "Fuck, I forgot!",
      explanation: "Final -a in 'picsa' lengthens to -á before '-ba': picsába."
    }
  },
  {
    id: "menj_a_picsaba",
    target: "menj a picsába!",
    phonetic: "meny aw pi-chaa-baw",
    english: "fuck off! / go to hell!",
    pos: "Expression",
    nounTrait: "Back",
    category: "Swearing & Slang",
    mnemonic: "[Strong] Combines imperative 'menj!' (go!) + 'a picsába' (into the cunt). The definitive Hungarian 'fuck off!'",
    inflection: null,
    example: {
      target: "Hagyj békén, menj a picsába!",
      phonetic: "hawdy bay-kayn, meny aw pi-chaa-baw",
      english: "Leave me alone, fuck off!",
      explanation: "'menj' is the 2nd-person imperative of 'megy' (to go)."
    }
  },
  {
    id: "geci",
    target: "geci",
    phonetic: "geh-tsi",
    english: "asshole / cum / fucking (intensifier)",
    pos: "Noun",
    nounTrait: "Front",
    category: "Swearing & Slang",
    pluralDirect: "gecik (-k)",
    pluralOblique: "gecit (acc.) • gecinek (to)",
    mnemonic: "[Strong] Literally 'cum/jizz', used everywhere in modern slang for 'asshole/bastard' OR as an intensifier ('geci jó!' = 'fucking awesome!').",
    inflection: {
      direct_sg: "geci",
      direct_pl: "gecik",
      oblique_sg: "gecit (acc.)",
      oblique_pl: "geciknek (to/for)"
    },
    example: {
      target: "Ez a geci már megint hazudik.",
      phonetic: "ez aw geh-tsi maar meh-gint haw-zu-dik",
      english: "This asshole is lying again.",
      explanation: "Front-vowel noun; in slang, also placed before adjectives like 'geci nagy' (fucking huge)."
    }
  },
  {
    id: "fasz",
    target: "fasz",
    phonetic: "faws",
    english: "dick / cock / prick",
    pos: "Noun",
    nounTrait: "Back",
    category: "Swearing & Slang",
    pluralDirect: "faszok (-ok)",
    pluralOblique: "faszt (acc.) • faszba (-ba)",
    mnemonic: "[Strong] Literally 'dick/cock'. Used both anatomically and to call someone a prick.",
    inflection: {
      direct_sg: "fasz",
      direct_pl: "faszok",
      oblique_sg: "faszt (acc.)",
      oblique_pl: "fasznak (to/for)"
    },
    example: {
      target: "Ne légy már ekkora fasz!",
      phonetic: "neh laydy maar ek-ko-raw faws",
      english: "Stop being such a huge dick!",
      explanation: "Back-vowel noun; 'mi a fasz?' = 'what the fuck?'"
    }
  },
  {
    id: "faszom",
    target: "a faszom!",
    phonetic: "aw faw-som",
    english: "fuck! / goddammit! (lit. my dick!)",
    pos: "Expression",
    nounTrait: "Back",
    category: "Swearing & Slang",
    mnemonic: "[Strong] Possessive form of 'fasz' ('my dick!'). Classic frustrated outburst when things go sideways.",
    inflection: null,
    example: {
      target: "A faszom, már megint esik az eső!",
      phonetic: "aw faw-som, maar meh-gint eh-shik awz eh-shoe",
      english: "Fuck, it's raining again!",
      explanation: "Back-vowel possessive suffix '-om' (my): fasz + -om = faszom."
    }
  }
];

if (typeof window !== 'undefined') {
  window.VOCAB_CURRICULUM = VOCAB_CURRICULUM;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VOCAB_CURRICULUM };
}
