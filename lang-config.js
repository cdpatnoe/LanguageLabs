// =========================================================================
// LANGUAGE PACK CONFIGURATION: ITALIAN (ITALIANO)
// Plug-and-play configuration for the Language Lab Engine.
// =========================================================================

window.LANGUAGE_CONFIG = {
  id: 'it',
  storagePrefix: 'italian',
  name: 'Italian',
  nativeName: 'Italiano',
  nativeTitleSub: 'Laboratorio di Italiano',
  logoBadge: 'IT',
  themeColor: '#009246',
  secondaryColor: '#ce2b37',

  // --- 1. Speech & Phonology Configuration ---
  speech: {
    bcp47: 'it-IT',
    langPrefix: 'it',
    preferredLocalVoiceRegex: /Alice|Federica|Luca|Paola|Italian|Italiano/i,
    fallbackNoticeWindows: "No Italian speech voice installed on this PC. Go to Settings → Time & Language → Speech → Add voices → Select 'Italian (Italiano)'.",
    fallbackNoticeMac: "No Italian voice found. In macOS System Settings → Accessibility → Spoken Content → System Voice → Manage Voices, install 'Alice (Italian)' or 'Federica (Italian)'."
  },

  // --- 2. Script Validation, Phonetic Guide & Syllable Helpers ---
  isTargetScript(str) {
    if (!str || typeof str !== 'string') return false;
    return /[a-zA-ZàèéìíîòóùúÀÈÉÌÍÎÒÓÙÚ]/.test(str);
  },

  // Splits an Italian word into spoken syllables, keeping key consonant clusters intact
  splitSyllables(word) {
    if (!word || typeof word !== 'string') return [];
    const clean = word.trim();
    if (!clean) return [];
    const tokenRegex = /gli|gn|sch|sc(?=[eiéèì])|ch|gh|qu|[aàeèéiìíoòóuùúbcdfghjklmnpqrstvwxyz]/gi;
    const tokens = clean.match(tokenRegex);
    if (!tokens || tokens.length <= 1) return [clean];
    const isVowel = (t) => /^[aàeèéiìíoòóuùú]$/i.test(t);
    const vowelCount = tokens.filter(isVowel).length;
    if (vowelCount <= 1) return [clean];

    const syllables = [];
    let current = [];
    for (let i = 0; i < tokens.length; i++) {
      current.push(tokens[i]);
      if (isVowel(tokens[i])) {
        let consAhead = 0;
        let j = i + 1;
        while (j < tokens.length && !isVowel(tokens[j])) {
          consAhead++;
          j++;
        }
        if (j < tokens.length) {
          const takeCons = Math.max(0, consAhead - 1);
          for (let k = 0; k < takeCons; k++) {
            i++;
            current.push(tokens[i]);
          }
          syllables.push(current.join(''));
          current = [];
        }
      }
    }
    if (current.length > 0) {
      if (syllables.length > 0 && !current.some(isVowel)) {
        syllables[syllables.length - 1] += current.join('');
      } else {
        syllables.push(current.join(''));
      }
    }
    return syllables.length > 0 ? syllables : [clean];
  },

  // Generates an English-friendly phonetic pronunciation guide from an Italian word
  toPhoneticGuide(word) {
    if (!word || typeof word !== 'string') return '';
    const map = [
      ['glia', 'lyah'],
      ['glie', 'lyeh'],
      ['glio', 'lyoh'],
      ['gliu', 'lyoo'],
      ['gli', 'lyee'],
      ['gn', 'ny'],
      ['sch', 'sk'],
      ['scia', 'shah'],
      ['scio', 'shoh'],
      ['sciu', 'shoo'],
      ['sce', 'sheh'],
      ['sci', 'shee'],
      ['che', 'keh'],
      ['chi', 'kee'],
      ['ghe', 'geh'],
      ['ghi', 'gee'],
      ['cia', 'chah'],
      ['cio', 'choh'],
      ['ciu', 'choo'],
      ['gia', 'jah'],
      ['gio', 'joh'],
      ['giu', 'joo'],
      ['ce', 'cheh'],
      ['ci', 'chee'],
      ['ge', 'jeh'],
      ['gi', 'jee'],
      ['qu', 'kw'],
      ['zz', 'ts'],
      ['z', 'ts'],
      ['ch', 'k'],
      ['gh', 'g'],
      ['c', 'k'],
      ['h', ''],
      ['à', 'ah'],
      ['a', 'ah'],
      ['é', 'ay'],
      ['è', 'eh'],
      ['e', 'eh'],
      ['ì', 'ee'],
      ['í', 'ee'],
      ['i', 'ee'],
      ['ò', 'oh'],
      ['ó', 'oh'],
      ['o', 'oh'],
      ['ù', 'oo'],
      ['ú', 'oo'],
      ['u', 'oo']
    ];
    const lower = word.toLowerCase().trim();
    let out = '';
    let i = 0;
    while (i < lower.length) {
      let matched = false;
      for (const [k, v] of map) {
        if (lower.startsWith(k, i)) {
          out += v;
          i += k.length;
          matched = true;
          break;
        }
      }
      if (!matched) {
        out += lower[i];
        i++;
      }
    }
    return out;
  },

  // Detects Italian grammatical gender ('Masculine' vs 'Feminine')
  detectNounTrait(word) {
    if (!word || typeof word !== 'string') return 'Masculine';
    const w = word.toLowerCase().trim().replace(/^(il|lo|l'|la|i|gli|le)\s+/i, '');
    if (/(?:ma|problema|tema|sistema|programma|cinema|clima)$/i.test(w)) return 'Masculine';
    if (/(?:a|zione|sione|tà|tù|ice)$/i.test(w)) return 'Feminine';
    return 'Masculine';
  },

  // --- 3. UI & Module Metadata ---
  ui: {
    targetLanguageLabel: 'Italian',
    guideLabel: 'Pronunciation Guide',
    showGuideButtonText: 'Show Pronunciation',
    hideGuideButtonText: 'Italian Only (Hard)',
    verbsClassifierLabel: 'Passato Prossimo Auxiliary (Essere / Avere)',
    verbsRulePositiveBadge: 'Takes Essere (sono andato/a)',
    verbsRuleNegativeBadge: 'Takes Avere (ho parlato)',
    vocabTraitLabel: 'Grammatical Gender (Genere)',
    vocabTraitA: {
      value: 'Masculine',
      badge: '♂ Masculine (il / lo)',
      shortBadge: 'Masculine (M)',
      parserRegex: /(?:[\s,\|;\:\-\/\.\—\–]+|^)(?:m|masc|masculine|maschile)\.?\s*$/i
    },
    vocabTraitB: {
      value: 'Feminine',
      badge: '♀ Feminine (la)',
      shortBadge: 'Feminine (F)',
      parserRegex: /(?:[\s,\|;\:\-\/\.\—\–]+|^)(?:f|fem|feminine|femminile)\.?\s*$/i
    },
    phoneticsModuleTitle: 'Sounds & Pairs',
    phoneticsModuleSub: 'Pronuncia & Doppie'
  }
};
