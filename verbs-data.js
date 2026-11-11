// Core Curated Hindi Verb Curriculum for English Speakers
// Thoroughly annotated with grammatical features, transitivity, past tense rules, and mnemonics.
// Enriched with beginner-friendly, accessible sentences across Present Habitual, Current Continuous, and Simple Past tenses.
const VERB_CURRICULUM = [
  {
    "id": "karna",
    "hindi": "करना",
    "roman": "karnā",
    "english": "to do",
    "cluster": "The Big 4 Irregulars",
    "stem": "कर (kar)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": true,
    "irregularNote": "Past tense changes stem to कि- (किया / किए / की / कीं)",
    "mnemonic": "Think of 'car' (kar) - you have to DO regular maintenance on your car.",
    "conjugations": {
      "habitual": {
        "m_sg": "करता है",
        "f_sg": "करती है",
        "m_pl": "करते हैं",
        "f_pl": "करती हैं"
      },
      "continuous": {
        "m_sg": "कर रहा है",
        "f_sg": "कर रही है",
        "m_pl": "कर रहे हैं",
        "f_pl": "कर रही हैं"
      },
      "past": {
        "m_sg": "किया",
        "m_pl": "किए",
        "f_sg": "की",
        "f_pl": "कीं"
      },
      "imperative": {
        "tu": "कर",
        "tum": "करो",
        "aap": "कीजिए / करिए"
      }
    },
    "example": {
      "hindi": "मैं रोज़ काम करता हूँ।",
      "roman": "Maiñ roz kām kartā hūñ.",
      "english": "I work every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "मैं रोज़ काम करता हूँ।",
        "roman": "Maiñ roz kām kartā hūñ.",
        "english": "I work every day.",
        "verbForm": "करता हूँ",
        "explanation": "Habit / routine (-ता हूँ)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "मैं अभी काम कर रहा हूँ।",
        "roman": "Maiñ abhī kām kar rahā hūñ.",
        "english": "I am working right now.",
        "verbForm": "कर रहा हूँ",
        "explanation": "Happening right now (-रहा हूँ)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "मैंने कल काम किया।",
        "roman": "Maiñne kal kām kiyā.",
        "english": "I did work yesterday.",
        "verbForm": "किया",
        "explanation": "Transitive: Takes 'ने', stem changes to कि-"
      }
    }
  },
  {
    "id": "hona",
    "hindi": "होना",
    "roman": "honā",
    "english": "to be / to become / to happen",
    "cluster": "The Big 4 Irregulars",
    "stem": "हो (ho)",
    "transitivity": "Intransitive",
    "takesNe": false,
    "isIrregular": true,
    "irregularNote": "Past tense is हुआ / हुए / हुई / हुईं (NO 'ने' used)",
    "mnemonic": "HO-HO-HO: Santa IS real and IT HAPPENS every year.",
    "conjugations": {
      "habitual": {
        "m_sg": "होता है",
        "f_sg": "होती है",
        "m_pl": "होते हैं",
        "f_pl": "होती हैं"
      },
      "continuous": {
        "m_sg": "हो रहा है",
        "f_sg": "हो रही है",
        "m_pl": "हो रहे हैं",
        "f_pl": "हो रही हैं"
      },
      "past": {
        "m_sg": "हुआ",
        "m_pl": "हुए",
        "f_sg": "हुई",
        "f_pl": "हुईं"
      },
      "imperative": {
        "tu": "हो",
        "tum": "होओ",
        "aap": "होइए / हूजिए"
      }
    },
    "example": {
      "hindi": "यहाँ रोज़ बारिश होती है।",
      "roman": "Yahāñ roz bāriśh hotī hai.",
      "english": "It rains here every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "यहाँ रोज़ बारिश होती है।",
        "roman": "Yahāñ roz bāriśh hotī hai.",
        "english": "It rains here every day.",
        "verbForm": "होती है",
        "explanation": "Regular occurrence (-ती है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "यहाँ अभी बारिश हो रही है।",
        "roman": "Yahāñ abhī bāriśh ho rahī hai.",
        "english": "It is raining here right now.",
        "verbForm": "हो रही है",
        "explanation": "Happening right now (-रही है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "यहाँ कल बारिश हुई।",
        "roman": "Yahāñ kal bāriśh huī.",
        "english": "It rained here yesterday.",
        "verbForm": "हुई",
        "explanation": "Intransitive: NO 'ने', irregular past (हुई)"
      }
    }
  },
  {
    "id": "dena",
    "hindi": "देना",
    "roman": "denā",
    "english": "to give",
    "cluster": "The Big 4 Irregulars",
    "stem": "दे (de)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": true,
    "irregularNote": "Past stem is दि- (दिया / दिए / दी / दीं)",
    "mnemonic": "Think of DE-liver: you give or deliver something.",
    "conjugations": {
      "habitual": {
        "m_sg": "देता है",
        "f_sg": "देती है",
        "m_pl": "देते हैं",
        "f_pl": "देती हैं"
      },
      "continuous": {
        "m_sg": "दे रहा है",
        "f_sg": "दे रही है",
        "m_pl": "दे रहे हैं",
        "f_pl": "दे रही हैं"
      },
      "past": {
        "m_sg": "दिया",
        "m_pl": "दिए",
        "f_sg": "दी",
        "f_pl": "दीं"
      },
      "imperative": {
        "tu": "दे",
        "tum": "दो",
        "aap": "दीजिए"
      }
    },
    "example": {
      "hindi": "वह मुझे किताब देता है।",
      "roman": "Vah mujhe kitāb detā hai.",
      "english": "He gives me a book."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "वह मुझे किताब देता है।",
        "roman": "Vah mujhe kitāb detā hai.",
        "english": "He gives me a book.",
        "verbForm": "देता है",
        "explanation": "Habitual (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह मुझे किताब दे रहा है।",
        "roman": "Vah mujhe kitāb de rahā hai.",
        "english": "He is giving me a book right now.",
        "verbForm": "दे रहा है",
        "explanation": "Happening right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "उसने मुझे किताब दी।",
        "roman": "Usne mujhe kitāb dī.",
        "english": "He gave me a book.",
        "verbForm": "दी",
        "explanation": "Transitive: Takes 'ने', irregular stem दि- (दी agrees with kitāb)"
      }
    }
  },
  {
    "id": "lena",
    "hindi": "लेना",
    "roman": "lenā",
    "english": "to take",
    "cluster": "The Big 4 Irregulars",
    "stem": "ले (le)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": true,
    "irregularNote": "Past stem is लि- (लिया / लिए / ली / लीं)",
    "mnemonic": "Opposite of देना (give); think: LE-ave with what you take.",
    "conjugations": {
      "habitual": {
        "m_sg": "लेता है",
        "f_sg": "लेती है",
        "m_pl": "लेते हैं",
        "f_pl": "लेती हैं"
      },
      "continuous": {
        "m_sg": "ले रहा है",
        "f_sg": "ले रही है",
        "m_pl": "ले रहे हैं",
        "f_pl": "ले रही हैं"
      },
      "past": {
        "m_sg": "लिया",
        "m_pl": "लिए",
        "f_sg": "ली",
        "f_pl": "लीं"
      },
      "imperative": {
        "tu": "ले",
        "tum": "लो",
        "aap": "लीजिए"
      }
    },
    "example": {
      "hindi": "मैं उससे किताब लेता हूँ।",
      "roman": "Maiñ us-se kitāb letā hūñ.",
      "english": "I take a book from him."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "मैं उससे किताब लेता हूँ।",
        "roman": "Maiñ us-se kitāb letā hūñ.",
        "english": "I take a book from him.",
        "verbForm": "लेता हूँ",
        "explanation": "Habitual (-ता हूँ)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "मैं उससे किताब ले रहा हूँ।",
        "roman": "Maiñ us-se kitāb le rahā hūñ.",
        "english": "I am taking a book from him right now.",
        "verbForm": "ले रहा हूँ",
        "explanation": "Happening right now (-रहा हूँ)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "मैंने उससे किताब ली।",
        "roman": "Maiñne us-se kitāb lī.",
        "english": "I took a book from him.",
        "verbForm": "ली",
        "explanation": "Transitive: Takes 'ने', irregular stem लि- (ली agrees with kitāb)"
      }
    }
  },
  {
    "id": "jana",
    "hindi": "जाना",
    "roman": "jānā",
    "english": "to go",
    "cluster": "Motion & Movement",
    "stem": "जा (jā)",
    "transitivity": "Intransitive",
    "takesNe": false,
    "isIrregular": true,
    "irregularNote": "Past tense changes completely to ग- (गया / गए / गई / गईं)",
    "mnemonic": "JA-pan is where you want to GO.",
    "conjugations": {
      "habitual": {
        "m_sg": "जाता है",
        "f_sg": "जाती है",
        "m_pl": "जाते हैं",
        "f_pl": "जाती हैं"
      },
      "continuous": {
        "m_sg": "जा रहा है",
        "f_sg": "जा रही है",
        "m_pl": "जा रहे हैं",
        "f_pl": "जा रही हैं"
      },
      "past": {
        "m_sg": "गया",
        "m_pl": "गए",
        "f_sg": "गई",
        "f_pl": "गईं"
      },
      "imperative": {
        "tu": "जा",
        "tum": "जाओ",
        "aap": "जाइए"
      }
    },
    "example": {
      "hindi": "वह रोज़ स्कूल जाता है।",
      "roman": "Vah roz skūl jātā hai.",
      "english": "He goes to school every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "वह रोज़ स्कूल जाता है।",
        "roman": "Vah roz skūl jātā hai.",
        "english": "He goes to school every day.",
        "verbForm": "जाता है",
        "explanation": "Daily routine (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह अभी स्कूल जा रहा है।",
        "roman": "Vah abhī skūl jā rahā hai.",
        "english": "He is going to school right now.",
        "verbForm": "जा रहा है",
        "explanation": "In transit right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "वह कल स्कूल गया।",
        "roman": "Vah kal skūl gayā.",
        "english": "He went to school yesterday.",
        "verbForm": "गया",
        "explanation": "Intransitive: NO 'ने', irregular past (गया)"
      }
    }
  },
  {
    "id": "aana",
    "hindi": "आना",
    "roman": "ānā",
    "english": "to come",
    "cluster": "Motion & Movement",
    "stem": "आ (ā)",
    "transitivity": "Intransitive",
    "takesNe": false,
    "isIrregular": false,
    "irregularNote": "Regular past: आया / आए / आई / आईं",
    "mnemonic": "Say 'Aaaah' when the doctor COMES into the room.",
    "conjugations": {
      "habitual": {
        "m_sg": "आता है",
        "f_sg": "आती है",
        "m_pl": "आते हैं",
        "f_pl": "आती हैं"
      },
      "continuous": {
        "m_sg": "आ रहा है",
        "f_sg": "आ रही है",
        "m_pl": "आ रहे हैं",
        "f_pl": "आ रही हैं"
      },
      "past": {
        "m_sg": "आया",
        "m_pl": "आए",
        "f_sg": "आई",
        "f_pl": "आईं"
      },
      "imperative": {
        "tu": "आ",
        "tum": "आओ",
        "aap": "आइए"
      }
    },
    "example": {
      "hindi": "वह रोज़ घर आता है।",
      "roman": "Vah roz ghar ātā hai.",
      "english": "He comes home every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "वह रोज़ घर आता है।",
        "roman": "Vah roz ghar ātā hai.",
        "english": "He comes home every day.",
        "verbForm": "आता है",
        "explanation": "Daily routine (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह अभी घर आ रहा है।",
        "roman": "Vah abhī ghar ā rahā hai.",
        "english": "He is coming home right now.",
        "verbForm": "आ रहा है",
        "explanation": "Coming right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "वह कल घर आया।",
        "roman": "Vah kal ghar āyā.",
        "english": "He came home yesterday.",
        "verbForm": "आया",
        "explanation": "Intransitive: NO 'ने' (आया)"
      }
    }
  },
  {
    "id": "chalna",
    "hindi": "चलना",
    "roman": "calnā",
    "english": "to walk / to move / to go along",
    "cluster": "Motion & Movement",
    "stem": "चल (cal)",
    "transitivity": "Intransitive",
    "takesNe": false,
    "isIrregular": false,
    "irregularNote": "Regular past: चला / चले / चली / चलीं",
    "mnemonic": "'Chalo!' is the famous Hindi exclamation meaning 'Let's go / Move!'",
    "conjugations": {
      "habitual": {
        "m_sg": "चलता है",
        "f_sg": "चलती है",
        "m_pl": "चलते हैं",
        "f_pl": "चलती हैं"
      },
      "continuous": {
        "m_sg": "चल रहा है",
        "f_sg": "चल रही है",
        "m_pl": "चल रहे हैं",
        "f_pl": "चल रही हैं"
      },
      "past": {
        "m_sg": "चला",
        "m_pl": "चले",
        "f_sg": "चली",
        "f_pl": "चलीं"
      },
      "imperative": {
        "tu": "चल",
        "tum": "चलो",
        "aap": "चलिए"
      }
    },
    "example": {
      "hindi": "हम रोज़ पार्क में चलते हैं।",
      "roman": "Ham roz pārk meñ calte haiñ.",
      "english": "We walk in the park every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "हम रोज़ पार्क में चलते हैं।",
        "roman": "Ham roz pārk meñ calte haiñ.",
        "english": "We walk in the park every day.",
        "verbForm": "चलते हैं",
        "explanation": "Daily walk (-ते हैं)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "हम अभी पार्क में चल रहे हैं।",
        "roman": "Ham abhī pārk meñ cal rahe haiñ.",
        "english": "We are walking in the park right now.",
        "verbForm": "चल रहे हैं",
        "explanation": "Walking right now (-रहे हैं)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "हम कल पार्क में चले।",
        "roman": "Ham kal pārk meñ cale.",
        "english": "We walked in the park yesterday.",
        "verbForm": "चले",
        "explanation": "Intransitive: NO 'ने' (चले)"
      }
    }
  },
  {
    "id": "daurna",
    "hindi": "दौड़ना",
    "roman": "dauṛnā",
    "english": "to run",
    "cluster": "Motion & Movement",
    "stem": "दौड़ (dauṛ)",
    "transitivity": "Intransitive",
    "takesNe": false,
    "isIrregular": false,
    "irregularNote": "Regular past: दौड़ा / दौड़े / दौड़ी / दौड़ीं",
    "mnemonic": "Notice the retroflex 'ṛ' flap. Think of a track runner pounding the dirt.",
    "conjugations": {
      "habitual": {
        "m_sg": "दौड़ता है",
        "f_sg": "दौड़ती है",
        "m_pl": "दौड़ते हैं",
        "f_pl": "दौड़ती हैं"
      },
      "continuous": {
        "m_sg": "दौड़ रहा है",
        "f_sg": "दौड़ रही है",
        "m_pl": "दौड़ रहे हैं",
        "f_pl": "दौड़ रही हैं"
      },
      "past": {
        "m_sg": "दौड़ा",
        "m_pl": "दौड़े",
        "f_sg": "दौड़ी",
        "f_pl": "दौड़ीं"
      },
      "imperative": {
        "tu": "दौड़",
        "tum": "दौड़ो",
        "aap": "दौड़िए"
      }
    },
    "example": {
      "hindi": "लड़का रोज़ पार्क में दौड़ता है।",
      "roman": "Laṛkā roz pārk meñ dauṛtā hai.",
      "english": "The boy runs in the park every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "लड़का रोज़ पार्क में दौड़ता है।",
        "roman": "Laṛkā roz pārk meñ dauṛtā hai.",
        "english": "The boy runs in the park every day.",
        "verbForm": "दौड़ता है",
        "explanation": "Habitual running (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "लड़का अभी पार्क में दौड़ रहा है।",
        "roman": "Laṛkā abhī pārk meñ dauṛ rahā hai.",
        "english": "The boy is running in the park right now.",
        "verbForm": "दौड़ रहा है",
        "explanation": "Running right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "लड़का कल पार्क में दौड़ा।",
        "roman": "Laṛkā kal pārk meñ dauṛā.",
        "english": "The boy ran in the park yesterday.",
        "verbForm": "दौड़ा",
        "explanation": "Intransitive: NO 'ने' (दौड़ा)"
      }
    }
  },
  {
    "id": "pahunchana",
    "hindi": "पहुँचना",
    "roman": "pahuñcnā",
    "english": "to arrive / to reach",
    "cluster": "Motion & Movement",
    "stem": "पहुँच (pahuñc)",
    "transitivity": "Intransitive",
    "takesNe": false,
    "isIrregular": false,
    "irregularNote": "Regular past: पहुँचा / पहुँचे / पहुँची / पहुँचीं",
    "mnemonic": "Think of your hand reaching into a 'pouch' to reach your goal.",
    "conjugations": {
      "habitual": {
        "m_sg": "पहुँचता है",
        "f_sg": "पहुँचती है",
        "m_pl": "पहुँचते हैं",
        "f_pl": "पहुँचती हैं"
      },
      "continuous": {
        "m_sg": "पहुँच रहा है",
        "f_sg": "पहुँच रही है",
        "m_pl": "पहुँच रहे हैं",
        "f_pl": "पहुँच रही हैं"
      },
      "past": {
        "m_sg": "पहुँचा",
        "m_pl": "पहुँचे",
        "f_sg": "पहुँची",
        "f_pl": "पहुँचीं"
      },
      "imperative": {
        "tu": "पहुँच",
        "tum": "पहुँचो",
        "aap": "पहुँचिए"
      }
    },
    "example": {
      "hindi": "ट्रेन रोज़ समय पर पहुँचती है।",
      "roman": "Ṭren roz samay par pahuñctī hai.",
      "english": "The train arrives on time every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "ट्रेन रोज़ समय पर पहुँचती है।",
        "roman": "Ṭren roz samay par pahuñctī hai.",
        "english": "The train arrives on time every day.",
        "verbForm": "पहुँचती है",
        "explanation": "Regular arrival (-ती है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "ट्रेन अभी स्टेशन पहुँच रही है।",
        "roman": "Ṭren abhī sṭeshan pahuñc rahī hai.",
        "english": "The train is reaching the station right now.",
        "verbForm": "पहुँच रही है",
        "explanation": "Arriving right now (-रही है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "ट्रेन कल समय पर पहुँची।",
        "roman": "Ṭren kal samay par pahuñcī.",
        "english": "The train arrived on time yesterday.",
        "verbForm": "पहुँची",
        "explanation": "Intransitive: NO 'ने' (पहुँची agrees with train)"
      }
    }
  },
  {
    "id": "rukna",
    "hindi": "रुकना",
    "roman": "ruknā",
    "english": "to stop / to pause",
    "cluster": "Motion & Movement",
    "stem": "रुक (ruk)",
    "transitivity": "Intransitive",
    "takesNe": false,
    "isIrregular": false,
    "irregularNote": "Do not confuse with रोकना (roknā, to stop something else, tr.)",
    "mnemonic": "A ROOK in chess stops in its tracks.",
    "conjugations": {
      "habitual": {
        "m_sg": "रुकता है",
        "f_sg": "रुकती है",
        "m_pl": "रुकते हैं",
        "f_pl": "रुकती हैं"
      },
      "continuous": {
        "m_sg": "रुक रहा है",
        "f_sg": "रुक रही है",
        "m_pl": "रुक रहे हैं",
        "f_pl": "रुक रही हैं"
      },
      "past": {
        "m_sg": "रुका",
        "m_pl": "रुके",
        "f_sg": "रुकी",
        "f_pl": "रुकीं"
      },
      "imperative": {
        "tu": "रुक",
        "tum": "रुको",
        "aap": "रुकिए"
      }
    },
    "example": {
      "hindi": "बस यहाँ रोज़ रुकती है।",
      "roman": "Bas yahāñ roz ruktī hai.",
      "english": "The bus stops here every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "बस यहाँ रोज़ रुकती है।",
        "roman": "Bas yahāñ roz ruktī hai.",
        "english": "The bus stops here every day.",
        "verbForm": "रुकती है",
        "explanation": "Regular stop (-ती है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "बस अभी यहाँ रुक रही है।",
        "roman": "Bas abhī yahāñ ruk rahī hai.",
        "english": "The bus is stopping here right now.",
        "verbForm": "रुक रही है",
        "explanation": "Stopping right now (-रही है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "बस कल यहाँ रुकी।",
        "roman": "Bas kal yahāñ rukī.",
        "english": "The bus stopped here yesterday.",
        "verbForm": "रुकी",
        "explanation": "Intransitive: NO 'ने' (रुकी agrees with bus)"
      }
    }
  },
  {
    "id": "khana",
    "hindi": "खाना",
    "roman": "khānā",
    "english": "to eat (also noun: food)",
    "cluster": "Daily Essentials",
    "stem": "खा (khā)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Regular past: खाया / खाए / खाई / खाईं",
    "mnemonic": "KHAN loves to eat hearty curry food (Khana).",
    "conjugations": {
      "habitual": {
        "m_sg": "खाता है",
        "f_sg": "खाती है",
        "m_pl": "खाते हैं",
        "f_pl": "खाती हैं"
      },
      "continuous": {
        "m_sg": "खा रहा है",
        "f_sg": "खा रही है",
        "m_pl": "खा रहे हैं",
        "f_pl": "खा रही हैं"
      },
      "past": {
        "m_sg": "खाया",
        "m_pl": "खाए",
        "f_sg": "खाई",
        "f_pl": "खाईं"
      },
      "imperative": {
        "tu": "खा",
        "tum": "खाओ",
        "aap": "खाइए"
      }
    },
    "example": {
      "hindi": "वह रोज़ सेब खाता है।",
      "roman": "Vah roz seb khātā hai.",
      "english": "He eats an apple every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "वह रोज़ सेब खाता है।",
        "roman": "Vah roz seb khātā hai.",
        "english": "He eats an apple every day.",
        "verbForm": "खाता है",
        "explanation": "Daily routine (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह अभी सेब खा रहा है।",
        "roman": "Vah abhī seb khā rahā hai.",
        "english": "He is eating an apple right now.",
        "verbForm": "खा रहा है",
        "explanation": "Eating right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "उसने कल सेब खाया।",
        "roman": "Usne kal seb khāyā.",
        "english": "He ate an apple yesterday.",
        "verbForm": "खाया",
        "explanation": "Transitive: Takes 'ने', agrees with seb (खाया)"
      }
    }
  },
  {
    "id": "pina",
    "hindi": "पीना",
    "roman": "pīnā",
    "english": "to drink",
    "cluster": "Daily Essentials",
    "stem": "पी (pī)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": true,
    "irregularNote": "Past shortens vowel to पि- (पिया / पिए / पी / पीं)",
    "mnemonic": "Think of PIÑA Colada — a drink to sip on the beach.",
    "conjugations": {
      "habitual": {
        "m_sg": "पीता है",
        "f_sg": "पीती है",
        "m_pl": "पीते हैं",
        "f_pl": "पीती हैं"
      },
      "continuous": {
        "m_sg": "पी रहा है",
        "f_sg": "पी रही है",
        "m_pl": "पी रहे हैं",
        "f_pl": "पी रही हैं"
      },
      "past": {
        "m_sg": "पिया",
        "m_pl": "पिए",
        "f_sg": "पी",
        "f_pl": "पीं"
      },
      "imperative": {
        "tu": "पी",
        "tum": "पीओ",
        "aap": "पीजिए"
      }
    },
    "example": {
      "hindi": "वह रोज़ चाय पीती है।",
      "roman": "Vah roz cāy pītī hai.",
      "english": "She drinks tea every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "वह रोज़ चाय पीती है।",
        "roman": "Vah roz cāy pītī hai.",
        "english": "She drinks tea every day.",
        "verbForm": "पीती है",
        "explanation": "Daily routine (-ती है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह अभी चाय पी रही है।",
        "roman": "Vah abhī cāy pī rahī hai.",
        "english": "She is drinking tea right now.",
        "verbForm": "पी रही है",
        "explanation": "Drinking right now (-रही है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "उसने कल चाय पी।",
        "roman": "Usne kal cāy pī.",
        "english": "She drank tea yesterday.",
        "verbForm": "पी",
        "explanation": "Transitive: Takes 'ने', agrees with cāy (पी)"
      }
    }
  },
  {
    "id": "sona",
    "hindi": "सोना",
    "roman": "sonā",
    "english": "to sleep (also noun: gold)",
    "cluster": "Daily Essentials",
    "stem": "सो (so)",
    "transitivity": "Intransitive",
    "takesNe": false,
    "isIrregular": false,
    "irregularNote": "Regular past: सोया / सोए / सोई / सोईं",
    "mnemonic": "You are SO tired, you need to go to sleep.",
    "conjugations": {
      "habitual": {
        "m_sg": "सोता है",
        "f_sg": "सोती है",
        "m_pl": "सोते हैं",
        "f_pl": "सोती हैं"
      },
      "continuous": {
        "m_sg": "सो रहा है",
        "f_sg": "सो रही है",
        "m_pl": "सो रहे हैं",
        "f_pl": "सो रही हैं"
      },
      "past": {
        "m_sg": "सोया",
        "m_pl": "सोए",
        "f_sg": "सोई",
        "f_pl": "सोईं"
      },
      "imperative": {
        "tu": "सो",
        "tum": "सोओ",
        "aap": "सोइए"
      }
    },
    "example": {
      "hindi": "बच्चा रात को जल्दी सोता है।",
      "roman": "Baccā rāt ko jaldī sotā hai.",
      "english": "The child sleeps early at night."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "बच्चा रात को जल्दी सोता है।",
        "roman": "Baccā rāt ko jaldī sotā hai.",
        "english": "The child sleeps early at night.",
        "verbForm": "सोता है",
        "explanation": "Daily bedtime habit (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "बच्चा अभी कमरे में सो रहा है।",
        "roman": "Baccā abhī kamre meñ so rahā hai.",
        "english": "The child is sleeping in the room right now.",
        "verbForm": "सो रहा है",
        "explanation": "Asleep right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "बच्चा रात भर चैन से सोया।",
        "roman": "Baccā rāt bhar cain se soyā.",
        "english": "The child slept peacefully all night.",
        "verbForm": "सोया",
        "explanation": "Intransitive: NO 'ने' (सोया)"
      }
    }
  },
  {
    "id": "uthna",
    "hindi": "उठना",
    "roman": "uṭhnā",
    "english": "to get up / wake up / rise",
    "cluster": "Daily Essentials",
    "stem": "उठ (uṭh)",
    "transitivity": "Intransitive",
    "takesNe": false,
    "isIrregular": false,
    "irregularNote": "Note retroflex 'ṭh'. Transitive counterpart is उठाना (uṭhānā - to lift).",
    "mnemonic": "Sounds like 'UP-na' - getting UP in the morning.",
    "conjugations": {
      "habitual": {
        "m_sg": "उठता है",
        "f_sg": "उठती है",
        "m_pl": "उठते हैं",
        "f_pl": "उठती हैं"
      },
      "continuous": {
        "m_sg": "उठ रहा है",
        "f_sg": "उठ रही है",
        "m_pl": "उठ रहे हैं",
        "f_pl": "उठ रही हैं"
      },
      "past": {
        "m_sg": "उठा",
        "m_pl": "उठे",
        "f_sg": "उठी",
        "f_pl": "उठीं"
      },
      "imperative": {
        "tu": "उठ",
        "tum": "उठो",
        "aap": "उठिए"
      }
    },
    "example": {
      "hindi": "मैं रोज़ सुबह छह बजे उठता हूँ।",
      "roman": "Maiñ roz subah chah baje uṭhtā hūñ.",
      "english": "I wake up at six every morning."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "मैं रोज़ सुबह छह बजे उठता हूँ।",
        "roman": "Maiñ roz subah chah baje uṭhtā hūñ.",
        "english": "I wake up at six every morning.",
        "verbForm": "उठता हूँ",
        "explanation": "Morning routine (-ता हूँ)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह अभी बिस्तर से उठ रहा है।",
        "roman": "Vah abhī bistar se uṭh rahā hai.",
        "english": "He is getting up from bed right now.",
        "verbForm": "उठ रहा है",
        "explanation": "Getting up right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "मैं आज सुबह देर से उठा।",
        "roman": "Maiñ āj subah der se uṭhā.",
        "english": "I woke up late this morning.",
        "verbForm": "उठा",
        "explanation": "Intransitive: NO 'ने' (उठा)"
      }
    }
  },
  {
    "id": "baithna",
    "hindi": "बैठना",
    "roman": "baiṭhnā",
    "english": "to sit down",
    "cluster": "Daily Essentials",
    "stem": "बैठ (baiṭh)",
    "transitivity": "Intransitive",
    "takesNe": false,
    "isIrregular": false,
    "irregularNote": "Regular past: बैठा / बैठे / बैठी / बैठीं",
    "mnemonic": "Notice the diphthong 'ai'. 'Bait' (बैठ) on a chair.",
    "conjugations": {
      "habitual": {
        "m_sg": "बैठता है",
        "f_sg": "बैठती है",
        "m_pl": "बैठते हैं",
        "f_pl": "बैठती हैं"
      },
      "continuous": {
        "m_sg": "बैठ रहा है",
        "f_sg": "बैठ रही है",
        "m_pl": "बैठ रहे हैं",
        "f_pl": "बैठ रही हैं"
      },
      "past": {
        "m_sg": "बैठा",
        "m_pl": "बैठे",
        "f_sg": "बैठी",
        "f_pl": "बैठीं"
      },
      "imperative": {
        "tu": "बैठ",
        "tum": "बैठो",
        "aap": "बैठिए"
      }
    },
    "example": {
      "hindi": "वह कुर्सी पर बैठता है।",
      "roman": "Vah kursī par baiṭhtā hai.",
      "english": "He sits on the chair."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "वह कुर्सी पर बैठता है।",
        "roman": "Vah kursī par baiṭhtā hai.",
        "english": "He sits on the chair.",
        "verbForm": "बैठता है",
        "explanation": "Habitual action (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह अभी कुर्सी पर बैठ रहा है।",
        "roman": "Vah abhī kursī par baiṭh rahā hai.",
        "english": "He is sitting on the chair right now.",
        "verbForm": "बैठ रहा है",
        "explanation": "Sitting down right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "वह कुर्सी पर बैठा।",
        "roman": "Vah kursī par baiṭhā.",
        "english": "He sat on the chair.",
        "verbForm": "बैठा",
        "explanation": "Intransitive: NO 'ने' (बैठा)"
      }
    }
  },
  {
    "id": "hasna",
    "hindi": "हँसना",
    "roman": "hañsnā",
    "english": "to laugh",
    "cluster": "Daily Essentials",
    "stem": "हँस (hañs)",
    "transitivity": "Intransitive",
    "takesNe": false,
    "isIrregular": false,
    "irregularNote": "Has nasalized vowel (chandrabindu).",
    "mnemonic": "Sounds like 'haha': H-ans-na.",
    "conjugations": {
      "habitual": {
        "m_sg": "हँसता है",
        "f_sg": "हँसती है",
        "m_pl": "हँसते हैं",
        "f_pl": "हँसती हैं"
      },
      "continuous": {
        "m_sg": "हँस रहा है",
        "f_sg": "हँस रही है",
        "m_pl": "हँस रहे हैं",
        "f_pl": "हँस रही हैं"
      },
      "past": {
        "m_sg": "हँसा",
        "m_pl": "हँसे",
        "f_sg": "हँसी",
        "f_pl": "हँसीं"
      },
      "imperative": {
        "tu": "हँस",
        "tum": "हँसो",
        "aap": "हँसिए"
      }
    },
    "example": {
      "hindi": "बच्चा हमेशा हँसता है।",
      "roman": "Baccā hameśhā hañstā hai.",
      "english": "The child always laughs."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "बच्चा हमेशा हँसता है।",
        "roman": "Baccā hameśhā hañstā hai.",
        "english": "The child always laughs.",
        "verbForm": "हँसता है",
        "explanation": "Habitual cheerful action (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "बच्चा अभी हँस रहा है।",
        "roman": "Baccā abhī hañs rahā hai.",
        "english": "The child is laughing right now.",
        "verbForm": "हँस रहा है",
        "explanation": "Laughing right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "बच्चा बात सुनकर हँसा।",
        "roman": "Baccā bāt sunkar hañsā.",
        "english": "The child laughed hearing the talk.",
        "verbForm": "हँसा",
        "explanation": "Intransitive: NO 'ने' (हँसा)"
      }
    }
  },
  {
    "id": "parhna",
    "hindi": "पढ़ना",
    "roman": "paṛhnā",
    "english": "to read / to study",
    "cluster": "Study & Communication",
    "stem": "पढ़ (paṛh)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Regular past: पढ़ा / पढ़े / पढ़ी / पढ़ीं. Uses retroflex flap ढ़.",
    "mnemonic": "Turn the PAGE to READ (Pa-ge $\\approx$ Pa-ṛh).",
    "conjugations": {
      "habitual": {
        "m_sg": "पढ़ता है",
        "f_sg": "पढ़ती है",
        "m_pl": "पढ़ते हैं",
        "f_pl": "पढ़ती हैं"
      },
      "continuous": {
        "m_sg": "पढ़ रहा है",
        "f_sg": "पढ़ रही है",
        "m_pl": "पढ़ रहे हैं",
        "f_pl": "पढ़ रही हैं"
      },
      "past": {
        "m_sg": "पढ़ा",
        "m_pl": "पढ़े",
        "f_sg": "पढ़ी",
        "f_pl": "पढ़ीं"
      },
      "imperative": {
        "tu": "पढ़",
        "tum": "पढ़ो",
        "aap": "पढ़िए"
      }
    },
    "example": {
      "hindi": "वह रोज़ किताब पढ़ती है।",
      "roman": "Vah roz kitāb paṛhtī hai.",
      "english": "She reads a book every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "वह रोज़ किताब पढ़ती है।",
        "roman": "Vah roz kitāb paṛhtī hai.",
        "english": "She reads a book every day.",
        "verbForm": "पढ़ती है",
        "explanation": "Daily reading habit (-ती है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह अभी किताब पढ़ रही है।",
        "roman": "Vah abhī kitāb paṛh rahī hai.",
        "english": "She is reading a book right now.",
        "verbForm": "पढ़ रही है",
        "explanation": "Reading right now (-रही है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "उसने कल किताब पढ़ी।",
        "roman": "Usne kal kitāb paṛhī.",
        "english": "She read a book yesterday.",
        "verbForm": "पढ़ी",
        "explanation": "Transitive: Takes 'ने', agrees with kitāb (पढ़ी)"
      }
    }
  },
  {
    "id": "likhna",
    "hindi": "लिखना",
    "roman": "likhnā",
    "english": "to write",
    "cluster": "Study & Communication",
    "stem": "लिख (likh)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Regular past: लिखा / लिखे / लिखी / लिखीं",
    "mnemonic": "LICK the pencil tip before you WRITE (likh).",
    "conjugations": {
      "habitual": {
        "m_sg": "लिखता है",
        "f_sg": "लिखती है",
        "m_pl": "लिखते हैं",
        "f_pl": "लिखती हैं"
      },
      "continuous": {
        "m_sg": "लिख रहा है",
        "f_sg": "लिख रही है",
        "m_pl": "लिख रहे हैं",
        "f_pl": "लिख रही हैं"
      },
      "past": {
        "m_sg": "लिखा",
        "m_pl": "लिखे",
        "f_sg": "लिखी",
        "f_pl": "लिखीं"
      },
      "imperative": {
        "tu": "लिख",
        "tum": "लिखो",
        "aap": "लिखिए"
      }
    },
    "example": {
      "hindi": "मैं रोज़ पत्र लिखता हूँ।",
      "roman": "Maiñ roz patr likhtā hūñ.",
      "english": "I write a letter every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "मैं रोज़ पत्र लिखता हूँ।",
        "roman": "Maiñ roz patr likhtā hūñ.",
        "english": "I write a letter every day.",
        "verbForm": "लिखता हूँ",
        "explanation": "Regular habit (-ता हूँ)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "मैं अभी पत्र लिख रहा हूँ।",
        "roman": "Maiñ abhī patr likh rahā hūñ.",
        "english": "I am writing a letter right now.",
        "verbForm": "लिख रहा हूँ",
        "explanation": "Writing right now (-रहा हूँ)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "मैंने कल पत्र लिखा।",
        "roman": "Maiñne kal patr likhā.",
        "english": "I wrote a letter yesterday.",
        "verbForm": "लिखा",
        "explanation": "Transitive: Takes 'ने', agrees with patr (लिखा)"
      }
    }
  },
  {
    "id": "bolna",
    "hindi": "बोलना",
    "roman": "bolnā",
    "english": "to speak",
    "cluster": "Study & Communication",
    "stem": "बोल (bol)",
    "transitivity": "Intransitive (Exception)",
    "takesNe": false,
    "isIrregular": false,
    "irregularNote": "CRITICAL EXCEPTION: Even though meaning feels transitive, 'बोलना' NEVER takes 'ने' in the past! (वह बोला, not उसने बोला)",
    "mnemonic": "A BOWLER speaks with the ball; never bowl 'ne' at him.",
    "conjugations": {
      "habitual": {
        "m_sg": "बोलता है",
        "f_sg": "बोलती है",
        "m_pl": "बोलते हैं",
        "f_pl": "बोलती हैं"
      },
      "continuous": {
        "m_sg": "बोल रहा है",
        "f_sg": "बोल रही है",
        "m_pl": "बोल रहे हैं",
        "f_pl": "बोल रही हैं"
      },
      "past": {
        "m_sg": "बोला",
        "m_pl": "बोले",
        "f_sg": "बोली",
        "f_pl": "बोलीं"
      },
      "imperative": {
        "tu": "बोल",
        "tum": "बोलो",
        "aap": "बोलिए"
      }
    },
    "example": {
      "hindi": "वह हमेशा सच बोलता है।",
      "roman": "Vah hameśhā sac boltā hai.",
      "english": "He always speaks the truth."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "वह हमेशा सच बोलता है।",
        "roman": "Vah hameśhā sac boltā hai.",
        "english": "He always speaks the truth.",
        "verbForm": "बोलता है",
        "explanation": "Habitual honesty (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह अभी हिंदी बोल रहा है।",
        "roman": "Vah abhī hindī bol rahā hai.",
        "english": "He is speaking Hindi right now.",
        "verbForm": "बोल रहा है",
        "explanation": "Speaking right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "वह सच बोला।",
        "roman": "Vah sac bolā.",
        "english": "He spoke the truth.",
        "verbForm": "बोला",
        "explanation": "Exception: Standard Hindi uses NO 'ने' with बोलना"
      }
    }
  },
  {
    "id": "kahna",
    "hindi": "कहना",
    "roman": "kahnā",
    "english": "to say",
    "cluster": "Study & Communication",
    "stem": "कह (kah)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Unlike बोलना, 'कहना' DOES take 'ने' in the past! (उसने कहा).",
    "mnemonic": "CAN (kah) you say that again?",
    "conjugations": {
      "habitual": {
        "m_sg": "कहता है",
        "f_sg": "कहती है",
        "m_pl": "कहते हैं",
        "f_pl": "कहती हैं"
      },
      "continuous": {
        "m_sg": "कह रहा है",
        "f_sg": "कह रही है",
        "m_pl": "कह रहे हैं",
        "f_pl": "कह रही हैं"
      },
      "past": {
        "m_sg": "कहा",
        "m_pl": "कहे",
        "f_sg": "कही",
        "f_pl": "कहीं"
      },
      "imperative": {
        "tu": "कह",
        "tum": "कहो",
        "aap": "कहिए"
      }
    },
    "example": {
      "hindi": "वह हमेशा सच कहती है।",
      "roman": "Vah hameśhā sac kahtī hai.",
      "english": "She always says the truth."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "वह हमेशा सच कहती है।",
        "roman": "Vah hameśhā sac kahtī hai.",
        "english": "She always says the truth.",
        "verbForm": "कहती है",
        "explanation": "Habitual speech (-ती है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "आप मुझसे क्या कह रहे हैं?",
        "roman": "Āp mujhse kyā kah rahe haiñ?",
        "english": "What are you saying to me?",
        "verbForm": "कह रहे हैं",
        "explanation": "Saying right now (-रहे हैं)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "उसने मुझसे सच कहा।",
        "roman": "Usne mujhse sac kahā.",
        "english": "He told me the truth.",
        "verbForm": "कहा",
        "explanation": "Transitive: Takes 'ने', irregular past (कहा)"
      }
    }
  },
  {
    "id": "batana",
    "hindi": "बताना",
    "roman": "batānā",
    "english": "to tell / to inform",
    "cluster": "Study & Communication",
    "stem": "बता (batā)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Related to बात (talk / matter).",
    "mnemonic": "Tell BATMAN the secret coordinates.",
    "conjugations": {
      "habitual": {
        "m_sg": "बताता है",
        "f_sg": "बताती है",
        "m_pl": "बताते हैं",
        "f_pl": "बताती हैं"
      },
      "continuous": {
        "m_sg": "बता रहा है",
        "f_sg": "बता रही है",
        "m_pl": "बता रहे हैं",
        "f_pl": "बता रही हैं"
      },
      "past": {
        "m_sg": "बताया",
        "m_pl": "बताए",
        "f_sg": "बताई",
        "f_pl": "बताईं"
      },
      "imperative": {
        "tu": "बता",
        "tum": "बताओ",
        "aap": "बताइए"
      }
    },
    "example": {
      "hindi": "वह मुझे कहानी बताता है।",
      "roman": "Vah mujhe kahānī batātā hai.",
      "english": "He tells me a story."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "वह मुझे कहानी बताता है।",
        "roman": "Vah mujhe kahānī batātā hai.",
        "english": "He tells me a story.",
        "verbForm": "बताता है",
        "explanation": "Habitual (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह मुझे पता बता रहा है।",
        "roman": "Vah mujhe patā batā rahā hai.",
        "english": "He is telling me the address right now.",
        "verbForm": "बता रहा है",
        "explanation": "Telling right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "उसने मुझे नाम बताया।",
        "roman": "Usne mujhe nām batāyā.",
        "english": "He told me the name.",
        "verbForm": "बताया",
        "explanation": "Transitive: Takes 'ने', agrees with nām (बताया)"
      }
    }
  },
  {
    "id": "puchhna",
    "hindi": "पूछना",
    "roman": "pūchnā",
    "english": "to ask",
    "cluster": "Study & Communication",
    "stem": "पूछ (pūch)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Takes से (se) for the person asked: उससे पूछना (ask him).",
    "mnemonic": "A POOCH (dog) looks at you asking for treats.",
    "conjugations": {
      "habitual": {
        "m_sg": "पूछता है",
        "f_sg": "पूछती है",
        "m_pl": "पूछते हैं",
        "f_pl": "पूछती हैं"
      },
      "continuous": {
        "m_sg": "पूछ रहा है",
        "f_sg": "पूछ रही है",
        "m_pl": "पूछ रहे हैं",
        "f_pl": "पूछ रही हैं"
      },
      "past": {
        "m_sg": "पूछा",
        "m_pl": "पूछे",
        "f_sg": "पूछी",
        "f_pl": "पूछीं"
      },
      "imperative": {
        "tu": "पूछ",
        "tum": "पूछो",
        "aap": "पूछिए"
      }
    },
    "example": {
      "hindi": "छात्र सवाल पूछता है।",
      "roman": "Chātra savāl pūchtā hai.",
      "english": "The student asks a question."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "छात्र सवाल पूछता है।",
        "roman": "Chātra savāl pūchtā hai.",
        "english": "The student asks a question.",
        "verbForm": "पूछता है",
        "explanation": "Habitual questioning (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह रास्ता पूछ रहा है।",
        "roman": "Vah rāstā pūch rahā hai.",
        "english": "He is asking the way right now.",
        "verbForm": "पूछ रहा है",
        "explanation": "Asking right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "मैंने उससे नाम पूछा।",
        "roman": "Maiñne us-se nām pūchā.",
        "english": "I asked him the name.",
        "verbForm": "पूछा",
        "explanation": "Transitive: Takes 'ने', agrees with nām (पूछा)"
      }
    }
  },
  {
    "id": "dekhna",
    "hindi": "देखना",
    "roman": "dekhnā",
    "english": "to see / to look / to watch",
    "cluster": "Perception & Mind",
    "stem": "देख (dekh)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Regular past: देखा / देखे / देखी / देखीं",
    "mnemonic": "DECK out your telescope so you can SEE the stars.",
    "conjugations": {
      "habitual": {
        "m_sg": "देखता है",
        "f_sg": "देखती है",
        "m_pl": "देखते हैं",
        "f_pl": "देखती हैं"
      },
      "continuous": {
        "m_sg": "देख रहा है",
        "f_sg": "देख रही है",
        "m_pl": "देख रहे हैं",
        "f_pl": "देख रही हैं"
      },
      "past": {
        "m_sg": "देखा",
        "m_pl": "देखे",
        "f_sg": "देखी",
        "f_pl": "देखीं"
      },
      "imperative": {
        "tu": "देख",
        "tum": "देखो",
        "aap": "देखिए"
      }
    },
    "example": {
      "hindi": "हम टीवी देखते हैं।",
      "roman": "Ham ṭīvī dekhte haiñ.",
      "english": "We watch TV."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "हम टीवी देखते हैं।",
        "roman": "Ham ṭīvī dekhte haiñ.",
        "english": "We watch TV.",
        "verbForm": "देखते हैं",
        "explanation": "Habitual watching (-ते हैं)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "हम अभी टीवी देख रहे हैं।",
        "roman": "Ham abhī ṭīvī dekh rahe haiñ.",
        "english": "We are watching TV right now.",
        "verbForm": "देख रहे हैं",
        "explanation": "Watching right now (-रहे हैं)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "हमने कल फ़िल्म देखी।",
        "roman": "Hamne kal film dekhī.",
        "english": "We saw a movie yesterday.",
        "verbForm": "देखी",
        "explanation": "Transitive: Takes 'ने', agrees with feminine film (देखी)"
      }
    }
  },
  {
    "id": "sunna",
    "hindi": "सुनना",
    "roman": "sunnā",
    "english": "to listen / to hear",
    "cluster": "Perception & Mind",
    "stem": "सुन (sun)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Regular past: सुना / सुने / सुनी / सुनीं",
    "mnemonic": "Listen to the birds singing under the bright SUN.",
    "conjugations": {
      "habitual": {
        "m_sg": "सुनता है",
        "f_sg": "सुनती है",
        "m_pl": "सुनते हैं",
        "f_pl": "सुनती हैं"
      },
      "continuous": {
        "m_sg": "सुन रहा है",
        "f_sg": "सुन रही है",
        "m_pl": "सुन रहे हैं",
        "f_pl": "सुन रही हैं"
      },
      "past": {
        "m_sg": "सुना",
        "m_pl": "सुने",
        "f_sg": "सुनी",
        "f_pl": "सुनीं"
      },
      "imperative": {
        "tu": "सुन",
        "tum": "सुनो",
        "aap": "सुनिए"
      }
    },
    "example": {
      "hindi": "वह रोज़ गाना सुनती है।",
      "roman": "Vah roz gānā suntī hai.",
      "english": "She listens to songs every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "वह रोज़ गाना सुनती है।",
        "roman": "Vah roz gānā suntī hai.",
        "english": "She listens to songs every day.",
        "verbForm": "सुनती है",
        "explanation": "Daily music habit (-ती है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह अभी गाना सुन रही है।",
        "roman": "Vah abhī gānā sun rahī hai.",
        "english": "She is listening to a song right now.",
        "verbForm": "सुन रही है",
        "explanation": "Listening right now (-रही है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "उसने कल गाना सुना।",
        "roman": "Usne kal gānā sunā.",
        "english": "She listened to the song yesterday.",
        "verbForm": "सुना",
        "explanation": "Transitive: Takes 'ने', agrees with gānā (सुना)"
      }
    }
  },
  {
    "id": "samajhna",
    "hindi": "समझना",
    "roman": "samajhnā",
    "english": "to understand",
    "cluster": "Perception & Mind",
    "stem": "समझ (samajh)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Often used colloquially: 'समझ में आया?' (Did it come in your understanding?)",
    "mnemonic": "SUMMER-J: It takes summer studying to understand physics.",
    "conjugations": {
      "habitual": {
        "m_sg": "समझता है",
        "f_sg": "समझती है",
        "m_pl": "समझते हैं",
        "f_pl": "समझती हैं"
      },
      "continuous": {
        "m_sg": "समझ रहा है",
        "f_sg": "समझ रही है",
        "m_pl": "समझ रहे हैं",
        "f_pl": "समझ रही हैं"
      },
      "past": {
        "m_sg": "समझा",
        "m_pl": "समझे",
        "f_sg": "समझी",
        "f_pl": "समझीं"
      },
      "imperative": {
        "tu": "समझ",
        "tum": "समझो",
        "aap": "समझिए"
      }
    },
    "example": {
      "hindi": "मैं हिंदी समझता हूँ।",
      "roman": "Maiñ hindī samajhtā hūñ.",
      "english": "I understand Hindi."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "मैं हिंदी समझता हूँ।",
        "roman": "Maiñ hindī samajhtā hūñ.",
        "english": "I understand Hindi.",
        "verbForm": "समझता हूँ",
        "explanation": "Habitual comprehension (-ता हूँ)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "मैं पाठ समझ रहा हूँ।",
        "roman": "Maiñ pāṭh samajh rahā hūñ.",
        "english": "I am understanding the lesson.",
        "verbForm": "समझ रहा हूँ",
        "explanation": "Understanding right now (-रहा हूँ)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "मैंने बात समझी।",
        "roman": "Maiñne bāt samajhī.",
        "english": "I understood the point.",
        "verbForm": "समझी",
        "explanation": "Transitive: Takes 'ने', agrees with feminine bāt (समझी)"
      }
    }
  },
  {
    "id": "sochna",
    "hindi": "सोचना",
    "roman": "sochnā",
    "english": "to think",
    "cluster": "Perception & Mind",
    "stem": "सोच (soc)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Regular past: सोचा / सोचे / सोची / सोचीं",
    "mnemonic": "Don't confuse with सोना (sleep); think: SOCH rates your thoughts.",
    "conjugations": {
      "habitual": {
        "m_sg": "सोचता है",
        "f_sg": "सोचती है",
        "m_pl": "सोचते हैं",
        "f_pl": "सोचती हैं"
      },
      "continuous": {
        "m_sg": "सोच रहा है",
        "f_sg": "सोच रही है",
        "m_pl": "सोच रहे हैं",
        "f_pl": "सोच रही हैं"
      },
      "past": {
        "m_sg": "सोचा",
        "m_pl": "सोचे",
        "f_sg": "सोची",
        "f_pl": "सोचीं"
      },
      "imperative": {
        "tu": "सोच",
        "tum": "सोचो",
        "aap": "सोचिए"
      }
    },
    "example": {
      "hindi": "वह बहुत सोचता है।",
      "roman": "Vah bahut soctā hai.",
      "english": "He thinks a lot."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "वह बहुत सोचता है।",
        "roman": "Vah bahut soctā hai.",
        "english": "He thinks a lot.",
        "verbForm": "सोचता है",
        "explanation": "Habitual thinking (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "मैं इस बारे में सोच रहा हूँ।",
        "roman": "Maiñ is bāre meñ soc rahā hūñ.",
        "english": "I am thinking about this.",
        "verbForm": "सोच रहा हूँ",
        "explanation": "Thinking right now (-रहा हूँ)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "मैंने बहुत सोचा।",
        "roman": "Maiñne bahut socā.",
        "english": "I thought a lot.",
        "verbForm": "सोचा",
        "explanation": "Transitive: Takes 'ने' (सोचा)"
      }
    }
  },
  {
    "id": "janna",
    "hindi": "जानना",
    "roman": "jānnā",
    "english": "to know",
    "cluster": "Perception & Mind",
    "stem": "जान (jān)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Regular past: जाना / जाने / जानी / जानीं (careful: past form looks identical to infinitive of 'to go' जाना)",
    "mnemonic": "JAN knows everything about history.",
    "conjugations": {
      "habitual": {
        "m_sg": "जानता है",
        "f_sg": "जानती है",
        "m_pl": "जानते हैं",
        "f_pl": "जानती हैं"
      },
      "continuous": {
        "m_sg": "जान रहा है",
        "f_sg": "जान रही है",
        "m_pl": "जान रहे हैं",
        "f_pl": "जान रही हैं"
      },
      "past": {
        "m_sg": "जाना",
        "m_pl": "जाने",
        "f_sg": "जानी",
        "f_pl": "जानीं"
      },
      "imperative": {
        "tu": "जान",
        "tum": "जानो",
        "aap": "जानिए"
      }
    },
    "example": {
      "hindi": "मैं आपको जानता हूँ।",
      "roman": "Maiñ āpko jāntā hūñ.",
      "english": "I know you."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "मैं आपको जानता हूँ।",
        "roman": "Maiñ āpko jāntā hūñ.",
        "english": "I know you.",
        "verbForm": "जानता हूँ",
        "explanation": "State of knowing (-ता हूँ)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "हम सच जानना चाहते हैं।",
        "roman": "Ham sac jānnā cāhte haiñ.",
        "english": "We want to know the truth.",
        "verbForm": "जानना",
        "explanation": "Infinitive with desire"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "उसने सच जाना।",
        "roman": "Usne sac jānā.",
        "english": "He came to know the truth.",
        "verbForm": "जाना",
        "explanation": "Transitive: Takes 'ने', agrees with sac (जाना)"
      }
    }
  },
  {
    "id": "seekhna",
    "hindi": "सीखना",
    "roman": "sīkhnā",
    "english": "to learn",
    "cluster": "Perception & Mind",
    "stem": "सीख (sīkh)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Opposite / causative is सिखाना (sikhānā - to teach).",
    "mnemonic": "SEEK knowledge to LEARN.",
    "conjugations": {
      "habitual": {
        "m_sg": "सीखता है",
        "f_sg": "सीखती है",
        "m_pl": "सीखते हैं",
        "f_pl": "सीखती हैं"
      },
      "continuous": {
        "m_sg": "सीख रहा है",
        "f_sg": "सीख रही है",
        "m_pl": "सीख रहे हैं",
        "f_pl": "सीख रही हैं"
      },
      "past": {
        "m_sg": "सीखा",
        "m_pl": "सीखे",
        "f_sg": "सीखी",
        "f_pl": "सीखीं"
      },
      "imperative": {
        "tu": "सीख",
        "tum": "सीखो",
        "aap": "सीखिए"
      }
    },
    "example": {
      "hindi": "हम रोज़ हिंदी सीखते हैं।",
      "roman": "Ham roz hindī sīkhte haiñ.",
      "english": "We learn Hindi every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "हम रोज़ हिंदी सीखते हैं।",
        "roman": "Ham roz hindī sīkhte haiñ.",
        "english": "We learn Hindi every day.",
        "verbForm": "सीखते हैं",
        "explanation": "Learning habit (-ते हैं)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "हम अभी हिंदी सीख रहे हैं।",
        "roman": "Ham abhī hindī sīkh rahe haiñ.",
        "english": "We are learning Hindi right now.",
        "verbForm": "सीख रहे हैं",
        "explanation": "Learning right now (-रहे हैं)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "हमने हिंदी सीखी।",
        "roman": "Hamne hindī sīkhī.",
        "english": "We learned Hindi.",
        "verbForm": "सीखी",
        "explanation": "Transitive: Takes 'ने', agrees with feminine hindī (सीखी)"
      }
    }
  },
  {
    "id": "bhulna",
    "hindi": "भूलना",
    "roman": "bhūlnā",
    "english": "to forget",
    "cluster": "Perception & Mind",
    "stem": "भूल (bhūl)",
    "transitivity": "Intransitive (Exception)",
    "takesNe": false,
    "isIrregular": false,
    "irregularNote": "EXCEPTION: Does NOT take 'ने' in the standard past (मैं भूल गया / वह भूली).",
    "mnemonic": "A FOOL forgets everything (Bhool = Fool).",
    "conjugations": {
      "habitual": {
        "m_sg": "भूलता है",
        "f_sg": "भूलती है",
        "m_pl": "भूलते हैं",
        "f_pl": "भूलती हैं"
      },
      "continuous": {
        "m_sg": "भूल रहा है",
        "f_sg": "भूल रही है",
        "m_pl": "भूल रहे हैं",
        "f_pl": "भूल रही हैं"
      },
      "past": {
        "m_sg": "भूला",
        "m_pl": "भूले",
        "f_sg": "bhūlī",
        "f_pl": "bhūlīñ"
      },
      "imperative": {
        "tu": "भूल",
        "tum": "भूलो",
        "aap": "भूलिए"
      }
    },
    "example": {
      "hindi": "वह नाम भूल जाता है।",
      "roman": "Vah nām bhūl jātā hai.",
      "english": "He forgets the name."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "वह नाम भूल जाता है।",
        "roman": "Vah nām bhūl jātā hai.",
        "english": "He forgets the name.",
        "verbForm": "भूल जाता है",
        "explanation": "Habitual forgetting"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "मैं बात भूल रहा हूँ।",
        "roman": "Maiñ bāt bhūl rahā hūñ.",
        "english": "I am forgetting the matter.",
        "verbForm": "भूल रहा हूँ",
        "explanation": "Forgetting right now (-रहा हूँ)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "मैं चाबी भूल गया।",
        "roman": "Maiñ cābī bhūl gayā.",
        "english": "I forgot the key.",
        "verbForm": "भूल गया",
        "explanation": "Exception: Standard Hindi uses NO 'ने' with भूलना"
      }
    }
  },
  {
    "id": "banana",
    "hindi": "बनाना",
    "roman": "banānā",
    "english": "to make / to prepare / to cook",
    "cluster": "Objects & Actions",
    "stem": "बना (banā)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Intransitive pair is बनना (bannā - to be made / to become).",
    "mnemonic": "Make a BANANA split dessert.",
    "conjugations": {
      "habitual": {
        "m_sg": "बनाता है",
        "f_sg": "बनाती है",
        "m_pl": "बनाते हैं",
        "f_pl": "बनाती हैं"
      },
      "continuous": {
        "m_sg": "बना रहा है",
        "f_sg": "बना रही है",
        "m_pl": "बना रहे हैं",
        "f_pl": "बना रही हैं"
      },
      "past": {
        "m_sg": "बनाया",
        "m_pl": "बनाए",
        "f_sg": "बनाई",
        "f_pl": "बनाईं"
      },
      "imperative": {
        "tu": "बना",
        "tum": "बनाओ",
        "aap": "बनाइए"
      }
    },
    "example": {
      "hindi": "माँ रोज़ चाय बनाती हैं।",
      "roman": "Māñ roz cāy banātī haiñ.",
      "english": "Mother makes tea every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "माँ रोज़ चाय बनाती हैं।",
        "roman": "Māñ roz cāy banātī haiñ.",
        "english": "Mother makes tea every day.",
        "verbForm": "बनाती हैं",
        "explanation": "Daily routine (-ती हैं)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "माँ अभी खाना बना रही हैं।",
        "roman": "Māñ abhī khānā banā rahī haiñ.",
        "english": "Mother is cooking food right now.",
        "verbForm": "बना रही हैं",
        "explanation": "Cooking right now (-रही हैं)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "माँ ने चाय बनाई।",
        "roman": "Māñ ne cāy banāī.",
        "english": "Mother made tea.",
        "verbForm": "बनाई",
        "explanation": "Transitive: Takes 'ने', agrees with cāy (बनाई)"
      }
    }
  },
  {
    "id": "kharidna",
    "hindi": "खरीदना",
    "roman": "kharīdnā",
    "english": "to buy / purchase",
    "cluster": "Objects & Actions",
    "stem": "खरीद (kharīd)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Regular past: खरीदा / खरीदे / खरीदी / खरीदीं",
    "mnemonic": "Buying something is a luxury (Kharīd).",
    "conjugations": {
      "habitual": {
        "m_sg": "खरीदता है",
        "f_sg": "खरीदती है",
        "m_pl": "खरीदते हैं",
        "f_pl": "खरीदती हैं"
      },
      "continuous": {
        "m_sg": "खरीद रहा है",
        "f_sg": "खरीद रही है",
        "m_pl": "खरीद रहे हैं",
        "f_pl": "खरीद रही हैं"
      },
      "past": {
        "m_sg": "खरीदा",
        "m_pl": "खरीदे",
        "f_sg": "खरीदी",
        "f_pl": "खरीदीं"
      },
      "imperative": {
        "tu": "खरीद",
        "tum": "खरीदो",
        "aap": "खरीदिए"
      }
    },
    "example": {
      "hindi": "पिताजी फल खरीदते हैं।",
      "roman": "Pitājī fal kharīdte haiñ.",
      "english": "Father buys fruits."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "पिताजी फल खरीदते हैं।",
        "roman": "Pitājī fal kharīdte haiñ.",
        "english": "Father buys fruits.",
        "verbForm": "खरीदते हैं",
        "explanation": "Regular shopping (-ते हैं)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह किताब खरीद रहा है।",
        "roman": "Vah kitāb kharīd rahā hai.",
        "english": "He is buying a book right now.",
        "verbForm": "खरीद रहा है",
        "explanation": "Buying right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "उसने नया फ़ोन खरीदा।",
        "roman": "Usne nayā fon kharīdā.",
        "english": "He bought a new phone.",
        "verbForm": "खरीदा",
        "explanation": "Transitive: Takes 'ने', agrees with fon (खरीदा)"
      }
    }
  },
  {
    "id": "bechna",
    "hindi": "बेचना",
    "roman": "becnā",
    "english": "to sell",
    "cluster": "Objects & Actions",
    "stem": "बेच (bec)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Opposite of खरीदना (to buy).",
    "mnemonic": "A merchant sits on a BENCH to SELL goods.",
    "conjugations": {
      "habitual": {
        "m_sg": "बेचता है",
        "f_sg": "बेचती है",
        "m_pl": "बेचते हैं",
        "f_pl": "बेचती हैं"
      },
      "continuous": {
        "m_sg": "बेच रहा है",
        "f_sg": "बेच रही है",
        "m_pl": "बेच रहे हैं",
        "f_pl": "बेच रही हैं"
      },
      "past": {
        "m_sg": "बेचा",
        "m_pl": "बेचे",
        "f_sg": "बेची",
        "f_pl": "बेचीं"
      },
      "imperative": {
        "tu": "बेच",
        "tum": "बेचो",
        "aap": "बेचिए"
      }
    },
    "example": {
      "hindi": "दुकानदार फल बेचता है।",
      "roman": "Dukāndār fal bectā hai.",
      "english": "The shopkeeper sells fruits."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "दुकानदार फल बेचता है।",
        "roman": "Dukāndār fal bectā hai.",
        "english": "The shopkeeper sells fruits.",
        "verbForm": "बेचता है",
        "explanation": "Daily business (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह पुरानी कार बेच रहा है।",
        "roman": "Vah purānī kār bec rahā hai.",
        "english": "He is selling his old car right now.",
        "verbForm": "बेच रहा है",
        "explanation": "Selling right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "उसने किताब बेची।",
        "roman": "Usne kitāb becī.",
        "english": "He sold the book.",
        "verbForm": "बेची",
        "explanation": "Transitive: Takes 'ने', agrees with kitāb (बेची)"
      }
    }
  },
  {
    "id": "lana",
    "hindi": "लाना",
    "roman": "lānā",
    "english": "to bring",
    "cluster": "Objects & Actions",
    "stem": "ला (lā)",
    "transitivity": "Intransitive (Exception)",
    "takesNe": false,
    "isIrregular": false,
    "irregularNote": "CRITICAL EXCEPTION: Contraction of ले + आना (take and come). It does NOT take 'ने' in the past! (वह फल लाया, not उसने फल लाया)",
    "mnemonic": "LA-LA-LA: Singing happily while you bring presents.",
    "conjugations": {
      "habitual": {
        "m_sg": "लाता है",
        "f_sg": "लाती है",
        "m_pl": "लाते हैं",
        "f_pl": "लाती हैं"
      },
      "continuous": {
        "m_sg": "ला रहा है",
        "f_sg": "ला रही है",
        "m_pl": "ला रहे हैं",
        "f_pl": "ला रही हैं"
      },
      "past": {
        "m_sg": "लाया",
        "m_pl": "लाए",
        "f_sg": "लाई",
        "f_pl": "लाईं"
      },
      "imperative": {
        "tu": "ला",
        "tum": "लाओ",
        "aap": "लाइए"
      }
    },
    "example": {
      "hindi": "वह रोज़ फल लाता है।",
      "roman": "Vah roz fal lātā hai.",
      "english": "He brings fruits every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "वह रोज़ फल लाता है।",
        "roman": "Vah roz fal lātā hai.",
        "english": "He brings fruits every day.",
        "verbForm": "लाता है",
        "explanation": "Daily habit (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह अभी पानी ला रहा है।",
        "roman": "Vah abhī pānī lā rahā hai.",
        "english": "He is bringing water right now.",
        "verbForm": "ला रहा है",
        "explanation": "Bringing right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "वह सेब लाया।",
        "roman": "Vah seb lāyā.",
        "english": "He brought apples.",
        "verbForm": "लाया",
        "explanation": "Exception: Compound (ले+आना) uses NO 'ने' (लाया)"
      }
    }
  },
  {
    "id": "rakhna",
    "hindi": "रखना",
    "roman": "rakhnā",
    "english": "to put / to place / to keep",
    "cluster": "Objects & Actions",
    "stem": "रख (rakh)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": false,
    "irregularNote": "Regular past: रखा / रखे / रखी / रखीं",
    "mnemonic": "Put items onto the RACK to keep them tidy.",
    "conjugations": {
      "habitual": {
        "m_sg": "रखता है",
        "f_sg": "रखती है",
        "m_pl": "रखते हैं",
        "f_pl": "रखती हैं"
      },
      "continuous": {
        "m_sg": "रख रहा है",
        "f_sg": "रख रही है",
        "m_pl": "रख रहे हैं",
        "f_pl": "रख रही हैं"
      },
      "past": {
        "m_sg": "रखा",
        "m_pl": "रखे",
        "f_sg": "रखी",
        "f_pl": "रखीं"
      },
      "imperative": {
        "tu": "रख",
        "tum": "रखो",
        "aap": "रखिए"
      }
    },
    "example": {
      "hindi": "मैं मेज़ पर किताब रखता हूँ।",
      "roman": "Maiñ mez par kitāb rakhtā hūñ.",
      "english": "I put the book on the table."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "मैं मेज़ पर किताब रखता हूँ।",
        "roman": "Maiñ mez par kitāb rakhtā hūñ.",
        "english": "I put the book on the table.",
        "verbForm": "रखता हूँ",
        "explanation": "Habitual placement (-ता हूँ)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह मेज़ पर कप रख रही है।",
        "roman": "Vah mez par kap rakh rahī hai.",
        "english": "She is putting the cup on the table right now.",
        "verbForm": "रख रही है",
        "explanation": "Placing right now (-रही है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "उसने मेज़ पर चाबी रखी।",
        "roman": "Usne mez par cābī rakhī.",
        "english": "She kept the key on the table.",
        "verbForm": "रखी",
        "explanation": "Transitive: Takes 'ने', agrees with cābī (रखी)"
      }
    }
  },
  {
    "id": "baat-karna",
    "hindi": "बात करना",
    "roman": "bāt karnā",
    "english": "to talk / converse",
    "cluster": "Nominal Compound Verbs",
    "stem": "बात कर (bāt kar)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": true,
    "irregularNote": "Compound with करना: past form is बात की (talked). Takes से (se) for 'with'.",
    "mnemonic": "BAT (bāt) conversation back and forth like table tennis.",
    "conjugations": {
      "habitual": {
        "m_sg": "बात करता है",
        "f_sg": "बात करती है",
        "m_pl": "बात करते हैं",
        "f_pl": "बात करती हैं"
      },
      "continuous": {
        "m_sg": "बात कर रहा है",
        "f_sg": "बात कर रही है",
        "m_pl": "बात कर रहे हैं",
        "f_pl": "बात कर रही हैं"
      },
      "past": {
        "m_sg": "बात की",
        "m_pl": "बात की",
        "f_sg": "बात की",
        "f_pl": "बात की"
      },
      "imperative": {
        "tu": "बात कर",
        "tum": "बात करो",
        "aap": "बात कीजिए"
      }
    },
    "example": {
      "hindi": "हम रोज़ बात करते हैं।",
      "roman": "Ham roz bāt karte haiñ.",
      "english": "We talk every day."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "हम रोज़ बात करते हैं।",
        "roman": "Ham roz bāt karte haiñ.",
        "english": "We talk every day.",
        "verbForm": "बात करते हैं",
        "explanation": "Daily conversation (-ते हैं)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह फोन पर बात कर रहा है।",
        "roman": "Vah fon par bāt kar rahā hai.",
        "english": "He is talking on the phone right now.",
        "verbForm": "बात कर रहा है",
        "explanation": "Talking right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "मैंने उससे बात की।",
        "roman": "Maiñne us-se bāt kī.",
        "english": "I talked with him.",
        "verbForm": "बात की",
        "explanation": "Compound: Takes 'ने', agrees with bāt (की)"
      }
    }
  },
  {
    "id": "yaad-karna",
    "hindi": "याद करना",
    "roman": "yād karnā",
    "english": "to remember / memorize / miss someone",
    "cluster": "Nominal Compound Verbs",
    "stem": "याद कर (yād kar)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": true,
    "irregularNote": "Compound with करना: past is याद किया.",
    "mnemonic": "YARD: In your mind's back yard, you remember childhood memories.",
    "conjugations": {
      "habitual": {
        "m_sg": "याद करता है",
        "f_sg": "याद करती है",
        "m_pl": "याद करते हैं",
        "f_pl": "याद करती हैं"
      },
      "continuous": {
        "m_sg": "याद कर रहा है",
        "f_sg": "याद कर रही है",
        "m_pl": "याद कर रहे हैं",
        "f_pl": "याद कर रही हैं"
      },
      "past": {
        "m_sg": "याद किया",
        "m_pl": "याद किए",
        "f_sg": "याद की",
        "f_pl": "याद कीं"
      },
      "imperative": {
        "tu": "याद कर",
        "tum": "याद करो",
        "aap": "याद कीजिए"
      }
    },
    "example": {
      "hindi": "छात्र पाठ याद करता है।",
      "roman": "Chātra pāṭh yād kartā hai.",
      "english": "The student memorizes the lesson."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "छात्र पाठ याद करता है।",
        "roman": "Chātra pāṭh yād kartā hai.",
        "english": "The student memorizes the lesson.",
        "verbForm": "याद करता है",
        "explanation": "Study habit (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "मैं दोस्त को याद कर रहा हूँ।",
        "roman": "Maiñ dost ko yād kar rahā hūñ.",
        "english": "I am remembering my friend right now.",
        "verbForm": "याद कर रहा हूँ",
        "explanation": "Remembering right now (-रहा हूँ)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "उसने पाठ याद किया।",
        "roman": "Usne pāṭh yād kiyā.",
        "english": "He memorized the lesson.",
        "verbForm": "याद किया",
        "explanation": "Takes 'ने', agrees with pāṭh (किया)"
      }
    }
  },
  {
    "id": "madad-karna",
    "hindi": "मदद करना",
    "roman": "madad karnā",
    "english": "to help",
    "cluster": "Nominal Compound Verbs",
    "stem": "मदद कर (madad kar)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": true,
    "irregularNote": "Takes की (kī) for the person helped: मेरी मदद करना (help me).",
    "mnemonic": "When you are MAD with a tough problem, you need someone to help.",
    "conjugations": {
      "habitual": {
        "m_sg": "मदद करता है",
        "f_sg": "मदद करती है",
        "m_pl": "मदद करते हैं",
        "f_pl": "मदद करती हैं"
      },
      "continuous": {
        "m_sg": "मदद कर रहा है",
        "f_sg": "मदद कर रही है",
        "m_pl": "मदद कर रहे हैं",
        "f_pl": "मदद कर रही हैं"
      },
      "past": {
        "m_sg": "मदद की",
        "m_pl": "मदद की",
        "f_sg": "मदद की",
        "f_pl": "मदद की"
      },
      "imperative": {
        "tu": "मदद कर",
        "tum": "मदद करो",
        "aap": "मदद कीजिए"
      }
    },
    "example": {
      "hindi": "वह मेरी मदद करता है।",
      "roman": "Vah merī madad kartā hai.",
      "english": "He helps me."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "वह मेरी मदद करता है।",
        "roman": "Vah merī madad kartā hai.",
        "english": "He helps me.",
        "verbForm": "मदद करता है",
        "explanation": "Habitual help (-ता है)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "वह दोस्त की मदद कर रहा है।",
        "roman": "Vah dost kī madad kar rahā hai.",
        "english": "He is helping his friend right now.",
        "verbForm": "मदद कर रहा है",
        "explanation": "Helping right now (-रहा है)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "उसने मेरी मदद की।",
        "roman": "Usne merī madad kī.",
        "english": "He helped me.",
        "verbForm": "मदद की",
        "explanation": "Takes 'ने', agrees with feminine madad (की)"
      }
    }
  },
  {
    "id": "intazar-karna",
    "hindi": "इंतज़ार करना",
    "roman": "intazār karnā",
    "english": "to wait",
    "cluster": "Nominal Compound Verbs",
    "stem": "इंतज़ार कर (intazār kar)",
    "transitivity": "Transitive",
    "takesNe": true,
    "isIrregular": true,
    "irregularNote": "Takes का (kā) for the person/thing waited for: मेरा इंतज़ार करना (wait for me).",
    "mnemonic": "Waiting feels like an 'interstate' journey.",
    "conjugations": {
      "habitual": {
        "m_sg": "इंतज़ार करता है",
        "f_sg": "इंतज़ार करती है",
        "m_pl": "इंतज़ार करते हैं",
        "f_pl": "इंतज़ार करती हैं"
      },
      "continuous": {
        "m_sg": "इंतज़ार कर रहा है",
        "f_sg": "इंतज़ार कर रही है",
        "m_pl": "इंतज़ार कर रहे हैं",
        "f_pl": "इंतज़ार कर रही हैं"
      },
      "past": {
        "m_sg": "इंतज़ार किया",
        "m_pl": "इंतज़ार किए",
        "f_sg": "इंतज़ार की",
        "f_pl": "इंतज़ार कीं"
      },
      "imperative": {
        "tu": "इंतज़ार कर",
        "tum": "इंतज़ार करो",
        "aap": "इंतज़ार कीजिए"
      }
    },
    "example": {
      "hindi": "हम यहाँ इंतज़ार करते हैं।",
      "roman": "Ham yahāñ intazār karte haiñ.",
      "english": "We wait here."
    },
    "examples": {
      "present": {
        "tense": "Present Habitual",
        "hindi": "हम यहाँ इंतज़ार करते हैं।",
        "roman": "Ham yahāñ intazār karte haiñ.",
        "english": "We wait here.",
        "verbForm": "इंतज़ार करते हैं",
        "explanation": "Waiting habit (-ते हैं)"
      },
      "current": {
        "tense": "Current Continuous",
        "hindi": "मैं आपका इंतज़ार कर रहा हूँ।",
        "roman": "Maiñ āpkā intazār kar rahā hūñ.",
        "english": "I am waiting for you right now.",
        "verbForm": "इंतज़ार कर रहा हूँ",
        "explanation": "Waiting right now (-रहा हूँ)"
      },
      "past": {
        "tense": "Simple Past",
        "hindi": "मैंने उसका इंतज़ार किया।",
        "roman": "Maiñne uskā intazār kiyā.",
        "english": "I waited for him.",
        "verbForm": "इंतज़ार किया",
        "explanation": "Takes 'ने', agrees with intazār (किया)"
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
