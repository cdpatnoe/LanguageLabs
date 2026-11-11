// Core Curated Hungarian Vocabulary Curriculum (Magyar Szókincs Stúdió)
// Annotated with Vowel Harmony class ('Back' = Mély hangrend, 'Front' = Magas hangrend)
// stored in the `gender` field for plug-and-play compatibility with the Language Lab Engine.
// Includes Nominative Plural (-k/-ok/-ek/-ök), Accusative (-t/-ot/-at/-et/-öt), and Inessive (-ban/-ben) forms.

const VOCAB_CURRICULUM = [
  // --- 1. People & Family ---
  {
    id: "ember",
    hindi: "ember",
    roman: "em-ber",
    english: "person / human / man",
    pos: "Noun",
    gender: "Front",
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
      hindi: "Sok ember van a téren.",
      roman: "shok em-ber vawn aw tay-ren",
      english: "There are many people in the square.",
      explanation: "After quantity words like 'sok' (many) or numbers, Hungarian nouns stay SINGULAR ('sok ember', not *sok emberek)!"
    }
  },
  {
    id: "barat",
    hindi: "barát",
    roman: "baw-raat",
    english: "friend",
    pos: "Noun",
    gender: "Back",
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
      hindi: "Ő a legjobb barátom.",
      roman: "oe aw leg-yobb baw-raa-tom",
      english: "He/she is my best friend.",
      explanation: "Back-vowel noun: takes -om for 'my friend' (barátom) and -ok for plural (barátok)."
    }
  },
  {
    id: "csalad",
    hindi: "család",
    roman: "chaw-laad",
    english: "family",
    pos: "Noun",
    gender: "Back",
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
      hindi: "A családom Budapesten él.",
      roman: "aw chaw-laa-dom bu-daw-pesh-ten ayl",
      english: "My family lives in Budapest.",
      explanation: "Back vowel (a, á) → takes -om (my), -ok (plural), -ban (in)."
    }
  },
  {
    id: "gyerek",
    hindi: "gyerek",
    roman: "dyeh-rek",
    english: "child / kid",
    pos: "Noun",
    gender: "Front",
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
      hindi: "A gyerekek a parkban játszanak.",
      roman: "aw dyeh-reh-kek aw pawrk-bawn yaat-saw-nawk",
      english: "The children are playing in the park.",
      explanation: "Front-vowel noun (e, e) → plural adds -ek (gyerekek), accusative adds -et (gyereket)."
    }
  },
  {
    id: "anya",
    hindi: "anya",
    roman: "aw-nyaw",
    english: "mother / mom",
    pos: "Noun",
    gender: "Back",
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
      hindi: "Édesanyám nagyon jól főz.",
      roman: "ay-desh-aw-nyaam naw-dyon yohl foez",
      english: "My mother cooks very well.",
      explanation: "Final short 'a' lengthens to 'á' before suffixes: anya → anyát (acc.), anyák (pl.)."
    }
  },
  {
    id: "apa",
    hindi: "apa",
    roman: "aw-paw",
    english: "father / dad",
    pos: "Noun",
    gender: "Back",
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
      hindi: "Apám mérnök.",
      roman: "aw-paam mayr-noek",
      english: "My father is an engineer.",
      explanation: "Final 'a' lengthens to 'á' before suffixes: apa → apám (my dad), apát (acc.)."
    }
  },

  // --- 2. Home & Everyday ---
  {
    id: "haz",
    hindi: "ház",
    roman: "haaz",
    english: "house",
    pos: "Noun",
    gender: "Back",
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
      hindi: "Ez egy régi, szép ház.",
      roman: "ez edy ray-gi, sayp haaz",
      english: "This is an old, beautiful house.",
      explanation: "Lowering back-vowel stem: takes '-ak' in plural (házak) and '-at' in accusative (házat)."
    }
  },
  {
    id: "szoba",
    hindi: "szoba",
    roman: "so-baw",
    english: "room",
    pos: "Noun",
    gender: "Back",
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
      hindi: "A szobában van egy nagy asztal.",
      roman: "aw so-baa-bawn vawn edy nawdy aws-tawl",
      english: "There is a big table in the room.",
      explanation: "Final 'a' lengthens to 'á' before suffixes: szoba + ban → szobában!"
    }
  },
  {
    id: "asztal",
    hindi: "asztal",
    roman: "aws-tawl",
    english: "table / desk",
    pos: "Noun",
    gender: "Back",
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
      hindi: "A könyv az asztalon van.",
      roman: "aw koenyv awz aws-taw-lon vawn",
      english: "The book is on the table.",
      explanation: "Ends in -l, so accusative -t attaches directly without a linking vowel: 'asztalt'."
    }
  },
  {
    id: "szek",
    hindi: "szék",
    roman: "sayk",
    english: "chair",
    pos: "Noun",
    gender: "Front",
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
      hindi: "Szabad ez a szék?",
      roman: "saw-bawd ez aw sayk",
      english: "Is this chair free / taken?",
      explanation: "Front vowel 'é' → plural 'székek', accusative 'széket'."
    }
  },
  {
    id: "konyv",
    hindi: "könyv",
    roman: "koenyv",
    english: "book",
    pos: "Noun",
    gender: "Front",
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
      hindi: "Ez egy nagyon érdekes könyv.",
      roman: "ez edy naw-dyon ayr-deh-kesh koenyv",
      english: "This is a very interesting book.",
      explanation: "Front noun → takes -ek in plural (könyvek), -et in accusative (könyvet), -ben in inessive (könyvben)."
    }
  },
  {
    id: "kulcs",
    hindi: "kulcs",
    roman: "kulch",
    english: "key",
    pos: "Noun",
    gender: "Back",
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
      hindi: "Hol van a kulcsom?",
      roman: "hol vawn aw kul-chom",
      english: "Where is my key?",
      explanation: "Back vowel 'u' → takes -ok (kulcsok), -ot (kulcsot), -om (kulcsom)."
    }
  },
  {
    id: "ajto",
    hindi: "ajtó",
    roman: "awy-toh",
    english: "door",
    pos: "Noun",
    gender: "Back",
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
      hindi: "Csukd be az ajtót, kérlek!",
      roman: "chukd beh awz awy-toht, kayr-lek",
      english: "Close the door, please!",
      explanation: "Ends in long vowel 'ó', so plural -k (ajtók) and accusative -t (ajtót) attach directly!"
    }
  },
  {
    id: "ablak",
    hindi: "ablak",
    roman: "awb-lawk",
    english: "window",
    pos: "Noun",
    gender: "Back",
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
      hindi: "Az ablaknál szeretnék ülni.",
      roman: "awz awb-lawk-naal seh-ret-nayk uel-ni",
      english: "I would like to sit by the window.",
      explanation: "Back-vowel noun: ablakok (pl.), ablakot (acc.), ablaknál (at/by the window)."
    }
  },

  // --- 3. Food & Drinks ---
  {
    id: "viz",
    hindi: "víz",
    roman: "veez",
    english: "water",
    pos: "Noun",
    gender: "Front",
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
      hindi: "Egy üveg szénsavmentes vizet kérek.",
      roman: "edy ue-veg sayn-shawv-men-tesh vi-zet kay-rek",
      english: "I'd like a bottle of still water, please.",
      explanation: "Vowel-shortening stem! Long 'í' shortens to 'i' in accusative (vizet) and plural (vizek), but stays long in 'vízben'."
    }
  },
  {
    id: "kenyer",
    hindi: "kenyér",
    roman: "keh-nyayr",
    english: "bread",
    pos: "Noun",
    gender: "Front",
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
      hindi: "Friss kenyeret vettem a pékségben.",
      roman: "frishsh keh-nyeh-ret vet-tem aw payk-shayg-ben",
      english: "I bought fresh bread at the bakery.",
      explanation: "Vowel-shortening front noun: kenyér → kenyeret (acc.), kenyerek (pl.)."
    }
  },
  {
    id: "kave",
    hindi: "kávé",
    roman: "kaa-vay",
    english: "coffee",
    pos: "Noun",
    gender: "Back",
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
      hindi: "Tejjel vagy cukorral iszod a kávét?",
      roman: "tey-yel vawdy tsu-kor-rawl i-sod aw kaa-vayt",
      english: "Do you drink your coffee with milk or sugar?",
      explanation: "Mixed vowel word ('á' + 'é'): because 'é' is neutral, the back vowel 'á' governs harmony → back-vowel suffixes (kávémat, kávéval)!"
    }
  },
  {
    id: "bor",
    hindi: "bor",
    roman: "bor",
    english: "wine",
    pos: "Noun",
    gender: "Back",
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
      hindi: "A magyar bor világhírű.",
      roman: "aw maw-dyawr bor vi-laag-hee-rue",
      english: "Hungarian wine is world-famous.",
      explanation: "Ends in -r, so accusative -t attaches directly without linking vowel: 'bort'."
    }
  },
  {
    id: "sor",
    hindi: "sör",
    roman: "shoer",
    english: "beer",
    pos: "Noun",
    gender: "Front",
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
      hindi: "Két korsó sört kérünk!",
      roman: "kayt kor-shoh shoert kay-ruenk",
      english: "Two mugs of beer, please!",
      explanation: "Rounded front vowel 'ö' → plural uses rounded linking vowel '-ök' (sörök)."
    }
  },
  {
    id: "alma",
    hindi: "alma",
    roman: "awl-maw",
    english: "apple",
    pos: "Noun",
    gender: "Back",
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
      hindi: "Piros almát vettem a piacon.",
      roman: "pi-rosh awl-maat vet-tem aw pi-aw-tson",
      english: "I bought a red apple at the market.",
      explanation: "Final 'a' lengthens to 'á' before suffixes: alma → almát (acc.), almák (pl.)."
    }
  },
  {
    id: "leves",
    hindi: "leves",
    roman: "leh-vesh",
    english: "soup",
    pos: "Noun",
    gender: "Front",
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
      hindi: "A gulyásleves nagyon finom.",
      roman: "aw gu-yaash-leh-vesh naw-dyon fi-nom",
      english: "The goulash soup is very delicious.",
      explanation: "Ends in sibilant -s, so accusative -t attaches directly: 'levest'."
    }
  },

  // --- 4. Places & Nature ---
  {
    id: "varos",
    hindi: "város",
    roman: "vaa-rosh",
    english: "city / town",
    pos: "Noun",
    gender: "Back",
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
      hindi: "Budapest egy gyönyörű város.",
      roman: "bu-daw-pesht edy dyoe-nyoe-rue vaa-rosh",
      english: "Budapest is a gorgeous city.",
      explanation: "Back-vowel noun: városban (in the city), városba (into the city)."
    }
  },
  {
    id: "utca",
    hindi: "utca",
    roman: "ut-tsaw",
    english: "street",
    pos: "Noun",
    gender: "Back",
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
      hindi: "Melyik utcában laksz?",
      roman: "meh-yik ut-tsaa-bawn lawks",
      english: "Which street do you live on?",
      explanation: "Final 'a' lengthens to 'á': utca → utcában, utcán, utcát."
    }
  },
  {
    id: "bolt",
    hindi: "bolt",
    roman: "bolt",
    english: "shop / store",
    pos: "Noun",
    gender: "Back",
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
      hindi: "Elmegyek a boltba tejért.",
      roman: "el-meh-dyek aw bolt-baw te-yayrt",
      english: "I'm going to the shop for milk.",
      explanation: "Notice the 3-way spatial distinction: boltban (in the shop), boltba (into the shop), boltból (out of the shop)!"
    }
  },
  {
    id: "etterem",
    hindi: "étterem",
    roman: "ayt-teh-rem",
    english: "restaurant",
    pos: "Noun",
    gender: "Front",
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
      hindi: "Ma este egy jó étteremben vacsorázunk.",
      roman: "maw esh-teh edy yoh ayt-teh-rem-ben vaw-cho-raa-zunk",
      english: "Tonight we are having dinner in a good restaurant.",
      explanation: "Fleeting-vowel stem: drops the last 'e' before vowel-initial endings (éttermek, éttermet), keeps it before consonant endings (étteremben)."
    }
  },
  {
    id: "vonat",
    hindi: "vonat",
    roman: "vo-nawt",
    english: "train",
    pos: "Noun",
    gender: "Back",
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
      hindi: "A vonaton olvasok.",
      roman: "aw vo-naw-ton ol-vaw-shok",
      english: "I am reading on the train.",
      explanation: "Public transport vehicles in Hungarian use the superessive surface case (-on/-en/-ön = 'on the train/bus')."
    }
  },
  {
    id: "kutya",
    hindi: "kutya",
    roman: "ku-tyaw",
    english: "dog",
    pos: "Noun",
    gender: "Back",
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
      hindi: "A kutyám nagyon barátságos.",
      roman: "aw ku-tyaam naw-dyon baw-raat-shaa-gosh",
      english: "My dog is very friendly.",
      explanation: "Practicing the palatal 'ty' digraph + final 'a → á' lengthening (kutya → kutyám, kutyát)."
    }
  },
  {
    id: "macska",
    hindi: "macska",
    roman: "mawch-kaw",
    english: "cat",
    pos: "Noun",
    gender: "Back",
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
      hindi: "A fekete macska az ablakban ül.",
      roman: "aw feh-keh-teh mawch-kaw awz awb-lawk-bawn uel",
      english: "The black cat is sitting in the window.",
      explanation: "Final 'a' lengthens to 'á' before suffixes: macska → macskák, macskát."
    }
  },

  // --- 5. Descriptive Adjectives ---
  {
    id: "jo",
    hindi: "jó",
    roman: "yoh",
    english: "good",
    pos: "Adjective",
    gender: "Back",
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
      hindi: "Jó reggelt kívánok!",
      roman: "yoh reg-gelt kee-vaa-nok",
      english: "Good morning! (I wish a good morning)",
      explanation: "Adjectives BEFORE a noun never change for plural or case ('jó könyvek', 'jó reggelt'); they only take plural -k when standing alone as predicates ('A könyvek jók')."
    }
  },
  {
    id: "szep",
    hindi: "szép",
    roman: "sayp",
    english: "beautiful / nice",
    pos: "Adjective",
    gender: "Front",
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
      hindi: "Ma nagyon szép az idő.",
      roman: "maw naw-dyon sayp awz ee-doe",
      english: "The weather is very nice today.",
      explanation: "'Köszönöm szépen' literally means 'I thank [it] nicely'!"
    }
  },
  {
    id: "nagy",
    hindi: "nagy",
    roman: "nawdy",
    english: "big / large / great",
    pos: "Adjective",
    gender: "Back",
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
      hindi: "Budapest egy nagy város.",
      roman: "bu-daw-pesht edy nawdy vaa-rosh",
      english: "Budapest is a big city.",
      explanation: "Adding '-on' gives 'nagyon' = 'very'!"
    }
  },
  {
    id: "kicsi",
    hindi: "kicsi (kis)",
    roman: "ki-chi (kish)",
    english: "small / little",
    pos: "Adjective",
    gender: "Front",
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
      hindi: "Ez a kávézó kicsi, de hangulatos.",
      roman: "ez aw kaa-vay-zoh ki-chi, deh hawn-gu-law-tosh",
      english: "This café is small, but cozy.",
      explanation: "Before a noun you usually use the short form 'kis' ('egy kis kávé'), while after the noun or alone you use 'kicsi' ('A lakás kicsi')."
    }
  },
  {
    id: "finom",
    hindi: "finom",
    roman: "fi-nom",
    english: "delicious / fine",
    pos: "Adjective",
    gender: "Back",
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
      hindi: "Ez a rétes nagyon finom!",
      roman: "ez aw ray-tesh naw-dyon fi-nom",
      english: "This strudel is very delicious!",
      explanation: "Mixed vowels 'i' + 'o' → back vowel 'o' dominates, so plural predicate is 'finomak'."
    }
  },
  {
    id: "draga",
    hindi: "drága",
    roman: "draa-gaw",
    english: "expensive / dear",
    pos: "Adjective",
    gender: "Back",
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
      hindi: "Ez a szálloda túl drága.",
      roman: "ez aw saal-lo-daw tool draa-gaw",
      english: "This hotel is too expensive.",
      explanation: "Also used affectionately like 'dear' ('Drága barátom!' = My dear friend!)."
    }
  },
  {
    id: "olcso",
    hindi: "olcsó",
    roman: "ol-choh",
    english: "cheap / inexpensive",
    pos: "Adjective",
    gender: "Back",
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
      hindi: "A piacon olcsó a gyümölcs.",
      roman: "aw pi-aw-tson ol-choh aw dyue-moelch",
      english: "Fruit is cheap at the market.",
      explanation: "Back-vowel adjective ending in long -ó."
    }
  },
  {
    id: "meleg",
    hindi: "meleg",
    roman: "meh-leg",
    english: "warm / hot",
    pos: "Adjective",
    gender: "Front",
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
      hindi: "Ma nagyon meleg van.",
      roman: "maw naw-dyon meh-leg vawn",
      english: "It is very warm today.",
      explanation: "Note: To say 'I feel hot', say 'Melegem van' (literally 'My-warmth there-is')."
    }
  },
  {
    id: "hideg",
    hindi: "hideg",
    roman: "hi-deg",
    english: "cold",
    pos: "Adjective",
    gender: "Front",
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
      hindi: "Télen hideg van Magyarországon.",
      roman: "tay-len hi-deg vawn maw-dyawr-or-saa-gon",
      english: "In winter it is cold in Hungary.",
      explanation: "Front-vowel adjective: hidegek (plural), hidegebb (colder)."
    }
  },
  {
    id: "uj",
    hindi: "új",
    roman: "ooy",
    english: "new",
    pos: "Adjective",
    gender: "Back",
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
      hindi: "Boldog új évet!",
      roman: "bol-dog ooy ay-vet",
      english: "Happy New Year!",
      explanation: "Back-vowel adjective: takes lowering '-ak' in plural ('újak')."
    }
  },

  // --- 6. Postpositions & Connectors ---
  {
    id: "alatt",
    hindi: "alatt",
    roman: "aw-lawtt",
    english: "under / underneath / during",
    pos: "Postposition",
    gender: "Back",
    category: "Postpositions & Connectors",
    mnemonic: "A 'LOT' of things hidden UNDER the bed (alatt).",
    example: {
      hindi: "A macska az asztal alatt alszik.",
      roman: "aw mawch-kaw awz aws-tawl aw-lawtt awl-sik",
      english: "The cat is sleeping under the table.",
      explanation: "Hungarian postpositions follow the noun in its basic nominative form ('az asztal alatt' = the table under)."
    }
  },
  {
    id: "felett",
    hindi: "felett (fölött)",
    roman: "feh-lett",
    english: "above / over",
    pos: "Postposition",
    gender: "Front",
    category: "Postpositions & Connectors",
    mnemonic: "Opposite of 'alatt': 'felett' = above.",
    example: {
      hindi: "A kép az ágy felett lóg.",
      roman: "aw kayp awz aady feh-lett lohg",
      english: "The picture hangs above the bed.",
      explanation: "Follows the nominative noun without any case suffix on the noun."
    }
  },
  {
    id: "mellett",
    hindi: "mellett",
    roman: "mel-lett",
    english: "next to / beside",
    pos: "Postposition",
    gender: "Front",
    category: "Postpositions & Connectors",
    mnemonic: "'Mellett' = right beside you.",
    example: {
      hindi: "A bank a posta mellett van.",
      roman: "aw bawnk aw posh-taw mel-lett vawn",
      english: "The bank is next to the post office.",
      explanation: "Notice the Hungarian spatial trio: mellett (at/next to), mellé (moving to beside), mellől (away from beside)."
    }
  },
  {
    id: "elott",
    hindi: "előtt",
    roman: "eh-loett",
    english: "in front of / before (in time)",
    pos: "Postposition",
    gender: "Front",
    category: "Postpositions & Connectors",
    mnemonic: "From 'el-' (fore/front) → 'előtt' = in front of / before.",
    example: {
      hindi: "A színház előtt találkozunk.",
      roman: "aw seen-haaz eh-loett taw-laal-ko-zunk",
      english: "We'll meet in front of the theater.",
      explanation: "Used for both space ('a ház előtt' = in front of the house) and time ('ebéd előtt' = before lunch)."
    }
  },
  {
    id: "mogott",
    hindi: "mögött",
    roman: "moe-goett",
    english: "behind",
    pos: "Postposition",
    gender: "Front",
    category: "Postpositions & Connectors",
    mnemonic: "Opposite of 'előtt': 'mögött' = behind.",
    example: {
      hindi: "A kert a ház mögött van.",
      roman: "aw kert aw haaz moe-goett vawn",
      english: "The garden is behind the house.",
      explanation: "Can also take personal possessive suffixes: mögöttem (behind me), mögötted (behind you)."
    }
  },
  {
    id: "utan",
    hindi: "után",
    roman: "u-taan",
    english: "after",
    pos: "Postposition",
    gender: "Back",
    category: "Postpositions & Connectors",
    mnemonic: "'Munka után' = after work.",
    example: {
      hindi: "Munka után találkozunk.",
      roman: "mun-kaw u-taan taw-laal-ko-zunk",
      english: "We'll meet after work.",
      explanation: "Follows the noun directly: 'ebéd után' (after lunch), 'három óra után' (after 3 o'clock)."
    }
  },
  {
    id: "nelkul",
    hindi: "nélkül",
    roman: "nayl-kuel",
    english: "without",
    pos: "Postposition",
    gender: "Front",
    category: "Postpositions & Connectors",
    mnemonic: "'Cukor nélkül' = without sugar.",
    example: {
      hindi: "Cukor nélkül iszom a kávét.",
      roman: "tsu-kor nayl-kuel i-som aw kaa-vayt",
      english: "I drink coffee without sugar.",
      explanation: "With pronouns, it takes personal endings: nélkülem (without me), nélküled (without you)."
    }
  },

  // --- 7. Time & Calendar ---
  {
    id: "ma",
    hindi: "ma",
    roman: "maw",
    english: "today",
    pos: "Adverb",
    gender: "Back",
    category: "Time & Calendar",
    mnemonic: "Short and punchy: 'ma' = today.",
    example: {
      hindi: "Ma nagyon szép nap van.",
      roman: "maw naw-dyon sayp nawp vawn",
      english: "Today is a very nice day.",
      explanation: "Adjective form is 'mai' (today's)."
    }
  },
  {
    id: "holnap",
    hindi: "holnap",
    roman: "hol-nawp",
    english: "tomorrow",
    pos: "Adverb",
    gender: "Back",
    category: "Time & Calendar",
    mnemonic: "Ends in 'nap' (day/sun) — 'holnap' = tomorrow.",
    example: {
      hindi: "Holnap találkozunk!",
      roman: "hol-nawp taw-laal-ko-zunk",
      english: "See you tomorrow! (We meet tomorrow)",
      explanation: "'Holnapután' = the day after tomorrow."
    }
  },
  {
    id: "tegnap",
    hindi: "tegnap",
    roman: "teg-nawp",
    english: "yesterday",
    pos: "Adverb",
    gender: "Back",
    category: "Time & Calendar",
    mnemonic: "Pairs with 'holnap': 'tegnap' = yesterday.",
    example: {
      hindi: "Tegnap esett az eső.",
      roman: "teg-nawp eh-shett awz eh-shoe",
      english: "Yesterday it rained.",
      explanation: "'Tegnapelőtt' = the day before yesterday."
    }
  },
  {
    id: "most",
    hindi: "most",
    roman: "mosht",
    english: "now",
    pos: "Adverb",
    gender: "Back",
    category: "Time & Calendar",
    mnemonic: "Remember Hungarian 's' = 'sh', so 'most' is pronounced 'mosht' = NOW.",
    example: {
      hindi: "Most indul a vonat!",
      roman: "mosht in-dul aw vo-nawt",
      english: "The train is departing right now!",
      explanation: "Lookalike warning: spelled like English 'most', pronounced 'mosht', means 'now'!"
    }
  },
  {
    id: "mindig",
    hindi: "mindig",
    roman: "min-dig",
    english: "always",
    pos: "Adverb",
    gender: "Front",
    category: "Time & Calendar",
    mnemonic: "From 'mind' (all/every) → 'mindig' = always.",
    example: {
      hindi: "Ő mindig pontosan érkezik.",
      roman: "oe min-dig pon-to-shawn ayr-keh-zik",
      english: "He/she always arrives on time.",
      explanation: "Opposite is 'soha' (never)."
    }
  },

  // --- 8. Question Words & Pronouns ---
  {
    id: "mi_mit",
    hindi: "mi? / mit?",
    roman: "mi / mit",
    english: "what? (subject / object)",
    pos: "Pronoun",
    gender: "Front",
    category: "Question Words & Pronouns",
    mnemonic: "'Mi ez?' = What is this? 'Mit csinálsz?' = What are you doing?",
    example: {
      hindi: "Mi ez? És mit keresel?",
      roman: "mi ez? aysh mit keh-reh-shel",
      english: "What is this? And what are you looking for?",
      explanation: "'Mi?' is the subject; 'Mit?' has the accusative -t for direct objects (and always triggers Indefinite verb conjugation!)."
    }
  },
  {
    id: "ki_kit",
    hindi: "ki? / kit?",
    roman: "ki / kit",
    english: "who? / whom?",
    pos: "Pronoun",
    gender: "Front",
    category: "Question Words & Pronouns",
    mnemonic: "'Ki vagy?' = Who are you?",
    example: {
      hindi: "Ki ez a lány?",
      roman: "ki ez aw laany",
      english: "Who is this girl?",
      explanation: "Just like 'mi?', 'ki?' takes Indefinite verb conjugation."
    }
  },
  {
    id: "hol_hova",
    hindi: "hol? / hová?",
    roman: "hol / ho-vaa",
    english: "where? (at vs. to)",
    pos: "Pronoun",
    gender: "Back",
    category: "Question Words & Pronouns",
    mnemonic: "'Hol van?' (Where is it?) vs. 'Hová mész?' (Where are you going to?).",
    example: {
      hindi: "Hol vagy most, és hová mész?",
      roman: "hol vawdy mosht, aysh ho-vaa mays",
      english: "Where are you now, and where are you going?",
      explanation: "Hungarian distinguishes location ('hol?'), destination ('hová?'), and origin ('honnan?' = from where?)."
    }
  }
];

if (typeof window !== 'undefined') {
  window.VOCAB_CURRICULUM = VOCAB_CURRICULUM;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VOCAB_CURRICULUM };
}
