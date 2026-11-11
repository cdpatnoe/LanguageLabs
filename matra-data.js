// Curated Hindi Matra Reading Curriculum (मात्रा वाचन अभ्यास)
// Designed specifically for graduated Devanagari reading practice and native pronunciation.
// Each word includes:
// - Prominent Devanagari representation
// - Specific matra category and vowel symbol
// - Syllable and letter breakdown (e.g. क + ◌ि + त + ◌ा + ब = किताब)
// - Phonics pronunciation guide
// - Matra positioning and reading rule
// - Learner-friendly English meaning & collocated phrase

const MATRA_CATEGORIES = [
  { id: "all", name: "All Matras (96)", symbol: "◌ा-◌्", count: 96 },
  { id: "mukta", name: "अ (बिना मात्रा • Foundational)", symbol: "—", description: "Inherent 'a' sound without any diacritic (schwa baseline)" },
  { id: "aa", name: "आ की मात्रा (◌ा)", symbol: "◌ा", description: "Long 'ā' sound, standing line after consonant" },
  { id: "i", name: "इ की मात्रा (◌ि)", symbol: "◌ि", description: "Short 'i' sound, curved stroke written before consonant" },
  { id: "ii", name: "ई की मात्रा (◌ी)", symbol: "◌ी", description: "Long 'ī' sound, curved stroke written after consonant" },
  { id: "u", name: "उ की मात्रा (◌ु)", symbol: "◌ु", description: "Short 'u' sound, loop curling left under consonant" },
  { id: "uu", name: "ऊ की मात्रा (◌ू)", symbol: "◌ू", description: "Long 'ū' sound, tail curving right under consonant" },
  { id: "ri", name: "ऋ की मात्रा (◌ृ)", symbol: "◌ृ", description: "Vocalic 'ṛ' sound, small semi-circle under consonant" },
  { id: "e", name: "ए की मात्रा (◌े)", symbol: "◌े", description: "Chhoti 'e' sound, single diagonal stroke above headline" },
  { id: "ai", name: "ऐ की मात्रा (◌ै)", symbol: "◌ै", description: "Badi 'ai' sound, double diagonal strokes above headline" },
  { id: "o", name: "ओ की मात्रा (◌ो)", symbol: "◌ो", description: "Chhota 'o' sound, standing line + single top stroke" },
  { id: "au", name: "औ की मात्रा (◌ौ)", symbol: "◌ौ", description: "Bada 'au' sound, standing line + double top strokes" },
  { id: "anusvara", name: "अं (अनुस्वार - ◌ं)", symbol: "◌ं", description: "Nasal dot on headline before a consonant" },
  { id: "anunasika", name: "अँ (चन्द्रबिन्दु - ◌ँ)", symbol: "◌ँ", description: "Crescent with dot for nasalized vowels" },
  { id: "half", name: "आधे अक्षर (संयुक्त - ◌्)", symbol: "◌्", description: "Half letters & conjuncts formed with virama" }
];

const MATRA_CURRICULUM = [
  // =========================================================================
  // 1. MUKTA / NO MATRA (अ - inherent 'a')
  // =========================================================================
  {
    id: "kal",
    hindi: "कल",
    roman: "kal",
    english: "tomorrow / yesterday",
    matra: "mukta",
    matraName: "अ (बिना मात्रा)",
    matraVowel: "अ",
    matraSymbol: "—",
    matraType: "Inherent Schwa (अ)",
    phonics: "kul",
    breakdown: "क + ल",
    length: 2,
    rule: "Two-letter word without matra. The final consonant drops the schwa vowel: 'kal', not 'kala'.",
    examplePhrase: { hindi: "कल मिलेंगे", roman: "kal mileṅge", english: "see you tomorrow" }
  },
  {
    id: "ghar",
    hindi: "घर",
    roman: "ghar",
    english: "home / house",
    matra: "mukta",
    matraName: "अ (बिना मात्रा)",
    matraVowel: "अ",
    matraSymbol: "—",
    matraType: "Inherent Schwa (अ)",
    phonics: "ghur (aspirated)",
    breakdown: "घ + र",
    length: 2,
    rule: "Aspirated 'gh' + 'r'. Pronounce with breath release on 'gh'.",
    examplePhrase: { hindi: "मेरा घर", roman: "merā ghar", english: "my home" }
  },
  {
    id: "jal",
    hindi: "जल",
    roman: "jal",
    english: "water",
    matra: "mukta",
    matraName: "अ (बिना मात्रा)",
    matraVowel: "अ",
    matraSymbol: "—",
    matraType: "Inherent Schwa (अ)",
    phonics: "jul",
    breakdown: "ज + ल",
    length: 2,
    rule: "Soft 'j' followed by 'l'. Common formal word for water.",
    examplePhrase: { hindi: "शीतल जल", roman: "śītal jal", english: "cool water" }
  },
  {
    id: "phal",
    hindi: "फल",
    roman: "phal",
    english: "fruit",
    matra: "mukta",
    matraName: "अ (बिना मात्रा)",
    matraVowel: "अ",
    matraSymbol: "—",
    matraType: "Inherent Schwa (अ)",
    phonics: "phul (aspirated p)",
    breakdown: "फ + ल",
    length: 2,
    rule: "Unvoiced aspirated bilabial 'ph' (like 'p-h', distinct from English 'f').",
    examplePhrase: { hindi: "ताज़ा फल", roman: "tāzā phal", english: "fresh fruit" }
  },
  {
    id: "bas",
    hindi: "बस",
    roman: "bas",
    english: "bus / enough",
    matra: "mukta",
    matraName: "अ (बिना मात्रा)",
    matraVowel: "अ",
    matraSymbol: "—",
    matraType: "Inherent Schwa (अ)",
    phonics: "bus",
    breakdown: "ब + स",
    length: 2,
    rule: "Simple 2-letter word. Means both vehicular 'bus' and idiomatic 'enough/stop'.",
    examplePhrase: { hindi: "बस आ गई", roman: "bas ā gaī", english: "the bus arrived" }
  },
  {
    id: "kamal",
    hindi: "कमल",
    roman: "kamal",
    english: "lotus (national flower)",
    matra: "mukta",
    matraName: "अ (बिना मात्रा)",
    matraVowel: "अ",
    matraSymbol: "—",
    matraType: "Inherent Schwa (अ)",
    phonics: "kum-ul",
    breakdown: "क + म + ल",
    length: 3,
    rule: "Three-letter word without matra. Final letter 'l' drops schwa: 'kam-al'.",
    examplePhrase: { hindi: "सुंदर कमल", roman: "sundar kamal", english: "beautiful lotus" }
  },
  {
    id: "sadak",
    hindi: "सड़क",
    roman: "saṛak",
    english: "road / street",
    matra: "mukta",
    matraName: "अ (बिना मात्रा)",
    matraVowel: "अ",
    matraSymbol: "—",
    matraType: "Inherent Schwa (अ)",
    phonics: "suh-ruk (flapped ṛ)",
    breakdown: "स + ड़ + क",
    length: 3,
    rule: "Features the retroflex flapped consonant 'ड़' (ṛ). Curl tongue tip against palate.",
    examplePhrase: { hindi: "साफ़ सड़क", roman: "sāf saṛak", english: "clean road" }
  },
  {
    id: "garam",
    hindi: "गरम",
    roman: "garam",
    english: "hot / warm",
    matra: "mukta",
    matraName: "अ (बिना मात्रा)",
    matraVowel: "अ",
    matraSymbol: "—",
    matraType: "Inherent Schwa (अ)",
    phonics: "guh-rum",
    breakdown: "ग + र + म",
    length: 3,
    rule: "Three distinct consonants. Stress is evenly balanced on first syllable.",
    examplePhrase: { hindi: "गरम चाय", roman: "garam cāy", english: "hot tea" }
  },
  {
    id: "kasrat",
    hindi: "कसरत",
    roman: "kasrat",
    english: "exercise / workout",
    matra: "mukta",
    matraName: "अ (बिना मात्रा)",
    matraVowel: "अ",
    matraSymbol: "—",
    matraType: "Inherent Schwa (अ)",
    phonics: "kus-rut",
    breakdown: "क + स + र + त",
    length: 4,
    rule: "Four-letter word without matra. Middle letter 's' and final 't' drop schwa: 'kas-rat'.",
    examplePhrase: { hindi: "रोज़ कसरत", roman: "roz kasrat", english: "daily exercise" }
  },
  {
    id: "adrak",
    hindi: "अदरक",
    roman: "adrak",
    english: "ginger",
    matra: "mukta",
    matraName: "अ (बिना मात्रा)",
    matraVowel: "अ",
    matraSymbol: "—",
    matraType: "Inherent Schwa (अ)",
    phonics: "ud-ruk",
    breakdown: "अ + द + र + क",
    length: 4,
    rule: "Starts with independent vowel 'अ' followed by 3 consonants: 'ad-rak'.",
    examplePhrase: { hindi: "अदरक वाली चाय", roman: "adrak vālī cāy", english: "ginger tea" }
  },

  // =========================================================================
  // 2. AA KI MATRA (आ की मात्रा - ◌ा)
  // =========================================================================
  {
    id: "aam",
    hindi: "आम",
    roman: "ām",
    english: "mango",
    matra: "aa",
    matraName: "आ की मात्रा (◌ा)",
    matraVowel: "आ",
    matraSymbol: "◌ा",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "aahm",
    breakdown: "आ + म",
    length: 2,
    rule: "Opens with full vowel 'आ' (long 'aa' sound as in father) followed by 'm'.",
    examplePhrase: { hindi: "मीठा आम", roman: "mīṭhā ām", english: "sweet mango" }
  },
  {
    id: "naam",
    hindi: "नाम",
    roman: "nām",
    english: "name",
    matra: "aa",
    matraName: "आ की मात्रा (◌ा)",
    matraVowel: "आ",
    matraSymbol: "◌ा",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "naam",
    breakdown: "न + ◌ा + म",
    length: 2,
    rule: "T-shaped matra (◌ा) attaches after consonant 'न' to elongate it into 'nā'.",
    examplePhrase: { hindi: "आपका नाम", roman: "āpkā nām", english: "your name" }
  },
  {
    id: "kaam",
    hindi: "काम",
    roman: "kām",
    english: "work / task",
    matra: "aa",
    matraName: "आ की मात्रा (◌ा)",
    matraVowel: "आ",
    matraSymbol: "◌ा",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "kaam",
    breakdown: "क + ◌ा + म",
    length: 2,
    rule: "Consonant 'क' + matra '◌ा' = 'का' (kā) + 'म' (m).",
    examplePhrase: { hindi: "ज़रूरी काम", roman: "zarūrī kām", english: "important work" }
  },
  {
    id: "haath",
    hindi: "हाथ",
    roman: "hāth",
    english: "hand",
    matra: "aa",
    matraName: "आ की मात्रा (◌ा)",
    matraVowel: "आ",
    matraSymbol: "◌ा",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "haath (dental th)",
    breakdown: "ह + ◌ा + थ",
    length: 2,
    rule: "Consonant 'ह' + '◌ा' = 'हा' (hā). Ends with aspirated dental 'थ'.",
    examplePhrase: { hindi: "दायाँ हाथ", roman: "dāyā̃ hāth", english: "right hand" }
  },
  {
    id: "raat",
    hindi: "रात",
    roman: "rāt",
    english: "night",
    matra: "aa",
    matraName: "आ की मात्रा (◌ा)",
    matraVowel: "आ",
    matraSymbol: "◌ा",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "raat",
    breakdown: "र + ◌ा + त",
    length: 2,
    rule: "Matra '◌ा' lengthens 'र' to 'rā'. Final 'त' is unvoiced dental.",
    examplePhrase: { hindi: "शुभ रात्रि / रात", roman: "śubh rāt", english: "good night" }
  },
  {
    id: "taara",
    hindi: "तारा",
    roman: "tārā",
    english: "star",
    matra: "aa",
    matraName: "आ की मात्रा (◌ा)",
    matraVowel: "आ",
    matraSymbol: "◌ा",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "tah-rah",
    breakdown: "त + ◌ा + र + ◌ा",
    length: 2,
    rule: "Double 'आ' matra word: both consonants carry '◌ा' (tā + rā).",
    examplePhrase: { hindi: "चमकता तारा", roman: "camaktā tārā", english: "shining star" }
  },
  {
    id: "chaata",
    hindi: "छाता",
    roman: "chātā",
    english: "umbrella",
    matra: "aa",
    matraName: "आ की मात्रा (◌ा)",
    matraVowel: "आ",
    matraSymbol: "◌ा",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "chhaa-tah",
    breakdown: "छ + ◌ा + त + ◌ा",
    length: 2,
    rule: "Aspirated 'छ' + '◌ा' = 'छा' (chā), followed by 'त' + '◌ा' = 'ता' (tā).",
    examplePhrase: { hindi: "काली छाता", roman: "kālī chātā", english: "black umbrella" }
  },
  {
    id: "baadal",
    hindi: "बादल",
    roman: "bādal",
    english: "cloud",
    matra: "aa",
    matraName: "आ की मात्रा (◌ा)",
    matraVowel: "आ",
    matraSymbol: "◌ा",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "baa-dul",
    breakdown: "ब + ◌ा + द + ल",
    length: 3,
    rule: "First syllable has long 'ā' (bā), followed by two short consonants (dal).",
    examplePhrase: { hindi: "काले बादल", roman: "kāle bādal", english: "dark clouds" }
  },

  // =========================================================================
  // 3. CHHOTI I KI MATRA (इ की मात्रा - ◌ि)
  // =========================================================================
  {
    id: "din",
    hindi: "दिन",
    roman: "din",
    english: "day",
    matra: "i",
    matraName: "इ की मात्रा (◌ि)",
    matraVowel: "इ",
    matraSymbol: "◌ि",
    matraType: "Short Vowel (ह्रस्व स्वर)",
    phonics: "din (crisp short i)",
    breakdown: "द + ◌ि + न",
    length: 2,
    rule: "CRITICAL: '◌ि' is written BEFORE the consonant 'द', but pronounced AFTER it as short 'i'.",
    examplePhrase: { hindi: "अच्छा दिन", roman: "acchā din", english: "good day" }
  },
  {
    id: "dil",
    hindi: "दिल",
    roman: "dil",
    english: "heart",
    matra: "i",
    matraName: "इ की मात्रा (◌ि)",
    matraVowel: "इ",
    matraSymbol: "◌ि",
    matraType: "Short Vowel (ह्रस्व स्वर)",
    phonics: "dil",
    breakdown: "द + ◌ि + ल",
    length: 2,
    rule: "Written left of 'द'. Keep the vowel crisp and short (like 'bit' not 'beet').",
    examplePhrase: { hindi: "सच्चा दिल", roman: "saccā dil", english: "true heart" }
  },
  {
    id: "sir",
    hindi: "सिर",
    roman: "sir",
    english: "head",
    matra: "i",
    matraName: "इ की मात्रा (◌ि)",
    matraVowel: "इ",
    matraSymbol: "◌ि",
    matraType: "Short Vowel (ह्रस्व स्वर)",
    phonics: "sir",
    breakdown: "स + ◌ि + र",
    length: 2,
    rule: "Matra '◌ि' curves over 'स' to produce 'si' + 'r'.",
    examplePhrase: { hindi: "सिर दर्द", roman: "sir dard", english: "headache" }
  },
  {
    id: "kavi",
    hindi: "कवि",
    roman: "kavi",
    english: "poet",
    matra: "i",
    matraName: "इ की मात्रा (◌ि)",
    matraVowel: "इ",
    matraSymbol: "◌ि",
    matraType: "Short Vowel (ह्रस्व स्वर)",
    phonics: "kuh-vee (short final i)",
    breakdown: "क + व + ◌ि",
    length: 2,
    rule: "Here '◌ि' sits on the second consonant 'व'. Pronounce short 'vi' at the end.",
    examplePhrase: { hindi: "महान कवि", roman: "mahān kavi", english: "great poet" }
  },
  {
    id: "kitaab",
    hindi: "किताब",
    roman: "kitāb",
    english: "book",
    matra: "i",
    matraName: "इ की मात्रा (◌ि)",
    matraVowel: "इ",
    matraSymbol: "◌ि",
    matraType: "Mixed: Short 'i' + Long 'ā'",
    phonics: "ki-taab",
    breakdown: "क + ◌ि + त + ◌ा + ब",
    length: 3,
    rule: "Contrast test: First syllable has short 'i' (कि), second has long 'ā' (ता). Notice the contrast!",
    examplePhrase: { hindi: "नई किताब", roman: "naī kitāb", english: "new book" }
  },
  {
    id: "kisaan",
    hindi: "किसान",
    roman: "kisān",
    english: "farmer",
    matra: "i",
    matraName: "इ की मात्रा (◌ि)",
    matraVowel: "इ",
    matraSymbol: "◌ि",
    matraType: "Short Vowel (ह्रस्व स्वर)",
    phonics: "ki-saan",
    breakdown: "क + ◌ि + स + ◌ा + न",
    length: 3,
    rule: "Short 'i' on 'क' (ki) + long 'ā' on 'स' (sā) + 'n'.",
    examplePhrase: { hindi: "मेहनती किसान", roman: "mehnati kisān", english: "hardworking farmer" }
  },
  {
    id: "gilaas",
    hindi: "गिलास",
    roman: "gilās",
    english: "glass / tumbler",
    matra: "i",
    matraName: "इ की मात्रा (◌ि)",
    matraVowel: "इ",
    matraSymbol: "◌ि",
    matraType: "Short Vowel (ह्रस्व स्वर)",
    phonics: "gi-laas",
    breakdown: "ग + ◌ि + ल + ◌ा + स",
    length: 3,
    rule: "Short 'i' on 'ग' (gi) + long 'lā' + 's'.",
    examplePhrase: { hindi: "पानी का गिलास", roman: "pānī kā gilās", english: "glass of water" }
  },
  {
    id: "hiran",
    hindi: "हिरण",
    roman: "hiran",
    english: "deer",
    matra: "i",
    matraName: "इ की मात्रा (◌ि)",
    matraVowel: "इ",
    matraSymbol: "◌ि",
    matraType: "Short Vowel (ह्रस्व स्वर)",
    phonics: "hi-run",
    breakdown: "ह + ◌ि + र + ण",
    length: 3,
    rule: "Short 'i' on 'ह' (hi) + 'ra' + retroflex 'ṇ'.",
    examplePhrase: { hindi: "तेज़ हिरण", roman: "tez hiran", english: "swift deer" }
  },

  // =========================================================================
  // 4. BADI II KI MATRA (ई की मात्रा - ◌ी)
  // =========================================================================
  {
    id: "teer",
    hindi: "तीर",
    roman: "tīr",
    english: "arrow",
    matra: "ii",
    matraName: "ई की मात्रा (◌ी)",
    matraVowel: "ई",
    matraSymbol: "◌ी",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "teer",
    breakdown: "त + ◌ी + र",
    length: 2,
    rule: "Written AFTER the consonant. Long 'ee' sound (held twice as long as '◌ि').",
    examplePhrase: { hindi: "तीर और कमान", roman: "tīr aur kamān", english: "bow and arrow" }
  },
  {
    id: "paani",
    hindi: "पानी",
    roman: "pānī",
    english: "water",
    matra: "ii",
    matraName: "ई की मात्रा (◌ी)",
    matraVowel: "ई",
    matraSymbol: "◌ी",
    matraType: "Mixed: Long 'ā' + Long 'ī'",
    phonics: "paa-nee",
    breakdown: "प + ◌ा + न + ◌ी",
    length: 2,
    rule: "First consonant has '◌ा' (pā), second has '◌ी' (nī). Both syllables are long.",
    examplePhrase: { hindi: "ठंडा पानी", roman: "ṭhaṇḍā pānī", english: "cold water" }
  },
  {
    id: "haathi",
    hindi: "हाथी",
    roman: "hāthī",
    english: "elephant",
    matra: "ii",
    matraName: "ई की मात्रा (◌ी)",
    matraVowel: "ई",
    matraSymbol: "◌ी",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "haa-thee",
    breakdown: "ह + ◌ा + थ + ◌ी",
    length: 2,
    rule: "Long 'ā' on 'ह' + long 'ī' on aspirated 'थ' = 'hāthī'.",
    examplePhrase: { hindi: "बड़ा हाथी", roman: "baṛā hāthī", english: "big elephant" }
  },
  {
    id: "daadi",
    hindi: "दादी",
    roman: "dādī",
    english: "paternal grandmother",
    matra: "ii",
    matraName: "ई की मात्रा (◌ी)",
    matraVowel: "ई",
    matraSymbol: "◌ी",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "daa-dee",
    breakdown: "द + ◌ा + द + ◌ी",
    length: 2,
    rule: "Consonant 'द' repeated: first with '◌ा' (dā), second with '◌ी' (dī).",
    examplePhrase: { hindi: "मेरी दादी", roman: "merī dādī", english: "my grandmother" }
  },
  {
    id: "nadi",
    hindi: "नदी",
    roman: "nadī",
    english: "river",
    matra: "ii",
    matraName: "ई की मात्रा (◌ी)",
    matraVowel: "ई",
    matraSymbol: "◌ी",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "nuh-dee",
    breakdown: "न + द + ◌ी",
    length: 2,
    rule: "Short 'na' followed by long 'dī'. Standard feminine ending.",
    examplePhrase: { hindi: "पवित्र नदी", roman: "pavitra nadī", english: "sacred river" }
  },
  {
    id: "machli",
    hindi: "मछली",
    roman: "machlī",
    english: "fish",
    matra: "ii",
    matraName: "ई की मात्रा (◌ी)",
    matraVowel: "ई",
    matraSymbol: "◌ी",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "much-lee",
    breakdown: "म + छ + ल + ◌ी",
    length: 3,
    rule: "Three consonants: 'ma' + aspirated 'cha' + 'l' with '◌ी' (lī).",
    examplePhrase: { hindi: "मछली जल की रानी", roman: "machlī jal kī rānī", english: "fish is the queen of water" }
  },
  {
    id: "bakri",
    hindi: "बकरी",
    roman: "bakrī",
    english: "goat",
    matra: "ii",
    matraName: "ई की मात्रा (◌ी)",
    matraVowel: "ई",
    matraSymbol: "◌ी",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "buk-ree",
    breakdown: "ब + क + र + ◌ी",
    length: 3,
    rule: "'ba' + 'k' + 'rī'. Middle consonant 'क' has schwa dropped.",
    examplePhrase: { hindi: "सफ़ेद बकरी", roman: "safed bakrī", english: "white goat" }
  },
  {
    id: "titli",
    hindi: "तितली",
    roman: "titlī",
    english: "butterfly",
    matra: "ii",
    matraName: "ई की मात्रा (◌ी)",
    matraVowel: "ई",
    matraSymbol: "◌ी",
    matraType: "Contrast: Short 'i' vs Long 'ī'",
    phonics: "tit-lee",
    breakdown: "त + ◌ि + त + ल + ◌ी",
    length: 3,
    rule: "MASTER CONTRAST: First 'त' has short '◌ि' (ti), last 'ल' has long '◌ी' (lī). Feel the difference!",
    examplePhrase: { hindi: "रंग-बिरंगी तितली", roman: "raṅg-biraṅgī titlī", english: "colorful butterfly" }
  },

  // =========================================================================
  // 5. CHHOTA U KI MATRA (उ की मात्रा - ◌ु)
  // =========================================================================
  {
    id: "pul",
    hindi: "पुल",
    roman: "pul",
    english: "bridge",
    matra: "u",
    matraName: "उ की मात्रा (◌ु)",
    matraVowel: "उ",
    matraSymbol: "◌ु",
    matraType: "Short Vowel (ह्रस्व स्वर)",
    phonics: "pull (short u)",
    breakdown: "प + ◌ु + ल",
    length: 2,
    rule: "Loops LEFT beneath consonant 'प'. Crisp short 'u' sound as in 'put'.",
    examplePhrase: { hindi: "नया पुल", roman: "nayā pul", english: "new bridge" }
  },
  {
    id: "sukh",
    hindi: "सुख",
    roman: "sukh",
    english: "happiness / comfort",
    matra: "u",
    matraName: "उ की मात्रा (◌ु)",
    matraVowel: "उ",
    matraSymbol: "◌ु",
    matraType: "Short Vowel (ह्रस्व स्वर)",
    phonics: "sookh (short u + aspirated kh)",
    breakdown: "स + ◌ु + ख",
    length: 2,
    rule: "Short 'u' under 'स' (su) + aspirated 'ख' (kh).",
    examplePhrase: { hindi: "सुख और शांति", roman: "sukh aur śānti", english: "peace and happiness" }
  },
  {
    id: "chup",
    hindi: "चुप",
    roman: "cup",
    english: "quiet / silent",
    matra: "u",
    matraName: "उ की मात्रा (◌ु)",
    matraVowel: "उ",
    matraSymbol: "◌ु",
    matraType: "Short Vowel (ह्रस्व स्वर)",
    phonics: "choop (short u)",
    breakdown: "च + ◌ु + प",
    length: 2,
    rule: "Short 'u' on 'च' (cu) + 'p'. Common word for silence.",
    examplePhrase: { hindi: "चुप रहो", roman: "cup raho", english: "stay quiet" }
  },
  {
    id: "gulaab",
    hindi: "गुलाब",
    roman: "gulāb",
    english: "rose",
    matra: "u",
    matraName: "उ की मात्रा (◌ु)",
    matraVowel: "उ",
    matraSymbol: "◌ु",
    matraType: "Mixed: Short 'u' + Long 'ā'",
    phonics: "goo-laab",
    breakdown: "ग + ◌ु + ल + ◌ा + ब",
    length: 3,
    rule: "Short 'u' on 'ग' (gu) + long 'ā' on 'ल' (lā) + 'b'.",
    examplePhrase: { hindi: "लाल गुलाब", roman: "lāl gulāb", english: "red rose" }
  },
  {
    id: "saabun",
    hindi: "साबुन",
    roman: "sābun",
    english: "soap",
    matra: "u",
    matraName: "उ की मात्रा (◌ु)",
    matraVowel: "उ",
    matraSymbol: "◌ु",
    matraType: "Short Vowel (ह्रस्व स्वर)",
    phonics: "saa-boon (short u)",
    breakdown: "स + ◌ा + ब + ◌ु + न",
    length: 3,
    rule: "Long 'ā' on first syllable (sā), short 'u' on second (bun).",
    examplePhrase: { hindi: "हाथ धोने का साबुन", roman: "hāth dhone kā sābun", english: "hand-washing soap" }
  },
  {
    id: "dukaan",
    hindi: "दुकान",
    roman: "dukān",
    english: "shop / store",
    matra: "u",
    matraName: "उ की मात्रा (◌ु)",
    matraVowel: "उ",
    matraSymbol: "◌ु",
    matraType: "Short Vowel (ह्रस्व स्वर)",
    phonics: "doo-kaan",
    breakdown: "द + ◌ु + क + ◌ा + न",
    length: 3,
    rule: "Short 'u' under 'द' (du) + long 'kā' + 'n'.",
    examplePhrase: { hindi: "किताबों की दुकान", roman: "kitāboñ kī dukān", english: "bookstore" }
  },
  {
    id: "gudiya",
    hindi: "गुड़िया",
    roman: "guṛiyā",
    english: "doll",
    matra: "u",
    matraName: "उ की मात्रा (◌ु)",
    matraVowel: "उ",
    matraSymbol: "◌ु",
    matraType: "Triple Matra: '◌ु' + '◌ि' + '◌ा'",
    phonics: "goo-ṛi-yaa",
    breakdown: "ग + ◌ु + ड़ + ◌ि + य + ◌ा",
    length: 3,
    rule: "Rich matra combination: short 'u' on 'ग', short 'i' on 'ड़', long 'ā' on 'य'.",
    examplePhrase: { hindi: "सुंदर गुड़िया", roman: "sundar guṛiyā", english: "pretty doll" }
  },

  // =========================================================================
  // 6. BADA UU KI MATRA (ऊ की मात्रा - ◌ू)
  // =========================================================================
  {
    id: "phool",
    hindi: "फूल",
    roman: "phūl",
    english: "flower",
    matra: "uu",
    matraName: "ऊ की मात्रा (◌ू)",
    matraVowel: "ऊ",
    matraSymbol: "◌ू",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "phool (long oo)",
    breakdown: "फ + ◌ू + ल",
    length: 2,
    rule: "Curves to the RIGHT under 'फ'. Pronounced with a deep, long 'oo' sound as in 'boot'.",
    examplePhrase: { hindi: "सुंदर फूल", roman: "sundar phūl", english: "beautiful flower" }
  },
  {
    id: "doodh",
    hindi: "दूध",
    roman: "dūdh",
    english: "milk",
    matra: "uu",
    matraName: "ऊ की मात्रा (◌ू)",
    matraVowel: "ऊ",
    matraSymbol: "◌ू",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "doodh (aspirated dental dh)",
    breakdown: "द + ◌ू + ध",
    length: 2,
    rule: "Long 'ū' under 'द' (dū) + aspirated dental 'ध' (dh).",
    examplePhrase: { hindi: "गरम दूध", roman: "garam dūdh", english: "warm milk" }
  },
  {
    id: "dhoop",
    hindi: "धूप",
    roman: "dhūp",
    english: "sunlight / sunshine",
    matra: "uu",
    matraName: "ऊ की मात्रा (◌ू)",
    matraVowel: "ऊ",
    matraSymbol: "◌ू",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "dhoop (aspirated dh)",
    breakdown: "ध + ◌ू + प",
    length: 2,
    rule: "Aspirated 'ध' + long 'ū' (dhū) + 'p'.",
    examplePhrase: { hindi: "तेज़ धूप", roman: "tez dhūp", english: "bright sunshine" }
  },
  {
    id: "bhaalu",
    hindi: "भालू",
    roman: "bhālū",
    english: "bear",
    matra: "uu",
    matraName: "ऊ की मात्रा (◌ू)",
    matraVowel: "ऊ",
    matraSymbol: "◌ू",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "bhaa-loo",
    breakdown: "भ + ◌ा + ल + ◌ू",
    length: 2,
    rule: "Long 'ā' on 'भ' (bhā) + long 'ū' on 'ल' (lū).",
    examplePhrase: { hindi: "काला भालू", roman: "kālā bhālū", english: "black bear" }
  },
  {
    id: "sooraj",
    hindi: "सूरज",
    roman: "sūraj",
    english: "sun",
    matra: "uu",
    matraName: "ऊ की मात्रा (◌ू)",
    matraVowel: "ऊ",
    matraSymbol: "◌ू",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "soo-ruj",
    breakdown: "स + ◌ू + र + ज",
    length: 3,
    rule: "First syllable has deep long 'ū' (sū), followed by 'raj'.",
    examplePhrase: { hindi: "सूरज उग रहा है", roman: "sūraj ug rahā hai", english: "the sun is rising" }
  },
  {
    id: "tarbooz",
    hindi: "तरबूज",
    roman: "tarbūz",
    english: "watermelon",
    matra: "uu",
    matraName: "ऊ की मात्रा (◌ू)",
    matraVowel: "ऊ",
    matraSymbol: "◌ू",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "tur-booz",
    breakdown: "त + र + ब + ◌ू + ज",
    length: 4,
    rule: "Four letters: 'tar' + 'bū' + 'z'. Deep vowel emphasis on the third syllable.",
    examplePhrase: { hindi: "लाल तरबूज", roman: "lāl tarbūz", english: "red watermelon" }
  },
  {
    id: "kabootar",
    hindi: "कबूतर",
    roman: "kabūtar",
    english: "pigeon / dove",
    matra: "uu",
    matraName: "ऊ की मात्रा (◌ू)",
    matraVowel: "ऊ",
    matraSymbol: "◌ू",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "kuh-boo-tur",
    breakdown: "क + ब + ◌ू + त + र",
    length: 4,
    rule: "'ka' + 'bū' + 'tar'. Notice the elongated second syllable.",
    examplePhrase: { hindi: "सफ़ेद कबूतर", roman: "safed kabūtar", english: "white dove" }
  },

  // =========================================================================
  // 7. RI KI MATRA (ऋ की मात्रा - ◌ृ)
  // =========================================================================
  {
    id: "grih",
    hindi: "गृह",
    roman: "gṛh",
    english: "home / abode",
    matra: "ri",
    matraName: "ऋ की मात्रा (◌ृ)",
    matraVowel: "ऋ",
    matraSymbol: "◌ृ",
    matraType: "Vocalic R (ऋ)",
    phonics: "grih",
    breakdown: "ग + ◌ृ + ह",
    length: 2,
    rule: "Curved semi-circle under consonant 'ग'. Pronounced as 'gri' or 'gṛ'.",
    examplePhrase: { hindi: "गृह कार्य", roman: "gṛh kārya", english: "homework" }
  },
  {
    id: "kripa",
    hindi: "कृपा",
    roman: "kṛpā",
    english: "kindness / grace / please",
    matra: "ri",
    matraName: "ऋ की मात्रा (◌ृ)",
    matraVowel: "ऋ",
    matraSymbol: "◌ृ",
    matraType: "Vocalic R (ऋ)",
    phonics: "kri-paa",
    breakdown: "क + ◌ृ + प + ◌ा",
    length: 2,
    rule: "'क' with '◌ृ' = 'kṛ' (kri) + 'pā'. Key formal word for courtesy.",
    examplePhrase: { hindi: "कृपा करके", roman: "kṛpā karke", english: "please" }
  },
  {
    id: "vriksh",
    hindi: "वृक्ष",
    roman: "vṛkṣ",
    english: "tree",
    matra: "ri",
    matraName: "ऋ की मात्रा (◌ृ)",
    matraVowel: "ऋ",
    matraSymbol: "◌ृ",
    matraType: "Vocalic R (ऋ)",
    phonics: "vriksh",
    breakdown: "व + ◌ृ + क्ष",
    length: 2,
    rule: "'व' with '◌ृ' = 'vṛ' (vri) + compound letter 'क्ष' (kṣ).",
    examplePhrase: { hindi: "छायादार वृक्ष", roman: "chāyādār vṛkṣ", english: "shady tree" }
  },
  {
    id: "mrig",
    hindi: "मृग",
    roman: "mṛg",
    english: "deer / gazelle",
    matra: "ri",
    matraName: "ऋ की मात्रा (◌ृ)",
    matraVowel: "ऋ",
    matraSymbol: "◌ृ",
    matraType: "Vocalic R (ऋ)",
    phonics: "mrig",
    breakdown: "म + ◌ृ + ग",
    length: 2,
    rule: "'म' with '◌ृ' = 'mṛ' (mri) + 'g'.",
    examplePhrase: { hindi: "कस्तूरी मृग", roman: "kastūrī mṛg", english: "musk deer" }
  },
  {
    id: "amrit",
    hindi: "अमृत",
    roman: "amṛt",
    english: "nectar / immortality",
    matra: "ri",
    matraName: "ऋ की मात्रा (◌ृ)",
    matraVowel: "ऋ",
    matraSymbol: "◌ृ",
    matraType: "Vocalic R (ऋ)",
    phonics: "um-rit",
    breakdown: "अ + म + ◌ृ + त",
    length: 3,
    rule: "Initial vowel 'अ' + 'म' with '◌ृ' (mṛ) + 't'.",
    examplePhrase: { hindi: "अमृत समान जल", roman: "amṛt samān jal", english: "water like nectar" }
  },

  // =========================================================================
  // 8. CHHOTI E KI MATRA (ए की मात्रा - ◌े)
  // =========================================================================
  {
    id: "seb",
    hindi: "सेब",
    roman: "seb",
    english: "apple",
    matra: "e",
    matraName: "ए की मात्रा (◌े)",
    matraVowel: "ए",
    matraSymbol: "◌े",
    matraType: "Monophthong (दीर्घ स्वर)",
    phonics: "sayb (pure e as in café)",
    breakdown: "स + ◌े + ब",
    length: 2,
    rule: "Single diagonal slant on the top headline. Produces pure long 'e' (like French é).",
    examplePhrase: { hindi: "मीठा सेब", roman: "mīṭhā seb", english: "sweet apple" }
  },
  {
    id: "khel",
    hindi: "खेल",
    roman: "khel",
    english: "game / play",
    matra: "e",
    matraName: "ए की मात्रा (◌े)",
    matraVowel: "ए",
    matraSymbol: "◌े",
    matraType: "Monophthong (दीर्घ स्वर)",
    phonics: "khayl (aspirated kh)",
    breakdown: "ख + ◌े + ल",
    length: 2,
    rule: "Aspirated 'ख' with '◌े' = 'khe' + 'l'.",
    examplePhrase: { hindi: "क्रिकेट का खेल", roman: "krikeṭ kā khel", english: "cricket game" }
  },
  {
    id: "rel",
    hindi: "रेल",
    roman: "rel",
    english: "train / railway",
    matra: "e",
    matraName: "ए की मात्रा (◌े)",
    matraVowel: "ए",
    matraSymbol: "◌े",
    matraType: "Monophthong (दीर्घ स्वर)",
    phonics: "rayl",
    breakdown: "र + ◌े + ल",
    length: 2,
    rule: "'र' with top stroke '◌े' = 're' + 'l'.",
    examplePhrase: { hindi: "रेल गाड़ी", roman: "rel gāṛī", english: "train" }
  },
  {
    id: "sher",
    hindi: "शेर",
    roman: "śer",
    english: "lion / tiger / verse",
    matra: "e",
    matraName: "ए की मात्रा (◌े)",
    matraVowel: "ए",
    matraSymbol: "◌े",
    matraType: "Monophthong (दीर्घ स्वर)",
    phonics: "shayr",
    breakdown: "श + ◌े + र",
    length: 2,
    rule: "Palatal sibilant 'श' (sh) with '◌े' = 'śe' + 'r'.",
    examplePhrase: { hindi: "जंगल का शेर", roman: "jaṅgal kā śer", english: "lion of the jungle" }
  },
  {
    id: "kela",
    hindi: "केला",
    roman: "kelā",
    english: "banana",
    matra: "e",
    matraName: "ए की मात्रा (◌े)",
    matraVowel: "ए",
    matraSymbol: "◌े",
    matraType: "Mixed: '◌े' + '◌ा'",
    phonics: "kay-laa",
    breakdown: "क + ◌े + ल + ◌ा",
    length: 2,
    rule: "First consonant has '◌े' (ke), second consonant has '◌ा' (lā).",
    examplePhrase: { hindi: "पका केला", roman: "pakā kelā", english: "ripe banana" }
  },
  {
    id: "ped",
    hindi: "पेड़",
    roman: "peṛ",
    english: "tree",
    matra: "e",
    matraName: "ए की मात्रा (◌े)",
    matraVowel: "ए",
    matraSymbol: "◌े",
    matraType: "Monophthong (दीर्घ स्वर)",
    phonics: "payṛ (flapped ṛ)",
    breakdown: "प + ◌े + ड़",
    length: 2,
    rule: "'प' with '◌े' = 'pe' + retroflex flapped 'ड़' (ṛ).",
    examplePhrase: { hindi: "हरा पेड़", roman: "harā peṛ", english: "green tree" }
  },
  {
    id: "beta",
    hindi: "बेटा",
    roman: "beṭā",
    english: "son",
    matra: "e",
    matraName: "ए की मात्रा (◌े)",
    matraVowel: "ए",
    matraSymbol: "◌े",
    matraType: "Monophthong (दीर्घ स्वर)",
    phonics: "bay-ṭaa (retroflex ṭ)",
    breakdown: "ब + ◌े + ट + ◌ा",
    length: 2,
    rule: "'ब' with '◌े' = 'be' + retroflex 'ट' with '◌ा' = 'ṭā'.",
    examplePhrase: { hindi: "मेरा बेटा", roman: "merā beṭā", english: "my son" }
  },

  // =========================================================================
  // 9. BADI AI KI MATRA (ऐ की मात्रा - ◌ै)
  // =========================================================================
  {
    id: "pair",
    hindi: "पैर",
    roman: "pair",
    english: "foot / leg",
    matra: "ai",
    matraName: "ऐ की मात्रा (◌ै)",
    matraVowel: "ऐ",
    matraSymbol: "◌ै",
    matraType: "Diphthong (वृद्धि स्वर)",
    phonics: "pair (like 'air' with p)",
    breakdown: "प + ◌ै + र",
    length: 2,
    rule: "TWO diagonal strokes on top headline. Pronounced as open 'ai' (rhymes with cat/air).",
    examplePhrase: { hindi: "दायाँ पैर", roman: "dāyā̃ pair", english: "right foot" }
  },
  {
    id: "bail",
    hindi: "बैल",
    roman: "bail",
    english: "ox / bull",
    matra: "ai",
    matraName: "ऐ की मात्रा (◌ै)",
    matraVowel: "ऐ",
    matraSymbol: "◌ै",
    matraType: "Diphthong (वृद्धि स्वर)",
    phonics: "byl",
    breakdown: "ब + ◌ै + ल",
    length: 2,
    rule: "'ब' with two top slants '◌ै' = 'bai' + 'l'.",
    examplePhrase: { hindi: "बैल गाड़ी", roman: "bail gāṛī", english: "bullock cart" }
  },
  {
    id: "paisa",
    hindi: "पैसा",
    roman: "paisā",
    english: "money / coin",
    matra: "ai",
    matraName: "ऐ की मात्रा (◌ै)",
    matraVowel: "ऐ",
    matraSymbol: "◌ै",
    matraType: "Diphthong (वृद्धि स्वर)",
    phonics: "py-saa",
    breakdown: "प + ◌ै + स + ◌ा",
    length: 2,
    rule: "First consonant has double slant '◌ै' (pai), second has '◌ा' (sā).",
    examplePhrase: { hindi: "बहुत पैसा", roman: "bahut paisā", english: "a lot of money" }
  },
  {
    id: "thaila",
    hindi: "थैला",
    roman: "thailā",
    english: "bag / sack",
    matra: "ai",
    matraName: "ऐ की मात्रा (◌ै)",
    matraVowel: "ऐ",
    matraSymbol: "◌ै",
    matraType: "Diphthong (वृद्धि स्वर)",
    phonics: "thy-laa",
    breakdown: "थ + ◌ै + ल + ◌ा",
    length: 2,
    rule: "Aspirated 'थ' with '◌ै' = 'thai' + 'lā'.",
    examplePhrase: { hindi: "कपड़े का थैला", roman: "kapṛe kā thailā", english: "cloth bag" }
  },
  {
    id: "kaisa",
    hindi: "कैसा",
    roman: "kaisā",
    english: "how / what kind",
    matra: "ai",
    matraName: "ऐ की मात्रा (◌ै)",
    matraVowel: "ऐ",
    matraSymbol: "◌ै",
    matraType: "Diphthong (वृद्धि स्वर)",
    phonics: "ky-saa",
    breakdown: "क + ◌ै + स + ◌ा",
    length: 2,
    rule: "'क' with '◌ै' = 'kai' + 'sā'. Key question word.",
    examplePhrase: { hindi: "कैसा लगा?", roman: "kaisā lagā?", english: "how did you like it?" }
  },
  {
    id: "maidaan",
    hindi: "मैदान",
    roman: "maidān",
    english: "open field / ground",
    matra: "ai",
    matraName: "ऐ की मात्रा (◌ै)",
    matraVowel: "ऐ",
    matraSymbol: "◌ै",
    matraType: "Diphthong (वृद्धि स्वर)",
    phonics: "my-daan",
    breakdown: "म + ◌ै + द + ◌ा + न",
    length: 3,
    rule: "'म' with double slant '◌ै' (mai) + long 'dā' + 'n'.",
    examplePhrase: { hindi: "खेल का मैदान", roman: "khel kā maidān", english: "playground / sports field" }
  },
  {
    id: "sainik",
    hindi: "सैनिक",
    roman: "sainik",
    english: "soldier",
    matra: "ai",
    matraName: "ऐ की मात्रा (◌ै)",
    matraVowel: "ऐ",
    matraSymbol: "◌ै",
    matraType: "Diphthong (वृद्धि स्वर)",
    phonics: "sy-nik",
    breakdown: "स + ◌ै + न + ◌ि + क",
    length: 3,
    rule: "First syllable has '◌ै' (sai), second has short '◌ि' (ni) + 'k'.",
    examplePhrase: { hindi: "बहादुर सैनिक", roman: "bahādur sainik", english: "brave soldier" }
  },

  // =========================================================================
  // 10. CHHOTA O KI MATRA (ओ की मात्रा - ◌ो)
  // =========================================================================
  {
    id: "mor",
    hindi: "मोर",
    roman: "mor",
    english: "peacock (national bird)",
    matra: "o",
    matraName: "ओ की मात्रा (◌ो)",
    matraVowel: "ओ",
    matraSymbol: "◌ो",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "mohr",
    breakdown: "म + ◌ो + र",
    length: 2,
    rule: "Standing line AFTER consonant + SINGLE stroke on top. Pure 'o' sound (like boat/more).",
    examplePhrase: { hindi: "सुंदर मोर", roman: "sundar mor", english: "beautiful peacock" }
  },
  {
    id: "tota",
    hindi: "तोता",
    roman: "totā",
    english: "parrot",
    matra: "o",
    matraName: "ओ की मात्रा (◌ो)",
    matraVowel: "ओ",
    matraSymbol: "◌ो",
    matraType: "Mixed: '◌ो' + '◌ा'",
    phonics: "toh-tah",
    breakdown: "त + ◌ो + त + ◌ा",
    length: 2,
    rule: "First 'त' has '◌ो' (to), second 'त' has '◌ा' (tā).",
    examplePhrase: { hindi: "हरा तोता", roman: "harā totā", english: "green parrot" }
  },
  {
    id: "chor",
    hindi: "चोर",
    roman: "cor",
    english: "thief",
    matra: "o",
    matraName: "ओ की मात्रा (◌ो)",
    matraVowel: "ओ",
    matraSymbol: "◌ो",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "chohr",
    breakdown: "च + ◌ो + र",
    length: 2,
    rule: "'च' with '◌ो' = 'co' + 'r'.",
    examplePhrase: { hindi: "चोर भाग गया", roman: "cor bhāg gayā", english: "the thief ran away" }
  },
  {
    id: "gol",
    hindi: "गोल",
    roman: "gol",
    english: "round / circular / goal",
    matra: "o",
    matraName: "ओ की मात्रा (◌ो)",
    matraVowel: "ओ",
    matraSymbol: "◌ो",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "gohl",
    breakdown: "ग + ◌ो + ल",
    length: 2,
    rule: "'ग' with '◌ो' = 'go' + 'l'.",
    examplePhrase: { hindi: "गोल गेंद", roman: "gol gend", english: "round ball" }
  },
  {
    id: "botal",
    hindi: "बोतल",
    roman: "botal",
    english: "bottle",
    matra: "o",
    matraName: "ओ की मात्रा (◌ो)",
    matraVowel: "ओ",
    matraSymbol: "◌ो",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "boh-tul",
    breakdown: "ब + ◌ो + त + ल",
    length: 3,
    rule: "'ब' with '◌ो' (bo) + 'tal'.",
    examplePhrase: { hindi: "पानी की बोतल", roman: "pānī kī botal", english: "water bottle" }
  },
  {
    id: "samosa",
    hindi: "समोसा",
    roman: "samosā",
    english: "samosa (savory pastry)",
    matra: "o",
    matraName: "ओ की मात्रा (◌ो)",
    matraVowel: "ओ",
    matraSymbol: "◌ो",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "suh-moh-saa",
    breakdown: "स + म + ◌ो + स + ◌ा",
    length: 3,
    rule: "Middle consonant 'म' carries '◌ो' (mo) + 'sā'.",
    examplePhrase: { hindi: "गरम समोसा", roman: "garam samosā", english: "hot samosa" }
  },
  {
    id: "koyal",
    hindi: "कोयल",
    roman: "koyal",
    english: "cuckoo bird",
    matra: "o",
    matraName: "ओ की मात्रा (◌ो)",
    matraVowel: "ओ",
    matraSymbol: "◌ो",
    matraType: "Long Vowel (दीर्घ स्वर)",
    phonics: "koh-yul",
    breakdown: "क + ◌ो + य + ल",
    length: 3,
    rule: "'क' with '◌ो' = 'ko' + 'yal'.",
    examplePhrase: { hindi: "मीठी कोयल", roman: "mīṭhī koyal", english: "sweet cuckoo" }
  },

  // =========================================================================
  // 11. BADA AU KI MATRA (औ की मात्रा - ◌ौ)
  // =========================================================================
  {
    id: "paudha",
    hindi: "पौधा",
    roman: "paudhā",
    english: "plant / sapling",
    matra: "au",
    matraName: "औ की मात्रा (◌ौ)",
    matraVowel: "औ",
    matraSymbol: "◌ौ",
    matraType: "Diphthong (वृद्धि स्वर)",
    phonics: "pow-dhaa",
    breakdown: "प + ◌ौ + ध + ◌ा",
    length: 2,
    rule: "Standing line + TWO strokes on top. Pronounced as open 'au' / 'ow' as in 'cow'.",
    examplePhrase: { hindi: "छोटा पौधा", roman: "choṭā paudhā", english: "small plant" }
  },
  {
    id: "kaun",
    hindi: "कौन",
    roman: "kaun",
    english: "who",
    matra: "au",
    matraName: "औ की मात्रा (◌ौ)",
    matraVowel: "औ",
    matraSymbol: "◌ौ",
    matraType: "Diphthong (वृद्धि स्वर)",
    phonics: "kown",
    breakdown: "क + ◌ौ + न",
    length: 2,
    rule: "'क' with '◌ौ' = 'kau' + 'n'. Essential question word.",
    examplePhrase: { hindi: "वहाँ कौन है?", roman: "vahā̃ kaun hai?", english: "who is there?" }
  },
  {
    id: "aurat",
    hindi: "औरत",
    roman: "aurat",
    english: "woman",
    matra: "au",
    matraName: "औ की मात्रा (◌ौ)",
    matraVowel: "औ",
    matraSymbol: "◌ौ",
    matraType: "Diphthong (वृद्धि स्वर)",
    phonics: "ow-rut",
    breakdown: "औ + र + त",
    length: 3,
    rule: "Begins with the independent full vowel 'औ' + 'rat'.",
    examplePhrase: { hindi: "दयालु औरत", roman: "dayālu aurat", english: "kind woman" }
  },
  {
    id: "naukar",
    hindi: "नौकर",
    roman: "naukar",
    english: "servant / attendant",
    matra: "au",
    matraName: "औ की मात्रा (◌ौ)",
    matraVowel: "औ",
    matraSymbol: "◌ौ",
    matraType: "Diphthong (वृद्धि स्वर)",
    phonics: "now-kur",
    breakdown: "न + ◌ौ + क + र",
    length: 3,
    rule: "'न' with '◌ौ' = 'nau' + 'kar'.",
    examplePhrase: { hindi: "ईमानदार नौकर", roman: "īmāndār naukar", english: "honest attendant" }
  },
  {
    id: "mausam",
    hindi: "मौसम",
    roman: "mausam",
    english: "weather / season",
    matra: "au",
    matraName: "औ की मात्रा (◌ौ)",
    matraVowel: "औ",
    matraSymbol: "◌ौ",
    matraType: "Diphthong (वृद्धि स्वर)",
    phonics: "mow-sum",
    breakdown: "म + ◌ौ + स + म",
    length: 3,
    rule: "'म' with '◌ौ' = 'mau' + 'sam'.",
    examplePhrase: { hindi: "सुहावना मौसम", roman: "suhāvnā mausam", english: "pleasant weather" }
  },
  {
    id: "khilauna",
    hindi: "खिलौना",
    roman: "khilaunā",
    english: "toy",
    matra: "au",
    matraName: "औ की मात्रा (◌ौ)",
    matraVowel: "औ",
    matraSymbol: "◌ौ",
    matraType: "Mixed: '◌ि' + '◌ौ' + '◌ा'",
    phonics: "khi-low-naa",
    breakdown: "ख + ◌ि + ल + ◌ौ + न + ◌ा",
    length: 3,
    rule: "Short 'i' on 'ख' (khi) + '◌ौ' on 'ल' (lau) + 'nā'. Contrast of three different vowels!",
    examplePhrase: { hindi: "बच्चों का खिलौना", roman: "baccoñ kā khilaunā", english: "children's toy" }
  },
  {
    id: "hathauda",
    hindi: "हथौड़ा",
    roman: "hathauṛā",
    english: "hammer",
    matra: "au",
    matraName: "औ की मात्रा (◌ौ)",
    matraVowel: "औ",
    matraSymbol: "◌ौ",
    matraType: "Diphthong (वृद्धि स्वर)",
    phonics: "huh-thow-ṛaa",
    breakdown: "ह + थ + ◌ौ + ड़ + ◌ा",
    length: 3,
    rule: "'ha' + aspirated 'थ' with '◌ौ' (thau) + 'ṛā'.",
    examplePhrase: { hindi: "भारी हथौड़ा", roman: "bhārī hathauṛā", english: "heavy hammer" }
  },

  // =========================================================================
  // 12. ANUSVARA (अं / अनुस्वार - ◌ं)
  // =========================================================================
  {
    id: "rang",
    hindi: "रंग",
    roman: "raṅg",
    english: "color",
    matra: "anusvara",
    matraName: "अं (अनुस्वार - ◌ं)",
    matraVowel: "अं",
    matraSymbol: "◌ं",
    matraType: "Nasal Dot (अनुस्वार)",
    phonics: "rung",
    breakdown: "र + ◌ं + ग",
    length: 2,
    rule: "Single DOT on top of headline. Takes the nasal sound of the following consonant (here, velar 'ṅ' before 'g').",
    examplePhrase: { hindi: "नीला रंग", roman: "nīlā raṅg", english: "blue color" }
  },
  {
    id: "pankh",
    hindi: "पंख",
    roman: "paṅkh",
    english: "wing / feather",
    matra: "anusvara",
    matraName: "अं (अनुस्वार - ◌ं)",
    matraVowel: "अं",
    matraSymbol: "◌ं",
    matraType: "Nasal Dot (अनुस्वार)",
    phonics: "punkh",
    breakdown: "प + ◌ं + ख",
    length: 2,
    rule: "Dot over 'प' nasally precedes 'ख'.",
    examplePhrase: { hindi: "पक्षी के पंख", roman: "pakṣī ke paṅkh", english: "bird's wings" }
  },
  {
    id: "patang",
    hindi: "पतंग",
    roman: "pataṅg",
    english: "kite",
    matra: "anusvara",
    matraName: "अं (अनुस्वार - ◌ं)",
    matraVowel: "अं",
    matraSymbol: "◌ं",
    matraType: "Nasal Dot (अनुस्वार)",
    phonics: "puh-tung",
    breakdown: "प + त + ◌ं + ग",
    length: 3,
    rule: "Dot sits above middle letter 'त'. Pronounced 'pa-tang'.",
    examplePhrase: { hindi: "उड़ती पतंग", roman: "uṛtī pataṅg", english: "flying kite" }
  },
  {
    id: "pankha",
    hindi: "पंखा",
    roman: "paṅkhā",
    english: "fan",
    matra: "anusvara",
    matraName: "अं (अनुस्वार - ◌ं)",
    matraVowel: "अं",
    matraSymbol: "◌ं",
    matraType: "Nasal Dot (अनुस्वार)",
    phonics: "pung-khaa",
    breakdown: "प + ◌ं + ख + ◌ा",
    length: 2,
    rule: "Dot over 'प' + aspirated 'khā' = 'paṅkhā'.",
    examplePhrase: { hindi: "बिजली का पंखा", roman: "bijlī kā paṅkhā", english: "electric fan" }
  },
  {
    id: "bandar",
    hindi: "बंदर",
    roman: "bandar",
    english: "monkey",
    matra: "anusvara",
    matraName: "अं (अनुस्वार - ◌ं)",
    matraVowel: "अं",
    matraSymbol: "◌ं",
    matraType: "Nasal Dot (अनुस्वार)",
    phonics: "bun-dur",
    breakdown: "ब + ◌ं + द + र",
    length: 3,
    rule: "Before dental 'द', the dot takes the dental nasal sound 'n': 'ban-dar'.",
    examplePhrase: { hindi: "शरारती बंदर", roman: "śarārtī bandar", english: "naughty monkey" }
  },
  {
    id: "jangal",
    hindi: "जंगल",
    roman: "jaṅgal",
    english: "jungle / forest",
    matra: "anusvara",
    matraName: "अं (अनुस्वार - ◌ं)",
    matraVowel: "अं",
    matraSymbol: "◌ं",
    matraType: "Nasal Dot (अनुस्वार)",
    phonics: "jung-ul",
    breakdown: "ज + ◌ं + ग + ल",
    length: 3,
    rule: "Dot over 'ज' + 'gal' = 'jaṅgal' (origin of English word 'jungle').",
    examplePhrase: { hindi: "घना जंगल", roman: "ghanā jaṅgal", english: "dense forest" }
  },
  {
    id: "tiranga",
    hindi: "तिरंगा",
    roman: "tiraṅgā",
    english: "tricolor (Indian national flag)",
    matra: "anusvara",
    matraName: "अं (अनुस्वार - ◌ं)",
    matraVowel: "अं",
    matraSymbol: "◌ं",
    matraType: "Mixed: '◌ि' + '◌ं' + '◌ा'",
    phonics: "ti-rung-gaa",
    breakdown: "त + ◌ि + र + ◌ं + ग + ◌ा",
    length: 3,
    rule: "Short 'i' on 'त' + dot on 'र' + 'gā'. Means 'having three colors'.",
    examplePhrase: { hindi: "हमारा तिरंगा", roman: "hamārā tiraṅgā", english: "our tricolor" }
  },

  // =========================================================================
  // 13. ANUNASIKA / CHANDRABINDU (अँ / चन्द्रबिन्दु - ◌ँ)
  // =========================================================================
  {
    id: "chaand",
    hindi: "चाँद",
    roman: "cā̃nd",
    english: "moon",
    matra: "anunasika",
    matraName: "अँ (चन्द्रबिन्दु - ◌ँ)",
    matraVowel: "अँ",
    matraSymbol: "◌ँ",
    matraType: "Nasalized Vowel (अनुनासिक)",
    phonics: "chaand (nasalized aa)",
    breakdown: "च + ◌ा + ◌ँ + द",
    length: 2,
    rule: "Crescent moon with dot (◌ँ). The vowel 'ā' itself is vocalized through the nose, not a separate 'n' consonant.",
    examplePhrase: { hindi: "पूरा चाँद", roman: "pūrā cā̃nd", english: "full moon" }
  },
  {
    id: "aankh",
    hindi: "आँख",
    roman: "ā̃kh",
    english: "eye",
    matra: "anunasika",
    matraName: "अँ (चन्द्रबिन्दु - ◌ँ)",
    matraVowel: "अँ",
    matraSymbol: "◌ँ",
    matraType: "Nasalized Vowel (अनुनासिक)",
    phonics: "aankh (nasalized aa)",
    breakdown: "आ + ◌ँ + ख",
    length: 2,
    rule: "Chandrabindu sits directly over initial 'आ' + aspirated 'kh'.",
    examplePhrase: { hindi: "सुंदर आँखें", roman: "sundar ā̃kheñ", english: "beautiful eyes" }
  },
  {
    id: "daant",
    hindi: "दाँत",
    roman: "dā̃nt",
    english: "tooth / teeth",
    matra: "anunasika",
    matraName: "अँ (चन्द्रबिन्दु - ◌ँ)",
    matraVowel: "अँ",
    matraSymbol: "◌ँ",
    matraType: "Nasalized Vowel (अनुनासिक)",
    phonics: "daant (nasalized aa)",
    breakdown: "द + ◌ा + ◌ँ + त",
    length: 2,
    rule: "'द' with '◌ा' + chandrabindu '◌ँ' + dental 'त'.",
    examplePhrase: { hindi: "साफ़ दाँत", roman: "sāf dā̃nt", english: "clean teeth" }
  },
  {
    id: "gaanv",
    hindi: "गाँव",
    roman: "gā̃v",
    english: "village",
    matra: "anunasika",
    matraName: "अँ (चन्द्रबिन्दु - ◌ँ)",
    matraVowel: "अँ",
    matraSymbol: "◌ँ",
    matraType: "Nasalized Vowel (अनुनासिक)",
    phonics: "gaav (nasalized aa)",
    breakdown: "ग + ◌ा + ◌ँ + व",
    length: 2,
    rule: "Deep nasalized 'ā' followed by 'v'. Common word for village.",
    examplePhrase: { hindi: "मेरा गाँव", roman: "merā gā̃v", english: "my village" }
  },
  {
    id: "paanv",
    hindi: "पाँव",
    roman: "pā̃v",
    english: "foot / feet",
    matra: "anunasika",
    matraName: "अँ (चन्द्रबिन्दु - ◌ँ)",
    matraVowel: "अँ",
    matraSymbol: "◌ँ",
    matraType: "Nasalized Vowel (अनुनासिक)",
    phonics: "paav (nasalized aa)",
    breakdown: "प + ◌ा + ◌ँ + व",
    length: 2,
    rule: "Chandrabindu over 'प' + '◌ा' = 'pā̃' + 'v'.",
    examplePhrase: { hindi: "पाँव धोना", roman: "pā̃v dhonā", english: "to wash one's feet" }
  },
  {
    id: "saanp",
    hindi: "साँप",
    roman: "sā̃p",
    english: "snake",
    matra: "anunasika",
    matraName: "अँ (चन्द्रबिन्दु - ◌ँ)",
    matraVowel: "अँ",
    matraSymbol: "◌ँ",
    matraType: "Nasalized Vowel (अनुनासिक)",
    phonics: "saap (nasalized aa)",
    breakdown: "स + ◌ा + ◌ँ + प",
    length: 2,
    rule: "'स' with '◌ा' + '◌ँ' = 'sā̃' + 'p'.",
    examplePhrase: { hindi: "ज़हरीला साँप", roman: "zaharīlā sā̃p", english: "poisonous snake" }
  },
  {
    id: "oont",
    hindi: "ऊँट",
    roman: "ū̃ṭ",
    english: "camel (ship of the desert)",
    matra: "anunasika",
    matraName: "अँ (चन्द्रबिन्दु - ◌ँ)",
    matraVowel: "अँ",
    matraSymbol: "◌ँ",
    matraType: "Nasalized Vowel (अनुनासिक)",
    phonics: "oont (nasalized oo + retroflex ṭ)",
    breakdown: "ऊ + ◌ँ + ट",
    length: 2,
    rule: "Full vowel 'ऊ' with chandrabindu '◌ँ' + retroflex 'ट'.",
    examplePhrase: { hindi: "रेगिस्तान का ऊँट", roman: "registān kā ū̃ṭ", english: "desert camel" }
  },
  {
    id: "maa",
    hindi: "माँ",
    roman: "mā̃",
    english: "mother / mom",
    matra: "anunasika",
    matraName: "अँ (चन्द्रबिन्दु - ◌ँ)",
    matraVowel: "अँ",
    matraSymbol: "◌ँ",
    matraType: "Nasalized Vowel (अनुनासिक)",
    phonics: "maa (nasalized)",
    breakdown: "म + ◌ा + ◌ँ",
    length: 1,
    rule: "Single syllable with chandrabindu. The most tender word in Hindi.",
    examplePhrase: { hindi: "मेरी प्यारी माँ", roman: "merī pyārī mā̃", english: "my loving mother" }
  },

  // =========================================================================
  // 14. HALF LETTERS & CONJUNCTS (आधे अक्षर / संयुक्त व्यंजन - ◌्)
  // =========================================================================
  {
    id: "kya",
    hindi: "क्या",
    roman: "kyā",
    english: "what",
    matra: "half",
    matraName: "आधे अक्षर (क्)",
    matraVowel: "—",
    matraSymbol: "◌्",
    matraType: "Half Consonant (अर्ध व्यंजन)",
    phonics: "kyaa",
    breakdown: "क् + य + ◌ा",
    length: 2,
    rule: "Half 'क' merges into 'य' without any intermediate vowel: 'kyā'.",
    examplePhrase: { hindi: "यह क्या है?", roman: "yeh kyā hai?", english: "what is this?" }
  },
  {
    id: "baccha",
    hindi: "बच्चा",
    roman: "baccā",
    english: "child / kid",
    matra: "half",
    matraName: "आधे अक्षर (च्च)",
    matraVowel: "—",
    matraSymbol: "◌्",
    matraType: "Geminate / Double Consonant (द्वित्व व्यंजन)",
    phonics: "but-chaa",
    breakdown: "ब + च् + च + ◌ा",
    length: 2,
    rule: "Double consonant 'च्च': Half 'च' + full 'चा'. Pause briefly on the first 'c' before releasing.",
    examplePhrase: { hindi: "छोटा बच्चा", roman: "choṭā baccā", english: "little child" }
  },
  {
    id: "patta",
    hindi: "पत्ता",
    roman: "pattā",
    english: "leaf",
    matra: "half",
    matraName: "आधे अक्षर (त्त)",
    matraVowel: "—",
    matraSymbol: "◌्",
    matraType: "Geminate / Double Consonant (द्वित्व व्यंजन)",
    phonics: "put-taa",
    breakdown: "प + त् + त + ◌ा",
    length: 2,
    rule: "Double dental 'त्त': Hold dental contact briefly: 'pat-tā'.",
    examplePhrase: { hindi: "हरा पत्ता", roman: "harā pattā", english: "green leaf" }
  },
  {
    id: "billi",
    hindi: "बिल्ली",
    roman: "billī",
    english: "cat",
    matra: "half",
    matraName: "आधे अक्षर (ल्ल)",
    matraVowel: "—",
    matraSymbol: "◌्",
    matraType: "Geminate + Badi I",
    phonics: "bil-lee",
    breakdown: "ब + ◌ि + ल् + ल + ◌ी",
    length: 2,
    rule: "Short 'i' on 'ब' (bi) + double 'ल्ल' with '◌ी' (llī).",
    examplePhrase: { hindi: "काली बिल्ली", roman: "kālī billī", english: "black cat" }
  },
  {
    id: "dilli",
    hindi: "दिल्ली",
    roman: "dillī",
    english: "Delhi (capital of India)",
    matra: "half",
    matraName: "आधे अक्षर (ल्ल)",
    matraVowel: "—",
    matraSymbol: "◌्",
    matraType: "Geminate + Badi I",
    phonics: "dil-lee",
    breakdown: "द + ◌ि + ल् + ल + ◌ी",
    length: 2,
    rule: "Short 'i' on 'द' (di) + double 'ल्ल' with '◌ी' (llī).",
    examplePhrase: { hindi: "सुंदर दिल्ली", roman: "sundar dillī", english: "beautiful Delhi" }
  },
  {
    id: "dost",
    hindi: "दोस्त",
    roman: "dost",
    english: "friend",
    matra: "half",
    matraName: "आधे अक्षर (स्त)",
    matraVowel: "—",
    matraSymbol: "◌्",
    matraType: "Cluster (स्त)",
    phonics: "dohst",
    breakdown: "द + ◌ो + स् + त",
    length: 3,
    rule: "'द' with '◌ो' (do) + cluster of half 'स्' (s) and dental 'त' (t).",
    examplePhrase: { hindi: "पक्का दोस्त", roman: "pakkā dost", english: "close friend" }
  },
  {
    id: "pustak",
    hindi: "पुस्तक",
    roman: "pustak",
    english: "book (formal / Sanskrit origin)",
    matra: "half",
    matraName: "आधे अक्षर (स्त)",
    matraVowel: "—",
    matraSymbol: "◌्",
    matraType: "Cluster (स्त)",
    phonics: "poos-tuk",
    breakdown: "प + ◌ु + स् + त + क",
    length: 3,
    rule: "Short 'u' on 'प' (pu) + cluster 'स्त' (sta) + 'k'.",
    examplePhrase: { hindi: "धार्मिक पुस्तक", roman: "dhārmik pustak", english: "sacred book" }
  },
  {
    id: "accha",
    hindi: "अच्छा",
    roman: "acchā",
    english: "good / okay / fine",
    matra: "half",
    matraName: "आधे अक्षर (च्छ)",
    matraVowel: "—",
    matraSymbol: "◌्",
    matraType: "Aspirated Cluster (च्छ)",
    phonics: "uch-chhaa",
    breakdown: "अ + च् + छ + ◌ा",
    length: 2,
    rule: "Initial 'अ' + half 'च्' leading into aspirated 'छा' (chā).",
    examplePhrase: { hindi: "बहुत अच्छा", roman: "bahut acchā", english: "very good" }
  },
  {
    id: "pyaar",
    hindi: "प्यार",
    roman: "pyār",
    english: "love / affection",
    matra: "half",
    matraName: "आधे अक्षर (प्य)",
    matraVowel: "—",
    matraSymbol: "◌्",
    matraType: "Half Consonant (प्य)",
    phonics: "pyaar",
    breakdown: "प् + य + ◌ा + र",
    length: 2,
    rule: "Half 'प्' blends seamlessly into 'या' (yā) + 'r'.",
    examplePhrase: { hindi: "सच्चा प्यार", roman: "saccā pyār", english: "true love" }
  },
  {
    id: "namaste",
    hindi: "नमस्ते",
    roman: "namaste",
    english: "greetings / hello / respect",
    matra: "half",
    matraName: "आधे अक्षर (स्ते)",
    matraVowel: "—",
    matraSymbol: "◌्",
    matraType: "Cluster with E Matra (स्ते)",
    phonics: "nuh-mus-tay",
    breakdown: "न + म + स् + त + ◌े",
    length: 3,
    rule: "'na' + 'ma' + half 'स्' connected to 'त' with '◌े' (te). Literally 'bow to you'.",
    examplePhrase: { hindi: "सबको नमस्ते", roman: "sabko namaste", english: "greetings to all" }
  }
];

// Update counts dynamically
MATRA_CATEGORIES.forEach(cat => {
  if (cat.id === "all") {
    cat.count = MATRA_CURRICULUM.length;
  } else {
    cat.count = MATRA_CURRICULUM.filter(w => w.matra === cat.id).length;
  }
});



// =========================================================================
// HINDI MINIMAL PAIRS & CONFUSION BUSTERS CURRICULUM (समान रूप - भिन्न अर्थ अभ्यास)
// =========================================================================
const MINIMAL_PAIR_CATEGORIES = [
  { id: "all", name: "All Contrast Pairs (38)", symbol: "⚡", count: 38, description: "Drill all vowel length and diacritic contrast pairs" },
  { id: "i_vs_ii", name: "इ vs ई (Short vs Long I)", symbol: "◌ि ↔ ◌ी", count: 7, description: "Brisk clipped 'i' (left curve) vs sustained deep 'ī' (right curve)" },
  { id: "u_vs_uu", name: "उ vs ऊ (Short vs Long U)", symbol: "◌ु ↔ ◌ू", count: 7, description: "Quick puff 'u' (curling left) vs deep resonant 'ū' (tail curving right)" },
  { id: "e_vs_ai", name: "ए vs ऐ (Single vs Double Flag)", symbol: "◌े ↔ ◌ै", count: 7, description: "Single stroke 'e' (play) vs double stroke 'ai' (cat/sat)" },
  { id: "o_vs_au", name: "ओ vs औ (Single vs Double Top)", symbol: "◌ो ↔ ◌ौ", count: 7, description: "Standing line + single flag 'o' vs standing line + double flag 'au'" },
  { id: "a_vs_aa", name: "अ vs आ (Short vs Long A)", symbol: "— ↔ ◌ा", count: 7, description: "Inherent schwa 'a' (cup) vs standing line 'ā' (father)" },
  { id: "anusvara_vs_anunasika", name: "अं vs अँ (Dot vs Chandrabindu)", symbol: "◌ं ↔ ◌ँ", count: 3, description: "Pure nasal stop dot before consonant vs nasalized vowel resonance" }
];

const HINDI_MINIMAL_PAIRS = [
  {
    "id": "mp_din_deen",
    "category": "i_vs_ii",
    "categoryName": "इ vs ई (Short vs Long I)",
    "contrastSymbol": "◌ि ↔ ◌ी",
    "contrastRule": "Short \"i\" (◌ि) is written BEFORE the consonant and spoken with a quick, brisk beat. Long \"ī\" (◌ी) is written AFTER the consonant and held twice as long.",
    "wordA": {
      "hindi": "दिन",
      "roman": "din",
      "phonics": "quick \"di-n\"",
      "english": "day",
      "matraSymbol": "◌ि",
      "matraName": "छोटी इ (◌ि)",
      "breakdown": "द + ◌ि + न",
      "examplePhrase": {
        "hindi": "दिन का समय",
        "roman": "din kā samay",
        "english": "daytime"
      }
    },
    "wordB": {
      "hindi": "दीन",
      "roman": "dīn",
      "phonics": "sustained \"dee-n\"",
      "english": "poor / humble",
      "matraSymbol": "◌ी",
      "matraName": "बड़ी ई (◌ी)",
      "breakdown": "द + ◌ी + न",
      "examplePhrase": {
        "hindi": "दीन-दुखी लोग",
        "roman": "dīn-dukhī log",
        "english": "the poor and needy"
      }
    }
  },
  {
    "id": "mp_mil_meel",
    "category": "i_vs_ii",
    "categoryName": "इ vs ई (Short vs Long I)",
    "contrastSymbol": "◌ि ↔ ◌ी",
    "contrastRule": "Short \"i\" in \"mil\" (meet) is clipped; long \"ī\" in \"mīl\" (mile) is elongated with steady tone.",
    "wordA": {
      "hindi": "मिल",
      "roman": "mil",
      "phonics": "quick \"mi-l\"",
      "english": "meet / find",
      "matraSymbol": "◌ि",
      "matraName": "छोटी इ (◌ि)",
      "breakdown": "म + ◌ि + ल",
      "examplePhrase": {
        "hindi": "हमसे मिल",
        "roman": "hamse mil",
        "english": "meet with us"
      }
    },
    "wordB": {
      "hindi": "मील",
      "roman": "mīl",
      "phonics": "sustained \"mee-l\"",
      "english": "mile (distance)",
      "matraSymbol": "◌ी",
      "matraName": "बड़ी ई (◌ी)",
      "breakdown": "म + ◌ी + ल",
      "examplePhrase": {
        "hindi": "दस मील दूर",
        "roman": "das mīl dūr",
        "english": "ten miles away"
      }
    }
  },
  {
    "id": "mp_pila_peela",
    "category": "i_vs_ii",
    "categoryName": "इ vs ई (Short vs Long I)",
    "contrastSymbol": "◌ि ↔ ◌ी",
    "contrastRule": "\"pilā\" has short \"i\" on \"pa\" (give drink); \"pīlā\" has long \"ī\" on \"pa\" (the color yellow).",
    "wordA": {
      "hindi": "पिला",
      "roman": "pilā",
      "phonics": "pi-laa",
      "english": "serve drink / feed drink",
      "matraSymbol": "◌ि",
      "matraName": "छोटी इ (◌ि)",
      "breakdown": "प + ◌ि + ल + ◌ा",
      "examplePhrase": {
        "hindi": "पानी पिला दो",
        "roman": "pānī pilā do",
        "english": "please give some water to drink"
      }
    },
    "wordB": {
      "hindi": "पीला",
      "roman": "pīlā",
      "phonics": "pee-laa",
      "english": "yellow (color)",
      "matraSymbol": "◌ी",
      "matraName": "बड़ी ई (◌ी)",
      "breakdown": "प + ◌ी + ल + ◌ा",
      "examplePhrase": {
        "hindi": "पीला फूल",
        "roman": "pīlā phūl",
        "english": "yellow flower"
      }
    }
  },
  {
    "id": "mp_kila_keela",
    "category": "i_vs_ii",
    "categoryName": "इ vs ई (Short vs Long I)",
    "contrastSymbol": "◌ि ↔ ◌ी",
    "contrastRule": "Short \"i\" in \"kilā\" denotes a historic fort; long \"ī\" in \"kīlā\" denotes a nail or peg.",
    "wordA": {
      "hindi": "किला",
      "roman": "kilā",
      "phonics": "ki-laa",
      "english": "fort / fortress",
      "matraSymbol": "◌ि",
      "matraName": "छोटी इ (◌ि)",
      "breakdown": "क + ◌ि + ल + ◌ा",
      "examplePhrase": {
        "hindi": "लाल किला",
        "roman": "lāl kilā",
        "english": "Red Fort"
      }
    },
    "wordB": {
      "hindi": "कीला",
      "roman": "kīlā",
      "phonics": "kee-laa",
      "english": "peg / large nail",
      "matraSymbol": "◌ी",
      "matraName": "बड़ी ई (◌ी)",
      "breakdown": "क + ◌ी + ल + ◌ा",
      "examplePhrase": {
        "hindi": "लोहे का कीला",
        "roman": "lohe kā kīlā",
        "english": "iron nail/peg"
      }
    }
  },
  {
    "id": "mp_chita_cheeta",
    "category": "i_vs_ii",
    "categoryName": "इ vs ई (Short vs Long I)",
    "contrastSymbol": "◌ि ↔ ◌ी",
    "contrastRule": "Short \"citā\" has clipped \"ci\"; long \"cītā\" sustains \"cee\" for the swift animal cheetah.",
    "wordA": {
      "hindi": "चिता",
      "roman": "citā",
      "phonics": "chi-taa",
      "english": "pyre",
      "matraSymbol": "◌ि",
      "matraName": "छोटी इ (◌ि)",
      "breakdown": "च + ◌ि + त + ◌ा",
      "examplePhrase": {
        "hindi": "चिता की अग्नि",
        "roman": "citā kī agni",
        "english": "fire of the pyre"
      }
    },
    "wordB": {
      "hindi": "चीता",
      "roman": "cītā",
      "phonics": "chee-taa",
      "english": "cheetah / leopard",
      "matraSymbol": "◌ी",
      "matraName": "बड़ी ई (◌ी)",
      "breakdown": "च + ◌ी + त + ◌ा",
      "examplePhrase": {
        "hindi": "तेज़ चीता",
        "roman": "tez cītā",
        "english": "fast cheetah"
      }
    }
  },
  {
    "id": "mp_sir_kheer",
    "category": "i_vs_ii",
    "categoryName": "इ vs ई (Short vs Long I)",
    "contrastSymbol": "◌ि ↔ ◌ी",
    "contrastRule": "\"sir\" has swift short \"i\"; \"khīr\" has resonant drawn-out \"ī\".",
    "wordA": {
      "hindi": "सिर",
      "roman": "sir",
      "phonics": "si-r",
      "english": "head",
      "matraSymbol": "◌ि",
      "matraName": "छोटी इ (◌ि)",
      "breakdown": "स + ◌ि + र",
      "examplePhrase": {
        "hindi": "सिर में दर्द",
        "roman": "sir meñ dard",
        "english": "headache"
      }
    },
    "wordB": {
      "hindi": "खीर",
      "roman": "khīr",
      "phonics": "khee-r",
      "english": "sweet rice pudding",
      "matraSymbol": "◌ी",
      "matraName": "बड़ी ई (◌ी)",
      "breakdown": "ख + ◌ी + र",
      "examplePhrase": {
        "hindi": "मीठी खीर",
        "roman": "mīṭhī khīr",
        "english": "sweet kheer"
      }
    }
  },
  {
    "id": "mp_dila_geela",
    "category": "i_vs_ii",
    "categoryName": "इ vs ई (Short vs Long I)",
    "contrastSymbol": "◌ि ↔ ◌ी",
    "contrastRule": "\"dilā\" has short \"i\" before \"lā\"; \"gīlā\" has heavy long \"ī\" meaning wet.",
    "wordA": {
      "hindi": "दिला",
      "roman": "dilā",
      "phonics": "di-laa",
      "english": "cause to give / obtain",
      "matraSymbol": "◌ि",
      "matraName": "छोटी इ (◌ि)",
      "breakdown": "द + ◌ि + ल + ◌ा",
      "examplePhrase": {
        "hindi": "किताब दिला दो",
        "roman": "kitāb dilā do",
        "english": "get me the book"
      }
    },
    "wordB": {
      "hindi": "गीला",
      "roman": "gīlā",
      "phonics": "gee-laa",
      "english": "wet / moist",
      "matraSymbol": "◌ी",
      "matraName": "बड़ी ई (◌ी)",
      "breakdown": "ग + ◌ी + ल + ◌ा",
      "examplePhrase": {
        "hindi": "गीला कपड़ा",
        "roman": "gīlā kapṛā",
        "english": "wet cloth"
      }
    }
  },
  {
    "id": "mp_pul_phool",
    "category": "u_vs_uu",
    "categoryName": "उ vs ऊ (Short vs Long U)",
    "contrastSymbol": "◌ु ↔ ◌ू",
    "contrastRule": "Short \"u\" (◌ु) curls left with a gentle puff. Long \"ū\" (◌ू) curls right with a prolonged, deep \"oo\" sound.",
    "wordA": {
      "hindi": "पुल",
      "roman": "pul",
      "phonics": "pu-l",
      "english": "bridge",
      "matraSymbol": "◌ु",
      "matraName": "छोटा उ (◌ु)",
      "breakdown": "प + ◌ु + ल",
      "examplePhrase": {
        "hindi": "नदी पर पुल",
        "roman": "nadī par pul",
        "english": "bridge over river"
      }
    },
    "wordB": {
      "hindi": "फूल",
      "roman": "phūl",
      "phonics": "phoo-l",
      "english": "flower",
      "matraSymbol": "◌ू",
      "matraName": "बड़ा ऊ (◌ू)",
      "breakdown": "फ + ◌ू + ल",
      "examplePhrase": {
        "hindi": "सुंदर फूल",
        "roman": "sundar phūl",
        "english": "beautiful flower"
      }
    }
  },
  {
    "id": "mp_kul_kool",
    "category": "u_vs_uu",
    "categoryName": "उ vs ऊ (Short vs Long U)",
    "contrastSymbol": "◌ु ↔ ◌ू",
    "contrastRule": "Short \"u\" in \"kul\" means total/lineage; long \"ū\" in \"kūl\" means a riverbank or shore.",
    "wordA": {
      "hindi": "कुल",
      "roman": "kul",
      "phonics": "ku-l",
      "english": "total / lineage / family",
      "matraSymbol": "◌ु",
      "matraName": "छोटा उ (◌ु)",
      "breakdown": "क + ◌ु + ल",
      "examplePhrase": {
        "hindi": "कुल संख्या",
        "roman": "kul saṅkhyā",
        "english": "total number"
      }
    },
    "wordB": {
      "hindi": "कूल",
      "roman": "kūl",
      "phonics": "koo-l",
      "english": "riverbank / shore",
      "matraSymbol": "◌ू",
      "matraName": "बड़ा ऊ (◌ू)",
      "breakdown": "क + ◌ू + ल",
      "examplePhrase": {
        "hindi": "यमुना का कूल",
        "roman": "yamunā kā kūl",
        "english": "bank of Yamuna"
      }
    }
  },
  {
    "id": "mp_suna_soona",
    "category": "u_vs_uu",
    "categoryName": "उ vs ऊ (Short vs Long U)",
    "contrastSymbol": "◌ु ↔ ◌ू",
    "contrastRule": "\"sunā\" with short \"u\" means heard/listened; \"sūnā\" with long \"ū\" means desolate or lonely.",
    "wordA": {
      "hindi": "सुना",
      "roman": "sunā",
      "phonics": "su-naa",
      "english": "heard / listened",
      "matraSymbol": "◌ु",
      "matraName": "छोटा उ (◌ु)",
      "breakdown": "स + ◌ु + न + ◌ा",
      "examplePhrase": {
        "hindi": "मैंने गाना सुना",
        "roman": "maine gānā sunā",
        "english": "I heard the song"
      }
    },
    "wordB": {
      "hindi": "सूना",
      "roman": "sūnā",
      "phonics": "soo-naa",
      "english": "lonely / desolate / deserted",
      "matraSymbol": "◌ू",
      "matraName": "बड़ा ऊ (◌ू)",
      "breakdown": "स + ◌ू + न + ◌ा",
      "examplePhrase": {
        "hindi": "सूना घर",
        "roman": "sūnā ghar",
        "english": "empty lonely house"
      }
    }
  },
  {
    "id": "mp_dhul_dhool",
    "category": "u_vs_uu",
    "categoryName": "उ vs ऊ (Short vs Long U)",
    "contrastSymbol": "◌ु ↔ ◌ू",
    "contrastRule": "\"dhul\" has short \"u\" (be washed); \"dhūl\" has deep long \"ū\" (dust).",
    "wordA": {
      "hindi": "धुल",
      "roman": "dhul",
      "phonics": "dhu-l",
      "english": "be washed",
      "matraSymbol": "◌ु",
      "matraName": "छोटा उ (◌ु)",
      "breakdown": "ध + ◌ु + ल",
      "examplePhrase": {
        "hindi": "कपड़े धुल गए",
        "roman": "kapṛe dhul gaye",
        "english": "clothes are washed"
      }
    },
    "wordB": {
      "hindi": "धूल",
      "roman": "dhūl",
      "phonics": "dhoo-l",
      "english": "dust / dirt particles",
      "matraSymbol": "◌ू",
      "matraName": "बड़ा ऊ (◌ू)",
      "breakdown": "ध + ◌ू + ल",
      "examplePhrase": {
        "hindi": "सड़क की धूल",
        "roman": "saṛak kī dhūl",
        "english": "road dust"
      }
    }
  },
  {
    "id": "mp_sut_soot",
    "category": "u_vs_uu",
    "categoryName": "उ vs ऊ (Short vs Long U)",
    "contrastSymbol": "◌ु ↔ ◌ू",
    "contrastRule": "\"sut\" (son) has crisp short \"u\"; \"sūt\" (cotton yarn) has drawn-out long \"ū\".",
    "wordA": {
      "hindi": "सुत",
      "roman": "sut",
      "phonics": "su-t",
      "english": "son (formal)",
      "matraSymbol": "◌ु",
      "matraName": "छोटा उ (◌ु)",
      "breakdown": "स + ◌ु + त",
      "examplePhrase": {
        "hindi": "पवन-सुत",
        "roman": "pavan-sut",
        "english": "son of the wind (Hanuman)"
      }
    },
    "wordB": {
      "hindi": "सूत",
      "roman": "sūt",
      "phonics": "soo-t",
      "english": "cotton thread / yarn",
      "matraSymbol": "◌ू",
      "matraName": "बड़ा ऊ (◌ू)",
      "breakdown": "स + ◌ू + त",
      "examplePhrase": {
        "hindi": "सूत कातता है",
        "roman": "sūt kāttā hai",
        "english": "spins cotton yarn"
      }
    }
  },
  {
    "id": "mp_bura_boora",
    "category": "u_vs_uu",
    "categoryName": "उ vs ऊ (Short vs Long U)",
    "contrastSymbol": "◌ु ↔ ◌ू",
    "contrastRule": "\"burā\" with short \"u\" means bad; \"būrā\" with long \"ū\" means raw powdered sugar.",
    "wordA": {
      "hindi": "बुरा",
      "roman": "burā",
      "phonics": "bu-raa",
      "english": "bad / unpleasant",
      "matraSymbol": "◌ु",
      "matraName": "छोटा उ (◌ु)",
      "breakdown": "ब + ◌ु + र + ◌ा",
      "examplePhrase": {
        "hindi": "बुरा मत मानो",
        "roman": "burā mat māno",
        "english": "do not feel bad"
      }
    },
    "wordB": {
      "hindi": "बूरा",
      "roman": "būrā",
      "phonics": "boo-raa",
      "english": "unrefined powdered sugar",
      "matraSymbol": "◌ू",
      "matraName": "बड़ा ऊ (◌ू)",
      "breakdown": "ब + ◌ू + र + ◌ा",
      "examplePhrase": {
        "hindi": "मीठा बूरा",
        "roman": "mīṭhā būrā",
        "english": "sweet powdered sugar"
      }
    }
  },
  {
    "id": "mp_chura_choora",
    "category": "u_vs_uu",
    "categoryName": "उ vs ऊ (Short vs Long U)",
    "contrastSymbol": "◌ु ↔ ◌ू",
    "contrastRule": "\"curā\" has short \"u\" (to steal); \"cūrā\" has long \"ū\" (crumbs or powder).",
    "wordA": {
      "hindi": "चुरा",
      "roman": "curā",
      "phonics": "chu-raa",
      "english": "steal / take away",
      "matraSymbol": "◌ु",
      "matraName": "छोटा उ (◌ु)",
      "breakdown": "च + ◌ु + र + ◌ा",
      "examplePhrase": {
        "hindi": "दिल चुरा लिया",
        "roman": "dil curā liyā",
        "english": "stole the heart"
      }
    },
    "wordB": {
      "hindi": "चूरा",
      "roman": "cūrā",
      "phonics": "choo-raa",
      "english": "crumbs / powder",
      "matraSymbol": "◌ू",
      "matraName": "बड़ा ऊ (◌ू)",
      "breakdown": "च + ◌ू + र + ◌ा",
      "examplePhrase": {
        "hindi": "रोटी का चूरा",
        "roman": "roṭī kā cūrā",
        "english": "bread crumbs"
      }
    }
  },
  {
    "id": "mp_bel_bail",
    "category": "e_vs_ai",
    "categoryName": "ए vs ऐ (Single vs Double Flag)",
    "contrastSymbol": "◌े ↔ ◌ै",
    "contrastRule": "Single stroke \"e\" (◌े) gives pure \"ay\" (as in play). Double stroke \"ai\" (◌ै) gives broad open \"ai/æ\" (as in bat/cat).",
    "wordA": {
      "hindi": "बेल",
      "roman": "bel",
      "phonics": "bay-l",
      "english": "vine / creeper / wood apple",
      "matraSymbol": "◌े",
      "matraName": "ए की मात्रा (◌े)",
      "breakdown": "ब + ◌े + ल",
      "examplePhrase": {
        "hindi": "हरी बेल",
        "roman": "harī bel",
        "english": "green vine"
      }
    },
    "wordB": {
      "hindi": "बैल",
      "roman": "bail",
      "phonics": "by-l / bael",
      "english": "bull / ox",
      "matraSymbol": "◌ै",
      "matraName": "ऐ की मात्रा (◌ै)",
      "breakdown": "ब + ◌ै + ल",
      "examplePhrase": {
        "hindi": "बैलगाड़ी",
        "roman": "bailgāṛī",
        "english": "bullock cart"
      }
    }
  },
  {
    "id": "mp_mel_maila",
    "category": "e_vs_ai",
    "categoryName": "ए vs ऐ (Single vs Double Flag)",
    "contrastSymbol": "◌े ↔ ◌ै",
    "contrastRule": "\"mel\" with single \"e\" means union or harmony; \"mailā\" with double \"ai\" means dirty.",
    "wordA": {
      "hindi": "मेल",
      "roman": "mel",
      "phonics": "may-l",
      "english": "harmony / union / match",
      "matraSymbol": "◌े",
      "matraName": "ए की मात्रा (◌े)",
      "breakdown": "म + ◌े + ल",
      "examplePhrase": {
        "hindi": "मेल-जोल",
        "roman": "mel-jol",
        "english": "social harmony / interaction"
      }
    },
    "wordB": {
      "hindi": "मैला",
      "roman": "mailā",
      "phonics": "my-laa / maelaa",
      "english": "dirty / soiled",
      "matraSymbol": "◌ै",
      "matraName": "ऐ की मात्रा (◌ै)",
      "breakdown": "म + ◌ै + ल + ◌ा",
      "examplePhrase": {
        "hindi": "मैला कपड़ा",
        "roman": "mailā kapṛā",
        "english": "dirty clothes"
      }
    }
  },
  {
    "id": "mp_chen_chain",
    "category": "e_vs_ai",
    "categoryName": "ए vs ऐ (Single vs Double Flag)",
    "contrastSymbol": "◌े ↔ ◌ै",
    "contrastRule": "\"cen\" with single flag means zipper or chain; \"cain\" with double flag means tranquility or peace of mind.",
    "wordA": {
      "hindi": "चेन",
      "roman": "cen",
      "phonics": "chayn",
      "english": "chain / zipper",
      "matraSymbol": "◌े",
      "matraName": "ए की मात्रा (◌े)",
      "breakdown": "च + ◌े + न",
      "examplePhrase": {
        "hindi": "सोने की चेन",
        "roman": "sone kī cen",
        "english": "gold chain"
      }
    },
    "wordB": {
      "hindi": "चैन",
      "roman": "cain",
      "phonics": "ch-eye-n / chaen",
      "english": "peace of mind / tranquility",
      "matraSymbol": "◌ै",
      "matraName": "ऐ की मात्रा (◌ै)",
      "breakdown": "च + ◌ै + न",
      "examplePhrase": {
        "hindi": "चैन की नींद",
        "roman": "cain kī nīnd",
        "english": "peaceful sleep"
      }
    }
  },
  {
    "id": "mp_per_pair",
    "category": "e_vs_ai",
    "categoryName": "ए vs ऐ (Single vs Double Flag)",
    "contrastSymbol": "◌े ↔ ◌ै",
    "contrastRule": "\"per\" has single stroke (crush); \"pair\" has double stroke and means foot/leg.",
    "wordA": {
      "hindi": "पेर",
      "roman": "per",
      "phonics": "pay-r",
      "english": "press / crush / extract oil",
      "matraSymbol": "◌े",
      "matraName": "ए की मात्रा (◌े)",
      "breakdown": "प + ◌े + र",
      "examplePhrase": {
        "hindi": "गन्ना पेरना",
        "roman": "gannā perna",
        "english": "crushing sugarcane"
      }
    },
    "wordB": {
      "hindi": "पैर",
      "roman": "pair",
      "phonics": "py-r / paer",
      "english": "foot / leg",
      "matraSymbol": "◌ै",
      "matraName": "ऐ की मात्रा (◌ै)",
      "breakdown": "प + ◌ै + र",
      "examplePhrase": {
        "hindi": "दायाँ पैर",
        "roman": "dāyāñ pair",
        "english": "right foot"
      }
    }
  },
  {
    "id": "mp_sher_sair",
    "category": "e_vs_ai",
    "categoryName": "ए vs ऐ (Single vs Double Flag)",
    "contrastSymbol": "◌े ↔ ◌ै",
    "contrastRule": "\"śer\" with single stroke produces \"shayr\" (lion); \"sair\" with double stroke produces \"s-eye-r\" (a walk).",
    "wordA": {
      "hindi": "शेर",
      "roman": "śer",
      "phonics": "shay-r",
      "english": "lion / couplet",
      "matraSymbol": "◌े",
      "matraName": "ए की मात्रा (◌े)",
      "breakdown": "श + ◌े + र",
      "examplePhrase": {
        "hindi": "जंगल का शेर",
        "roman": "jaṅgal kā śer",
        "english": "lion of the jungle"
      }
    },
    "wordB": {
      "hindi": "सैर",
      "roman": "sair",
      "phonics": "s-eye-r / saer",
      "english": "walk / stroll / excursion",
      "matraSymbol": "◌ै",
      "matraName": "ऐ की मात्रा (◌ै)",
      "breakdown": "स + ◌ै + र",
      "examplePhrase": {
        "hindi": "सुबह की सैर",
        "roman": "subah kī sair",
        "english": "morning walk"
      }
    }
  },
  {
    "id": "mp_desi_daisi",
    "category": "e_vs_ai",
    "categoryName": "ए vs ऐ (Single vs Double Flag)",
    "contrastSymbol": "◌े ↔ ◌ै",
    "contrastRule": "\"desī\" with single stroke means indigenous; \"daisī\" with double stroke means rustic or the flower daisy.",
    "wordA": {
      "hindi": "देसी",
      "roman": "desī",
      "phonics": "day-see",
      "english": "native / local / homegrown",
      "matraSymbol": "◌े",
      "matraName": "ए की मात्रा (◌े)",
      "breakdown": "द + ◌े + स + ◌ी",
      "examplePhrase": {
        "hindi": "देसी घी",
        "roman": "desī ghī",
        "english": "pure native ghee"
      }
    },
    "wordB": {
      "hindi": "दैसी",
      "roman": "daisī",
      "phonics": "dye-see",
      "english": "rustic / countryside flower",
      "matraSymbol": "◌ै",
      "matraName": "ऐ की मात्रा (◌ै)",
      "breakdown": "द + ◌ै + स + ◌ी",
      "examplePhrase": {
        "hindi": "दैसी फूल",
        "roman": "daisī phūl",
        "english": "daisy flower"
      }
    }
  },
  {
    "id": "mp_tera_tair",
    "category": "e_vs_ai",
    "categoryName": "ए vs ऐ (Single vs Double Flag)",
    "contrastSymbol": "◌े ↔ ◌ै",
    "contrastRule": "\"terā\" with single flag means yours; \"tair\" with double flag means to swim.",
    "wordA": {
      "hindi": "तेरा",
      "roman": "terā",
      "phonics": "tay-raa",
      "english": "your / yours (informal)",
      "matraSymbol": "◌े",
      "matraName": "ए की मात्रा (◌े)",
      "breakdown": "त + ◌े + र + ◌ा",
      "examplePhrase": {
        "hindi": "तेरा नाम",
        "roman": "terā nām",
        "english": "your name"
      }
    },
    "wordB": {
      "hindi": "तैर",
      "roman": "tair",
      "phonics": "t-eye-r / taer",
      "english": "swim! (imperative/root)",
      "matraSymbol": "◌ै",
      "matraName": "ऐ की मात्रा (◌ै)",
      "breakdown": "त + ◌ै + र",
      "examplePhrase": {
        "hindi": "पानी में तैर",
        "roman": "pānī meñ tair",
        "english": "swim in the water"
      }
    }
  },
  {
    "id": "mp_khol_khaul",
    "category": "o_vs_au",
    "categoryName": "ओ vs औ (Single vs Double Top)",
    "contrastSymbol": "◌ो ↔ ◌ौ",
    "contrastRule": "Single top stroke \"o\" (◌ो) produces pure \"oh\" (as in open). Double top stroke \"au\" (◌ौ) produces broad \"ow/au\" (as in boil).",
    "wordA": {
      "hindi": "खोल",
      "roman": "khol",
      "phonics": "kho-l",
      "english": "open! / cover",
      "matraSymbol": "◌ो",
      "matraName": "ओ की मात्रा (◌ो)",
      "breakdown": "ख + ◌ो + ल",
      "examplePhrase": {
        "hindi": "दरवाज़ा खोल",
        "roman": "darvāzā khol",
        "english": "open the door"
      }
    },
    "wordB": {
      "hindi": "खौल",
      "roman": "khaul",
      "phonics": "khow-l / khaul",
      "english": "boil! / bubble with heat",
      "matraSymbol": "◌ौ",
      "matraName": "औ की मात्रा (◌ौ)",
      "breakdown": "ख + ◌ौ + ल",
      "examplePhrase": {
        "hindi": "पानी खौल रहा है",
        "roman": "pānī khaul rahā hai",
        "english": "water is boiling"
      }
    }
  },
  {
    "id": "mp_lota_lauta",
    "category": "o_vs_au",
    "categoryName": "ओ vs औ (Single vs Double Top)",
    "contrastSymbol": "◌ो ↔ ◌ौ",
    "contrastRule": "\"loṭā\" with single stroke is a water pot; \"lauṭā\" with double stroke means returned.",
    "wordA": {
      "hindi": "लोटा",
      "roman": "loṭā",
      "phonics": "lo-taa",
      "english": "small round water pot",
      "matraSymbol": "◌ो",
      "matraName": "ओ की मात्रा (◌ो)",
      "breakdown": "ल + ◌ो + ट + ◌ा",
      "examplePhrase": {
        "hindi": "तांबे का लोटा",
        "roman": "tāmbe kā loṭā",
        "english": "copper water pot"
      }
    },
    "wordB": {
      "hindi": "लौटा",
      "roman": "lauṭā",
      "phonics": "low-taa",
      "english": "returned / came back",
      "matraSymbol": "◌ौ",
      "matraName": "औ की मात्रा (◌ौ)",
      "breakdown": "ल + ◌ौ + ट + ◌ा",
      "examplePhrase": {
        "hindi": "घर लौटा",
        "roman": "ghar lauṭā",
        "english": "returned home"
      }
    }
  },
  {
    "id": "mp_or_aur",
    "category": "o_vs_au",
    "categoryName": "ओ vs औ (Single vs Double Top)",
    "contrastSymbol": "◌ो ↔ ◌ौ",
    "contrastRule": "\"or\" with single stroke means towards/direction; \"aur\" with double stroke means and/more.",
    "wordA": {
      "hindi": "ओर",
      "roman": "or",
      "phonics": "o-r",
      "english": "direction / towards",
      "matraSymbol": "◌ो",
      "matraName": "ओ की मात्रा (◌ो)",
      "breakdown": "ओ + र",
      "examplePhrase": {
        "hindi": "उत्तर की ओर",
        "roman": "uttar kī or",
        "english": "towards north"
      }
    },
    "wordB": {
      "hindi": "और",
      "roman": "aur",
      "phonics": "ow-r / aur",
      "english": "and / more",
      "matraSymbol": "◌ौ",
      "matraName": "औ की मात्रा (◌ौ)",
      "breakdown": "औ + र",
      "examplePhrase": {
        "hindi": "चाय और बिस्कुट",
        "roman": "cāy aur biskut",
        "english": "tea and biscuit"
      }
    }
  },
  {
    "id": "mp_kon_kaun",
    "category": "o_vs_au",
    "categoryName": "ओ vs औ (Single vs Double Top)",
    "contrastSymbol": "◌ो ↔ ◌ौ",
    "contrastRule": "\"kon\" with single flag means angle/corner; \"kaun\" with double flag means who.",
    "wordA": {
      "hindi": "कोन",
      "roman": "kon",
      "phonics": "ko-n",
      "english": "corner / angle",
      "matraSymbol": "◌ो",
      "matraName": "ओ की मात्रा (◌ो)",
      "breakdown": "क + ◌ो + न",
      "examplePhrase": {
        "hindi": "कमरे का कोना",
        "roman": "kamre kā konā",
        "english": "corner of the room"
      }
    },
    "wordB": {
      "hindi": "कौन",
      "roman": "kaun",
      "phonics": "kown / kaun",
      "english": "who",
      "matraSymbol": "◌ौ",
      "matraName": "औ की मात्रा (◌ौ)",
      "breakdown": "क + ◌ौ + न",
      "examplePhrase": {
        "hindi": "वहाँ कौन है?",
        "roman": "vahāñ kaun hai?",
        "english": "who is there?"
      }
    }
  },
  {
    "id": "mp_gora_gaura",
    "category": "o_vs_au",
    "categoryName": "ओ vs औ (Single vs Double Top)",
    "contrastSymbol": "◌ो ↔ ◌ौ",
    "contrastRule": "\"gorā\" with single stroke means fair-complexioned; \"gaurā\" with double stroke is a revered name for Goddess Parvati.",
    "wordA": {
      "hindi": "गोरा",
      "roman": "gorā",
      "phonics": "go-raa",
      "english": "fair-skinned / light",
      "matraSymbol": "◌ो",
      "matraName": "ओ की मात्रा (◌ो)",
      "breakdown": "ग + ◌ो + र + ◌ा",
      "examplePhrase": {
        "hindi": "गोरा रंग",
        "roman": "gorā raṅg",
        "english": "fair complexion"
      }
    },
    "wordB": {
      "hindi": "गौरा",
      "roman": "gaurā",
      "phonics": "gow-raa",
      "english": "fair lady / Goddess Gauri",
      "matraSymbol": "◌ौ",
      "matraName": "औ की मात्रा (◌ौ)",
      "breakdown": "ग + ◌ौ + र + ◌ा",
      "examplePhrase": {
        "hindi": "माँ गौरा",
        "roman": "māñ gaurā",
        "english": "Mother Gauri"
      }
    }
  },
  {
    "id": "mp_sona_sau",
    "category": "o_vs_au",
    "categoryName": "ओ vs औ (Single vs Double Top)",
    "contrastSymbol": "◌ो ↔ ◌ौ",
    "contrastRule": "\"sonā\" with single stroke means gold/sleep; \"sau\" with double stroke means the number one hundred.",
    "wordA": {
      "hindi": "सोना",
      "roman": "sonā",
      "phonics": "so-naa",
      "english": "gold / to sleep",
      "matraSymbol": "◌ो",
      "matraName": "ओ की मात्रा (◌ो)",
      "breakdown": "स + ◌ो + न + ◌ा",
      "examplePhrase": {
        "hindi": "शुद्ध सोना",
        "roman": "śuddh sonā",
        "english": "pure gold"
      }
    },
    "wordB": {
      "hindi": "सौ",
      "roman": "sau",
      "phonics": "sow / sau",
      "english": "one hundred (100)",
      "matraSymbol": "◌ौ",
      "matraName": "औ की मात्रा (◌ौ)",
      "breakdown": "स + ◌ौ",
      "examplePhrase": {
        "hindi": "सौ रुपये",
        "roman": "sau rupaye",
        "english": "hundred rupees"
      }
    }
  },
  {
    "id": "mp_bona_bauna",
    "category": "o_vs_au",
    "categoryName": "ओ vs औ (Single vs Double Top)",
    "contrastSymbol": "◌ो ↔ ◌ौ",
    "contrastRule": "\"bonā\" with single stroke means to sow seeds; \"baunā\" with double stroke means short-stature / dwarf.",
    "wordA": {
      "hindi": "बोना",
      "roman": "bonā",
      "phonics": "bo-naa",
      "english": "to sow (seeds)",
      "matraSymbol": "◌ो",
      "matraName": "ओ की मात्रा (◌ो)",
      "breakdown": "ब + ◌ो + न + ◌ा",
      "examplePhrase": {
        "hindi": "बीज बोना",
        "roman": "bīj bonā",
        "english": "sowing seeds"
      }
    },
    "wordB": {
      "hindi": "बौना",
      "roman": "baunā",
      "phonics": "bow-naa",
      "english": "dwarf / short person",
      "matraSymbol": "◌ौ",
      "matraName": "औ की मात्रा (◌ौ)",
      "breakdown": "ब + ◌ौ + न + ◌ा",
      "examplePhrase": {
        "hindi": "बौना पौधा",
        "roman": "baunā paudhā",
        "english": "bonsai / dwarf plant"
      }
    }
  },
  {
    "id": "mp_kam_kaam",
    "category": "a_vs_aa",
    "categoryName": "अ vs आ (Short vs Long A)",
    "contrastSymbol": "— ↔ ◌ा",
    "contrastRule": "Inherent \"a\" in \"kam\" is a short neutral schwa (like cup). Adding \"◌ा\" in \"kām\" opens the jaw wide (like palm/father).",
    "wordA": {
      "hindi": "कम",
      "roman": "kam",
      "phonics": "ku-m",
      "english": "less / little",
      "matraSymbol": "—",
      "matraName": "अ (बिना मात्रा)",
      "breakdown": "क + म",
      "examplePhrase": {
        "hindi": "कम चीनी",
        "roman": "kam cīnī",
        "english": "less sugar"
      }
    },
    "wordB": {
      "hindi": "काम",
      "roman": "kām",
      "phonics": "kaa-m",
      "english": "work / job",
      "matraSymbol": "◌ा",
      "matraName": "आ की मात्रा (◌ा)",
      "breakdown": "क + ◌ा + म",
      "examplePhrase": {
        "hindi": "अपना काम",
        "roman": "apnā kām",
        "english": "one's work"
      }
    }
  },
  {
    "id": "mp_kal_kaal",
    "category": "a_vs_aa",
    "categoryName": "अ vs आ (Short vs Long A)",
    "contrastSymbol": "— ↔ ◌ा",
    "contrastRule": "\"kal\" with inherent schwa means tomorrow/yesterday; \"kāl\" with standing \"◌ा\" means time or era.",
    "wordA": {
      "hindi": "कल",
      "roman": "kal",
      "phonics": "ku-l",
      "english": "tomorrow / yesterday",
      "matraSymbol": "—",
      "matraName": "अ (बिना मात्रा)",
      "breakdown": "क + ल",
      "examplePhrase": {
        "hindi": "कल मिलेंगे",
        "roman": "kal mileṅge",
        "english": "see you tomorrow"
      }
    },
    "wordB": {
      "hindi": "काल",
      "roman": "kāl",
      "phonics": "kaa-l",
      "english": "time / tense / era",
      "matraSymbol": "◌ा",
      "matraName": "आ की मात्रा (◌ा)",
      "breakdown": "क + ◌ा + ल",
      "examplePhrase": {
        "hindi": "वर्तमान काल",
        "roman": "vartamān kāl",
        "english": "present tense"
      }
    }
  },
  {
    "id": "mp_chal_chaal",
    "category": "a_vs_aa",
    "categoryName": "अ vs आ (Short vs Long A)",
    "contrastSymbol": "— ↔ ◌ा",
    "contrastRule": "\"cal\" with schwa means walk/move; \"cāl\" with \"◌ा\" means gait, pace, or clever trick.",
    "wordA": {
      "hindi": "चल",
      "roman": "cal",
      "phonics": "chu-l",
      "english": "walk / move! (imperative)",
      "matraSymbol": "—",
      "matraName": "अ (बिना मात्रा)",
      "breakdown": "च + ल",
      "examplePhrase": {
        "hindi": "आगे चल",
        "roman": "āge cal",
        "english": "move forward"
      }
    },
    "wordB": {
      "hindi": "चाल",
      "roman": "cāl",
      "phonics": "chaa-l",
      "english": "gait / pace / move (chess)",
      "matraSymbol": "◌ा",
      "matraName": "आ की मात्रा (◌ा)",
      "breakdown": "च + ◌ा + ल",
      "examplePhrase": {
        "hindi": "तेज़ चाल",
        "roman": "tez cāl",
        "english": "fast pace"
      }
    }
  },
  {
    "id": "mp_jal_jaal",
    "category": "a_vs_aa",
    "categoryName": "अ vs आ (Short vs Long A)",
    "contrastSymbol": "— ↔ ◌ा",
    "contrastRule": "\"jal\" with short schwa means water; \"jāl\" with \"◌ा\" means a net or web.",
    "wordA": {
      "hindi": "जल",
      "roman": "jal",
      "phonics": "ju-l",
      "english": "water",
      "matraSymbol": "—",
      "matraName": "अ (बिना मात्रा)",
      "breakdown": "ज + ल",
      "examplePhrase": {
        "hindi": "शीतल जल",
        "roman": "śītal jal",
        "english": "cool water"
      }
    },
    "wordB": {
      "hindi": "जाल",
      "roman": "jāl",
      "phonics": "jaa-l",
      "english": "net / web / trap",
      "matraSymbol": "◌ा",
      "matraName": "आ की मात्रा (◌ा)",
      "breakdown": "ज + ◌ा + ल",
      "examplePhrase": {
        "hindi": "मछली का जाल",
        "roman": "machlī kā jāl",
        "english": "fishing net"
      }
    }
  },
  {
    "id": "mp_dal_daal",
    "category": "a_vs_aa",
    "categoryName": "अ vs आ (Short vs Long A)",
    "contrastSymbol": "— ↔ ◌ा",
    "contrastRule": "\"dal\" with short schwa means a team/party; \"dāl\" with \"◌ा\" means the staple lentils.",
    "wordA": {
      "hindi": "दल",
      "roman": "dal",
      "phonics": "du-l",
      "english": "team / party / group",
      "matraSymbol": "—",
      "matraName": "अ (बिना मात्रा)",
      "breakdown": "द + ल",
      "examplePhrase": {
        "hindi": "विशेष दल",
        "roman": "viśeṣ dal",
        "english": "special team"
      }
    },
    "wordB": {
      "hindi": "दाल",
      "roman": "dāl",
      "phonics": "daa-l",
      "english": "lentils / pulse soup",
      "matraSymbol": "◌ा",
      "matraName": "आ की मात्रा (◌ा)",
      "breakdown": "द + ◌ा + ल",
      "examplePhrase": {
        "hindi": "दाल-चावल",
        "roman": "dāl-cāval",
        "english": "lentils and rice"
      }
    }
  },
  {
    "id": "mp_man_maan",
    "category": "a_vs_aa",
    "categoryName": "अ vs आ (Short vs Long A)",
    "contrastSymbol": "— ↔ ◌ा",
    "contrastRule": "\"man\" with short schwa means mind/heart; \"mān\" with \"◌ा\" means honor or esteem.",
    "wordA": {
      "hindi": "मन",
      "roman": "man",
      "phonics": "mu-n",
      "english": "mind / heart / desire",
      "matraSymbol": "—",
      "matraName": "अ (बिना मात्रा)",
      "breakdown": "म + न",
      "examplePhrase": {
        "hindi": "मन की शांति",
        "roman": "man kī śānti",
        "english": "peace of mind"
      }
    },
    "wordB": {
      "hindi": "मान",
      "roman": "mān",
      "phonics": "maa-n",
      "english": "honor / respect / value",
      "matraSymbol": "◌ा",
      "matraName": "आ की मात्रा (◌ा)",
      "breakdown": "म + ◌ा + न",
      "examplePhrase": {
        "hindi": "मान-सम्मान",
        "roman": "mān-sammān",
        "english": "honor and respect"
      }
    }
  },
  {
    "id": "mp_pal_paal",
    "category": "a_vs_aa",
    "categoryName": "अ vs आ (Short vs Long A)",
    "contrastSymbol": "— ↔ ◌ा",
    "contrastRule": "\"pal\" with short schwa means a fleeting moment; \"pāl\" with \"◌ा\" means a ship sail or to nurture.",
    "wordA": {
      "hindi": "पल",
      "roman": "pal",
      "phonics": "pu-l",
      "english": "moment / second",
      "matraSymbol": "—",
      "matraName": "अ (बिना मात्रा)",
      "breakdown": "प + ल",
      "examplePhrase": {
        "hindi": "हर पल",
        "roman": "har pal",
        "english": "every moment"
      }
    },
    "wordB": {
      "hindi": "पाल",
      "roman": "pāl",
      "phonics": "paa-l",
      "english": "sail (ship) / to nurture",
      "matraSymbol": "◌ा",
      "matraName": "आ की मात्रा (◌ा)",
      "breakdown": "प + ◌ा + ल",
      "examplePhrase": {
        "hindi": "नाव का पाल",
        "roman": "nāv kā pāl",
        "english": "sail of the boat"
      }
    }
  },
  {
    "id": "mp_hans_has",
    "category": "anusvara_vs_anunasika",
    "categoryName": "अं vs अँ (Dot vs Chandrabindu)",
    "contrastSymbol": "◌ं ↔ ◌ँ",
    "contrastRule": "Anusvara (◌ं) in \"hans\" creates a firm nasal consonant before \"s\". Chandrabindu (◌ँ) in \"hãs\" nasalizes the vowel itself while smiling.",
    "wordA": {
      "hindi": "हंस",
      "roman": "hans",
      "phonics": "hun-s",
      "english": "swan",
      "matraSymbol": "◌ं",
      "matraName": "अनुस्वार (◌ं)",
      "breakdown": "ह + ◌ं + स",
      "examplePhrase": {
        "hindi": "सफ़ेद हंस",
        "roman": "safed hans",
        "english": "white swan"
      }
    },
    "wordB": {
      "hindi": "हँस",
      "roman": "hãs",
      "phonics": "hã-s (nasal vowel)",
      "english": "laugh! / smile! (imperative)",
      "matraSymbol": "◌ँ",
      "matraName": "चन्द्रबिन्दु (◌ँ)",
      "breakdown": "ह + ◌ँ + स",
      "examplePhrase": {
        "hindi": "हँसमुख चेहरा",
        "roman": "hãsmukh cehrā",
        "english": "smiling face"
      }
    }
  },
  {
    "id": "mp_ang_aankh",
    "category": "anusvara_vs_anunasika",
    "categoryName": "अं vs अँ (Dot vs Chandrabindu)",
    "contrastSymbol": "◌ं ↔ ◌ँ",
    "contrastRule": "\"ang\" uses pure nasal stop dot; \"āñkh\" uses chandrabindu over the long \"ā\" vowel.",
    "wordA": {
      "hindi": "अंग",
      "roman": "ang",
      "phonics": "ung",
      "english": "body part / limb / component",
      "matraSymbol": "◌ं",
      "matraName": "अनुस्वार (◌ं)",
      "breakdown": "अ + ◌ं + ग",
      "examplePhrase": {
        "hindi": "शरीर का अंग",
        "roman": "śarīr kā ang",
        "english": "part of the body"
      }
    },
    "wordB": {
      "hindi": "आँख",
      "roman": "āñkh",
      "phonics": "ãã-ñkh (nasalized aa)",
      "english": "eye",
      "matraSymbol": "◌ँ",
      "matraName": "चन्द्रबिन्दु (◌ँ)",
      "breakdown": "आ + ◌ँ + ख",
      "examplePhrase": {
        "hindi": "सुंदर आँखें",
        "roman": "sundar āñkheñ",
        "english": "beautiful eyes"
      }
    }
  },
  {
    "id": "mp_kant_kaanta",
    "category": "anusvara_vs_anunasika",
    "categoryName": "अं vs अँ (Dot vs Chandrabindu)",
    "contrastSymbol": "◌ं ↔ ◌ँ",
    "contrastRule": "\"kant\" has anusvara before \"ta\"; \"kāñṭā\" has chandrabindu producing a resonant nasal vowel.",
    "wordA": {
      "hindi": "कंत",
      "roman": "kant",
      "phonics": "kun-t",
      "english": "beloved / husband (poetic)",
      "matraSymbol": "◌ं",
      "matraName": "अनुस्वार (◌ं)",
      "breakdown": "क + ◌ं + त",
      "examplePhrase": {
        "hindi": "प्राण-कंत",
        "roman": "prāṇ-kant",
        "english": "beloved of the soul"
      }
    },
    "wordB": {
      "hindi": "काँटा",
      "roman": "kāñṭā",
      "phonics": "kãã-n-taa",
      "english": "thorn / fork / needle",
      "matraSymbol": "◌ँ",
      "matraName": "चन्द्रबिन्दु (◌ँ)",
      "breakdown": "क + ◌ा + ◌ँ + ट + ◌ा",
      "examplePhrase": {
        "hindi": "गुलाब का काँटा",
        "roman": "gulāb kā kāñṭā",
        "english": "rose thorn"
      }
    }
  }
];


// Environment exports
if (typeof window !== 'undefined') {
  window.MATRA_CATEGORIES = MATRA_CATEGORIES;
  window.MATRA_CURRICULUM = MATRA_CURRICULUM;
  window.MINIMAL_PAIR_CATEGORIES = MINIMAL_PAIR_CATEGORIES;
  window.HINDI_MINIMAL_PAIRS = HINDI_MINIMAL_PAIRS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MATRA_CATEGORIES, MATRA_CURRICULUM, MINIMAL_PAIR_CATEGORIES, HINDI_MINIMAL_PAIRS };
}
