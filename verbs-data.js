// Core Curated Hungarian Verb Curriculum for English Speakers (Magyar Igelabor)
// Annotated with Indefinite (Alanyi) vs. Definite (Tárgyas) conjugation, -ik verbs, past tense (-t/-ott/-ett/-ött), imperatives (-j!), and mnemonics.
// Field names follow the Language Lab Engine schema (target = Hungarian word, phonetic = pronunciation guide, hasGrammarTrait = takes Definite conjugation).

const VERB_CURRICULUM = [
  {
    id: "lenni",
    target: "van (lenni)",
    phonetic: "vawn (leh-nni)",
    english: "to be / to exist",
    cluster: "The Big 4 Irregulars",
    stem: "van / volt / lesz",
    transitivity: "Intransitive",
    hasGrammarTrait: false,
    isIrregular: true,
    irregularNote: "Suppletive stems: Present (vagyok, vagy, van, vagyunk, vagytok, vannak), Past (volt-), Future (lesz-). Omitted in 3rd-person 'he is tall' statements!",
    mnemonic: "Think of a 'VAN' — 'There IS a van outside' (van).",
    conjugations: {
      habitual: {
        m_sg: "vagyok / vagy / van",
        f_sg: "van (ő)",
        m_pl: "vagyunk / vagytok / vannak",
        f_pl: "vannak (ők)"
      },
      continuous: {
        m_sg: "leszek / leszel / lesz",
        f_sg: "lesz (will be)",
        m_pl: "leszünk / lesztek / lesznek",
        f_pl: "lesznek"
      },
      past: {
        m_sg: "voltam / voltál / volt",
        m_pl: "voltunk / voltatok / voltak",
        f_sg: "volt (ő)",
        f_pl: "voltak (ők)"
      },
      imperative: {
        tu: "légy!",
        tum: "legyél!",
        aap: "legyen!"
      }
    },
    example: {
      target: "Budapesten vagyok.",
      phonetic: "bu-daw-pesh-ten vaw-dyok",
      english: "I am in Budapest."
    },
    examples: {
      present: {
        tense: "Present (Indefinite)",
        target: "Én tanár vagyok, ő pedig diák.",
        phonetic: "ayn taw-naar vaw-dyok, oe peh-dig dee-aak",
        english: "I am a teacher, and he/she is a student.",
        verbForm: "vagyok",
        explanation: "vagyok (I am) — 3rd person 'van' is dropped when stating identity/adjectives!"
      },
      current: {
        tense: "Future (lesz)",
        target: "Holnap otthon leszek.",
        phonetic: "hol-nawp ott-hon leh-sek",
        english: "Tomorrow I will be at home.",
        verbForm: "leszek",
        explanation: "Uses the 'lesz-' stem for future 'will be'"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Tegnap jó idő volt.",
        phonetic: "teg-nawp yoh ee-doe volt",
        english: "Yesterday the weather was good.",
        verbForm: "volt",
        explanation: "Past stem is 'volt-' (voltam, voltál, volt)"
      }
    }
  },
  {
    id: "menni",
    target: "megy (menni)",
    phonetic: "medy (men-ni)",
    english: "to go",
    cluster: "The Big 4 Irregulars",
    stem: "megy- / ment-",
    transitivity: "Intransitive",
    hasGrammarTrait: false,
    isIrregular: true,
    irregularNote: "Present uses megy-/mé-: megyek, mész, megy, megyünk, mentek, mennek. Past uses ment-.",
    mnemonic: "'Megy' sounds like 'medj' — imagine marching on a pilgrimage.",
    conjugations: {
      habitual: {
        m_sg: "megyek / mész / megy",
        f_sg: "megy (ő)",
        m_pl: "megyünk / mentek / mennek",
        f_pl: "mennek"
      },
      continuous: {
        m_sg: "menni fogok (will go)",
        f_sg: "menni fog",
        m_pl: "menni fogunk",
        f_pl: "menni fognak"
      },
      past: {
        m_sg: "mentem / mentél / ment",
        m_pl: "mentünk / mentetek / mentek",
        f_sg: "ment",
        f_pl: "mentek"
      },
      imperative: {
        tu: "menj!",
        tum: "menjél!",
        aap: "menjen!"
      }
    },
    example: {
      target: "Most hazamegyek.",
      phonetic: "mosht haw-zaw-meh-dyek",
      english: "I am going home now."
    },
    examples: {
      present: {
        tense: "Present (Indefinite)",
        target: "Reggel munkába megyek.",
        phonetic: "reg-gel mun-kaa-baw meh-dyek",
        english: "In the morning I go to work.",
        verbForm: "megyek",
        explanation: "Intransitive motion verb (only has Indefinite forms)"
      },
      current: {
        tense: "Imperative / Subjunctive",
        target: "Menjünk együtt kávézni!",
        phonetic: "men-yuenk eh-dyuett kaa-vayz-ni",
        english: "Let's go get coffee together!",
        verbForm: "Menjünk",
        explanation: "1st person plural imperative (-jünk)"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Tegnap moziba mentünk.",
        phonetic: "teg-nawp mo-zi-baw men-tuenk",
        english: "Yesterday we went to the cinema.",
        verbForm: "mentünk",
        explanation: "Past tense built on stem 'ment-'"
      }
    }
  },
  {
    id: "jonni",
    target: "jön (jönni)",
    phonetic: "yoen (yoen-ni)",
    english: "to come",
    cluster: "The Big 4 Irregulars",
    stem: "jön- / jött-",
    transitivity: "Intransitive",
    hasGrammarTrait: false,
    isIrregular: true,
    irregularNote: "Present: jövök, jössz, jön, jövünk, jöttök, jönnek. Imperative is colloquial 'gyere!' (or formal 'jöjjön!').",
    mnemonic: "'Jön' sounds like 'yawn' — you COME home tired and yawn.",
    conjugations: {
      habitual: {
        m_sg: "jövök / jössz / jön",
        f_sg: "jön (ő)",
        m_pl: "jövünk / jöttök / jönnek",
        f_pl: "jönnek"
      },
      continuous: {
        m_sg: "gyere! / gyertek! (come!)",
        f_sg: "jöjjön! (formal)",
        m_pl: "gyerünk! (let's go!)",
        f_pl: "jöjjenek!"
      },
      past: {
        m_sg: "jöttem / jöttél / jött",
        m_pl: "jöttünk / jöttetek / jöttek",
        f_sg: "jött",
        f_pl: "jöttek"
      },
      imperative: {
        tu: "gyere!",
        tum: "gyertek! (pl)",
        aap: "jöjjön!"
      }
    },
    example: {
      target: "Mindjárt jövök!",
      phonetic: "mind-yaart yoe-voek",
      english: "I'm coming right away!"
    },
    examples: {
      present: {
        tense: "Present (Indefinite)",
        target: "Mikor jössz haza?",
        phonetic: "mi-kor yoess haw-zaw",
        english: "When are you coming home?",
        verbForm: "jössz",
        explanation: "2nd person singular irregular 'jössz'"
      },
      current: {
        tense: "Everyday Imperative",
        target: "Gyere ide, kérlek!",
        phonetic: "dyeh-reh ee-deh kayr-lek",
        english: "Come here, please!",
        verbForm: "Gyere",
        explanation: "'Gyere!' is the universal everyday imperative for 'come!'"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "A vonat pontosan jött.",
        phonetic: "aw vo-nawt pon-to-shawn yoett",
        english: "The train came on time.",
        verbForm: "jött",
        explanation: "Past stem doubles the t: 'jött'"
      }
    }
  },
  {
    id: "csinal",
    target: "csinál",
    phonetic: "chi-naal",
    english: "to do / to make",
    cluster: "The Big 4 Irregulars",
    stem: "csinál-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: false,
    irregularNote: "Regular back-vowel verb. Takes Definite (-om/-od/-ja) with specific objects ('a kávét'), Indefinite (-ok/-sz) with 'mit?' or 'valamit'.",
    mnemonic: "Sounds like 'china' — MAKING fine china porcelain.",
    conjugations: {
      habitual: {
        m_sg: "csinálok / csinálsz / csinál",
        f_sg: "csinál (Indef.)",
        m_pl: "csinálunk / csináltok / csinálnak",
        f_pl: "csinálnak"
      },
      continuous: {
        m_sg: "csinálom / csinálod / csinálja",
        f_sg: "csinálja (Def.)",
        m_pl: "csináljuk / csináljátok / csinálják",
        f_pl: "csinálják"
      },
      past: {
        m_sg: "csináltam / csinált (Indef)",
        m_pl: "csináltam / csinálta (Def)",
        f_sg: "csinálta (Def.)",
        f_pl: "csinálták (Def.)"
      },
      imperative: {
        tu: "csinálj! (Indef)",
        tum: "csináld! (Def)",
        aap: "csinálja! (Formal)"
      }
    },
    example: {
      target: "Mit csinálsz most?",
      phonetic: "mit chi-naals mosht",
      english: "What are you doing now?"
    },
    examples: {
      present: {
        tense: "Indefinite (Alanyi)",
        target: "Reggelit csinálok.",
        phonetic: "reg-geh-lit chi-naa-lok",
        english: "I am making breakfast (unspecified).",
        verbForm: "csinálok",
        explanation: "Indefinite object ('reggelit' without 'a') → Indefinite ending -ok"
      },
      current: {
        tense: "Definite (Tárgyas)",
        target: "Megcsinálom a leckét.",
        phonetic: "meg-chi-naa-lom aw lets-kayt",
        english: "I am doing the homework (specific).",
        verbForm: "Megcsinálom",
        explanation: "Definite object ('a leckét' with 'a') → Definite ending -om"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Tegnap mit csináltál?",
        phonetic: "teg-nawp mit chi-naal-taal",
        english: "What did you do yesterday?",
        verbForm: "csináltál",
        explanation: "'Mit?' (what?) is always Indefinite in Hungarian!"
      }
    }
  },
  {
    id: "eszik",
    target: "eszik",
    phonetic: "eh-sik",
    english: "to eat (-ik verb)",
    cluster: "-ik Verbs & Dining",
    stem: "esz- / ev- / ett-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: true,
    irregularNote: "Irregular -ik verb! Indefinite 1st sg ends in -em ('eszem' or colloquial 'eszek'), Definite 1st sg is 'eszem' (I eat it), 3rd sg Definite is 'eszi'. Past is 'ettem / megette'.",
    mnemonic: "Think of 'ESZpresszó' & a snack — 'eszik' = eats.",
    conjugations: {
      habitual: {
        m_sg: "eszem (eszek) / eszel / eszik",
        f_sg: "eszik (Indef.)",
        m_pl: "eszünk / esztek / esznek",
        f_pl: "esznek"
      },
      continuous: {
        m_sg: "eszem / eszed / eszi",
        f_sg: "eszi (Def.)",
        m_pl: "esszük / eszitek / eszik",
        f_pl: "eszik (Def.)"
      },
      past: {
        m_sg: "ettem / ettél / evett (Indef)",
        m_pl: "ettem / etted / ette (Def)",
        f_sg: "evett (Indef) / ette (Def)",
        f_pl: "ettek / ették"
      },
      imperative: {
        tu: "egyél! (Indef)",
        tum: "edd meg! (Def)",
        aap: "egyen! (Formal)"
      }
    },
    example: {
      target: "Minden reggel almát eszem.",
      phonetic: "min-den reg-gel awl-maat eh-sem",
      english: "Every morning I eat an apple."
    },
    examples: {
      present: {
        tense: "Indefinite (Alanyi)",
        target: "Gulyást eszünk az étteremben.",
        phonetic: "gu-yaasht eh-suenk awz ayt-teh-rem-ben",
        english: "We are eating goulash in the restaurant.",
        verbForm: "eszünk",
        explanation: "Unspecified 'gulyást' (no 'a') uses Indefinite 'eszünk'"
      },
      current: {
        tense: "Definite (Tárgyas)",
        target: "Megettük a levest, most esszük a tortát.",
        phonetic: "meg-et-tuek aw leh-vesht, mosht es-suek aw tor-taat",
        english: "We ate the soup, now we are eating the cake.",
        verbForm: "esszük",
        explanation: "'a tortát' is definite → Definite 1st plural 'esszük'"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Tegnap finom lángost ettem.",
        phonetic: "teg-nawp fi-nom laan-gosht et-tem",
        english: "Yesterday I ate a delicious lángos.",
        verbForm: "ettem",
        explanation: "Irregular past stem 'ett-' (ettem, ettél, evett)"
      }
    }
  },
  {
    id: "iszik",
    target: "iszik",
    phonetic: "i-sik",
    english: "to drink (-ik verb)",
    cluster: "-ik Verbs & Dining",
    stem: "isz- / iv- / itt-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: true,
    irregularNote: "Back-vowel partner of 'eszik'! Indefinite: iszom/iszol/iszik; Definite: iszom/iszod/issza. Past: ittam / ivott (Indef), itta (Def).",
    mnemonic: "'Iszik' sounds like 'ice-sip' — sipping an iced drink.",
    conjugations: {
      habitual: {
        m_sg: "iszom (iszok) / iszol / iszik",
        f_sg: "iszik (Indef.)",
        m_pl: "iszunk / isztok / isznak",
        f_pl: "isznak"
      },
      continuous: {
        m_sg: "iszom / iszod / issza",
        f_sg: "issza (Def.)",
        m_pl: "isszuk / isszátok / isszák",
        f_pl: "isszák (Def.)"
      },
      past: {
        m_sg: "ittam / ittál / ivott (Indef)",
        m_pl: "ittam / ittad / itta (Def)",
        f_sg: "ivott (Indef) / itta (Def)",
        f_pl: "ittak / itták"
      },
      imperative: {
        tu: "igyál! (Indef)",
        tum: "idd meg! (Def)",
        aap: "igyon! (Formal)"
      }
    },
    example: {
      target: "Reggel kávét iszom.",
      phonetic: "reg-gel kaa-vayt i-som",
      english: "In the morning I drink coffee."
    },
    examples: {
      present: {
        tense: "Indefinite (Alanyi)",
        target: "Egy pohár vizet iszol?",
        phonetic: "edy po-haar vi-zet i-sol",
        english: "Are you drinking a glass of water?",
        verbForm: "iszol",
        explanation: "'Egy pohár vizet' (a glass of water) is Indefinite → iszol"
      },
      current: {
        tense: "Definite (Tárgyas)",
        target: "Ő már megissza a teát.",
        phonetic: "oe maar meg-is-saw aw teh-aat",
        english: "He/she is already drinking up the tea.",
        verbForm: "megissza",
        explanation: "'a teát' (the tea) is Definite → 3rd sg Definite 'issza'"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Este vörösbort ittunk.",
        phonetic: "esh-teh voe-roesh-bort it-tunk",
        english: "In the evening we drank red wine.",
        verbForm: "ittunk",
        explanation: "Past stem is 'itt-' (ittam, ittál, ivott, ittunk)"
      }
    }
  },
  {
    id: "alszik",
    target: "alszik",
    phonetic: "awl-sik",
    english: "to sleep (-ik verb)",
    cluster: "-ik Verbs & Dining",
    stem: "alsz- / alud-",
    transitivity: "Intransitive",
    hasGrammarTrait: false,
    isIrregular: true,
    irregularNote: "Present uses 'alsz-': alszom, alszol, alszik, alszunk, alszotok, alszanak. Past uses 'aludt-': aludtam, aludt.",
    mnemonic: "'Alszik' → 'All sick' people need to SLEEP to recover.",
    conjugations: {
      habitual: {
        m_sg: "alszom / alszol / alszik",
        f_sg: "alszik",
        m_pl: "alszunk / alszotok / alszanak",
        f_pl: "alszanak"
      },
      continuous: {
        m_sg: "aludni fogok (will sleep)",
        f_sg: "aludni fog",
        m_pl: "aludni fogunk",
        f_pl: "aludni fognak"
      },
      past: {
        m_sg: "aludtam / aludtál / aludt",
        m_pl: "aludtunk / aludtatok / aludtak",
        f_sg: "aludt",
        f_pl: "aludtak"
      },
      imperative: {
        tu: "aludj!",
        tum: "aludjatok! (pl)",
        aap: "aludjon!"
      }
    },
    example: {
      target: "A macska a kanapén alszik.",
      phonetic: "aw mawch-kaw aw kaw-naw-payn awl-sik",
      english: "The cat is sleeping on the sofa."
    },
    examples: {
      present: {
        tense: "Present (-ik verb)",
        target: "Nyolc órát alszom minden éjjel.",
        phonetic: "nyolts oh-raat awl-som min-den ay-yel",
        english: "I sleep eight hours every night.",
        verbForm: "alszom",
        explanation: "-ik verb: 1st person singular ends in -om (alszom)"
      },
      current: {
        tense: "Imperative",
        target: "Aludj jól!",
        phonetic: "aw-ludy yohl",
        english: "Sleep well!",
        verbForm: "Aludj",
        explanation: "Very common bedtime phrase: Aludj jól!"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Jól aludtál az éjjel?",
        phonetic: "yohl aw-lud-taal awz ay-yel",
        english: "Did you sleep well last night?",
        verbForm: "aludtál",
        explanation: "Past tense uses stem 'aludt-'"
      }
    }
  },
  {
    id: "lat",
    target: "lát",
    phonetic: "laat",
    english: "to see",
    cluster: "Perception & Mind",
    stem: "lát-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: false,
    irregularNote: "Classic showcase of Indefinite vs. Definite! 'Látok egy kutyát' (I see a dog) vs 'Látom a kutyát' (I see the dog). Also has -lak/-lek ('Látlak' = I see you).",
    mnemonic: "You SEE 'a LOT' (lát) with your eyes.",
    conjugations: {
      habitual: {
        m_sg: "látok / látsz / lát",
        f_sg: "lát (Indef.)",
        m_pl: "látunk / láttok / látnak",
        f_pl: "látnak"
      },
      continuous: {
        m_sg: "látom / látod / látja",
        f_sg: "látja (Def.)",
        m_pl: "látjuk / látjátok / látják",
        f_pl: "látják (Def.)"
      },
      past: {
        m_sg: "láttam / látott (Indef)",
        m_pl: "láttam / látta (Def)",
        f_sg: "látta (Def.)",
        f_pl: "látták (Def.)"
      },
      imperative: {
        tu: "láss! (Indef)",
        tum: "lásd! (Def)",
        aap: "lássa! (Formal)"
      }
    },
    example: {
      target: "Látom a Parlamentet.",
      phonetic: "laa-tom aw pawr-law-men-tet",
      english: "I see the Parliament."
    },
    examples: {
      present: {
        tense: "Indefinite (Alanyi)",
        target: "Látok egy szép madarat.",
        phonetic: "laa-tok edy sayp maw-daw-rawt",
        english: "I see a beautiful bird.",
        verbForm: "Látok",
        explanation: "'egy ... madarat' (a bird) is indefinite → Látok (-ok)"
      },
      current: {
        tense: "Definite (Tárgyas)",
        target: "Látod azt a magas épületet?",
        phonetic: "laa-tod awzt aw maw-gawsh ay-pue-leh-tet",
        english: "Do you see that tall building?",
        verbForm: "Látod",
        explanation: "'azt a ...' (that ...) is definite → Látod (-od)"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Már láttam ezt a filmet.",
        phonetic: "maar laat-tawm ezt aw fil-met",
        english: "I have already seen this movie.",
        verbForm: "láttam",
        explanation: "Past 1st sg is 'láttam' in both Indefinite and Definite!"
      }
    }
  },
  {
    id: "ker",
    target: "kér",
    phonetic: "kayr",
    english: "to ask for / to request / please",
    cluster: "Daily Essentials",
    stem: "kér-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: false,
    irregularNote: "Front-vowel transitive verb. 'Kérek egy kávét' (I'd like a coffee - Indef), 'Kérem a számlát' (I'd like the bill - Def), 'Kérlek' (Please, informal).",
    mnemonic: "When you CARE (kér), you ask politely: 'Egy kávét kérek!'",
    conjugations: {
      habitual: {
        m_sg: "kérek / kérsz / kér",
        f_sg: "kér (Indef.)",
        m_pl: "kérünk / kértek / kérnek",
        f_pl: "kérnek"
      },
      continuous: {
        m_sg: "kérem / kéred / kéri",
        f_sg: "kéri (Def.)",
        m_pl: "kérjük / kéritek / kérik",
        f_pl: "kérik (Def.)"
      },
      past: {
        m_sg: "kértem / kért (Indef)",
        m_pl: "kértem / kérte (Def)",
        f_sg: "kérte (Def.)",
        f_pl: "kérték (Def.)"
      },
      imperative: {
        tu: "kérj! (Indef)",
        tum: "kérd! (Def)",
        aap: "kérje! (Formal)"
      }
    },
    example: {
      target: "Egy kávét kérek szépen.",
      phonetic: "edy kaa-vayt kay-rek say-pen",
      english: "I would like a coffee, please."
    },
    examples: {
      present: {
        tense: "Indefinite (Alanyi)",
        target: "Egy pohár vizet kérek.",
        phonetic: "edy po-haar vi-zet kay-rek",
        english: "I'd like a glass of water.",
        verbForm: "kérek",
        explanation: "Ordering 'a' something uses Indefinite 'kérek'"
      },
      current: {
        tense: "Definite (Tárgyas)",
        target: "Kérem a számlát!",
        phonetic: "kay-rem aw saam-laat",
        english: "The bill, please! (I request the bill)",
        verbForm: "Kérem",
        explanation: "'a számlát' (the bill) is specific → Definite 'kérem'"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Segítséget kért tőlem.",
        phonetic: "sheh-geet-shay-get kayrt toe-lem",
        english: "He/she asked me for help.",
        verbForm: "kért",
        explanation: "3rd sg Indefinite past: kért"
      }
    }
  },
  {
    id: "szeret",
    target: "szeret",
    phonetic: "seh-ret",
    english: "to love / to like",
    cluster: "Perception & Mind",
    stem: "szeret-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: false,
    irregularNote: "'Szeretek úszni' (I like to swim - Indef, before infinitives!) vs 'Szeretem a zenét' (I love the music - Def). 'Szeretlek' = I love you!",
    mnemonic: "'Szeret' sounds like 'serenade' — you serenade someone you LOVE.",
    conjugations: {
      habitual: {
        m_sg: "szeretek / szeretsz / szeret",
        f_sg: "szeret (Indef.)",
        m_pl: "szeretünk / szerettek / szeretnek",
        f_pl: "szeretnek"
      },
      continuous: {
        m_sg: "szeretem / szereted / szereti",
        f_sg: "szereti (Def.)",
        m_pl: "szeretjük / szeretitek / szeretik",
        f_pl: "szeretik (Def.)"
      },
      past: {
        m_sg: "szerettem / szeretett (Indef)",
        m_pl: "szerettem / szerette (Def)",
        f_sg: "szerette (Def.)",
        f_pl: "szerették (Def.)"
      },
      imperative: {
        tu: "szeress! (Indef)",
        tum: "szeresd! (Def)",
        aap: "szeresse! (Formal)"
      }
    },
    example: {
      target: "Nagyon szeretem a magyar konyhát.",
      phonetic: "naw-dyon seh-reh-tem aw maw-dyawr kony-haat",
      english: "I really love Hungarian cuisine."
    },
    examples: {
      present: {
        tense: "Indefinite (Before Infinitive)",
        target: "Szeretek olvasni és utazni.",
        phonetic: "seh-reh-tek ol-vawsh-ni aysh u-tawz-ni",
        english: "I like to read and travel.",
        verbForm: "Szeretek",
        explanation: "Before an infinitive (-ni), 'szeret' takes Indefinite conjugation!"
      },
      current: {
        tense: "Definite (Specific Noun)",
        target: "Szereted a csokoládét?",
        phonetic: "seh-reh-ted aw cho-ko-laa-dayt",
        english: "Do you like chocolate?",
        verbForm: "Szereted",
        explanation: "In Hungarian, general nouns use the definite article ('a csokoládét') → Definite 'szereted'"
      },
      past: {
        tense: "Conditional (Polite 'Would Like')",
        target: "Szeretnék rendelni.",
        phonetic: "seh-ret-nayk ren-del-ni",
        english: "I would like to order.",
        verbForm: "Szeretnék",
        explanation: "'Szeretnék' (conditional) is the most polite way to say 'I would like'"
      }
    }
  },
  {
    id: "tud",
    target: "tud",
    phonetic: "tud",
    english: "to know (a fact / how to)",
    cluster: "Perception & Mind",
    stem: "tud-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: false,
    irregularNote: "Used for knowing facts ('Tudom' = I know it) or knowing how to do something ('Tudok magyarul' = I know Hungarian, Indefinite).",
    mnemonic: "A 'TUDor' tutor KNOWS everything.",
    conjugations: {
      habitual: {
        m_sg: "tudok / tudsz / tud",
        f_sg: "tud (Indef.)",
        m_pl: "tudunk / tudtok / tudnak",
        f_pl: "tudnak"
      },
      continuous: {
        m_sg: "tudom / tudod / tudja",
        f_sg: "tudja (Def.)",
        m_pl: "tudjuk / tudjátok / tudják",
        f_pl: "tudják (Def.)"
      },
      past: {
        m_sg: "tudtam / tudott (Indef)",
        m_pl: "tudtam / tudta (Def)",
        f_sg: "tudta (Def.)",
        f_pl: "tudták (Def.)"
      },
      imperative: {
        tu: "tudj! (Indef)",
        tum: "tudd! (Def)",
        aap: "tudja! (Formal)"
      }
    },
    example: {
      target: "Nem tudom, hol van a kulcs.",
      phonetic: "nem tu-dom, hol vawn aw kulch",
      english: "I don't know where the key is."
    },
    examples: {
      present: {
        tense: "Indefinite (Ability / -ni)",
        target: "Tudsz úszni?",
        phonetic: "tuds oos-ni",
        english: "Do you know how to swim?",
        verbForm: "Tudsz",
        explanation: "Before an infinitive ('úszni'), 'tud' takes Indefinite conjugation"
      },
      current: {
        tense: "Definite (That-clause / It)",
        target: "Tudom a választ!",
        phonetic: "tu-dom aw vaa-lawst",
        english: "I know the answer!",
        verbForm: "Tudom",
        explanation: "Knowing a specific fact or 'that...' clause always uses Definite ('tudom')"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Ezt nem tudtam!",
        phonetic: "ezt nem tud-tawm",
        english: "I didn't know that!",
        verbForm: "tudtam",
        explanation: "'Ezt' (this) is definite → 'Nem tudtam'"
      }
    }
  },
  {
    id: "beszel",
    target: "beszél",
    phonetic: "beh-sayl",
    english: "to speak / to talk",
    cluster: "Study & Communication",
    stem: "beszél-",
    transitivity: "Intransitive",
    hasGrammarTrait: false,
    isIrregular: false,
    irregularNote: "Usually Intransitive! Languages take the adverbial suffix -ul/-ül ('magyarul beszélek' = I speak in-Hungarian), NOT a direct object.",
    mnemonic: "Don't 'BE SILent' (beszél) — SPEAK up!",
    conjugations: {
      habitual: {
        m_sg: "beszélek / beszélsz / beszél",
        f_sg: "beszél",
        m_pl: "beszélünk / beszéltek / beszélnek",
        f_pl: "beszélnek"
      },
      continuous: {
        m_sg: "beszélem / beszéled / beszéli",
        f_sg: "beszéli (rare Def.)",
        m_pl: "beszéljük / beszélitek / beszélik",
        f_pl: "beszélik"
      },
      past: {
        m_sg: "beszéltem / beszéltél / beszélt",
        m_pl: "beszéltünk / beszéltetek / beszéltek",
        f_sg: "beszélt",
        f_pl: "beszéltek"
      },
      imperative: {
        tu: "beszélj!",
        tum: "beszéljetek! (pl)",
        aap: "beszéljen! (Formal)"
      }
    },
    example: {
      target: "Egy kicsit beszélek magyarul.",
      phonetic: "edy ki-chit beh-say-lek maw-dyaw-rul",
      english: "I speak a little Hungarian."
    },
    examples: {
      present: {
        tense: "Present (Indefinite)",
        target: "Beszélsz angolul?",
        phonetic: "beh-sayls awn-go-lul",
        english: "Do you speak English?",
        verbForm: "Beszélsz",
        explanation: "Languages use -ul/-ül (adverbial), so 'beszél' stays Indefinite"
      },
      current: {
        tense: "Imperative",
        target: "Beszélj lassabban, kérlek!",
        phonetic: "beh-sayly lawsh-shawb-bawn, kayr-lek",
        english: "Speak more slowly, please!",
        verbForm: "Beszélj",
        explanation: "Imperative adds -j to the stem: beszélj!"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Tegnap beszéltem vele telefonon.",
        phonetic: "teg-nawp beh-sayl-tem veh-leh teh-leh-fo-non",
        english: "Yesterday I spoke with him/her on the phone.",
        verbForm: "beszéltem",
        explanation: "Front-vowel past tense: beszéltem"
      }
    }
  },
  {
    id: "ert",
    target: "ért",
    phonetic: "ayrt",
    english: "to understand",
    cluster: "Study & Communication",
    stem: "ért-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: false,
    irregularNote: "Stem ends in -rt (two consonants), so 3rd sg past adds linking vowel -ett: 'értett'. 'Értem!' = I understand (it)! 'Nem értek magyarul' = I don't understand Hungarian.",
    mnemonic: "When you HEAR IT ('ért'), you UNDERSTAND it.",
    conjugations: {
      habitual: {
        m_sg: "értek / értesz / ért",
        f_sg: "ért (Indef.)",
        m_pl: "értünk / értetek / értenek",
        f_pl: "értenek"
      },
      continuous: {
        m_sg: "értem / érted / érti",
        f_sg: "érti (Def.)",
        m_pl: "értjük / értitek / értik",
        f_pl: "értik (Def.)"
      },
      past: {
        m_sg: "értettem / értett (Indef)",
        m_pl: "értettem / értette (Def)",
        f_sg: "értette (Def.)",
        f_pl: "értették (Def.)"
      },
      imperative: {
        tu: "érts! (Indef)",
        tum: "értsd meg! (Def)",
        aap: "értse! (Formal)"
      }
    },
    example: {
      target: "Mindent értek, köszönöm!",
      phonetic: "min-dent ayr-tek, koe-soe-noem",
      english: "I understand everything, thank you!"
    },
    examples: {
      present: {
        tense: "Indefinite ('Mindent')",
        target: "Mindent értesz?",
        phonetic: "min-dent ayr-tes",
        english: "Do you understand everything?",
        verbForm: "értesz",
        explanation: "'Mindent' (everything) counts as Indefinite in Hungarian!"
      },
      current: {
        tense: "Definite ('It / The question')",
        target: "Igen, értem a kérdést.",
        phonetic: "i-gen, ayr-tem aw kayr-daysht",
        english: "Yes, I understand the question.",
        verbForm: "értem",
        explanation: "Standalone 'Értem!' ('I understand it') is always Definite"
      },
      past: {
        tense: "Past Tense (-ett)",
        target: "Nem értettem, amit mondott.",
        phonetic: "nem ayr-tet-tem, aw-mit mon-dott",
        english: "I didn't understand what he/she said.",
        verbForm: "értettem",
        explanation: "Because 'ért' ends in -rt, past tense inserts -ett-: értettem"
      }
    }
  },
  {
    id: "tanul",
    target: "tanul",
    phonetic: "taw-nul",
    english: "to study / to learn",
    cluster: "Study & Communication",
    stem: "tanul-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: false,
    irregularNote: "Regular back-vowel verb. 'Magyarul tanulok' (I am learning Hungarian - Indef) vs 'Tanulom a szavakat' (I am studying the words - Def).",
    mnemonic: "Going through a 'TUNNEL' (tanul) of books to STUDY.",
    conjugations: {
      habitual: {
        m_sg: "tanulok / tanulsz / tanul",
        f_sg: "tanul (Indef.)",
        m_pl: "tanulunk / tanultok / tanulnak",
        f_pl: "tanulnak"
      },
      continuous: {
        m_sg: "tanulom / tanulod / tanulja",
        f_sg: "tanulja (Def.)",
        m_pl: "tanuljuk / tanuljátok / tanulják",
        f_pl: "tanulják (Def.)"
      },
      past: {
        m_sg: "tanultam / tanult (Indef)",
        m_pl: "tanultam / tanulta (Def)",
        f_sg: "tanulta (Def.)",
        f_pl: "tanulták (Def.)"
      },
      imperative: {
        tu: "tanulj! (Indef)",
        tum: "tanuld meg! (Def)",
        aap: "tanuljon! (Formal)"
      }
    },
    example: {
      target: "Minden nap magyarul tanulok.",
      phonetic: "min-den nawp maw-dyaw-rul taw-nu-lok",
      english: "Every day I study Hungarian."
    },
    examples: {
      present: {
        tense: "Indefinite (Alanyi)",
        target: "Hol tanulsz magyarul?",
        phonetic: "hol taw-nuls maw-dyaw-rul",
        english: "Where do you study Hungarian?",
        verbForm: "tanulsz",
        explanation: "General activity / adverbial 'magyarul' → Indefinite 'tanulsz'"
      },
      current: {
        tense: "Definite (Tárgyas)",
        target: "Most tanuljuk az igéket.",
        phonetic: "mosht taw-nul-yuk awz i-gay-ket",
        english: "Now we are studying the verbs.",
        verbForm: "tanuljuk",
        explanation: "'az igéket' (the verbs) is definite → 'tanuljuk'"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Sokat tanultam a vizsgára.",
        phonetic: "sho-kawt taw-nul-tawm aw vizh-gaa-raw",
        english: "I studied a lot for the exam.",
        verbForm: "tanultam",
        explanation: "Back-vowel past: tanul + tam"
      }
    }
  },
  {
    id: "olvas",
    target: "olvas",
    phonetic: "ol-vawsh",
    english: "to read",
    cluster: "Study & Communication",
    stem: "olvas-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: false,
    irregularNote: "Sibilant stem ending in -s! In 2nd sg Indefinite, takes -ol instead of -sz ('olvasol'). In Definite -j- assimilates to -ss-: 'olvassa', 'olvassuk'.",
    mnemonic: "'Olvas' → reading 'ALL VERSE' in a poetry book.",
    conjugations: {
      habitual: {
        m_sg: "olvasok / olvasol / olvas",
        f_sg: "olvas (Indef.)",
        m_pl: "olvasunk / olvastok / olvasnak",
        f_pl: "olvasnak"
      },
      continuous: {
        m_sg: "olvasom / olvasod / olvassa",
        f_sg: "olvassa (Def.)",
        m_pl: "olvassuk / olvassátok / olvassák",
        f_pl: "olvassák (Def.)"
      },
      past: {
        m_sg: "olvastam / olvasott (Indef)",
        m_pl: "olvastam / olvasta (Def)",
        f_sg: "olvasta (Def.)",
        f_pl: "olvasták (Def.)"
      },
      imperative: {
        tu: "olvass! (Indef)",
        tum: "olvasd el! (Def)",
        aap: "olvassa! (Formal)"
      }
    },
    example: {
      target: "Este könyvet olvasok.",
      phonetic: "esh-teh koeny-vet ol-vaw-shok",
      english: "In the evening I read a book."
    },
    examples: {
      present: {
        tense: "Indefinite (Sibilant -ol)",
        target: "Milyen könyvet olvasol?",
        phonetic: "mi-yen koeny-vet ol-vaw-shol",
        english: "What kind of book are you reading?",
        verbForm: "olvasol",
        explanation: "Because 'olvas' ends in sibilant -s, 2nd sg is 'olvasol' (not *olvassz)"
      },
      current: {
        tense: "Definite (-j- assimilation)",
        target: "Ő olvassa az újságot.",
        phonetic: "oe ol-vawsh-shaw awz ooy-shaa-got",
        english: "He/she is reading the newspaper.",
        verbForm: "olvassa",
        explanation: "olvas + ja assimilates to 'olvassa'!"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Elolvastam a levelet.",
        phonetic: "el-ol-vawsh-tawm aw leh-veh-let",
        english: "I read (finished reading) the letter.",
        verbForm: "Elolvastam",
        explanation: "Prefix 'el-' marks completion (read the whole thing)"
      }
    }
  },
  {
    id: "ir",
    target: "ír",
    phonetic: "eer",
    english: "to write",
    cluster: "Study & Communication",
    stem: "ír-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: false,
    irregularNote: "Even though 'í' looks like a front vowel, 'ír' is a historic BACK-VOWEL verb! So it takes back-vowel endings: írok, írom, írtam, írja.",
    mnemonic: "You WRITE in 'ink' with a quill by your 'EAR' (ír) — and remember it takes back vowels!",
    conjugations: {
      habitual: {
        m_sg: "írok / írsz / ír",
        f_sg: "ír (Indef.)",
        m_pl: "írunk / írtok / írnak",
        f_pl: "írnak"
      },
      continuous: {
        m_sg: "írom / írod / írja",
        f_sg: "írja (Def.)",
        m_pl: "írjuk / írjátok / írják",
        f_pl: "írják (Def.)"
      },
      past: {
        m_sg: "írtam / írt (Indef)",
        m_pl: "írtam / írta (Def)",
        f_sg: "írta (Def.)",
        f_pl: "írták (Def.)"
      },
      imperative: {
        tu: "írj! (Indef)",
        tum: "írd le! (Def)",
        aap: "írjon! (Formal)"
      }
    },
    example: {
      target: "Egy e-mailt írok a barátomnak.",
      phonetic: "edy e-mailt ee-rok aw baw-raa-tom-nawk",
      english: "I am writing an email to my friend."
    },
    examples: {
      present: {
        tense: "Indefinite (Back-vowel 'í'!)",
        target: "Mit írsz a füzetbe?",
        phonetic: "mit eers aw fue-zet-beh",
        english: "What are you writing in the notebook?",
        verbForm: "írsz",
        explanation: "'ír' takes back-vowel suffixes: írok, írunk, írtam"
      },
      current: {
        tense: "Definite (Tárgyas)",
        target: "Aláírom a szerződést.",
        phonetic: "aw-laa-ee-rom aw ser-zoe-daysht",
        english: "I am signing the contract.",
        verbForm: "Aláírom",
        explanation: "'a szerződést' is definite → Definite back-vowel '-om'"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Ki írta ezt a könyvet?",
        phonetic: "ki eer-taw ezt aw koeny-vet",
        english: "Who wrote this book?",
        verbForm: "írta",
        explanation: "'ezt a könyvet' (this book) is definite → 3rd sg Definite 'írta'"
      }
    }
  },
  {
    id: "vesz",
    target: "vesz",
    phonetic: "ves",
    english: "to buy / to take",
    cluster: "Objects & Actions",
    stem: "vesz- / vev- / vett-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: true,
    irregularNote: "Irregular front-vowel verb (same pattern as 'tesz' and 'visz'). Present: veszek/veszel/vesz (Indef), veszem/veszed/veszi (Def). Past: vettem/vett/vette.",
    mnemonic: "You BUY a new 'VESt' (vesz) at the market.",
    conjugations: {
      habitual: {
        m_sg: "veszek / veszel / vesz",
        f_sg: "vesz (Indef.)",
        m_pl: "veszünk / vesztek / vesznek",
        f_pl: "vesznek"
      },
      continuous: {
        m_sg: "veszem / veszed / veszi",
        f_sg: "veszi (Def.)",
        m_pl: "vesszük / veszitek / veszik",
        f_pl: "veszik (Def.)"
      },
      past: {
        m_sg: "vettem / vett (Indef)",
        m_pl: "vettem / vette (Def)",
        f_sg: "vette (Def.)",
        f_pl: "vették (Def.)"
      },
      imperative: {
        tu: "vegyél! (Indef)",
        tum: "vedd meg! (Def)",
        aap: "vegyen! (Formal)"
      }
    },
    example: {
      target: "Kenyeret veszek a boltban.",
      phonetic: "keh-nyeh-ret veh-sek aw bolt-bawn",
      english: "I am buying bread at the shop."
    },
    examples: {
      present: {
        tense: "Indefinite (Alanyi)",
        target: "Veszel egy jegyet?",
        phonetic: "veh-sel edy yeh-dyet",
        english: "Are you buying a ticket?",
        verbForm: "Veszel",
        explanation: "'egy jegyet' (a ticket) is indefinite → veszel"
      },
      current: {
        tense: "Definite (Tárgyas)",
        target: "Megveszem ezt a kabátot.",
        phonetic: "meg-veh-sem ezt aw kaw-baa-tot",
        english: "I'm buying this coat.",
        verbForm: "Megveszem",
        explanation: "'ezt a kabátot' (this coat) is definite → megveszem"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Hol vetted ezt a táskát?",
        phonetic: "hol vet-ted ezt aw taash-kaat",
        english: "Where did you buy this bag?",
        verbForm: "vetted",
        explanation: "Past stem is 'vett-' (2nd sg Definite: vetted)"
      }
    }
  },
  {
    id: "ad",
    target: "ad",
    phonetic: "awd",
    english: "to give",
    cluster: "Objects & Actions",
    stem: "ad-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: false,
    irregularNote: "Regular back-vowel verb. Past 3rd sg Indefinite uses linking vowel: 'adott', Definite: 'adta'.",
    mnemonic: "You GIVE an 'AD' (ad) to the newspaper.",
    conjugations: {
      habitual: {
        m_sg: "adok / adsz / ad",
        f_sg: "ad (Indef.)",
        m_pl: "adunk / adtok / adnak",
        f_pl: "adnak"
      },
      continuous: {
        m_sg: "adom / adod / adja",
        f_sg: "adja (Def.)",
        m_pl: "adjuk / adjátok / adják",
        f_pl: "adják (Def.)"
      },
      past: {
        m_sg: "adtam / adott (Indef)",
        m_pl: "adtam / adta (Def)",
        f_sg: "adta (Def.)",
        f_pl: "adták (Def.)"
      },
      imperative: {
        tu: "adj! (Indef)",
        tum: "add ide! (Def)",
        aap: "adjon! (Formal)"
      }
    },
    example: {
      target: " Odaadom neked a könyvet.",
      phonetic: "o-daw-aw-dom neh-ked aw koeny-vet",
      english: "I give the book to you."
    },
    examples: {
      present: {
        tense: "Indefinite (Alanyi)",
        target: "Adsz egy kis vizet?",
        phonetic: "awds edy kish vi-zet",
        english: "Will you give me a little water?",
        verbForm: "Adsz",
        explanation: "'egy kis vizet' (a little water) is indefinite → adsz"
      },
      current: {
        tense: "Definite (Tárgyas)",
        target: "Átadom az üzenetet.",
        phonetic: "aat-aw-dom awz ue-zeh-neh-tet",
        english: "I'll pass on the message.",
        verbForm: "Átadom",
        explanation: "'az üzenetet' (the message) is definite → átadom"
      },
      past: {
        tense: "Past Tense (-ott)",
        target: "A pincér odaadta az étlapot.",
        phonetic: "aw pin-tsayr o-daw-awd-taw awz ayt-law-pot",
        english: "The waiter handed over the menu.",
        verbForm: "odaadta",
        explanation: "3rd sg Definite past: adta"
      }
    }
  },
  {
    id: "keres",
    target: "keres",
    phonetic: "keh-resh",
    english: "to look for / to search / to earn",
    cluster: "Objects & Actions",
    stem: "keres-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: false,
    irregularNote: "Front-vowel sibilant verb (-s): 2nd sg Indefinite is 'keresel'. Definite 1st pl assimilates -j- → 'keressük'.",
    mnemonic: "When you 'CAress' (keres) your pockets, you are LOOKING FOR your keys.",
    conjugations: {
      habitual: {
        m_sg: "keresek / keresel / keres",
        f_sg: "keres (Indef.)",
        m_pl: "keresünk / kerestek / keresnek",
        f_pl: "keresnek"
      },
      continuous: {
        m_sg: "keresem / keresed / keresi",
        f_sg: "keresi (Def.)",
        m_pl: "keressük / keresitek / keresik",
        f_pl: "keresik (Def.)"
      },
      past: {
        m_sg: "kerestem / keresett (Indef)",
        m_pl: "kerestem / kereste (Def)",
        f_sg: "kereste (Def.)",
        f_pl: "keresték (Def.)"
      },
      imperative: {
        tu: "keress! (Indef)",
        tum: "keresd meg! (Def)",
        aap: "keresse! (Formal)"
      }
    },
    example: {
      target: "Keresem a szemüvegemet.",
      phonetic: "keh-reh-shem aw seh-mue-veh-geh-met",
      english: "I am looking for my glasses."
    },
    examples: {
      present: {
        tense: "Indefinite (Alanyi)",
        target: "Mit keresel?",
        phonetic: "mit keh-reh-shel",
        english: "What are you looking for?",
        verbForm: "keresel",
        explanation: "'Mit?' is indefinite; sibilant -s takes '-el' in 2nd person"
      },
      current: {
        tense: "Definite (Tárgyas)",
        target: "A pályaudvart keressük.",
        phonetic: "aw paa-yaw-ud-vawrt keh-resh-shuek",
        english: "We are looking for the train station.",
        verbForm: "keressük",
        explanation: "'A pályaudvart' is definite; keres + jük → keressük"
      },
      past: {
        tense: "Past Tense (-ett)",
        target: "Mindenhol kerestem a kulcsot.",
        phonetic: "min-den-hol keh-resh-tem aw kul-chot",
        english: "I looked for the key everywhere.",
        verbForm: "kerestem",
        explanation: "1st sg past: kerestem"
      }
    }
  },
  {
    id: "var",
    target: "vár",
    phonetic: "vaar",
    english: "to wait / to expect",
    cluster: "Daily Essentials",
    stem: "vár-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: false,
    irregularNote: "'Várok a buszra' (I wait for the bus - Indef with -ra/-re) vs 'Várom a buszt' (I am awaiting the bus - Def with accusative -t).",
    mnemonic: "Waiting at the train car ('vár') for the train to arrive.",
    conjugations: {
      habitual: {
        m_sg: "várok / vársz / vár",
        f_sg: "vár (Indef.)",
        m_pl: "várunk / vártok / várnak",
        f_pl: "várnak"
      },
      continuous: {
        m_sg: "várom / várod / várja",
        f_sg: "várja (Def.)",
        m_pl: "várjuk / várjátok / várják",
        f_pl: "várják (Def.)"
      },
      past: {
        m_sg: "vártam / várt (Indef)",
        m_pl: "vártam / várta (Def)",
        f_sg: "várta (Def.)",
        f_pl: "várták (Def.)"
      },
      imperative: {
        tu: "várj! (Indef)",
        tum: "várd meg! (Def)",
        aap: "várjon! (Formal)"
      }
    },
    example: {
      target: "Várj egy percet, kérlek!",
      phonetic: "vaary edy per-tset, kayr-lek",
      english: "Wait a minute, please!"
    },
    examples: {
      present: {
        tense: "Indefinite (Alanyi)",
        target: "Kire vársz?",
        phonetic: "ki-reh vaars",
        english: "Who are you waiting for?",
        verbForm: "vársz",
        explanation: "Waiting FOR someone ('kire') uses Indefinite 'vársz'"
      },
      current: {
        tense: "Definite (Tárgyas)",
        target: "Nagyon várom a nyarat!",
        phonetic: "naw-dyon vaa-rom aw nyaw-rawt",
        english: "I am really looking forward to the summer!",
        verbForm: "várom",
        explanation: "'a nyarat' (the summer, accusative) takes Definite 'várom'"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Fél órát vártunk a buszra.",
        phonetic: "fayl oh-raat vaar-tunk aw bus-raw",
        english: "We waited half an hour for the bus.",
        verbForm: "vártunk",
        explanation: "1st pl past Indefinite: vártunk"
      }
    }
  },
  {
    id: "fizet",
    target: "fizet",
    phonetic: "fi-zet",
    english: "to pay",
    cluster: "Daily Essentials",
    stem: "fizet-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: false,
    irregularNote: "Stem ends in Vowel + -t, so 3rd sg past adds -ett ('fizetett'). Imperative -t + -j becomes -ss-: 'fizess!' / 'fizesd ki!'.",
    mnemonic: "Paying a 'FEE' (fizet) at the café.",
    conjugations: {
      habitual: {
        m_sg: "fizetek / fizetsz / fizet",
        f_sg: "fizet (Indef.)",
        m_pl: "fizetünk / fizettek / fizetnek",
        f_pl: "fizetnek"
      },
      continuous: {
        m_sg: "fizetem / fizeted / fizeti",
        f_sg: "fizeti (Def.)",
        m_pl: "fizetjük / fizetitek / fizetik",
        f_pl: "fizetik (Def.)"
      },
      past: {
        m_sg: "fizettem / fizetett (Indef)",
        m_pl: "fizettem / fizette (Def)",
        f_sg: "fizette (Def.)",
        f_pl: "fizették (Def.)"
      },
      imperative: {
        tu: "fizess! (Indef)",
        tum: "fizesd ki! (Def)",
        aap: "fizessen! (Formal)"
      }
    },
    example: {
      target: "Kártyával vagy készpénzzel fizetsz?",
      phonetic: "kaar-tyaa-vawl vawdy kays-paynz-zel fi-zets",
      english: "Are you paying by card or cash?"
    },
    examples: {
      present: {
        tense: "Indefinite (Alanyi)",
        target: "Szeretnék fizetni, legyen szíves!",
        phonetic: "seh-ret-nayk fi-zet-ni, leh-dyen see-vesh",
        english: "I would like to pay, please!",
        verbForm: "fizetni",
        explanation: "Essential restaurant phrase: Szeretnék fizetni!"
      },
      current: {
        tense: "Definite (Tárgyas)",
        target: "Ma én fizetem a vacsorát.",
        phonetic: "maw ayn fi-zeh-tem aw vaw-cho-raat",
        english: "Today I am paying for the dinner.",
        verbForm: "fizetem",
        explanation: "'a vacsorát' (the dinner) is definite → fizetem"
      },
      past: {
        tense: "Past Tense (-ett)",
        target: "Már kifizettem a számlát.",
        phonetic: "maar ki-fi-zet-tem aw saam-laat",
        english: "I already paid the bill.",
        verbForm: "kifizettem",
        explanation: "Prefix 'ki-' + fizet = pay off in full"
      }
    }
  },
  {
    id: "lakik",
    target: "lakik",
    phonetic: "law-kik",
    english: "to live / to reside (-ik verb)",
    cluster: "Daily Essentials",
    stem: "lak-",
    transitivity: "Intransitive",
    hasGrammarTrait: false,
    isIrregular: false,
    irregularNote: "Back-vowel -ik verb: lakom (or lakok), laksz, lakik, lakunk, laktok, laknak.",
    mnemonic: "You LIVE behind a 'LOCK' (lakik) in your apartment (lakás).",
    conjugations: {
      habitual: {
        m_sg: "lakom (lakok) / laksz / lakik",
        f_sg: "lakik",
        m_pl: "lakunk / laktok / laknak",
        f_pl: "laknak"
      },
      continuous: {
        m_sg: "itt lakom (I live here)",
        f_sg: "ott lakik (lives there)",
        m_pl: "együtt lakunk",
        f_pl: "Budapesten laknak"
      },
      past: {
        m_sg: "laktam / laktál / lakott",
        m_pl: "laktunk / laktatok / laktak",
        f_sg: "lakott",
        f_pl: "laktak"
      },
      imperative: {
        tu: "lakj!",
        tum: "lakjatok! (pl)",
        aap: "lakjon! (Formal)"
      }
    },
    example: {
      target: "Hol laksz?",
      phonetic: "hol lawks",
      english: "Where do you live?"
    },
    examples: {
      present: {
        tense: "Present (-ik verb)",
        target: "A belvárosban lakom.",
        phonetic: "aw bel-vaa-rosh-bawn law-kom",
        english: "I live downtown.",
        verbForm: "lakom",
        explanation: "Intransitive -ik verb: 1st sg is 'lakom' (or 'lakok')"
      },
      current: {
        tense: "3rd Person (-ik)",
        target: "A bátyám Pécsen lakik.",
        phonetic: "aw baa-tyaam pay-chen law-kik",
        english: "My older brother lives in Pécs.",
        verbForm: "lakik",
        explanation: "3rd person singular keeps the '-ik' ending"
      },
      past: {
        tense: "Past Tense (-ott)",
        target: "Két évig Magyarországon laktunk.",
        phonetic: "kayt ay-vig maw-dyawr-or-saa-gon lawk-tunk",
        english: "We lived in Hungary for two years.",
        verbForm: "laktunk",
        explanation: "Past 1st plural: laktunk"
      }
    }
  },
  {
    id: "dolgozik",
    target: "dolgozik",
    phonetic: "dol-go-zik",
    english: "to work (-ik verb)",
    cluster: "Daily Essentials",
    stem: "dolgoz-",
    transitivity: "Intransitive",
    hasGrammarTrait: false,
    isIrregular: false,
    irregularNote: "Back-vowel sibilant -ik verb (-z): 1st sg 'dolgozom' (or 'dolgozok'), 2nd sg 'dolgozol' (uses -ol because stem ends in -z!).",
    mnemonic: "Working hard all day makes you feel 'DULL-GO-Zzz' (dolgozik).",
    conjugations: {
      habitual: {
        m_sg: "dolgozom / dolgozol / dolgozik",
        f_sg: "dolgozik",
        m_pl: "dolgozunk / dolgoztok / dolgoznak",
        f_pl: "dolgoznak"
      },
      continuous: {
        m_sg: "dolgozni fogok (will work)",
        f_sg: "dolgozni fog",
        m_pl: "dolgozni fogunk",
        f_pl: "dolgozni fognak"
      },
      past: {
        m_sg: "dolgoztam / dolgoztál / dolgozott",
        m_pl: "dolgoztunk / dolgoztatok / dolgoztak",
        f_sg: "dolgozott",
        f_pl: "dolgoztak"
      },
      imperative: {
        tu: "dolgozz!",
        tum: "dolgozzatok! (pl)",
        aap: "dolgozzon! (Formal)"
      }
    },
    example: {
      target: "Ma otthonról dolgozom.",
      phonetic: "maw ott-hon-rohl dol-go-zom",
      english: "Today I am working from home."
    },
    examples: {
      present: {
        tense: "Present (-ik verb)",
        target: "Hol dolgozol?",
        phonetic: "hol dol-go-zol",
        english: "Where do you work?",
        verbForm: "dolgozol",
        explanation: "Because stem ends in sibilant -z, 2nd sg is 'dolgozol'"
      },
      current: {
        tense: "Plural",
        target: "Egy irodában dolgozunk.",
        phonetic: "edy i-ro-daa-bawn dol-go-zunk",
        english: "We work in an office.",
        verbForm: "dolgozunk",
        explanation: "1st plural back-vowel ending: -unk"
      },
      past: {
        tense: "Past Tense (-ott)",
        target: "Tegnap későig dolgozott.",
        phonetic: "teg-nawp kay-shoe-ig dol-go-zott",
        english: "Yesterday he/she worked until late.",
        verbForm: "dolgozott",
        explanation: "3rd sg past adds -ott: dolgozott"
      }
    }
  },
  {
    id: "utazik",
    target: "utazik",
    phonetic: "u-taw-zik",
    english: "to travel (-ik verb)",
    cluster: "Motion & Movement",
    stem: "utaz-",
    transitivity: "Intransitive",
    hasGrammarTrait: false,
    isIrregular: false,
    irregularNote: "Built on 'út' (road/way). Back-vowel -ik verb ending in -z: utazom, utazol, utazik, utazunk.",
    mnemonic: "From 'út' (road) — hitting the road to TRAVEL.",
    conjugations: {
      habitual: {
        m_sg: "utazom / utazol / utazik",
        f_sg: "utazik",
        m_pl: "utazunk / utaztok / utaznak",
        f_pl: "utaznak"
      },
      continuous: {
        m_sg: "utazni fogok",
        f_sg: "utazni fog",
        m_pl: "utazni fogunk",
        f_pl: "utazni fognak"
      },
      past: {
        m_sg: "utaztam / utaztál / utazott",
        m_pl: "utaztunk / utaztatok / utaztak",
        f_sg: "utazott",
        f_pl: "utaztak"
      },
      imperative: {
        tu: "utazz!",
        tum: "utazzatok! (pl)",
        aap: "utazzon! (Formal)"
      }
    },
    example: {
      target: "Nyáron a Balatonra utazunk.",
      phonetic: "nyaa-ron aw baw-law-ton-raw u-taw-zunk",
      english: "In the summer we travel to Lake Balaton."
    },
    examples: {
      present: {
        tense: "Present (-ik verb)",
        target: "Vonattal utazol?",
        phonetic: "vo-nawt-tawl u-taw-zol",
        english: "Are you traveling by train?",
        verbForm: "utazol",
        explanation: "'Vonattal' = with/by train (-val/-vel instrumental case)"
      },
      current: {
        tense: "1st Person",
        target: "Holnap Bécsbe utazom.",
        phonetic: "hol-nawp baych-beh u-taw-zom",
        english: "Tomorrow I am traveling to Vienna.",
        verbForm: "utazom",
        explanation: "Present tense with 'holnap' expresses planned future!"
      },
      past: {
        tense: "Past Tense (-ott)",
        target: "Tavaly repülővel utaztunk.",
        phonetic: "taw-vawy reh-pue-loe-vel u-tawz-tunk",
        english: "Last year we traveled by plane.",
        verbForm: "utaztunk",
        explanation: "1st pl past: utaztunk"
      }
    }
  },
  {
    id: "indul",
    target: "indul",
    phonetic: "in-dul",
    english: "to depart / to leave / to start off",
    cluster: "Motion & Movement",
    stem: "indul-",
    transitivity: "Intransitive",
    hasGrammarTrait: false,
    isIrregular: false,
    irregularNote: "Back-vowel verb (mixed 'i' + 'u' = back vowel harmony!). Essential for trains, buses, and leaving home.",
    mnemonic: "Don't 'IN-DULL' around — it's time to DEPART!",
    conjugations: {
      habitual: {
        m_sg: "indulok / indulsz / indul",
        f_sg: "indul",
        m_pl: "indulunk / indultok / indulnak",
        f_pl: "indulnak"
      },
      continuous: {
        m_sg: "mindjárt indulok",
        f_sg: "mikor indul?",
        m_pl: "indulunk!",
        f_pl: "indulnak"
      },
      past: {
        m_sg: "indultam / indultál / indult",
        m_pl: "indultunk / indultatok / indultak",
        f_sg: "indult",
        f_pl: "indultak"
      },
      imperative: {
        tu: "indulj!",
        tum: "induljunk! (let's go!)",
        aap: "induljon!"
      }
    },
    example: {
      target: "Mikor indul a vonat?",
      phonetic: "mi-kor in-dul aw vo-nawt",
      english: "When does the train depart?"
    },
    examples: {
      present: {
        tense: "Present (Indefinite)",
        target: "A busz tíz perc múlva indul.",
        phonetic: "aw bus teez perts mool-vaw in-dul",
        english: "The bus departs in ten minutes.",
        verbForm: "indul",
        explanation: "Intransitive motion verb: 3rd sg has zero ending ('indul')"
      },
      current: {
        tense: "1st Plural",
        target: "Indulunk, kész vagy?",
        phonetic: "in-du-lunk, kays vawdy",
        english: "We're heading out, are you ready?",
        verbForm: "Indulunk",
        explanation: "'Indulunk!' = We're leaving / setting off!"
      },
      past: {
        tense: "Past Tense (-t)",
        target: "Korán reggel indultunk.",
        phonetic: "ko-raan reg-gel in-dul-tunk",
        english: "We left early in the morning.",
        verbForm: "indultunk",
        explanation: "Past tense: indultunk"
      }
    }
  },
  {
    id: "erkezik",
    target: "érkezik",
    phonetic: "ayr-keh-zik",
    english: "to arrive (-ik verb)",
    cluster: "Motion & Movement",
    stem: "érkez-",
    transitivity: "Intransitive",
    hasGrammarTrait: false,
    isIrregular: false,
    irregularNote: "Front-vowel sibilant -ik verb: érkezem, érkezel, érkezik, érkezünk. Often paired with prefix 'meg-' (megérkezik).",
    mnemonic: "When the plane 'AIR-kisses' (érkezik) the runway, it ARRIVES.",
    conjugations: {
      habitual: {
        m_sg: "érkezem / érkezel / érkezik",
        f_sg: "érkezik",
        m_pl: "érkezünk / érkeztek / érkeznek",
        f_pl: "érkeznek"
      },
      continuous: {
        m_sg: "megérkezem",
        f_sg: "megérkezik",
        m_pl: "megérkezünk",
        f_pl: "megérkeznek"
      },
      past: {
        m_sg: "érkeztem / érkeztél / érkezett",
        m_pl: "érkeztünk / érkeztetek / érkeztek",
        f_sg: "megérkezett",
        f_pl: "megérkeztek"
      },
      imperative: {
        tu: "érkezz!",
        tum: "érkezzetek!",
        aap: "érkezzen!"
      }
    },
    example: {
      target: "Mikor érkezik a gép?",
      phonetic: "mi-kor ayr-keh-zik aw gayp",
      english: "When does the plane arrive?"
    },
    examples: {
      present: {
        tense: "Present (-ik verb)",
        target: "A vonat az első vágányra érkezik.",
        phonetic: "aw vo-nawt awz el-shoe vaa-gaany-raw ayr-keh-zik",
        english: "The train is arriving on platform 1.",
        verbForm: "érkezik",
        explanation: "Classic train station announcement verb!"
      },
      current: {
        tense: "1st Person",
        target: "Este nyolckor érkezem.",
        phonetic: "esh-teh nyolts-kor ayr-keh-zem",
        english: "I arrive at eight in the evening.",
        verbForm: "érkezem",
        explanation: "Front-vowel -ik verb: érkezem"
      },
      past: {
        tense: "Past Tense (-ett)",
        target: "Épségben megérkeztünk!",
        phonetic: "ayp-shayg-ben meg-ayr-kez-tuenk",
        english: "We arrived safely!",
        verbForm: "megérkeztünk",
        explanation: "Prefix 'meg-' shows completed arrival"
      }
    }
  },
  {
    id: "nyit",
    target: "nyit",
    phonetic: "nyit",
    english: "to open",
    cluster: "Objects & Actions",
    stem: "nyit-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: false,
    irregularNote: "Front-vowel verb ending in vowel + -t, so 3rd sg Indefinite past is 'nyitott', and Imperative assimilates -t + -j → 'nyiss!' / 'nyisd ki!'.",
    mnemonic: "You OPEN your 'KNIT' (nyit) sweater.",
    conjugations: {
      habitual: {
        m_sg: "nyitok / nyitsz / nyit",
        f_sg: "nyit (Indef.)",
        m_pl: "nyitunk / nyittok / nyitnak",
        f_pl: "nyitnak"
      },
      continuous: {
        m_sg: "nyitom / nyitod / nyitja",
        f_sg: "kinyitja (Def.)",
        m_pl: "nyitjuk / nyitjátok / nyitják",
        f_pl: "kinyitják (Def.)"
      },
      past: {
        m_sg: "nyitottam / nyitott (Indef)",
        m_pl: "kinyitottam / kinyitotta (Def)",
        f_sg: "kinyitotta (Def.)",
        f_pl: "kinyitották (Def.)"
      },
      imperative: {
        tu: "nyiss! (Indef)",
        tum: "nyisd ki! (Def)",
        aap: "nyissa ki! (Formal)"
      }
    },
    example: {
      target: "Kinyitom az ablakot, mert meleg van.",
      phonetic: "ki-nyi-tom awz awb-law-kot, mert meh-leg vawn",
      english: "I'm opening the window because it is warm."
    },
    examples: {
      present: {
        tense: "Indefinite (Shop hours)",
        target: "A bolt reggel nyolckor nyit.",
        phonetic: "aw bolt reg-gel nyolts-kor nyit",
        english: "The shop opens at eight in the morning.",
        verbForm: "nyit",
        explanation: "'nyit' is a historic back-vowel verb despite the letter 'i'!"
      },
      current: {
        tense: "Definite (Tárgyas)",
        target: "Kinyitod az ajtót, kérlek?",
        phonetic: "ki-nyi-tod awz awy-toht, kayr-lek",
        english: "Will you open the door, please?",
        verbForm: "Kinyitod",
        explanation: "'az ajtót' (the door) is definite → kinyitod"
      },
      past: {
        tense: "Imperative (-t + -j → -ss-)",
        target: "Nyisd ki a könyvet!",
        phonetic: "nyishd ki aw koeny-vet",
        english: "Open the book!",
        verbForm: "Nyisd ki",
        explanation: "Definite imperative of kinyit: Nyisd ki!"
      }
    }
  },
  {
    id: "mond",
    target: "mond",
    phonetic: "mond",
    english: "to say / to tell",
    cluster: "Study & Communication",
    stem: "mond-",
    transitivity: "Transitive",
    hasGrammarTrait: true,
    isIrregular: false,
    irregularNote: "Ends in two consonants (-nd), so 2nd sg Indefinite adds linking vowel ('mondasz') and 3rd sg Indefinite past is 'mondott'.",
    mnemonic: "Think of 'leMONDe' newspaper — telling the news.",
    conjugations: {
      habitual: {
        m_sg: "mondok / mondasz / mond",
        f_sg: "mond (Indef.)",
        m_pl: "mondunk / mondotok / mondanak",
        f_pl: "mondanak"
      },
      continuous: {
        m_sg: "mondom / mondod / mondja",
        f_sg: "mondja (Def.)",
        m_pl: "mondjuk / mondjátok / mondják",
        f_pl: "mondják (Def.)"
      },
      past: {
        m_sg: "mondtam / mondott (Indef)",
        m_pl: "mondtam / mondta (Def)",
        f_sg: "mondta (Def.)",
        f_pl: "mondták (Def.)"
      },
      imperative: {
        tu: "mondj! (Indef)",
        tum: "mondd el! (Def)",
        aap: "mondja! (Formal)"
      }
    },
    example: {
      target: "Hogy mondják ezt magyarul?",
      phonetic: "hody mond-yaak ezt maw-dyaw-rul",
      english: "How do they say this in Hungarian?"
    },
    examples: {
      present: {
        tense: "Indefinite ('Mit mondasz?')",
        target: "Mit mondasz?",
        phonetic: "mit mon-daws",
        english: "What are you saying?",
        verbForm: "mondasz",
        explanation: "'Mit?' is indefinite; -nd cluster requires linking vowel '-asz'"
      },
      current: {
        tense: "Definite ('Ezt')",
        target: "Komolyan mondom!",
        phonetic: "ko-mo-yawn mon-dom",
        english: "I mean it seriously! (I say it seriously)",
        verbForm: "mondom",
        explanation: "Implied 'it' uses Definite 'mondom'"
      },
      past: {
        tense: "Past Tense (-ott / -ta)",
        target: "Ő mondta, hogy holnap jön.",
        phonetic: "oe mond-taw, hody hol-nawp yoen",
        english: "He/she said that he/she is coming tomorrow.",
        verbForm: "mondta",
        explanation: "A 'hogy...' (that...) clause always triggers Definite conjugation ('mondta')!"
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
