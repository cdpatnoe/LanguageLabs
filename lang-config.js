// =========================================================================
// LANGUAGE PACK CONFIGURATION: HUNGARIAN (MAGYAR)
// Plug-and-play configuration for the Language Lab Engine.
// To adapt this engine to another language, provide a LANGUAGE_CONFIG object
// alongside your 3 curriculum data files (verbs-data.js, vocab-data.js, matra-data.js).
// =========================================================================

window.LANGUAGE_CONFIG = {
  id: 'hu',
  storagePrefix: 'hungarian',
  name: 'Hungarian',
  nativeName: 'Magyar',
  nativeTitleSub: 'Magyar Nyelvi Labor',
  logoBadge: 'HU',
  themeColor: '#c8102e',
  secondaryColor: '#2e6f40',

  // --- 1. Speech & Phonology Configuration ---
  speech: {
    bcp47: 'hu-HU',
    langPrefix: 'hu',
    preferredLocalVoiceRegex: /Mariska|Szabolcs|Tünde|Hungarian|Magyar/i,
    windowsVoiceAdvice: "No Hungarian speech voice installed on this PC. Go to Settings → Time & Language → Speech → Add voices → Select 'Hungarian (Magyar)'.",
    macVoiceAdvice: "No Hungarian voice found. In macOS System Settings → Accessibility → Spoken Content → System Voice → Manage Voices, install 'Mariska (Hungarian)'."
  },

  // --- 2. Phonetic Guide & Syllable Helpers (Pluggable per language) ---
  // Splits a Hungarian word into spoken syllables, keeping digraphs/trigraphs intact
  splitSyllables(word) {
    if (!word || typeof word !== 'string') return [];
    const clean = word.trim();
    if (!clean) return [];
    // Tokenize into Hungarian multigraphs and single letters
    const tokenRegex = /dzs|dz|cs|gy|ly|ny|sz|ty|zs|[aáeéiíoóöőuúüűbcdfghjklmnprstvwxyz]/gi;
    const tokens = clean.match(tokenRegex);
    if (!tokens || tokens.length <= 1) return [clean];
    const isVowel = (t) => /^[aáeéiíoóöőuúüű]$/i.test(t);
    const vowelCount = tokens.filter(isVowel).length;
    if (vowelCount <= 1) return [clean];

    const syllables = [];
    let current = [];
    for (let i = 0; i < tokens.length; i++) {
      current.push(tokens[i]);
      if (isVowel(tokens[i])) {
        // Count how many consonants follow before the next vowel
        let consAhead = 0;
        let j = i + 1;
        while (j < tokens.length && !isVowel(tokens[j])) {
          consAhead++;
          j++;
        }
        if (j < tokens.length) {
          // There is another vowel ahead: keep all but the last consonant with this syllable
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

  // Generates an English-friendly phonetic pronunciation guide from a Hungarian word
  toPhoneticGuide(word) {
    if (!word || typeof word !== 'string') return '';
    const map = [
      ['dzs', 'j'],
      ['sz', 's'],
      ['zs', 'zh'],
      ['cs', 'ch'],
      ['gy', 'dy'],
      ['ly', 'y'],
      ['ny', 'ny'],
      ['ty', 'ty'],
      ['s', 'sh'],
      ['c', 'ts'],
      ['j', 'y'],
      ['á', 'aa'],
      ['a', 'aw'],
      ['é', 'ay'],
      ['e', 'eh'],
      ['í', 'ee'],
      ['i', 'i'],
      ['ó', 'oh'],
      ['o', 'o'],
      ['ő', 'oe:'],
      ['ö', 'oe'],
      ['ú', 'oo'],
      ['u', 'u'],
      ['ű', 'ue:'],
      ['ü', 'ue']
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

  // Detects Hungarian vowel harmony class ('Back' = Mély, 'Front' = Magas)
  detectNounTrait(word) {
    if (!word || typeof word !== 'string') return 'Back';
    const hasBack = /[aáoóuú]/i.test(word);
    const hasRoundedFront = /[öőüű]/i.test(word);
    if (hasRoundedFront && !hasBack) return 'Front';
    if (hasBack) return 'Back';
    return 'Front';
  },

  // --- 3. UI & Module Metadata ---
  ui: {
    targetLanguageLabel: 'Hungarian',
    guideLabel: 'Pronunciation Guide',
    showGuideButtonText: 'Show Pronunciation',
    hideGuideButtonText: 'Hungarian Only (Hard)',
    verbsClassifierLabel: 'Conjugation Type (Alanyi / Tárgyas)',
    verbsRulePositiveBadge: 'Takes Definite (-om/-od)',
    verbsRuleNegativeBadge: 'Indefinite Only (No Object)',
    vocabTraitLabel: 'Vowel Harmony (Hangrend)',
    vocabTraitA: {
      value: 'Back',
      badge: '🎵 Back (Mély: -ban/-nak)',
      shortBadge: 'Back (Mély)',
      parserRegex: /(?:[\s,\|;\:\-\/\.\—\–]+|^)(?:b|back|mely|mély)\.?\s*$/i
    },
    vocabTraitB: {
      value: 'Front',
      badge: '🎶 Front (Magas: -ben/-nek)',
      shortBadge: 'Front (Magas)',
      parserRegex: /(?:[\s,\|;\:\-\/\.\—\–]+|^)(?:f|front|magas)\.?\s*$/i
    },
    phoneticsModuleTitle: 'Sounds & Pairs',
    phoneticsModuleSub: 'Kiejtés & Hangrend'
  }
};
