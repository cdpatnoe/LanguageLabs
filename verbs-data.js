// Core Curated Italian Verb Curriculum for English Speakers (Laboratorio dei Verbi)
// Annotated with Passato Prossimo auxiliary (hasGrammarTrait: true = Essere, false = Avere),
// Presente, Imperfetto, Passato Prossimo, Imperative (Tu / Lei / Voi), and real-world examples.

const VERB_CURRICULUM = [
  // --- 1. The Big 4 Irregulars ---
  {
    id: "essere",
    target: "essere",
    phonetic: "EHS-seh-reh",
    english: "to be",
    cluster: "The Big 4 Irregulars",
    stem: "son- / er- / stat-",
    transitivity: "Intransitive (Essere)",
    hasGrammarTrait: true,
    isIrregular: true,
    irregularNote: "Completely irregular: sono, sei, è, siamo, siete, sono. Takes itself (essere) in Passato Prossimo: sono stato/a!",
    mnemonic: "Think of 'ESSENCE' — to exist, to BE.",
    conjugations: {
      habitual: { m_sg: "sono / sei", f_sg: "è", m_pl: "siamo / siete / sono" },
      continuous: { m_sg: "ero / eri", f_sg: "era", m_pl: "eravamo / eravate / erano" },
      past: { m_sg: "sono stato / sei stato", f_sg: "è stato/a", m_pl: "siamo stati / siete stati / sono stati" },
      imperative: { tu: "sii!", tum: "sia!", aap: "siate!" }
    },
    example: { target: "Sono a Roma.", phonetic: "SOH-noh ah ROH-mah", english: "I am in Rome." },
    examples: {
      present: {
        tense: "Presente",
        target: "Io sono stanco, ma tu sei pronto.",
        phonetic: "EE-oh SOH-noh STAHN-koh, mah too SAY PROHN-toh",
        english: "I am tired, but you are ready.",
        verbForm: "sono",
        explanation: "sono = I am / they are; context makes the subject clear."
      },
      current: {
        tense: "Imperfetto",
        target: "Ieri sera ero molto felice.",
        phonetic: "YEH-ree SEH-rah EH-roh MOHL-toh feh-LEE-cheh",
        english: "Last night I was very happy.",
        verbForm: "ero",
        explanation: "Imperfetto describes ongoing states or feelings in the past."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Siamo stati a Firenze l'estate scorsa.",
        phonetic: "SYAH-moh STAH-tee ah fee-REHN-tseh lehs-TAH-teh SKOHR-sah",
        english: "We were in Florence last summer.",
        verbForm: "Siamo stati",
        explanation: "Essere uses itself as auxiliary and agrees in gender/number (stato/stata/stati/state)."
      }
    }
  },
  {
    id: "avere",
    target: "avere",
    phonetic: "ah-VEH-reh",
    english: "to have",
    cluster: "The Big 4 Irregulars",
    stem: "ho / av- / avut-",
    transitivity: "Transitive (Avere)",
    hasGrammarTrait: false,
    isIrregular: true,
    irregularNote: "Silent 'h' in ho, hai, ha, hanno (distinguishes them from o, ai, a, anno). Used for age ('ho 30 anni') and hunger ('ho fame')!",
    mnemonic: "Think of 'HAVE' — drop the H sound, and 'avere' means to have.",
    conjugations: {
      habitual: { m_sg: "ho / hai", f_sg: "ha", m_pl: "abbiamo / avete / hanno" },
      continuous: { m_sg: "avevo / avevi", f_sg: "aveva", m_pl: "avevamo / avevate / avevano" },
      past: { m_sg: "ho avuto / hai avuto", f_sg: "ha avuto", m_pl: "abbiamo avuto / avete avuto / hanno avuto" },
      imperative: { tu: "abbi!", tum: "abbia!", aap: "abbiate!" }
    },
    example: { target: "Ho molta fame!", phonetic: "oh MOHL-tah FAH-meh", english: "I am very hungry! (lit. I have much hunger)" },
    examples: {
      present: {
        tense: "Presente",
        target: "Hai tempo per un caffè?",
        phonetic: "eye TEHM-poh pehr oon kahf-FEH",
        english: "Do you have time for a coffee?",
        verbForm: "Hai",
        explanation: "The 'h' in hai is completely silent — pronounced like English 'eye'."
      },
      current: {
        tense: "Imperfetto",
        target: "Da bambino avevo un cane.",
        phonetic: "dah bahm-BEE-noh ah-VEH-voh oon KAH-neh",
        english: "As a child I had a dog.",
        verbForm: "avevo",
        explanation: "Regular imperfetto stem av- + -evo, -evi, -eva."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Abbiamo avuto una bella giornata.",
        phonetic: "ahb-BYAH-moh ah-VOO-toh OO-nah BEHL-lah johr-NAH-tah",
        english: "We had a lovely day.",
        verbForm: "Abbiamo avuto",
        explanation: "Avere takes itself as auxiliary: ho avuto, hai avuto, ha avuto."
      }
    }
  },
  {
    id: "andare",
    target: "andare",
    phonetic: "ahn-DAH-reh",
    english: "to go",
    cluster: "The Big 4 Irregulars",
    stem: "vad- / and-",
    transitivity: "Intransitive (Essere)",
    hasGrammarTrait: true,
    isIrregular: true,
    irregularNote: "Boot-verb irregularity: vado, vai, va, vanno (but noi andiamo, voi andate). Takes ESSERE in Passato Prossimo!",
    mnemonic: "'Andare' → 'Vado!' (I'm off / I go!).",
    conjugations: {
      habitual: { m_sg: "vado / vai", f_sg: "va", m_pl: "andiamo / andate / vanno" },
      continuous: { m_sg: "andavo / andavi", f_sg: "andava", m_pl: "andavamo / andavate / andavano" },
      past: { m_sg: "sono andato / sei andato", f_sg: "è andato/a", m_pl: "siamo andati / siete andati / sono andati" },
      imperative: { tu: "va'! / vai!", tum: "vada!", aap: "andate!" }
    },
    example: { target: "Andiamo al mare!", phonetic: "ahn-DYAH-moh ahl MAH-reh", english: "Let's go to the beach!" },
    examples: {
      present: {
        tense: "Presente",
        target: "Vado al lavoro in treno.",
        phonetic: "VAH-doh ahl lah-VOH-roh een TREH-noh",
        english: "I go to work by train.",
        verbForm: "Vado",
        explanation: "Irregular present stem vad- for io/tu/lui/loro."
      },
      current: {
        tense: "Imperfetto",
        target: "Ogni domenica andavamo dalla nonna.",
        phonetic: "OH-nyee doh-MEH-nee-kah ahn-dah-VAH-moh DAHL-lah NOHN-nah",
        english: "Every Sunday we used to go to grandma's.",
        verbForm: "andavamo",
        explanation: "Imperfetto is regular on the stem and-."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Giulia è andata a Milano ieri.",
        phonetic: "JOO-lyah eh ahn-DAH-tah ah mee-LAH-noh YEH-ree",
        english: "Giulia went to Milan yesterday.",
        verbForm: "è andata",
        explanation: "Motion verb → takes ESSERE, so 'andata' agrees with feminine Giulia."
      }
    }
  },
  {
    id: "fare",
    target: "fare",
    phonetic: "FAH-reh",
    english: "to do / to make",
    cluster: "The Big 4 Irregulars",
    stem: "facc- / fac- / fatt-",
    transitivity: "Transitive (Avere)",
    hasGrammarTrait: false,
    isIrregular: true,
    irregularNote: "Derived from Latin 'facere': faccio, fai, fa, facciamo, fate, fanno. Imperfetto uses fac- (facevo). Past participle: fatto.",
    mnemonic: "'Fare' → 'Fatto!' ('Done!' / 'Fact!').",
    conjugations: {
      habitual: { m_sg: "faccio / fai", f_sg: "fa", m_pl: "facciamo / fate / fanno" },
      continuous: { m_sg: "facevo / facevi", f_sg: "faceva", m_pl: "facevamo / facevate / facevano" },
      past: { m_sg: "ho fatto / hai fatto", f_sg: "ha fatto", m_pl: "abbiamo fatto / avete fatto / hanno fatto" },
      imperative: { tu: "fa'! / fai!", tum: "faccia!", aap: "fate!" }
    },
    example: { target: "Che cosa fai stasera?", phonetic: "keh KOH-zah FAH-ee stah-SEH-rah", english: "What are you doing tonight?" },
    examples: {
      present: {
        tense: "Presente",
        target: "Faccio colazione alle otto.",
        phonetic: "FAHT-choh koh-lah-TSYOH-neh AHL-leh OHT-toh",
        english: "I have breakfast at eight.",
        verbForm: "Faccio",
        explanation: "'Fare colazione' = to have breakfast; 'fare una passeggiata' = to take a walk."
      },
      current: {
        tense: "Imperfetto",
        target: "Faceva molto caldo in agosto.",
        phonetic: "fah-CHEH-vah MOHL-toh KAHL-doh een ah-GOHS-toh",
        english: "It was very hot in August.",
        verbForm: "Faceva",
        explanation: "Used for weather: fa caldo (it's hot), faceva caldo (it was hot)."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Ho fatto una torta per te.",
        phonetic: "oh FAHT-toh OO-nah TOHR-tah pehr teh",
        english: "I made a cake for you.",
        verbForm: "Ho fatto",
        explanation: "Irregular past participle 'fatto' with auxiliary avere."
      }
    }
  },

  // --- 2. Modal & Essential Irregulars ---
  {
    id: "potere",
    target: "potere",
    phonetic: "poh-TEH-reh",
    english: "can / to be able to",
    cluster: "Modal & Essential Irregulars",
    stem: "poss- / puo- / pot-",
    transitivity: "Modal (Avere / Essere)",
    hasGrammarTrait: false,
    isIrregular: true,
    irregularNote: "posso, puoi, può, possiamo, potete, possono. Followed directly by an infinitive ('Posso entrare?').",
    mnemonic: "Think of 'POTENT' / 'POSSIBLE' — having the power to do something.",
    conjugations: {
      habitual: { m_sg: "posso / puoi", f_sg: "può", m_pl: "possiamo / potete / possono" },
      continuous: { m_sg: "potevo / potevi", f_sg: "poteva", m_pl: "potevamo / potevate / potevano" },
      past: { m_sg: "ho potuto / hai potuto", f_sg: "ha potuto", m_pl: "abbiamo potuto / avete potuto / hanno potuto" },
      imperative: { tu: "—", tum: "—", aap: "—" }
    },
    example: { target: "Posso pagare con la carta?", phonetic: "POHS-soh pah-GAH-reh kohn lah KAHR-tah", english: "Can I pay by card?" },
    examples: {
      present: {
        tense: "Presente",
        target: "Puoi ripetere, per favore?",
        phonetic: "PWOH-ee ree-PEH-teh-reh, pehr fah-VOH-reh",
        english: "Can you repeat that, please?",
        verbForm: "Puoi",
        explanation: "Modal verb + infinitive with no preposition in between."
      },
      current: {
        tense: "Imperfetto",
        target: "Non potevo dormire ieri notte.",
        phonetic: "nohn poh-TEH-voh dohr-MEE-reh YEH-ree NOHT-teh",
        english: "I couldn't sleep last night.",
        verbForm: "potevo",
        explanation: "Imperfetto expresses an ongoing inability in the past."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Non ho potuto finire il libro.",
        phonetic: "nohn oh poh-TOO-toh fee-NEE-reh eel LEE-broh",
        english: "I wasn't able to finish the book.",
        verbForm: "ho potuto",
        explanation: "Uses avere (or essere if the following infinitive takes essere, e.g. sono potuto andare)."
      }
    }
  },
  {
    id: "volere",
    target: "volere",
    phonetic: "voh-LEH-reh",
    english: "to want",
    cluster: "Modal & Essential Irregulars",
    stem: "vogl- / vuo- / vol-",
    transitivity: "Modal (Avere)",
    hasGrammarTrait: false,
    isIrregular: true,
    irregularNote: "voglio, vuoi, vuole, vogliamo, volete, vogliono. Use conditional 'vorrei' (I would like) to be polite!",
    mnemonic: "Think of 'VOLITION' — willpower and wanting.",
    conjugations: {
      habitual: { m_sg: "voglio / vuoi", f_sg: "vuole", m_pl: "vogliamo / volete / vogliono" },
      continuous: { m_sg: "volevo / volevi", f_sg: "voleva", m_pl: "volevamo / volevate / volevano" },
      past: { m_sg: "ho voluto / hai voluto", f_sg: "ha voluto", m_pl: "abbiamo voluto / avete voluto / hanno voluto" },
      imperative: { tu: "vogli!", tum: "voglia!", aap: "vogliate!" }
    },
    example: { target: "Voglio imparare l'italiano.", phonetic: "VOH-lyoh eem-pah-RAH-reh lee-tah-LYAH-noh", english: "I want to learn Italian." },
    examples: {
      present: {
        tense: "Presente",
        target: "Vuoi venire con noi stasera?",
        phonetic: "VWOH-ee veh-NEE-reh kohn NOY stah-SEH-rah",
        english: "Do you want to come with us tonight?",
        verbForm: "Vuoi",
        explanation: "Tip: in cafés/restaurants, say 'Vorrei un caffè' (I would like) instead of 'Voglio'."
      },
      current: {
        tense: "Imperfetto",
        target: "Volevo solo dirti ciao.",
        phonetic: "voh-LEH-voh SOH-loh DEER-tee CHAH-oh",
        english: "I just wanted to say hi to you.",
        verbForm: "Volevo",
        explanation: "Polite/softening use of the imperfetto ('I wanted to...')."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Ha voluto pagare tutto lui.",
        phonetic: "ah voh-LOO-toh pah-GAH-reh TOOT-toh LOO-ee",
        english: "He insisted on paying for everything.",
        verbForm: "Ha voluto",
        explanation: "In Passato Prossimo, 'volere' often implies 'insisted on / decided to'."
      }
    }
  },
  {
    id: "dovere",
    target: "dovere",
    phonetic: "doh-VEH-reh",
    english: "must / to have to / to owe",
    cluster: "Modal & Essential Irregulars",
    stem: "dev- / dobb- / dov-",
    transitivity: "Modal (Avere)",
    hasGrammarTrait: false,
    isIrregular: true,
    irregularNote: "devo, devi, deve, dobbiamo, dovete, devono. Conditional 'dovrei' = 'I should'.",
    mnemonic: "Think of 'DUTY' / 'DEBT' — what you MUST do or owe.",
    conjugations: {
      habitual: { m_sg: "devo / devi", f_sg: "deve", m_pl: "dobbiamo / dovete / devono" },
      continuous: { m_sg: "dovevo / dovevi", f_sg: "doveva", m_pl: "dovevamo / dovevate / dovevano" },
      past: { m_sg: "ho dovuto / hai dovuto", f_sg: "ha dovuto", m_pl: "abbiamo dovuto / avete dovuto / hanno dovuto" },
      imperative: { tu: "—", tum: "—", aap: "—" }
    },
    example: { target: "Devo andare adesso.", phonetic: "DEH-voh ahn-DAH-reh ah-DEHS-soh", english: "I have to go now." },
    examples: {
      present: {
        tense: "Presente",
        target: "Dobbiamo studiare di più.",
        phonetic: "dohb-BYAH-moh stoo-DYAH-reh dee PYOO",
        english: "We have to study more.",
        verbForm: "Dobbiamo",
        explanation: "Notice the double 'bb' in noi dobbiamo!"
      },
      current: {
        tense: "Imperfetto",
        target: "Dovevo chiamare mia madre.",
        phonetic: "doh-VEH-voh kyah-MAH-reh MEE-ah MAH-dreh",
        english: "I was supposed to call my mother.",
        verbForm: "Dovevo",
        explanation: "Imperfetto of dovere = 'was supposed to / had to'."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Abbiamo dovuto aspettare un'ora.",
        phonetic: "ahb-BYAH-moh doh-VOO-toh ahs-peht-TAH-reh oo-NOH-rah",
        english: "We had to wait an hour.",
        verbForm: "Abbiamo dovuto",
        explanation: "Regular past participle 'dovuto'."
      }
    }
  },
  {
    id: "sapere",
    target: "sapere",
    phonetic: "sah-PEH-reh",
    english: "to know (a fact / how to)",
    cluster: "Modal & Essential Irregulars",
    stem: "so / sai / sap-",
    transitivity: "Transitive (Avere)",
    hasGrammarTrait: false,
    isIrregular: true,
    irregularNote: "so, sai, sa, sappiamo, sapete, sanno. Use 'sapere' for facts/skills, and 'conoscere' for people/places!",
    mnemonic: "Think of 'SAPIEN' (Homo sapiens) — wise, KNOWING.",
    conjugations: {
      habitual: { m_sg: "so / sai", f_sg: "sa", m_pl: "sappiamo / sapete / sanno" },
      continuous: { m_sg: "sapevo / sapevi", f_sg: "sapeva", m_pl: "sapevamo / sapevate / sapevano" },
      past: { m_sg: "ho saputo / hai saputo", f_sg: "ha saputo", m_pl: "abbiamo saputo / avete saputo / hanno saputo" },
      imperative: { tu: "sappi!", tum: "sappia!", aap: "sappiate!" }
    },
    example: { target: "Non lo so!", phonetic: "nohn loh soh", english: "I don't know!" },
    examples: {
      present: {
        tense: "Presente",
        target: "Sai cucinare la pasta?",
        phonetic: "sah-ee koo-chee-NAH-reh lah PAHS-tah",
        english: "Do you know how to cook pasta?",
        verbForm: "Sai",
        explanation: "Sapere + infinitive means 'to know how to...'."
      },
      current: {
        tense: "Imperfetto",
        target: "Non sapevo che fossi qui!",
        phonetic: "nohn sah-PEH-voh keh FOHS-see kwee",
        english: "I didn't know you were here!",
        verbForm: "sapevo",
        explanation: "Imperfetto = 'I knew / didn't know' (state of knowledge)."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Ho saputo la notizia stamattina.",
        phonetic: "oh sah-POO-toh lah noh-TEE-tsyah stah-maht-TEE-nah",
        english: "I found out the news this morning.",
        verbForm: "Ho saputo",
        explanation: "In Passato Prossimo, 'sapere' means 'found out / learned'!"
      }
    }
  },

  // --- 3. -are Regular Verbs ---
  {
    id: "parlare",
    target: "parlare",
    phonetic: "pahr-LAH-reh",
    english: "to speak / to talk",
    cluster: "-are Regular Verbs",
    stem: "parl-",
    transitivity: "Transitive / Intransitive (Avere)",
    hasGrammarTrait: false,
    isIrregular: false,
    mnemonic: "Think of 'PARLEY' or 'PARLIAMENT' — a place to SPEAK.",
    conjugations: {
      habitual: { m_sg: "parlo / parli", f_sg: "parla", m_pl: "parliamo / parlate / parlano" },
      continuous: { m_sg: "parlavo / parlavi", f_sg: "parlava", m_pl: "parlavamo / parlavate / parlavano" },
      past: { m_sg: "ho parlato / hai parlato", f_sg: "ha parlato", m_pl: "abbiamo parlato / avete parlato / hanno parlato" },
      imperative: { tu: "parla!", tum: "parli!", aap: "parlate!" }
    },
    example: { target: "Parlo un po' d'italiano.", phonetic: "PAHR-loh oon poh dee-tah-LYAH-noh", english: "I speak a little Italian." },
    examples: {
      present: {
        tense: "Presente",
        target: "Parli inglese o italiano?",
        phonetic: "PAHR-lee een-GLEH-zeh oh ee-tah-LYAH-noh",
        english: "Do you speak English or Italian?",
        verbForm: "Parli",
        explanation: "Model regular -are endings: -o, -i, -a, -iamo, -ate, -ano."
      },
      current: {
        tense: "Imperfetto",
        target: "Parlavamo sempre al telefono.",
        phonetic: "pahr-lah-VAH-moh SEHM-preh ahl teh-LEH-foh-noh",
        english: "We always used to talk on the phone.",
        verbForm: "Parlavamo",
        explanation: "Regular -are imperfetto: -avo, -avi, -ava, -avamo, -avate, -avano."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Ho parlato con Marco stamattina.",
        phonetic: "oh pahr-LAH-toh kohn MAHR-koh stah-maht-TEE-nah",
        english: "I spoke with Marco this morning.",
        verbForm: "Ho parlato",
        explanation: "-are verbs form regular past participles in -ato (parlato)."
      }
    }
  },
  {
    id: "mangiare",
    target: "mangiare",
    phonetic: "mahn-JAH-reh",
    english: "to eat",
    cluster: "-are Regular Verbs",
    stem: "mangi-",
    transitivity: "Transitive (Avere)",
    hasGrammarTrait: false,
    isIrregular: false,
    mnemonic: "Think of 'MANGER' or 'Mangia!' — eat up!",
    conjugations: {
      habitual: { m_sg: "mangio / mangi", f_sg: "mangia", m_pl: "mangiamo / mangiate / mangiano" },
      continuous: { m_sg: "mangiavo / mangiavi", f_sg: "mangiava", m_pl: "mangiavamo / mangiavate / mangiavano" },
      past: { m_sg: "ho mangiato / hai mangiato", f_sg: "ha mangiato", m_pl: "abbiamo mangiato / avete mangiato / hanno mangiato" },
      imperative: { tu: "mangia!", tum: "mangi!", aap: "mangiate!" }
    },
    example: { target: "Mangiamo la pizza stasera!", phonetic: "mahn-JAH-moh lah PEET-tsah stah-SEH-rah", english: "Let's eat pizza tonight!" },
    examples: {
      present: {
        tense: "Presente",
        target: "Cosa mangi a pranzo?",
        phonetic: "KOH-zah MAHN-jee ah PRAHN-tsoh",
        english: "What are you eating for lunch?",
        verbForm: "mangi",
        explanation: "Drops the extra 'i' before -i and -iamo (mangi, mangiamo)."
      },
      current: {
        tense: "Imperfetto",
        target: "Mangiavamo spesso gelato in estate.",
        phonetic: "mahn-jah-VAH-moh SPEHS-soh jeh-LAH-toh een ehs-TAH-teh",
        english: "We often used to eat gelato in summer.",
        verbForm: "Mangiavamo",
        explanation: "Regular -are imperfetto describing a past habit."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Ho mangiato troppo!",
        phonetic: "oh mahn-JAH-toh TROHP-poh",
        english: "I ate too much!",
        verbForm: "Ho mangiato",
        explanation: "Regular -ato participle with avere."
      }
    }
  },
  {
    id: "lavorare",
    target: "lavorare",
    phonetic: "lah-voh-RAH-reh",
    english: "to work",
    cluster: "-are Regular Verbs",
    stem: "lavor-",
    transitivity: "Intransitive (Avere)",
    hasGrammarTrait: false,
    isIrregular: false,
    mnemonic: "Think of 'LABOR' — lavorare = to work.",
    conjugations: {
      habitual: { m_sg: "lavoro / lavori", f_sg: "lavora", m_pl: "lavoriamo / lavorate / lavorano" },
      continuous: { m_sg: "lavoravo / lavoravi", f_sg: "lavorava", m_pl: "lavoravamo / lavoravate / lavoravano" },
      past: { m_sg: "ho lavorato / hai lavorato", f_sg: "ha lavorato", m_pl: "abbiamo lavorato / avete lavorato / hanno lavorato" },
      imperative: { tu: "lavora!", tum: "lavori!", aap: "lavorate!" }
    },
    example: { target: "Lavoro da casa oggi.", phonetic: "lah-VOH-roh dah KAH-zah OHJ-jee", english: "I'm working from home today." },
    examples: {
      present: {
        tense: "Presente",
        target: "Dove lavori?",
        phonetic: "DOH-veh lah-VOH-ree",
        english: "Where do you work?",
        verbForm: "lavori",
        explanation: "Regular -are verb; takes avere in Passato Prossimo even though it's intransitive."
      },
      current: {
        tense: "Imperfetto",
        target: "Lavoravo in centro due anni fa.",
        phonetic: "lah-voh-RAH-voh een CHEHN-troh DOO-eh AHN-nee fah",
        english: "I used to work downtown two years ago.",
        verbForm: "Lavoravo",
        explanation: "Imperfetto describes ongoing work in the past."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Oggi ho lavorato dieci ore.",
        phonetic: "OHJ-jee oh lah-voh-RAH-toh DYEH-chee OH-reh",
        english: "Today I worked ten hours.",
        verbForm: "ho lavorato",
        explanation: "Completed action with specific duration → Passato Prossimo."
      }
    }
  },
  {
    id: "amare",
    target: "amare",
    phonetic: "ah-MAH-reh",
    english: "to love",
    cluster: "-are Regular Verbs",
    stem: "am-",
    transitivity: "Transitive (Avere)",
    hasGrammarTrait: false,
    isIrregular: false,
    mnemonic: "Think of 'AMOROUS' / 'Amore' — to love.",
    conjugations: {
      habitual: { m_sg: "amo / ami", f_sg: "ama", m_pl: "amiamo / amate / amano" },
      continuous: { m_sg: "amavo / amavi", f_sg: "amava", m_pl: "amavamo / amavate / amavano" },
      past: { m_sg: "ho amato / hai amato", f_sg: "ha amato", m_pl: "abbiamo amato / avete amato / hanno amato" },
      imperative: { tu: "ama!", tum: "ami!", aap: "amate!" }
    },
    example: { target: "Ti amo!", phonetic: "tee AH-moh", english: "I love you!" },
    examples: {
      present: {
        tense: "Presente",
        target: "Amo la cucina italiana.",
        phonetic: "AH-moh lah koo-CHEE-nah ee-tah-LYAH-nah",
        english: "I love Italian cuisine.",
        verbForm: "Amo",
        explanation: "For friends/family, Italians often say 'Ti voglio bene' instead of 'Ti amo' (which is romantic)."
      },
      current: {
        tense: "Imperfetto",
        target: "Amava leggere prima di dormire.",
        phonetic: "ah-MAH-vah LEHJ-jeh-reh PREE-mah dee dohr-MEE-reh",
        english: "He/she loved reading before sleeping.",
        verbForm: "Amava",
        explanation: "Regular -are imperfetto."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Ho amato quel film!",
        phonetic: "oh ah-MAH-toh kwehl feelm",
        english: "I loved that movie!",
        verbForm: "Ho amato",
        explanation: "Regular past participle 'amato' with avere."
      }
    }
  },

  // --- 4. -ere Verbs ---
  {
    id: "prendere",
    target: "prendere",
    phonetic: "PREHN-deh-reh",
    english: "to take / to get / to order (food)",
    cluster: "-ere Verbs",
    stem: "prend- / pres-",
    transitivity: "Transitive (Avere)",
    hasGrammarTrait: false,
    isIrregular: true,
    irregularNote: "Regular in Present and Imperfetto, but irregular past participle: PRESO ('ho preso').",
    mnemonic: "Think of 'APPREHEND' — to grab or TAKE (and used for ordering coffee/food!).",
    conjugations: {
      habitual: { m_sg: "prendo / prendi", f_sg: "prende", m_pl: "prendiamo / prendete / prendono" },
      continuous: { m_sg: "prendevo / prendevi", f_sg: "prendeva", m_pl: "prendevamo / prendevate / prendevano" },
      past: { m_sg: "ho preso / hai preso", f_sg: "ha preso", m_pl: "abbiamo preso / avete preso / hanno preso" },
      imperative: { tu: "prendi!", tum: "prenda!", aap: "prendete!" }
    },
    example: { target: "Prendo un espresso.", phonetic: "PREHN-doh oon ehs-PREHS-soh", english: "I'll have an espresso." },
    examples: {
      present: {
        tense: "Presente",
        target: "Prendiamo il treno delle nove.",
        phonetic: "prehn-DYAH-moh eel TREH-noh DEHL-leh NOH-veh",
        english: "We're taking the nine o'clock train.",
        verbForm: "Prendiamo",
        explanation: "Standard -ere endings: -o, -i, -e, -iamo, -ete, -ono."
      },
      current: {
        tense: "Imperfetto",
        target: "Prendevo sempre l'autobus.",
        phonetic: "prehn-DEH-voh SEHM-preh LOW-toh-boos",
        english: "I always used to take the bus.",
        verbForm: "Prendevo",
        explanation: "Regular -ere imperfetto (-evo, -evi, -eva)."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Hai preso l'ombrello?",
        phonetic: "eye PREH-zoh lohm-BREHL-loh",
        english: "Did you take the umbrella?",
        verbForm: "Hai preso",
        explanation: "Irregular past participle 'preso' (not *prenduto)."
      }
    }
  },
  {
    id: "leggere",
    target: "leggere",
    phonetic: "LEHJ-jeh-reh",
    english: "to read",
    cluster: "-ere Verbs",
    stem: "legg- / lett-",
    transitivity: "Transitive (Avere)",
    hasGrammarTrait: false,
    isIrregular: true,
    irregularNote: "Pronunciation shift: hard 'gg' in leggo/leggono, soft 'jj' in leggi/legge/leggiamo/leggete! Past participle: LETTO.",
    mnemonic: "Think of 'LEGIBLE' — able to be READ.",
    conjugations: {
      habitual: { m_sg: "leggo / leggi", f_sg: "legge", m_pl: "leggiamo / leggete / leggono" },
      continuous: { m_sg: "leggevo / leggevi", f_sg: "leggeva", m_pl: "leggevamo / leggevate / leggevano" },
      past: { m_sg: "ho letto / hai letto", f_sg: "ha letto", m_pl: "abbiamo letto / avete letto / hanno letto" },
      imperative: { tu: "leggi!", tum: "legga!", aap: "leggete!" }
    },
    example: { target: "Leggo il giornale ogni mattina.", phonetic: "LEHG-goh eel johr-NAH-leh OH-nyee maht-TEE-nah", english: "I read the newspaper every morning." },
    examples: {
      present: {
        tense: "Presente",
        target: "Che libro stai leggendo? / Che libro leggi?",
        phonetic: "keh LEE-broh LEHJ-jee",
        english: "What book are you reading?",
        verbForm: "leggi",
        explanation: "Notice soft 'gg' before 'i'/'e' (LEHJ-jee) vs hard 'gg' before 'o' (LEHG-goh)."
      },
      current: {
        tense: "Imperfetto",
        target: "Mentre leggevo, è suonato il telefono.",
        phonetic: "MEHN-treh lehj-JEH-voh, eh swoh-NAH-toh eel teh-LEH-foh-noh",
        english: "While I was reading, the phone rang.",
        verbForm: "leggevo",
        explanation: "Classic Imperfetto (background action) + Passato Prossimo (interruption)."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Ho letto quel romanzo in due giorni.",
        phonetic: "oh LEHT-toh kwehl roh-MAHN-dzoh een DOO-eh JOHR-nee",
        english: "I read that novel in two days.",
        verbForm: "Ho letto",
        explanation: "Irregular past participle 'letto' (same spelling as 'bed'!)."
      }
    }
  },
  {
    id: "scrivere",
    target: "scrivere",
    phonetic: "SKREE-veh-reh",
    english: "to write",
    cluster: "-ere Verbs",
    stem: "scriv- / scritt-",
    transitivity: "Transitive (Avere)",
    hasGrammarTrait: false,
    isIrregular: true,
    irregularNote: "Regular Present & Imperfetto, irregular past participle: SCRITTO.",
    mnemonic: "Think of 'SCRIBE' / 'SCRIPT' — to WRITE.",
    conjugations: {
      habitual: { m_sg: "scrivo / scrivi", f_sg: "scrive", m_pl: "scriviamo / scrivete / scrivono" },
      continuous: { m_sg: "scrivevo / scrivevi", f_sg: "scriveva", m_pl: "scrivevamo / scrivevate / scrivevano" },
      past: { m_sg: "ho scritto / hai scritto", f_sg: "ha scritto", m_pl: "abbiamo scritto / avete scritto / hanno scritto" },
      imperative: { tu: "scrivi!", tum: "scriva!", aap: "scrivete!" }
    },
    example: { target: "Ti scrivo un messaggio dopo.", phonetic: "tee SKREE-voh oon mehs-SAHJ-joh DOH-poh", english: "I'll text you later." },
    examples: {
      present: {
        tense: "Presente",
        target: "Scrivo una lettera agli amici.",
        phonetic: "SKREE-voh OO-nah LEHT-teh-rah AH-lyee ah-MEE-chee",
        english: "I'm writing a letter to friends.",
        verbForm: "Scrivo",
        explanation: "Regular -ere present endings."
      },
      current: {
        tense: "Imperfetto",
        target: "Scriveva poesie da giovane.",
        phonetic: "skree-VEH-vah poh-eh-ZEE-eh dah JOH-vah-neh",
        english: "He/she used to write poems when young.",
        verbForm: "Scriveva",
        explanation: "Habitual past action → Imperfetto."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Chi ha scritto questo messaggio?",
        phonetic: "kee ah SKREET-toh KWEHS-toh mehs-SAHJ-joh",
        english: "Who wrote this message?",
        verbForm: "ha scritto",
        explanation: "Irregular past participle 'scritto' (like 'script')."
      }
    }
  },
  {
    id: "vedere",
    target: "vedere",
    phonetic: "veh-DEH-reh",
    english: "to see",
    cluster: "-ere Verbs",
    stem: "ved- / vist-",
    transitivity: "Transitive (Avere)",
    hasGrammarTrait: false,
    isIrregular: true,
    irregularNote: "Regular Present & Imperfetto; irregular past participle: VISTO (also veduto).",
    mnemonic: "Think of 'VIDEO' / 'VISTA' — to SEE.",
    conjugations: {
      habitual: { m_sg: "vedo / vedi", f_sg: "vede", m_pl: "vediamo / vedete / vedono" },
      continuous: { m_sg: "vedevo / vedevi", f_sg: "vedeva", m_pl: "vedevamo / vedevate / vedevano" },
      past: { m_sg: "ho visto / hai visto", f_sg: "ha visto", m_pl: "abbiamo visto / avete visto / hanno visto" },
      imperative: { tu: "vedi!", tum: "veda!", aap: "vedete!" }
    },
    example: { target: "Ci vediamo domani!", phonetic: "chee veh-DYAH-moh doh-MAH-nee", english: "See you tomorrow!" },
    examples: {
      present: {
        tense: "Presente",
        target: "Non vedo bene senza occhiali.",
        phonetic: "nohn VEH-doh BEH-neh SEHN-tsah ohk-KYAH-lee",
        english: "I can't see well without glasses.",
        verbForm: "vedo",
        explanation: "Reflexive 'ci vediamo' literally means 'we see each other' = 'see you!'."
      },
      current: {
        tense: "Imperfetto",
        target: "Dalla finestra si vedeva il mare.",
        phonetic: "DAHL-lah fee-NEHS-trah see veh-DEH-vah eel MAH-reh",
        english: "From the window you could see the sea.",
        verbForm: "vedeva",
        explanation: "Descriptive past scene → Imperfetto."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Hai visto le mie chiavi?",
        phonetic: "eye VEES-toh leh MEE-eh KYAH-vee",
        english: "Have you seen my keys?",
        verbForm: "Hai visto",
        explanation: "Irregular past participle 'visto'."
      }
    }
  },

  // --- 5. -ire & -isc- Verbs ---
  {
    id: "dormire",
    target: "dormire",
    phonetic: "dohr-MEE-reh",
    english: "to sleep",
    cluster: "-ire & -isc- Verbs",
    stem: "dorm-",
    transitivity: "Intransitive (Avere)",
    hasGrammarTrait: false,
    isIrregular: false,
    mnemonic: "Think of 'DORM' / 'DORMANT' — a place to SLEEP.",
    conjugations: {
      habitual: { m_sg: "dormo / dormi", f_sg: "dorme", m_pl: "dormiamo / dormite / dormono" },
      continuous: { m_sg: "dormivo / dormivi", f_sg: "dormiva", m_pl: "dormivamo / dormivate / dormivano" },
      past: { m_sg: "ho dormito / hai dormito", f_sg: "ha dormito", m_pl: "abbiamo dormito / avete dormito / hanno dormito" },
      imperative: { tu: "dormi!", tum: "dorma!", aap: "dormite!" }
    },
    example: { target: "Dormo otto ore a notte.", phonetic: "DOHR-moh OHT-toh OH-reh ah NOHT-teh", english: "I sleep eight hours a night." },
    examples: {
      present: {
        tense: "Presente",
        target: "Il gatto dorme sul divano.",
        phonetic: "eel GAHT-toh DOHR-meh sool dee-VAH-noh",
        english: "The cat is sleeping on the couch.",
        verbForm: "dorme",
        explanation: "Model regular -ire verb (no -isc- infix)."
      },
      current: {
        tense: "Imperfetto",
        target: "Quando sei arrivato, dormivo già.",
        phonetic: "KWAHN-doh say ahr-ree-VAH-toh, dohr-MEE-voh jah",
        english: "When you arrived, I was already sleeping.",
        verbForm: "dormivo",
        explanation: "Regular -ire imperfetto (-ivo, -ivi, -iva)."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Hai dormito bene?",
        phonetic: "eye dohr-MEE-toh BEH-neh",
        english: "Did you sleep well?",
        verbForm: "Hai dormito",
        explanation: "Regular -ire past participle in -ito (dormito)."
      }
    }
  },
  {
    id: "capire",
    target: "capire",
    phonetic: "kah-PEE-reh",
    english: "to understand",
    cluster: "-ire & -isc- Verbs",
    stem: "capisc- / cap-",
    transitivity: "Transitive (Avere)",
    hasGrammarTrait: false,
    isIrregular: true,
    irregularNote: "Model -ISC- verb! Inserts -isc- in io/tu/lui/loro: capisco, capisci, capisce, capiscono (but noi capiamo, voi capite).",
    mnemonic: "'Capisce?' — famous Italian-American movie line meaning 'Do you understand?'",
    conjugations: {
      habitual: { m_sg: "capisco / capisci", f_sg: "capisce", m_pl: "capiamo / capite / capiscono" },
      continuous: { m_sg: "capivo / capivi", f_sg: "capiva", m_pl: "capivamo / capivate / capivano" },
      past: { m_sg: "ho capito / hai capito", f_sg: "ha capito", m_pl: "abbiamo capito / avete capito / hanno capito" },
      imperative: { tu: "capisci!", tum: "capisca!", aap: "capite!" }
    },
    example: { target: "Non capisco, puoi parlare più piano?", phonetic: "nohn kah-PEES-koh, pwoh-ee pahr-LAH-reh pyoo PYAH-noh", english: "I don't understand, can you speak more slowly?" },
    examples: {
      present: {
        tense: "Presente",
        target: "Capisci tutto quello che dice?",
        phonetic: "kah-PEE-shee TOOT-toh KWEHL-loh keh DEE-cheh",
        english: "Do you understand everything he/she says?",
        verbForm: "Capisci",
        explanation: "Like finire (finisco) and preferire (preferisco), inserts -isc- inside the boot."
      },
      current: {
        tense: "Imperfetto",
        target: "All'inizio non capivo niente.",
        phonetic: "ahl-lee-NEE-tsyoh nohn kah-PEE-voh NYEHN-teh",
        english: "At the beginning I didn't understand anything.",
        verbForm: "capivo",
        explanation: "No -isc- in Imperfetto — completely regular!"
      },
      past: {
        tense: "Passato Prossimo",
        target: "Ah, adesso ho capito!",
        phonetic: "ah, ah-DEHS-soh oh kah-PEE-toh",
        english: "Ah, now I get it! (lit. I have understood)",
        verbForm: "ho capito",
        explanation: "'Ho capito!' is the standard way to say 'Got it!'."
      }
    }
  },
  {
    id: "venire",
    target: "venire",
    phonetic: "veh-NEE-reh",
    english: "to come",
    cluster: "-ire & -isc- Verbs",
    stem: "veng- / vien- / venut-",
    transitivity: "Intransitive (Essere)",
    hasGrammarTrait: true,
    isIrregular: true,
    irregularNote: "Irregular present: vengo, vieni, viene, veniamo, venite, vengono. Takes ESSERE + past participle 'venuto/a'!",
    mnemonic: "Think of 'VENUE' or 'Veni, vidi, vici' ('I CAME, I saw, I conquered').",
    conjugations: {
      habitual: { m_sg: "vengo / vieni", f_sg: "viene", m_pl: "veniamo / venite / vengono" },
      continuous: { m_sg: "venivo / venivi", f_sg: "veniva", m_pl: "venivamo / venivate / venivano" },
      past: { m_sg: "sono venuto / sei venuto", f_sg: "è venuto/a", m_pl: "siamo venuti / siete venuti / sono venuti" },
      imperative: { tu: "vieni!", tum: "venga!", aap: "venite!" }
    },
    example: { target: "Vieni con me!", phonetic: "VYEH-nee kohn meh", english: "Come with me!" },
    examples: {
      present: {
        tense: "Presente",
        target: "Da dove vieni?",
        phonetic: "dah DOH-veh VYEH-nee",
        english: "Where do you come from?",
        verbForm: "vieni",
        explanation: "Stem changes to veng- (io/loro) and vien- (tu/lui)."
      },
      current: {
        tense: "Imperfetto",
        target: "Veniva spesso a trovarci.",
        phonetic: "veh-NEE-vah SPEHS-soh ah troh-VAHR-chee",
        english: "He/she often used to come visit us.",
        verbForm: "Veniva",
        explanation: "Regular -ire imperfetto on stem ven-."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Maria è venuta alla festa.",
        phonetic: "mah-REE-ah eh veh-NOO-tah AHL-lah FEHS-tah",
        english: "Maria came to the party.",
        verbForm: "è venuta",
        explanation: "Motion verb → takes ESSERE, and 'venuta' agrees with feminine Maria."
      }
    }
  },
  {
    id: "uscire",
    target: "uscire",
    phonetic: "oo-SHEE-reh",
    english: "to go out / to exit",
    cluster: "-ire & -isc- Verbs",
    stem: "esc- / usc-",
    transitivity: "Intransitive (Essere)",
    hasGrammarTrait: true,
    isIrregular: true,
    irregularNote: "Boot-verb stem change u→e: esco, esci, esce, escono (noi usciamo, voi uscite). Takes ESSERE in Passato Prossimo!",
    mnemonic: "Think of 'USHER' — showing someone OUT (uscita = exit).",
    conjugations: {
      habitual: { m_sg: "esco / esci", f_sg: "esce", m_pl: "usciamo / uscite / escono" },
      continuous: { m_sg: "uscivo / uscivi", f_sg: "usciva", m_pl: "uscivamo / uscivate / uscivano" },
      past: { m_sg: "sono uscito / sei uscito", f_sg: "è uscito/a", m_pl: "siamo usciti / siete usciti / sono usciti" },
      imperative: { tu: "esci!", tum: "esca!", aap: "uscite!" }
    },
    example: { target: "Usciamo stasera?", phonetic: "oo-SHAH-moh stah-SEH-rah", english: "Shall we go out tonight?" },
    examples: {
      present: {
        tense: "Presente",
        target: "Esco di casa alle sette.",
        phonetic: "EHS-koh dee KAH-zah AHL-leh SEHT-teh",
        english: "I leave the house at seven.",
        verbForm: "Esco",
        explanation: "Notice hard 'sc' (EHS-koh) vs soft 'sc' (EH-shee, EH-sheh)!"
      },
      current: {
        tense: "Imperfetto",
        target: "Da studente uscivo ogni venerdì.",
        phonetic: "dah stoo-DEHN-teh oo-SHEE-voh OH-nyee veh-nehr-DEE",
        english: "As a student I used to go out every Friday.",
        verbForm: "uscivo",
        explanation: "Regular imperfetto on stem usc-."
      },
      past: {
        tense: "Passato Prossimo",
        target: "Siamo usciti con gli amici.",
        phonetic: "SYAH-moh oo-SHEE-tee kohn lyee ah-MEE-chee",
        english: "We went out with friends.",
        verbForm: "Siamo usciti",
        explanation: "Takes ESSERE in Passato Prossimo and agrees in gender/number."
      }
    }
  }
];

if (typeof window !== 'undefined') {
  window.VERB_CURRICULUM = VERB_CURRICULUM;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VERB_CURRICULUM };
}
