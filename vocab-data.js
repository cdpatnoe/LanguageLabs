// Core Curated Hindi Vocabulary Curriculum (Non-Verb Words)
// Comprehensively annotated with grammatical gender (Masculine / Feminine),
// direct & oblique plural forms, adjective inflections, mnemonics, and learner-friendly sentences.
const VOCAB_CURRICULUM = [
  {
    "id": "larka",
    "hindi": "लड़का",
    "roman": "laṛkā",
    "english": "boy",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "People & Family",
    "pluralDirect": "लड़के (laṛke)",
    "pluralOblique": "लड़कों (laṛkoñ)",
    "mnemonic": "Think of 'Lark' - a cheerful young boy singing like a lark.",
    "inflection": {
      "direct_sg": "लड़का",
      "direct_pl": "लड़के",
      "oblique_sg": "लड़के",
      "oblique_pl": "लड़कों"
    },
    "example": {
      "hindi": "यह लड़का बहुत होशियार है।",
      "roman": "Yeh laṛkā bahut hośhiyār hai.",
      "english": "This boy is very smart.",
      "explanation": "Type 1 Masculine noun: -आ ending changes to -ए in plural & oblique"
    }
  },
  {
    "id": "larki",
    "hindi": "लड़की",
    "roman": "laṛkī",
    "english": "girl",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "People & Family",
    "pluralDirect": "लड़कियाँ (laṛkiyāñ)",
    "pluralOblique": "लड़कियों (laṛkiyoñ)",
    "mnemonic": "Rhymes with laṛkā, but ends in -ī sound denoting feminine in Hindi.",
    "inflection": {
      "direct_sg": "लड़की",
      "direct_pl": "लड़कियाँ",
      "oblique_sg": "लड़की",
      "oblique_pl": "लड़कियों"
    },
    "example": {
      "hindi": "वह लड़की किताब पढ़ रही है।",
      "roman": "Vah laṛkī kitāb paṛh rahī hai.",
      "english": "That girl is reading a book.",
      "explanation": "Type 1 Feminine noun: -ई ending changes to -इयाँ in direct plural"
    }
  },
  {
    "id": "aadmi",
    "hindi": "आदमी",
    "roman": "ādmī",
    "english": "man / person",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "People & Family",
    "pluralDirect": "आदमी (ādmī)",
    "pluralOblique": "आदमियों (ādmiyoñ)",
    "mnemonic": "Think of 'Adam' - the first man.",
    "inflection": {
      "direct_sg": "आदमी",
      "direct_pl": "आदमी",
      "oblique_sg": "आदमी",
      "oblique_pl": "आदमियों"
    },
    "example": {
      "hindi": "वह भला आदमी है।",
      "roman": "Vah bhalā ādmī hai.",
      "english": "He is a good man.",
      "explanation": "Type 2 Masculine noun: does not end in -आ, so direct singular & plural are identical"
    }
  },
  {
    "id": "aurat",
    "hindi": "औरत",
    "roman": "aurat",
    "english": "woman",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "People & Family",
    "pluralDirect": "औरतें (aurateñ)",
    "pluralOblique": "औरतों (auratoñ)",
    "mnemonic": "Think of 'aura' - a woman with a strong aura.",
    "inflection": {
      "direct_sg": "औरत",
      "direct_pl": "औरतें",
      "oblique_sg": "औरत",
      "oblique_pl": "औरतों"
    },
    "example": {
      "hindi": "वह औरत चाय बना रही है।",
      "roman": "Vah aurat cāy banā rahī hai.",
      "english": "That woman is making tea.",
      "explanation": "Type 2 Feminine noun (ends in consonant): adds -एं in direct plural"
    }
  },
  {
    "id": "baccha",
    "hindi": "बच्चा",
    "roman": "baccā",
    "english": "child",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "People & Family",
    "pluralDirect": "बच्चे (bacce)",
    "pluralOblique": "बच्चों (baccoñ)",
    "mnemonic": "Think of Bach - playing music for children.",
    "inflection": {
      "direct_sg": "बच्चा",
      "direct_pl": "बच्चे",
      "oblique_sg": "बच्चे",
      "oblique_pl": "बच्चों"
    },
    "example": {
      "hindi": "बच्चा पार्क में खेल रहा है।",
      "roman": "Baccā pārk meñ khel rahā hai.",
      "english": "The child is playing in the park.",
      "explanation": "Masculine noun: plural is बच्चे (children), oblique is बच्चों (to children)"
    }
  },
  {
    "id": "dost",
    "hindi": "दोस्त",
    "roman": "dost",
    "english": "friend",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "People & Family",
    "pluralDirect": "दोस्त (dost)",
    "pluralOblique": "दोस्तों (dostoñ)",
    "mnemonic": "Think of having 'DOS' (two) close friends.",
    "inflection": {
      "direct_sg": "दोस्त",
      "direct_pl": "दोस्त",
      "oblique_sg": "दोस्त",
      "oblique_pl": "दोस्तों"
    },
    "example": {
      "hindi": "मेरा दोस्त दिल्ली में रहता है।",
      "roman": "Merā dost dillī meñ rahtā hai.",
      "english": "My friend lives in Delhi.",
      "explanation": "Can be used for any friend; masculine singular takes मेरा (merā)"
    }
  },
  {
    "id": "bhai",
    "hindi": "भाई",
    "roman": "bhāī",
    "english": "brother",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "People & Family",
    "pluralDirect": "भाई (bhāī)",
    "pluralOblique": "भाइयों (bhāiyoñ)",
    "mnemonic": "Brother sounds like Bha-i (fraternal bond).",
    "inflection": {
      "direct_sg": "भाई",
      "direct_pl": "भाई",
      "oblique_sg": "भाई",
      "oblique_pl": "भाइयों"
    },
    "example": {
      "hindi": "मेरा बड़ा भाई कॉलेज में है।",
      "roman": "Merā baṛā bhāī kŏlej meñ hai.",
      "english": "My older brother is in college.",
      "explanation": "Takes masculine adjective बड़ा (baṛā)"
    }
  },
  {
    "id": "behen",
    "hindi": "बहन",
    "roman": "bahan",
    "english": "sister",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "People & Family",
    "pluralDirect": "बहनें (bahaneñ)",
    "pluralOblique": "बहनों (bahanoñ)",
    "mnemonic": "Rhymes with 'pen' - write a letter to your sister.",
    "inflection": {
      "direct_sg": "बहन",
      "direct_pl": "बहनें",
      "oblique_sg": "बहन",
      "oblique_pl": "बहनों"
    },
    "example": {
      "hindi": "मेरी छोटी बहन स्कूल जाती है।",
      "roman": "Merī choṭī bahan skūl jātī hai.",
      "english": "My younger sister goes to school.",
      "explanation": "Feminine noun: takes feminine possessive मेरी and adjective छोटी"
    }
  },
  {
    "id": "pitaji",
    "hindi": "पिताजी",
    "roman": "pitājī",
    "english": "father (respectful)",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "People & Family",
    "pluralDirect": "पिताजी (pitājī)",
    "pluralOblique": "पिताजी (pitājī)",
    "mnemonic": "Pita bread shared with father; suffix -जी adds honorific respect.",
    "inflection": {
      "direct_sg": "पिताजी",
      "direct_pl": "पिताजी",
      "oblique_sg": "पिताजी",
      "oblique_pl": "पिताजी"
    },
    "example": {
      "hindi": "पिताजी अख़बार पढ़ रहे हैं।",
      "roman": "Pitājī akhbār paṛh rahe haiñ.",
      "english": "Father is reading the newspaper.",
      "explanation": "Takes plural/respectful verb agreement: रहे हैं (rahe haiñ)"
    }
  },
  {
    "id": "mataji",
    "hindi": "माताजी",
    "roman": "mātājī",
    "english": "mother (respectful)",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "People & Family",
    "pluralDirect": "माताजी (mātājī)",
    "pluralOblique": "माताजी (mātājī)",
    "mnemonic": "Mata sounds like 'maternal' with respectful suffix -जी.",
    "inflection": {
      "direct_sg": "माताजी",
      "direct_pl": "माताजी",
      "oblique_sg": "माताजी",
      "oblique_pl": "माताजी"
    },
    "example": {
      "hindi": "माताजी स्वादिष्ट खाना बनाती हैं।",
      "roman": "Mātājī svādiṣṭ khānā banātī haiñ.",
      "english": "Mother makes delicious food.",
      "explanation": "Takes respectful feminine plural verb: बनाती हैं (banātī haiñ)"
    }
  },
  {
    "id": "ghar",
    "hindi": "घर",
    "roman": "ghar",
    "english": "house / home",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Home & Everyday",
    "pluralDirect": "घर (ghar)",
    "pluralOblique": "घरों (gharoñ)",
    "mnemonic": "Think of 'hearth' inside a cozy home.",
    "inflection": {
      "direct_sg": "घर",
      "direct_pl": "घर",
      "oblique_sg": "घर",
      "oblique_pl": "घरों"
    },
    "example": {
      "hindi": "हमारा घर बहुत बड़ा है।",
      "roman": "Hamārā ghar bahut baṛā hai.",
      "english": "Our house is very big.",
      "explanation": "Masculine noun: takes हमारा (hamārā) and बड़ा (baṛā)"
    }
  },
  {
    "id": "kamra",
    "hindi": "कमरा",
    "roman": "kamrā",
    "english": "room",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Home & Everyday",
    "pluralDirect": "कमरे (kamre)",
    "pluralOblique": "कमरों (kamroñ)",
    "mnemonic": "Think of a 'camera' sitting on a table in the ROOM.",
    "inflection": {
      "direct_sg": "कमरा",
      "direct_pl": "कमरे",
      "oblique_sg": "कमरे",
      "oblique_pl": "कमरों"
    },
    "example": {
      "hindi": "यह कमरा बहुत साफ़ है।",
      "roman": "Yeh kamrā bahut sāf hai.",
      "english": "This room is very clean.",
      "explanation": "Type 1 Masculine noun: changes to कमरे in oblique (e.g. कमरे में = in the room)"
    }
  },
  {
    "id": "kitab",
    "hindi": "किताब",
    "roman": "kitāb",
    "english": "book",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "Home & Everyday",
    "pluralDirect": "किताबें (kitābeñ)",
    "pluralOblique": "किताबों (kitāboñ)",
    "mnemonic": "Think of 'key tab' marking important chapters in a book.",
    "inflection": {
      "direct_sg": "किताब",
      "direct_pl": "किताबें",
      "oblique_sg": "किताब",
      "oblique_pl": "किताबों"
    },
    "example": {
      "hindi": "यह हिंदी की अच्छी किताब है।",
      "roman": "Yeh hindī kī acchī kitāb hai.",
      "english": "This is a good Hindi book.",
      "explanation": "Feminine noun: takes feminine possessive की and adjective अच्छी"
    }
  },
  {
    "id": "mez",
    "hindi": "मेज़",
    "roman": "mez",
    "english": "table / desk",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "Home & Everyday",
    "pluralDirect": "मेज़ें (mezeñ)",
    "pluralOblique": "मेज़ों (mezoñ)",
    "mnemonic": "Think of a 'maze' pattern carved into the wooden table.",
    "inflection": {
      "direct_sg": "मेज़",
      "direct_pl": "मेज़ें",
      "oblique_sg": "मेज़",
      "oblique_pl": "मेज़ों"
    },
    "example": {
      "hindi": "किताब मेज़ पर रखी है।",
      "roman": "Kitāb mez par rakhī hai.",
      "english": "The book is kept on the table.",
      "explanation": "Feminine noun: takes -एं in plural (मेज़ें)"
    }
  },
  {
    "id": "kursi",
    "hindi": "कुर्सी",
    "roman": "kursī",
    "english": "chair",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "Home & Everyday",
    "pluralDirect": "कुर्सियाँ (kursiyāñ)",
    "pluralOblique": "कुर्सियों (kursiyoñ)",
    "mnemonic": "Think of leaning back into a cushion on a chair.",
    "inflection": {
      "direct_sg": "कुर्सी",
      "direct_pl": "कुर्सियाँ",
      "oblique_sg": "कुर्सी",
      "oblique_pl": "कुर्सियों"
    },
    "example": {
      "hindi": "यह कुर्सी बहुत आरामदायक है।",
      "roman": "Yeh kursī bahut ārāmdāyak hai.",
      "english": "This chair is very comfortable.",
      "explanation": "Feminine noun ending in -ई: plural is कुर्सियाँ (chairs)"
    }
  },
  {
    "id": "darwaza",
    "hindi": "दरवाज़ा",
    "roman": "darwāzā",
    "english": "door",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Home & Everyday",
    "pluralDirect": "दरवाज़े (darwāze)",
    "pluralOblique": "दरवाज़ों (darwāzoñ)",
    "mnemonic": "Think of 'doorway' -> darwāzā.",
    "inflection": {
      "direct_sg": "दरवाज़ा",
      "direct_pl": "दरवाज़े",
      "oblique_sg": "दरवाज़े",
      "oblique_pl": "दरवाज़ों"
    },
    "example": {
      "hindi": "कृपया दरवाज़ा बंद कीजिए।",
      "roman": "Kripayā darwāzā band kījie.",
      "english": "Please close the door.",
      "explanation": "Masculine noun: plural is दरवाज़े (doors)"
    }
  },
  {
    "id": "khirki",
    "hindi": "खिड़की",
    "roman": "khiṛkī",
    "english": "window",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "Home & Everyday",
    "pluralDirect": "खिड़कियाँ (khiṛkiyāñ)",
    "pluralOblique": "खिड़कियों (khiṛkiyoñ)",
    "mnemonic": "Think of the 'clinking' latch of a window in the breeze.",
    "inflection": {
      "direct_sg": "खिड़की",
      "direct_pl": "खिड़कियाँ",
      "oblique_sg": "खिड़की",
      "oblique_pl": "खिड़कियों"
    },
    "example": {
      "hindi": "कमरे की खिड़की खुली है।",
      "roman": "Kamre kī khiṛkī khulī hai.",
      "english": "The room's window is open.",
      "explanation": "Feminine noun: takes खुली (open, fem.)"
    }
  },
  {
    "id": "gari",
    "hindi": "गाड़ी",
    "roman": "gāṛī",
    "english": "car / vehicle / train",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "Home & Everyday",
    "pluralDirect": "गाड़ियाँ (gāṛiyāñ)",
    "pluralOblique": "गाड़ियों (gāṛiyoñ)",
    "mnemonic": "Think of a 'guard' waving a green flag for the train/car.",
    "inflection": {
      "direct_sg": "गाड़ी",
      "direct_pl": "गाड़ियाँ",
      "oblique_sg": "गाड़ी",
      "oblique_pl": "गाड़ियों"
    },
    "example": {
      "hindi": "यह नई गाड़ी किसकी है?",
      "roman": "Yeh naī gāṛī kis kī hai?",
      "english": "Whose new car is this?",
      "explanation": "Feminine noun: takes feminine adjective नई (naī) and किसकी (kis kī)"
    }
  },
  {
    "id": "kalam",
    "hindi": "कलम",
    "roman": "kalam",
    "english": "pen",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "Home & Everyday",
    "pluralDirect": "कलमें (kalameñ)",
    "pluralOblique": "कलमों (kalamoñ)",
    "mnemonic": "Think of a 'calm' scholar writing with a pen.",
    "inflection": {
      "direct_sg": "कलम",
      "direct_pl": "कलमें",
      "oblique_sg": "कलम",
      "oblique_pl": "कलमों"
    },
    "example": {
      "hindi": "मेरी कलम कहाँ है?",
      "roman": "Merī kalam kahāñ hai?",
      "english": "Where is my pen?",
      "explanation": "Typically feminine in Standard Hindi: मेरी कलम (my pen)"
    }
  },
  {
    "id": "bistar",
    "hindi": "बिस्तर",
    "roman": "bistar",
    "english": "bed / bedding",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Home & Everyday",
    "pluralDirect": "बिस्तर (bistar)",
    "pluralOblique": "बिस्तरों (bistaroñ)",
    "mnemonic": "Think of resting your blisters on a soft bed.",
    "inflection": {
      "direct_sg": "बिस्तर",
      "direct_pl": "बिस्तर",
      "oblique_sg": "बिस्तर",
      "oblique_pl": "बिस्तरों"
    },
    "example": {
      "hindi": "उसका बिस्तर साफ़ है।",
      "roman": "Uskā bistar sāf hai.",
      "english": "His bed is clean.",
      "explanation": "Masculine noun: takes उसका (uskā)"
    }
  },
  {
    "id": "pani",
    "hindi": "पानी",
    "roman": "pānī",
    "english": "water",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Food & Drinks",
    "pluralDirect": "पानी (pānī)",
    "pluralOblique": "पानी (pānī)",
    "mnemonic": "Think of clear water you drink from a pan.",
    "inflection": {
      "direct_sg": "पानी",
      "direct_pl": "पानी",
      "oblique_sg": "पानी",
      "oblique_pl": "पानी"
    },
    "example": {
      "hindi": "मुझे ठंडा पानी चाहिए।",
      "roman": "Mujhe ṭhaṇḍā pānī cāhie.",
      "english": "I want cold water.",
      "explanation": "SURPRISE FOR LEARNERS: Ends in -ई but is MASCULINE! Takes ठंडा (ṭhaṇḍā), not ठंडी"
    }
  },
  {
    "id": "chay",
    "hindi": "चाय",
    "roman": "cāy",
    "english": "tea",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "Food & Drinks",
    "pluralDirect": "चाय (cāy)",
    "pluralOblique": "चाय (cāy)",
    "mnemonic": "Famous spiced Chai tea loved across India.",
    "inflection": {
      "direct_sg": "चाय",
      "direct_pl": "चाय",
      "oblique_sg": "चाय",
      "oblique_pl": "चाय"
    },
    "example": {
      "hindi": "यह गरम चाय बहुत अच्छी है।",
      "roman": "Yeh garam cāy bahut acchī hai.",
      "english": "This hot tea is very good.",
      "explanation": "Feminine noun: takes अच्छी (acchī)"
    }
  },
  {
    "id": "doodh",
    "hindi": "दूध",
    "roman": "dūdh",
    "english": "milk",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Food & Drinks",
    "pluralDirect": "दूध (dūdh)",
    "pluralOblique": "दूध (dūdh)",
    "mnemonic": "Think of 'dude' drinking a glass of wholesome milk.",
    "inflection": {
      "direct_sg": "दूध",
      "direct_pl": "दूध",
      "oblique_sg": "दूध",
      "oblique_pl": "दूध"
    },
    "example": {
      "hindi": "बच्चा मीठा दूध पीता है।",
      "roman": "Baccā mīṭhā dūdh pītā hai.",
      "english": "The child drinks sweet milk.",
      "explanation": "Masculine noun: takes मीठा (mīṭhā)"
    }
  },
  {
    "id": "khana_noun",
    "hindi": "खाना",
    "roman": "khānā",
    "english": "food / meal",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Food & Drinks",
    "pluralDirect": "खाने (khāne)",
    "pluralOblique": "खानों (khānoñ)",
    "mnemonic": "Same word as the verb 'to eat', but functioning as noun 'food'.",
    "inflection": {
      "direct_sg": "खाना",
      "direct_pl": "खाने",
      "oblique_sg": "खाने",
      "oblique_pl": "खानों"
    },
    "example": {
      "hindi": "भारतीय खाना बहुत स्वादिष्ट है।",
      "roman": "Bhāratīya khānā bahut svādiṣṭ hai.",
      "english": "Indian food is very delicious.",
      "explanation": "Masculine noun: takes भारतीय (bhāratīya)"
    }
  },
  {
    "id": "roti",
    "hindi": "रोटी",
    "roman": "roṭī",
    "english": "flatbread / roti",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "Food & Drinks",
    "pluralDirect": "रोटियाँ (roṭiyāñ)",
    "pluralOblique": "रोटियों (roṭiyoñ)",
    "mnemonic": "The staple Indian round bread cooked on a tawa.",
    "inflection": {
      "direct_sg": "रोटी",
      "direct_pl": "रोटियाँ",
      "oblique_sg": "रोटी",
      "oblique_pl": "रोटियों"
    },
    "example": {
      "hindi": "माँ गरम रोटियाँ बना रही हैं।",
      "roman": "Māñ garam roṭiyāñ banā rahī haiñ.",
      "english": "Mother is making hot rotis.",
      "explanation": "Feminine noun: plural is रोटियाँ (roṭiyāñ)"
    }
  },
  {
    "id": "seb",
    "hindi": "सेब",
    "roman": "seb",
    "english": "apple",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Food & Drinks",
    "pluralDirect": "सेब (seb)",
    "pluralOblique": "सेबों (seboñ)",
    "mnemonic": "Think of a crisp, sweet fruit.",
    "inflection": {
      "direct_sg": "सेब",
      "direct_pl": "सेब",
      "oblique_sg": "सेब",
      "oblique_pl": "सेबों"
    },
    "example": {
      "hindi": "यह लाल सेब मीठा है।",
      "roman": "Yeh lāl seb mīṭhā hai.",
      "english": "This red apple is sweet.",
      "explanation": "Masculine noun: takes मीठा (mīṭhā), direct plural remains सेब"
    }
  },
  {
    "id": "chawal",
    "hindi": "चावल",
    "roman": "cāval",
    "english": "rice",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Food & Drinks",
    "pluralDirect": "चावल (cāval)",
    "pluralOblique": "चावलों (cāvaloñ)",
    "mnemonic": "Think of savoring a bowl of basmati rice.",
    "inflection": {
      "direct_sg": "चावल",
      "direct_pl": "चावल",
      "oblique_sg": "चावल",
      "oblique_pl": "चावलों"
    },
    "example": {
      "hindi": "हम रोज़ चावल खाते हैं।",
      "roman": "Ham roz cāval khāte haiñ.",
      "english": "We eat rice every day.",
      "explanation": "Masculine uncountable/mass noun"
    }
  },
  {
    "id": "fal",
    "hindi": "फल",
    "roman": "phal",
    "english": "fruit",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Food & Drinks",
    "pluralDirect": "फल (phal)",
    "pluralOblique": "फलों (phaloñ)",
    "mnemonic": "Fruits 'fall' ripe from trees.",
    "inflection": {
      "direct_sg": "फल",
      "direct_pl": "फल",
      "oblique_sg": "फल",
      "oblique_pl": "फलों"
    },
    "example": {
      "hindi": "ताज़ा फल सेहत के लिए अच्छा है।",
      "roman": "Tāzā phal sehat ke lie acchā hai.",
      "english": "Fresh fruit is good for health.",
      "explanation": "Masculine noun: takes ताज़ा (tāzā) and अच्छा (acchā)"
    }
  },
  {
    "id": "sabzi",
    "hindi": "सब्ज़ी",
    "roman": "sabzī",
    "english": "vegetable / vegetable dish",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "Food & Drinks",
    "pluralDirect": "सब्ज़ियाँ (sabziyāñ)",
    "pluralOblique": "सब्ज़ियों (sabziyoñ)",
    "mnemonic": "The green dish served at dinner.",
    "inflection": {
      "direct_sg": "सब्ज़ी",
      "direct_pl": "सब्ज़ियाँ",
      "oblique_sg": "सब्ज़ी",
      "oblique_pl": "सब्ज़ियों"
    },
    "example": {
      "hindi": "यह सब्ज़ी बहुत ताज़ा है।",
      "roman": "Yeh sabzī bahut tāzā hai.",
      "english": "This vegetable is very fresh.",
      "explanation": "Feminine noun: plural is सब्ज़ियाँ (sabziyāñ)"
    }
  },
  {
    "id": "chini",
    "hindi": "चीनी",
    "roman": "cīnī",
    "english": "sugar",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "Food & Drinks",
    "pluralDirect": "चीनी (cīnī)",
    "pluralOblique": "चीनी (cīnī)",
    "mnemonic": "Sweet sugar originally imported along trade routes.",
    "inflection": {
      "direct_sg": "चीनी",
      "direct_pl": "चीनी",
      "oblique_sg": "चीनी",
      "oblique_pl": "चीनी"
    },
    "example": {
      "hindi": "चाय में थोड़ी चीनी डालिए।",
      "roman": "Cāy meñ thoṛī cīnī ḍālie.",
      "english": "Put a little sugar in the tea.",
      "explanation": "Feminine noun: takes थोड़ी (thoṛī)"
    }
  },
  {
    "id": "shahar",
    "hindi": "शहर",
    "roman": "śhahar",
    "english": "city",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Places & Nature",
    "pluralDirect": "शहर (śhahar)",
    "pluralOblique": "शहरों (śhaharoñ)",
    "mnemonic": "Think of sharing life in a busy city.",
    "inflection": {
      "direct_sg": "शहर",
      "direct_pl": "शहर",
      "oblique_sg": "शहर",
      "oblique_pl": "शहरों"
    },
    "example": {
      "hindi": "दिल्ली एक बड़ा शहर है।",
      "roman": "Dillī ek baṛā śhahar hai.",
      "english": "Delhi is a big city.",
      "explanation": "Masculine noun: takes बड़ा (baṛā)"
    }
  },
  {
    "id": "gaon",
    "hindi": "गाँव",
    "roman": "gāñv",
    "english": "village",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Places & Nature",
    "pluralDirect": "गाँव (gāñv)",
    "pluralOblique": "गाँवों (gāñvoñ)",
    "mnemonic": "Where cows (gāy) roam in peaceful villages.",
    "inflection": {
      "direct_sg": "गाँव",
      "direct_pl": "गाँव",
      "oblique_sg": "गाँव",
      "oblique_pl": "गाँवों"
    },
    "example": {
      "hindi": "मेरा गाँव बहुत सुंदर है।",
      "roman": "Merā gāñv bahut sundar hai.",
      "english": "My village is very beautiful.",
      "explanation": "Masculine noun: takes मेरा (merā)"
    }
  },
  {
    "id": "bazaar",
    "hindi": "बाज़ार",
    "roman": "bāzār",
    "english": "market",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Places & Nature",
    "pluralDirect": "बाज़ार (bāzār)",
    "pluralOblique": "बाज़ारों (bāzāroñ)",
    "mnemonic": "Bazaar - vibrant marketplace full of stalls.",
    "inflection": {
      "direct_sg": "बाज़ार",
      "direct_pl": "बाज़ार",
      "oblique_sg": "बाज़ार",
      "oblique_pl": "बाज़ारों"
    },
    "example": {
      "hindi": "आज बाज़ार बंद है।",
      "roman": "Āj bāzār band hai.",
      "english": "The market is closed today.",
      "explanation": "Masculine noun: oblique is बाज़ार में (in the market)"
    }
  },
  {
    "id": "dukan",
    "hindi": "दुकान",
    "roman": "dukān",
    "english": "shop / store",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "Places & Nature",
    "pluralDirect": "दुकानें (dukāneñ)",
    "pluralOblique": "दुकानों (dukānoñ)",
    "mnemonic": "Think of stopping at a small boutique shop.",
    "inflection": {
      "direct_sg": "दुकान",
      "direct_pl": "दुकानें",
      "oblique_sg": "दुकान",
      "oblique_pl": "दुकानों"
    },
    "example": {
      "hindi": "यह दुकान सुबह खुलती है।",
      "roman": "Yeh dukān subah khultī hai.",
      "english": "This shop opens in the morning.",
      "explanation": "Feminine noun: takes खुलती (khultī)"
    }
  },
  {
    "id": "rasta",
    "hindi": "रास्ता",
    "roman": "rāstā",
    "english": "path / road / way",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Places & Nature",
    "pluralDirect": "रास्ते (rāste)",
    "pluralOblique": "रास्तों (rāstoñ)",
    "mnemonic": "Think of the right road / way.",
    "inflection": {
      "direct_sg": "रास्ता",
      "direct_pl": "रास्ते",
      "oblique_sg": "रास्ते",
      "oblique_pl": "रास्तों"
    },
    "example": {
      "hindi": "यह रास्ता सीधा स्टेशन जाता है।",
      "roman": "Yeh rāstā sīdhā sṭeśhan jātā hai.",
      "english": "This road goes straight to the station.",
      "explanation": "Masculine noun: oblique is रास्ते पर (on the way)"
    }
  },
  {
    "id": "per",
    "hindi": "पेड़",
    "roman": "peṛ",
    "english": "tree",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Places & Nature",
    "pluralDirect": "पेड़ (peṛ)",
    "pluralOblique": "पेड़ों (peṛoñ)",
    "mnemonic": "Think of a tall tree standing proudly in a field.",
    "inflection": {
      "direct_sg": "पेड़",
      "direct_pl": "पेड़",
      "oblique_sg": "पेड़",
      "oblique_pl": "पेड़ों"
    },
    "example": {
      "hindi": "पेड़ पर कई पक्षी हैं।",
      "roman": "Peṛ par kaī pakṣī haiñ.",
      "english": "There are many birds on the tree.",
      "explanation": "Masculine noun: direct plural remains पेड़"
    }
  },
  {
    "id": "phool",
    "hindi": "फूल",
    "roman": "phūl",
    "english": "flower",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Places & Nature",
    "pluralDirect": "फूल (phūl)",
    "pluralOblique": "फूलों (phūloñ)",
    "mnemonic": "Think of a bloom in FULL glory.",
    "inflection": {
      "direct_sg": "फूल",
      "direct_pl": "फूल",
      "oblique_sg": "फूल",
      "oblique_pl": "फूलों"
    },
    "example": {
      "hindi": "यह पीला फूल बहुत सुंदर है।",
      "roman": "Yeh pīlā phūl bahut sundar hai.",
      "english": "This yellow flower is very beautiful.",
      "explanation": "Masculine noun: takes पीला (pīlā)"
    }
  },
  {
    "id": "din",
    "hindi": "दिन",
    "roman": "din",
    "english": "day",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Places & Nature",
    "pluralDirect": "दिन (din)",
    "pluralOblique": "दिनों (dinoñ)",
    "mnemonic": "During the day before dinner.",
    "inflection": {
      "direct_sg": "दिन",
      "direct_pl": "दिन",
      "oblique_sg": "दिन",
      "oblique_pl": "दिनों"
    },
    "example": {
      "hindi": "आज का दिन बहुत अच्छा है।",
      "roman": "Āj kā din bahut acchā hai.",
      "english": "Today is a very good day.",
      "explanation": "Masculine noun: takes का (kā) and अच्छा (acchā)"
    }
  },
  {
    "id": "raat",
    "hindi": "रात",
    "roman": "rāt",
    "english": "night",
    "pos": "Noun",
    "gender": "Feminine",
    "category": "Places & Nature",
    "pluralDirect": "रातें (rāteñ)",
    "pluralOblique": "रातों (rātoñ)",
    "mnemonic": "Rāt - nocturnal rest under starlight.",
    "inflection": {
      "direct_sg": "रात",
      "direct_pl": "रातें",
      "oblique_sg": "रात",
      "oblique_pl": "रातों"
    },
    "example": {
      "hindi": "आज की रात बहुत ठंडी है।",
      "roman": "Āj kī rāt bahut ṭhaṇḍī hai.",
      "english": "Tonight is very cold.",
      "explanation": "Feminine noun: takes की (kī) and ठंडी (ṭhaṇḍī)"
    }
  },
  {
    "id": "accha",
    "hindi": "अच्छा",
    "roman": "acchā",
    "english": "good / fine",
    "pos": "Adjective",
    "isInflecting": true,
    "category": "Descriptive Adjectives",
    "mnemonic": "Think of 'a-cha' - the universal Indian affirmation!",
    "inflection": {
      "m_sg": "अच्छा (acchā)",
      "f_sg": "अच्छी (acchī)",
      "m_pl": "अच्छे (acche)",
      "f_pl": "अच्छी (acchī)"
    },
    "example": {
      "hindi": "वह अच्छा लड़का है और वह अच्छी लड़की है।",
      "roman": "Vah acchā laṛkā hai aur vah acchī laṛkī hai.",
      "english": "He is a good boy and she is a good girl.",
      "explanation": "Inflects to match noun gender & number: अच्छा / अच्छी / अच्छे"
    }
  },
  {
    "id": "bada",
    "hindi": "बड़ा",
    "roman": "baṛā",
    "english": "big / elder",
    "pos": "Adjective",
    "isInflecting": true,
    "category": "Descriptive Adjectives",
    "mnemonic": "A 'BADA-bing' giant size!",
    "inflection": {
      "m_sg": "बड़ा (baṛā)",
      "f_sg": "बड़ी (baṛī)",
      "m_pl": "बड़े (baṛe)",
      "f_pl": "बड़ी (baṛī)"
    },
    "example": {
      "hindi": "यह बड़ा कमरा है।",
      "roman": "Yeh baṛā kamrā hai.",
      "english": "This is a big room.",
      "explanation": "Agreement: बड़ा घर (big house, M), बड़ी किताब (big book, F)"
    }
  },
  {
    "id": "chhota",
    "hindi": "छोटा",
    "roman": "choṭā",
    "english": "small / younger",
    "pos": "Adjective",
    "isInflecting": true,
    "category": "Descriptive Adjectives",
    "mnemonic": "Think of 'Chhota Bheem' - the little hero.",
    "inflection": {
      "m_sg": "छोटा (choṭā)",
      "f_sg": "छोटी (choṭī)",
      "m_pl": "छोटे (choṭe)",
      "f_pl": "छोटी (choṭī)"
    },
    "example": {
      "hindi": "यह छोटी दुकान है।",
      "roman": "Yeh choṭī dukān hai.",
      "english": "This is a small shop.",
      "explanation": "Agreement: छोटा कमरा (small room, M), छोटी खिड़की (small window, F)"
    }
  },
  {
    "id": "naya",
    "hindi": "नया",
    "roman": "nayā",
    "english": "new",
    "pos": "Adjective",
    "isInflecting": true,
    "category": "Descriptive Adjectives",
    "mnemonic": "Think of 'new' -> nayā.",
    "inflection": {
      "m_sg": "नया (nayā)",
      "f_sg": "नई (naī)",
      "m_pl": "नये / नए (nae)",
      "f_pl": "नई (naī)"
    },
    "example": {
      "hindi": "यह नया फोन है और यह नई किताब है।",
      "roman": "Yeh nayā fon hai aur yeh naī kitāb hai.",
      "english": "This is a new phone and this is a new book.",
      "explanation": "Note spelling: नया (M.sg), नई (F.sg), नए (M.pl)"
    }
  },
  {
    "id": "purana",
    "hindi": "पुराना",
    "roman": "purānā",
    "english": "old (objects)",
    "pos": "Adjective",
    "isInflecting": true,
    "category": "Descriptive Adjectives",
    "mnemonic": "Think of ancient Indian texts called Puranas.",
    "inflection": {
      "m_sg": "पुराना (purānā)",
      "f_sg": "पुरानी (purānī)",
      "m_pl": "पुराने (purāne)",
      "f_pl": "पुरानी (purānī)"
    },
    "example": {
      "hindi": "यह पुरानी दिल्ली का रास्ता है।",
      "roman": "Yeh purānī dillī kā rāstā hai.",
      "english": "This is the road of Old Delhi.",
      "explanation": "Agreement: पुराना घर (old house, M), पुरानी मेज़ (old table, F)"
    }
  },
  {
    "id": "lamba",
    "hindi": "लंबा",
    "roman": "lambā",
    "english": "tall / long",
    "pos": "Adjective",
    "isInflecting": true,
    "category": "Descriptive Adjectives",
    "mnemonic": "Think of reaching high like a lambent flame.",
    "inflection": {
      "m_sg": "लंबा (lambā)",
      "f_sg": "लंबी (lambī)",
      "m_pl": "लंबाई / लंबे (lambe)",
      "f_pl": "लंबी (lambī)"
    },
    "example": {
      "hindi": "वह बहुत लंबा लड़का है।",
      "roman": "Vah bahut lambā laṛkā hai.",
      "english": "He is a very tall boy.",
      "explanation": "Agreement: लंबा रास्ता (long road, M), लंबी रात (long night, F)"
    }
  },
  {
    "id": "meetha",
    "hindi": "मीठा",
    "roman": "mīṭhā",
    "english": "sweet",
    "pos": "Adjective",
    "isInflecting": true,
    "category": "Descriptive Adjectives",
    "mnemonic": "Think of Indian mithai (sweets)!",
    "inflection": {
      "m_sg": "मीठा (mīṭhā)",
      "f_sg": "मीठी (mīṭhī)",
      "m_pl": "मीठे (mīṭhe)",
      "f_pl": "मीठी (mīṭhī)"
    },
    "example": {
      "hindi": "यह आम बहुत मीठा है।",
      "roman": "Yeh ām bahut mīṭhā hai.",
      "english": "This mango is very sweet.",
      "explanation": "Agreement: मीठा सेब (sweet apple, M), मीठी चाय (sweet tea, F)"
    }
  },
  {
    "id": "thanda",
    "hindi": "ठंडा",
    "roman": "ṭhaṇḍā",
    "english": "cold / chilled",
    "pos": "Adjective",
    "isInflecting": true,
    "category": "Descriptive Adjectives",
    "mnemonic": "Think of thunderous cold winter winds.",
    "inflection": {
      "m_sg": "ठंडा (ṭhaṇḍā)",
      "f_sg": "ठंडी (ṭhaṇḍī)",
      "m_pl": "ठंडे (ṭhaṇḍe)",
      "f_pl": "ठंडी (ṭhaṇḍī)"
    },
    "example": {
      "hindi": "मुझे ठंडा पानी दीजिए।",
      "roman": "Mujhe ṭhaṇḍā pānī dījie.",
      "english": "Please give me cold water.",
      "explanation": "Agreement: ठंडा पानी (cold water, M), ठंडी हवा (cold breeze, F)"
    }
  },
  {
    "id": "garam",
    "hindi": "गरम",
    "roman": "garam",
    "english": "hot / warm",
    "pos": "Adjective",
    "isInflecting": false,
    "category": "Descriptive Adjectives",
    "mnemonic": "Think of Garam Masala (warm spice blend)!",
    "inflection": {
      "m_sg": "गरम (garam)",
      "f_sg": "गरम (garam)",
      "m_pl": "गरम (garam)",
      "f_pl": "गरम (garam)"
    },
    "example": {
      "hindi": "गरम चाय पीजिए।",
      "roman": "Garam cāy pījie.",
      "english": "Drink hot tea.",
      "explanation": "INVARIABLE ADJECTIVE: Does not end in -आ, so it never changes form!"
    }
  },
  {
    "id": "mahanga",
    "hindi": "महँगा",
    "roman": "mahañgā",
    "english": "expensive",
    "pos": "Adjective",
    "isInflecting": true,
    "category": "Descriptive Adjectives",
    "mnemonic": "Mega cost = mahañgā.",
    "inflection": {
      "m_sg": "महँगा (mahañgā)",
      "f_sg": "महँगी (mahañgī)",
      "m_pl": "महँगे (mahañge)",
      "f_pl": "महँगी (mahañgī)"
    },
    "example": {
      "hindi": "यह गाड़ी बहुत महँगी है।",
      "roman": "Yeh gāṛī bahut mahañgī hai.",
      "english": "This car is very expensive.",
      "explanation": "Agreement: महँगा फोन (expensive phone, M), महँगी गाड़ी (expensive car, F)"
    }
  },
  {
    "id": "sasta",
    "hindi": "सस्ता",
    "roman": "sastā",
    "english": "cheap / affordable",
    "pos": "Adjective",
    "isInflecting": true,
    "category": "Descriptive Adjectives",
    "mnemonic": "Think of 'sustainable' prices for your budget.",
    "inflection": {
      "m_sg": "सस्ता (sastā)",
      "f_sg": "सस्ती (sastī)",
      "m_pl": "सस्ते (saste)",
      "f_pl": "सस्ती (sastī)"
    },
    "example": {
      "hindi": "यहाँ फल सस्ते हैं।",
      "roman": "Yahāñ phal saste haiñ.",
      "english": "Fruits are cheap here.",
      "explanation": "Agreement: सस्ता सेब (cheap apple, M.sg), सस्ते फल (cheap fruits, M.pl), सस्ती किताब (cheap book, F)"
    }
  },
  {
    "id": "saf",
    "hindi": "साफ़",
    "roman": "sāf",
    "english": "clean / clear",
    "pos": "Adjective",
    "isInflecting": false,
    "category": "Descriptive Adjectives",
    "mnemonic": "Safe and clean.",
    "inflection": {
      "m_sg": "साफ़ (sāf)",
      "f_sg": "साफ़ (sāf)",
      "m_pl": "साफ़ (sāf)",
      "f_pl": "साफ़ (sāf)"
    },
    "example": {
      "hindi": "यह कमरा और यह मेज़ साफ़ हैं।",
      "roman": "Yeh kamrā aur yeh mez sāf haiñ.",
      "english": "This room and this table are clean.",
      "explanation": "INVARIABLE: Remains साफ़ for masculine, feminine, singular, and plural!"
    }
  },
  {
    "id": "sundar",
    "hindi": "सुंदर",
    "roman": "sundar",
    "english": "beautiful",
    "pos": "Adjective",
    "isInflecting": false,
    "category": "Descriptive Adjectives",
    "mnemonic": "Think of a 'splendid' sunny landscape.",
    "inflection": {
      "m_sg": "सुंदर (sundar)",
      "f_sg": "सुंदर (sundar)",
      "m_pl": "सुंदर (sundar)",
      "f_pl": "सुंदर (sundar)"
    },
    "example": {
      "hindi": "यह बहुत सुंदर जगह है।",
      "roman": "Yeh bahut sundar jagah hai.",
      "english": "This is a very beautiful place.",
      "explanation": "INVARIABLE: Remains सुंदर for both genders and numbers"
    }
  },
  {
    "id": "aasan",
    "hindi": "आसान",
    "roman": "āsān",
    "english": "easy / simple",
    "pos": "Adjective",
    "isInflecting": false,
    "category": "Descriptive Adjectives",
    "mnemonic": "Relaxed like an easy 'asana' (posture).",
    "inflection": {
      "m_sg": "आसान (āsān)",
      "f_sg": "आसान (āsān)",
      "m_pl": "आसान (āsān)",
      "f_pl": "आसान (āsān)"
    },
    "example": {
      "hindi": "हिंदी व्याकरण आसान है।",
      "roman": "Hindī vyākaraṇ āsān hai.",
      "english": "Hindi grammar is easy.",
      "explanation": "INVARIABLE: Never changes form"
    }
  },
  {
    "id": "mushkil",
    "hindi": "मुश्किल",
    "roman": "muśhkil",
    "english": "difficult / hard",
    "pos": "Adjective",
    "isInflecting": false,
    "category": "Descriptive Adjectives",
    "mnemonic": "Think of a challenging muscle task.",
    "inflection": {
      "m_sg": "मुश्किल (muśhkil)",
      "f_sg": "मुश्किल (muśhkil)",
      "m_pl": "मुश्किल (muśhkil)",
      "f_pl": "मुश्किल (muśhkil)"
    },
    "example": {
      "hindi": "यह सवाल मुश्किल नहीं है।",
      "roman": "Yeh savāl muśhkil nahīñ hai.",
      "english": "This question is not difficult.",
      "explanation": "INVARIABLE: Remains unchanged for all nouns"
    }
  },
  {
    "id": "khush",
    "hindi": "ख़ुश",
    "roman": "khuśh",
    "english": "happy / pleased",
    "pos": "Adjective",
    "isInflecting": false,
    "category": "Descriptive Adjectives",
    "mnemonic": "Think of glowing with joy.",
    "inflection": {
      "m_sg": "ख़ुश (khuśh)",
      "f_sg": "ख़ुश (khuśh)",
      "m_pl": "ख़ुश (khuśh)",
      "f_pl": "ख़ुश (khuśh)"
    },
    "example": {
      "hindi": "हम सब आज बहुत ख़ुश हैं।",
      "roman": "Ham sab āj bahut khuśh haiñ.",
      "english": "We all are very happy today.",
      "explanation": "INVARIABLE: Remains ख़ुश regardless of gender"
    }
  },
  {
    "id": "lal",
    "hindi": "लाल",
    "roman": "lāl",
    "english": "red",
    "pos": "Adjective",
    "isInflecting": false,
    "category": "Colors & Shapes",
    "mnemonic": "Think of the famous Red Fort (Lāl Qilā) in Delhi.",
    "inflection": {
      "m_sg": "लाल (lāl)",
      "f_sg": "लाल (lāl)",
      "m_pl": "लाल (lāl)",
      "f_pl": "लाल (lāl)"
    },
    "example": {
      "hindi": "मेरे पास एक लाल किताब है।",
      "roman": "Mere pās ek lāl kitāb hai.",
      "english": "I have a red book.",
      "explanation": "INVARIABLE COLOR: लाल सेब (red apple, M) and लाल साड़ी (red saree, F)"
    }
  },
  {
    "id": "neela",
    "hindi": "नीला",
    "roman": "nīlā",
    "english": "blue",
    "pos": "Adjective",
    "isInflecting": true,
    "category": "Colors & Shapes",
    "mnemonic": "Think of the Nile river reflecting blue skies.",
    "inflection": {
      "m_sg": "नीला (nīlā)",
      "f_sg": "नीली (nīlī)",
      "m_pl": "नीले (nīle)",
      "f_pl": "नीली (nīlī)"
    },
    "example": {
      "hindi": "आसमान नीला है और कार नीली है।",
      "roman": "Āsmān nīlā hai aur kār nīlī hai.",
      "english": "The sky is blue and the car is blue.",
      "explanation": "INFLECTING COLOR: Ends in -आ, so inflects to नीला / नीली / नीले"
    }
  },
  {
    "id": "peela",
    "hindi": "पीला",
    "roman": "pīlā",
    "english": "yellow",
    "pos": "Adjective",
    "isInflecting": true,
    "category": "Colors & Shapes",
    "mnemonic": "Think of peeling a bright yellow banana.",
    "inflection": {
      "m_sg": "पीला (pīlā)",
      "f_sg": "पीली (pīlī)",
      "m_pl": "पीले (pīle)",
      "f_pl": "पीली (pīlī)"
    },
    "example": {
      "hindi": "वह पीली साड़ी बहुत सुंदर है।",
      "roman": "Vah pīlī sāṛī bahut sundar hai.",
      "english": "That yellow saree is very beautiful.",
      "explanation": "INFLECTING COLOR: पीला फूल (yellow flower, M), पीली दाल (yellow lentils, F)"
    }
  },
  {
    "id": "hara",
    "hindi": "हरा",
    "roman": "harā",
    "english": "green",
    "pos": "Adjective",
    "isInflecting": true,
    "category": "Colors & Shapes",
    "mnemonic": "Think of lush green herbs (harā).",
    "inflection": {
      "m_sg": "हरा (harā)",
      "f_sg": "हरी (harī)",
      "m_pl": "हरे (hare)",
      "f_pl": "हरी (harī)"
    },
    "example": {
      "hindi": "पेड़ के पत्ते हरे हैं।",
      "roman": "Peṛ ke patte hare haiñ.",
      "english": "The tree's leaves are green.",
      "explanation": "INFLECTING COLOR: हरा (M.sg), हरी (F.sg), हरे (M.pl)"
    }
  },
  {
    "id": "safed",
    "hindi": "सफ़ेद",
    "roman": "safed",
    "english": "white",
    "pos": "Adjective",
    "isInflecting": false,
    "category": "Colors & Shapes",
    "mnemonic": "Think of pure white marble on the Taj Mahal.",
    "inflection": {
      "m_sg": "सफ़ेद (safed)",
      "f_sg": "सफ़ेद (safed)",
      "m_pl": "सफ़ेद (safed)",
      "f_pl": "सफ़ेद (safed)"
    },
    "example": {
      "hindi": "यह सफ़ेद बिल्ली बहुत प्यारी है।",
      "roman": "Yeh safed billī bahut pyārī hai.",
      "english": "This white cat is very cute.",
      "explanation": "INVARIABLE COLOR: Remains unchanged for all nouns"
    }
  },
  {
    "id": "kala",
    "hindi": "काला",
    "roman": "kālā",
    "english": "black",
    "pos": "Adjective",
    "isInflecting": true,
    "category": "Colors & Shapes",
    "mnemonic": "Think of dark black kohl eyeliner (kājal).",
    "inflection": {
      "m_sg": "काला (kālā)",
      "f_sg": "काली (kālī)",
      "m_pl": "काले (kāle)",
      "f_pl": "काली (kālī)"
    },
    "example": {
      "hindi": "उसके पास काली गाड़ी है।",
      "roman": "Uske pās kālī gāṛī hai.",
      "english": "He has a black car.",
      "explanation": "INFLECTING COLOR: काला जूता (black shoe, M), काली बिल्ली (black cat, F)"
    }
  },
  {
    "id": "men",
    "hindi": "में",
    "roman": "meñ",
    "english": "in / inside",
    "pos": "Postposition",
    "category": "Postpositions & Connectors",
    "mnemonic": "Think of being immersed in something.",
    "inflection": null,
    "example": {
      "hindi": "कमरे में दो कुर्सियाँ हैं।",
      "roman": "Kamre meñ do kursiyāñ haiñ.",
      "english": "There are two chairs in the room.",
      "explanation": "Triggers the Oblique case: कमरा becomes कमरे before 'में'"
    }
  },
  {
    "id": "par",
    "hindi": "पर",
    "roman": "par",
    "english": "on / at",
    "pos": "Postposition",
    "category": "Postpositions & Connectors",
    "mnemonic": "Perched on top of something.",
    "inflection": null,
    "example": {
      "hindi": "किताब मेज़ पर है।",
      "roman": "Kitāb mez par hai.",
      "english": "The book is on the table.",
      "explanation": "Triggers the Oblique case: लड़के पर, मेज़ पर"
    }
  },
  {
    "id": "se",
    "hindi": "से",
    "roman": "se",
    "english": "from / with / by",
    "pos": "Postposition",
    "category": "Postpositions & Connectors",
    "mnemonic": "Think of travelling 'from' place to place.",
    "inflection": null,
    "example": {
      "hindi": "मैं दिल्ली से आया हूँ।",
      "roman": "Maiñ dillī se āyā hūñ.",
      "english": "I have come from Delhi.",
      "explanation": "Used for origin ('from'), instrument ('with'), and comparison ('than')"
    }
  },
  {
    "id": "ko",
    "hindi": "को",
    "roman": "ko",
    "english": "to (dative/accusative)",
    "pos": "Postposition",
    "category": "Postpositions & Connectors",
    "mnemonic": "Think of addressing a letter 'to' someone.",
    "inflection": null,
    "example": {
      "hindi": "लड़के को पानी दीजिए।",
      "roman": "Laṛke ko pānī dījie.",
      "english": "Give water to the boy.",
      "explanation": "Direct object / recipient marker. Transforms लड़का into oblique लड़के"
    }
  },
  {
    "id": "ka_ki_ke",
    "hindi": "का / की / के",
    "roman": "kā / kī / ke",
    "english": "of / 's (possessive)",
    "pos": "Postposition",
    "category": "Postpositions & Connectors",
    "mnemonic": "The key connector showing possession.",
    "inflection": {
      "m_sg": "का (kā)",
      "f_sg": "की (kī)",
      "m_pl": "के (ke)",
      "f_pl": "की (kī)"
    },
    "example": {
      "hindi": "यह राहुल की किताब और राहुल का घर है।",
      "roman": "Yeh rāhul kī kitāb aur rāhul kā ghar hai.",
      "english": "This is Rahul's book and Rahul's house.",
      "explanation": "AGREES WITH THE POSSESSED NOUN: का for M.sg, की for F, के for M.pl/oblique"
    }
  },
  {
    "id": "bahut",
    "hindi": "बहुत",
    "roman": "bahut",
    "english": "very / much / many",
    "pos": "Adverb",
    "category": "Postpositions & Connectors",
    "mnemonic": "A boatload of things = bahut.",
    "inflection": null,
    "example": {
      "hindi": "यह चाय बहुत गरम है।",
      "roman": "Yeh cāy bahut garam hai.",
      "english": "This tea is very hot.",
      "explanation": "Intensifier used before adjectives and verbs"
    }
  },
  {
    "id": "yahan",
    "hindi": "यहाँ",
    "roman": "yahāñ",
    "english": "here",
    "pos": "Adverb",
    "category": "Postpositions & Connectors",
    "mnemonic": "Yahan = right here beside you.",
    "inflection": null,
    "example": {
      "hindi": "यहाँ आइए और बैठिए।",
      "roman": "Yahāñ āie aur baiṭhie.",
      "english": "Come here and sit.",
      "explanation": "Adverb of place"
    }
  },
  {
    "id": "wahan",
    "hindi": "वहाँ",
    "roman": "vahāñ",
    "english": "there",
    "pos": "Adverb",
    "category": "Postpositions & Connectors",
    "mnemonic": "Vahan = over there in the distance.",
    "inflection": null,
    "example": {
      "hindi": "वहाँ एक बड़ा पेड़ है।",
      "roman": "Vahāñ ek baṛā peṛ hai.",
      "english": "There is a big tree there.",
      "explanation": "Adverb of place"
    }
  },
  {
    "id": "jaldi",
    "hindi": "जल्दी",
    "roman": "jaldī",
    "english": "quickly / early / hurry",
    "pos": "Adverb",
    "category": "Postpositions & Connectors",
    "mnemonic": "Think of moving with jolt of speed.",
    "inflection": null,
    "example": {
      "hindi": "जल्दी चलिए, देर हो रही है।",
      "roman": "Jaldī calie, der ho rahī hai.",
      "english": "Walk quickly, it is getting late.",
      "explanation": "Can mean hurry, quickly, or early"
    }
  },
  {
    "id": "dhire",
    "hindi": "धीरे",
    "roman": "dhīre",
    "english": "slowly / softly",
    "pos": "Adverb",
    "category": "Postpositions & Connectors",
    "mnemonic": "Think of patience (dhairya) - taking it easy.",
    "inflection": null,
    "example": {
      "hindi": "कृपया धीरे बोलिए।",
      "roman": "Kripayā dhīre bolie.",
      "english": "Please speak slowly / softly.",
      "explanation": "Adverb of manner; often repeated as धीरे-धीरे (dhīre-dhīre = gradually/slowly)"
    }
  },
  {
    "id": "somvar",
    "hindi": "सोमवार",
    "roman": "somvār",
    "english": "Monday",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Time & Calendar",
    "pluralDirect": "सोमवार (somvār)",
    "pluralOblique": "सोमवारों (somvāroñ)",
    "mnemonic": "Dedicated to Soma (Moon). First day of the working week.",
    "inflection": {
      "direct_sg": "सोमवार",
      "direct_pl": "सोमवार",
      "oblique_sg": "सोमवार",
      "oblique_pl": "सोमवारों"
    },
    "example": {
      "hindi": "हम सोमवार को मिलेंगे।",
      "roman": "Hum somvār ko mileṅge.",
      "english": "We will meet on Monday.",
      "explanation": "Days of the week take the postposition 'को' to signify 'on [day]'."
    }
  },
  {
    "id": "mangalvar",
    "hindi": "मंगलवार",
    "roman": "maṅgalvār",
    "english": "Tuesday",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Time & Calendar",
    "pluralDirect": "मंगलवार (maṅgalvār)",
    "pluralOblique": "मंगलवारों (maṅgalvāroñ)",
    "mnemonic": "Dedicated to Mangal (Mars / auspiciousness).",
    "inflection": {
      "direct_sg": "मंगलवार",
      "direct_pl": "मंगलवार",
      "oblique_sg": "मंगलवार",
      "oblique_pl": "मंगलवारों"
    },
    "example": {
      "hindi": "मंगलवार को बाज़ार में भीड़ होती है।",
      "roman": "Maṅgalvār ko bāzār meñ bhīṛ hotī hai.",
      "english": "The market is crowded on Tuesday.",
      "explanation": "Masculine noun; invariable in direct plural."
    }
  },
  {
    "id": "budhvar",
    "hindi": "बुधवार",
    "roman": "budhvār",
    "english": "Wednesday",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Time & Calendar",
    "pluralDirect": "बुधवार (budhvār)",
    "pluralOblique": "बुधवारों (budhvāroñ)",
    "mnemonic": "Dedicated to Budha (Mercury / intellect). Midweek day.",
    "inflection": {
      "direct_sg": "बुधवार",
      "direct_pl": "बुधवार",
      "oblique_sg": "बुधवार",
      "oblique_pl": "बुधवारों"
    },
    "example": {
      "hindi": "बुधवार को मेरी हिंदी की कक्षा है।",
      "roman": "Budhvār ko merī hindī kī kakṣā hai.",
      "english": "I have my Hindi class on Wednesday.",
      "explanation": "All seven Hindi days of the week are grammatically Masculine."
    }
  },
  {
    "id": "guruvar",
    "hindi": "गुरुवार",
    "roman": "guruvār",
    "english": "Thursday",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Time & Calendar",
    "pluralDirect": "गुरुवार (guruvār)",
    "pluralOblique": "गुरुवारों (guruvāroñ)",
    "mnemonic": "Dedicated to Guru (Jupiter / teacher). Also called बृहस्पतिवार (brihaspativār).",
    "inflection": {
      "direct_sg": "गुरुवार",
      "direct_pl": "गुरुवार",
      "oblique_sg": "गुरुवार",
      "oblique_pl": "गुरुवारों"
    },
    "example": {
      "hindi": "गुरुवार को हम पुस्तकालय जाएँगे।",
      "roman": "Guruvār ko hum pustakālay jāeṅge.",
      "english": "We will go to the library on Thursday.",
      "explanation": "Often interchanged with बृहस्पतिवार in spoken and written Hindi."
    }
  },
  {
    "id": "shukravar",
    "hindi": "शुक्रवार",
    "roman": "śukravār",
    "english": "Friday",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Time & Calendar",
    "pluralDirect": "शुक्रवार (śukravār)",
    "pluralOblique": "शुक्रवारों (śukravāroñ)",
    "mnemonic": "Dedicated to Shukra (Venus). Gateway to the weekend.",
    "inflection": {
      "direct_sg": "शुक्रवार",
      "direct_pl": "शुक्रवार",
      "oblique_sg": "शुक्रवार",
      "oblique_pl": "शुक्रवारों"
    },
    "example": {
      "hindi": "शुक्रवार को नई फ़िल्म आती है।",
      "roman": "Śukravār ko naī film ātī hai.",
      "english": "New movies release on Friday.",
      "explanation": "Takes masculine gender agreements."
    }
  },
  {
    "id": "shanivar",
    "hindi": "शनिवार",
    "roman": "śanivār",
    "english": "Saturday",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Time & Calendar",
    "pluralDirect": "शनिवार (śanivār)",
    "pluralOblique": "शनिवारों (śanivāroñ)",
    "mnemonic": "Dedicated to Shani (Saturn). Start of the weekend.",
    "inflection": {
      "direct_sg": "शनिवार",
      "direct_pl": "शनिवार",
      "oblique_sg": "शनिवार",
      "oblique_pl": "शनिवारों"
    },
    "example": {
      "hindi": "शनिवार को दफ़्तर बंद रहता है।",
      "roman": "Śanivār ko daftar band rahtā hai.",
      "english": "The office remains closed on Saturday.",
      "explanation": "Masculine noun."
    }
  },
  {
    "id": "ravivar",
    "hindi": "रविवार",
    "roman": "ravivār",
    "english": "Sunday",
    "pos": "Noun",
    "gender": "Masculine",
    "category": "Time & Calendar",
    "pluralDirect": "रविवार (ravivār)",
    "pluralOblique": "रविवारों (ravivāroñ)",
    "mnemonic": "Dedicated to Ravi (the Sun). Also called इतवार (itvār).",
    "inflection": {
      "direct_sg": "रविवार",
      "direct_pl": "रविवार",
      "oblique_sg": "रविवार",
      "oblique_pl": "रविवारों"
    },
    "example": {
      "hindi": "रविवार को सब घर पर होते हैं।",
      "roman": "Ravivār ko sab ghar par hote haiñ.",
      "english": "Everyone is at home on Sunday.",
      "explanation": "Traditional day of rest and recreation."
    }
  },
  {
    "id": "kya",
    "hindi": "क्या",
    "roman": "kyā",
    "english": "what",
    "pos": "Pronoun",
    "category": "Question Words & Pronouns",
    "mnemonic": "The foundational Hindi question word for 'what'.",
    "inflection": null,
    "example": {
      "hindi": "आपका नाम क्या है?",
      "roman": "Āpkā nām kyā hai?",
      "english": "What is your name?",
      "explanation": "At the start of a sentence, क्या forms a yes/no question: क्या आप तैयार हैं? (Are you ready?)"
    }
  },
  {
    "id": "kahan",
    "hindi": "कहाँ",
    "roman": "kahāñ",
    "english": "where",
    "pos": "Adverb",
    "category": "Question Words & Pronouns",
    "mnemonic": "Rhymes with yahāñ (here) and vahāñ (there).",
    "inflection": null,
    "example": {
      "hindi": "आप कहाँ जा रहे हैं?",
      "roman": "Āp kahāñ jā rahe haiñ?",
      "english": "Where are you going?",
      "explanation": "Interrogative adverb of location."
    }
  },
  {
    "id": "kab",
    "hindi": "कब",
    "roman": "kab",
    "english": "when",
    "pos": "Adverb",
    "category": "Question Words & Pronouns",
    "mnemonic": "Parallels 'ab' (now) and 'tab' (then).",
    "inflection": null,
    "example": {
      "hindi": "ट्रेन कब आएगी?",
      "roman": "Train kab āegī?",
      "english": "When will the train arrive?",
      "explanation": "Interrogative adverb of time."
    }
  },
  {
    "id": "kyon",
    "hindi": "क्यों",
    "roman": "kyoñ",
    "english": "why",
    "pos": "Adverb",
    "category": "Question Words & Pronouns",
    "mnemonic": "Contains 'ky' like 'kya'. Asks for a reason.",
    "inflection": null,
    "example": {
      "hindi": "आप क्यों परेशान हैं?",
      "roman": "Āp kyoñ pareśān haiñ?",
      "english": "Why are you worried?",
      "explanation": "Answered with 'क्योंकि' (kyonki = because)."
    }
  },
  {
    "id": "kaun",
    "hindi": "कौन",
    "roman": "kaun",
    "english": "who",
    "pos": "Pronoun",
    "category": "Question Words & Pronouns",
    "mnemonic": "Sounds like 'con' - asking who is that person.",
    "inflection": null,
    "example": {
      "hindi": "दरवाज़े पर कौन है?",
      "roman": "Darvāze par kaun hai?",
      "english": "Who is at the door?",
      "explanation": "Personal interrogative pronoun; in oblique case becomes 'किस' (kis)."
    }
  },
  {
    "id": "kaise",
    "hindi": "कैसे",
    "roman": "kaise",
    "english": "how",
    "pos": "Adverb",
    "category": "Question Words & Pronouns",
    "mnemonic": "Essential greeting word: आप कैसे हैं? (How are you?)",
    "inflection": null,
    "example": {
      "hindi": "आप कैसे हैं?",
      "roman": "Āp kaise haiñ?",
      "english": "How are you? (to a male)",
      "explanation": "Can agree with gender in casual speech: कैसा (m), कैसी (f), कैसे (m pl / formal)."
    }
  },
  {
    "id": "kitna",
    "hindi": "कितना",
    "roman": "kitnā",
    "english": "how much / how many",
    "pos": "Adjective",
    "gender": "Masculine",
    "category": "Question Words & Pronouns",
    "isInflecting": true,
    "mnemonic": "Think of quantity: kitna for price, count, or measure.",
    "inflection": {
      "m_sg": "कितना (kitnā)",
      "m_pl": "कितने (kitne)",
      "f_sg": "कितनी (kitnī)",
      "f_pl": "कितनी (kitnī)"
    },
    "example": {
      "hindi": "इसकी कीमत कितनी है?",
      "roman": "Iskī kīmat kitnī hai?",
      "english": "How much does this cost?",
      "explanation": "Inflects to match noun gender: कितना पानी (how much water), कितने लोग (how many people)."
    }
  },
  {
    "id": "kiska",
    "hindi": "किसका",
    "roman": "kiskā",
    "english": "whose",
    "pos": "Pronoun",
    "gender": "Masculine",
    "category": "Question Words & Pronouns",
    "isInflecting": true,
    "mnemonic": "किस (oblique of kaun) + का (genitive 'of').",
    "inflection": {
      "m_sg": "किसका (kiskā)",
      "m_pl": "किसके (kiske)",
      "f_sg": "किसकी (kiskī)",
      "f_pl": "किसकी (kiskī)"
    },
    "example": {
      "hindi": "यह किताब किसकी है?",
      "roman": "Yeh kitāb kiskī hai?",
      "english": "Whose book is this?",
      "explanation": "Agrees with the possessed noun: किसकी किताब (f), किसका घर (m)."
    }
  },
  {
    "id": "aaj",
    "hindi": "आज",
    "roman": "āj",
    "english": "today",
    "pos": "Adverb",
    "category": "Time & Calendar",
    "mnemonic": "Today is the present moment.",
    "inflection": null,
    "example": {
      "hindi": "आज बहुत अच्छी धूप है।",
      "roman": "Āj bahut acchī dhūp hai.",
      "english": "Today it is very sunny.",
      "explanation": "Temporal adverb; used in greeting 'आज क्या दिन है?' (What day is today?)."
    }
  },
  {
    "id": "kal_time",
    "hindi": "कल",
    "roman": "kal",
    "english": "tomorrow / yesterday",
    "pos": "Adverb",
    "category": "Time & Calendar",
    "mnemonic": "Hindi uses 'kal' for one day away from today (past or future based on verb tense).",
    "inflection": null,
    "example": {
      "hindi": "कल हम दिल्ली जाएँगे।",
      "roman": "Kal hum dillī jāeṅge.",
      "english": "Tomorrow we will go to Delhi.",
      "explanation": "Meaning depends on verb: था/थी indicates yesterday, होगा/जाएँगे indicates tomorrow."
    }
  },
  {
    "id": "parson",
    "hindi": "परसों",
    "roman": "parsoñ",
    "english": "day before yesterday / day after tomorrow",
    "pos": "Adverb",
    "category": "Time & Calendar",
    "mnemonic": "Two days away from today (past or future determined by verb tense).",
    "inflection": null,
    "example": {
      "hindi": "परसों मेरी परीक्षा है।",
      "roman": "Parsoñ merī parīkṣā hai.",
      "english": "My exam is the day after tomorrow.",
      "explanation": "Follows the same symmetrical timeline rule as 'कल'."
    }
  },
  {
    "id": "ab",
    "hindi": "अब",
    "roman": "ab",
    "english": "now",
    "pos": "Adverb",
    "category": "Time & Calendar",
    "mnemonic": "Short and punchy: ab means right now.",
    "inflection": null,
    "example": {
      "hindi": "अब हमें चलना चाहिए।",
      "roman": "Ab hameñ calnā cāhie.",
      "english": "Now we should leave.",
      "explanation": "Pairs with तब (tab = then) and कब (kab = when)."
    }
  },
  {
    "id": "hamesha",
    "hindi": "हमेशा",
    "roman": "hameśā",
    "english": "always",
    "pos": "Adverb",
    "category": "Time & Calendar",
    "mnemonic": "Perpetual time; constant repetition.",
    "inflection": null,
    "example": {
      "hindi": "हमेशा सच बोलिए।",
      "roman": "Hameśā sac bolie.",
      "english": "Always speak the truth.",
      "explanation": "Common adverb of frequency."
    }
  },
  {
    "id": "roz",
    "hindi": "रोज़",
    "roman": "roz",
    "english": "every day / daily",
    "pos": "Adverb",
    "category": "Time & Calendar",
    "mnemonic": "Think of a daily routine (roz-marra).",
    "inflection": null,
    "example": {
      "hindi": "वह रोज़ सुबह टहलता है।",
      "roman": "Vah roz subah ṭahaltā hai.",
      "english": "He walks every day in the morning.",
      "explanation": "Frequently used as रोज़ाना (rozānā) as well."
    }
  }
];

if (typeof window !== 'undefined') {
  window.VOCAB_CURRICULUM = VOCAB_CURRICULUM;
}
