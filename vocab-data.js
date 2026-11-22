// Core Curated Italian Vocabulary Curriculum (Laboratorio di Vocabolario)
// Annotated with Grammatical Gender ('Masculine' / 'Feminine') in `nounTrait`,
// definite articles (il/lo/l'/la → i/gli/le), plurals, mnemonics, and natural examples.

const VOCAB_CURRICULUM = [
  // --- 1. People & Family ---
  {
    id: "amico",
    target: "amico",
    phonetic: "ah-MEE-koh",
    english: "friend (male)",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "People & Family",
    pluralDirect: "amici (ah-MEE-chee)",
    pluralOblique: "l'amico (sg.) • gli amici (pl.)",
    mnemonic: "Think of 'AMICABLE' — friendly! Feminine: amica (pl. amiche).",
    inflection: { direct_sg: "l'amico", direct_pl: "gli amici", oblique_sg: "un amico", oblique_pl: "degli amici" },
    example: {
      target: "Marco è il mio migliore amico.",
      phonetic: "MAHR-koh eh eel MEE-oh mee-LYOH-reh ah-MEE-koh",
      english: "Marco is my best friend.",
      explanation: "Notice the sound shift in plural: hard 'c' in amico (ah-MEE-koh) → soft 'ci' in amici (ah-MEE-chee)!"
    }
  },
  {
    id: "famiglia",
    target: "famiglia",
    phonetic: "fah-MEE-lyah",
    english: "family",
    pos: "Noun",
    nounTrait: "Feminine",
    category: "People & Family",
    pluralDirect: "famiglie (fah-MEE-lyeh)",
    pluralOblique: "la famiglia • le famiglie",
    mnemonic: "Classic 'gli' sound: fah-MEE-lyah (never pronounce a hard 'g'!).",
    inflection: { direct_sg: "la famiglia", direct_pl: "le famiglie", oblique_sg: "una famiglia", oblique_pl: "delle famiglie" },
    example: {
      target: "La mia famiglia vive a Bologna.",
      phonetic: "lah MEE-ah fah-MEE-lyah VEE-veh ah boh-LOH-nyah",
      english: "My family lives in Bologna.",
      explanation: "Feminine -a noun → plural -e (famiglie)."
    }
  },
  {
    id: "ragazzo",
    target: "ragazzo",
    phonetic: "rah-GAHT-tsoh",
    english: "boy / guy / boyfriend",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "People & Family",
    pluralDirect: "ragazzi (rah-GAHT-tsee)",
    pluralOblique: "il ragazzo • i ragazzi",
    mnemonic: "'Ciao ragazzi!' = 'Hey guys!' Feminine: ragazza (girl / girlfriend).",
    inflection: { direct_sg: "il ragazzo", direct_pl: "i ragazzi", oblique_sg: "un ragazzo", oblique_pl: "dei ragazzi" },
    example: {
      target: "Ciao ragazzi, come state?",
      phonetic: "CHAH-oh rah-GAHT-tsee, KOH-meh STAH-teh",
      english: "Hey guys, how are you?",
      explanation: "Double 'zz' is pronounced sharply as 'ts' (rah-GAHT-tsoh)."
    }
  },
  {
    id: "madre",
    target: "madre",
    phonetic: "MAH-dreh",
    english: "mother",
    pos: "Noun",
    nounTrait: "Feminine",
    category: "People & Family",
    pluralDirect: "madri (MAH-dree)",
    pluralOblique: "la madre • le madri",
    mnemonic: "In everyday speech, Italians almost always say 'mamma' ('mia mamma').",
    inflection: { direct_sg: "la madre", direct_pl: "le madri", oblique_sg: "una madre", oblique_pl: "delle madri" },
    example: {
      target: "Mia madre cucina benissimo.",
      phonetic: "MEE-ah MAH-dreh koo-CHEE-nah beh-NEES-see-moh",
      english: "My mother cooks wonderfully.",
      explanation: "Singular family members drop the definite article with possessives: 'mia madre' (not *la mia madre)."
    }
  },
  {
    id: "padre",
    target: "padre",
    phonetic: "PAH-dreh",
    english: "father",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "People & Family",
    pluralDirect: "padri (PAH-dree)",
    pluralOblique: "il padre • i padri",
    mnemonic: "Everyday equivalent: 'papà' ('mio papà').",
    inflection: { direct_sg: "il padre", direct_pl: "i padri", oblique_sg: "un padre", oblique_pl: "dei padri" },
    example: {
      target: "Mio padre lavora a Torino.",
      phonetic: "MEE-oh PAH-dreh lah-VOH-rah ah toh-REE-noh",
      english: "My father works in Turin.",
      explanation: "-e nouns (both M and F) form their plural in -i (padri, madri)."
    }
  },
  {
    id: "bambino",
    target: "bambino",
    phonetic: "bahm-BEE-noh",
    english: "child / little boy",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "People & Family",
    pluralDirect: "bambini (bahm-BEE-nee)",
    pluralOblique: "il bambino • i bambini",
    mnemonic: "Think of 'BAMBINO' — a little child! Feminine: bambina.",
    inflection: { direct_sg: "il bambino", direct_pl: "i bambini", oblique_sg: "un bambino", oblique_pl: "dei bambini" },
    example: {
      target: "I bambini giocano nel parco.",
      phonetic: "ee bahm-BEE-nee JOH-kah-noh nehl PAHR-koh",
      english: "The children are playing in the park.",
      explanation: "Regular masculine -o → -i plural."
    }
  },

  // --- 2. Home & Everyday ---
  {
    id: "casa",
    target: "casa",
    phonetic: "KAH-zah",
    english: "house / home",
    pos: "Noun",
    nounTrait: "Feminine",
    category: "Home & Everyday",
    pluralDirect: "case (KAH-zeh)",
    pluralOblique: "la casa • le case",
    mnemonic: "'A casa' = at home; 'torno a casa' = I'm heading home.",
    inflection: { direct_sg: "la casa", direct_pl: "le case", oblique_sg: "una casa", oblique_pl: "delle case" },
    example: {
      target: "Stasera resto a casa.",
      phonetic: "stah-SEH-rah REHS-toh ah KAH-zah",
      english: "Tonight I'm staying at home.",
      explanation: "Intervocalic 's' in Northern/standard Italian is voiced like 'z' (KAH-zah)."
    }
  },
  {
    id: "libro",
    target: "libro",
    phonetic: "LEE-broh",
    english: "book",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "Home & Everyday",
    pluralDirect: "libri (LEE-bree)",
    pluralOblique: "il libro • i libri",
    mnemonic: "Think of 'LIBRARY' — a place full of 'libri'!",
    inflection: { direct_sg: "il libro", direct_pl: "i libri", oblique_sg: "un libro", oblique_pl: "dei libri" },
    example: {
      target: "Questo libro è molto interessante.",
      phonetic: "KWEHS-toh LEE-broh eh MOHL-toh een-teh-rehs-SAHN-teh",
      english: "This book is very interesting.",
      explanation: "Regular masculine -o → -i noun."
    }
  },
  {
    id: "chiave",
    target: "chiave",
    phonetic: "KYAH-veh",
    english: "key",
    pos: "Noun",
    nounTrait: "Feminine",
    category: "Home & Everyday",
    pluralDirect: "chiavi (KYAH-vee)",
    pluralOblique: "la chiave • le chiavi",
    mnemonic: "'ch' before 'i' is ALWAYS hard 'k' → KYAH-veh!",
    inflection: { direct_sg: "la chiave", direct_pl: "le chiavi", oblique_sg: "una chiave", oblique_pl: "delle chiavi" },
    example: {
      target: "Dove ho messo le chiavi?",
      phonetic: "DOH-veh oh MEHS-soh leh KYAH-vee",
      english: "Where did I put the keys?",
      explanation: "Feminine -e noun → plural -i (le chiavi)."
    }
  },
  {
    id: "tavolo",
    target: "tavolo",
    phonetic: "TAH-voh-loh",
    english: "table",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "Home & Everyday",
    pluralDirect: "tavoli (TAH-voh-lee)",
    pluralOblique: "il tavolo • i tavoli",
    mnemonic: "'Un tavolo per due' = a table for two!",
    inflection: { direct_sg: "il tavolo", direct_pl: "i tavoli", oblique_sg: "un tavolo", oblique_pl: "dei tavoli" },
    example: {
      target: "Vorremmo un tavolo per due, per favore.",
      phonetic: "vohr-REHM-moh oon TAH-voh-loh pehr DOO-eh, pehr fah-VOH-reh",
      english: "We would like a table for two, please.",
      explanation: "'il tavolo' is the piece of furniture; 'la tavola' is a dining table set for a meal ('A tavola!' = Dinner's ready!)."
    }
  },
  {
    id: "soldi",
    target: "soldi",
    phonetic: "SOHL-dee",
    english: "money (always plural)",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "Home & Everyday",
    pluralDirect: "soldi (always pl.)",
    pluralOblique: "i soldi • dei soldi",
    mnemonic: "Think of 'SOLDIER' (paid in 'soldi'!). Always plural in Italian.",
    inflection: { direct_sg: "—", direct_pl: "i soldi", oblique_sg: "—", oblique_pl: "dei soldi" },
    example: {
      target: "Non ho abbastanza soldi.",
      phonetic: "nohn oh ahb-bahs-TAHN-tsah SOHL-dee",
      english: "I don't have enough money.",
      explanation: "Takes plural agreement: 'i soldi sono importanti' (money is important)."
    }
  },
  {
    id: "macchina",
    target: "macchina",
    phonetic: "MAHK-kee-nah",
    english: "car / machine",
    pos: "Noun",
    nounTrait: "Feminine",
    category: "Home & Everyday",
    pluralDirect: "macchine (MAHK-kee-neh)",
    pluralOblique: "la macchina • le macchine",
    mnemonic: "Double 'cch' = held hard 'k' sound: MAHK-kee-nah!",
    inflection: { direct_sg: "la macchina", direct_pl: "le macchine", oblique_sg: "una macchina", oblique_pl: "delle macchine" },
    example: {
      target: "Vado al lavoro in macchina.",
      phonetic: "VAH-doh ahl lah-VOH-roh een MAHK-kee-nah",
      english: "I go to work by car.",
      explanation: "With transport, use 'in' without an article: in macchina, in treno, in aereo."
    }
  },

  // --- 3. Food & Drinks ---
  {
    id: "acqua",
    target: "acqua",
    phonetic: "AHK-kwah",
    english: "water",
    pos: "Noun",
    nounTrait: "Feminine",
    category: "Food & Drinks",
    pluralDirect: "acque (AHK-kweh)",
    pluralOblique: "l'acqua • le acque",
    mnemonic: "'Acqua naturale' (still) vs 'acqua frizzante' (sparkling)!",
    inflection: { direct_sg: "l'acqua", direct_pl: "le acque", oblique_sg: "un'acqua", oblique_pl: "delle acque" },
    example: {
      target: "Una bottiglia d'acqua frizzante, per favore.",
      phonetic: "OO-nah boht-TEE-lyah DAHK-kwah freet-TSAHN-teh, pehr fah-VOH-reh",
      english: "A bottle of sparkling water, please.",
      explanation: "Unique spelling 'cq' — pronounced like a double hard 'k' (AHK-kwah)."
    }
  },
  {
    id: "caffe",
    target: "caffè",
    phonetic: "kahf-FEH",
    english: "coffee (espresso)",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "Food & Drinks",
    pluralDirect: "caffè (invariable)",
    pluralOblique: "il caffè • i caffè",
    mnemonic: "Words ending in an accented vowel (caffè, città, università) NEVER change in the plural!",
    inflection: { direct_sg: "il caffè", direct_pl: "i caffè", oblique_sg: "un caffè", oblique_pl: "dei caffè" },
    example: {
      target: "Prendiamo due caffè al bar.",
      phonetic: "prehn-DYAH-moh DOO-eh kahf-FEH ahl bahr",
      english: "Let's get two espressos at the café.",
      explanation: "In Italy, ordering 'un caffè' always gets you a shot of espresso."
    }
  },
  {
    id: "pane",
    target: "pane",
    phonetic: "PAH-neh",
    english: "bread",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "Food & Drinks",
    pluralDirect: "pani (PAH-nee)",
    pluralOblique: "il pane • i pani",
    mnemonic: "Think of 'PANINI' (small breads / sandwiches)!",
    inflection: { direct_sg: "il pane", direct_pl: "i pani", oblique_sg: "del pane", oblique_pl: "dei pani" },
    example: {
      target: "Questo pane fresco è buonissimo.",
      phonetic: "KWEHS-toh PAH-neh FREHS-koh eh bwoh-NEES-see-moh",
      english: "This fresh bread is delicious.",
      explanation: "Masculine -e noun (il pane)."
    }
  },
  {
    id: "vino",
    target: "vino",
    phonetic: "VEE-noh",
    english: "wine",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "Food & Drinks",
    pluralDirect: "vini (VEE-nee)",
    pluralOblique: "il vino • i vini",
    mnemonic: "'Vino rosso' (red wine), 'vino bianco' (white wine).",
    inflection: { direct_sg: "il vino", direct_pl: "i vini", oblique_sg: "un vino", oblique_pl: "dei vini" },
    example: {
      target: "Preferisci il vino rosso o bianco?",
      phonetic: "preh-feh-REE-shee eel VEE-noh ROHS-soh oh BYAHN-koh",
      english: "Do you prefer red or white wine?",
      explanation: "Regular masculine -o → -i noun."
    }
  },
  {
    id: "cena",
    target: "cena",
    phonetic: "CHEH-nah",
    english: "dinner",
    pos: "Noun",
    nounTrait: "Feminine",
    category: "Food & Drinks",
    pluralDirect: "cene (CHEH-neh)",
    pluralOblique: "la cena • le cene",
    mnemonic: "'c' before 'e' is soft 'ch' → CHEH-nah! ('A cena' = for dinner).",
    inflection: { direct_sg: "la cena", direct_pl: "le cene", oblique_sg: "una cena", oblique_pl: "delle cene" },
    example: {
      target: "Cosa prepariamo per cena?",
      phonetic: "KOH-zah preh-pah-RYAH-moh pehr CHEH-nah",
      english: "What are we making for dinner?",
      explanation: "Colazione (breakfast), pranzo (lunch), cena (dinner)."
    }
  },
  {
    id: "formaggio",
    target: "formaggio",
    phonetic: "fohr-MAHJ-joh",
    english: "cheese",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "Food & Drinks",
    pluralDirect: "formaggi (fohr-MAHJ-jee)",
    pluralOblique: "il formaggio • i formaggi",
    mnemonic: "Double 'gg' before 'i' = held soft 'j' sound (fohr-MAHJ-joh).",
    inflection: { direct_sg: "il formaggio", direct_pl: "i formaggi", oblique_sg: "un formaggio", oblique_pl: "dei formaggi" },
    example: {
      target: "Vuoi del formaggio sulla pasta?",
      phonetic: "vwoh-ee dehl fohr-MAHJ-joh SOOL-lah PAHS-tah",
      english: "Do you want some cheese on your pasta?",
      explanation: "Nouns ending in unstressed -gio drop the 'o' in plural: formaggio → formaggi."
    }
  },

  // --- 4. Places & Nature ---
  {
    id: "citta",
    target: "città",
    phonetic: "cheet-TAH",
    english: "city",
    pos: "Noun",
    nounTrait: "Feminine",
    category: "Places & Nature",
    pluralDirect: "città (invariable)",
    pluralOblique: "la città • le città",
    mnemonic: "All nouns ending in -tà (città, libertà, università) are Feminine and invariable in the plural!",
    inflection: { direct_sg: "la città", direct_pl: "le città", oblique_sg: "una città", oblique_pl: "delle città" },
    example: {
      target: "Roma è una città meravigliosa.",
      phonetic: "ROH-mah eh OO-nah cheet-TAH meh-rah-vee-LYOH-zah",
      english: "Rome is a wonderful city.",
      explanation: "Stress falls on the accented final syllable (-tà)."
    }
  },
  {
    id: "mare",
    target: "mare",
    phonetic: "MAH-reh",
    english: "sea / beach",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "Places & Nature",
    pluralDirect: "mari (MAH-ree)",
    pluralOblique: "il mare • i mari",
    mnemonic: "Think of 'MARINE' — il mare = the sea.",
    inflection: { direct_sg: "il mare", direct_pl: "i mari", oblique_sg: "un mare", oblique_pl: "dei mari" },
    example: {
      target: "D'estate andiamo sempre al mare.",
      phonetic: "dehs-TAH-teh ahn-DYAH-moh SEHM-preh ahl MAH-reh",
      english: "In summer we always go to the beach.",
      explanation: "a + il contracts into 'al' ('al mare')."
    }
  },
  {
    id: "strada",
    target: "strada",
    phonetic: "STRAH-dah",
    english: "street / road",
    pos: "Noun",
    nounTrait: "Feminine",
    category: "Places & Nature",
    pluralDirect: "strade (STRAH-deh)",
    pluralOblique: "la strada • le strade",
    mnemonic: "Think of 'AUTOSTRADA' (highway) — strada = road/street.",
    inflection: { direct_sg: "la strada", direct_pl: "le strade", oblique_sg: "una strada", oblique_pl: "delle strade" },
    example: {
      target: "Questa strada porta alla stazione.",
      phonetic: "KWEHS-tah STRAH-dah POHR-tah AHL-lah stah-TSYOH-neh",
      english: "This street leads to the station.",
      explanation: "Regular feminine -a → -e noun."
    }
  },
  {
    id: "piazza",
    target: "piazza",
    phonetic: "PYAHT-tsah",
    english: "square / plaza",
    pos: "Noun",
    nounTrait: "Feminine",
    category: "Places & Nature",
    pluralDirect: "piazze (PYAHT-tseh)",
    pluralOblique: "la piazza • le piazze",
    mnemonic: "The heart of every Italian town — 'Ci vediamo in piazza!'",
    inflection: { direct_sg: "la piazza", direct_pl: "le piazze", oblique_sg: "una piazza", oblique_pl: "delle piazze" },
    example: {
      target: "Ci vediamo in piazza alle sei.",
      phonetic: "chee veh-DYAH-moh een PYAHT-tsah AHL-leh SAY",
      english: "Let's meet in the square at six.",
      explanation: "Sharp double 'zz' sound (PYAHT-tsah)."
    }
  },
  {
    id: "sole",
    target: "sole",
    phonetic: "SOH-leh",
    english: "sun",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "Places & Nature",
    pluralDirect: "soli (SOH-lee)",
    pluralOblique: "il sole • i soli",
    mnemonic: "Think of 'SOLAR' / 'O Sole Mio'!",
    inflection: { direct_sg: "il sole", direct_pl: "i soli", oblique_sg: "un sole", oblique_pl: "dei soli" },
    example: {
      target: "Oggi c'è un bel sole!",
      phonetic: "OHJ-jee cheh oon behl SOH-leh",
      english: "Today it's nice and sunny!",
      explanation: "'c'è' = there is (ci + è)."
    }
  },

  // --- 5. Descriptive Adjectives ---
  {
    id: "bello",
    target: "bello",
    phonetic: "BEHL-loh",
    english: "beautiful / nice / handsome",
    pos: "Adjective",
    nounTrait: "Masculine",
    category: "Descriptive Adjectives",
    pluralDirect: "belli (M) / belle (F)",
    pluralOblique: "bel / bello / bell' / bella",
    mnemonic: "'Che bello!' = 'How lovely / awesome!'",
    inflection: { direct_sg: "bello (M) / bella (F)", direct_pl: "belli (M) / belle (F)", oblique_sg: "bel / bell'", oblique_pl: "bei / begli" },
    example: {
      target: "Che bella giornata!",
      phonetic: "keh BEHL-lah johr-NAH-tah",
      english: "What a beautiful day!",
      explanation: "4-form adjective (-o/-a/-i/-e); shortens like definite articles when placed BEFORE a noun (un bel libro)."
    }
  },
  {
    id: "buono",
    target: "buono",
    phonetic: "BWOH-noh",
    english: "good / tasty / kind",
    pos: "Adjective",
    nounTrait: "Masculine",
    category: "Descriptive Adjectives",
    pluralDirect: "buoni (M) / buone (F)",
    pluralOblique: "buon / buono / buona",
    mnemonic: "'Buongiorno!' (Good morning) & 'Buon appetito!' (Enjoy your meal).",
    inflection: { direct_sg: "buono (M) / buona (F)", direct_pl: "buoni (M) / buone (F)", oblique_sg: "buon / buon'", oblique_pl: "buoni / buone" },
    example: {
      target: "Questa pizza è davvero buona!",
      phonetic: "KWEHS-tah PEET-tsah eh dahv-VEH-roh BWOH-nah",
      english: "This pizza is really good!",
      explanation: "Use 'buono' for food/morality/quality, and 'bravo' for skill ('Sei molto bravo!')."
    }
  },
  {
    id: "grande",
    target: "grande",
    phonetic: "GRAHN-deh",
    english: "big / large / great",
    pos: "Adjective",
    nounTrait: "Masculine",
    category: "Descriptive Adjectives",
    pluralDirect: "grandi (M & F)",
    pluralOblique: "gran / grande",
    mnemonic: "2-form adjective: 'grande' for both M and F singular, 'grandi' for both M and F plural!",
    inflection: { direct_sg: "grande (M/F)", direct_pl: "grandi (M/F)", oblique_sg: "gran / grand'", oblique_pl: "grandi" },
    example: {
      target: "Abbiamo una casa molto grande.",
      phonetic: "ahb-BYAH-moh OO-nah KAH-zah MOHL-toh GRAHN-deh",
      english: "We have a very big house.",
      explanation: "Placed AFTER a noun it means 'big'; BEFORE a noun it often means 'great' (un grande amico)."
    }
  },
  {
    id: "piccolo",
    target: "piccolo",
    phonetic: "PEEK-koh-loh",
    english: "small / little",
    pos: "Adjective",
    nounTrait: "Masculine",
    category: "Descriptive Adjectives",
    pluralDirect: "piccoli (M) / piccole (F)",
    pluralOblique: "piccolo / piccola",
    mnemonic: "Think of the tiny flute — a 'PICCOLO'!",
    inflection: { direct_sg: "piccolo (M) / piccola (F)", direct_pl: "piccoli (M) / piccole (F)", oblique_sg: "piccolo", oblique_pl: "piccoli" },
    example: {
      target: "È un piccolo problema.",
      phonetic: "eh oon PEEK-koh-loh proh-BLEH-mah",
      english: "It's a small problem.",
      explanation: "Notice 'problema' is MASCULINE despite ending in -a (Greek origin) → un piccolo problema."
    }
  },
  {
    id: "nuovo",
    target: "nuovo",
    phonetic: "NWOH-voh",
    english: "new",
    pos: "Adjective",
    nounTrait: "Masculine",
    category: "Descriptive Adjectives",
    pluralDirect: "nuovi (M) / nuove (F)",
    pluralOblique: "nuovo / nuova",
    mnemonic: "Think of 'NOVEL' / 'NOVA' — brand NEW.",
    inflection: { direct_sg: "nuovo (M) / nuova (F)", direct_pl: "nuovi (M) / nuove (F)", oblique_sg: "nuovo", oblique_pl: "nuovi" },
    example: {
      target: "Ho comprato delle scarpe nuove.",
      phonetic: "oh kohm-PRAH-toh DEHL-leh SKAHR-peh NWOH-veh",
      english: "I bought some new shoes.",
      explanation: "Agrees with feminine plural 'scarpe' → 'nuove'."
    }
  },
  {
    id: "stanco",
    target: "stanco",
    phonetic: "STAHN-koh",
    english: "tired",
    pos: "Adjective",
    nounTrait: "Masculine",
    category: "Descriptive Adjectives",
    pluralDirect: "stanchi (M) / stanche (F)",
    pluralOblique: "stanco / stanca",
    mnemonic: "Adds 'h' in the plural (stanchi / stanche) to keep the hard 'k' sound!",
    inflection: { direct_sg: "stanco (M) / stanca (F)", direct_pl: "stanchi (M) / stanche (F)", oblique_sg: "stanco", oblique_pl: "stanchi" },
    example: {
      target: "Sono molto stanco oggi.",
      phonetic: "SOH-noh MOHL-toh STAHN-koh OHJ-jee",
      english: "I'm very tired today.",
      explanation: "A woman says 'Sono molto stanca'."
    }
  },

  // --- 6. Colors & Shapes ---
  {
    id: "rosso",
    target: "rosso",
    phonetic: "ROHS-soh",
    english: "red",
    pos: "Adjective",
    nounTrait: "Masculine",
    category: "Colors & Shapes",
    pluralDirect: "rossi (M) / rosse (F)",
    pluralOblique: "rosso / rossa",
    mnemonic: "Think of 'Ferrari Rosso' — bright Italian RED!",
    inflection: { direct_sg: "rosso / rossa", direct_pl: "rossi / rosse", oblique_sg: "rosso", oblique_pl: "rossi" },
    example: {
      target: "Mi piace la tua giacca rossa.",
      phonetic: "mee PYAH-cheh lah TOO-ah JAHK-kah ROHS-sah",
      english: "I like your red jacket.",
      explanation: "Colors normally come AFTER the noun in Italian."
    }
  },
  {
    id: "bianco",
    target: "bianco",
    phonetic: "BYAHN-koh",
    english: "white",
    pos: "Adjective",
    nounTrait: "Masculine",
    category: "Colors & Shapes",
    pluralDirect: "bianchi (M) / bianche (F)",
    pluralOblique: "bianco / bianca",
    mnemonic: "Think of 'BLANK' (white page) — keeps hard 'k' with 'h' in plural (bianchi/bianche).",
    inflection: { direct_sg: "bianco / bianca", direct_pl: "bianchi / bianche", oblique_sg: "bianco", oblique_pl: "bianchi" },
    example: {
      target: "Un bicchiere di vino bianco.",
      phonetic: "oon beek-KYEH-reh dee VEE-noh BYAHN-koh",
      english: "A glass of white wine.",
      explanation: "4-form color adjective."
    }
  },
  {
    id: "verde",
    target: "verde",
    phonetic: "VEHR-deh",
    english: "green",
    pos: "Adjective",
    nounTrait: "Masculine",
    category: "Colors & Shapes",
    pluralDirect: "verdi (M & F)",
    pluralOblique: "verde / verdi",
    mnemonic: "Think of 'VERDANT' — lush GREEN! Same for M & F.",
    inflection: { direct_sg: "verde (M/F)", direct_pl: "verdi (M/F)", oblique_sg: "verde", oblique_pl: "verdi" },
    example: {
      target: "Il semaforo è verde!",
      phonetic: "eel seh-MAH-foh-roh eh VEHR-deh",
      english: "The traffic light is green!",
      explanation: "2-form adjective (-e → -i)."
    }
  },
  {
    id: "nero",
    target: "nero",
    phonetic: "NEH-roh",
    english: "black",
    pos: "Adjective",
    nounTrait: "Masculine",
    category: "Colors & Shapes",
    pluralDirect: "neri (M) / nere (F)",
    pluralOblique: "nero / nera",
    mnemonic: "Like Emperor 'Nero' — dark BLACK.",
    inflection: { direct_sg: "nero / nera", direct_pl: "neri / nere", oblique_sg: "nero", oblique_pl: "neri" },
    example: {
      target: "Ho un gatto nero.",
      phonetic: "oh oon GAHT-toh NEH-roh",
      english: "I have a black cat.",
      explanation: "Regular 4-form adjective."
    }
  },
  {
    id: "blu",
    target: "blu",
    phonetic: "bloo",
    english: "dark blue",
    pos: "Adjective",
    nounTrait: "Masculine",
    category: "Colors & Shapes",
    pluralDirect: "blu (invariable)",
    pluralOblique: "blu (invariable)",
    mnemonic: "Invariable! Never changes for gender or number ('gli occhi blu'). Light/sky blue is 'azzurro'.",
    inflection: { direct_sg: "blu", direct_pl: "blu", oblique_sg: "blu", oblique_pl: "blu" },
    example: {
      target: "Indosso una camicia blu.",
      phonetic: "een-DOHS-soh OO-nah kah-MEE-chah bloo",
      english: "I'm wearing a blue shirt.",
      explanation: "Loanword colors like blu, rosa (pink), and viola (purple) never change form."
    }
  },

  // --- 7. Prepositions & Connectors ---
  {
    id: "con",
    target: "con",
    phonetic: "kohn",
    english: "with",
    pos: "Postposition",
    category: "Prepositions & Connectors",
    mnemonic: "'Caffè con latte' = coffee WITH milk.",
    inflection: null,
    example: {
      target: "Vengo con te!",
      phonetic: "VEHN-goh kohn teh",
      english: "I'm coming with you!",
      explanation: "One of the 8 core Italian simple prepositions (di, a, da, in, con, su, per, tra/fra)."
    }
  },
  {
    id: "senza",
    target: "senza",
    phonetic: "SEHN-tsah",
    english: "without",
    pos: "Postposition",
    category: "Prepositions & Connectors",
    mnemonic: "'Senza zucchero' = WITHOUT sugar.",
    inflection: null,
    example: {
      target: "Prendo il caffè senza zucchero.",
      phonetic: "PREHN-doh eel kahf-FEH SEHN-tsah TSOOK-keh-roh",
      english: "I take my coffee without sugar.",
      explanation: "Invariable preposition."
    }
  },
  {
    id: "perche",
    target: "perché",
    phonetic: "pehr-KEH",
    english: "why? / because",
    pos: "Adverb",
    category: "Prepositions & Connectors",
    mnemonic: "Does double duty! 'Perché?' (Why?) → 'Perché...' (Because...).",
    inflection: null,
    example: {
      target: "Perché ridi? Perché è divertente!",
      phonetic: "pehr-KEH REE-dee? pehr-KEH eh dee-vehr-TEHN-teh",
      english: "Why are you laughing? Because it's funny!",
      explanation: "Closed acute 'é' at the end carries the stress."
    }
  },
  {
    id: "pero",
    target: "però",
    phonetic: "peh-ROH",
    english: "however / but",
    pos: "Adverb",
    category: "Prepositions & Connectors",
    mnemonic: "Like 'ma' (but), except 'però' can also go at the end of a sentence!",
    inflection: null,
    example: {
      target: "È caro, però è buonissimo.",
      phonetic: "eh KAH-roh, peh-ROH eh bwoh-NEES-see-moh",
      english: "It's expensive, but it's delicious.",
      explanation: "Never combine 'ma però' in formal Italian — pick one or the other."
    }
  },
  {
    id: "anche",
    target: "anche",
    phonetic: "AHN-keh",
    english: "also / too / even",
    pos: "Adverb",
    category: "Prepositions & Connectors",
    mnemonic: "'Anch'io!' = 'Me too!'",
    inflection: null,
    example: {
      target: "Anch'io voglio venire!",
      phonetic: "ahn-KEE-oh VOH-lyoh veh-NEE-reh",
      english: "I want to come too!",
      explanation: "Placed BEFORE the word it emphasizes ('anche tu' = you too)."
    }
  },

  // --- 8. Time & Calendar ---
  {
    id: "oggi",
    target: "oggi",
    phonetic: "OHJ-jee",
    english: "today",
    pos: "Adverb",
    category: "Time & Calendar",
    mnemonic: "Double 'gg' before 'i' = held 'j' sound (OHJ-jee).",
    inflection: null,
    example: {
      target: "Oggi fa bel tempo.",
      phonetic: "OHJ-jee fah behl TEHM-poh",
      english: "Today the weather is nice.",
      explanation: "Pair with ieri (yesterday) and domani (tomorrow)."
    }
  },
  {
    id: "domani",
    target: "domani",
    phonetic: "doh-MAH-nee",
    english: "tomorrow",
    pos: "Adverb",
    category: "Time & Calendar",
    mnemonic: "'A domani!' = 'See you tomorrow!'",
    inflection: null,
    example: {
      target: "Ci sentiamo domani mattina.",
      phonetic: "chee sehn-TYAH-moh doh-MAH-nee maht-TEE-nah",
      english: "We'll talk tomorrow morning.",
      explanation: "'dopodomani' = the day after tomorrow."
    }
  },
  {
    id: "ieri",
    target: "ieri",
    phonetic: "YEH-ree",
    english: "yesterday",
    pos: "Adverb",
    category: "Time & Calendar",
    mnemonic: "'Ieri sera' = last night.",
    inflection: null,
    example: {
      target: "Ieri sera siamo andati al cinema.",
      phonetic: "YEH-ree SEH-rah SYAH-moh ahn-DAH-tee ahl CHEE-neh-mah",
      english: "Last night we went to the movies.",
      explanation: "Usually triggers Passato Prossimo."
    }
  },
  {
    id: "sempre",
    target: "sempre",
    phonetic: "SEHM-preh",
    english: "always",
    pos: "Adverb",
    category: "Time & Calendar",
    mnemonic: "'Per sempre' = forever!",
    inflection: null,
    example: {
      target: "Sei sempre in ritardo!",
      phonetic: "say SEHM-preh een ree-TAHR-doh",
      english: "You're always late!",
      explanation: "Opposite: 'mai' (never) — 'Non arrivo mai in ritardo'."
    }
  },
  {
    id: "adesso",
    target: "adesso",
    phonetic: "ah-DEHS-soh",
    english: "now / right now",
    pos: "Adverb",
    category: "Time & Calendar",
    mnemonic: "Interchangeable with 'ora' (now): 'Adesso arrivo!' = 'Coming right now!'",
    inflection: null,
    example: {
      target: "Adesso devo andare.",
      phonetic: "ah-DEHS-soh DEH-voh ahn-DAH-reh",
      english: "I have to go now.",
      explanation: "Hold the double 'ss' clearly."
    }
  },

  // --- 9. Question Words & Pronouns ---
  {
    id: "che_cosa",
    target: "che cosa? / cosa?",
    phonetic: "keh KOH-zah",
    english: "what?",
    pos: "Pronoun",
    category: "Question Words & Pronouns",
    mnemonic: "You can say 'Che cosa fai?', 'Cosa fai?', or 'Che fai?' — all mean 'What are you doing?'",
    inflection: null,
    example: {
      target: "Che cosa vuoi bere?",
      phonetic: "keh KOH-zah vwoh-ee BEH-reh",
      english: "What do you want to drink?",
      explanation: "In casual Italian, 'cosa' alone is super common."
    }
  },
  {
    id: "dove",
    target: "dove?",
    phonetic: "DOH-veh",
    english: "where?",
    pos: "Pronoun",
    category: "Question Words & Pronouns",
    mnemonic: "'Dov'è il bagno?' = 'Where is the bathroom?' (dove + è → dov'è).",
    inflection: null,
    example: {
      target: "Dov'è la stazione centrale?",
      phonetic: "doh-VEH lah stah-TSYOH-neh chehn-TRAH-leh",
      english: "Where is the central station?",
      explanation: "Elides to 'dov'è' before 'è'."
    }
  },
  {
    id: "quando",
    target: "quando?",
    phonetic: "KWAHN-doh",
    english: "when?",
    pos: "Pronoun",
    category: "Question Words & Pronouns",
    mnemonic: "'Quando parte il treno?' = 'When does the train leave?'",
    inflection: null,
    example: {
      target: "Quando arrivi a Roma?",
      phonetic: "KWAHN-doh ahr-REE-vee ah ROH-mah",
      english: "When do you arrive in Rome?",
      explanation: "Also used as a conjunction ('quando ero piccolo' = when I was little)."
    }
  },
  {
    id: "chi",
    target: "chi?",
    phonetic: "kee",
    english: "who?",
    pos: "Pronoun",
    category: "Question Words & Pronouns",
    mnemonic: "'ch' + 'i' = hard 'k' → KEE! Never 'chee'!",
    inflection: null,
    example: {
      target: "Chi è quella persona?",
      phonetic: "kee eh KWEHL-lah pehr-SOH-nah",
      english: "Who is that person?",
      explanation: "Always takes a 3rd-person singular verb ('Chi viene?')."
    }
  },
  {
    id: "come",
    target: "come?",
    phonetic: "KOH-meh",
    english: "how? / like / as",
    pos: "Pronoun",
    category: "Question Words & Pronouns",
    mnemonic: "'Come stai?' (How are you?) & 'Come ti chiami?' (What's your name?).",
    inflection: null,
    example: {
      target: "Come si dice questo in italiano?",
      phonetic: "KOH-meh see DEE-cheh KWEHS-toh een ee-tah-LYAH-noh",
      english: "How do you say this in Italian?",
      explanation: "Essential survival question for learners!"
    }
  },

  // --- 10. Swearing & Slang (Parolacce e Slang) ---
  {
    id: "cavolo",
    target: "cavolo!",
    phonetic: "KAH-voh-loh",
    english: "darn! / shoot! (lit. cabbage!)",
    pos: "Expression",
    nounTrait: "Masculine",
    category: "Swearing & Slang",
    mnemonic: "[Mild] Literally 'cabbage!' The polite, family-friendly minced oath standing in for 'cazzo!'.",
    inflection: null,
    example: {
      target: "Cavolo, ho dimenticato il portafoglio!",
      phonetic: "KAH-voh-loh, oh dee-mehn-tee-KAH-toh eel pohr-tah-FOH-lyoh",
      english: "Shoot, I forgot my wallet!",
      explanation: "Safe everywhere — even around kids and grandparents."
    }
  },
  {
    id: "accidenti",
    target: "accidenti!",
    phonetic: "aht-chee-DEHN-tee",
    english: "darn it! / blimey! / damn!",
    pos: "Expression",
    category: "Swearing & Slang",
    mnemonic: "[Mild] Classic old-school mild exclamation of surprise or annoyance.",
    inflection: null,
    example: {
      target: "Accidenti, che pioggia oggi!",
      phonetic: "aht-chee-DEHN-tee, keh PYOHJ-jah OHJ-jee",
      english: "Darn, what rain today!",
      explanation: "Double 'cc' before 'i' is a held 'ch' sound."
    }
  },
  {
    id: "porca_miseria",
    target: "porca miseria!",
    phonetic: "POHR-kah mee-ZEH-ryah",
    english: "damn it! / bloody hell! (lit. pig misery!)",
    pos: "Expression",
    category: "Swearing & Slang",
    mnemonic: "[Mild–Moderate] Super common everyday outburst when something goes wrong. Much milder than 'porca puttana!'.",
    inflection: null,
    example: {
      target: "Porca miseria, ho perso il treno!",
      phonetic: "POHR-kah mee-ZEH-ryah, oh PEHR-soh eel TREH-noh",
      english: "Damn it, I missed the train!",
      explanation: "Italians love 'porca + noun' exclamations (porca vacca, porca miseria, porca troia)."
    }
  },
  {
    id: "scemo",
    target: "scemo",
    phonetic: "SHEH-moh",
    english: "idiot / dumb / silly",
    pos: "Adjective",
    nounTrait: "Masculine",
    category: "Swearing & Slang",
    pluralDirect: "scemi (M) / sceme (F)",
    pluralOblique: "scemo / scema",
    mnemonic: "[Mild] 'sc' + 'e' = 'sh' (SHEH-moh). Everyday mild insult or playful tease ('Ma sei scemo?').",
    inflection: { direct_sg: "scemo / scema", direct_pl: "scemi / sceme", oblique_sg: "scemo", oblique_pl: "scemi" },
    example: {
      target: "Ma sei scemo o cosa?",
      phonetic: "mah say SHEH-moh oh KOH-zah",
      english: "Are you stupid or what?",
      explanation: "4-form adjective/noun: scemo (M), scema (F), scemi (M.pl), sceme (F.pl)."
    }
  },
  {
    id: "bastardo",
    target: "bastardo",
    phonetic: "bahs-TAHR-doh",
    english: "bastard / jerk",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "Swearing & Slang",
    pluralDirect: "bastardi (M) / bastarde (F)",
    pluralOblique: "il bastardo • i bastardi",
    mnemonic: "[Moderate] Used both seriously for a backstabber and jokingly between friends.",
    inflection: { direct_sg: "il bastardo", direct_pl: "i bastardi", oblique_sg: "un bastardo", oblique_pl: "dei bastardi" },
    example: {
      target: "Quel bastardo mi ha fregato!",
      phonetic: "kwehl bahs-TAHR-doh mee ah freh-GAH-toh",
      english: "That bastard ripped me off / tricked me!",
      explanation: "'fregare' is also great Italian slang for 'to trick / rip off'."
    }
  },
  {
    id: "merda",
    target: "merda",
    phonetic: "MEHR-dah",
    english: "shit / crap",
    pos: "Noun",
    nounTrait: "Feminine",
    category: "Swearing & Slang",
    pluralDirect: "merde (MEHR-deh)",
    pluralOblique: "la merda • una merda",
    mnemonic: "[Moderate] Exact equivalent of 'shit'. Fun fact: in theater, 'In bocca al lupo' or 'Merda!' means 'Break a leg!'",
    inflection: { direct_sg: "la merda", direct_pl: "le merde", oblique_sg: "una merda", oblique_pl: "delle merde" },
    example: {
      target: "Che giornata di merda!",
      phonetic: "keh johr-NAH-tah dee MEHR-dah",
      english: "What a shitty day!",
      explanation: "'di merda' turns any noun into 'shitty ___' (un film di merda = a shitty movie)."
    }
  },
  {
    id: "che_palle",
    target: "che palle!",
    phonetic: "keh PAHL-leh",
    english: "what a drag! / how annoying! (lit. what balls!)",
    pos: "Expression",
    category: "Swearing & Slang",
    mnemonic: "[Moderate] Ubiquitous Italian expression for boredom or annoyance — like 'ugh, what a pain in the ass!'",
    inflection: null,
    example: {
      target: "Che palle, piove di nuovo!",
      phonetic: "keh PAHL-leh, PYOH-veh dee NWOH-voh",
      english: "Ugh, what a drag, it's raining again!",
      explanation: "Also: 'mi sono rotto le palle' = 'I'm sick and tired of this'."
    }
  },
  {
    id: "stronzo",
    target: "stronzo",
    phonetic: "STROHN-tsoh",
    english: "asshole / piece of shit",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "Swearing & Slang",
    pluralDirect: "stronzi (M) / stronze (F)",
    pluralOblique: "lo stronzo • gli stronzi",
    mnemonic: "[Moderate–Strong] Literally 'turd', universally used as 'asshole / jerk'. Feminine: 'stronza' (bitch/asshole).",
    inflection: { direct_sg: "lo stronzo", direct_pl: "gli stronzi", oblique_sg: "uno stronzo", oblique_pl: "degli stronzi" },
    example: {
      target: "Non fare lo stronzo!",
      phonetic: "nohn FAH-reh loh STROHN-tsoh",
      english: "Don't be an asshole!",
      explanation: "Starts with s + consonant ('st-') → takes definite article 'lo' (pl. 'gli')!"
    }
  },
  {
    id: "coglione",
    target: "coglione",
    phonetic: "koh-LYOH-neh",
    english: "dumbass / idiot / dickhead (lit. testicle)",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "Swearing & Slang",
    pluralDirect: "coglioni (koh-LYOH-nee)",
    pluralOblique: "il coglione • i coglioni",
    mnemonic: "[Moderate–Strong] Classic 'gli' pronunciation (koh-LYOH-neh). Huge insult for someone acting like a total idiot.",
    inflection: { direct_sg: "il coglione", direct_pl: "i coglioni", oblique_sg: "un coglione", oblique_pl: "dei coglioni" },
    example: {
      target: "Che coglione, ha sbagliato strada di nuovo!",
      phonetic: "keh koh-LYOH-neh, ah zbah-LYAH-toh STRAH-dah dee NWOH-voh",
      english: "What a dumbass, he took the wrong road again!",
      explanation: "Plural 'coglioni' is used in 'rompere i coglioni' (to be a pain in the ass)."
    }
  },
  {
    id: "rompere_i_coglioni",
    target: "non rompere i coglioni!",
    phonetic: "nohn ROHM-peh-reh ee koh-LYOH-nee",
    english: "stop busting my balls! / leave me alone!",
    pos: "Expression",
    category: "Swearing & Slang",
    mnemonic: "[Strong] Literally 'don't break the balls!' Milder version: 'non rompere le scatole!' (don't break the boxes!).",
    inflection: null,
    example: {
      target: "Dai, non rompere i coglioni adesso!",
      phonetic: "dah-ee, nohn ROHM-peh-reh ee koh-LYOH-nee ah-DEHS-soh",
      english: "Come on, stop busting my balls right now!",
      explanation: "Negative informal imperative ('tu') uses 'non + infinitive' (non rompere!)."
    }
  },
  {
    id: "cazzo",
    target: "cazzo!",
    phonetic: "KAHT-tsoh",
    english: "fuck! / shit! / dick (the Swiss Army knife of Italian swearing)",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "Swearing & Slang",
    pluralDirect: "cazzi (KAHT-tsee)",
    pluralOblique: "il cazzo • i cazzi",
    mnemonic: "[Strong] Literally 'dick', but functions just like English 'fuck!' — shock, anger, excitement, emphasis!",
    inflection: { direct_sg: "il cazzo", direct_pl: "i cazzi", oblique_sg: "un cazzo", oblique_pl: "dei cazzi" },
    example: {
      target: "Cazzo, ho lasciato le chiavi dentro!",
      phonetic: "KAHT-tsoh, oh lah-SHAH-toh leh KYAH-vee DEHN-troh",
      english: "Fuck, I left the keys inside!",
      explanation: "'Fatti i cazzi tuoi!' = 'Mind your own fucking business!'"
    }
  },
  {
    id: "che_cazzo",
    target: "che cazzo?!",
    phonetic: "keh KAHT-tsoh",
    english: "what the fuck?!",
    pos: "Expression",
    category: "Swearing & Slang",
    mnemonic: "[Strong] The exact Italian equivalent of 'WTF?!' Works with any verb: 'Che cazzo fai?' (What the fuck are you doing?).",
    inflection: null,
    example: {
      target: "Ma che cazzo stai facendo?!",
      phonetic: "mah keh KAHT-tsoh stah-ee fah-CHEHN-doh",
      english: "What the fuck are you doing?!",
      explanation: "Also works with other question words: 'Dove cazzo sei?' (Where the fuck are you?)."
    }
  },
  {
    id: "vaffanculo",
    target: "vaffanculo!",
    phonetic: "vahf-fahn-KOO-loh",
    english: "fuck off! / go fuck yourself!",
    pos: "Expression",
    category: "Swearing & Slang",
    mnemonic: "[Strong] Contraction of 'va' a fare in culo!' (go take it up the ass!). The most iconic Italian swear word.",
    inflection: null,
    example: {
      target: "Ma vaffanculo, non ti credo!",
      phonetic: "mah vahf-fahn-KOO-loh, nohn tee KREH-doh",
      english: "Oh fuck off, I don't believe you!",
      explanation: "Often shortened in text/speech to 'vaffa!' (slightly softer)."
    }
  },
  {
    id: "non_me_ne_frega_un_cazzo",
    target: "non me ne frega un cazzo",
    phonetic: "nohn meh neh FREH-gah oon KAHT-tsoh",
    english: "I don't give a single fuck",
    pos: "Expression",
    category: "Swearing & Slang",
    mnemonic: "[Strong] Ultimate 'I couldn't care less'. Milder everyday version: 'non me ne frega niente'.",
    inflection: null,
    example: {
      target: "Sinceramente, non me ne frega un cazzo.",
      phonetic: "seen-cheh-rah-MEHN-teh, nohn meh neh FREH-gah oon KAHT-tsoh",
      english: "Honestly, I don't give a fuck.",
      explanation: "Uses pronominal verb 'fregarsene' (to not care about something)."
    }
  },
  {
    id: "porca_puttana",
    target: "porca puttana!",
    phonetic: "POHR-kah poot-TAH-nah",
    english: "goddammit! / motherfucker! (lit. pig whore!)",
    pos: "Expression",
    category: "Swearing & Slang",
    mnemonic: "[Strong] Heavy-duty outburst when you stub your toe, drop your phone, or hear shocking news.",
    inflection: null,
    example: {
      target: "Porca puttana, mi sono tagliato un dito!",
      phonetic: "POHR-kah poot-TAH-nah, mee SOH-noh tah-LYAH-toh oon DEE-toh",
      english: "Goddammit, I cut my finger!",
      explanation: "Notice double 'tt' in puttana (poot-TAH-nah)."
    }
  },
  {
    id: "figlio_di_puttana",
    target: "figlio di puttana",
    phonetic: "FEE-lyoh dee poot-TAH-nah",
    english: "son of a bitch",
    pos: "Noun",
    nounTrait: "Masculine",
    category: "Swearing & Slang",
    pluralDirect: "figli di puttana",
    pluralOblique: "un figlio di puttana",
    mnemonic: "[Strong] Exact equivalent of 'son of a bitch'. Very harsh insult!",
    inflection: { direct_sg: "il figlio di puttana", direct_pl: "i figli di puttana", oblique_sg: "un figlio di puttana", oblique_pl: "dei figli di puttana" },
    example: {
      target: "Quel figlio di puttana mi ha rubato la bici!",
      phonetic: "kwehl FEE-lyoh dee poot-TAH-nah mee ah roo-BAH-toh lah BEE-chee",
      english: "That son of a bitch stole my bike!",
      explanation: "Great practice for the Italian 'gli' sound in 'figlio' (FEE-lyoh)!"
    }
  },
  {
    id: "fottiti",
    target: "fottiti!",
    phonetic: "FOHT-tee-tee",
    english: "fuck you! / go screw yourself!",
    pos: "Expression",
    category: "Swearing & Slang",
    mnemonic: "[Strong] Reflexive imperative of 'fottere' (to fuck) — direct, blunt 'fuck you!'",
    inflection: null,
    example: {
      target: "Sai una cosa? Fottiti!",
      phonetic: "sah-ee OO-nah KOH-zah? FOHT-tee-tee",
      english: "You know what? Fuck you!",
      explanation: "Past participle 'fottuto' = 'fucking / screwed' ('Siamo fottuti!' = 'We're fucked!')."
    }
  },
  {
    id: "minchia",
    target: "minchia!",
    phonetic: "MEEN-kyah",
    english: "holy shit! / damn! / dude! (Sicilian/Southern slang)",
    pos: "Expression",
    nounTrait: "Feminine",
    category: "Swearing & Slang",
    mnemonic: "[Moderate–Strong] Originally Sicilian for 'dick', now used across all of Italy for amazement, shock, or emphasis (like 'damn!' or 'whoa!').",
    inflection: null,
    example: {
      target: "Minchia, quanto costa questo ristorante!",
      phonetic: "MEEN-kyah, KWAHN-toh KOHS-tah KWEHS-toh rees-toh-RAHN-teh",
      english: "Holy shit, how expensive is this restaurant!",
      explanation: "'ch' + 'i' = hard 'k' → MEEN-kyah!"
    }
  }
];

if (typeof window !== 'undefined') {
  window.VOCAB_CURRICULUM = VOCAB_CURRICULUM;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VOCAB_CURRICULUM };
}
