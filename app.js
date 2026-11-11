// Hindi Verb Lab - Offline, Accessible & Cross-Platform Application Controller
// Designed for high error resilience, WCAG AA accessibility, and Windows / Mac compatibility.

// --- 1. Safe Storage Manager (Graceful degradation for private browsing / quota limits) ---
class SafeStorageManager {
  constructor() {
    this.memoryStore = new Map();
    this.isStorageAvailable = this.checkStorage();
    if (!this.isStorageAvailable) {
      console.warn("SafeStorage: localStorage is not available or blocked. Falling back to in-memory store.");
    }
  }

  checkStorage() {
    try {
      const testKey = '__hindi_storage_test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  getItem(key) {
    if (this.isStorageAvailable) {
      try {
        const val = localStorage.getItem(key);
        if (val !== null) return val;
      } catch (e) {
        console.warn(`SafeStorage: Error reading key "${key}":`, e);
      }
    }
    return this.memoryStore.has(key) ? this.memoryStore.get(key) : null;
  }

  setItem(key, value) {
    this.memoryStore.set(key, value);
    if (this.isStorageAvailable) {
      try {
        localStorage.setItem(key, value);
        return true;
      } catch (e) {
        console.warn(`SafeStorage: Storage quota exceeded or disabled for "${key}":`, e);
        this.isStorageAvailable = false;
        showToast("Storage quota or permission issue: data will be saved for this session only.", "warning");
        return false;
      }
    }
    return false;
  }

  removeItem(key) {
    this.memoryStore.delete(key);
    if (this.isStorageAvailable) {
      try {
        localStorage.removeItem(key);
      } catch (e) {}
    }
  }

  isPersistent() {
    return this.isStorageAvailable;
  }
}

const safeStorage = new SafeStorageManager();

// --- 2. Accessibility Announcer & Toast Notification System ---
function announce(message, priority = 'polite') {
  if (!message) return;
  const el = document.getElementById('a11y-announcer');
  if (!el) return;

  if (priority === 'assertive') {
    el.setAttribute('aria-live', 'assertive');
  } else {
    el.setAttribute('aria-live', 'polite');
  }

  // Clear and update with slight microtask delay so screen reader registers the change
  el.textContent = '';
  setTimeout(() => {
    el.textContent = message;
  }, 50);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// --- Script Validation & Devanagari to Latin Transliterator ---
function containsDevanagari(str) {
  if (!str || typeof str !== 'string') return false;
  return /[\u0900-\u097F]/.test(str);
}

function isLatinScript(str) {
  if (!str || typeof str !== 'string') return false;
  // Must contain Latin letters and zero Devanagari characters
  return /[a-zA-Z]/.test(str) && !/[\u0900-\u097F]/.test(str);
}

function devanagariToLatin(hindi) {
  if (!hindi || typeof hindi !== 'string') return '';
  
  const consonants = {
    'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'ṅ',
    'च': 'c', 'छ': 'ch', 'ज': 'j', 'झ': 'jh', 'ञ': 'ñ',
    'ट': 'ṭ', 'ठ': 'ṭh', 'ड': 'ḍ', 'ढ': 'ḍh', 'ण': 'ṇ',
    'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n',
    'प': 'p', 'फ': 'ph', 'ब': 'b', 'भ': 'bh', 'म': 'm',
    'य': 'y', 'र': 'r', 'ल': 'l', 'व': 'v',
    'श': 'ś', 'ष': 'ṣ', 'स': 's', 'ह': 'h'
  };

  const nuktaMap = {
    'क': 'q', 'ख': 'kh', 'ग': 'gh', 'ज': 'z', 'ड': 'ṛ', 'ढ': 'ṛh', 'फ': 'f'
  };

  const vowels = {
    'अ': 'a', 'आ': 'ā', 'इ': 'i', 'ई': 'ī', 'उ': 'u', 'ऊ': 'ū',
    'ऋ': 'ṛ', 'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au'
  };

  const matras = {
    'ा': 'ā', 'ि': 'i', 'ी': 'ī', 'ु': 'u', 'ू': 'ū',
    'ृ': 'ṛ', 'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au'
  };

  let out = '';
  const len = hindi.length;
  let i = 0;

  while (i < len) {
    let ch = hindi[i];
    let next = i + 1 < len ? hindi[i + 1] : '';

    if (vowels[ch]) {
      out += vowels[ch];
      i++;
      continue;
    }

    if (ch === ' ' || ch === '-' || ch === '_' || ch === ',') {
      out += ch;
      i++;
      continue;
    }

    if (ch in consonants) {
      let base = consonants[ch];
      if (next === '\u093C') { // Nukta ़
        base = nuktaMap[ch] || base;
        i++;
        next = i + 1 < len ? hindi[i + 1] : '';
      }

      if (next === '\u094D') { // Virama / Halant ्
        out += base;
        i += 2;
        continue;
      }

      if (next in matras) {
        out += base + matras[next];
        i += 2;
        if (i < len && (hindi[i] === '\u0902' || hindi[i] === '\u0901')) {
          out += '̃';
          i++;
        }
        continue;
      }

      if (next === '\u0902' || next === '\u0901') {
        out += base + 'an';
        i += 2;
        continue;
      }

      if (next === '\u0903') {
        out += base + 'aḥ';
        i += 2;
        continue;
      }

      const rest = hindi.slice(i + 1);
      const isWordEnd = i + 1 === len || next === ' ' || next === '-';
      const isBeforeNa = rest.startsWith('ना') || rest.startsWith('ता') || rest.startsWith('ती') || rest.startsWith('ते');

      if (isWordEnd) {
        out += base;
      } else if (isBeforeNa && out.length > 0) {
        out += base;
      } else {
        out += base + 'a';
      }

      i++;
      continue;
    }

    if (ch !== '\u093C' && ch !== '\u094D') {
      out += ch;
    }
    i++;
  }

  return out;
}

function showToast(message, type = 'info', duration = 5000) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', type === 'error' ? 'alert' : 'status');

  const icons = {
    error: '❌',
    warning: '⚠️',
    success: '✅',
    info: '💡'
  };

  toast.innerHTML = `
    <span class="toast-icon" aria-hidden="true">${icons[type] || '💡'}</span>
    <div class="toast-content">
      <div class="toast-text">${escapeHtml(message)}</div>
    </div>
    <button class="toast-close" aria-label="Dismiss notification">✕</button>
  `;

  const closeBtn = toast.querySelector('.toast-close');
  const removeToast = () => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    setTimeout(() => toast.remove(), 250);
  };

  closeBtn?.addEventListener('click', removeToast);
  container.appendChild(toast);

  if (duration > 0) {
    setTimeout(removeToast, duration);
  }
}

// Global unhandled error handlers
window.addEventListener('error', (event) => {
  console.error("Global Error Caught:", event.error || event.message);
  if (event.message && !event.message.includes('ResizeObserver')) {
    showToast(`An unexpected error occurred: ${event.message}. Your data remains safe.`, 'error', 6000);
  }
});

window.addEventListener('unhandledrejection', (event) => {
  console.error("Unhandled Promise Rejection:", event.reason);
  showToast("An asynchronous operation failed. Please try again.", 'warning', 5000);
});

// Guard against Windows browser drag-and-drop navigation bug
window.addEventListener('dragover', (e) => {
  e.preventDefault();
}, false);

window.addEventListener('drop', (e) => {
  e.preventDefault();
}, false);


// --- 3. Robust Speech Synthesis Controller (Windows, Mac & Cross-Browser) ---
let speechVoiceWarningShown = false;
let cachedVoices = [];

// Persistent set to prevent V8/WebKit garbage collector from destroying active utterances
if (typeof window !== 'undefined') {
  window._activeSpeechUtterances = window._activeSpeechUtterances || new Set();
}

let activeSpeakingButton = null;

function clearSpeakingButtonState() {
  if (activeSpeakingButton) {
    activeSpeakingButton.classList.remove('speaking');
    activeSpeakingButton.removeAttribute('aria-busy');
    activeSpeakingButton = null;
  }
}

function refreshVoices() {
  if ('speechSynthesis' in window) {
    try {
      cachedVoices = window.speechSynthesis.getVoices() || [];
    } catch (e) {
      cachedVoices = [];
    }
  }
}

if ('speechSynthesis' in window) {
  refreshVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    refreshVoices();
  };
}

// --- Hindi Syllable & Phoneme Decomposition Helpers ---
function splitHindiSyllables(word) {
  if (!word || typeof word !== 'string') return [];
  const clean = word.trim();
  // Devanagari Akshar regular expression:
  // (Consonant + Virama)* + Consonant + (optional Nukta) + (optional Matra / Anusvara / Chandrabindu / Visarga)
  // OR Independent Vowel + (optional Anusvara / Chandrabindu / Visarga)
  const aksharRegex = /(?:[\u0915-\u0939\u0958-\u095F]\u094D)*[\u0915-\u0939\u0958-\u095F][\u093C]?[\u093E-\u094C\u094E\u0955-\u0957\u0962\u0963\u0901-\u0903]?|[\u0904-\u0914][\u0901-\u0903]?/g;
  const matches = clean.match(aksharRegex);
  return (matches && matches.length > 0) ? matches : [clean];
}

function getSyllabicHindiSpeechText(word) {
  const syllables = splitHindiSyllables(word);
  if (syllables.length <= 1) {
    return word;
  }
  // Formats acoustic pauses between individual akshars, followed by the blended word:
  // e.g. "कि ... ता ... ब ... किताब" or "दि ... न ... दिन"
  return `${syllables.join(' ... ')} ... ${word}`;
}

function findHindiVoice(options = {}) {
  const preferLocal = Boolean(options && options.preferLocal);
  if (!('speechSynthesis' in window)) return null;
  const voices = (cachedVoices && cachedVoices.length) ? cachedVoices : window.speechSynthesis.getVoices();
  if (!voices || !voices.length) return null;

  // If local voice is preferred (e.g. for slow reading so Chrome on Mac/Windows uses a local voice rather than Google remote voice which ignores rate)
  if (preferLocal) {
    // 1. Local exact Hindi match (like Apple Lekha on macOS, or Windows local voices)
    let localVoice = voices.find(v => 
      v.localService && (v.lang === 'hi-IN' || v.lang === 'hi_IN' || v.lang === 'hi')
    );
    if (localVoice) return localVoice;

    // 2. Local voice containing Hindi / Lekha / Indic
    localVoice = voices.find(v => 
      v.localService && (v.lang.toLowerCase().startsWith('hi') || /Hindi|Lekha|हिन्दी|Kalpana|Hemant|Ravi/i.test(v.name))
    );
    if (localVoice) return localVoice;
  }

  // Standard search:
  // 1. Direct exact BCP-47 match for Hindi (India)
  let voice = voices.find(v => v.lang === 'hi-IN' || v.lang === 'hi_IN' || v.lang === 'hi');
  if (voice) return voice;

  // 2. Microsoft Windows Hindi voices (Microsoft Hemant, Microsoft Kalpana, Microsoft Ravi)
  voice = voices.find(v => 
    /Hemant|Kalpana|Ravi/i.test(v.name) && (/Hindi/i.test(v.name) || v.lang.startsWith('hi'))
  );
  if (voice) return voice;

  // 3. Name or language includes Hindi / Devanagari (e.g. "Lekha" on macOS, "Google हिन्दी", etc.)
  voice = voices.find(v => 
    v.lang.toLowerCase().startsWith('hi') || /Hindi|Lekha|हिन्दी/i.test(v.name)
  );
  if (voice) return voice;

  // 4. Any Indian locale voice as gentle fallback (e.g. en-IN, mr-IN, gu-IN or similar Indic voices)
  voice = voices.find(v => v.lang.endsWith('-IN') || v.lang.endsWith('_IN'));
  return voice;
}

// True on phones/tablets (no hover, coarse pointer) – used to show touch-friendly prompts
const IS_TOUCH_DEVICE = typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(hover: none) and (pointer: coarse)').matches;

let speakDebounceTimer = null;

function speakHindi(text, buttonEl = null, options = {}) {
  return new Promise((resolve) => {
    if (!text || typeof text !== 'string') {
      resolve();
      return;
    }
    if (!('speechSynthesis' in window)) {
      showToast("Speech synthesis is not supported on this browser.", "warning");
      announce("Speech synthesis is not supported on this browser.");
      resolve();
      return;
    }

    // Support options as a number (backwards compatibility for rate) or object
    let rate = 0.85;
    let preferLocal = false;
    let syllabic = false;

    if (typeof options === 'number') {
      rate = options;
    } else if (typeof options === 'object' && options !== null) {
      if (typeof options.rate === 'number') rate = options.rate;
      if (options.preferLocal !== undefined) preferLocal = Boolean(options.preferLocal);
      if (options.syllabic) syllabic = true;
    }

    // If slow reading is requested, automatically prefer local system voice
    if (rate < 0.85) {
      preferLocal = true;
    }

    let speechText = text;
    if (syllabic) {
      speechText = getSyllabicHindiSpeechText(text);
    }

    // Clear previous button highlight
    clearSpeakingButtonState();

    if (buttonEl) {
      activeSpeakingButton = buttonEl;
      buttonEl.classList.add('speaking');
      buttonEl.setAttribute('aria-busy', 'true');
    }

    try {
      // 1. Resume engine if browser placed it into a paused state
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      // 2. Cancel any pending audio in the synthesis queue
      window.speechSynthesis.cancel();

      // 3. Clear existing debounce timer
      if (speakDebounceTimer) {
        clearTimeout(speakDebounceTimer);
        speakDebounceTimer = null;
      }

      // 4. Dispatch new utterance after a 40ms tick.
      // This resolves the Chromium bug where calling cancel() and speak() synchronously
      // in the same tick causes the new utterance to be immediately discarded.
      speakDebounceTimer = setTimeout(() => {
        try {
          if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          }

          const utterance = new SpeechSynthesisUtterance(speechText);
          utterance.lang = 'hi-IN';

          // Safe clamped rate:
          // Local OS synthesizers (Lekha on macOS, Kalpana on Windows) reliably accept 0.65 - 0.70
          utterance.rate = (typeof rate === 'number' && rate > 0) ? Math.max(0.65, Math.min(rate, 1.5)) : 0.85;

          const voice = findHindiVoice({ preferLocal: preferLocal });
          if (voice) {
            utterance.voice = voice;
            // CRITICAL ENGINE FALLBACK:
            // Google's remote network voice in Chrome completely ignores utterance.rate.
            // If only a remote voice is available and slow speech is requested, inject syllable spacing
            // so the learner still receives an acoustically slow, articulated pronunciation.
            if (!voice.localService && rate < 0.85 && !syllabic) {
              utterance.text = getSyllabicHindiSpeechText(text);
            }
          } else {
            const allVoices = (cachedVoices && cachedVoices.length) ? cachedVoices : window.speechSynthesis.getVoices();
            if (allVoices.length > 0 && !speechVoiceWarningShown) {
              speechVoiceWarningShown = true;
              const isWindows = /Win/i.test(navigator.platform || navigator.userAgent);
              const advice = isWindows 
                ? "No Hindi speech voice installed on this Windows PC. To enable speech: Go to Windows Settings → Time & Language → Speech → Add voices → Select 'Hindi (India)'."
                : "No Hindi speech voice found on your system. You can install a Hindi voice in system settings.";
              showToast(advice, "info", 8000);
            }
          }

          // CRITICAL BUG FIX: Hold a persistent reference in window._activeSpeechUtterances
          // so V8/WebKit garbage collector cannot destroy the object while speaking!
          window._activeSpeechUtterances.add(utterance);

          // Safety watchdog: In Chrome, speech synthesis can hang without firing onend.
          // A 6-second watchdog guarantees button resets and engine recovers.
          const watchdog = setTimeout(() => {
            if (window._activeSpeechUtterances.has(utterance)) {
              window._activeSpeechUtterances.delete(utterance);
              clearSpeakingButtonState();
              if (window.speechSynthesis.paused) {
                window.speechSynthesis.resume();
              }
              resolve();
            }
          }, 6000);

          utterance.onstart = () => {
            if (buttonEl) {
              buttonEl.classList.add('speaking');
              buttonEl.setAttribute('aria-busy', 'true');
            }
          };

          utterance.onend = () => {
            clearTimeout(watchdog);
            window._activeSpeechUtterances.delete(utterance);
            clearSpeakingButtonState();
            resolve();
          };

          utterance.onerror = (e) => {
            clearTimeout(watchdog);
            window._activeSpeechUtterances.delete(utterance);
            clearSpeakingButtonState();
            if (e.error && e.error !== 'canceled' && e.error !== 'interrupted') {
              console.warn("Speech synthesis error event:", e.error);
            }
            resolve();
          };

          window.speechSynthesis.speak(utterance);
          announce(`Pronouncing ${text}`);
        } catch (innerErr) {
          console.error("Delayed speakHindi failed:", innerErr);
          clearSpeakingButtonState();
          resolve();
        }
      }, 40);
    } catch (err) {
      console.error("SpeechSynthesis failure:", err);
      clearSpeakingButtonState();
      resolve();
    }
  });
}


// --- 4. State Management ---
class AppState {
  constructor() {
    // Active Module (verbs | vocab | matras)
    const storedFocus = safeStorage.getItem('hindi_active_focus');
    this.activeModule = (storedFocus === 'vocab' || storedFocus === 'matras') ? storedFocus : 'verbs';
    this.activeTabType = 'explorer'; // explorer | flashcard | match | quiz | notes

    // 1. Verb Curriculum State
    const baseVerbs = (typeof VERB_CURRICULUM !== 'undefined' && Array.isArray(VERB_CURRICULUM))
      ? VERB_CURRICULUM
      : ((typeof window !== 'undefined' && Array.isArray(window.VERB_CURRICULUM)) ? window.VERB_CURRICULUM : []);
    this.verbs = [...baseVerbs];
    this.loadCustomVerbs();
    this.loadReviewStatus();
    
    this.currentTab = 'verbs-tab';
    this.searchQuery = '';
    this.clusterFilter = 'all';
    this.neFilter = 'all';

    // Verb Flashcard State
    this.flashcardsList = [...this.verbs];
    this.flashIndex = 0;
    this.isFlipped = false;
    this.hideTransliteration = false;
    this.showEnglishFirst = false;
    this.flashcardTense = 'present';

    // Verb Match Game State
    this.matchGamePairs = [];
    this.selectedHindi = null;
    this.selectedEnglish = null;
    this.matchedCount = 0;
    this.gameStartTime = null;
    this.matchHideTransliteration = safeStorage.getItem('hindi_match_hide_translit') === 'true';

    // Verb Quiz State
    this.currentQuizIndex = 0;
    this.quizQuestions = [];
    this.quizScore = 0;
    this.verbsQuizTopic = 'mixed';

    // 2. Vocabulary Curriculum State (Non-Verb Words: Nouns, Adjectives, etc.)
    const baseVocab = (typeof VOCAB_CURRICULUM !== 'undefined' && Array.isArray(VOCAB_CURRICULUM))
      ? VOCAB_CURRICULUM
      : ((typeof window !== 'undefined' && Array.isArray(window.VOCAB_CURRICULUM)) ? window.VOCAB_CURRICULUM : []);
    this.vocab = [...baseVocab];
    this.loadCustomVocab();
    this.loadVocabReviewStatus();

    this.vocabSearchQuery = '';
    this.vocabPosFilter = 'all';
    this.vocabGenderFilter = 'all';
    this.vocabCategoryFilter = 'all';

    // Vocab Flashcard State
    this.vocabFlashcardsList = [...this.vocab];
    this.vocabFlashIndex = 0;
    this.vocabIsFlipped = false;
    this.vocabHideTransliteration = false;
    this.vocabShowEnglishFirst = false;

    // Vocab Match Game State
    this.vocabMatchPairs = [];
    this.vocabSelectedHindi = null;
    this.vocabSelectedEnglish = null;
    this.vocabMatchedCount = 0;
    this.vocabGameStartTime = null;
    this.vocabMatchHideTransliteration = this.matchHideTransliteration;

    // Vocab Quiz State
    this.vocabQuizIndex = 0;
    this.vocabQuizQuestions = [];
    this.vocabQuizScore = 0;
    this.vocabQuizTopic = 'mixed';
    this.customQuizPacks = [];
    this.loadCustomQuizPacks();

    // 3. Matra Reading Curriculum State (मात्रा वाचन अभ्यास)
    const baseMatras = (typeof MATRA_CURRICULUM !== 'undefined' && Array.isArray(MATRA_CURRICULUM))
      ? MATRA_CURRICULUM
      : ((typeof window !== 'undefined' && Array.isArray(window.MATRA_CURRICULUM)) ? window.MATRA_CURRICULUM : []);
    this.matraWords = [...baseMatras];
    this.loadCustomMatras();
    this.loadMatraReviewStatus();

    this.matraSearchQuery = '';
    this.matraFilter = 'all';
    this.matraLengthFilter = 'all';

    // Matra Flashcard State: by default drills words with visible matras
    this.matraFlashcardsList = this.matraWords.filter(w => w.matra !== 'mukta');
    this.matraFlashIndex = 0;
    this.matraIsFlipped = false;
    this.matraReadingRevealed = false;
    this.matraHideTransliteration = false;
    this.matraAutoSpeak = false;
    this.matraActiveDeckFilter = 'all';

    // Minimal Pairs (Confusion Busters) State
    this.matraIsMinimalPairMode = false;
    this.matraActiveContrastCategory = 'all';
    this.matraMinimalPairsList = (typeof HINDI_MINIMAL_PAIRS !== 'undefined' && Array.isArray(HINDI_MINIMAL_PAIRS))
      ? [...HINDI_MINIMAL_PAIRS]
      : ((typeof window !== 'undefined' && Array.isArray(window.HINDI_MINIMAL_PAIRS)) ? [...window.HINDI_MINIMAL_PAIRS] : []);
    this.matraMinimalPairIndex = 0;

    // Matra Match Game State
    this.matraMatchPairs = [];
    this.matraSelectedHindi = null;
    this.matraSelectedEnglish = null;
    this.matraMatchedCount = 0;
    this.matraMatchStreak = 0;
    this.matraGameStartTime = null;
    this.matraTimerInterval = null;
    this.matraMatchHideTransliteration = this.matchHideTransliteration;

    // Matra Quiz State
    this.matraQuizIndex = 0;
    this.matraQuizQuestions = [];
    this.matraQuizScore = 0;

    // Quiz Live Timers & Best Time State
    this.verbsQuizStartTime = null;
    this.verbsQuizTimerInterval = null;
    this.vocabQuizStartTime = null;
    this.vocabQuizTimerInterval = null;
    this.matrasQuizStartTime = null;
    this.matrasQuizTimerInterval = null;

    // Lexicon Manager / Data Cleanup State
    this.lexiconModuleFilter = 'all';
    this.lexiconSourceFilter = 'all';
    this.lexiconIssuesOnly = false;
    this.lexiconSearch = '';
    this.lexiconEditingKey = null;
  }

  // --- Verb Storage Methods ---
  loadCustomVerbs() {
    try {
      const stored = safeStorage.getItem('hindi_custom_verbs');
      let custom = [];
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) custom = parsed;
      }
      // Sanitization: deduplicate custom verbs by Devanagari hindi
      const seen = new Set((window.VERB_CURRICULUM || []).map(v => v.hindi));
      const cleanCustom = [];
      for (const v of custom) {
        if (v && v.hindi && !seen.has(v.hindi)) {
          seen.add(v.hindi);
          cleanCustom.push(v);
        }
      }
      if (cleanCustom.length !== custom.length) {
        safeStorage.setItem('hindi_custom_verbs', JSON.stringify(cleanCustom));
      }
      this.verbs = [...(window.VERB_CURRICULUM || []), ...cleanCustom];
    } catch (e) {
      console.error('Failed to load custom verbs', e);
      showToast("Could not parse saved custom verbs. Starting with default curriculum.", "warning");
    }
  }

  hasVerb(hindi) {
    if (!hindi || typeof hindi !== 'string') return false;
    const clean = hindi.trim();
    return this.verbs.some(v => v.hindi === clean);
  }

  getVerb(hindi) {
    if (!hindi || typeof hindi !== 'string') return null;
    const clean = hindi.trim();
    return this.verbs.find(v => v.hindi === clean) || null;
  }

  saveCustomVerb(verb) {
    try {
      if (!verb || !verb.hindi) return;
      const stored = safeStorage.getItem('hindi_custom_verbs');
      let custom = [];
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) custom = parsed;
        } catch (e) {
          custom = [];
        }
      }

      const existingCustomIdx = custom.findIndex(v => v.hindi === verb.hindi);
      if (existingCustomIdx !== -1) {
        custom[existingCustomIdx] = { ...custom[existingCustomIdx], ...verb };
      } else {
        const inCore = (window.VERB_CURRICULUM || []).some(v => v.hindi === verb.hindi);
        if (!inCore) {
          custom.push(verb);
        }
      }
      safeStorage.setItem('hindi_custom_verbs', JSON.stringify(custom));

      const existingIdx = this.verbs.findIndex(v => v.hindi === verb.hindi);
      if (existingIdx !== -1) {
        this.verbs[existingIdx] = { ...this.verbs[existingIdx], ...verb };
      } else {
        this.verbs.push(verb);
      }

      const flashIdx = this.flashcardsList.findIndex(v => v.hindi === verb.hindi);
      if (flashIdx !== -1) {
        this.flashcardsList[flashIdx] = { ...this.flashcardsList[flashIdx], ...verb };
      } else {
        this.flashcardsList.push(verb);
      }
    } catch (e) {
      console.error('Failed to save custom verb', e);
      showToast("Failed to save verb: " + (e.message || "Storage error"), "error");
    }
  }

  loadReviewStatus() {
    try {
      const stored = safeStorage.getItem('hindi_verb_reviews');
      this.reviews = stored ? JSON.parse(stored) : {};
    } catch (e) {
      this.reviews = {};
    }
  }

  markVerb(id, status) {
    this.reviews[id] = status;
    try {
      safeStorage.setItem('hindi_verb_reviews', JSON.stringify(this.reviews));
    } catch (e) {}
  }

  // --- Vocabulary Storage Methods ---
  loadCustomVocab() {
    try {
      const stored = safeStorage.getItem('hindi_custom_vocab');
      let custom = [];
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) custom = parsed;
      }

      const seen = new Set((window.VOCAB_CURRICULUM || []).map(w => w.hindi));
      const cleanCustom = [];
      for (const w of custom) {
        if (w && w.hindi && !seen.has(w.hindi)) {
          seen.add(w.hindi);
          cleanCustom.push(w);
        }
      }
      if (cleanCustom.length !== custom.length) {
        safeStorage.setItem('hindi_custom_vocab', JSON.stringify(cleanCustom));
      }
      this.vocab = [...(window.VOCAB_CURRICULUM || []), ...cleanCustom];
    } catch (e) {
      console.error('Failed to load custom vocab', e);
    }
  }

  hasWord(hindi) {
    if (!hindi || typeof hindi !== 'string') return false;
    const clean = hindi.trim();
    return this.vocab.some(w => w.hindi === clean);
  }

  getWord(hindi) {
    if (!hindi || typeof hindi !== 'string') return null;
    const clean = hindi.trim();
    return this.vocab.find(w => w.hindi === clean) || null;
  }

  saveCustomWord(word) {
    try {
      if (!word || !word.hindi) return;
      const stored = safeStorage.getItem('hindi_custom_vocab');
      let custom = [];
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) custom = parsed;
        } catch (e) {
          custom = [];
        }
      }

      const existingCustomIdx = custom.findIndex(w => w.hindi === word.hindi);
      if (existingCustomIdx !== -1) {
        custom[existingCustomIdx] = { ...custom[existingCustomIdx], ...word };
      } else {
        const inCore = (window.VOCAB_CURRICULUM || []).some(w => w.hindi === word.hindi);
        if (!inCore) {
          custom.push(word);
        }
      }
      safeStorage.setItem('hindi_custom_vocab', JSON.stringify(custom));

      const existingIdx = this.vocab.findIndex(w => w.hindi === word.hindi);
      if (existingIdx !== -1) {
        this.vocab[existingIdx] = { ...this.vocab[existingIdx], ...word };
      } else {
        this.vocab.push(word);
      }

      const flashIdx = this.vocabFlashcardsList.findIndex(w => w.hindi === word.hindi);
      if (flashIdx !== -1) {
        this.vocabFlashcardsList[flashIdx] = { ...this.vocabFlashcardsList[flashIdx], ...word };
      } else {
        this.vocabFlashcardsList.push(word);
      }
    } catch (e) {
      console.error('Failed to save custom word', e);
      showToast("Failed to save word: " + (e.message || "Storage error"), "error");
    }
  }

  loadVocabReviewStatus() {
    try {
      const stored = safeStorage.getItem('hindi_vocab_reviews');
      this.vocabReviews = stored ? JSON.parse(stored) : {};
    } catch (e) {
      this.vocabReviews = {};
    }
  }

  markVocabWord(id, status) {
    this.vocabReviews[id] = status;
    try {
      safeStorage.setItem('hindi_vocab_reviews', JSON.stringify(this.vocabReviews));
    } catch (e) {}
  }

  // --- Matra Storage Methods ---
  loadCustomMatras() {
    try {
      const stored = safeStorage.getItem('hindi_custom_matras');
      let custom = [];
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) custom = parsed;
      }

      const seen = new Set((window.MATRA_CURRICULUM || []).map(w => w.hindi));
      const cleanCustom = [];
      for (const w of custom) {
        if (w && w.hindi && !seen.has(w.hindi)) {
          seen.add(w.hindi);
          cleanCustom.push(w);
        }
      }
      if (cleanCustom.length !== custom.length) {
        safeStorage.setItem('hindi_custom_matras', JSON.stringify(cleanCustom));
      }
      this.matraWords = [...(window.MATRA_CURRICULUM || []), ...cleanCustom];
    } catch (e) {
      console.error('Failed to load custom matras', e);
    }
  }

  hasMatraWord(hindi) {
    if (!hindi || typeof hindi !== 'string') return false;
    const clean = hindi.trim();
    return this.matraWords.some(w => w.hindi === clean);
  }

  getMatraWord(hindi) {
    if (!hindi || typeof hindi !== 'string') return null;
    const clean = hindi.trim();
    return this.matraWords.find(w => w.hindi === clean) || null;
  }

  saveCustomMatra(word) {
    try {
      if (!word || !word.hindi) return;
      const stored = safeStorage.getItem('hindi_custom_matras');
      let custom = [];
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) custom = parsed;
        } catch (e) {
          custom = [];
        }
      }

      const existingCustomIdx = custom.findIndex(w => w.hindi === word.hindi);
      if (existingCustomIdx !== -1) {
        custom[existingCustomIdx] = { ...custom[existingCustomIdx], ...word };
      } else {
        const inCore = (window.MATRA_CURRICULUM || []).some(w => w.hindi === word.hindi);
        if (!inCore) {
          custom.push(word);
        }
      }
      safeStorage.setItem('hindi_custom_matras', JSON.stringify(custom));

      const existingIdx = this.matraWords.findIndex(w => w.hindi === word.hindi);
      if (existingIdx !== -1) {
        this.matraWords[existingIdx] = { ...this.matraWords[existingIdx], ...word };
      } else {
        this.matraWords.push(word);
      }

      const flashIdx = this.matraFlashcardsList.findIndex(w => w.hindi === word.hindi);
      if (flashIdx !== -1) {
        this.matraFlashcardsList[flashIdx] = { ...this.matraFlashcardsList[flashIdx], ...word };
      } else {
        this.matraFlashcardsList.push(word);
      }
    } catch (e) {
      console.error('Failed to save custom matra word', e);
      showToast("Failed to save word: " + (e.message || "Storage error"), "error");
    }
  }

  loadMatraReviewStatus() {
    try {
      const stored = safeStorage.getItem('hindi_matra_reviews');
      this.matraReviews = stored ? JSON.parse(stored) : {};
    } catch (e) {
      this.matraReviews = {};
    }
  }

  markMatraWord(id, status) {
    if (!this.matraReviews) this.matraReviews = {};
    this.matraReviews[id] = status;
    try {
      safeStorage.setItem('hindi_matra_reviews', JSON.stringify(this.matraReviews));
    } catch (e) {}
  }

  // --- Data Cleanup & Deletion Methods ---
  deleteCustomVerb(identifier) {
    try {
      const stored = safeStorage.getItem('hindi_custom_verbs');
      let custom = stored ? JSON.parse(stored) : [];
      if (!Array.isArray(custom)) custom = [];
      const beforeLen = custom.length;
      custom = custom.filter(v => v.id !== identifier && v.hindi !== identifier);
      safeStorage.setItem('hindi_custom_verbs', JSON.stringify(custom));

      this.verbs = [...(window.VERB_CURRICULUM || []), ...custom];
      this.flashcardsList = [...this.verbs];
      return beforeLen !== custom.length;
    } catch (e) {
      console.error('Failed to delete custom verb', e);
      return false;
    }
  }

  deleteCustomVocab(identifier) {
    try {
      const stored = safeStorage.getItem('hindi_custom_vocab');
      let custom = stored ? JSON.parse(stored) : [];
      if (!Array.isArray(custom)) custom = [];
      const beforeLen = custom.length;
      custom = custom.filter(w => w.id !== identifier && w.hindi !== identifier);
      safeStorage.setItem('hindi_custom_vocab', JSON.stringify(custom));

      this.vocab = [...(window.VOCAB_CURRICULUM || []), ...custom];
      this.vocabFlashcardsList = [...this.vocab];
      return beforeLen !== custom.length;
    } catch (e) {
      console.error('Failed to delete custom vocab', e);
      return false;
    }
  }

  deleteCustomMatra(identifier) {
    try {
      const stored = safeStorage.getItem('hindi_custom_matras');
      let custom = stored ? JSON.parse(stored) : [];
      if (!Array.isArray(custom)) custom = [];
      const beforeLen = custom.length;
      custom = custom.filter(w => w.id !== identifier && w.hindi !== identifier);
      safeStorage.setItem('hindi_custom_matras', JSON.stringify(custom));

      this.matraWords = [...(window.MATRA_CURRICULUM || []), ...custom];
      this.matraFlashcardsList = [...this.matraWords];
      return beforeLen !== custom.length;
    } catch (e) {
      console.error('Failed to delete custom matra', e);
      return false;
    }
  }

  deduplicateAllCustomWords() {
    let removedCount = 0;
    try {
      // 1. Verbs
      const storedVerbs = safeStorage.getItem('hindi_custom_verbs');
      if (storedVerbs) {
        let verbs = JSON.parse(storedVerbs);
        if (Array.isArray(verbs)) {
          const coreSet = new Set((window.VERB_CURRICULUM || []).map(v => (v.hindi || '').trim()));
          const seen = new Set();
          const clean = [];
          for (const v of verbs) {
            const h = v && v.hindi ? v.hindi.trim() : '';
            if (h && !coreSet.has(h) && !seen.has(h)) {
              seen.add(h);
              clean.push(v);
            } else {
              removedCount++;
            }
          }
          safeStorage.setItem('hindi_custom_verbs', JSON.stringify(clean));
          this.verbs = [...(window.VERB_CURRICULUM || []), ...clean];
          this.flashcardsList = [...this.verbs];
        }
      }

      // 2. Vocab
      const storedVocab = safeStorage.getItem('hindi_custom_vocab');
      if (storedVocab) {
        let vocab = JSON.parse(storedVocab);
        if (Array.isArray(vocab)) {
          const coreSet = new Set((window.VOCAB_CURRICULUM || []).map(w => (w.hindi || '').trim()));
          const seen = new Set();
          const clean = [];
          for (const w of vocab) {
            const h = w && w.hindi ? w.hindi.trim() : '';
            if (h && !coreSet.has(h) && !seen.has(h)) {
              seen.add(h);
              clean.push(w);
            } else {
              removedCount++;
            }
          }
          safeStorage.setItem('hindi_custom_vocab', JSON.stringify(clean));
          this.vocab = [...(window.VOCAB_CURRICULUM || []), ...clean];
          this.vocabFlashcardsList = [...this.vocab];
        }
      }

      // 3. Matras
      const storedMatras = safeStorage.getItem('hindi_custom_matras');
      if (storedMatras) {
        let matras = JSON.parse(storedMatras);
        if (Array.isArray(matras)) {
          const coreSet = new Set((window.MATRA_CURRICULUM || []).map(w => (w.hindi || '').trim()));
          const seen = new Set();
          const clean = [];
          for (const w of matras) {
            const h = w && w.hindi ? w.hindi.trim() : '';
            if (h && !coreSet.has(h) && !seen.has(h)) {
              seen.add(h);
              clean.push(w);
            } else {
              removedCount++;
            }
          }
          safeStorage.setItem('hindi_custom_matras', JSON.stringify(clean));
          this.matraWords = [...(window.MATRA_CURRICULUM || []), ...clean];
          this.matraFlashcardsList = [...this.matraWords];
        }
      }
    } catch (e) {
      console.error('Failed to deduplicate custom words', e);
    }
    return removedCount;
  }

  // --- Quiz Best Time Storage Methods ---
  getQuizBestTime(section) {
    try {
      const raw = safeStorage.getItem(`hindi_best_time_${section}`);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.timeSeconds === 'number') {
        return parsed;
      }
    } catch (e) {
      console.error('Failed to get quiz best time for ' + section, e);
    }
    return null;
  }

  saveQuizBestTime(section, timeSeconds, score, total) {
    try {
      const data = {
        timeSeconds: Number(timeSeconds),
        score: Number(score),
        total: Number(total),
        timestamp: Date.now()
      };
      safeStorage.setItem(`hindi_best_time_${section}`, JSON.stringify(data));
      return data;
    } catch (e) {
      console.error('Failed to save quiz best time for ' + section, e);
      return null;
    }
  }

  clearQuizBestTime(section) {
    try {
      safeStorage.removeItem(`hindi_best_time_${section}`);
      return true;
    } catch (e) {
      console.error('Failed to clear quiz best time for ' + section, e);
      return false;
    }
  }

  // --- Targeted Custom Quiz Packs Storage ---
  loadCustomQuizPacks() {
    try {
      const stored = safeStorage.getItem('hindi_custom_quiz_packs');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          this.customQuizPacks = parsed;
          return;
        }
      }
    } catch (e) {
      console.warn("Failed to parse custom quiz packs from storage", e);
    }
    this.customQuizPacks = [];
  }

  saveCustomQuizPack(pack) {
    if (!pack || !pack.id || !pack.title || !Array.isArray(pack.items)) return false;
    const existingIndex = this.customQuizPacks.findIndex(p => p.id === pack.id);
    if (existingIndex >= 0) {
      this.customQuizPacks[existingIndex] = pack;
    } else {
      this.customQuizPacks.push(pack);
    }
    try {
      safeStorage.setItem('hindi_custom_quiz_packs', JSON.stringify(this.customQuizPacks));
    } catch (e) {}
    return true;
  }

  deleteCustomQuizPack(packId) {
    this.customQuizPacks = this.customQuizPacks.filter(p => p.id !== packId);
    try {
      safeStorage.setItem('hindi_custom_quiz_packs', JSON.stringify(this.customQuizPacks));
    } catch (e) {}
  }
}

const state = new AppState();


// --- 4.5 Global Modal Scroll Lock & Background Bleed Prevention ---
let savedBodyScrollY = 0;

function updateModalBodyLock() {
  if (typeof document === 'undefined') return;
  const openModals = document.querySelectorAll('.modal-overlay.open');
  if (openModals.length > 0) {
    if (!document.body.classList.contains('modal-open')) {
      savedBodyScrollY = window.scrollY || window.pageYOffset || (document.documentElement ? document.documentElement.scrollTop : 0) || 0;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.classList.add('modal-open');
      if (document.documentElement) {
        document.documentElement.classList.add('modal-open');
      }
    }
  } else {
    if (document.body.classList.contains('modal-open')) {
      document.body.classList.remove('modal-open');
      if (document.documentElement) {
        document.documentElement.classList.remove('modal-open');
      }
      document.body.style.paddingRight = '';
      if (typeof window !== 'undefined' && typeof window.scrollTo === 'function' && savedBodyScrollY > 0) {
        window.scrollTo(0, savedBodyScrollY);
      }
    }
  }
}

function initGlobalModalScrollControl() {
  const overlays = document.querySelectorAll('.modal-overlay');

  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'class') {
          updateModalBodyLock();
          break;
        }
      }
    });
    overlays.forEach(overlay => {
      observer.observe(overlay, { attributes: true, attributeFilter: ['class'] });
    });
  }

  overlays.forEach(overlay => {
    overlay.addEventListener('wheel', (e) => {
      if (e.target === overlay) {
        e.preventDefault();
      }
    }, { passive: false });
    overlay.addEventListener('touchmove', (e) => {
      if (e.target === overlay) {
        e.preventDefault();
      }
    }, { passive: false });
  });

  // Delegate wheel on modal headers to their respective modal bodies so header hovering also scrolls content
  document.querySelectorAll('.modal-box').forEach(box => {
    const header = box.querySelector('.modal-header');
    const body = box.querySelector('.modal-body');
    if (header && body) {
      header.addEventListener('wheel', (e) => {
        body.scrollTop += e.deltaY;
        e.preventDefault();
      }, { passive: false });
    }
  });

  updateModalBodyLock();
}

function toggleModalFullscreen(modalBox, btn) {
  if (!modalBox) return;
  const overlay = modalBox.closest('.modal-overlay');
  const isNowFullscreen = modalBox.classList.toggle('is-fullscreen');
  if (overlay) {
    overlay.classList.toggle('has-fullscreen', isNowFullscreen);
  }

  const targetBtn = btn || modalBox.querySelector('.modal-fullscreen-btn');
  if (targetBtn) {
    if (isNowFullscreen) {
      targetBtn.innerHTML = '🗗';
      targetBtn.setAttribute('aria-label', 'Restore modal window size');
      targetBtn.setAttribute('title', 'Restore window size (⛶)');
    } else {
      targetBtn.innerHTML = '⛶';
      targetBtn.setAttribute('aria-label', 'Maximize modal window');
      targetBtn.setAttribute('title', 'Toggle full screen (⛶)');
    }
  }

  announce(isNowFullscreen ? "Expanded modal to full screen" : "Restored modal window size");
}

function resetModalFullscreen(modalId) {
  const modal = typeof modalId === 'string' ? document.getElementById(modalId) : modalId;
  if (!modal) return;
  modal.classList.remove('has-fullscreen');
  const box = modal.querySelector('.modal-box, .launch-modal-box');
  if (box) box.classList.remove('is-fullscreen');
  const btn = modal.querySelector('.modal-fullscreen-btn');
  if (btn) {
    btn.innerHTML = '⛶';
    btn.setAttribute('aria-label', 'Maximize modal window');
    btn.setAttribute('title', 'Toggle full screen (⛶)');
  }
}

function initModalFullscreenControls() {
  document.querySelectorAll('.modal-fullscreen-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const box = btn.closest('.modal-box, .launch-modal-box');
      toggleModalFullscreen(box, btn);
    });
  });

  // Double-click modal header to maximize/restore (desktop title bar convention)
  document.querySelectorAll('.modal-header').forEach(header => {
    header.addEventListener('dblclick', (e) => {
      if (e.target.closest('button')) return;
      const box = header.closest('.modal-box');
      const btn = header.querySelector('.modal-fullscreen-btn');
      if (box) toggleModalFullscreen(box, btn);
    });
  });

  // Keyboard shortcut: Alt+Enter or Alt+F when modal is open to toggle fullscreen
  window.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' && e.altKey) || ((e.key === 'f' || e.key === 'F') && e.altKey)) {
      const activeModal = document.querySelector('.modal-overlay.open');
      if (activeModal) {
        e.preventDefault();
        const box = activeModal.querySelector('.modal-box, .launch-modal-box');
        const btn = activeModal.querySelector('.modal-fullscreen-btn');
        if (box) toggleModalFullscreen(box, btn);
      }
    }
  });
}


// --- 5. Application Lifecycle & Setup ---
document.addEventListener('DOMContentLoaded', () => {
  // Global modal background scroll containment & fullscreen controls
  initGlobalModalScrollControl();
  initModalFullscreenControls();

  // Navigation & Lifecycle
  initNav();

  // Verb Lab Controllers
  initVerbLibrary();
  initFlashcards();
  initSpeedMatch();
  initQuiz();
  initCustomVerbForm();
  initNotesIngestionStudio();

  // Vocabulary Studio Controllers (Nouns, Adjectives, etc.)
  initVocabLibrary();
  initVocabFlashcards();
  initVocabSpeedMatch();
  initVocabQuiz();
  initCustomVocabForm();
  initVocabNotesStudio();

  // Matra Reading Practice Controllers (मात्रा वाचन अभ्यास)
  initMatraLibrary();
  initMatraFlashcards();
  initMatraSpeedMatch();
  initMatraQuiz();
  initCustomMatraForm();

  // Focus Chooser & Launch Controller
  initFocusModal();

  // Data Cleanup & Lexicon Manager Controller
  initLexiconManager();
});


// --- 6. Unified WAI-ARIA Navigation & Module Switching ---
function initNav() {
  const navBtns = Array.from(document.querySelectorAll('.nav-btn'));

  navBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const tabType = btn.dataset.tabType;
      if (tabType) {
        state.activeTabType = tabType;
        updateActiveTabPanel(false);
      }
    });

    btn.addEventListener('keydown', (e) => {
      // When active tab is flashcards, allow Left and Right arrow keys to navigate cards rather than switching tabs
      if (state.activeTabType === 'flashcard' && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
        return;
      }

      let nextIndex = null;
      if (e.key === 'ArrowRight') {
        nextIndex = (index + 1) % navBtns.length;
      } else if (e.key === 'ArrowLeft') {
        nextIndex = (index - 1 + navBtns.length) % navBtns.length;
      } else if (e.key === 'Home') {
        nextIndex = 0;
      } else if (e.key === 'End') {
        nextIndex = navBtns.length - 1;
      }

      if (nextIndex !== null) {
        e.preventDefault();
        const nextBtn = navBtns[nextIndex];
        const tabType = nextBtn.dataset.tabType;
        if (tabType) {
          state.activeTabType = tabType;
          updateActiveTabPanel(true);
        }
      }
    });
  });

  // Apply initial module styling & active panel
  switchLearningModule(state.activeModule, false, false);
}

function updateActiveTabPanel(setFocus = false) {
  const tabType = state.activeTabType || 'explorer';
  const panelMap = {
    verbs: {
      explorer: 'verbs-tab',
      flashcard: 'flashcard-tab',
      match: 'match-tab',
      quiz: 'quiz-tab',
      notes: 'notes-tab'
    },
    vocab: {
      explorer: 'vocab-tab',
      flashcard: 'vocab-flashcard-tab',
      match: 'vocab-match-tab',
      quiz: 'vocab-quiz-tab',
      notes: 'vocab-notes-tab'
    },
    matras: {
      explorer: 'matra-tab',
      flashcard: 'matra-flashcard-tab',
      match: 'matra-match-tab',
      quiz: 'matra-quiz-tab',
      notes: 'matra-notes-tab'
    }
  };

  const targetPanelId = panelMap[state.activeModule]?.[tabType] || 'verbs-tab';
  state.currentTab = targetPanelId;
  const panels = document.querySelectorAll('.tab-content');
  panels.forEach(p => p.classList.remove('active'));

  const targetPanel = document.getElementById(targetPanelId);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  // When opening flashcards, focus card container so arrow keys and space work immediately
  if (tabType === 'flashcard' && !setFocus) {
    const cardContainerMap = {
      verbs: 'flashcard-container',
      vocab: 'vocab-flashcard-container',
      matras: 'matra-flashcard-container'
    };
    const cardEl = document.getElementById(cardContainerMap[state.activeModule]);
    if (cardEl) {
      setTimeout(() => cardEl.focus(), 30);
    }
  }

  // Update nav buttons active state
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    const isMatching = btn.dataset.tabType === tabType;
    btn.classList.toggle('active', isMatching);
    btn.setAttribute('aria-selected', isMatching ? 'true' : 'false');
    btn.setAttribute('tabindex', isMatching ? '0' : '-1');
    if (isMatching && setFocus) {
      btn.focus();
    }
  });

  const tabTitleMap = {
    explorer: state.activeModule === 'verbs' ? 'Verb Explorer' : (state.activeModule === 'matras' ? 'Matra Word Bank' : 'Vocabulary Explorer'),
    flashcard: state.activeModule === 'verbs' ? 'Verb Flashcards' : (state.activeModule === 'matras' ? 'Matra Reading Cards' : 'Vocabulary Flashcards'),
    match: 'Speed Match Drill',
    quiz: state.activeModule === 'verbs' ? "'ने' & Tense Quiz" : (state.activeModule === 'matras' ? 'Matra Sound Quiz' : 'Gender & Agreement Quiz'),
    notes: state.activeModule === 'verbs' ? 'Add Verb Notes' : (state.activeModule === 'matras' ? 'Custom Reading Words' : 'Add Vocabulary Notes')
  };
  announce(`${tabTitleMap[tabType] || tabType} tab selected`);

  // Trigger sub-view lifecycle updates
  if (tabType !== 'quiz') {
    stopAllQuizTimers();
  }

  if (tabType === 'match') {
    updateSpeedMatchTranslitUI();
  }

  if (state.activeModule === 'verbs') {
    if (tabType === 'match') startSpeedMatch();
    else if (tabType === 'quiz') startQuizSession();
    else if (tabType === 'flashcard') renderFlashcard();
  } else if (state.activeModule === 'vocab') {
    if (tabType === 'match') startVocabSpeedMatch();
    else if (tabType === 'quiz') startVocabQuizSession();
    else if (tabType === 'flashcard') renderVocabFlashcard();
  } else if (state.activeModule === 'matras') {
    if (tabType === 'match') startMatraSpeedMatch();
    else if (tabType === 'quiz') startMatraQuizSession();
    else if (tabType === 'flashcard') renderMatraFlashcard();
  }
}

function switchLearningModule(moduleName, savePreference = true, showNotification = true) {
  if (moduleName !== 'verbs' && moduleName !== 'vocab' && moduleName !== 'matras') return;
  stopAllQuizTimers();
  state.activeModule = moduleName;
  if (savePreference) {
    safeStorage.setItem('hindi_active_focus', moduleName);
  }

  // Update header focus toggle pills
  const verbsPill = document.getElementById('focus-verbs-btn');
  const vocabPill = document.getElementById('focus-vocab-btn');
  const matraPill = document.getElementById('focus-matra-btn');
  if (verbsPill) {
    verbsPill.classList.toggle('active', moduleName === 'verbs');
    verbsPill.setAttribute('aria-checked', moduleName === 'verbs' ? 'true' : 'false');
  }
  if (vocabPill) {
    vocabPill.classList.toggle('active', moduleName === 'vocab');
    vocabPill.setAttribute('aria-checked', moduleName === 'vocab' ? 'true' : 'false');
  }
  if (matraPill) {
    matraPill.classList.toggle('active', moduleName === 'matras');
    matraPill.setAttribute('aria-checked', moduleName === 'matras' ? 'true' : 'false');
  }

  // Update title subtitle and navigation labels
  const titleSub = document.getElementById('app-title-sub');
  if (titleSub) {
    if (moduleName === 'verbs') {
      titleSub.textContent = '(हिन्दी क्रियाशाला • Verb Lab)';
    } else if (moduleName === 'vocab') {
      titleSub.textContent = '(हिन्दी शब्दशाला • Vocabulary Studio)';
    } else {
      titleSub.textContent = '(हिन्दी मात्रा वाचन • Matra Reading Lab)';
    }
  }

  const explorerText = document.getElementById('nav-text-explorer');
  const flashcardText = document.getElementById('nav-text-flashcard');
  const quizText = document.getElementById('nav-text-quiz');
  const notesText = document.getElementById('nav-text-notes');

  if (explorerText) explorerText.textContent = moduleName === 'verbs' ? 'Verb Explorer' : (moduleName === 'matras' ? 'Matra Bank' : 'Vocab Explorer');
  if (flashcardText) flashcardText.textContent = moduleName === 'verbs' ? 'Verb Cards' : (moduleName === 'matras' ? 'Reading Cards' : 'Vocab Cards');
  if (quizText) quizText.textContent = moduleName === 'verbs' ? "'ने' & Tense Quiz" : (moduleName === 'matras' ? 'Matra Sound Quiz' : 'Targeted & Vocab Quiz');
  if (notesText) notesText.textContent = moduleName === 'verbs' ? 'Add Verb Notes' : (moduleName === 'matras' ? 'Custom Words' : 'Add Vocab Notes');

  // Activate appropriate panel
  updateActiveTabPanel(false);

  // Close focus selection modal if open
  closeFocusModal();

  if (showNotification) {
    let friendlyName = 'Verb Lab (क्रियाशाला)';
    if (moduleName === 'vocab') friendlyName = 'Vocabulary Studio (शब्दशाला)';
    if (moduleName === 'matras') friendlyName = 'Matra Reading Lab (मात्रा वाचन अभ्यास)';
    announce(`Switched to ${friendlyName}`);
    showToast(`Active Practice: ${friendlyName}`, 'info', 3000);
  }
}

// --- 7. Verb Explorer Module ---
function initVerbLibrary() {
  const searchInput = document.getElementById('verb-search');
  const clusterChips = document.querySelectorAll('.filter-chip[data-cluster]');
  const neChips = document.querySelectorAll('.filter-chip[data-ne]');

  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    renderVerbGrid();
  });

  clusterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      clusterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.clusterFilter = chip.dataset.cluster;
      renderVerbGrid();
      announce(`Filtered by cluster: ${chip.textContent.trim()}`);
    });
  });

  neChips.forEach(chip => {
    chip.addEventListener('click', () => {
      neChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.neFilter = chip.dataset.ne;
      renderVerbGrid();
      announce(`Filtered by past 'ने' rule: ${chip.textContent.trim()}`);
    });
  });

  renderVerbGrid();
}

function getVerbImperatives(verb) {
  if (verb && verb.conjugations && verb.conjugations.imperative) {
    const imp = verb.conjugations.imperative;
    if (imp.tum || imp.aap) {
      return {
        tu: imp.tu || '',
        tum: imp.tum || '',
        aap: imp.aap || ''
      };
    }
  }

  const rawHindi = (verb?.hindi || '').trim();
  const rawStem = (verb?.stem || '').replace(/\s*\([^)]*\)/, '').trim() || (rawHindi.endsWith('ना') ? rawHindi.slice(0, -2) : rawHindi);

  if (rawHindi === 'करना') return { tu: 'कर', tum: 'करो', aap: 'कीजिए' };
  if (rawHindi === 'लेना') return { tu: 'ले', tum: 'लो', aap: 'लीजिए' };
  if (rawHindi === 'देना') return { tu: 'दे', tum: 'दो', aap: 'दीजिए' };
  if (rawHindi === 'पीना') return { tu: 'पी', tum: 'पियो', aap: 'पीजिए' };
  if (rawHindi === 'जाना') return { tu: 'जा', tum: 'जाओ', aap: 'जाइए' };
  if (rawHindi === 'होना') return { tu: 'हो', tum: 'होओ', aap: 'होइए' };

  let tum = '';
  let aap = '';

  if (rawStem.endsWith('ा') || rawStem.endsWith('े') || rawStem.endsWith('ै') || rawStem.endsWith('ो')) {
    tum = rawStem + 'ओ';
    aap = rawStem + 'इए';
  } else if (rawStem.endsWith('ी')) {
    tum = rawStem.slice(0, -1) + 'ियो';
    aap = rawStem.slice(0, -1) + 'ीजिए';
  } else if (rawStem.endsWith('ू')) {
    tum = rawStem.slice(0, -1) + 'ुओ';
    aap = rawStem.slice(0, -1) + 'ूजिए';
  } else {
    tum = rawStem + 'ो';
    aap = rawStem + 'िए';
  }

  return { tu: rawStem, tum, aap };
}

function renderVerbGrid() {
  const grid = document.getElementById('verb-grid');
  const countEl = document.getElementById('verb-count-label');
  
  const filtered = state.verbs.filter(v => {
    const matchesSearch = 
      v.hindi.includes(state.searchQuery) ||
      (v.roman && v.roman.toLowerCase().includes(state.searchQuery)) ||
      (v.english && v.english.toLowerCase().includes(state.searchQuery)) ||
      (v.stem && v.stem.toLowerCase().includes(state.searchQuery));

    const matchesCluster = state.clusterFilter === 'all' || v.cluster === state.clusterFilter;

    let matchesNe = true;
    if (state.neFilter === 'takes-ne') matchesNe = v.takesNe === true;
    if (state.neFilter === 'no-ne') matchesNe = v.takesNe === false;

    return matchesSearch && matchesCluster && matchesNe;
  });

  countEl.textContent = `Showing ${filtered.length} of ${state.verbs.length} verbs`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:3rem 1rem; color:var(--text-muted); background:white; border-radius:var(--radius); border:1px dashed var(--border);">
        <p style="font-size:1.1rem; font-weight:600; margin-bottom:0.5rem;">No matching verbs found</p>
        <p style="font-size:0.9rem;">Try adjusting your search terms or filters.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(v => {
    const isMastered = state.reviews[v.id] === 'good';
    const imp = getVerbImperatives(v);
    return `
      <div class="verb-card" data-id="${v.id}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="View conjugation for ${v.hindi} (${v.roman}) - ${v.english}">
        <div>
          <div class="card-top">
            <div>
              <div class="verb-hindi">${v.hindi}</div>
              <div class="verb-roman">${v.roman}</div>
            </div>
            <button class="audio-btn" data-audio="${v.hindi}" aria-label="Listen to pronunciation of ${v.hindi}">
              🔊
            </button>
          </div>
          <div class="verb-english">${v.english}</div>
          <div class="verb-stem-tag">Stem: <strong>${v.stem}</strong></div>

          <!-- Imperative Commands (tum & aap) -->
          <div class="verb-card-imperatives" aria-label="Imperative commands">
            <span class="verb-imp-label">Imperatives:</span>
            <div class="verb-imp-badge" title="तुम (familiar command)">
              <span class="verb-imp-pronoun">तुम:</span>
              <span class="verb-imp-val devanagari">${escapeHtml(imp.tum)}</span>
              <button type="button" class="audio-btn mini-imp-audio" data-audio="${escapeHtml(imp.tum)}" aria-label="Pronounce तुम ${escapeHtml(imp.tum)}" title="Listen to तुम ${escapeHtml(imp.tum)}">🔊</button>
            </div>
            <div class="verb-imp-badge" title="आप (respectful command)">
              <span class="verb-imp-pronoun">आप:</span>
              <span class="verb-imp-val devanagari">${escapeHtml(imp.aap)}</span>
              <button type="button" class="audio-btn mini-imp-audio" data-audio="${escapeHtml(imp.aap)}" aria-label="Pronounce आप ${escapeHtml(imp.aap)}" title="Listen to आप ${escapeHtml(imp.aap)}">🔊</button>
            </div>
          </div>
        </div>

        <div>
          <div class="card-badges">
            <span class="badge ${v.transitivity && v.transitivity.includes('Intransitive') ? 'badge-intr' : 'badge-tr'}">
              ${v.transitivity || 'Transitive'}
            </span>
            <span class="badge ${v.takesNe ? 'badge-ne' : 'badge-no-ne'}">
              ${v.takesNe ? 'Takes ने in Past' : 'No ने in Past'}
            </span>
            ${v.isIrregular ? '<span class="badge badge-irreg">Irregular Past</span>' : ''}
            ${isMastered ? '<span class="badge" style="background:#dcfce7;color:#166534">✓ Mastered</span>' : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Audio button listeners
  grid.querySelectorAll('.audio-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      speakHindi(btn.dataset.audio, btn);
    });
  });

  // Card click & keyboard interaction -> Open detailed modal
  grid.querySelectorAll('.verb-card').forEach(card => {
    const verbId = card.dataset.id;
    card.addEventListener('click', () => {
      openVerbModal(verbId);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openVerbModal(verbId);
      }
    });
  });
}


// --- Helper: Retrieve or Synthesize Examples Across 3 Tenses ---
function getVerbTenseSentences(verb) {
  if (verb.examples && verb.examples.present && verb.examples.current && verb.examples.past) {
    return verb.examples;
  }
  const defaultPresent = verb.example ? {
    tense: "Present Habitual",
    hindi: verb.example.hindi,
    roman: verb.example.roman || "",
    english: verb.example.english,
    verbForm: verb.conjugations?.habitual?.m_sg || verb.stem,
    explanation: "Habitual aspect with daily routine"
  } : {
    tense: "Present Habitual",
    hindi: `वह रोज़ ${verb.conjugations?.habitual?.m_sg || verb.stem} है।`,
    roman: `Vah roz ${verb.roman || verb.stem} hai.`,
    english: `He ${verb.english} every day.`,
    verbForm: verb.conjugations?.habitual?.m_sg || verb.stem,
    explanation: "Daily routine habit"
  };

  const defaultCurrent = {
    tense: "Current Continuous",
    hindi: `वह अभी ${verb.stem || verb.hindi} रहा है।`,
    roman: `Vah abhī ${verb.roman || verb.stem} rahā hai.`,
    english: `He is ${verb.english} right now.`,
    verbForm: `${verb.stem} रहा है`,
    explanation: "Action happening right now"
  };

  const defaultPast = {
    tense: "Simple Past",
    hindi: verb.takesNe ? `उसने कल यह काम किया।` : `वह कल आया।`,
    roman: verb.takesNe ? `Usne kal yeh kām kiyā.` : `Vah kal āyā.`,
    english: verb.takesNe ? `He did this yesterday.` : `He came yesterday.`,
    verbForm: verb.conjugations?.past?.m_sg || verb.stem,
    explanation: verb.takesNe ? "Transitive (Takes 'ने')" : "Intransitive (NO 'ने')"
  };

  return {
    present: defaultPresent,
    current: defaultCurrent,
    past: defaultPast
  };
}

function renderHighlightedSentence(hindiText, verbForm) {
  if (!hindiText) return '';
  if (!verbForm) return escapeHtml(hindiText);
  const safeText = escapeHtml(hindiText);
  const cleanForm = verbForm.trim().split(' ')[0];
  if (cleanForm && safeText.includes(cleanForm)) {
    return safeText.replace(cleanForm, `<span class="sentence-verb-highlight">${cleanForm}</span>`);
  }
  return safeText;
}

// --- 8. WAI-ARIA Modal Dialog (Focus Trap & Escape Handling) ---
let lastFocusedElement = null;

function openVerbModal(verbId) {
  const verb = state.verbs.find(v => v.id === verbId);
  if (!verb) return;

  lastFocusedElement = document.activeElement;
  const modal = document.getElementById('verb-modal');
  const content = document.getElementById('modal-verb-content');
  const closeBtn = document.getElementById('modal-close-btn');
  const ex = getVerbTenseSentences(verb);
  const imp = getVerbImperatives(verb);

  content.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; padding-bottom:1rem; border-bottom:1px solid var(--border);">
      <div>
        <div style="font-size:2.5rem; font-weight:700; font-family:var(--font-hindi); color:var(--text-main); line-height:1.2;">
          ${verb.hindi}
        </div>
        <div style="font-size:1.15rem; color:var(--primary); font-weight:600; margin-top:0.2rem;">
          ${verb.roman}
        </div>
        <div style="font-size:1.35rem; font-weight:700; margin-top:0.25rem;">
          ${verb.english}
        </div>
      </div>
      <button class="audio-btn" style="width:48px; height:48px; font-size:1.2rem; flex:none;" id="modal-audio-btn" aria-label="Listen to pronunciation of ${verb.hindi}">
        🔊
      </button>
    </div>

    <!-- Verb Stem & Grammatical Attributes -->
    <div style="background:#f8fafc; padding:1.2rem 1.35rem; border-radius:12px; border:1px solid var(--border); box-shadow:0 1px 3px rgba(0,0,0,0.03);">
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:0.85rem;">
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted); display:block; font-weight:600;">Verb Stem</span>
          <strong style="font-size:1.05rem;">${verb.stem}</strong>
        </div>
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted); display:block; font-weight:600;">Transitivity & Past 'ने'</span>
          <strong style="color:${verb.takesNe ? '#c2410c' : '#1e40af'};">
            ${verb.transitivity || 'Transitive'} (${verb.takesNe ? 'Uses ने' : 'No ने'})
          </strong>
        </div>
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted); display:block; font-weight:600;">Curriculum Cluster</span>
          <strong>${verb.cluster || 'General'}</strong>
        </div>
      </div>
      ${verb.irregularNote ? `
        <div style="margin-top:0.85rem; padding-top:0.85rem; border-top:1px dashed var(--border); font-size:0.875rem; color:#b45309;">
          ⚠️ <strong>Irregularity Note:</strong> ${verb.irregularNote}
        </div>
      ` : ''}
    </div>

    <!-- Mnemonic Hook Card -->
    <div style="background:#fffbeb; border:1px solid #fef3c7; padding:1.2rem 1.35rem; border-radius:12px; box-shadow:0 1px 3px rgba(180,83,9,0.04);">
      <div class="section-label" style="color:#b45309; margin-bottom:0.4rem;">💡 Memory Mnemonic</div>
      <div style="color:#92400e; font-size:0.95rem; line-height:1.5;">
        ${verb.mnemonic || 'Focus on the stem ' + verb.stem + ' and pair it with daily actions.'}
      </div>
    </div>

    <!-- Conjugation Matrix -->
    <div>
      <div class="section-label">Conjugation Matrix</div>
      <div style="overflow-x:auto; border-radius:10px; border:1px solid var(--border); margin-top:0.6rem;">
        <table class="conjugation-table" style="margin-top:0; border:none;">
          <thead>
            <tr>
              <th>Tense / Aspect</th>
              <th>Masc. Singular</th>
              <th>Fem. Singular</th>
              <th>Masc. Plural / Formal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Present Habitual</strong></td>
              <td class="hindi-cell">${verb.conjugations?.habitual?.m_sg || '-'}</td>
              <td class="hindi-cell">${verb.conjugations?.habitual?.f_sg || '-'}</td>
              <td class="hindi-cell">${verb.conjugations?.habitual?.m_pl || '-'}</td>
            </tr>
            <tr>
              <td><strong>Present Continuous</strong></td>
              <td class="hindi-cell">${verb.conjugations?.continuous?.m_sg || '-'}</td>
              <td class="hindi-cell">${verb.conjugations?.continuous?.f_sg || '-'}</td>
              <td class="hindi-cell">${verb.conjugations?.continuous?.m_pl || '-'}</td>
            </tr>
            <tr>
              <td><strong>Simple Past</strong></td>
              <td class="hindi-cell">${verb.conjugations?.past?.m_sg || '-'}</td>
              <td class="hindi-cell">${verb.conjugations?.past?.f_sg || '-'}</td>
              <td class="hindi-cell">${verb.conjugations?.past?.m_pl || '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Imperative Forms -->
      <div style="margin-top:1rem; background:#fffdf5; border:1px solid #fed7aa; padding:0.9rem 1.25rem; border-radius:10px;">
        <span style="font-size:0.825rem; font-weight:700; color:#9a3412; text-transform:uppercase; letter-spacing:0.04em;">Imperative Commands:</span>
        <div style="display:flex; gap:1.75rem; margin-top:0.45rem; font-size:0.9rem; flex-wrap:wrap; align-items:center;">
          <div style="display:inline-flex; align-items:center; gap:0.4rem;">
            <span style="color:var(--text-muted); font-size:0.85rem;">तू (intimate):</span>
            <span class="devanagari" style="font-weight:700; color:var(--primary); font-size:1.15rem;">${escapeHtml(imp.tu || '-')}</span>
            ${imp.tu ? `<button type="button" class="audio-btn mini-imp-audio modal-imp-audio" data-audio="${escapeHtml(imp.tu)}" aria-label="Pronounce तू ${escapeHtml(imp.tu)}" title="Listen to तू ${escapeHtml(imp.tu)}">🔊</button>` : ''}
          </div>
          <div style="display:inline-flex; align-items:center; gap:0.4rem;">
            <span style="color:var(--text-muted); font-size:0.85rem;">तुम (familiar):</span>
            <span class="devanagari" style="font-weight:700; color:var(--primary); font-size:1.15rem;">${escapeHtml(imp.tum || '-')}</span>
            ${imp.tum ? `<button type="button" class="audio-btn mini-imp-audio modal-imp-audio" data-audio="${escapeHtml(imp.tum)}" aria-label="Pronounce तुम ${escapeHtml(imp.tum)}" title="Listen to तुम ${escapeHtml(imp.tum)}">🔊</button>` : ''}
          </div>
          <div style="display:inline-flex; align-items:center; gap:0.4rem;">
            <span style="color:var(--text-muted); font-size:0.85rem;">आप (respectful):</span>
            <span class="devanagari" style="font-weight:700; color:var(--primary); font-size:1.15rem;">${escapeHtml(imp.aap || '-')}</span>
            ${imp.aap ? `<button type="button" class="audio-btn mini-imp-audio modal-imp-audio" data-audio="${escapeHtml(imp.aap)}" aria-label="Pronounce आप ${escapeHtml(imp.aap)}" title="Listen to आप ${escapeHtml(imp.aap)}">🔊</button>` : ''}
          </div>
        </div>
      </div>
    </div>

    <!-- Real-World Usage Examples in All 3 Tenses -->
    <div>
      <div class="section-label">Real-World Usage Examples (Present, Current & Past)</div>
      <div class="modal-examples-grid">
        <!-- Present Habitual -->
        <div class="modal-example-card tense-present">
          <div style="flex:1;">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.3rem;">
              <span class="sentence-badge badge-tense-present">⏳ Present Habitual</span>
              <span class="sentence-aspect-note">${escapeHtml(ex.present.explanation || 'Daily routine & habits')}</span>
            </div>
            <div style="font-family:var(--font-hindi); font-size:1.25rem; font-weight:700; color:var(--text-main); line-height:1.35;">
              ${renderHighlightedSentence(ex.present.hindi, ex.present.verbForm)}
            </div>
            <div style="color:var(--primary); font-size:0.88rem; font-weight:600; margin:0.15rem 0;">
              ${escapeHtml(ex.present.roman || '')}
            </div>
            <div style="font-size:0.92rem; color:var(--text-muted);">
              "${escapeHtml(ex.present.english)}"
            </div>
          </div>
          <button class="sentence-audio-btn modal-sentence-audio-btn" data-audio-text="${escapeHtml(ex.present.hindi)}" aria-label="Listen to present tense example sentence" title="Listen to sentence">🔊</button>
        </div>

        <!-- Current Continuous -->
        <div class="modal-example-card tense-current">
          <div style="flex:1;">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.3rem;">
              <span class="sentence-badge badge-tense-current">⚡ Current Continuous</span>
              <span class="sentence-aspect-note">${escapeHtml(ex.current.explanation || 'Action happening right now')}</span>
            </div>
            <div style="font-family:var(--font-hindi); font-size:1.25rem; font-weight:700; color:var(--text-main); line-height:1.35;">
              ${renderHighlightedSentence(ex.current.hindi, ex.current.verbForm)}
            </div>
            <div style="color:var(--primary); font-size:0.88rem; font-weight:600; margin:0.15rem 0;">
              ${escapeHtml(ex.current.roman || '')}
            </div>
            <div style="font-size:0.92rem; color:var(--text-muted);">
              "${escapeHtml(ex.current.english)}"
            </div>
          </div>
          <button class="sentence-audio-btn modal-sentence-audio-btn" data-audio-text="${escapeHtml(ex.current.hindi)}" aria-label="Listen to current continuous example sentence" title="Listen to sentence">🔊</button>
        </div>

        <!-- Simple Past -->
        <div class="modal-example-card tense-past">
          <div style="flex:1;">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.3rem;">
              <span class="sentence-badge badge-tense-past">📜 Simple Past</span>
              <span class="sentence-aspect-note">${escapeHtml(ex.past.explanation || (verb.takesNe ? "Transitive (Takes 'ने')" : "Intransitive (NO 'ने')"))}</span>
            </div>
            <div style="font-family:var(--font-hindi); font-size:1.25rem; font-weight:700; color:var(--text-main); line-height:1.35;">
              ${renderHighlightedSentence(ex.past.hindi, ex.past.verbForm)}
            </div>
            <div style="color:var(--primary); font-size:0.88rem; font-weight:600; margin:0.15rem 0;">
              ${escapeHtml(ex.past.roman || '')}
            </div>
            <div style="font-size:0.92rem; color:var(--text-muted);">
              "${escapeHtml(ex.past.english)}"
            </div>
          </div>
          <button class="sentence-audio-btn modal-sentence-audio-btn" data-audio-text="${escapeHtml(ex.past.hindi)}" aria-label="Listen to past tense example sentence" title="Listen to sentence">🔊</button>
        </div>
      </div>
    </div>

    <!-- Management & Data Cleanup Footer -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; padding-top:1rem; border-top:1px solid var(--border); flex-wrap:wrap; gap:0.5rem;">
      <div style="font-size:0.85rem;">
        ${!(window.VERB_CURRICULUM || []).some(v => v.hindi === verb.hindi) 
          ? '<span class="lexicon-badge-custom">✏️ Custom Imported Verb</span>' 
          : '<span class="lexicon-badge-core">🔒 Core Curriculum</span>'}
      </div>
      <div style="display:flex; gap:0.5rem;">
        <button type="button" class="action-btn nav-card modal-edit-in-manager-btn" style="font-size:0.85rem; padding:0.4rem 0.85rem;">
          🛠️ Edit in Data Manager
        </button>
        ${!(window.VERB_CURRICULUM || []).some(v => v.hindi === verb.hindi) ? `
          <button type="button" class="action-btn again modal-delete-word-btn" style="font-size:0.85rem; padding:0.4rem 0.85rem;">
            🗑️ Delete Verb
          </button>
        ` : ''}
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  const modalBody = document.getElementById('modal-verb-content');
  if (modalBody) modalBody.scrollTop = 0;
  updateModalBodyLock();
  announce(`Opened conjugation sheet for ${verb.hindi}, ${verb.roman}`);

  setTimeout(() => {
    if (closeBtn && typeof closeBtn.focus === 'function') closeBtn.focus();
  }, 50);

  document.getElementById('modal-audio-btn')?.addEventListener('click', (e) => {
    speakHindi(verb.hindi, e.currentTarget);
  });
  modal.querySelectorAll('.modal-sentence-audio-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const text = btn.getAttribute('data-audio-text');
      if (text) speakHindi(text, btn);
    });
  });
  modal.querySelectorAll('.modal-imp-audio').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const text = btn.getAttribute('data-audio');
      if (text) speakHindi(text, btn);
    });
  });

  modal.querySelector('.modal-edit-in-manager-btn')?.addEventListener('click', () => {
    closeVerbModal();
    openLexiconManager(verb.hindi, 'verbs');
  });

  modal.querySelector('.modal-delete-word-btn')?.addEventListener('click', () => {
    if (confirm(`Are you sure you want to delete "${verb.hindi}" from your active verb deck?`)) {
      state.deleteCustomVerb(verb.hindi);
      closeVerbModal();
      renderVerbGrid();
      showToast(`Deleted verb "${verb.hindi}".`, 'info');
      announce(`Deleted verb ${verb.hindi}`);
    }
  });
}

function closeVerbModal() {
  clearSpeakingButtonState();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  const modal = document.getElementById('verb-modal');
  if (!modal || !modal.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  resetModalFullscreen('verb-modal');
  updateModalBodyLock();
  announce("Closed verb conjugation sheet");

  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

// Modal keyboard trap and close listener
document.getElementById('modal-close-btn')?.addEventListener('click', closeVerbModal);

document.getElementById('verb-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'verb-modal') {
    closeVerbModal();
  }
});

document.getElementById('verb-modal')?.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeVerbModal();
    return;
  }

  if (e.key === 'Tab') {
    const modal = document.getElementById('verb-modal');
    const focusable = Array.from(modal.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});


// --- 9. Flashcards & Spaced Repetition Module with Keyboard Shortcuts ---
function initFlashcards() {
  const cardContainer = document.getElementById('flashcard-container');
  const cardInner = document.getElementById('flashcard-inner');
  const toggleTransBtn = document.getElementById('toggle-translit-btn');
  const toggleDirectionBtn = document.getElementById('toggle-direction-btn');
  const shuffleBtn = document.getElementById('shuffle-cards-btn');
  const prevBtn = document.getElementById('prev-card-btn');
  const nextBtn = document.getElementById('next-card-btn');
  const againBtn = document.getElementById('card-again-btn');
  const goodBtn = document.getElementById('card-good-btn');

  function flipCurrentCard() {
    state.isFlipped = !state.isFlipped;
    cardInner.classList.toggle('flipped', state.isFlipped);
    const verb = state.flashcardsList[state.flashIndex];
    if (verb) {
      if (state.isFlipped) {
        announce(`Revealed: ${state.showEnglishFirst ? verb.hindi : verb.english}. Stem: ${verb.stem}.`);
      } else {
        announce(`Prompt: ${state.showEnglishFirst ? verb.english : verb.hindi}`);
      }
    }
  }

  cardContainer?.addEventListener('click', (e) => {
    // Prevent flipping when clicking tense pills, audio buttons, or interactive controls
    if (e.target.closest('.tense-selector-bar, .tense-pill-btn, .sentence-audio-btn, .audio-btn, button')) {
      return;
    }
    flipCurrentCard();
  });

  cardContainer?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      flipCurrentCard();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      e.stopPropagation();
      goToPrevCard();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      e.stopPropagation();
      goToNextCard();
    }
  });

  function cycleFlashcardTense() {
    const order = ['present', 'current', 'past', 'all'];
    const curIdx = order.indexOf(state.flashcardTense);
    const nextIdx = (curIdx + 1) % order.length;
    state.flashcardTense = order[nextIdx];
    renderFlashcard();
    const names = {
      present: 'Present Habitual',
      current: 'Current Continuous',
      past: 'Simple Past',
      all: 'All 3 Tenses'
    };
    announce(`Switched to ${names[state.flashcardTense]}`);
  }

  function playCurrentSentenceAudio() {
    const verb = state.flashcardsList[state.flashIndex];
    if (!verb) return;
    const ex = getVerbTenseSentences(verb);
    const tense = state.flashcardTense === 'all' ? 'present' : state.flashcardTense;
    const targetSentence = ex[tense] || ex.present;
    if (targetSentence && targetSentence.hindi) {
      const activeBtn = document.querySelector(`.flash-sentence-card.tense-${tense} .sentence-audio-btn`) || document.querySelector('.sentence-audio-btn');
      speakHindi(targetSentence.hindi, activeBtn);
    }
  }

  // Global flashcard shortcuts when in Flashcard tab
  window.addEventListener('keydown', (e) => {
    if (state.activeModule !== 'verbs' || state.activeTabType !== 'flashcard') return;
    const isModalOpen = document.getElementById('verb-modal')?.classList.contains('open') ||
                        document.getElementById('focus-modal')?.classList.contains('open') ||
                        document.getElementById('lexicon-manager-modal')?.classList.contains('open');
    if (isModalOpen) return;

    // Avoid double handling if event was already handled on cardContainer
    if (e.target === cardContainer || (cardContainer && cardContainer.contains(e.target))) return;

    // Avoid hijacking when typing in an input or textarea
    const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

    if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'p') {
      e.preventDefault();
      goToPrevCard();
    } else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'n') {
      e.preventDefault();
      goToNextCard();
    } else if (e.key === ' ' || (e.key === 'Enter' && document.activeElement !== cardContainer && !document.activeElement.classList.contains('action-btn'))) {
      e.preventDefault();
      flipCurrentCard();
    } else if (e.key.toLowerCase() === 'a' || e.key.toLowerCase() === 'l') {
      e.preventDefault();
      playCurrentCardAudio();
    } else if (e.key.toLowerCase() === 't') {
      e.preventDefault();
      cycleFlashcardTense();
    } else if (e.key.toLowerCase() === 'e') {
      e.preventDefault();
      playCurrentSentenceAudio();
    } else if (e.key === '1') {
      e.preventDefault();
      markCardReview();
    } else if (e.key === '2') {
      e.preventDefault();
      markCardMastered();
    } else if (e.key.toLowerCase() === 's') {
      e.preventDefault();
      shuffleCards();
    }
  });

  function playCurrentCardAudio() {
    const cur = state.flashcardsList[state.flashIndex];
    if (!cur) return;
    const btn = state.isFlipped 
      ? (document.getElementById('flash-back-audio') || document.getElementById('flash-front-audio'))
      : (document.getElementById('flash-front-audio') || document.getElementById('flash-back-audio'));
    speakHindi(cur.hindi, btn);
  }

  function goToPrevCard() {
    clearSpeakingButtonState();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (state.flashIndex > 0) {
      state.flashIndex--;
      resetCardFlip();
      renderFlashcard();
    }
  }

  function goToNextCard() {
    clearSpeakingButtonState();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (state.flashIndex < state.flashcardsList.length - 1) {
      state.flashIndex++;
      resetCardFlip();
      renderFlashcard();
    }
  }

  function markCardReview() {
    const cur = state.flashcardsList[state.flashIndex];
    if (cur) {
      state.markVerb(cur.id, 'again');
      announce(`Marked ${cur.hindi} for review.`);
      advanceFlashcard();
    }
  }

  function markCardMastered() {
    const cur = state.flashcardsList[state.flashIndex];
    if (cur) {
      state.markVerb(cur.id, 'good');
      announce(`Marked ${cur.hindi} as mastered.`);
      advanceFlashcard();
    }
  }

  function shuffleCards() {
    clearSpeakingButtonState();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    state.flashcardsList.sort(() => Math.random() - 0.5);
    state.flashIndex = 0;
    resetCardFlip();
    renderFlashcard();
    announce("Flashcards shuffled.");
  }

  toggleTransBtn?.addEventListener('click', () => {
    state.hideTransliteration = !state.hideTransliteration;
    toggleTransBtn.classList.toggle('active', state.hideTransliteration);
    toggleTransBtn.textContent = state.hideTransliteration ? "Devanagari Only (Hard)" : "Show Romanization";
    renderFlashcard();
    announce(state.hideTransliteration ? "Transliteration hidden" : "Transliteration visible");
  });

  toggleDirectionBtn?.addEventListener('click', () => {
    state.showEnglishFirst = !state.showEnglishFirst;
    toggleDirectionBtn.classList.toggle('active', state.showEnglishFirst);
    toggleDirectionBtn.textContent = state.showEnglishFirst ? "Prompt: English" : "Prompt: Hindi";
    resetCardFlip();
    renderFlashcard();
    announce(state.showEnglishFirst ? "Prompt set to English" : "Prompt set to Hindi");
  });

  shuffleBtn?.addEventListener('click', shuffleCards);
  prevBtn?.addEventListener('click', goToPrevCard);
  nextBtn?.addEventListener('click', goToNextCard);
  againBtn?.addEventListener('click', markCardReview);
  goodBtn?.addEventListener('click', markCardMastered);

  renderFlashcard();
}

function resetCardFlip() {
  state.isFlipped = false;
  document.getElementById('flashcard-inner')?.classList.remove('flipped');
}

function advanceFlashcard() {
  clearSpeakingButtonState();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (state.flashIndex < state.flashcardsList.length - 1) {
    state.flashIndex++;
  } else {
    state.flashIndex = 0; // loop around
  }
  resetCardFlip();
  renderFlashcard();
}

function renderSentenceCardMarkup(sentence, tenseKey, translitDisplay) {
  const badgeLabels = {
    present: '⏳ Present Habitual',
    current: '⚡ Current Continuous',
    past: '📜 Simple Past'
  };
  return `
    <div class="flash-sentence-card tense-${tenseKey}">
      <div class="sentence-header">
        <span class="sentence-badge badge-tense-${tenseKey}">
          ${badgeLabels[tenseKey] || sentence.tense}
        </span>
        <span class="sentence-aspect-note">${escapeHtml(sentence.explanation || sentence.tense)}</span>
      </div>
      <div class="sentence-body">
        <div class="sentence-content">
          <div class="sentence-hindi">${renderHighlightedSentence(sentence.hindi, sentence.verbForm)}</div>
          <div class="sentence-roman" style="${translitDisplay}">${escapeHtml(sentence.roman || '')}</div>
          <div class="sentence-english">"${escapeHtml(sentence.english)}"</div>
        </div>
        <button class="sentence-audio-btn" data-audio-text="${escapeHtml(sentence.hindi)}" aria-label="Listen to ${sentence.tense} sentence" title="Listen to sentence (Key E)">
          🔊
        </button>
      </div>
    </div>
  `;
}

function renderFlashcard() {
  if (!state.flashcardsList.length) return;
  const verb = state.flashcardsList[state.flashIndex];
  const progressEl = document.getElementById('flash-progress');
  const frontContent = document.getElementById('card-front-content');
  const backContent = document.getElementById('card-back-content');

  progressEl.textContent = `Card ${state.flashIndex + 1} of ${state.flashcardsList.length}`;

  const translitDisplay = state.hideTransliteration ? 'display:none;' : '';
  const ex = getVerbTenseSentences(verb);
  const imp = getVerbImperatives(verb);
  const activeTense = state.flashcardTense || 'present';

  let sentencesHtml = '';
  if (activeTense === 'all') {
    sentencesHtml = `
      <div class="flash-sentences-wrap">
        ${renderSentenceCardMarkup(ex.present, 'present', translitDisplay)}
        ${renderSentenceCardMarkup(ex.current, 'current', translitDisplay)}
        ${renderSentenceCardMarkup(ex.past, 'past', translitDisplay)}
      </div>
    `;
  } else {
    const s = ex[activeTense] || ex.present;
    sentencesHtml = `
      <div class="flash-sentences-wrap">
        ${renderSentenceCardMarkup(s, activeTense, translitDisplay)}
      </div>
    `;
  }

  const tenseSelectorHtml = `
    <div class="tense-selector-bar" role="tablist" aria-label="Sentence tense selection">
      <button class="tense-pill-btn ${activeTense === 'present' ? 'active' : ''}" data-tense="present" role="tab" aria-selected="${activeTense === 'present'}" title="Review Present Habitual sentence (Key T)">
        <span>⏳</span> Present
      </button>
      <button class="tense-pill-btn ${activeTense === 'current' ? 'active' : ''}" data-tense="current" role="tab" aria-selected="${activeTense === 'current'}" title="Review Current Continuous sentence (Key T)">
        <span>⚡</span> Current
      </button>
      <button class="tense-pill-btn ${activeTense === 'past' ? 'active' : ''}" data-tense="past" role="tab" aria-selected="${activeTense === 'past'}" title="Review Simple Past sentence (Key T)">
        <span>📜</span> Past
      </button>
      <button class="tense-pill-btn pill-all ${activeTense === 'all' ? 'active' : ''}" data-tense="all" role="tab" aria-selected="${activeTense === 'all'}" title="View all 3 tenses together">
        <span>☰</span> All 3
      </button>
    </div>
  `;

  if (!state.showEnglishFirst) {
    // Front: Hindi -> Back: English
    frontContent.innerHTML = `
      <div class="flash-hindi">${verb.hindi}</div>
      <div class="flash-roman" style="${translitDisplay}">${verb.roman}</div>
      <button class="audio-btn" id="flash-front-audio" style="margin-top:0.5rem;" aria-label="Pronounce ${verb.hindi}" title="Listen to pronunciation (Key A)">🔊</button>
      <div class="flash-prompt">${IS_TOUCH_DEVICE ? 'Tap' : 'Click or press Space'} to reveal English meaning</div>
    `;

    const imperativesHtml = `
      <div class="flash-imperatives-card" aria-label="Imperative commands">
        <span class="flash-imp-header">⚡ Imperatives:</span>
        <div class="flash-imp-badge" title="तुम (familiar command)">
          <span class="flash-imp-pronoun">तुम:</span>
          <span class="flash-imp-word devanagari">${escapeHtml(imp.tum)}</span>
          <button type="button" class="audio-btn mini-imp-audio flash-imp-audio-btn" data-audio="${escapeHtml(imp.tum)}" aria-label="Pronounce तुम ${escapeHtml(imp.tum)}" title="Listen to तुम ${escapeHtml(imp.tum)}">🔊</button>
        </div>
        <div class="flash-imp-badge" title="आप (respectful command)">
          <span class="flash-imp-pronoun">आप:</span>
          <span class="flash-imp-word devanagari">${escapeHtml(imp.aap)}</span>
          <button type="button" class="audio-btn mini-imp-audio flash-imp-audio-btn" data-audio="${escapeHtml(imp.aap)}" aria-label="Pronounce आप ${escapeHtml(imp.aap)}" title="Listen to आप ${escapeHtml(imp.aap)}">🔊</button>
        </div>
      </div>
    `;

    backContent.innerHTML = `
      <div class="flash-english">${escapeHtml(verb.english)}</div>
      <div class="flash-meta-bar">
        <span class="flash-meta-tag">Stem: <strong>${escapeHtml(verb.stem)}</strong></span>
        <span class="flash-meta-tag" style="color:${verb.takesNe ? '#c2410c' : '#1e40af'}; font-weight:700;">
          ${escapeHtml(verb.transitivity || 'Transitive')} (${verb.takesNe ? "Past 'ने'" : "No 'ने'"})
        </span>
        <button class="audio-btn" id="flash-back-audio" style="width:34px; height:34px; font-size:0.95rem; margin-left:0.25rem;" aria-label="Pronounce verb infinitive ${verb.hindi}" title="Listen to verb infinitive (Key A)">🔊</button>
      </div>
      <div class="flash-mnemonic">
        💡 <strong>Hook:</strong> ${escapeHtml(verb.mnemonic || 'Focus on root sound.')}
      </div>
      ${imperativesHtml}
      ${tenseSelectorHtml}
      ${sentencesHtml}
    `;
  } else {
    // Front: English -> Back: Hindi
    frontContent.innerHTML = `
      <div class="flash-english">${escapeHtml(verb.english)}</div>
      <div class="flash-prompt">What is the Hindi infinitive? (Click or Space to flip)</div>
    `;

    const imperativesHtml = `
      <div class="flash-imperatives-card" aria-label="Imperative commands">
        <span class="flash-imp-header">⚡ Imperatives:</span>
        <div class="flash-imp-badge" title="तुम (familiar command)">
          <span class="flash-imp-pronoun">तुम:</span>
          <span class="flash-imp-word devanagari">${escapeHtml(imp.tum)}</span>
          <button type="button" class="audio-btn mini-imp-audio flash-imp-audio-btn" data-audio="${escapeHtml(imp.tum)}" aria-label="Pronounce तुम ${escapeHtml(imp.tum)}" title="Listen to तुम ${escapeHtml(imp.tum)}">🔊</button>
        </div>
        <div class="flash-imp-badge" title="आप (respectful command)">
          <span class="flash-imp-pronoun">आप:</span>
          <span class="flash-imp-word devanagari">${escapeHtml(imp.aap)}</span>
          <button type="button" class="audio-btn mini-imp-audio flash-imp-audio-btn" data-audio="${escapeHtml(imp.aap)}" aria-label="Pronounce आप ${escapeHtml(imp.aap)}" title="Listen to आप ${escapeHtml(imp.aap)}">🔊</button>
        </div>
      </div>
    `;

    backContent.innerHTML = `
      <div class="flash-hindi" style="font-size:2.75rem; margin-bottom:0.2rem;">${verb.hindi}</div>
      <div class="flash-roman" style="${translitDisplay}; margin-bottom:0.4rem;">${verb.roman}</div>
      <div class="flash-meta-bar">
        <span class="flash-meta-tag">Stem: <strong>${escapeHtml(verb.stem)}</strong></span>
        <span class="flash-meta-tag" style="color:${verb.takesNe ? '#c2410c' : '#1e40af'}; font-weight:700;">
          ${escapeHtml(verb.transitivity || 'Transitive')} (${verb.takesNe ? "Past 'ने'" : "No 'ने'"})
        </span>
        <button class="audio-btn" id="flash-back-audio" style="width:34px; height:34px; font-size:0.95rem; margin-left:0.25rem;" aria-label="Pronounce verb infinitive ${verb.hindi}" title="Listen to verb infinitive (Key A)">🔊</button>
      </div>
      <div class="flash-mnemonic">
        💡 <strong>Hook:</strong> ${escapeHtml(verb.mnemonic || 'Practice writing the verb.')}
      </div>
      ${imperativesHtml}
      ${tenseSelectorHtml}
      ${sentencesHtml}
    `;
  }

  document.getElementById('flash-front-audio')?.addEventListener('click', (e) => {
    e.stopPropagation();
    speakHindi(verb.hindi, e.currentTarget);
  });
  document.getElementById('flash-back-audio')?.addEventListener('click', (e) => {
    e.stopPropagation();
    speakHindi(verb.hindi, e.currentTarget);
  });
  backContent.querySelectorAll('.tense-pill-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      state.flashcardTense = btn.getAttribute('data-tense');
      renderFlashcard();
      announce(`Switched to ${btn.getAttribute('data-tense')} tense`);
    });
  });
  backContent.querySelectorAll('.sentence-audio-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const text = btn.getAttribute('data-audio-text');
      if (text) speakHindi(text, btn);
    });
  });
  backContent.querySelectorAll('.flash-imp-audio-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const text = btn.getAttribute('data-audio');
      if (text) speakHindi(text, btn);
    });
  });
}


// --- Speed Match Shared Transliteration Toggle Engine ---
function updateSpeedMatchTranslitUI() {
  const isHidden = !!state.matchHideTransliteration;

  const sections = ['match-tab', 'vocab-match-tab', 'matra-match-tab'];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hide-translit', isHidden);
  });

  const buttons = [
    document.getElementById('match-toggle-translit-btn'),
    document.getElementById('vocab-match-toggle-translit-btn'),
    document.getElementById('matra-match-toggle-translit-btn')
  ];

  buttons.forEach(btn => {
    if (!btn) return;
    btn.classList.toggle('active', isHidden);
    btn.setAttribute('aria-pressed', isHidden ? 'true' : 'false');
    const label = btn.querySelector('.match-translit-label');
    if (label) {
      label.textContent = isHidden ? "Show Romanization" : "Hide Romanization";
    } else {
      btn.textContent = isHidden ? "🔤 Show Romanization" : "🔤 Hide Romanization";
    }
    btn.title = isHidden
      ? "Show Roman transliterations (Shortcut: T)"
      : "Hide Roman transliterations to focus on Hindi script (Shortcut: T)";
  });

  document.querySelectorAll('.match-roman').forEach(el => {
    el.style.display = isHidden ? 'none' : '';
  });
}

function toggleSpeedMatchTransliteration() {
  state.matchHideTransliteration = !state.matchHideTransliteration;
  state.vocabMatchHideTransliteration = state.matchHideTransliteration;
  state.matraMatchHideTransliteration = state.matchHideTransliteration;

  safeStorage.setItem('hindi_match_hide_translit', state.matchHideTransliteration ? 'true' : 'false');
  updateSpeedMatchTranslitUI();

  if (state.matchHideTransliteration) {
    announce("Roman transliterations hidden. Focusing on Hindi script.");
    showToast("🔤 Romanization Hidden — Devanagari Only", "info", 2000);
  } else {
    announce("Roman transliterations visible.");
    showToast("🔤 Romanization Visible", "info", 2000);
  }
}

// --- 10. Speed Match Game Module with Keyboard Navigation ---
function initSpeedMatch() {
  document.getElementById('restart-match-btn')?.addEventListener('click', startSpeedMatch);
  document.getElementById('match-toggle-translit-btn')?.addEventListener('click', toggleSpeedMatchTransliteration);
  updateSpeedMatchTranslitUI();

  // Keyboard shortcut: T to toggle Romanization in Speed Match
  window.addEventListener('keydown', (e) => {
    if (state.activeTabType !== 'match') return;
    const isModalOpen = document.querySelector('.modal-overlay.open');
    if (isModalOpen) return;
    const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

    if (e.key.toLowerCase() === 't') {
      e.preventDefault();
      toggleSpeedMatchTransliteration();
    }
  });
}

function startSpeedMatch() {
  const hindiCol = document.getElementById('match-hindi-col');
  const englishCol = document.getElementById('match-english-col');
  const statusEl = document.getElementById('match-status');

  const isHidden = !!state.matchHideTransliteration;
  const matchTab = document.getElementById('match-tab');
  if (matchTab) matchTab.classList.toggle('hide-translit', isHidden);

  const shuffled = [...state.verbs].sort(() => Math.random() - 0.5);
  const subset = shuffled.slice(0, 6);

  state.matchGamePairs = subset;
  state.selectedHindi = null;
  state.selectedEnglish = null;
  state.matchedCount = 0;
  state.gameStartTime = Date.now();

  statusEl.textContent = "Click or use keyboard to select a Hindi verb, then match its English definition!";
  announce("New Speed Match round started. 6 pairs to match.");

  const hindiItems = [...subset].sort(() => Math.random() - 0.5);
  const englishItems = [...subset].sort(() => Math.random() - 0.5);

  hindiCol.innerHTML = hindiItems.map(item => `
    <div class="match-tile hindi" data-id="${item.id}" tabindex="0" role="button" aria-pressed="false" aria-label="Hindi verb: ${item.hindi}, transliterated as ${item.roman}">
      <span class="match-hindi-word">${item.hindi}</span>
      <div class="match-roman" style="${isHidden ? 'display:none;' : ''}; font-size:0.75rem; color:var(--text-muted); font-family:var(--font-sans);">${item.roman}</div>
    </div>
  `).join('');

  englishCol.innerHTML = englishItems.map(item => `
    <div class="match-tile" data-id="${item.id}" tabindex="0" role="button" aria-pressed="false" aria-label="English meaning: ${item.english}">
      ${item.english}
    </div>
  `).join('');

  function handleHindiSelect(tile) {
    if (tile.classList.contains('matched')) return;

    if (tile.classList.contains('selected') || state.selectedHindi === tile.dataset.id) {
      tile.classList.remove('selected');
      tile.setAttribute('aria-pressed', 'false');
      state.selectedHindi = null;
      const v = state.verbs.find(x => x.id === tile.dataset.id);
      if (v) announce(`Deselected ${v.hindi}`);
      return;
    }

    hindiCol.querySelectorAll('.match-tile').forEach(t => {
      t.classList.remove('selected');
      t.setAttribute('aria-pressed', 'false');
    });
    tile.classList.add('selected');
    tile.setAttribute('aria-pressed', 'true');
    state.selectedHindi = tile.dataset.id;
    
    const v = state.verbs.find(x => x.id === tile.dataset.id);
    if (v) {
      speakHindi(v.hindi);
      announce(`Selected ${v.hindi}`);
    }

    checkMatch();
  }

  function handleEnglishSelect(tile) {
    if (tile.classList.contains('matched')) return;

    if (tile.classList.contains('selected') || state.selectedEnglish === tile.dataset.id) {
      tile.classList.remove('selected');
      tile.setAttribute('aria-pressed', 'false');
      state.selectedEnglish = null;
      const v = state.verbs.find(x => x.id === tile.dataset.id);
      if (v) announce(`Deselected English: ${v.english}`);
      return;
    }

    englishCol.querySelectorAll('.match-tile').forEach(t => {
      t.classList.remove('selected');
      t.setAttribute('aria-pressed', 'false');
    });
    tile.classList.add('selected');
    tile.setAttribute('aria-pressed', 'true');
    state.selectedEnglish = tile.dataset.id;
    
    const v = state.verbs.find(x => x.id === tile.dataset.id);
    if (v) {
      announce(`Selected English: ${v.english}`);
    }

    checkMatch();
  }

  hindiCol.querySelectorAll('.match-tile').forEach(tile => {
    tile.addEventListener('click', () => handleHindiSelect(tile));
    tile.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleHindiSelect(tile);
      }
    });
  });

  englishCol.querySelectorAll('.match-tile').forEach(tile => {
    tile.addEventListener('click', () => handleEnglishSelect(tile));
    tile.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleEnglishSelect(tile);
      }
    });
  });
}

function checkMatch() {
  if (!state.selectedHindi || !state.selectedEnglish) return;

  const hindiTile = document.querySelector(`#match-hindi-col .match-tile[data-id="${state.selectedHindi}"]`);
  const englishTile = document.querySelector(`#match-english-col .match-tile[data-id="${state.selectedEnglish}"]`);

  if (state.selectedHindi === state.selectedEnglish) {
    // Correct Match
    hindiTile.classList.remove('selected');
    englishTile.classList.remove('selected');
    hindiTile.classList.add('matched');
    englishTile.classList.add('matched');
    hindiTile.setAttribute('aria-disabled', 'true');
    englishTile.setAttribute('aria-disabled', 'true');

    state.matchedCount++;
    const v = state.verbs.find(x => x.id === state.selectedHindi);
    state.selectedHindi = null;
    state.selectedEnglish = null;

    const remaining = 6 - state.matchedCount;
    if (state.matchedCount === 6) {
      const elapsed = Math.round((Date.now() - state.gameStartTime) / 1000);
      document.getElementById('match-status').innerHTML = `
        🎉 <strong>शानदार! (Splendid!)</strong> All 6 pairs cleared in <strong>${elapsed} seconds</strong>!
      `;
      announce(`Splendid! All 6 pairs cleared in ${elapsed} seconds.`);
    } else {
      announce(`Correct match! ${v ? v.hindi + ' matched with ' + v.english : ''}. ${remaining} pairs remaining.`);
    }
  } else {
    // Incorrect match
    hindiTile.classList.add('error-shake');
    englishTile.classList.add('error-shake');
    announce("Not a match. Try again.");

    setTimeout(() => {
      hindiTile.classList.remove('error-shake', 'selected');
      englishTile.classList.remove('error-shake', 'selected');
      hindiTile.setAttribute('aria-pressed', 'false');
      englishTile.setAttribute('aria-pressed', 'false');
      state.selectedHindi = null;
      state.selectedEnglish = null;
    }, 450);
  }
}


// --- Quiz Timer & Best Time Shared Engine ---
function formatQuizTime(totalSeconds) {
  if (totalSeconds == null || isNaN(totalSeconds) || totalSeconds < 0) return '--';
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  if (m > 0) {
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  }
  return `${s}s`;
}

function formatBestRecord(record) {
  if (!record || typeof record.timeSeconds !== 'number') return '--';
  const timeStr = formatQuizTime(record.timeSeconds);
  if (record.score != null && record.total != null) {
    return `${timeStr} (${record.score}/${record.total})`;
  }
  return timeStr;
}

function getVocabQuizStorageKey() {
  const topic = state.vocabQuizTopic || 'mixed';
  return topic === 'mixed' ? 'vocab' : `vocab_${topic}`;
}

function getVerbsQuizStorageKey() {
  const topic = state.verbsQuizTopic || 'mixed';
  return topic === 'mixed' ? 'verbs' : `verbs_${topic}`;
}

function getQuizStorageKeyForSection(section) {
  if (section === 'vocab' || section.startsWith('vocab')) return getVocabQuizStorageKey();
  if (section === 'verbs' || section.startsWith('verbs')) return getVerbsQuizStorageKey();
  return section;
}

function updateQuizBestDisplay(section) {
  const domPrefix = section.startsWith('vocab') ? 'vocab' : (section.startsWith('verbs') ? 'verbs' : section);
  const textEl = document.getElementById(`${domPrefix}-quiz-best-text`);
  const clearBtn = document.getElementById(`clear-${domPrefix}-best-btn`);
  
  const storageKey = getQuizStorageKeyForSection(section);
  const best = state.getQuizBestTime(storageKey);

  if (textEl) {
    if (best) {
      textEl.textContent = `Best: ${formatBestRecord(best)}`;
    } else {
      textEl.textContent = 'Best: --';
    }
  }
  if (clearBtn) {
    clearBtn.style.display = best ? 'inline-flex' : 'none';
  }
}

function promptClearQuizBestTime(section) {
  const domPrefix = section.startsWith('vocab') ? 'vocab' : (section.startsWith('verbs') ? 'verbs' : section);
  const storageKey = getQuizStorageKeyForSection(section);

  let sectionTitle = "Quiz";
  if (domPrefix === 'vocab') {
    const pack = (typeof getActiveVocabQuizPack === 'function') ? getActiveVocabQuizPack() : null;
    sectionTitle = pack ? pack.title : "Gender & Agreement Quiz";
  } else if (domPrefix === 'verbs') {
    const topic = state.verbsQuizTopic;
    const titles = {
      'mixed': "Verb Grammar & 'ने' Quiz",
      'ne-rule': "Transitive Past 'ने' Rule Quiz",
      'irregular-past': "Irregular Past Forms Quiz",
      'continuous-agreement': "Continuous Agreement Quiz"
    };
    sectionTitle = titles[topic] || "Verb Quiz";
  } else if (domPrefix === 'matras') {
    sectionTitle = "Matra Reading Quiz";
  }

  const confirmed = window.confirm(`Clear your best time record for ${sectionTitle}?`);
  if (!confirmed) return;

  state.clearQuizBestTime(storageKey);
  updateQuizBestDisplay(domPrefix);

  // If results screen is currently displayed, refresh the completion UI
  const completeBestEl = document.getElementById(`${domPrefix}-complete-best-record`);
  const completeClearBtn = document.getElementById(`finish-${domPrefix}-clear-best-btn`);
  if (completeBestEl) {
    completeBestEl.textContent = 'None';
  }
  if (completeClearBtn) {
    completeClearBtn.style.display = 'none';
  }
  announce(`Best time record for ${sectionTitle} has been cleared.`);
}

function startQuizTimer(section) {
  stopQuizTimer(section);

  const startTimeKey = `${section}QuizStartTime`;
  const timerIntervalKey = `${section}QuizTimerInterval`;

  state[startTimeKey] = Date.now();
  const textEl = document.getElementById(`${section}-quiz-timer-text`);
  if (textEl) textEl.textContent = '0s';

  state[timerIntervalKey] = setInterval(() => {
    const elapsed = Math.floor((Date.now() - state[startTimeKey]) / 1000);
    const el = document.getElementById(`${section}-quiz-timer-text`);
    if (el) el.textContent = formatQuizTime(elapsed);
  }, 1000);
}

function stopQuizTimer(section) {
  const startTimeKey = `${section}QuizStartTime`;
  const timerIntervalKey = `${section}QuizTimerInterval`;

  if (state[timerIntervalKey]) {
    clearInterval(state[timerIntervalKey]);
    state[timerIntervalKey] = null;
  }

  if (!state[startTimeKey]) return 0;
  const elapsed = Math.max(1, Math.round((Date.now() - state[startTimeKey]) / 1000));
  state[startTimeKey] = null;
  return elapsed;
}

function stopAllQuizTimers() {
  stopQuizTimer('verbs');
  stopQuizTimer('vocab');
  stopQuizTimer('matras');
}

function checkAndUpdateQuizBestTime(section, elapsedSeconds, score, total) {
  const currentBest = state.getQuizBestTime(section);
  let isNewBest = false;

  if (!currentBest) {
    isNewBest = true;
  } else if (score > currentBest.score) {
    // Higher score beats lower score regardless of time
    isNewBest = true;
  } else if (score === currentBest.score && elapsedSeconds < currentBest.timeSeconds) {
    // Same score in faster time
    isNewBest = true;
  }

  if (isNewBest) {
    state.saveQuizBestTime(section, elapsedSeconds, score, total);
  }

  return {
    isNewBest,
    currentBest: isNewBest ? { timeSeconds: elapsedSeconds, score, total } : currentBest,
    elapsedSeconds
  };
}


// --- 11. Conjugation & Past 'Ne' Quiz Module ---
function updateVerbsQuizTopicUI() {
  const topicSelect = document.getElementById('verbs-quiz-topic-select');
  if (topicSelect && state.verbsQuizTopic) {
    topicSelect.value = state.verbsQuizTopic;
  }
  const descEl = document.getElementById('verbs-quiz-topic-desc');
  const descMap = {
    'mixed': "Drills for the Ergative 'ने' rule, irregular past forms, and gender agreement across all verbs.",
    'ne-rule': "Focused drill on Transitivity and the Past Tense Ergative 'ने' rule (subject marker & object agreement).",
    'irregular-past': "Focused drill on irregular masculine singular, plural, and feminine past stems (गया, किया, दिया, लिया, हुआ).",
    'continuous-agreement': "Focused drill on continuous aspect ('रहा है', 'रही है', 'रहे हैं') and subject agreement."
  };
  if (descEl) {
    descEl.textContent = descMap[state.verbsQuizTopic] || descMap.mixed;
  }
}

function initQuiz() {
  document.getElementById('next-quiz-btn')?.addEventListener('click', nextQuestion);
  document.getElementById('restart-quiz-btn')?.addEventListener('click', startQuizSession);
  document.getElementById('clear-verbs-best-btn')?.addEventListener('click', () => promptClearQuizBestTime('verbs'));
  
  const topicSelect = document.getElementById('verbs-quiz-topic-select');
  topicSelect?.addEventListener('change', (e) => {
    state.verbsQuizTopic = e.target.value;
    updateVerbsQuizTopicUI();
    startQuizSession();
  });

  updateVerbsQuizTopicUI();
  updateQuizBestDisplay('verbs');
}

function generateVerbTopicQuizQuestions(topicId) {
  if (!topicId || topicId === 'mixed') {
    return generateQuizBank();
  }

  if (topicId === 'ne-rule') {
    const bank = [];
    state.verbs.forEach(v => {
      bank.push({
        type: "Past Tense 'ने' Rule Focus",
        question: `Does the verb <strong>${v.hindi}</strong> (${v.roman} - ${v.english}) take <strong>'ने'</strong> in the simple past tense?`,
        options: [
          { text: "Yes, it takes 'ने' (Transitive rule)", isCorrect: v.takesNe },
          { text: "No, it never takes 'ने'", isCorrect: !v.takesNe }
        ],
        explanation: v.takesNe
          ? `Correct! <strong>${v.hindi}</strong> is transitive. In the past tense, the subject takes 'ने' and the verb agrees with the direct object (e.g., 'मैंने खाना खाया').`
          : `Correct! <strong>${v.hindi}</strong> does NOT take 'ने' (e.g., 'वह गया / वह बोली'). Intransitive verbs and key exceptions (बोलना, लाना, भूलना) avoid 'ने'.`
      });
    });
    return bank.sort(() => Math.random() - 0.5).slice(0, 10);
  }

  if (topicId === 'irregular-past') {
    const bank = [];
    const irregulars = state.verbs.filter(v => v.isIrregular);
    irregulars.forEach(v => {
      const pastForms = v.conjugations?.past;
      if (pastForms) {
        bank.push({
          type: "Irregular Past Form Drill",
          question: `What is the masculine singular simple past form of <strong>${v.hindi}</strong> (${v.roman} - ${v.english})?`,
          options: [
            { text: pastForms.m_sg, isCorrect: true },
            { text: v.stem + "ा", isCorrect: false },
            { text: v.hindi, isCorrect: false },
            { text: v.stem + "ता", isCorrect: false }
          ].sort(() => Math.random() - 0.5),
          explanation: `The past form of <strong>${v.hindi}</strong> is irregular: <strong>${pastForms.m_sg}</strong> (${pastForms.m_pl} / ${pastForms.f_sg}). Notice: ${v.irregularNote}.`
        });
      }
    });
    return bank.sort(() => Math.random() - 0.5).slice(0, 10);
  }

  if (topicId === 'continuous-agreement') {
    const bank = [];
    state.verbs.slice(0, 18).forEach(v => {
      if (v.conjugations?.continuous) {
        const isFem = Math.random() > 0.5;
        const correctEnd = isFem ? `${v.stem} रही है` : `${v.stem} रहा है`;
        const wrongEnd1 = isFem ? `${v.stem} रहा है` : `${v.stem} रही है`;
        const wrongEnd2 = `${v.stem} रहे हैं`;
        const wrongEnd3 = `${v.hindi} है`;

        bank.push({
          type: "Continuous Aspect Agreement",
          question: `How do you say "${isFem ? 'She' : 'He'} is ${v.english.replace(/^to /, '')}ing"?`,
          options: [
            { text: `वह ${correctEnd}`, isCorrect: true },
            { text: `वह ${wrongEnd1}`, isCorrect: false },
            { text: `वह ${wrongEnd2}`, isCorrect: false },
            { text: `वह ${wrongEnd3}`, isCorrect: false }
          ].sort(() => Math.random() - 0.5),
          explanation: `In Hindi continuous aspect, ${isFem ? 'feminine singular requires रही है' : 'masculine singular requires रहा है'} attached to stem <strong>${v.stem}</strong>.`
        });
      }
    });
    return bank.sort(() => Math.random() - 0.5).slice(0, 10);
  }

  return generateQuizBank();
}

function generateQuizBank() {
  const bank = [];

  // Question Type 1: Transitive past 'ने' rule
  state.verbs.slice(0, 15).forEach(v => {
    bank.push({
      type: "Past Tense 'ने' Rule",
      question: `Does the verb <strong>${v.hindi}</strong> (${v.roman} - ${v.english}) take <strong>'ने'</strong> in the simple past tense?`,
      options: [
        { text: "Yes, it takes 'ने' (Transitive rule)", isCorrect: v.takesNe },
        { text: "No, it never takes 'ने'", isCorrect: !v.takesNe }
      ],
      explanation: v.takesNe 
        ? `Correct! <strong>${v.hindi}</strong> is transitive. In the past tense, the subject takes 'ने' and the verb agrees with the direct object (e.g., 'मैंने खाना खाया').`
        : `Correct! <strong>${v.hindi}</strong> does NOT take 'ने' (e.g., 'वह गया / वह बोली'). Intransitive verbs and key exceptions (बोलना, लाना, भूलना) avoid 'ने'.`
    });
  });

  // Question Type 2: Irregular Past identification
  const irregulars = state.verbs.filter(v => v.isIrregular);
  irregulars.forEach(v => {
    const pastForms = v.conjugations?.past;
    if (pastForms) {
      bank.push({
        type: "Irregular Past Form",
        question: `What is the masculine singular simple past form of <strong>${v.hindi}</strong> (${v.roman} - ${v.english})?`,
        options: [
          { text: pastForms.m_sg, isCorrect: true },
          { text: v.stem + "ा", isCorrect: false },
          { text: v.hindi, isCorrect: false },
          { text: v.stem + "ता", isCorrect: false }
        ].sort(() => Math.random() - 0.5),
        explanation: `The past form of <strong>${v.hindi}</strong> is irregular: <strong>${pastForms.m_sg}</strong> (${pastForms.m_pl} / ${pastForms.f_sg}). Notice: ${v.irregularNote}.`
      });
    }
  });

  // Question Type 3: Agreement drill
  state.verbs.slice(0, 10).forEach(v => {
    if (v.conjugations?.continuous) {
      bank.push({
        type: "Continuous Agreement",
        question: `How do you say "She is ${v.english.replace(/^to /, '')}ing"?`,
        options: [
          { text: `वह ${v.stem} रही है`, isCorrect: true },
          { text: `वह ${v.stem} रहा है`, isCorrect: false },
          { text: `वह ${v.stem} रहे हैं`, isCorrect: false },
          { text: `वह ${v.hindi} है`, isCorrect: false }
        ].sort(() => Math.random() - 0.5),
        explanation: `In Hindi continuous aspect, a feminine singular subject requires <strong>'रही है'</strong> attached to the verb stem <strong>${v.stem}</strong>.`
      });
    }
  });

  return bank.sort(() => Math.random() - 0.5).slice(0, 10);
}

function startQuizSession() {
  state.quizQuestions = generateVerbTopicQuizQuestions(state.verbsQuizTopic);
  state.currentQuizIndex = 0;
  state.quizScore = 0;
  document.getElementById('quiz-score-badge').textContent = `Score: 0 / ${state.quizQuestions.length}`;
  startQuizTimer('verbs');
  updateQuizBestDisplay('verbs');
  renderQuizQuestion();
  announce("Quiz session started.");
}

function renderQuizQuestion() {
  const container = document.getElementById('quiz-card');
  const nextBtn = document.getElementById('next-quiz-btn');
  const restartBtn = document.getElementById('restart-quiz-btn');
  nextBtn.style.display = 'none';
  restartBtn.style.display = 'none';

  if (state.currentQuizIndex >= state.quizQuestions.length) {
    const elapsed = stopQuizTimer('verbs');
    const storageKey = getVerbsQuizStorageKey();
    const { isNewBest, currentBest } = checkAndUpdateQuizBestTime(storageKey, elapsed, state.quizScore, state.quizQuestions.length);
    updateQuizBestDisplay('verbs');

    container.innerHTML = `
      <div style="text-align:center; padding:2rem 0;">
        <div style="font-size:3rem; margin-bottom:0.5rem;">🎉</div>
        <h2 style="font-size:1.85rem; margin-bottom:0.5rem; color:var(--secondary);">Quiz Complete!</h2>
        <p style="font-size:1.15rem; color:var(--text-muted); margin-bottom:1rem;">
          You scored <strong>${state.quizScore} out of ${state.quizQuestions.length}</strong>!
        </p>

        ${isNewBest ? `
          <div class="quiz-new-best-banner">
            🏆 New Personal Best! <strong>${formatQuizTime(elapsed)}</strong> (${state.quizScore}/${state.quizQuestions.length})
          </div>
        ` : ''}

        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap; margin:1rem 0 1.5rem; font-size:1rem;">
          <div style="background:var(--bg); border:1px solid var(--border); padding:0.6rem 1.2rem; border-radius:var(--radius-sm);">
            ⏱️ Time Taken: <strong>${formatQuizTime(elapsed)}</strong>
          </div>
          <div style="background:var(--bg); border:1px solid var(--border); padding:0.6rem 1.2rem; border-radius:var(--radius-sm);">
            🏆 Best Record: <strong id="verbs-complete-best-record">${formatBestRecord(currentBest)}</strong>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; align-items:center; gap:0.6rem;">
          <button class="action-btn good" id="finish-restart-btn" style="max-width:240px; margin:0 auto;">
            Take Quiz Again
          </button>
          ${currentBest ? `
            <button type="button" class="action-btn text-danger-btn" id="finish-verbs-clear-best-btn" style="font-size:0.85rem; padding:0.35rem 0.9rem;">
              🗑️ Clear Best Time
            </button>
          ` : ''}
        </div>
      </div>
    `;
    announce(`Quiz complete. You scored ${state.quizScore} out of ${state.quizQuestions.length} in ${formatQuizTime(elapsed)}.`);
    document.getElementById('finish-restart-btn')?.addEventListener('click', startQuizSession);
    document.getElementById('finish-verbs-clear-best-btn')?.addEventListener('click', () => promptClearQuizBestTime('verbs'));
    return;
  }

  const q = state.quizQuestions[state.currentQuizIndex];

  container.innerHTML = `
    <div class="quiz-question-box">
      <div class="quiz-type-badge">${q.type}</div>
      <div class="quiz-question-text">${q.question}</div>
    </div>
    <div class="quiz-options" id="quiz-options-list" role="group" aria-label="Answer options">
      ${q.options.map((opt, i) => `
        <button class="option-btn" data-index="${i}">
          <span>${opt.text}</span>
          <span class="opt-status" aria-hidden="true"></span>
        </button>
      `).join('')}
    </div>
    <div class="quiz-explanation" id="quiz-explanation-box" style="display:none;" aria-live="polite"></div>
  `;

  const optionBtns = container.querySelectorAll('.option-btn');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedIndex = parseInt(btn.dataset.index);
      const isCorrect = q.options[selectedIndex].isCorrect;

      optionBtns.forEach((b, idx) => {
        b.disabled = true;
        if (q.options[idx].isCorrect) {
          b.classList.add('correct');
          b.querySelector('.opt-status').textContent = '✓';
        } else if (idx === selectedIndex) {
          b.classList.add('incorrect');
          b.querySelector('.opt-status').textContent = '✗';
        }
      });

      if (isCorrect) {
        state.quizScore++;
        document.getElementById('quiz-score-badge').textContent = `Score: ${state.quizScore} / ${state.quizQuestions.length}`;
        announce("Correct answer! " + q.explanation.replace(/<[^>]*>/g, ''));
      } else {
        announce("Incorrect. " + q.explanation.replace(/<[^>]*>/g, ''));
      }

      const expBox = document.getElementById('quiz-explanation-box');
      expBox.style.display = 'block';
      expBox.innerHTML = q.explanation;

      nextBtn.style.display = 'inline-block';
      nextBtn.focus();
    });
  });
}

function nextQuestion() {
  state.currentQuizIndex++;
  renderQuizQuestion();
}


// --- 12. Add Single Custom Verb Form ---
function initCustomVerbForm() {
  const form = document.getElementById('add-verb-form');
  const successNotice = document.getElementById('add-verb-success');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const hindi = document.getElementById('custom-hindi').value.trim();
    const roman = document.getElementById('custom-roman').value.trim();
    const english = document.getElementById('custom-english').value.trim();
    const transitivity = document.getElementById('custom-transitivity').value;
    const mnemonic = document.getElementById('custom-mnemonic').value.trim();
    const exampleHindi = document.getElementById('custom-example-hindi').value.trim();
    const exampleEnglish = document.getElementById('custom-example-english').value.trim();

    if (!hindi || !english) return;

    // Guarantee pure Latin script for transliteration; skip Devanagari in roman position
    const cleanRoman = (roman && isLatinScript(roman) && !containsDevanagari(roman))
      ? roman
      : devanagariToLatin(hindi);

    // Auto extract stem
    const stem = hindi.endsWith('ना') ? hindi.slice(0, -2) : hindi;
    const takesNe = transitivity === 'Transitive';

    const newVerb = {
      id: "custom-" + Date.now(),
      hindi,
      roman: cleanRoman,
      english,
      cluster: "Custom Added / My Notes",
      stem: `${stem} (${cleanRoman ? cleanRoman.replace(/nā$/, '') : ''})`,
      transitivity,
      takesNe,
      isIrregular: false,
      mnemonic: mnemonic || `Practicing ${hindi} from class notes.`,
      conjugations: {
        habitual: { m_sg: `${stem}ता है`, f_sg: `${stem}ती है`, m_pl: `${stem}ते हैं`, f_pl: `${stem}ती हैं` },
        continuous: { m_sg: `${stem} रहा है`, f_sg: `${stem} रही है`, m_pl: `${stem} रहे हैं`, f_pl: `${stem} रही हैं` },
        past: { m_sg: `${stem}ा`, m_pl: `${stem}े`, f_sg: `${stem}ी`, f_pl: `${stem}ीं` },
        imperative: { tu: stem, tum: `${stem}ो`, aap: `${stem}िए` }
      },
      example: exampleHindi ? {
        hindi: exampleHindi,
        roman: "",
        english: exampleEnglish || ""
      } : null
    };

    const isExisting = state.hasVerb(hindi);
    state.saveCustomVerb(newVerb);
    renderVerbGrid();

    form.reset();
    successNotice.style.display = 'block';
    if (isExisting) {
      successNotice.textContent = `✓ Verb "${hindi}" already existed in your deck and was updated!`;
      showToast(`Verb "${hindi}" updated in your deck.`, 'info');
      announce(`Verb ${hindi} updated in deck.`);
    } else {
      successNotice.textContent = `✓ Verb "${hindi}" successfully added to your deck!`;
      showToast(`Verb "${hindi}" added to your deck!`, 'success');
      announce(`Verb ${hindi} added successfully.`);
    }
    setTimeout(() => {
      successNotice.style.display = 'none';
    }, 4000);
  });

  const customHindiInput = document.getElementById('custom-hindi');
  const customRomanInput = document.getElementById('custom-roman');
  customHindiInput?.addEventListener('blur', () => {
    if (customRomanInput && !customRomanInput.value.trim() && customHindiInput.value.trim()) {
      customRomanInput.value = devanagariToLatin(customHindiInput.value.trim());
    }
  });
  customRomanInput?.addEventListener('blur', () => {
    const val = customRomanInput.value.trim();
    if (val && (containsDevanagari(val) || !isLatinScript(val))) {
      showToast("Romanisation must be in Latin script (Devanagari skipped).", "warning");
      customRomanInput.value = customHindiInput && customHindiInput.value.trim() 
        ? devanagariToLatin(customHindiInput.value.trim()) 
        : '';
    }
  });
}


// --- 12.5 Ingestion Data Quality & Anomaly Detection Helpers ---
function sanitizeExtractedNoise(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/\([^)]*[\u0900-\u097F]+[^)]*\)/g, '')
    .replace(/\[[^\]]*[\u0900-\u097F]+[^\]]*\]/g, '')
    .replace(/\([^)]*(?:unit|chapter|ch|page|pg|class|test|vocab|ex|notes?|verb|noun|adj|m|f|tr|intr)[^)]*\)/gi, '')
    .replace(/\[[^\]]*(?:unit|chapter|ch|page|pg|class|test|vocab|ex|notes?|verb|noun|adj|m|f|tr|intr)[^\]]*\]/gi, '')
    .replace(/\(\s*\)/g, '')
    .replace(/\[\s*\]/g, '')
    .replace(/^[\s\*\•\-\d\.\:\।\|\—\–\t]+/, '')
    .replace(/[\s\|\—\–\t\.\,\;\:\-]+$/, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function getVerbAnomalies(item) {
  const anomalies = [];
  const cleanHindi = (item.hindi || '').trim();
  const cleanEnglish = (item.english || '').trim();

  if (!cleanHindi || !containsDevanagari(cleanHindi)) {
    anomalies.push({ type: 'error', text: 'Not Devanagari' });
  } else if (!cleanHindi.endsWith('ना')) {
    anomalies.push({ type: 'warning', text: 'No -ना ending' });
  }

  if (/[.,;:|\\/\-]+$/.test(cleanHindi) || /[.,;:|\\/\-]+$/.test(cleanEnglish)) {
    anomalies.push({ type: 'warning', text: 'Trailing punctuation' });
  }

  if (/\([^)]*\)|\[[^\]]*\]/i.test(cleanEnglish)) {
    anomalies.push({ type: 'warning', text: 'Note noise' });
  }

  if (!cleanEnglish) {
    anomalies.push({ type: 'error', text: 'Missing English' });
  }

  if (item.isDuplicate) {
    anomalies.push({ type: 'dup', text: 'In Deck (Updates)' });
  }

  if (anomalies.length === 0) {
    anomalies.push({ type: 'valid', text: '✓ Ready' });
  }

  return anomalies;
}

function getVocabAnomalies(item) {
  const anomalies = [];
  const cleanHindi = (item.hindi || '').trim();
  const cleanEnglish = (item.english || '').trim();

  if (!cleanHindi || !containsDevanagari(cleanHindi)) {
    anomalies.push({ type: 'error', text: 'Not Devanagari' });
  }

  if (/[.,;:|\\/\-]+$/.test(cleanHindi) || /[.,;:|\\/\-]+$/.test(cleanEnglish)) {
    anomalies.push({ type: 'warning', text: 'Trailing punctuation' });
  }

  if (/\([^)]*\)|\[[^\]]*\]/i.test(cleanEnglish)) {
    anomalies.push({ type: 'warning', text: 'Note noise' });
  }

  if (!cleanEnglish) {
    anomalies.push({ type: 'error', text: 'Missing English' });
  }

  if (item.pos === 'Noun' && cleanHindi) {
    if ((cleanHindi.endsWith('ी') || cleanHindi.endsWith('िया')) && item.gender === 'Masculine') {
      anomalies.push({ type: 'warning', text: 'Check: Usually Fem (-ी)' });
    } else if (cleanHindi.endsWith('ा') && item.gender === 'Feminine') {
      anomalies.push({ type: 'warning', text: 'Check: Usually Masc (-ा)' });
    }
  }

  if (item.isDuplicate) {
    anomalies.push({ type: 'dup', text: 'In Deck (Updates)' });
  }

  if (anomalies.length === 0) {
    anomalies.push({ type: 'valid', text: '✓ Ready' });
  }

  return anomalies;
}

// --- 13. Smart Notes Ingestion & Parser Studio (Multiple Files & RTF Support) ---
function initNotesIngestionStudio() {
  const dropZone = document.getElementById('notes-drop-zone');
  const fileInput = document.getElementById('notes-file-input');
  const browseBtn = document.getElementById('browse-file-btn');
  const rawTextArea = document.getElementById('notes-raw-text');
  const loadSampleBtn = document.getElementById('load-sample-notes-btn');
  const analyzeBtn = document.getElementById('analyze-notes-btn');
  const previewSection = document.getElementById('parser-preview-section');
  const previewHeading = document.getElementById('preview-heading');
  const previewTableBody = document.getElementById('preview-table-body');
  const selectAllCheckbox = document.getElementById('select-all-preview');
  const selectedCountLabel = document.getElementById('preview-selected-count');
  const selectNewVerbsBtn = document.getElementById('select-new-verbs-btn');
  const cleanNoiseBtn = document.getElementById('clean-verbs-noise-btn');
  const confirmImportBtn = document.getElementById('confirm-import-btn');
  const successBanner = document.getElementById('import-success-banner');
  const exportDbBtn = document.getElementById('export-db-btn');
  const clearCustomBtn = document.getElementById('clear-custom-btn');
  const dbStatusLabel = document.getElementById('db-status-label');

  const fileStatusWrap = document.getElementById('ingest-file-status-wrap');
  const statusBannerWrap = document.getElementById('ingest-status-banner-wrap');
  const previewSearchInput = document.getElementById('preview-search-input');
  const previewSearchClearBtn = document.getElementById('preview-search-clear-btn');
  const previewSearchStatus = document.getElementById('preview-search-status');

  let extractedList = [];

  function updateDbStatus() {
    const stored = safeStorage.getItem('hindi_custom_verbs');
    let custom = [];
    if (stored) {
      try { custom = JSON.parse(stored); } catch (e) { custom = []; }
    }
    if (dbStatusLabel) {
      dbStatusLabel.textContent = `Total custom verbs stored locally: ${custom.length}`;
    }
  }
  updateDbStatus();

  function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  function setIngestState(status, data = {}) {
    if (status === 'idle') {
      if (statusBannerWrap) statusBannerWrap.innerHTML = '';
      if (fileStatusWrap) fileStatusWrap.style.display = 'none';
      return;
    }

    if (status === 'reading') {
      const isMulti = data.fileCount > 1;
      const title = isMulti ? `${data.fileCount} files (${data.fileNames?.join(', ')})` : data.fileName;
      const subtitle = isMulti 
        ? `${formatBytes(data.totalSize || 0)} &bull; Reading and decoding ${data.fileCount} files concurrently...`
        : `${formatBytes(data.fileSize || 0)} &bull; Reading and decoding file...`;

      if (fileStatusWrap) {
        fileStatusWrap.style.display = 'block';
        fileStatusWrap.innerHTML = `
          <div class="file-status-card">
            <div class="file-status-left">
              <span class="file-status-icon">${isMulti ? '📁' : (data.fileName?.endsWith('.rtf') ? '📄' : '📝')}</span>
              <div>
                <div class="file-status-name">${escapeHtml(title)}</div>
                <div class="file-status-meta">${subtitle}</div>
              </div>
            </div>
            <div class="spinner"></div>
          </div>
        `;
      }

      if (statusBannerWrap) {
        statusBannerWrap.innerHTML = `
          <div class="status-banner processing">
            <div class="spinner"></div>
            <div>
              <strong>Processing ${isMulti ? data.fileCount + ' files' : '"' + escapeHtml(data.fileName) + '"'}...</strong><br>
              <span style="font-size:0.85rem; opacity:0.9;">
                Decoding RTF formatting, unicode Devanagari characters, and extracting Hindi verbs ending in -ना...
              </span>
            </div>
          </div>
        `;
      }
      announce(`Reading and decoding ${isMulti ? data.fileCount + ' files' : data.fileName}`);
    } else if (status === 'success') {
      const isMulti = data.fileCount > 1;
      const title = isMulti ? `${data.fileCount} files loaded` : (data.fileName || 'Loaded Notes');
      const meta = isMulti
        ? `${data.charCount?.toLocaleString() || ''} characters decoded across ${data.fileCount} files &bull; <strong style="color:var(--accent-green);">${data.count} verbs detected</strong>`
        : `${data.charCount ? data.charCount.toLocaleString() + ' characters decoded &bull; ' : ''}<strong style="color:var(--accent-green);">${data.count} verbs detected</strong>`;

      let badgesHtml = '';
      if (isMulti && Array.isArray(data.fileSummaries)) {
        badgesHtml = `
          <div class="multi-file-pills-list">
            ${data.fileSummaries.map(s => `
              <span class="multi-file-badge">
                ${s.name.endsWith('.rtf') ? '📄' : '📝'} ${escapeHtml(s.name)} (${s.count} verbs)
              </span>
            `).join('')}
          </div>
        `;
      }

      if (fileStatusWrap) {
        fileStatusWrap.style.display = 'block';
        fileStatusWrap.innerHTML = `
          <div class="file-status-card">
            <div class="file-status-left" style="flex:1;">
              <span class="file-status-icon">✓</span>
              <div style="flex:1;">
                <div class="file-status-name">${escapeHtml(title)}</div>
                <div class="file-status-meta">${meta}</div>
                ${badgesHtml}
              </div>
            </div>
            <button type="button" class="action-btn nav-card" id="clear-selected-files-btn" style="flex:none; padding:0.35rem 0.75rem; font-size:0.8rem;">
              Clear All
            </button>
          </div>
        `;
        document.getElementById('clear-selected-files-btn')?.addEventListener('click', () => {
          rawTextArea.value = '';
          previewSection.style.display = 'none';
          extractedList = [];
          setIngestState('idle');
          announce("Notes cleared.");
        });
      }

      if (statusBannerWrap) {
        statusBannerWrap.innerHTML = `
          <div class="status-banner success">
            <h4>🎉 Successfully processed ${isMulti ? data.fileCount + ' files' : (data.fileName ? '"' + escapeHtml(data.fileName) + '"' : 'your notes')}!</h4>
            <p>
              Found <strong>${data.count} Hindi verbs</strong>. Review or edit definitions and transitivity in the table below, then click <strong>"Import Verbs to Deck"</strong>.
            </p>
          </div>
        `;
      }
      announce(`Successfully processed ${isMulti ? data.fileCount + ' files' : 'notes'}. Found ${data.count} verbs.`);
    } else if (status === 'empty') {
      const isMulti = data.fileCount > 1;
      if (fileStatusWrap) {
        fileStatusWrap.style.display = 'block';
        fileStatusWrap.innerHTML = `
          <div class="file-status-card">
            <div class="file-status-left">
              <span class="file-status-icon">⚠️</span>
              <div>
                <div class="file-status-name">${escapeHtml(isMulti ? data.fileCount + ' files' : (data.fileName || 'Loaded Notes'))}</div>
                <div class="file-status-meta">${data.charCount?.toLocaleString()} characters read &bull; 0 verbs detected</div>
              </div>
            </div>
          </div>
        `;
      }

      if (statusBannerWrap) {
        statusBannerWrap.innerHTML = `
          <div class="status-banner warning">
            <h4>⚠️ Files read successfully, but 0 verbs ending in "-ना" were found</h4>
            <p>
              We successfully read ${isMulti ? data.fileCount + ' files' : '<strong>' + escapeHtml(data.fileName || 'your notes') + '</strong>'} (${data.charCount?.toLocaleString()} characters), but did not detect verbs ending in Devanagari <em>-ना</em> (like पढ़ना, लिखना, जाना).
            </p>
            <div style="background:white; border:1px solid #fde68a; border-radius:6px; padding:0.65rem 0.85rem; margin:0.65rem 0; font-family:var(--font-sans); font-size:0.85rem; max-height:110px; overflow-y:auto; color:#451a03; white-space:pre-wrap;">${escapeHtml(data.textSnippet || '')}</div>
          </div>
        `;
      }
      announce("Files read successfully, but zero verbs were detected.");
    } else if (status === 'error') {
      if (statusBannerWrap) {
        statusBannerWrap.innerHTML = `
          <div class="status-banner error">
            <h4>❌ Could not process files</h4>
            <p>${escapeHtml(data.message || 'An unexpected error occurred while reading your files.')}</p>
          </div>
        `;
      }
      announce("Error processing files. " + data.message, 'assertive');
    }
  }

  browseBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (fileInput) fileInput.click();
  });

  dropZone?.addEventListener('click', (e) => {
    if (e.target !== browseBtn) {
      if (fileInput) fileInput.click();
    }
  });

  dropZone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });

  dropZone?.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));

  dropZone?.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer && e.dataTransfer.files.length) {
      handleMultipleFiles(Array.from(e.dataTransfer.files));
    }
  });

  fileInput?.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length) {
      handleMultipleFiles(Array.from(e.target.files));
      e.target.value = '';
    }
  });

  function readFileAsText(file) {
    return new Promise((resolve, reject) => {
      const cleanName = file.name.replace(/^.*[\\\/]/, '');
      const reader = new FileReader();

      reader.onerror = () => reject(new Error(`Failed to read "${cleanName}"`));
      reader.onabort = () => reject(new Error(`Read aborted for "${cleanName}"`));

      reader.onload = (evt) => {
        let content = evt.target.result;
        if (typeof content === 'string') {
          content = content.replace(/^\uFEFF/, ''); // Strip BOM
        }
        resolve({
          name: cleanName,
          size: file.size,
          content
        });
      };

      reader.readAsText(file);
    });
  }

  async function handleMultipleFiles(files) {
    if (!files || !files.length) return;

    const totalSize = files.reduce((acc, f) => acc + f.size, 0);
    const fileNames = files.map(f => f.name.replace(/^.*[\\\/]/, ''));

    setIngestState('reading', {
      fileCount: files.length,
      fileNames,
      totalSize,
      fileName: fileNames[0],
      fileSize: files[0].size
    });

    try {
      const readResults = await Promise.all(files.map(readFileAsText));
      
      let combinedContent = '';
      const allExtractedVerbs = [];
      const fileSummaries = [];
      let totalChars = 0;

      for (let i = 0; i < readResults.length; i++) {
        const item = readResults[i];
        let content = item.content;

        if (item.name.toLowerCase().endsWith('.json')) {
          try {
            const parsed = JSON.parse(content);
            if (Array.isArray(parsed)) {
              importJsonBatch(parsed);
              fileSummaries.push({ name: item.name, count: parsed.length });
              continue;
            }
          } catch (err) {
            console.error("JSON parse failed, treating as text", err);
          }
        }

        const isRtf = item.name.toLowerCase().endsWith('.rtf') || (typeof content === 'string' && content.trim().startsWith('{\\rtf'));
        if (isRtf) {
          content = convertRtfToPlainText(content);
        }

        totalChars += content.length;

        // Append to combined text display
        if (readResults.length > 1) {
          combinedContent += `\n\n// ==========================================\n// SOURCE FILE: ${item.name}\n// ==========================================\n` + content;
        } else {
          combinedContent = content;
        }

        const verbsFromFile = parseRawNotes(content, item.name);
        fileSummaries.push({ name: item.name, count: verbsFromFile.length });
        allExtractedVerbs.push(...verbsFromFile);
      }

      rawTextArea.value = combinedContent.trim();

      // Deduplicate verbs by Hindi infinitive, combining source tags
      const verbMap = new Map();
      allExtractedVerbs.forEach(v => {
        if (!verbMap.has(v.hindi)) {
          verbMap.set(v.hindi, { ...v });
        } else {
          const existing = verbMap.get(v.hindi);
          if (v.sourceFile && !existing.sourceFile.includes(v.sourceFile)) {
            existing.sourceFile += ', ' + v.sourceFile;
          }
          if ((!existing.english || existing.english.startsWith('to ')) && v.english && !v.english.startsWith('to ')) {
            existing.english = v.english;
          }
        }
      });

      extractedList = Array.from(verbMap.values()).map(item => {
        const isDup = state.hasVerb(item.hindi);
        return {
          ...item,
          isDuplicate: isDup,
          existingVerb: state.getVerb(item.hindi),
          selected: !isDup
        };
      });

      if (extractedList.length > 0) {
        setIngestState('success', {
          fileCount: files.length,
          fileNames,
          fileName: fileNames[0],
          count: extractedList.length,
          charCount: totalChars,
          fileSummaries
        });
        renderPreview();
        setTimeout(() => {
          if (previewSection && typeof previewSection.scrollIntoView === 'function') {
            previewSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        setIngestState('empty', {
          fileCount: files.length,
          fileNames,
          fileName: fileNames[0],
          charCount: totalChars,
          textSnippet: combinedContent.slice(0, 300)
        });
        renderPreview();
      }
    } catch (err) {
      console.error("Multi-file processing error:", err);
      setIngestState('error', {
        message: `Error parsing files: ${err.message || 'Unexpected failure reading files'}`
      });
    }
  }

  // --- Ultra-Fast, Non-Allocating RTF to Plaintext Scanner ---
  function convertRtfToPlainText(rtf) {
    if (!rtf || typeof rtf !== 'string') return '';
    if (!rtf.trim().startsWith('{\\rtf')) return rtf;

    const len = rtf.length;
    let text = '';
    let groupStack = 0;
    const skipGroupStack = [];
    const ucStack = [1];
    let i = 0;

    while (i < len) {
      const char = rtf[i];

      if (char === '{') {
        groupStack++;
        ucStack.push(ucStack[ucStack.length - 1]);
        i++;
        if (i < len && rtf[i] === '\\') {
          let k = i + 1;
          while (k < len && /[a-zA-Z*]/.test(rtf[k])) k++;
          const kw = rtf.slice(i + 1, k).toLowerCase();
          if (['*', 'fonttbl', 'colortbl', 'stylesheet', 'info', 'pict', 'header', 'footer'].includes(kw)) {
            skipGroupStack.push(groupStack);
          }
        }
        continue;
      }

      if (char === '}') {
        if (skipGroupStack.length > 0 && skipGroupStack[skipGroupStack.length - 1] === groupStack) {
          skipGroupStack.pop();
        }
        if (ucStack.length > 1) {
          ucStack.pop();
        }
        groupStack = Math.max(0, groupStack - 1);
        i++;
        continue;
      }

      if (skipGroupStack.length > 0) {
        if (char === '\\' && i + 1 < len) {
          i += 2;
        } else {
          i++;
        }
        continue;
      }

      if (char === '\\') {
        i++;
        if (i >= len) break;
        const c2 = rtf[i];

        if (c2 === '\\' || c2 === '{' || c2 === '}') {
          text += c2;
          i++;
        } else if (c2 === '\n' || c2 === '\r') {
          text += '\n';
          i++;
        } else if (c2 === '~') {
          text += ' ';
          i++;
        } else if (c2 === '-') {
          text += '-';
          i++;
        } else if (c2 === "'") {
          i++;
          if (i + 1 < len) {
            const hex = rtf.slice(i, i + 2);
            const code = parseInt(hex, 16);
            if (!isNaN(code)) text += String.fromCharCode(code);
            i += 2;
          }
        } else if (/[a-zA-Z]/.test(c2)) {
          let startKw = i;
          while (i < len && /[a-zA-Z]/.test(rtf[i])) i++;
          const kw = rtf.slice(startKw, i);

          let param = null;
          let startParam = i;
          if (i < len && (rtf[i] === '-' || /[0-9]/.test(rtf[i]))) {
            i++;
            while (i < len && /[0-9]/.test(rtf[i])) i++;
            param = parseInt(rtf.slice(startParam, i), 10);
          }

          if (i < len && rtf[i] === ' ') {
            i++;
          }

          if (kw === 'uc' && param !== null) {
            ucStack[ucStack.length - 1] = Math.max(0, param);
          } else if (kw === 'u' && param !== null) {
            let code = param;
            if (code < 0) code += 65536;
            if (code >= 0 && code <= 0x10FFFF) {
              try {
                text += String.fromCodePoint(code);
              } catch (e) {
                text += String.fromCharCode(code);
              }
            }
            const currentUc = ucStack[ucStack.length - 1];
            for (let skip = 0; skip < currentUc && i < len; skip++) {
              if (rtf[i] === '\\') {
                if (rtf[i + 1] === "'") {
                  i += 4;
                } else if (rtf[i + 1] === '\\' || rtf[i + 1] === '{' || rtf[i + 1] === '}') {
                  i += 2;
                } else {
                  break;
                }
              } else if (rtf[i] === '{' || rtf[i] === '}') {
                break;
              } else {
                i++;
              }
            }
          } else if (kw === 'par' || kw === 'line') {
            text += '\n';
          } else if (kw === 'tab') {
            text += '\t';
          }
        } else {
          i++;
        }
        continue;
      }

      text += char;
      i++;
    }

    return text
      .replace(/\r\n/g, '\n')
      .replace(/\r/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }
  window.convertRtfToPlainText = convertRtfToPlainText;

  loadSampleBtn?.addEventListener('click', () => {
    const sample = `# Hindi Semester 1 & 2 - Class Verb Review Notes
Unit 4: Actions & Routines
- नाचना (nācnā) - to dance (Intr)
- गाना (gānā) - to sing
- तैरना (tairnā): to swim
- हँसाना (hansānā) - to make someone laugh [causative]
- सीखना (sīkhnā) - to learn

Unit 7: Daily Tasks & Objects
* खोलना (kholnā) | to open
* बंद करना (band karnā) | to close
* बुलाना (bulānā) - to call / invite
* भेजना (bhejnā) - to send

Lecture Example Sentences:
वह नदी में तैरता है। (He swims in the river.)
उसने मुझे शादी में बुलाया। (He invited me to the wedding.)`;

    rawTextArea.value = sample;
    runAnalysis(sample, "Sample Semester Notes");
  });

  analyzeBtn?.addEventListener('click', () => {
    let text = rawTextArea.value.trim();
    if (!text) {
      showToast("Please paste your lecture notes or upload files first.", "warning");
      return;
    }
    text = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    setIngestState('reading', { fileName: 'Pasted / Combined Notes', fileSize: text.length });
    setTimeout(() => {
      runAnalysis(text, 'Pasted Notes');
    }, 30);
  });

  function runAnalysis(text, sourceName = '') {
    text = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    if (text.trim().startsWith('{\\rtf')) {
      text = convertRtfToPlainText(text);
      rawTextArea.value = text;
    }

    extractedList = parseRawNotes(text, sourceName);

    if (extractedList.length > 0) {
      setIngestState('success', { 
        fileName: sourceName, 
        count: extractedList.length, 
        charCount: text.length 
      });
      renderPreview();
      setTimeout(() => {
        previewSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      setIngestState('empty', { 
        fileName: sourceName, 
        charCount: text.length, 
        textSnippet: text.slice(0, 300) 
      });
      renderPreview();
    }
  }

  function parseRawNotes(text, defaultSource = 'Pasted Notes') {
    const lines = text.split('\n');
    const results = [];
    const seenHindi = new Set();
    let currentSource = defaultSource;

    const INTRANSITIVE_DEFAULTS = [
      'जाना', 'आना', 'चलना', 'दौड़ना', 'उठना', 'बैठना', 'सोना', 'हँसना', 'रोना',
      'पहुँचना', 'रुकना', 'गिरना', 'होना', 'रहना', 'बोलना', 'लाना', 'भूलना',
      'नाचना', 'कूदना', 'नहाना', 'तैरना', 'चमकना', 'उड़ना', 'भागना'
    ];

    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;

      // Check for file separator comment
      const sourceMatch = trimmed.match(/^\/\/\s*SOURCE FILE:\s*(.+)$/i);
      if (sourceMatch) {
        currentSource = sourceMatch[1].trim();
        return;
      }

      if (trimmed.startsWith('#')) return;

      // 1. Check for Devanagari verb ending in 'ना'
      const devanagariMatch = trimmed.match(/([\u0900-\u097F]+(?:\s+[\u0900-\u097F]+)?ना)(?=[^\u0900-\u097F]|$)/);
      
      let hindi = "";
      let roman = "";
      let english = "";

      if (devanagariMatch) {
        hindi = devanagariMatch[1].trim();
        if (seenHindi.has(hindi)) return;

        // Check for parenthetical candidate: (candidate)
        const parens = [...trimmed.matchAll(/\(([^)]+)\)/g)];
        for (const m of parens) {
          const candidate = m[1].trim();
          if (containsDevanagari(candidate)) {
            // Identified Devanagari script for a romanised candidate -> SKIP it!
            continue;
          }
          if (/^(?:tr|intr|transitive|intransitive|m|f|masc|fem|adj|noun|post|v|verb)$/i.test(candidate)) {
            continue;
          }
          if (/^to\s+[a-z]+/i.test(candidate)) {
            continue;
          }
          if (isLatinScript(candidate)) {
            roman = candidate;
            break;
          }
        }

        // Check for bracket candidate if still not found: [candidate]
        if (!roman) {
          const brackets = [...trimmed.matchAll(/\[([^\]]+)\]/g)];
          for (const m of brackets) {
            const candidate = m[1].trim();
            if (containsDevanagari(candidate)) {
              // Skip Devanagari in brackets
              continue;
            }
            if (/^(?:tr|intr|transitive|intransitive|m|f|masc|fem|adj|noun|post|v|verb)$/i.test(candidate)) {
              continue;
            }
            if (/^to\s+[a-z]+/i.test(candidate)) {
              continue;
            }
            if (isLatinScript(candidate)) {
              roman = candidate;
              break;
            }
          }
        }

        // Check for column-delimited candidate if still not found: hindi | candidate | english
        if (!roman && (/[\t\|]/.test(trimmed) || / - /.test(trimmed))) {
          const cols = trimmed.split(/\s*[\t\|]\s*/).filter(c => c.length > 0);
          if (cols.length >= 3) {
            const isCol2Tag = /^(?:tr|intr|transitive|intransitive|m|f)$/i.test(cols[2].trim());
            if (!isCol2Tag) {
              const candidate = cols[1].trim();
              if (containsDevanagari(candidate)) {
                // Skip Devanagari in roman position
              } else if (isLatinScript(candidate) && !/^(?:tr|intr|transitive|intransitive)$/i.test(candidate)) {
                roman = candidate;
              }
            }
          }
        }

        // Check if line contains a standalone romanized verb ending in na/nā
        if (!roman) {
          const romanVerbMatch = trimmed.match(/([a-zA-Z\u0100-\u024F\u1E00-\u1EFF]+(?:nā|na))(?=[^\w\u0100-\u024F\u1E00-\u1EFF]|$)/iu);
          if (romanVerbMatch && isLatinScript(romanVerbMatch[1])) {
            roman = romanVerbMatch[1].trim();
          }
        }

        // Guarantee Latin script for romanization; if missing or skipped, auto-generate
        if (!roman || !isLatinScript(roman) || containsDevanagari(roman)) {
          roman = devanagariToLatin(hindi);
        }

        // Clean up English definition
        english = trimmed.replace(hindi, '');
        // Remove parenthesized or bracketed chunks that contain Devanagari
        english = english.replace(/\([^)]*[\u0900-\u097F]+[^)]*\)/g, '');
        english = english.replace(/\[[^\]]*[\u0900-\u097F]+[^\]]*\]/g, '');
        if (roman && isLatinScript(roman) && english.includes(roman)) {
          english = english.replace(roman, '');
        }
        // Remove grammatical tags safely
        english = english.replace(/\[\s*(?:tr|intr|transitive|intransitive|masc|fem|m|f|adj|noun|post|v|verb)\s*\]/gi, '');
        english = english.replace(/\(\s*(?:tr|intr|transitive|intransitive|masc|fem|m|f|adj|noun|post|v|verb)\s*\)/gi, '');
        english = english.replace(/\b(?:transitive|intransitive)\b/gi, '');
        // Remove any remaining stray Devanagari
        english = english.replace(/[\u0900-\u097F]+/g, '');
        english = english.replace(/[\s\|\:\-]+(?:tr|intr|transitive|intransitive)$/i, '').trim();
        english = english
          .replace(/\(\s*\)/g, '')
          .replace(/\[\s*\]/g, '')
          .replace(/^[\s\*\•\-\d\.\:\।\|\—\–\t]+/, '')
          .replace(/[\s\|\—\–\t]+$/, '')
          .replace(/^[\:\-\|\—\–\t]+\s*/, '')
          .replace(/\s{2,}/g, ' ')
          .trim();
      } else {
        // 2. Fallback: Romanized Hindi verb ending in 'nā' or 'na'
        const romanVerbMatch = trimmed.match(/^[-*\d.\s]*([a-zA-Z\u0100-\u024F\u1E00-\u1EFF]+(?:nā|na))(?=[^\w\u0100-\u024F\u1E00-\u1EFF]|$)/iu);
        if (romanVerbMatch && isLatinScript(romanVerbMatch[1])) {
          roman = romanVerbMatch[1].trim();
          hindi = roman;
          english = trimmed
            .replace(romanVerbMatch[0], '')
            .replace(/^[\s\*\-\d\.\:\।\|\(\)\—\–\t]+/, '')
            .trim();
        } else {
          return;
        }
      }

      if (!hindi) return;

      let explicitTrans = null;
      if (/intr/i.test(english) || /intransitive/i.test(english)) {
        explicitTrans = "Intransitive";
        english = english.replace(/\[?(?:intr|intransitive)\]?/gi, '').trim();
      } else if (/\btr\b/i.test(english) || /transitive/i.test(english)) {
        explicitTrans = "Transitive";
        english = english.replace(/\[?(?:tr|transitive)\]?/gi, '').trim();
      }

      const transitivity = explicitTrans || (INTRANSITIVE_DEFAULTS.includes(hindi) ? "Intransitive" : "Transitive");
      const stem = hindi.endsWith('ना') ? hindi.slice(0, -2) : hindi;

      const isDup = state.hasVerb(hindi);
      results.push({
        id: "imported-" + Date.now() + "-" + Math.random().toString(36).substr(2, 5),
        selected: !isDup,
        isDuplicate: isDup,
        existingVerb: state.getVerb(hindi),
        hindi,
        roman: (roman && isLatinScript(roman) && !containsDevanagari(roman)) ? roman : devanagariToLatin(hindi),
        english: english || "to " + (isLatinScript(roman) ? roman.replace(/nā$/, '') : devanagariToLatin(hindi).replace(/nā$/, '')),
        transitivity,
        takesNe: transitivity === "Transitive",
        stem,
        sourceFile: currentSource
      });
      seenHindi.add(hindi);
    });

    return results;
  }
  window.parseRawNotes = parseRawNotes;

  function generateSimpleRoman(hindi) {
    const lat = devanagariToLatin(hindi);
    if (lat && isLatinScript(lat)) return lat;
    return devanagariToLatin(hindi);
  }

  function renderPreview() {
    if (!extractedList.length) {
      if (previewSection) previewSection.style.display = 'block';
      if (previewHeading) previewHeading.textContent = "Extracted Verbs (0 found)";
      if (previewTableBody) {
        previewTableBody.innerHTML = `
          <tr>
            <td colspan="6" style="text-align:center; padding:1.5rem; color:var(--text-muted);">
              No verbs were recognized in the expected format. Check the status banner above for helpful suggestions.
            </td>
          </tr>
        `;
      }
      if (confirmImportBtn) confirmImportBtn.disabled = true;
      if (selectedCountLabel) selectedCountLabel.textContent = "0 verbs selected";
      return;
    }

    if (previewSection) previewSection.style.display = 'block';
    if (previewHeading) previewHeading.textContent = `Extracted Verbs (${extractedList.length} found)`;
    if (confirmImportBtn) confirmImportBtn.disabled = false;

    if (previewTableBody) {
      previewTableBody.innerHTML = extractedList.map((item, idx) => {
        const anomalies = getVerbAnomalies(item);
        const anomalyHtml = anomalies.map(a => `<span class="anomaly-badge ${a.type}">${escapeHtml(a.text)}</span>`).join(' ');

        return `
          <tr data-row-idx="${idx}">
            <td>
              <input type="checkbox" class="preview-row-check" data-idx="${idx}" ${item.selected ? 'checked' : ''} aria-label="Select ${escapeHtml(item.hindi)}">
            </td>
            <td>
              <input type="text" class="table-input hindi-table-input preview-hindi-input" data-idx="${idx}" value="${escapeHtml(item.hindi)}" placeholder="क्रिया (Devanagari)" aria-label="Hindi verb in Devanagari">
            </td>
            <td>
              <input type="text" class="table-input preview-roman-input" data-idx="${idx}" value="${escapeHtml(item.roman)}" aria-label="Transliteration for ${escapeHtml(item.hindi)}">
            </td>
            <td>
              <input type="text" class="table-input preview-english-input" data-idx="${idx}" value="${escapeHtml(item.english)}" aria-label="English meaning for ${escapeHtml(item.hindi)}">
            </td>
            <td>
              <select class="table-input preview-trans-select" data-idx="${idx}" aria-label="Transitivity for ${escapeHtml(item.hindi)}">
                <option value="Intransitive" ${item.transitivity === 'Intransitive' ? 'selected' : ''}>Intransitive (No 'ने')</option>
                <option value="Transitive" ${item.transitivity === 'Transitive' ? 'selected' : ''}>Transitive (Uses 'ने')</option>
              </select>
            </td>
            <td>
              <div class="anomaly-wrap" id="verb-anomaly-wrap-${idx}">
                ${anomalyHtml}
              </div>
            </td>
            <td style="text-align:center;">
              <button type="button" class="table-row-remove-btn preview-verb-remove-btn" data-idx="${idx}" title="Remove this verb from import list" aria-label="Remove ${escapeHtml(item.hindi)}">✕</button>
            </td>
          </tr>
        `;
      }).join('');

      function updateVerbRowBadge(idx) {
        const wrap = document.getElementById(`verb-anomaly-wrap-${idx}`);
        if (wrap && extractedList[idx]) {
          const anomalies = getVerbAnomalies(extractedList[idx]);
          wrap.innerHTML = anomalies.map(a => `<span class="anomaly-badge ${a.type}">${escapeHtml(a.text)}</span>`).join(' ');
        }
      }

      previewTableBody.querySelectorAll('.preview-row-check').forEach(chk => {
        chk.addEventListener('change', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          if (extractedList[idx]) extractedList[idx].selected = e.target.checked;
          updateSelectedCount();
        });
      });

      previewTableBody.querySelectorAll('.preview-hindi-input').forEach(inp => {
        inp.addEventListener('input', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          if (!extractedList[idx]) return;
          const val = e.target.value.trim();
          extractedList[idx].hindi = val;
          extractedList[idx].stem = val.endsWith('ना') ? val.slice(0, -2) : val;
          extractedList[idx].isDuplicate = state.hasVerb(val);
          updateVerbRowBadge(idx);
          updateSelectedCount();
        });
        inp.addEventListener('change', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          if (!extractedList[idx]) return;
          const val = e.target.value.trim();
          if (val && !containsDevanagari(val)) {
            showToast("Hindi verb should contain Devanagari script.", "warning");
          }
          if (!extractedList[idx].roman || extractedList[idx].roman === devanagariToLatin(extractedList[idx].hindi)) {
            const newRoman = devanagariToLatin(val);
            extractedList[idx].roman = newRoman;
            const rInp = previewTableBody.querySelector(`.preview-roman-input[data-idx="${idx}"]`);
            if (rInp) rInp.value = newRoman;
          }
          updateVerbRowBadge(idx);
        });
      });

      previewTableBody.querySelectorAll('.preview-roman-input').forEach(inp => {
        inp.addEventListener('input', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          if (extractedList[idx]) extractedList[idx].roman = e.target.value;
        });
        inp.addEventListener('change', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          let val = e.target.value.trim();
          if (val && (containsDevanagari(val) || !isLatinScript(val))) {
            showToast("Romanisation must be in Latin script (Devanagari skipped).", "warning");
            val = devanagariToLatin(extractedList[idx].hindi);
            e.target.value = val;
          }
          if (extractedList[idx]) extractedList[idx].roman = val;
          updateVerbRowBadge(idx);
        });
      });

      previewTableBody.querySelectorAll('.preview-english-input').forEach(inp => {
        inp.addEventListener('input', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          if (extractedList[idx]) {
            extractedList[idx].english = e.target.value;
            updateVerbRowBadge(idx);
          }
        });
      });

      previewTableBody.querySelectorAll('.preview-trans-select').forEach(sel => {
        sel.addEventListener('change', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          if (extractedList[idx]) {
            extractedList[idx].transitivity = e.target.value;
            extractedList[idx].takesNe = e.target.value === 'Transitive';
            updateVerbRowBadge(idx);
          }
        });
      });

      previewTableBody.querySelectorAll('.preview-verb-remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.idx);
          if (extractedList[idx]) {
            extractedList.splice(idx, 1);
            renderPreview();
            showToast("Removed verb from import queue.", "info", 1500);
          }
        });
      });
    }

    updateSelectedCount();
    applyPreviewFilter();
  }

  function applyPreviewFilter() {
    const query = (previewSearchInput?.value || '').toLowerCase().trim();
    if (previewSearchClearBtn) {
      previewSearchClearBtn.style.display = query ? 'inline-block' : 'none';
    }
    const rows = previewTableBody ? previewTableBody.querySelectorAll('tr[data-row-idx]') : [];
    let visibleCount = 0;
    rows.forEach(tr => {
      const idx = parseInt(tr.dataset.rowIdx, 10);
      const item = extractedList[idx];
      if (!item) return;
      if (!query) {
        tr.style.display = '';
        visibleCount++;
        return;
      }
      const matchHindi = (item.hindi || '').toLowerCase().includes(query);
      const matchRoman = (item.roman || '').toLowerCase().includes(query);
      const matchEnglish = (item.english || '').toLowerCase().includes(query);
      const matchTrans = (item.transitivity || '').toLowerCase().includes(query);
      const anomalies = getVerbAnomalies(item);
      const matchAnomaly = anomalies.some(a => (a.text || '').toLowerCase().includes(query));
      const match = matchHindi || matchRoman || matchEnglish || matchTrans || matchAnomaly;
      tr.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });

    if (previewSearchStatus) {
      if (query) {
        previewSearchStatus.textContent = `Showing ${visibleCount} of ${extractedList.length} verbs`;
      } else {
        previewSearchStatus.textContent = '';
      }
    }
  }

  previewSearchInput?.addEventListener('input', applyPreviewFilter);
  previewSearchClearBtn?.addEventListener('click', () => {
    if (previewSearchInput) {
      previewSearchInput.value = '';
      previewSearchInput.focus();
    }
    applyPreviewFilter();
  });

  function updateSelectedCount() {
    const total = extractedList.length;
    const selected = extractedList.filter(v => v.selected).length;
    const dupCount = extractedList.filter(v => v.isDuplicate).length;
    if (selectedCountLabel) {
      if (dupCount > 0) {
        selectedCountLabel.textContent = `${selected} of ${total} verbs selected (${dupCount} already in deck)`;
      } else {
        selectedCountLabel.textContent = `${selected} of ${total} verbs selected`;
      }
    }
    if (selectAllCheckbox) {
      selectAllCheckbox.checked = total > 0 && selected === total;
    }
    if (confirmImportBtn) {
      confirmImportBtn.disabled = selected === 0;
    }
  }

  selectAllCheckbox?.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    extractedList.forEach(v => v.selected = isChecked);
    document.querySelectorAll('.preview-row-check').forEach(chk => chk.checked = isChecked);
    updateSelectedCount();
  });

  selectNewVerbsBtn?.addEventListener('click', () => {
    extractedList.forEach(v => {
      v.selected = !v.isDuplicate;
    });
    document.querySelectorAll('.preview-row-check').forEach(chk => {
      const idx = parseInt(chk.dataset.idx);
      if (extractedList[idx]) chk.checked = extractedList[idx].selected;
    });
    updateSelectedCount();
    showToast("Selected new verbs only.", "info");
  });

  cleanNoiseBtn?.addEventListener('click', () => {
    let cleaned = 0;
    extractedList.forEach(item => {
      const oldH = item.hindi;
      const oldE = item.english;
      item.hindi = item.hindi.replace(/[.,;:|\\/\-]+$/, '').trim();
      item.english = sanitizeExtractedNoise(item.english);
      if (item.roman) item.roman = item.roman.replace(/[.,;:|\\/\-]+$/, '').trim();
      if (oldH !== item.hindi || oldE !== item.english) cleaned++;
    });
    renderPreview();
    showToast(`Cleaned noise and punctuation across ${cleaned} verbs.`, "success");
    announce(`Cleaned ${cleaned} verbs.`);
  });

  confirmImportBtn?.addEventListener('click', () => {
    const toImport = extractedList.filter(v => v.selected);
    if (!toImport.length) {
      showToast("Please select at least one verb to import.", "warning");
      return;
    }

    let newCount = 0;
    let updatedCount = 0;

    toImport.forEach(item => {
      const stem = item.stem || (item.hindi.endsWith('ना') ? item.hindi.slice(0, -2) : item.hindi);
      const isTr = item.transitivity === 'Transitive';
      const existing = state.getVerb(item.hindi);

      if (existing) {
        updatedCount++;
      } else {
        newCount++;
      }

      const cleanRoman = (item.roman && isLatinScript(item.roman) && !containsDevanagari(item.roman))
        ? item.roman
        : devanagariToLatin(item.hindi);

      const fullVerb = {
        id: (existing && existing.id) || ("imported-" + Date.now() + "-" + Math.random().toString(36).substr(2, 6)),
        hindi: item.hindi,
        roman: cleanRoman,
        english: item.english,
        cluster: (existing && existing.cluster) || "Imported from Notes",
        stem: `${stem} (${cleanRoman.replace(/nā$/, '')})`,
        transitivity: item.transitivity,
        takesNe: isTr,
        isIrregular: (existing && existing.isIrregular) || false,
        mnemonic: (existing && existing.mnemonic) || `Imported verb from notes: ${item.hindi}`,
        conjugations: (existing && existing.conjugations) || {
          habitual: { m_sg: `${stem}ता है`, f_sg: `${stem}ती है`, m_pl: `${stem}ते हैं`, f_pl: `${stem}ती हैं` },
          continuous: { m_sg: `${stem} रहा है`, f_sg: `${stem} रही है`, m_pl: `${stem} रहे हैं`, f_pl: `${stem} रही हैं` },
          past: { m_sg: `${stem}ा`, m_pl: `${stem}े`, f_sg: `${stem}ी`, f_pl: `${stem}ीं` },
          imperative: { tu: stem, tum: `${stem}ो`, aap: `${stem}िए` }
        },
        example: (existing && existing.example) || null
      };

      state.saveCustomVerb(fullVerb);
    });

    renderVerbGrid();
    updateDbStatus();

    let msg = '';
    if (newCount > 0 && updatedCount > 0) {
      msg = `🎉 Successfully imported ${newCount} new verbs and updated ${updatedCount} existing verbs!`;
    } else if (newCount > 0) {
      msg = `🎉 Successfully imported ${newCount} new verbs into your offline deck!`;
    } else {
      msg = `✓ Successfully updated ${updatedCount} existing verbs in your offline deck!`;
    }

    if (successBanner) {
      successBanner.style.display = 'block';
      successBanner.textContent = msg;
    }
    showToast(msg, 'success');
    announce(msg);

    setTimeout(() => {
      if (successBanner) successBanner.style.display = 'none';
      if (previewSection) previewSection.style.display = 'none';
      setIngestState('idle');
    }, 3500);
  });

  exportDbBtn?.addEventListener('click', () => {
    const stored = safeStorage.getItem('hindi_custom_verbs');
    let custom = [];
    if (stored) {
      try { custom = JSON.parse(stored); } catch (e) { custom = []; }
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(custom, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "hindi_custom_verbs_backup.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast(`Exported ${custom.length} custom verbs to JSON backup file.`, 'success');
  });

  clearCustomBtn?.addEventListener('click', () => {
    if (confirm("Are you sure you want to clear all imported custom verbs? The default curriculum will remain intact.")) {
      safeStorage.removeItem('hindi_custom_verbs');
      state.verbs = Array.isArray(window.VERB_CURRICULUM) ? [...window.VERB_CURRICULUM] : [];
      state.flashcardsList = [...state.verbs];
      renderVerbGrid();
      updateDbStatus();
      showToast("Custom verbs cleared. Curriculum reset to default.", "info");
      announce("Custom verbs cleared. Curriculum reset to default.");
    }
  });

  function importJsonBatch(jsonArray) {
    jsonArray.forEach(v => {
      state.saveCustomVerb(v);
      state.flashcardsList.push(v);
    });
    renderVerbGrid();
    updateDbStatus();
    showToast(`Imported ${jsonArray.length} verbs from JSON file!`, 'success');
  }
}


// SECTION 14: PRACTICE FOCUS SELECTION (LAUNCH MODAL & TOP SWITCHER)
// ==========================================================================
function initFocusModal() {
  const modal = document.getElementById('focus-modal');
  const openBtn = document.getElementById('open-focus-modal-btn');
  const closeBtn = document.getElementById('focus-modal-close-btn');

  const verbsHeaderBtn = document.getElementById('focus-verbs-btn');
  const vocabHeaderBtn = document.getElementById('focus-vocab-btn');
  const matraHeaderBtn = document.getElementById('focus-matra-btn');

  const verbsCard = document.getElementById('launch-card-verbs');
  const vocabCard = document.getElementById('launch-card-vocab');
  const matraCard = document.getElementById('launch-card-matra');
  const verbsCtaBtn = document.getElementById('launch-choose-verbs-btn');
  const vocabCtaBtn = document.getElementById('launch-choose-vocab-btn');
  const matraCtaBtn = document.getElementById('launch-choose-matra-btn');

  verbsHeaderBtn?.addEventListener('click', () => switchLearningModule('verbs'));
  vocabHeaderBtn?.addEventListener('click', () => switchLearningModule('vocab'));
  matraHeaderBtn?.addEventListener('click', () => switchLearningModule('matras'));

  openBtn?.addEventListener('click', openFocusModal);
  closeBtn?.addEventListener('click', closeFocusModal);

  modal?.addEventListener('click', (e) => {
    if (e.target.id === 'focus-modal') closeFocusModal();
  });

  verbsCard?.addEventListener('click', () => switchLearningModule('verbs'));
  verbsCtaBtn?.addEventListener('click', (e) => { e.stopPropagation(); switchLearningModule('verbs'); });

  vocabCard?.addEventListener('click', () => switchLearningModule('vocab'));
  vocabCtaBtn?.addEventListener('click', (e) => { e.stopPropagation(); switchLearningModule('vocab'); });

  matraCard?.addEventListener('click', () => switchLearningModule('matras'));
  matraCtaBtn?.addEventListener('click', (e) => { e.stopPropagation(); switchLearningModule('matras'); });

  [verbsCard, vocabCard, matraCard].forEach(card => {
    card?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Keyboard shortcut: Press M to open/toggle focus modal
  window.addEventListener('keydown', (e) => {
    const isModalOpen = document.getElementById('verb-modal')?.classList.contains('open') ||
                        document.getElementById('vocab-modal')?.classList.contains('open') ||
                        document.getElementById('matra-modal')?.classList.contains('open');
    if (isModalOpen) return;

    const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

    if (e.key.toLowerCase() === 'm' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      const isFocusOpen = modal?.classList.contains('open');
      if (isFocusOpen) {
        closeFocusModal();
      } else {
        openFocusModal();
      }
    }
  });

  // FIRST LAUNCH EXPERIENCE:
  // If the user hasn't chosen a focus before, greet them with the Focus Selection Dialog!
  const savedFocus = safeStorage.getItem('hindi_active_focus');
  if (!savedFocus) {
    setTimeout(() => {
      openFocusModal();
    }, 200);
  }
}

function openFocusModal() {
  const modal = document.getElementById('focus-modal');
  if (!modal) return;
  const box = modal.querySelector('.launch-modal-box');
  if (box) box.scrollTop = 0;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  updateModalBodyLock();
  announce("Choose your practice focus: Verb Lab, Vocabulary Studio, or Matra Reading Practice.");
  const firstCard = document.getElementById('launch-card-verbs');
  if (firstCard && typeof firstCard.focus === 'function') {
    setTimeout(() => firstCard.focus(), 50);
  }
}

function closeFocusModal() {
  const modal = document.getElementById('focus-modal');
  if (!modal || !modal.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  resetModalFullscreen('focus-modal');
  updateModalBodyLock();
}


// ==========================================================================
// SECTION 15: VOCABULARY STUDIO - EXPLORER & WORD INSPECTION
// ==========================================================================
function initVocabLibrary() {
  const searchInput = document.getElementById('vocab-search');
  const posChips = document.querySelectorAll('.filter-chip[data-vocab-pos]');
  const genderChips = document.querySelectorAll('.filter-chip[data-vocab-gender]');
  const categoryChips = document.querySelectorAll('.filter-chip[data-vocab-category]');

  searchInput?.addEventListener('input', (e) => {
    state.vocabSearchQuery = e.target.value.toLowerCase().trim();
    renderVocabGrid();
  });

  posChips.forEach(chip => {
    chip.addEventListener('click', () => {
      posChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.vocabPosFilter = chip.dataset.vocabPos;
      renderVocabGrid();
      announce(`Filtered by part of speech: ${chip.textContent.trim()}`);
    });
  });

  genderChips.forEach(chip => {
    chip.addEventListener('click', () => {
      genderChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.vocabGenderFilter = chip.dataset.vocabGender;
      renderVocabGrid();
      announce(`Filtered by gender: ${chip.textContent.trim()}`);
    });
  });

  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.vocabCategoryFilter = chip.dataset.vocabCategory;
      renderVocabGrid();
      announce(`Filtered by category: ${chip.textContent.trim()}`);
    });
  });

  renderVocabGrid();
}

function renderVocabGrid() {
  const grid = document.getElementById('vocab-grid');
  const countEl = document.getElementById('vocab-count-label');
  if (!grid || !countEl) return;

  const filtered = state.vocab.filter(w => {
    const matchesSearch =
      w.hindi.includes(state.vocabSearchQuery) ||
      (w.roman && w.roman.toLowerCase().includes(state.vocabSearchQuery)) ||
      (w.english && w.english.toLowerCase().includes(state.vocabSearchQuery));

    const matchesPos = state.vocabPosFilter === 'all' || w.pos === state.vocabPosFilter;

    let matchesGender = true;
    if (state.vocabGenderFilter === 'Masculine') matchesGender = w.gender === 'Masculine';
    else if (state.vocabGenderFilter === 'Feminine') matchesGender = w.gender === 'Feminine';
    else if (state.vocabGenderFilter === 'none') matchesGender = !w.gender;

    const matchesCategory = state.vocabCategoryFilter === 'all' || w.category === state.vocabCategoryFilter;

    return matchesSearch && matchesPos && matchesGender && matchesCategory;
  });

  countEl.textContent = `Showing ${filtered.length} of ${state.vocab.length} words`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:3rem 1rem; color:var(--text-muted); background:white; border-radius:var(--radius); border:1px dashed var(--border);">
        <p style="font-size:1.1rem; font-weight:600; margin-bottom:0.5rem;">No matching words found</p>
        <p style="font-size:0.9rem;">Try adjusting your search terms or filters.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(w => {
    const isMastered = state.vocabReviews[w.id] === 'good';
    const genderClass = w.gender === 'Masculine' ? 'badge-masc' : (w.gender === 'Feminine' ? 'badge-fem' : 'badge-neut');
    const genderLabel = w.gender === 'Masculine' ? '♂ Masc (पुल्लिंग)' : (w.gender === 'Feminine' ? '♀ Fem (स्त्रीलिंग)' : 'Invariable');

    let inflectionTag = '';
    if (w.pos === 'Noun' && w.pluralDirect) {
      inflectionTag = `<div class="vocab-grammar-tag">Plural: <strong>${escapeHtml(w.pluralDirect)}</strong></div>`;
    } else if (w.pos === 'Adjective') {
      inflectionTag = `<div class="vocab-grammar-tag">${w.isInflecting ? 'Inflecting (-आ &rarr; -ई/-ए)' : 'Invariable (Always same)'}</div>`;
    }

    return `
      <div class="vocab-card" data-vocab-id="${w.id}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="View details for ${w.hindi} (${w.roman}) - ${w.english}">
        <div>
          <div class="card-top">
            <div>
              <div class="vocab-hindi">${w.hindi}</div>
              <div class="vocab-roman">${w.roman || ''}</div>
            </div>
            <button class="audio-btn vocab-audio-btn" data-audio="${w.hindi}" aria-label="Listen to pronunciation of ${w.hindi}">
              🔊
            </button>
          </div>
          <div class="vocab-english">${w.english}</div>
          ${inflectionTag}
        </div>

        <div>
          <div class="card-badges">
            <span class="badge ${w.pos === 'Noun' ? 'badge-pos-noun' : (w.pos === 'Adjective' ? 'badge-pos-adj' : 'badge-pos-post')}">
              ${w.pos}
            </span>
            ${w.gender ? `<span class="badge ${genderClass}">${genderLabel}</span>` : ''}
            ${w.isInflecting ? '<span class="badge badge-inflect">Inflecting</span>' : ''}
            ${isMastered ? '<span class="badge" style="background:#dcfce7;color:#166534">✓ Mastered</span>' : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.vocab-audio-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      speakHindi(btn.dataset.audio, btn);
    });
  });

  grid.querySelectorAll('.vocab-card').forEach(card => {
    const wordId = card.dataset.vocabId;
    card.addEventListener('click', () => openVocabModal(wordId));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openVocabModal(wordId);
      }
    });
  });
}

function openVocabModal(wordId) {
  const word = state.vocab.find(w => w.id === wordId);
  if (!word) return;

  const modal = document.getElementById('vocab-modal');
  const content = document.getElementById('modal-vocab-content');
  const closeBtn = document.getElementById('modal-vocab-close-btn');

  let tableHtml = '';
  if (word.pos === 'Noun' && word.inflection) {
    tableHtml = `
      <div style="margin-top:1.25rem;">
        <div class="section-label">Plural & Oblique Cases (वचन व तिर्यक रूप)</div>
        <table class="inflection-table">
          <thead>
            <tr>
              <th>Case</th>
              <th>Singular (एकवचन)</th>
              <th>Plural (बहुवचन)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Direct (प्रत्यक्ष)</strong><br><span style="font-size:0.75rem; color:var(--text-muted);">Subject / No postposition</span></td>
              <td><span class="inflection-hindi">${word.inflection.direct_sg || word.hindi}</span></td>
              <td><span class="inflection-hindi">${word.inflection.direct_pl || '-'}</span></td>
            </tr>
            <tr>
              <td><strong>Oblique (तिर्यक)</strong><br><span style="font-size:0.75rem; color:var(--text-muted);">Before postpositions (में, पर, को, से)</span></td>
              <td><span class="inflection-hindi">${word.inflection.oblique_sg || '-'}</span></td>
              <td><span class="inflection-hindi">${word.inflection.oblique_pl || '-'}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  } else if (word.pos === 'Adjective' && word.inflection) {
    tableHtml = `
      <div style="margin-top:1.25rem;">
        <div class="section-label">Adjective Agreement Matrix (विशेषण लिंग-वचन समन्वय)</div>
        <table class="inflection-table">
          <thead>
            <tr>
              <th>Gender</th>
              <th>Singular (एकवचन)</th>
              <th>Plural (बहुवचन)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Masculine (पुल्लिंग)</strong></td>
              <td><span class="inflection-hindi">${word.inflection.m_sg || '-'}</span></td>
              <td><span class="inflection-hindi">${word.inflection.m_pl || '-'}</span></td>
            </tr>
            <tr>
              <td><strong>Feminine (स्त्रीलिंग)</strong></td>
              <td><span class="inflection-hindi">${word.inflection.f_sg || '-'}</span></td>
              <td><span class="inflection-hindi">${word.inflection.f_pl || '-'}</span></td>
            </tr>
          </tbody>
        </table>
        <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.4rem;">
          ${word.isInflecting ? '💡 Marked adjective: -आ ending changes to -ई for feminine nouns and -ए for masculine plurals/obliques.' : '💡 Invariable adjective: Does not change form for gender or number.'}
        </p>
      </div>
    `;
  }

  content.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; padding-bottom:1rem; border-bottom:1px solid var(--border);">
      <div>
        <div style="font-size:2.5rem; font-weight:700; font-family:var(--font-hindi); color:var(--text-main); line-height:1.2;">
          ${word.hindi}
        </div>
        <div style="font-size:1.15rem; color:var(--secondary); font-weight:600; margin-top:0.2rem;">
          ${word.roman || ''}
        </div>
        <div style="font-size:1.35rem; font-weight:700; margin-top:0.25rem;">
          ${word.english}
        </div>
      </div>
      <button class="audio-btn" style="width:48px; height:48px; font-size:1.2rem; flex:none;" id="modal-vocab-audio-btn" aria-label="Listen to pronunciation of ${word.hindi}">
        🔊
      </button>
    </div>

    <!-- Word Attributes -->
    <div style="background:#f8fafc; padding:1.2rem 1.35rem; border-radius:12px; border:1px solid var(--border); box-shadow:0 1px 3px rgba(0,0,0,0.03); margin-top:1.25rem;">
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:0.85rem;">
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted); display:block; font-weight:600;">Part of Speech</span>
          <strong style="font-size:1.05rem;">${word.pos}</strong>
        </div>
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted); display:block; font-weight:600;">Grammatical Gender</span>
          <strong style="color:${word.gender === 'Masculine' ? '#1e40af' : (word.gender === 'Feminine' ? '#be123c' : '#475569')};">
            ${word.gender ? (word.gender === 'Masculine' ? 'Masculine (पुल्लिंग)' : 'Feminine (स्त्रीलिंग)') : 'Invariable / None'}
          </strong>
        </div>
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted); display:block; font-weight:600;">Category</span>
          <strong>${word.category || 'Core'}</strong>
        </div>
      </div>
    </div>

    ${tableHtml}

    <!-- Memory Mnemonic -->
    <div style="background:#fffbeb; border:1px solid #fef3c7; padding:1.2rem 1.35rem; border-radius:12px; box-shadow:0 1px 3px rgba(180,83,9,0.04); margin-top:1.25rem;">
      <div class="section-label" style="color:#b45309; margin-bottom:0.4rem;">💡 Memory Mnemonic</div>
      <div style="color:#92400e; font-size:0.95rem; line-height:1.5;">
        ${word.mnemonic || 'Practice this word in daily conversations.'}
      </div>
    </div>

    <!-- Example Sentence -->
    ${word.example ? `
      <div style="margin-top:1.25rem;">
        <div class="section-label">Learner Example Sentence</div>
        <div style="background:white; border:1px solid var(--border); border-left:4px solid var(--secondary); padding:1rem 1.25rem; border-radius:10px; display:flex; justify-content:space-between; align-items:center; gap:1rem;">
          <div style="flex:1;">
            <div style="font-family:var(--font-hindi); font-size:1.3rem; font-weight:700; color:var(--text-main);">
              ${escapeHtml(word.example.hindi)}
            </div>
            <div style="color:var(--secondary); font-size:0.9rem; font-weight:600; margin:0.2rem 0;">
              ${escapeHtml(word.example.roman || '')}
            </div>
            <div style="font-size:0.95rem; color:var(--text-muted);">
              "${escapeHtml(word.example.english)}"
            </div>
            ${word.example.explanation ? `
              <div style="font-size:0.825rem; color:#b45309; margin-top:0.35rem; font-weight:500;">
                💡 <strong>Grammar Note:</strong> ${escapeHtml(word.example.explanation)}
              </div>
            ` : ''}
          </div>
          <button class="sentence-audio-btn" id="modal-vocab-sentence-audio-btn" data-audio-text="${escapeHtml(word.example.hindi)}" aria-label="Listen to example sentence" title="Listen to sentence">
            🔊
          </button>
        </div>
      </div>
    ` : ''}

    <!-- Management & Data Cleanup Footer -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; padding-top:1rem; border-top:1px solid var(--border); flex-wrap:wrap; gap:0.5rem;">
      <div style="font-size:0.85rem;">
        ${!(window.VOCAB_CURRICULUM || []).some(w => w.hindi === word.hindi) 
          ? '<span class="lexicon-badge-custom">✏️ Custom Imported Word</span>' 
          : '<span class="lexicon-badge-core">🔒 Core Curriculum</span>'}
      </div>
      <div style="display:flex; gap:0.5rem;">
        <button type="button" class="action-btn nav-card modal-edit-in-manager-btn" style="font-size:0.85rem; padding:0.4rem 0.85rem;">
          🛠️ Edit in Data Manager
        </button>
        ${!(window.VOCAB_CURRICULUM || []).some(w => w.hindi === word.hindi) ? `
          <button type="button" class="action-btn again modal-delete-word-btn" style="font-size:0.85rem; padding:0.4rem 0.85rem;">
            🗑️ Delete Word
          </button>
        ` : ''}
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  const modalBody = document.getElementById('modal-vocab-content');
  if (modalBody) modalBody.scrollTop = 0;
  updateModalBodyLock();
  announce(`Opened details for ${word.hindi}, ${word.english}`);

  setTimeout(() => {
    if (closeBtn && typeof closeBtn.focus === 'function') closeBtn.focus();
  }, 50);

  document.getElementById('modal-vocab-audio-btn')?.addEventListener('click', (e) => {
    speakHindi(word.hindi, e.currentTarget);
  });
  document.getElementById('modal-vocab-sentence-audio-btn')?.addEventListener('click', (e) => {
    if (word.example?.hindi) speakHindi(word.example.hindi, e.currentTarget);
  });

  modal.querySelector('.modal-edit-in-manager-btn')?.addEventListener('click', () => {
    closeVocabModal();
    openLexiconManager(word.hindi, 'vocab');
  });

  modal.querySelector('.modal-delete-word-btn')?.addEventListener('click', () => {
    if (confirm(`Are you sure you want to delete "${word.hindi}" from your active vocabulary deck?`)) {
      state.deleteCustomVocab(word.hindi);
      closeVocabModal();
      renderVocabGrid();
      showToast(`Deleted word "${word.hindi}".`, 'info');
      announce(`Deleted word ${word.hindi}`);
    }
  });
}

function closeVocabModal() {
  clearSpeakingButtonState();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  const modal = document.getElementById('vocab-modal');
  if (!modal || !modal.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  resetModalFullscreen('vocab-modal');
  updateModalBodyLock();
  announce("Closed word reference sheet");
}

document.getElementById('modal-vocab-close-btn')?.addEventListener('click', closeVocabModal);
document.getElementById('vocab-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'vocab-modal') closeVocabModal();
});
document.getElementById('vocab-modal')?.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeVocabModal();
});


// ==========================================================================
// SECTION 16: VOCABULARY STUDIO - FLASHCARDS (SRS)
// ==========================================================================
function initVocabFlashcards() {
  const container = document.getElementById('vocab-flashcard-container');
  const inner = document.getElementById('vocab-flashcard-inner');
  const toggleTransBtn = document.getElementById('vocab-toggle-translit-btn');
  const toggleDirBtn = document.getElementById('vocab-toggle-direction-btn');
  const shuffleBtn = document.getElementById('vocab-shuffle-cards-btn');
  const prevBtn = document.getElementById('vocab-prev-card-btn');
  const nextBtn = document.getElementById('vocab-next-card-btn');
  const againBtn = document.getElementById('vocab-card-again-btn');
  const goodBtn = document.getElementById('vocab-card-good-btn');

  function flipVocabCard() {
    state.vocabIsFlipped = !state.vocabIsFlipped;
    const cardInner = document.getElementById('vocab-flashcard-inner') || inner;
    if (cardInner) {
      cardInner.classList.toggle('flipped', state.vocabIsFlipped);
    }
    const word = state.vocabFlashcardsList[state.vocabFlashIndex];
    if (word) {
      if (state.vocabIsFlipped) {
        announce(`Revealed: ${state.vocabShowEnglishFirst ? word.hindi : word.english}. Gender: ${word.gender || 'Invariable'}.`);
      } else {
        announce(`Prompt: ${state.vocabShowEnglishFirst ? word.english : word.hindi}`);
      }
    }
  }

  container?.addEventListener('click', (e) => {
    if (e.target.closest('button, .audio-btn, .sentence-audio-btn')) return;
    flipVocabCard();
  });

  container?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      flipVocabCard();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      e.stopPropagation();
      goToPrevVocabCard();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      e.stopPropagation();
      goToNextVocabCard();
    }
  });

  // Global keydown listeners for Vocab Flashcards tab
  window.addEventListener('keydown', (e) => {
    if (state.activeModule !== 'vocab' || state.activeTabType !== 'flashcard') return;
    const isModalOpen = document.getElementById('vocab-modal')?.classList.contains('open') ||
                        document.getElementById('focus-modal')?.classList.contains('open') ||
                        document.getElementById('lexicon-manager-modal')?.classList.contains('open');
    if (isModalOpen) return;

    // Avoid double handling if event was already handled on container
    if (e.target === container || (container && container.contains(e.target))) return;

    const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

    if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'p') {
      e.preventDefault();
      goToPrevVocabCard();
    } else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'n') {
      e.preventDefault();
      goToNextVocabCard();
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      flipVocabCard();
    } else if (e.key.toLowerCase() === 'a' || e.key.toLowerCase() === 'l') {
      e.preventDefault();
      playVocabCardWordAudio();
    } else if (e.key.toLowerCase() === 'e') {
      e.preventDefault();
      playVocabCardSentenceAudio();
    } else if (e.key === '1') {
      e.preventDefault();
      markVocabCardReview();
    } else if (e.key === '2') {
      e.preventDefault();
      markVocabCardMastered();
    } else if (e.key.toLowerCase() === 's') {
      e.preventDefault();
      shuffleVocabCards();
    }
  });

  function playVocabCardWordAudio() {
    const cur = state.vocabFlashcardsList[state.vocabFlashIndex];
    if (!cur) return;
    const btn = document.getElementById('vocab-flash-word-audio') || document.querySelector('#vocab-flashcard-container .audio-btn');
    speakHindi(cur.hindi, btn);
  }

  function playVocabCardSentenceAudio() {
    const cur = state.vocabFlashcardsList[state.vocabFlashIndex];
    if (cur && cur.example && cur.example.hindi) {
      const btn = document.getElementById('vocab-flash-sent-audio') || document.querySelector('#vocab-flashcard-container .sentence-audio-btn');
      speakHindi(cur.example.hindi, btn);
    }
  }

  function goToPrevVocabCard() {
    clearSpeakingButtonState();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (state.vocabFlashIndex > 0) {
      state.vocabFlashIndex--;
      resetVocabCardFlip();
      renderVocabFlashcard();
    }
  }

  function goToNextVocabCard() {
    clearSpeakingButtonState();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (state.vocabFlashIndex < state.vocabFlashcardsList.length - 1) {
      state.vocabFlashIndex++;
      resetVocabCardFlip();
      renderVocabFlashcard();
    }
  }

  function markVocabCardReview() {
    const cur = state.vocabFlashcardsList[state.vocabFlashIndex];
    if (cur) {
      state.markVocabWord(cur.id, 'again');
      announce(`Marked ${cur.hindi} for review.`);
      advanceVocabFlashcard();
    }
  }

  function markVocabCardMastered() {
    const cur = state.vocabFlashcardsList[state.vocabFlashIndex];
    if (cur) {
      state.markVocabWord(cur.id, 'good');
      announce(`Marked ${cur.hindi} as mastered.`);
      advanceVocabFlashcard();
    }
  }

  function shuffleVocabCards() {
    clearSpeakingButtonState();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    state.vocabFlashcardsList.sort(() => Math.random() - 0.5);
    state.vocabFlashIndex = 0;
    resetVocabCardFlip();
    renderVocabFlashcard();
    announce("Vocabulary cards shuffled.");
  }

  toggleTransBtn?.addEventListener('click', () => {
    state.vocabHideTransliteration = !state.vocabHideTransliteration;
    toggleTransBtn.classList.toggle('active', state.vocabHideTransliteration);
    toggleTransBtn.textContent = state.vocabHideTransliteration ? "Devanagari Only (Hard)" : "Show Romanization";
    renderVocabFlashcard();
    announce(state.vocabHideTransliteration ? "Transliteration hidden" : "Transliteration visible");
  });

  toggleDirBtn?.addEventListener('click', () => {
    state.vocabShowEnglishFirst = !state.vocabShowEnglishFirst;
    toggleDirBtn.classList.toggle('active', state.vocabShowEnglishFirst);
    toggleDirBtn.textContent = state.vocabShowEnglishFirst ? "Prompt: English" : "Prompt: Hindi";
    resetVocabCardFlip();
    renderVocabFlashcard();
    announce(state.vocabShowEnglishFirst ? "Prompt set to English" : "Prompt set to Hindi");
  });

  shuffleBtn?.addEventListener('click', shuffleVocabCards);
  prevBtn?.addEventListener('click', goToPrevVocabCard);
  nextBtn?.addEventListener('click', goToNextVocabCard);
  againBtn?.addEventListener('click', markVocabCardReview);
  goodBtn?.addEventListener('click', markVocabCardMastered);

  renderVocabFlashcard();
}

function resetVocabCardFlip() {
  state.vocabIsFlipped = false;
  document.getElementById('vocab-flashcard-inner')?.classList.remove('flipped');
}

function advanceVocabFlashcard() {
  clearSpeakingButtonState();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (state.vocabFlashIndex < state.vocabFlashcardsList.length - 1) {
    state.vocabFlashIndex++;
  } else {
    state.vocabFlashIndex = 0;
  }
  resetVocabCardFlip();
  renderVocabFlashcard();
}

function renderVocabFlashcard() {
  if (!state.vocabFlashcardsList.length) return;
  const word = state.vocabFlashcardsList[state.vocabFlashIndex];
  const progressEl = document.getElementById('vocab-flash-progress');
  const front = document.getElementById('vocab-card-front-content');
  const back = document.getElementById('vocab-card-back-content');

  if (progressEl) progressEl.textContent = `Card ${state.vocabFlashIndex + 1} of ${state.vocabFlashcardsList.length}`;

  const translitDisplay = state.vocabHideTransliteration ? 'display:none;' : '';
  const genderBadge = word.gender ? `
    <span class="badge ${word.gender === 'Masculine' ? 'badge-masc' : 'badge-fem'}" style="font-size:0.8rem;">
      ${word.gender === 'Masculine' ? '♂ Masc (पुल्लिंग)' : '♀ Fem (स्त्रीलिंग)'}
    </span>
  ` : '';

  let grammarDetails = '';
  if (word.pos === 'Noun' && word.pluralDirect) {
    grammarDetails = `
      <div style="background:#f8fafc; border:1px solid var(--border); padding:0.6rem 0.85rem; border-radius:8px; margin:0.6rem 0; font-size:0.85rem;">
        Direct Plural: <strong style="font-family:var(--font-hindi);">${escapeHtml(word.pluralDirect)}</strong>
        ${word.pluralOblique ? ` &bull; Oblique: <strong style="font-family:var(--font-hindi);">${escapeHtml(word.pluralOblique)}</strong>` : ''}
      </div>
    `;
  } else if (word.pos === 'Adjective' && word.inflection) {
    grammarDetails = `
      <div style="background:#f8fafc; border:1px solid var(--border); padding:0.6rem 0.85rem; border-radius:8px; margin:0.6rem 0; font-size:0.85rem;">
        Forms: <strong>M: ${word.inflection.m_sg}</strong> &bull; <strong>F: ${word.inflection.f_sg}</strong> &bull; <strong>Pl: ${word.inflection.m_pl}</strong>
      </div>
    `;
  }

  const exampleHtml = word.example ? `
    <div style="background:white; border:1px solid var(--border); border-left:3px solid var(--secondary); padding:0.65rem 0.85rem; border-radius:8px; margin-top:0.6rem; display:flex; justify-content:space-between; align-items:center; gap:0.5rem; text-align:left;">
      <div style="flex:1;">
        <div style="font-family:var(--font-hindi); font-weight:700; font-size:1.05rem;">${escapeHtml(word.example.hindi)}</div>
        <div style="font-size:0.78rem; color:var(--secondary); ${translitDisplay}">${escapeHtml(word.example.roman || '')}</div>
        <div style="font-size:0.82rem; color:var(--text-muted);">"${escapeHtml(word.example.english)}"</div>
      </div>
      <button class="sentence-audio-btn" id="vocab-flash-sent-audio" data-audio-text="${escapeHtml(word.example.hindi)}" aria-label="Listen to example sentence" title="Listen to sentence (Key E)">
        🔊
      </button>
    </div>
  ` : '';

  if (!state.vocabShowEnglishFirst) {
    // Front: Hindi -> Back: English
    front.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; width:100%;">
        <span class="badge ${word.pos === 'Noun' ? 'badge-pos-noun' : 'badge-pos-adj'}">${word.pos}</span>
        <button class="audio-btn" id="vocab-flash-word-audio" data-audio="${word.hindi}" aria-label="Listen to pronunciation of ${word.hindi}">🔊</button>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <div style="font-family:var(--font-hindi); font-size:3.25rem; font-weight:700; color:var(--text-main); line-height:1.2;">
          ${word.hindi}
        </div>
        <div style="font-size:1.25rem; color:var(--secondary); font-weight:600; margin-top:0.35rem; ${translitDisplay}">
          ${word.roman || ''}
        </div>
        <div style="margin-top:0.75rem;">${genderBadge}</div>
      </div>
      <div style="font-size:0.8rem; color:var(--text-muted);">${IS_TOUCH_DEVICE ? 'Tap to flip' : 'Press Space or click to flip'}</div>
    `;

    back.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; width:100%;">
        <span class="badge ${word.pos === 'Noun' ? 'badge-pos-noun' : 'badge-pos-adj'}">${word.pos}</span>
        ${genderBadge}
      </div>
      <div style="flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%;">
        <div style="font-size:1.85rem; font-weight:800; color:var(--primary);">${word.english}</div>
        <div style="font-family:var(--font-hindi); font-size:1.35rem; color:var(--text-muted); font-weight:600; margin-top:0.2rem;">
          ${word.hindi} ${word.roman ? '(' + word.roman + ')' : ''}
        </div>
        ${grammarDetails}
        ${word.mnemonic ? `<div style="font-size:0.825rem; color:#92400e; background:#fffbeb; padding:0.4rem 0.65rem; border-radius:6px; border:1px solid #fef3c7; margin-top:0.4rem; max-width:90%;">💡 ${escapeHtml(word.mnemonic)}</div>` : ''}
        ${exampleHtml}
      </div>
      <div style="font-size:0.8rem; color:var(--text-muted);">1: Review &bull; 2: Mastered</div>
    `;
  } else {
    // Front: English -> Back: Hindi
    front.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; width:100%;">
        <span class="badge ${word.pos === 'Noun' ? 'badge-pos-noun' : 'badge-pos-adj'}">${word.pos}</span>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <div style="font-size:2.25rem; font-weight:800; color:var(--primary); line-height:1.2;">
          ${word.english}
        </div>
        <div style="font-size:0.9rem; color:var(--text-muted); margin-top:0.5rem;">Category: ${word.category || 'General'}</div>
      </div>
      <div style="font-size:0.8rem; color:var(--text-muted);">${IS_TOUCH_DEVICE ? 'Tap' : 'Press Space or click'} to reveal Hindi</div>
    `;

    back.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; width:100%;">
        <span class="badge ${word.pos === 'Noun' ? 'badge-pos-noun' : 'badge-pos-adj'}">${word.pos}</span>
        <button class="audio-btn" id="vocab-flash-word-audio" data-audio="${word.hindi}" aria-label="Listen to pronunciation of ${word.hindi}">🔊</button>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%;">
        <div style="font-family:var(--font-hindi); font-size:3rem; font-weight:700; color:var(--text-main); line-height:1.2;">
          ${word.hindi}
        </div>
        <div style="font-size:1.2rem; color:var(--secondary); font-weight:600; margin-top:0.25rem; ${translitDisplay}">
          ${word.roman || ''}
        </div>
        <div style="margin:0.5rem 0;">${genderBadge}</div>
        ${grammarDetails}
        ${exampleHtml}
      </div>
      <div style="font-size:0.8rem; color:var(--text-muted);">1: Review &bull; 2: Mastered</div>
    `;
  }

  // Audio listeners on front and back
  front.querySelector('#vocab-flash-word-audio')?.addEventListener('click', (e) => {
    e.stopPropagation();
    speakHindi(word.hindi, e.currentTarget);
  });
  back.querySelector('#vocab-flash-word-audio')?.addEventListener('click', (e) => {
    e.stopPropagation();
    speakHindi(word.hindi, e.currentTarget);
  });
  back.querySelector('#vocab-flash-sent-audio')?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (word.example?.hindi) speakHindi(word.example.hindi, e.currentTarget);
  });
}


// ==========================================================================
// SECTION 17: VOCABULARY STUDIO - SPEED MATCH GAME
// ==========================================================================
function initVocabSpeedMatch() {
  document.getElementById('vocab-restart-match-btn')?.addEventListener('click', startVocabSpeedMatch);
  document.getElementById('vocab-match-toggle-translit-btn')?.addEventListener('click', toggleSpeedMatchTransliteration);
}

function startVocabSpeedMatch() {
  const hindiCol = document.getElementById('vocab-match-hindi-col');
  const engCol = document.getElementById('vocab-match-english-col');
  const statusEl = document.getElementById('vocab-match-status');
  if (!hindiCol || !engCol) return;

  const isHidden = !!state.matchHideTransliteration;
  const vocabTab = document.getElementById('vocab-match-tab');
  if (vocabTab) vocabTab.classList.toggle('hide-translit', isHidden);

  state.vocabSelectedHindi = null;
  state.vocabSelectedEnglish = null;
  state.vocabMatchedCount = 0;
  state.vocabGameStartTime = Date.now();

  const deck = [...state.vocab].sort(() => Math.random() - 0.5).slice(0, 6);
  state.vocabMatchPairs = deck;

  const shuffledEng = [...deck].sort(() => Math.random() - 0.5);

  hindiCol.innerHTML = deck.map(w => `
    <button class="match-tile hindi" data-id="${w.id}" data-type="hindi" aria-label="Hindi word: ${w.hindi}">
      <span class="hindi-match-text">${w.hindi}</span>
      <span class="match-roman" style="${isHidden ? 'display:none;' : ''}; font-size:0.75rem; color:var(--secondary); font-weight:500;">${w.roman || ''}</span>
    </button>
  `).join('');

  engCol.innerHTML = shuffledEng.map(w => `
    <button class="match-tile" data-id="${w.id}" data-type="english" aria-label="English meaning: ${w.english}">
      <span class="eng-match-text">${w.english}</span>
    </button>
  `).join('');

  if (statusEl) statusEl.textContent = "Click a Hindi word, then match its English meaning.";
  announce("Vocab Speed Match started. 6 pairs to match.");

  hindiCol.querySelectorAll('.match-tile').forEach(tile => {
    tile.addEventListener('click', () => handleVocabMatchSelection(tile, 'hindi'));
  });

  engCol.querySelectorAll('.match-tile').forEach(tile => {
    tile.addEventListener('click', () => handleVocabMatchSelection(tile, 'english'));
  });
}

function handleVocabMatchSelection(tile, type) {
  if (tile.classList.contains('matched')) return;

  if (type === 'hindi') {
    if (tile.classList.contains('selected') || state.vocabSelectedHindi === tile.dataset.id) {
      tile.classList.remove('selected');
      tile.setAttribute('aria-pressed', 'false');
      state.vocabSelectedHindi = null;
      const word = state.vocab.find(w => w.id === tile.dataset.id);
      if (word) announce(`Deselected ${word.hindi}`);
      return;
    }
    document.querySelectorAll('#vocab-match-hindi-col .match-tile').forEach(t => {
      t.classList.remove('selected');
      t.setAttribute('aria-pressed', 'false');
    });
    tile.classList.add('selected');
    tile.setAttribute('aria-pressed', 'true');
    state.vocabSelectedHindi = tile.dataset.id;
    const word = state.vocab.find(w => w.id === tile.dataset.id);
    if (word) speakHindi(word.hindi, tile);
  } else {
    if (tile.classList.contains('selected') || state.vocabSelectedEnglish === tile.dataset.id) {
      tile.classList.remove('selected');
      tile.setAttribute('aria-pressed', 'false');
      state.vocabSelectedEnglish = null;
      const word = state.vocab.find(w => w.id === tile.dataset.id);
      if (word) announce(`Deselected English: ${word.english}`);
      return;
    }
    document.querySelectorAll('#vocab-match-english-col .match-tile').forEach(t => {
      t.classList.remove('selected');
      t.setAttribute('aria-pressed', 'false');
    });
    tile.classList.add('selected');
    tile.setAttribute('aria-pressed', 'true');
    state.vocabSelectedEnglish = tile.dataset.id;
  }

  if (state.vocabSelectedHindi && state.vocabSelectedEnglish) {
    if (state.vocabSelectedHindi === state.vocabSelectedEnglish) {
      // Match found
      const matchedHindi = document.querySelector(`#vocab-match-hindi-col .match-tile[data-id="${state.vocabSelectedHindi}"]`);
      const matchedEng = document.querySelector(`#vocab-match-english-col .match-tile[data-id="${state.vocabSelectedEnglish}"]`);

      matchedHindi?.classList.remove('selected');
      matchedHindi?.classList.add('matched');
      matchedEng?.classList.remove('selected');
      matchedEng?.classList.add('matched');

      state.vocabMatchedCount++;
      state.vocabSelectedHindi = null;
      state.vocabSelectedEnglish = null;

      announce("Correct match!");

      if (state.vocabMatchedCount === state.vocabMatchPairs.length) {
        const elapsed = Math.round((Date.now() - state.vocabGameStartTime) / 1000);
        const statusEl = document.getElementById('vocab-match-status');
        if (statusEl) {
          statusEl.innerHTML = `<strong style="color:var(--accent-green);">🎉 Excellent! Completed all 6 pairs in ${elapsed} seconds!</strong>`;
        }
        announce(`Game complete! You matched all pairs in ${elapsed} seconds.`);
      }
    } else {
      // Mismatch
      announce("Not a match. Try again.");
      setTimeout(() => {
        document.querySelectorAll('#vocab-match-tab .match-tile.selected').forEach(t => t.classList.remove('selected'));
        state.vocabSelectedHindi = null;
        state.vocabSelectedEnglish = null;
      }, 400);
    }
  }
}


// ==========================================================================
// TARGETED QUIZ PACKS REGISTRY & ENGINE (Vocabulary & Conversation Drills)
// ==========================================================================
const BUILTIN_TARGETED_QUIZ_PACKS = [
  {
    id: "days-of-week",
    title: "Days of the Week (सप्ताह के दिन)",
    icon: "🗓️",
    description: "Drill Monday through Sunday in Hindi Devanagari, English meaning, and calendar sequence.",
    items: [
      { id: "somvar", hindi: "सोमवार", roman: "somvār", english: "Monday", order: 1 },
      { id: "mangalvar", hindi: "मंगलवार", roman: "maṅgalvār", english: "Tuesday", order: 2 },
      { id: "budhvar", hindi: "बुधवार", roman: "budhvār", english: "Wednesday", order: 3 },
      { id: "guruvar", hindi: "गुरुवार", roman: "guruvār", english: "Thursday", order: 4 },
      { id: "shukravar", hindi: "शुक्रवार", roman: "śukravār", english: "Friday", order: 5 },
      { id: "shanivar", hindi: "शनिवार", roman: "śanivār", english: "Saturday", order: 6 },
      { id: "ravivar", hindi: "रविवार", roman: "ravivār", english: "Sunday", order: 7 }
    ]
  },
  {
    id: "question-words",
    title: "Question Words (प्रश्नवाचक शब्द)",
    icon: "❓",
    description: "Master the 5 W's and H in Hindi for asking questions and daily conversation.",
    items: [
      { id: "kya", hindi: "क्या", roman: "kyā", english: "what", hint: "General questions or yes/no questions at sentence start" },
      { id: "kahan", hindi: "कहाँ", roman: "kahāñ", english: "where", hint: "Asks for a place or location" },
      { id: "kab", hindi: "कब", roman: "kab", english: "when", hint: "Asks for time or date" },
      { id: "kyon", hindi: "क्यों", roman: "kyoñ", english: "why", hint: "Asks for a reason or cause" },
      { id: "kaun", hindi: "कौन", roman: "kaun", english: "who", hint: "Asks for a person or identity" },
      { id: "kaise", hindi: "कैसे", roman: "kaise", english: "how", hint: "Asks for method, manner, or health condition" },
      { id: "kitna", hindi: "कितना", roman: "kitnā", english: "how much / how many", hint: "Asks for quantity or cost" },
      { id: "kiska", hindi: "किसका", roman: "kiskā", english: "whose", hint: "Asks for ownership or possession" }
    ]
  },
  {
    id: "time-frequency",
    title: "Time & Frequency (समय व आवृत्ति)",
    icon: "⏰",
    description: "Practice key temporal markers like today, tomorrow, now, always, and daily.",
    items: [
      { id: "aaj", hindi: "आज", roman: "āj", english: "today", hint: "Present day" },
      { id: "kal_time", hindi: "कल", roman: "kal", english: "tomorrow / yesterday", hint: "One day away from today (past or future determined by verb)" },
      { id: "parson", hindi: "परसों", roman: "parsoñ", english: "day before yesterday / day after tomorrow", hint: "Two days away from today" },
      { id: "ab", hindi: "अब", roman: "ab", english: "now", hint: "At the present moment" },
      { id: "hamesha", hindi: "हमेशा", roman: "hameśā", english: "always", hint: "Continuously or every time" },
      { id: "roz", hindi: "रोज़", roman: "roz", english: "every day / daily", hint: "Daily routine" }
    ]
  },
  {
    id: "directions",
    title: "Directions & Positions (दिशाएँ व स्थिति)",
    icon: "🧭",
    description: "Drill essential navigational terms: right, left, ahead, behind, up, and down.",
    items: [
      { id: "dayen", hindi: "दाएँ", roman: "dāyeñ", english: "right (direction)" },
      { id: "bayen", hindi: "बाएँ", roman: "bāyeñ", english: "left (direction)" },
      { id: "aage", hindi: "आगे", roman: "āge", english: "ahead / in front" },
      { id: "piche", hindi: "पीछे", roman: "pīche", english: "behind / back" },
      { id: "upar", hindi: "ऊपर", roman: "ūpar", english: "up / above" },
      { id: "niche", hindi: "नीचे", roman: "nīche", english: "down / below" },
      { id: "andar", hindi: "अंदर", roman: "andar", english: "inside" },
      { id: "bahar", hindi: "बाहर", roman: "bāhar", english: "outside" }
    ]
  },
  {
    id: "numbers-1-10",
    title: "Numbers 1–10 (संख्याएँ १–१०)",
    icon: "🔢",
    description: "Master counting from one to ten in Hindi Devanagari and Latin script.",
    items: [
      { id: "ek", hindi: "एक", roman: "ek", english: "one (1)", order: 1 },
      { id: "do", hindi: "दो", roman: "do", english: "two (2)", order: 2 },
      { id: "teen", hindi: "तीन", roman: "tīn", english: "three (3)", order: 3 },
      { id: "char", hindi: "चार", roman: "cār", english: "four (4)", order: 4 },
      { id: "paanch", hindi: "पाँच", roman: "pāñc", english: "five (5)", order: 5 },
      { id: "chhah", hindi: "छह", roman: "chah", english: "six (6)", order: 6 },
      { id: "saat", hindi: "सात", roman: "sāt", english: "seven (7)", order: 7 },
      { id: "aath", hindi: "आठ", roman: "āṭh", english: "eight (8)", order: 8 },
      { id: "nau", hindi: "नौ", roman: "nau", english: "nine (9)", order: 9 },
      { id: "das", hindi: "दस", roman: "das", english: "ten (10)", order: 10 }
    ]
  }
];

function getActiveVocabQuizPack(topicId) {
  const topic = topicId || state.vocabQuizTopic;
  if (!topic || topic === 'mixed') return null;
  const builtin = BUILTIN_TARGETED_QUIZ_PACKS.find(p => p.id === topic);
  if (builtin) return builtin;
  return (state.customQuizPacks || []).find(p => p.id === topic) || null;
}

function generateTargetedQuizQuestions(topicId) {
  const pack = getActiveVocabQuizPack(topicId);
  if (!pack || !pack.items || pack.items.length === 0) {
    return generateVocabQuizQuestions();
  }

  const items = pack.items;
  const questions = [];
  const targetCount = Math.min(Math.max(items.length, 7), 10);

  function getDistractors(correctItem, key, formatter = x => x[key]) {
    const others = items.filter(x => x.id !== correctItem.id);
    const shuffledOthers = [...others].sort(() => Math.random() - 0.5);
    const pool = shuffledOthers.map(formatter);

    if (pool.length < 3) {
      const extra = (state.vocab || []).filter(w => w[key] && w[key] !== correctItem[key]).map(w => w[key]);
      pool.push(...extra.sort(() => Math.random() - 0.5));
    }
    const unique = Array.from(new Set(pool)).filter(val => val !== formatter(correctItem));
    return unique.slice(0, 3);
  }

  // 1. Meaning Recall: Hindi -> English
  const shuffledItems = [...items].sort(() => Math.random() - 0.5);
  shuffledItems.forEach(item => {
    const distractors = getDistractors(item, 'english');
    const opts = [
      { text: item.english, isCorrect: true },
      ...distractors.map(d => ({ text: d, isCorrect: false }))
    ].sort(() => Math.random() - 0.5);

    questions.push({
      type: `${pack.icon || '🎯'} ${pack.title.split('(')[0].trim()} • Meaning Recall`,
      question: `What is the English meaning of <strong>"${item.hindi}"</strong> (${item.roman || ''})?`,
      options: opts,
      explanation: `<strong>${item.hindi}</strong> (${item.roman || ''}) means <strong>${item.english}</strong>.${item.hint ? '<br>💡 ' + escapeHtml(item.hint) : ''}`
    });
  });

  // 2. Reverse Production: English -> Hindi
  const reverseSubset = [...items].sort(() => Math.random() - 0.5).slice(0, 5);
  reverseSubset.forEach(item => {
    const distractors = getDistractors(item, 'hindi', x => `${x.hindi} (${x.roman || ''})`);
    const opts = [
      { text: `${item.hindi} (${item.roman || ''})`, isCorrect: true },
      ...distractors.map(d => ({ text: d, isCorrect: false }))
    ].sort(() => Math.random() - 0.5);

    questions.push({
      type: `${pack.icon || '🎯'} ${pack.title.split('(')[0].trim()} • Reverse Recall`,
      question: `Which Hindi word means <strong>"${item.english}"</strong>?`,
      options: opts,
      explanation: `<strong>"${item.english}"</strong> in Hindi is <strong>${item.hindi}</strong> (${item.roman || ''}).${item.hint ? '<br>💡 ' + escapeHtml(item.hint) : ''}`
    });
  });

  // 3. Special sequential questions if items have 'order' (Days of the week or Numbers)
  const orderedItems = items.filter(x => typeof x.order === 'number').sort((a, b) => a.order - b.order);
  if (orderedItems.length >= 4) {
    orderedItems.forEach(item => {
      const nextOrder = (item.order % orderedItems.length) + 1;
      const nextItem = orderedItems.find(x => x.order === nextOrder);
      if (!nextItem) return;

      const wrongItems = orderedItems.filter(x => x.order !== nextOrder && x.order !== item.order);
      const wrongDistractors = [...wrongItems].sort(() => Math.random() - 0.5).slice(0, 3).map(x => `${x.hindi} (${x.english})`);
      const isDays = pack.id === 'days-of-week';
      const labelType = isDays ? 'day' : 'item';

      questions.push({
        type: `${pack.icon || '🎯'} Sequence & Order`,
        question: `Which ${labelType} comes immediately after <strong>"${item.hindi}"</strong> (${item.english})?`,
        options: [
          { text: `${nextItem.hindi} (${nextItem.english})`, isCorrect: true },
          ...wrongDistractors.map(d => ({ text: d, isCorrect: false }))
        ].sort(() => Math.random() - 0.5),
        explanation: `In calendar sequence, <strong>${nextItem.hindi}</strong> (${nextItem.english}) comes directly after <strong>${item.hindi}</strong> (${item.english}).`
      });
    });
  }

  // 4. In-use Context sentences if Question Words
  if (pack.id === 'question-words') {
    const contextMap = {
      kya: { sentence: "आपका नाम _____ है?", meaning: "What is your name?", target: "क्या" },
      kahan: { sentence: "आप _____ जा रहे हैं?", meaning: "Where are you going?", target: "कहाँ" },
      kab: { sentence: "ट्रेन _____ आएगी?", meaning: "When will the train arrive?", target: "कब" },
      kyon: { sentence: "आप _____ हँस रहे हैं?", meaning: "Why are you laughing?", target: "क्यों" },
      kaun: { sentence: "दरवाज़े पर _____ खड़ा है?", meaning: "Who is standing at the door?", target: "कौन" },
      kaise: { sentence: "आप _____ हैं?", meaning: "How are you?", target: "कैसे" },
      kitna: { sentence: "यह सेब _____ का है?", meaning: "How much does this apple cost?", target: "कितना" },
      kiska: { sentence: "यह किताब _____ है?", meaning: "Whose book is this?", target: "किसका" }
    };

    items.forEach(item => {
      const ctx = contextMap[item.id];
      if (!ctx) return;
      const distractors = items.filter(x => x.id !== item.id).sort(() => Math.random() - 0.5).slice(0, 3).map(x => `${x.hindi} (${x.roman})`);
      questions.push({
        type: "❓ Question Word In Context",
        question: `Fill in the blank:<br><br><span style="font-size:1.35rem; font-family:var(--font-hindi);">${ctx.sentence}</span><br><em>(${ctx.meaning})</em>`,
        options: [
          { text: `${item.hindi} (${item.roman})`, isCorrect: true },
          ...distractors.map(d => ({ text: d, isCorrect: false }))
        ].sort(() => Math.random() - 0.5),
        explanation: `The correct question word is <strong>${item.hindi}</strong> (${item.roman} - ${item.english}).`
      });
    });
  }

  return questions.sort(() => Math.random() - 0.5).slice(0, targetCount);
}

function refreshCustomQuizDropdown() {
  const optgroup = document.getElementById('vocab-custom-quiz-optgroup');
  if (!optgroup) return;
  optgroup.innerHTML = '';
  if (!state.customQuizPacks || state.customQuizPacks.length === 0) {
    optgroup.style.display = 'none';
    return;
  }
  optgroup.style.display = '';
  state.customQuizPacks.forEach(pack => {
    const opt = document.createElement('option');
    opt.value = pack.id;
    opt.textContent = `${pack.icon || '🎯'} ${pack.title} (${pack.items.length} words)`;
    optgroup.appendChild(opt);
  });
}

function updateVocabQuizTopicUI() {
  const topicSelect = document.getElementById('vocab-quiz-topic-select');
  if (topicSelect && state.vocabQuizTopic) {
    topicSelect.value = state.vocabQuizTopic;
  }
  const descEl = document.getElementById('targeted-quiz-topic-desc');
  const deleteBtn = document.getElementById('delete-active-custom-pack-btn');
  const pack = getActiveVocabQuizPack();

  if (pack) {
    if (descEl) descEl.innerHTML = `<strong>${escapeHtml(pack.title)}:</strong> ${escapeHtml(pack.description || '')}`;
    if (deleteBtn) deleteBtn.style.display = pack.isCustom ? 'inline-flex' : 'none';
  } else {
    if (descEl) descEl.textContent = "Drill for Grammatical Gender (M/F), Adjective-Noun Agreement, Plural forms, and Oblique case across core curriculum.";
    if (deleteBtn) deleteBtn.style.display = 'none';
  }
}

function initCustomQuizModal() {
  const modal = document.getElementById('custom-quiz-modal');
  const openBtn = document.getElementById('open-custom-quiz-modal-btn');
  const closeBtn = document.getElementById('close-custom-quiz-modal-btn');
  const cancelBtn = document.getElementById('cancel-custom-quiz-btn');
  const saveBtn = document.getElementById('save-custom-quiz-btn');
  const iconInput = document.getElementById('custom-quiz-icon');
  const pills = document.querySelectorAll('.quiz-icon-pill');

  function openModal() {
    if (!modal) return;
    modal.classList.add('open');
    renderSavedCustomQuizzesList();
    setTimeout(() => document.getElementById('custom-quiz-title')?.focus(), 50);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
  }

  openBtn?.addEventListener('click', openModal);
  closeBtn?.addEventListener('click', closeModal);
  cancelBtn?.addEventListener('click', closeModal);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  modal?.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      if (iconInput) iconInput.value = pill.dataset.emoji || '🎯';
    });
  });

  saveBtn?.addEventListener('click', () => {
    const title = document.getElementById('custom-quiz-title')?.value.trim();
    const icon = iconInput?.value.trim() || '🎯';
    const desc = document.getElementById('custom-quiz-desc')?.value.trim();
    const rawWords = document.getElementById('custom-quiz-words-input')?.value.trim();

    if (!title) {
      showToast("Please enter a title for your custom quiz.", "warning");
      document.getElementById('custom-quiz-title')?.focus();
      return;
    }

    if (!rawWords) {
      showToast("Please enter at least 3 word pairs.", "warning");
      document.getElementById('custom-quiz-words-input')?.focus();
      return;
    }

    const lines = rawWords.split('\n').map(l => l.trim()).filter(Boolean);
    const items = [];

    lines.forEach((line, index) => {
      const parts = line.split(/[,|\t]+/).map(p => p.trim()).filter(Boolean);
      if (parts.length >= 2) {
        const hindi = parts[0];
        let roman = '';
        let english = '';

        if (parts.length === 2) {
          english = parts[1];
          roman = (typeof devanagariToLatin === 'function') ? devanagariToLatin(hindi) : '';
        } else {
          roman = parts[1];
          english = parts.slice(2).join(', ');
        }

        const id = 'cq_' + Date.now() + '_' + index;
        items.push({ id, hindi, roman, english, order: index + 1 });
      }
    });

    if (items.length < 3) {
      showToast("Please provide at least 3 valid word pairs (e.g. 'सोमवार, somvār, Monday').", "warning");
      return;
    }

    const packId = 'custom_' + Date.now();
    const newPack = {
      id: packId,
      title: title,
      icon: icon,
      description: desc || `Custom targeted drill with ${items.length} words.`,
      items: items,
      isCustom: true
    };

    state.saveCustomQuizPack(newPack);
    state.vocabQuizTopic = packId;
    refreshCustomQuizDropdown();
    updateVocabQuizTopicUI();
    closeModal();

    // Reset form
    const titleInput = document.getElementById('custom-quiz-title');
    const descInput = document.getElementById('custom-quiz-desc');
    const wordsInput = document.getElementById('custom-quiz-words-input');
    if (titleInput) titleInput.value = '';
    if (descInput) descInput.value = '';
    if (wordsInput) wordsInput.value = '';
    if (iconInput) iconInput.value = '🎯';

    startVocabQuizSession();
    showToast(`🎉 Created targeted quiz "${title}" (${items.length} words)!`, "success");
    announce(`Created targeted quiz ${title} with ${items.length} words and started drill.`);
  });
}

function renderSavedCustomQuizzesList() {
  const section = document.getElementById('custom-quizzes-list-section');
  const container = document.getElementById('custom-quizzes-container');
  if (!section || !container) return;

  if (!state.customQuizPacks || state.customQuizPacks.length === 0) {
    section.style.display = 'none';
    container.innerHTML = '';
    return;
  }

  section.style.display = 'block';
  container.innerHTML = state.customQuizPacks.map(p => `
    <div class="custom-quiz-card-row">
      <div style="display:flex; align-items:center; gap:0.5rem;">
        <span style="font-size:1.3rem;">${p.icon || '🎯'}</span>
        <div>
          <strong style="font-size:0.95rem; color:var(--secondary);">${escapeHtml(p.title)}</strong>
          <div style="font-size:0.75rem; color:var(--text-muted);">${p.items.length} words &bull; ${escapeHtml(p.description || '')}</div>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:0.4rem;">
        <button type="button" class="action-btn nav-card cq-select-btn" data-id="${p.id}" style="padding:0.35rem 0.75rem; font-size:0.8rem;">
          ▶ Launch
        </button>
        <button type="button" class="action-btn text-danger-btn cq-delete-btn" data-id="${p.id}" style="padding:0.35rem 0.65rem; font-size:0.8rem;" title="Delete this quiz">
          🗑️
        </button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.cq-select-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      state.vocabQuizTopic = id;
      refreshCustomQuizDropdown();
      updateVocabQuizTopicUI();
      document.getElementById('custom-quiz-modal')?.classList.remove('open');
      startVocabQuizSession();
    });
  });

  container.querySelectorAll('.cq-delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const pack = state.customQuizPacks.find(p => p.id === id);
      if (!pack) return;
      if (confirm(`Delete custom quiz "${pack.title}"?`)) {
        state.deleteCustomQuizPack(id);
        if (state.vocabQuizTopic === id) {
          state.vocabQuizTopic = 'mixed';
        }
        refreshCustomQuizDropdown();
        updateVocabQuizTopicUI();
        renderSavedCustomQuizzesList();
        showToast(`Deleted custom quiz "${pack.title}".`, "info");
      }
    });
  });
}


// ==========================================================================
// SECTION 18: VOCABULARY STUDIO - GENDER & AGREEMENT QUIZ
// ==========================================================================
function initVocabQuiz() {
  document.getElementById('vocab-next-quiz-btn')?.addEventListener('click', nextVocabQuizQuestion);
  document.getElementById('vocab-restart-quiz-btn')?.addEventListener('click', startVocabQuizSession);
  document.getElementById('clear-vocab-best-btn')?.addEventListener('click', () => promptClearQuizBestTime('vocab'));
  
  const topicSelect = document.getElementById('vocab-quiz-topic-select');
  topicSelect?.addEventListener('change', (e) => {
    state.vocabQuizTopic = e.target.value;
    updateVocabQuizTopicUI();
    startVocabQuizSession();
  });

  document.getElementById('delete-active-custom-pack-btn')?.addEventListener('click', () => {
    const pack = getActiveVocabQuizPack();
    if (!pack || !pack.isCustom) return;
    if (confirm(`Are you sure you want to delete the custom quiz "${pack.title}"?`)) {
      state.deleteCustomQuizPack(pack.id);
      state.vocabQuizTopic = 'mixed';
      refreshCustomQuizDropdown();
      updateVocabQuizTopicUI();
      startVocabQuizSession();
      showToast(`Deleted custom quiz "${pack.title}".`, "info");
    }
  });

  initCustomQuizModal();
  refreshCustomQuizDropdown();
  updateVocabQuizTopicUI();
  updateQuizBestDisplay('vocab');
}

function generateVocabQuizQuestions() {
  const questions = [];
  const nounsWithGender = state.vocab.filter(w => w.pos === 'Noun' && (w.gender === 'Masculine' || w.gender === 'Feminine'));
  const inflectingAdjs = state.vocab.filter(w => w.pos === 'Adjective' && w.isInflecting && w.inflection);
  const nounsWithPlural = state.vocab.filter(w => w.pos === 'Noun' && w.inflection && w.inflection.direct_pl);
  const nounsWithOblique = state.vocab.filter(w => w.pos === 'Noun' && w.inflection && w.inflection.oblique_sg);

  // 1. Gender Recognition Questions (3 questions)
  const genderSample = [...nounsWithGender].sort(() => Math.random() - 0.5).slice(0, 3);
  genderSample.forEach(w => {
    const isMasc = w.gender === 'Masculine';
    questions.push({
      type: "⚖️ Grammatical Gender (लिंग पहचान)",
      question: `What is the grammatical gender of <strong>"${w.hindi}"</strong> (${w.roman || ''} - <em>${w.english}</em>)?`,
      options: [
        { text: "Masculine (पुल्लिंग - M)", isCorrect: isMasc },
        { text: "Feminine (स्त्रीलिंग - F)", isCorrect: !isMasc }
      ],
      explanation: `<strong>${w.hindi}</strong> (${w.roman} - ${w.english}) is grammatically <strong>${w.gender}</strong>. ${w.example?.explanation ? '<br>' + escapeHtml(w.example.explanation) : ''}`
    });
  });

  // 2. Adjective-Noun Agreement Questions (3 questions)
  const adjSample = [...inflectingAdjs].sort(() => Math.random() - 0.5).slice(0, 3);
  adjSample.forEach(adj => {
    // Pick a test noun
    const testNoun = nounsWithGender[Math.floor(Math.random() * nounsWithGender.length)];
    const isFem = testNoun.gender === 'Feminine';
    const cleanFormMasc = adj.inflection.m_sg.split(' ')[0];
    const cleanFormFem = adj.inflection.f_sg.split(' ')[0];
    const cleanFormPlural = adj.inflection.m_pl.split(' ')[0];

    const correctForm = isFem ? cleanFormFem : cleanFormMasc;
    const wrongForm1 = isFem ? cleanFormMasc : cleanFormFem;
    const wrongForm2 = cleanFormPlural;

    const opts = [
      { text: correctForm, isCorrect: true },
      { text: wrongForm1, isCorrect: false },
      { text: wrongForm2, isCorrect: false }
    ].sort(() => Math.random() - 0.5);

    questions.push({
      type: "🎨 Adjective Agreement (विशेषण समन्वय)",
      question: `Fill in the blank with the correct form of <strong>"${adj.hindi}"</strong> (${adj.english}):<br><br><span style="font-size:1.3rem; font-family:var(--font-hindi);">यह एक ___ ${testNoun.hindi} (${testNoun.english}) है।</span>`,
      options: opts,
      explanation: `Because <strong>${testNoun.hindi}</strong> (${testNoun.english}) is <strong>${testNoun.gender}</strong>, the inflecting adjective takes the ${testNoun.gender.toLowerCase()} singular form: <strong>${correctForm}</strong>.`
    });
  });

  // 3. Direct Plural Formation Questions (2 questions)
  const pluralSample = [...nounsWithPlural].sort(() => Math.random() - 0.5).slice(0, 2);
  pluralSample.forEach(noun => {
    const correctPlural = noun.inflection.direct_pl;
    const distractors = [
      noun.hindi + 'ें',
      noun.hindi + 'ियाँ',
      noun.inflection.oblique_pl || (noun.hindi + 'ों')
    ].filter(d => d !== correctPlural);

    const opts = [
      { text: correctPlural, isCorrect: true },
      { text: distractors[0] || noun.hindi, isCorrect: false },
      { text: distractors[1] || (noun.hindi + 'ी'), isCorrect: false }
    ].sort(() => Math.random() - 0.5);

    questions.push({
      type: "🔄 Plural Formation (बहुवचन रूप)",
      question: `What is the direct plural (बहुवचन) of the noun <strong>"${noun.hindi}"</strong> (${noun.roman} - <em>${noun.english}</em>)?`,
      options: opts,
      explanation: `The direct plural of <strong>${noun.hindi}</strong> is <strong>${correctPlural}</strong> (${noun.pluralDirect || ''}).`
    });
  });

  // 4. Oblique Case Drill Questions (2 questions)
  const obliqueSample = [...nounsWithOblique].sort(() => Math.random() - 0.5).slice(0, 2);
  obliqueSample.forEach(noun => {
    const isEndingInA = noun.hindi.endsWith('ा') && noun.gender === 'Masculine';
    const correctOblique = isEndingInA ? `${noun.inflection.oblique_sg} में` : `${noun.hindi} में`;
    const wrong1 = isEndingInA ? `${noun.hindi} में` : `${noun.hindi}े में`;
    const wrong2 = `${noun.inflection.oblique_pl} में`;

    const opts = [
      { text: correctOblique, isCorrect: true },
      { text: wrong1, isCorrect: false },
      { text: wrong2, isCorrect: false }
    ].sort(() => Math.random() - 0.5);

    questions.push({
      type: "📍 Postposition & Oblique Case (तिर्यक रूप)",
      question: `When followed by the postposition <strong>'में'</strong> (in), what form does <strong>"${noun.hindi}"</strong> (${noun.english}) take?`,
      options: opts,
      explanation: `Postpositions like 'में' put Hindi nouns into the oblique case. ${isEndingInA ? 'Type 1 masculine nouns ending in -आ change to -ए, so ' + noun.hindi + ' becomes <strong>' + correctOblique + '</strong>.' : 'Nouns not ending in -आ stay unchanged in the singular oblique: <strong>' + correctOblique + '</strong>.'}`
    });
  });

  return questions.sort(() => Math.random() - 0.5).slice(0, 10);
}

function startVocabQuizSession() {
  state.vocabQuizQuestions = (state.vocabQuizTopic && state.vocabQuizTopic !== 'mixed')
    ? generateTargetedQuizQuestions(state.vocabQuizTopic)
    : generateVocabQuizQuestions();
  state.vocabQuizIndex = 0;
  state.vocabQuizScore = 0;
  document.getElementById('vocab-quiz-score-badge').textContent = `Score: 0 / ${state.vocabQuizQuestions.length}`;
  startQuizTimer('vocab');
  updateQuizBestDisplay('vocab');
  renderVocabQuizQuestion();
  const pack = getActiveVocabQuizPack();
  const title = pack ? pack.title : "Vocab Gender & Agreement";
  announce(`${title} Quiz started.`);
}

function renderVocabQuizQuestion() {
  const container = document.getElementById('vocab-quiz-card');
  const nextBtn = document.getElementById('vocab-next-quiz-btn');
  const restartBtn = document.getElementById('vocab-restart-quiz-btn');
  if (!container) return;

  nextBtn.style.display = 'none';
  restartBtn.style.display = 'none';

  if (state.vocabQuizIndex >= state.vocabQuizQuestions.length) {
    const elapsed = stopQuizTimer('vocab');
    const storageKey = getVocabQuizStorageKey();
    const { isNewBest, currentBest } = checkAndUpdateQuizBestTime(storageKey, elapsed, state.vocabQuizScore, state.vocabQuizQuestions.length);
    updateQuizBestDisplay('vocab');

    const pack = getActiveVocabQuizPack();
    const quizTitle = pack ? `${pack.title} Quiz` : "Vocab Quiz";

    container.innerHTML = `
      <div style="text-align:center; padding:2rem 0;">
        <div style="font-size:3rem; margin-bottom:0.5rem;">🎉</div>
        <h2 style="font-size:1.85rem; margin-bottom:0.5rem; color:var(--secondary);">${escapeHtml(quizTitle)} Complete!</h2>
        <p style="font-size:1.15rem; color:var(--text-muted); margin-bottom:1rem;">
          You scored <strong>${state.vocabQuizScore} out of ${state.vocabQuizQuestions.length}</strong>!
        </p>

        ${isNewBest ? `
          <div class="quiz-new-best-banner">
            🏆 New Personal Best! <strong>${formatQuizTime(elapsed)}</strong> (${state.vocabQuizScore}/${state.vocabQuizQuestions.length})
          </div>
        ` : ''}

        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap; margin:1rem 0 1.5rem; font-size:1rem;">
          <div style="background:var(--bg); border:1px solid var(--border); padding:0.6rem 1.2rem; border-radius:var(--radius-sm);">
            ⏱️ Time Taken: <strong>${formatQuizTime(elapsed)}</strong>
          </div>
          <div style="background:var(--bg); border:1px solid var(--border); padding:0.6rem 1.2rem; border-radius:var(--radius-sm);">
            🏆 Best Record: <strong id="vocab-complete-best-record">${formatBestRecord(currentBest)}</strong>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; align-items:center; gap:0.6rem;">
          <button class="action-btn good" id="finish-vocab-restart-btn" style="max-width:240px; margin:0 auto;">
            Take Quiz Again
          </button>
          ${currentBest ? `
            <button type="button" class="action-btn text-danger-btn" id="finish-vocab-clear-best-btn" style="font-size:0.85rem; padding:0.35rem 0.9rem;">
              🗑️ Clear Best Time
            </button>
          ` : ''}
        </div>
      </div>
    `;
    announce(`${quizTitle} complete. You scored ${state.vocabQuizScore} out of ${state.vocabQuizQuestions.length} in ${formatQuizTime(elapsed)}.`);
    document.getElementById('finish-vocab-restart-btn')?.addEventListener('click', startVocabQuizSession);
    document.getElementById('finish-vocab-clear-best-btn')?.addEventListener('click', () => promptClearQuizBestTime('vocab'));
    return;
  }

  const q = state.vocabQuizQuestions[state.vocabQuizIndex];

  container.innerHTML = `
    <div class="quiz-question-box">
      <div class="quiz-type-badge">${q.type}</div>
      <div class="quiz-question-text">${q.question}</div>
    </div>
    <div class="quiz-options" id="vocab-quiz-options-list" role="group" aria-label="Answer options">
      ${q.options.map((opt, i) => `
        <button class="option-btn vocab-opt-btn" data-index="${i}">
          <span>${opt.text}</span>
          <span class="opt-status" aria-hidden="true"></span>
        </button>
      `).join('')}
    </div>
    <div class="quiz-explanation" id="vocab-quiz-explanation-box" style="display:none;" aria-live="polite"></div>
  `;

  const optionBtns = container.querySelectorAll('.vocab-opt-btn');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedIndex = parseInt(btn.dataset.index);
      const isCorrect = q.options[selectedIndex].isCorrect;

      optionBtns.forEach((b, idx) => {
        b.disabled = true;
        if (q.options[idx].isCorrect) {
          b.classList.add('correct');
          b.querySelector('.opt-status').textContent = '✓';
        } else if (idx === selectedIndex) {
          b.classList.add('incorrect');
          b.querySelector('.opt-status').textContent = '✗';
        }
      });

      if (isCorrect) {
        state.vocabQuizScore++;
        document.getElementById('vocab-quiz-score-badge').textContent = `Score: ${state.vocabQuizScore} / ${state.vocabQuizQuestions.length}`;
        announce("Correct answer! " + q.explanation.replace(/<[^>]*>/g, ''));
      } else {
        announce("Incorrect. " + q.explanation.replace(/<[^>]*>/g, ''));
      }

      const expBox = document.getElementById('vocab-quiz-explanation-box');
      expBox.style.display = 'block';
      expBox.innerHTML = q.explanation;

      nextBtn.style.display = 'inline-block';
      nextBtn.focus();
    });
  });
}

function nextVocabQuizQuestion() {
  state.vocabQuizIndex++;
  renderVocabQuizQuestion();
}


// ==========================================================================
// ==========================================================================
// SECTION 19: VOCABULARY STUDIO - CUSTOM ADD & MULTI-FILE NOTES INGESTION
// ==========================================================================
function initCustomVocabForm() {
  const form = document.getElementById('add-vocab-form');
  const successNotice = document.getElementById('add-vocab-success');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const hindi = document.getElementById('custom-vocab-hindi').value.trim();
    const roman = document.getElementById('custom-vocab-roman').value.trim();
    const english = document.getElementById('custom-vocab-english').value.trim();
    const pos = document.getElementById('custom-vocab-pos').value;
    const gender = document.getElementById('custom-vocab-gender').value;
    const plural = document.getElementById('custom-vocab-plural').value.trim();
    const mnemonic = document.getElementById('custom-vocab-mnemonic').value.trim();
    const exHindi = document.getElementById('custom-vocab-example-hindi').value.trim();
    const exEnglish = document.getElementById('custom-vocab-example-english').value.trim();

    if (!hindi || !english) return;

    // Guarantee pure Latin script for transliteration; skip Devanagari in roman position
    const cleanRoman = (roman && isLatinScript(roman) && !containsDevanagari(roman))
      ? roman
      : devanagariToLatin(hindi);

    const newWord = {
      id: "custom-vocab-" + Date.now(),
      hindi,
      roman: cleanRoman,
      english,
      pos,
      gender: gender === 'none' ? null : gender,
      category: "Custom Added / My Notes",
      pluralDirect: plural || null,
      mnemonic: mnemonic || `Notes practice for ${hindi}.`,
      isInflecting: pos === 'Adjective' && hindi.endsWith('ा'),
      example: exHindi ? {
        hindi: exHindi,
        roman: "",
        english: exEnglish || ""
      } : null
    };

    const isExisting = state.hasWord(hindi);
    state.saveCustomWord(newWord);
    renderVocabGrid();

    form.reset();
    successNotice.style.display = 'block';
    if (isExisting) {
      successNotice.textContent = `✓ Word "${hindi}" already existed in your deck and was updated!`;
      showToast(`Word "${hindi}" updated in your vocabulary deck.`, 'info');
      announce(`Word ${hindi} updated in vocabulary deck.`);
    } else {
      successNotice.textContent = `✓ Word "${hindi}" successfully added to your vocabulary deck!`;
      showToast(`Word "${hindi}" added to your vocabulary deck!`, 'success');
      announce(`Word ${hindi} added to vocabulary deck.`);
    }
    setTimeout(() => {
      successNotice.style.display = 'none';
    }, 4000);
  });

  const customVocabHindiInput = document.getElementById('custom-vocab-hindi');
  const customVocabRomanInput = document.getElementById('custom-vocab-roman');
  customVocabHindiInput?.addEventListener('blur', () => {
    if (customVocabRomanInput && !customVocabRomanInput.value.trim() && customVocabHindiInput.value.trim()) {
      customVocabRomanInput.value = devanagariToLatin(customVocabHindiInput.value.trim());
    }
  });
  customVocabRomanInput?.addEventListener('blur', () => {
    const val = customVocabRomanInput.value.trim();
    if (val && (containsDevanagari(val) || !isLatinScript(val))) {
      showToast("Romanisation must be in Latin script (Devanagari skipped).", "warning");
      customVocabRomanInput.value = customVocabHindiInput && customVocabHindiInput.value.trim()
        ? devanagariToLatin(customVocabHindiInput.value.trim())
        : '';
    }
  });
}

function initVocabNotesStudio() {
  const dropZone = document.getElementById('vocab-drop-zone');
  const fileInput = document.getElementById('vocab-file-input');
  const browseBtn = document.getElementById('vocab-browse-file-btn');
  const rawTextArea = document.getElementById('vocab-raw-text');
  const loadSampleBtn = document.getElementById('load-sample-vocab-btn');
  const analyzeBtn = document.getElementById('analyze-vocab-btn');
  const previewSection = document.getElementById('vocab-preview-section');
  const previewHeading = document.getElementById('vocab-preview-heading');
  const previewTableBody = document.getElementById('vocab-preview-table-body');
  const selectAllCheckbox = document.getElementById('select-all-vocab-preview');
  const selectedCountLabel = document.getElementById('vocab-preview-selected-count');
  const selectNewVocabBtn = document.getElementById('select-new-vocab-btn');
  const cleanNoiseBtn = document.getElementById('clean-vocab-noise-btn');
  const confirmImportBtn = document.getElementById('confirm-vocab-import-btn');
  const successBanner = document.getElementById('vocab-import-success-banner');
  const exportDbBtn = document.getElementById('export-vocab-db-btn');
  const clearCustomBtn = document.getElementById('clear-custom-vocab-btn');
  const dbStatusLabel = document.getElementById('vocab-db-status-label');

  const fileStatusWrap = document.getElementById('vocab-ingest-file-status-wrap');
  const statusBannerWrap = document.getElementById('vocab-ingest-status-banner-wrap');
  const vocabSearchInput = document.getElementById('vocab-preview-search-input');
  const vocabSearchClearBtn = document.getElementById('vocab-preview-search-clear-btn');
  const vocabSearchStatus = document.getElementById('vocab-preview-search-status');

  let extractedList = [];

  function updateVocabDbStatus() {
    const stored = safeStorage.getItem('hindi_custom_vocab');
    let custom = [];
    if (stored) {
      try { custom = JSON.parse(stored); } catch (e) { custom = []; }
    }
    if (dbStatusLabel) {
      dbStatusLabel.textContent = `Total custom words stored locally: ${custom.length}`;
    }
  }
  updateVocabDbStatus();

  function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  function setVocabIngestState(status, data = {}) {
    if (status === 'idle') {
      if (statusBannerWrap) statusBannerWrap.innerHTML = '';
      if (fileStatusWrap) fileStatusWrap.style.display = 'none';
      return;
    }

    if (status === 'reading') {
      const isMulti = data.fileCount > 1;
      const title = isMulti ? `${data.fileCount} files (${data.fileNames?.join(', ')})` : data.fileName;
      const subtitle = isMulti 
        ? `${formatBytes(data.totalSize || 0)} &bull; Reading and decoding ${data.fileCount} files concurrently...`
        : `${formatBytes(data.fileSize || 0)} &bull; Reading and decoding file...`;

      if (fileStatusWrap) {
        fileStatusWrap.style.display = 'block';
        fileStatusWrap.innerHTML = `
          <div class="file-status-card">
            <div class="file-status-left">
              <span class="file-status-icon">${isMulti ? '📁' : '📑'}</span>
              <div>
                <div class="file-status-name">${escapeHtml(title)}</div>
                <div class="file-status-meta">${subtitle}</div>
              </div>
            </div>
            <div class="spinner"></div>
          </div>
        `;
      }

      if (statusBannerWrap) {
        statusBannerWrap.innerHTML = `
          <div class="status-banner processing">
            <div class="spinner"></div>
            <div>
              <strong>Processing ${isMulti ? data.fileCount + ' files' : '"' + escapeHtml(data.fileName) + '"'}...</strong><br>
              <span style="font-size:0.85rem; opacity:0.9;">
                Extracting vocabulary words, detecting grammatical gender, and identifying parts of speech...
              </span>
            </div>
          </div>
        `;
      }
      announce(`Reading and decoding ${isMulti ? data.fileCount + ' files' : data.fileName}`);
    } else if (status === 'success') {
      const isMulti = data.fileCount > 1;
      const title = isMulti ? `${data.fileCount} files loaded` : (data.fileName || 'Loaded Vocabulary Notes');
      const meta = isMulti
        ? `${data.charCount?.toLocaleString() || ''} characters decoded &bull; <strong style="color:var(--accent-green);">${data.count} words detected</strong> across ${data.fileCount} files`
        : `${data.charCount ? data.charCount.toLocaleString() + ' characters &bull; ' : ''}<strong style="color:var(--accent-green);">${data.count} words detected</strong>`;

      let badgesHtml = '';
      if (isMulti && Array.isArray(data.fileSummaries)) {
        badgesHtml = `
          <div class="multi-file-pills-list">
            ${data.fileSummaries.map(s => `
              <span class="multi-file-badge">
                📑 ${escapeHtml(s.name)} (${s.count} words)
              </span>
            `).join('')}
          </div>
        `;
      }

      if (fileStatusWrap) {
        fileStatusWrap.style.display = 'block';
        fileStatusWrap.innerHTML = `
          <div class="file-status-card">
            <div class="file-status-left" style="flex:1;">
              <span class="file-status-icon">✓</span>
              <div style="flex:1;">
                <div class="file-status-name">${escapeHtml(title)}</div>
                <div class="file-status-meta">${meta}</div>
                ${badgesHtml}
              </div>
            </div>
            <button type="button" class="action-btn nav-card" id="clear-selected-vocab-files-btn" style="flex:none; padding:0.35rem 0.75rem; font-size:0.8rem;">
              Clear All
            </button>
          </div>
        `;
        document.getElementById('clear-selected-vocab-files-btn')?.addEventListener('click', () => {
          rawTextArea.value = '';
          previewSection.style.display = 'none';
          extractedList = [];
          setVocabIngestState('idle');
          announce("Vocabulary notes cleared.");
        });
      }

      if (statusBannerWrap) {
        statusBannerWrap.innerHTML = `
          <div class="status-banner success">
            <h4>🎉 Successfully processed ${isMulti ? data.fileCount + ' files' : (data.fileName ? '"' + escapeHtml(data.fileName) + '"' : 'your notes')}!</h4>
            <p>
              Found <strong>${data.count} vocabulary words</strong>. Review detected gender and parts of speech in the table below, then click <strong>"Import Words to Deck"</strong>.
            </p>
          </div>
        `;
      }
      announce(`Successfully processed ${isMulti ? data.fileCount + ' files' : 'notes'}. Found ${data.count} words.`);
    } else if (status === 'error') {
      if (statusBannerWrap) {
        statusBannerWrap.innerHTML = `
          <div class="status-banner error">
            <h4>❌ Could not process vocabulary files</h4>
            <p>${escapeHtml(data.message || 'An unexpected error occurred while reading your files.')}</p>
          </div>
        `;
      }
      announce("Error processing vocabulary files. " + data.message, 'assertive');
    }
  }

  browseBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput?.click();
  });

  dropZone?.addEventListener('click', (e) => {
    if (e.target !== browseBtn) fileInput?.click();
  });

  dropZone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });

  dropZone?.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));

  dropZone?.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer && e.dataTransfer.files.length) {
      handleMultipleVocabFiles(Array.from(e.dataTransfer.files));
    }
  });

  fileInput?.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length) {
      handleMultipleVocabFiles(Array.from(e.target.files));
      e.target.value = '';
    }
  });

  function readVocabFileAsText(file) {
    return new Promise((resolve, reject) => {
      const cleanName = file.name.replace(/^.*[\\\/]/, '');
      const reader = new FileReader();

      reader.onerror = () => reject(new Error(`Failed to read "${cleanName}"`));
      reader.onabort = () => reject(new Error(`Read aborted for "${cleanName}"`));

      reader.onload = (evt) => {
        let content = evt.target.result;
        if (typeof content === 'string') {
          content = content.replace(/^\uFEFF/, '');
        }
        resolve({
          name: cleanName,
          size: file.size,
          content
        });
      };

      reader.readAsText(file);
    });
  }

  async function handleMultipleVocabFiles(files) {
    if (!files || !files.length) return;

    const totalSize = files.reduce((acc, f) => acc + f.size, 0);
    const fileNames = files.map(f => f.name.replace(/^.*[\\\/]/, ''));

    setVocabIngestState('reading', {
      fileCount: files.length,
      fileNames,
      totalSize,
      fileName: fileNames[0],
      fileSize: files[0].size
    });

    try {
      const readResults = await Promise.all(files.map(readVocabFileAsText));
      let combinedContent = '';
      const allExtractedWords = [];
      const fileSummaries = [];
      let totalChars = 0;

      for (let i = 0; i < readResults.length; i++) {
        const item = readResults[i];
        let content = item.content;

        if (item.name.toLowerCase().endsWith('.json')) {
          try {
            const parsed = JSON.parse(content);
            if (Array.isArray(parsed)) {
              parsed.forEach(w => {
                state.saveCustomWord(w);
                state.vocabFlashcardsList.push(w);
              });
              fileSummaries.push({ name: item.name, count: parsed.length });
              continue;
            }
          } catch (err) {
            console.error("Vocab JSON parse failed, treating as text", err);
          }
        }

        const isRtf = item.name.toLowerCase().endsWith('.rtf') || (typeof content === 'string' && content.trim().startsWith('{\\rtf'));
        if (isRtf) {
          // Re-use RTF converter
          const rtfFunc = window.convertRtfToPlainText || convertRtfToPlainTextFallback;
          content = rtfFunc(content);
        }

        totalChars += content.length;

        if (readResults.length > 1) {
          combinedContent += `\n\n// ==========================================\n// SOURCE FILE: ${item.name}\n// ==========================================\n` + content;
        } else {
          combinedContent = content;
        }

        const wordsFromFile = parseVocabNotesContent(content, item.name);
        fileSummaries.push({ name: item.name, count: wordsFromFile.length });
        allExtractedWords.push(...wordsFromFile);
      }

      rawTextArea.value = combinedContent.trim();

      // Deduplicate words by Hindi Devanagari, joining sources
      const wordMap = new Map();
      allExtractedWords.forEach(w => {
        if (!wordMap.has(w.hindi)) {
          wordMap.set(w.hindi, { ...w });
        } else {
          const existing = wordMap.get(w.hindi);
          if (w.sourceFile && !existing.sourceFile.includes(w.sourceFile)) {
            existing.sourceFile += ', ' + w.sourceFile;
          }
          if ((!existing.english || existing.english.startsWith('meaning to')) && w.english && !w.english.startsWith('meaning to')) {
            existing.english = w.english;
          }
        }
      });

      extractedList = Array.from(wordMap.values()).map(item => {
        const isDup = state.hasWord(item.hindi);
        return {
          ...item,
          isDuplicate: isDup,
          existingWord: state.getWord(item.hindi),
          selected: !isDup
        };
      });

      if (extractedList.length > 0) {
        setVocabIngestState('success', {
          fileCount: files.length,
          fileNames,
          fileName: fileNames[0],
          count: extractedList.length,
          charCount: totalChars,
          fileSummaries
        });
        renderVocabPreview(extractedList);
        previewSection.style.display = 'block';
        setTimeout(() => {
          if (previewSection && typeof previewSection.scrollIntoView === 'function') {
            previewSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        setVocabIngestState('error', {
          message: "No vocabulary words recognized in the uploaded files. Ensure they contain Hindi words with definitions."
        });
        previewSection.style.display = 'none';
      }
    } catch (err) {
      console.error("Multi-file vocab error:", err);
      setVocabIngestState('error', {
        message: `Error reading files: ${err.message || 'Unexpected failure'}`
      });
    }
  }

  function convertRtfToPlainTextFallback(rtf) {
    if (!rtf || !rtf.trim().startsWith('{\\rtf')) return rtf;
    return rtf.replace(/\\[a-zA-Z]+-?\d* ?/g, ' ').replace(/[{}]/g, '').trim();
  }

  loadSampleBtn?.addEventListener('click', () => {
    rawTextArea.value = `# Semester 1 - Key Nouns and Adjectives
- कमरा (kamrā) - room [m]
- किताब (kitāb) - book [f]
- अच्छा (acchā) - good [adj]
- बड़ा (baṛā) - big [adj]
- पानी (pānī) - water [m]
- चाय (cāy) - tea [f]
- मेज़ (mez) - table [f]
- साफ़ (sāf) - clean [adj]`;
    analyzeVocabNotes();
    announce("Sample vocabulary notes loaded.");
  });

  analyzeBtn?.addEventListener('click', analyzeVocabNotes);

  function analyzeVocabNotes() {
    const text = rawTextArea.value.trim();
    if (!text) {
      showToast("Please paste or load vocabulary notes first.", "warning");
      return;
    }

    extractedList = parseVocabNotesContent(text, 'Pasted Notes');
    if (!extractedList.length) {
      showToast("No vocabulary words recognized in the text.", "warning");
      previewSection.style.display = 'none';
      return;
    }

    renderVocabPreview(extractedList);
    previewSection.style.display = 'block';
    setVocabIngestState('success', {
      fileName: 'Pasted Notes',
      count: extractedList.length,
      charCount: text.length
    });
    showToast(`Found ${extractedList.length} vocabulary words!`, "success");
  }

  function parseVocabNotesContent(content, defaultSource = 'Pasted Notes') {
    const lines = content.split(/\r?\n/);
    const results = [];
    const hindiWordRegex = /[\u0900-\u097F]+/;
    let currentSource = defaultSource;

    for (let line of lines) {
      line = line.trim();
      if (!line) continue;

      const sourceMatch = line.match(/^\/\/\s*SOURCE FILE:\s*(.+)$/i);
      if (sourceMatch) {
        currentSource = sourceMatch[1].trim();
        continue;
      }

      if (line.startsWith('#') || line.startsWith('//')) continue;

      const hindiMatch = line.match(hindiWordRegex);
      if (!hindiMatch) continue;

      const hindi = hindiMatch[0];
      // Skip if it looks like an infinitive verb ending in -ना
      if (hindi.endsWith('ना') && hindi.length > 2) continue;

      let roman = '';
      // 1. Check all parentheses in the line
      const parens = [...line.matchAll(/\(([^)]+)\)/g)];
      for (const m of parens) {
        const candidate = m[1].trim();
        if (containsDevanagari(candidate)) {
          // Identified Devanagari script for a romanised candidate -> SKIP it!
          continue;
        }
        if (/^(?:tr|intr|transitive|intransitive|m|f|masc|fem|adj|noun|post|postposition|adv|v|verb)$/i.test(candidate)) {
          continue;
        }
        if (/^to\s+[a-z]+/i.test(candidate)) {
          continue;
        }
        if (isLatinScript(candidate)) {
          roman = candidate;
          break;
        }
      }

      // 2. Check all brackets in the line if not found
      if (!roman) {
        const brackets = [...line.matchAll(/\[([^\]]+)\]/g)];
        for (const m of brackets) {
          const candidate = m[1].trim();
          if (containsDevanagari(candidate)) {
            // Skip Devanagari in brackets
            continue;
          }
          if (/^(?:tr|intr|transitive|intransitive|m|f|masc|fem|adj|noun|post|postposition|adv|v|verb)$/i.test(candidate)) {
            continue;
          }
          if (/^to\s+[a-z]+/i.test(candidate)) {
            continue;
          }
          if (isLatinScript(candidate)) {
            roman = candidate;
            break;
          }
        }
      }

      // 3. Check pipe or tab separated columns
      if (!roman && (/[\t\|]/.test(line) || / - /.test(line))) {
        const cols = line.split(/\s*[\t\|]\s*/).filter(c => c.length > 0);
        if (cols.length >= 3) {
          const isCol2Tag = /^(?:m|f|masc|fem|adj|noun|post|postposition)$/i.test(cols[2].trim());
          if (!isCol2Tag) {
            const candidate = cols[1].trim();
            if (containsDevanagari(candidate)) {
              // Skip Devanagari in roman column
            } else if (isLatinScript(candidate) && !/^(?:m|f|masc|fem|adj|noun|post)$/i.test(candidate)) {
              roman = candidate;
            }
          }
        }
      }

      // Guarantee pure Latin script; if missing or skipped, auto-generate
      if (!roman || !isLatinScript(roman) || containsDevanagari(roman)) {
        roman = devanagariToLatin(hindi);
      }

      // Detect gender & POS
      let gender = null;
      if (/\[m\]|\(m\)|\bmasc\b|\bmasculine\b/i.test(line)) gender = 'Masculine';
      else if (/\[f\]|\(f\)|\bfem\b|\bfeminine\b/i.test(line)) gender = 'Feminine';
      else if (hindi.endsWith('ी')) gender = 'Feminine';
      else if (hindi.endsWith('ा')) gender = 'Masculine';

      let pos = 'Noun';
      if (/\[adj\]|\badj\b|\badjective\b/i.test(line)) pos = 'Adjective';
      else if (/\[post\]|\bpost\b|\bpostposition\b/i.test(line)) pos = 'Postposition';

      // Clean English definition
      let english = line.replace(hindi, '');
      english = english.replace(/\([^)]*[\u0900-\u097F]+[^)]*\)/g, '');
      english = english.replace(/\[[^\]]*[\u0900-\u097F]+[^\]]*\]/g, '');
      if (roman && isLatinScript(roman) && english.includes(roman)) {
        english = english.replace(roman, '');
      }
      english = english.replace(/\[\s*(?:tr|intr|transitive|intransitive|masc|fem|m|f|adj|noun|post|v|verb)\s*\]/gi, '');
      english = english.replace(/\(\s*(?:tr|intr|transitive|intransitive|masc|fem|m|f|adj|noun|post|v|verb)\s*\)/gi, '');
      english = english.replace(/\b(?:transitive|intransitive|masc|fem|masculine|feminine|adj|noun|postposition)\b/gi, '');
      english = english.replace(/[\u0900-\u097F]+/g, '');
      english = english.replace(/[\s\|\:\-]+(?:m|f|masc|fem|adj|noun|post)$/i, '').trim();
      english = english
        .replace(/\(\s*\)/g, '')
        .replace(/\[\s*\]/g, '')
        .replace(/^[\s\*\•\-\d\.\:\।\|\—\–\t]+/, '')
        .replace(/[\s\|\—\–\t]+$/, '')
        .replace(/^[\:\-\|\—\–\t]+\s*/, '')
        .replace(/\s{2,}/g, ' ')
        .trim();

      const isDup = state.hasWord(hindi);
      results.push({
        hindi,
        roman: (roman && isLatinScript(roman) && !containsDevanagari(roman)) ? roman : devanagariToLatin(hindi),
        english: english || 'meaning to review',
        pos,
        gender,
        sourceFile: currentSource,
        isDuplicate: isDup,
        existingWord: state.getWord(hindi),
        selected: !isDup
      });
    }

    return results;
  }
  window.parseVocabNotesContent = parseVocabNotesContent;

  function renderVocabPreview(list) {
    if (!list || !list.length) {
      if (previewHeading) {
        previewHeading.textContent = "Extracted Vocabulary (0 found)";
      }
      if (previewTableBody) {
        previewTableBody.innerHTML = `
          <tr>
            <td colspan="8" style="text-align:center; padding:1.5rem; color:var(--text-muted);">
              No vocabulary words were recognized. Ensure your notes contain Hindi words with meanings.
            </td>
          </tr>
        `;
      }
      if (confirmImportBtn) confirmImportBtn.disabled = true;
      if (selectedCountLabel) selectedCountLabel.textContent = "0 words selected";
      return;
    }

    if (previewHeading) {
      previewHeading.textContent = `Extracted Vocabulary (${list.length} found)`;
    }
    if (confirmImportBtn) confirmImportBtn.disabled = false;

    if (previewTableBody) {
      previewTableBody.innerHTML = list.map((item, idx) => {
        const anomalies = getVocabAnomalies(item);
        const anomalyHtml = anomalies.map(a => `<span class="anomaly-badge ${a.type}">${escapeHtml(a.text)}</span>`).join(' ');

        return `
          <tr data-row-idx="${idx}">
            <td>
              <input type="checkbox" class="vocab-preview-row-cb" data-idx="${idx}" ${item.selected ? 'checked' : ''} aria-label="Select ${escapeHtml(item.hindi)}">
            </td>
            <td>
              <input type="text" class="table-input hindi-table-input vocab-preview-hindi-input" data-idx="${idx}" value="${escapeHtml(item.hindi)}" placeholder="शब्द (Devanagari)" aria-label="Hindi word in Devanagari">
            </td>
            <td>
              <input type="text" class="table-input vocab-preview-roman-input" data-idx="${idx}" value="${escapeHtml(item.roman)}" aria-label="Transliteration for ${escapeHtml(item.hindi)}">
            </td>
            <td>
              <input type="text" class="table-input vocab-preview-english-input" data-idx="${idx}" value="${escapeHtml(item.english)}" aria-label="English meaning for ${escapeHtml(item.hindi)}">
            </td>
            <td>
              <select class="table-input vocab-preview-pos-select" data-idx="${idx}" aria-label="Part of speech for ${escapeHtml(item.hindi)}">
                <option value="Noun" ${item.pos === 'Noun' ? 'selected' : ''}>Noun</option>
                <option value="Adjective" ${item.pos === 'Adjective' ? 'selected' : ''}>Adjective</option>
                <option value="Postposition" ${item.pos === 'Postposition' ? 'selected' : ''}>Postposition</option>
                <option value="Adverb" ${item.pos === 'Adverb' ? 'selected' : ''}>Adverb</option>
              </select>
            </td>
            <td>
              <select class="table-input vocab-preview-gender-select" data-idx="${idx}" aria-label="Gender for ${escapeHtml(item.hindi)}">
                <option value="Masculine" ${item.gender === 'Masculine' ? 'selected' : ''}>Masc (♂)</option>
                <option value="Feminine" ${item.gender === 'Feminine' ? 'selected' : ''}>Fem (♀)</option>
                <option value="none" ${!item.gender ? 'selected' : ''}>Invariable</option>
              </select>
            </td>
            <td>
              <div class="anomaly-wrap" id="vocab-anomaly-wrap-${idx}">
                ${anomalyHtml}
              </div>
            </td>
            <td style="text-align:center;">
              <button type="button" class="table-row-remove-btn vocab-preview-remove-btn" data-idx="${idx}" title="Remove this word from import list" aria-label="Remove ${escapeHtml(item.hindi)}">✕</button>
            </td>
          </tr>
        `;
      }).join('');

      function updateVocabRowBadge(idx) {
        const wrap = document.getElementById(`vocab-anomaly-wrap-${idx}`);
        if (wrap && extractedList[idx]) {
          const anomalies = getVocabAnomalies(extractedList[idx]);
          wrap.innerHTML = anomalies.map(a => `<span class="anomaly-badge ${a.type}">${escapeHtml(a.text)}</span>`).join(' ');
        }
      }

      previewTableBody.querySelectorAll('.vocab-preview-row-cb').forEach(cb => {
        cb.addEventListener('change', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          if (extractedList[idx]) extractedList[idx].selected = e.target.checked;
          updateVocabSelectedCount();
        });
      });

      previewTableBody.querySelectorAll('.vocab-preview-hindi-input').forEach(inp => {
        inp.addEventListener('input', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          if (!extractedList[idx]) return;
          const val = e.target.value.trim();
          extractedList[idx].hindi = val;
          extractedList[idx].isDuplicate = state.hasWord(val);
          updateVocabRowBadge(idx);
          updateVocabSelectedCount();
        });
        inp.addEventListener('change', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          if (!extractedList[idx]) return;
          const val = e.target.value.trim();
          if (val && !containsDevanagari(val)) {
            showToast("Hindi word should contain Devanagari script.", "warning");
          }
          if (!extractedList[idx].roman || extractedList[idx].roman === devanagariToLatin(extractedList[idx].hindi)) {
            const newRoman = devanagariToLatin(val);
            extractedList[idx].roman = newRoman;
            const rInp = previewTableBody.querySelector(`.vocab-preview-roman-input[data-idx="${idx}"]`);
            if (rInp) rInp.value = newRoman;
          }
          updateVocabRowBadge(idx);
        });
      });

      previewTableBody.querySelectorAll('.vocab-preview-roman-input').forEach(inp => {
        inp.addEventListener('input', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          if (extractedList[idx]) extractedList[idx].roman = e.target.value;
        });
        inp.addEventListener('change', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          let val = e.target.value.trim();
          if (val && (containsDevanagari(val) || !isLatinScript(val))) {
            showToast("Romanisation must be in Latin script (Devanagari skipped).", "warning");
            val = devanagariToLatin(extractedList[idx].hindi);
            e.target.value = val;
          }
          if (extractedList[idx]) extractedList[idx].roman = val;
          updateVocabRowBadge(idx);
        });
      });

      previewTableBody.querySelectorAll('.vocab-preview-english-input').forEach(inp => {
        inp.addEventListener('input', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          if (extractedList[idx]) {
            extractedList[idx].english = e.target.value;
            updateVocabRowBadge(idx);
          }
        });
      });

      previewTableBody.querySelectorAll('.vocab-preview-pos-select').forEach(sel => {
        sel.addEventListener('change', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          if (extractedList[idx]) {
            extractedList[idx].pos = e.target.value;
            updateVocabRowBadge(idx);
          }
        });
      });

      previewTableBody.querySelectorAll('.vocab-preview-gender-select').forEach(sel => {
        sel.addEventListener('change', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          if (extractedList[idx]) {
            let val = e.target.value;
            if (val === 'none') val = null;
            extractedList[idx].gender = val;
            updateVocabRowBadge(idx);
          }
        });
      });

      previewTableBody.querySelectorAll('.vocab-preview-remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.idx);
          if (extractedList[idx]) {
            extractedList.splice(idx, 1);
            renderVocabPreview(extractedList);
            showToast("Removed word from import queue.", "info", 1500);
          }
        });
      });
    }

    updateVocabSelectedCount();
    applyVocabPreviewFilter();
  }

  function applyVocabPreviewFilter() {
    const query = (vocabSearchInput?.value || '').toLowerCase().trim();
    if (vocabSearchClearBtn) {
      vocabSearchClearBtn.style.display = query ? 'inline-block' : 'none';
    }
    const rows = previewTableBody ? previewTableBody.querySelectorAll('tr[data-row-idx]') : [];
    let visibleCount = 0;
    rows.forEach(tr => {
      const idx = parseInt(tr.dataset.rowIdx, 10);
      const item = extractedList[idx];
      if (!item) return;
      if (!query) {
        tr.style.display = '';
        visibleCount++;
        return;
      }
      const matchHindi = (item.hindi || '').toLowerCase().includes(query);
      const matchRoman = (item.roman || '').toLowerCase().includes(query);
      const matchEnglish = (item.english || '').toLowerCase().includes(query);
      const matchPos = (item.pos || '').toLowerCase().includes(query);
      const matchGender = (item.gender || '').toLowerCase().includes(query);
      const anomalies = getVocabAnomalies(item);
      const matchAnomaly = anomalies.some(a => (a.text || '').toLowerCase().includes(query));
      const match = matchHindi || matchRoman || matchEnglish || matchPos || matchGender || matchAnomaly;
      tr.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });

    if (vocabSearchStatus) {
      if (query) {
        vocabSearchStatus.textContent = `Showing ${visibleCount} of ${extractedList.length} words`;
      } else {
        vocabSearchStatus.textContent = '';
      }
    }
  }

  vocabSearchInput?.addEventListener('input', applyVocabPreviewFilter);
  vocabSearchClearBtn?.addEventListener('click', () => {
    if (vocabSearchInput) {
      vocabSearchInput.value = '';
      vocabSearchInput.focus();
    }
    applyVocabPreviewFilter();
  });

  function updateVocabSelectedCount() {
    const total = extractedList.length;
    const selected = extractedList.filter(w => w.selected).length;
    const dupCount = extractedList.filter(w => w.isDuplicate).length;
    if (selectedCountLabel) {
      if (dupCount > 0) {
        selectedCountLabel.textContent = `${selected} of ${total} words selected (${dupCount} already in deck)`;
      } else {
        selectedCountLabel.textContent = `${selected} of ${total} words selected`;
      }
    }
    if (selectAllCheckbox) {
      selectAllCheckbox.checked = total > 0 && selected === total;
    }
    if (confirmImportBtn) {
      confirmImportBtn.disabled = selected === 0;
    }
  }

  selectAllCheckbox?.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    extractedList.forEach(w => w.selected = isChecked);
    document.querySelectorAll('.vocab-preview-row-cb').forEach(cb => cb.checked = isChecked);
    updateVocabSelectedCount();
  });

  selectNewVocabBtn?.addEventListener('click', () => {
    extractedList.forEach(w => {
      w.selected = !w.isDuplicate;
    });
    document.querySelectorAll('.vocab-preview-row-cb').forEach(chk => {
      const idx = parseInt(chk.dataset.idx);
      if (extractedList[idx]) chk.checked = extractedList[idx].selected;
    });
    updateVocabSelectedCount();
    showToast("Selected new words only.", "info");
  });

  cleanNoiseBtn?.addEventListener('click', () => {
    let cleaned = 0;
    extractedList.forEach(item => {
      const oldH = item.hindi;
      const oldE = item.english;
      item.hindi = item.hindi.replace(/[.,;:|\\/\-]+$/, '').trim();
      item.english = sanitizeExtractedNoise(item.english);
      if (item.roman) item.roman = item.roman.replace(/[.,;:|\\/\-]+$/, '').trim();
      if (oldH !== item.hindi || oldE !== item.english) cleaned++;
    });
    renderVocabPreview(extractedList);
    showToast(`Cleaned noise and punctuation across ${cleaned} words.`, "success");
    announce(`Cleaned ${cleaned} vocabulary words.`);
  });

  confirmImportBtn?.addEventListener('click', () => {
    const toImport = extractedList.filter(w => w.selected);
    if (!toImport.length) {
      showToast("Please select at least one word to import.", "warning");
      return;
    }

    let newCount = 0;
    let updatedCount = 0;

    toImport.forEach(raw => {
      const existing = state.getWord(raw.hindi);
      if (existing) {
        updatedCount++;
      } else {
        newCount++;
      }

      const cleanRoman = (raw.roman && isLatinScript(raw.roman) && !containsDevanagari(raw.roman))
        ? raw.roman
        : devanagariToLatin(raw.hindi);

      const word = {
        id: (existing && existing.id) || ("imported-vocab-" + Date.now() + "-" + Math.random().toString(36).substr(2, 6)),
        hindi: raw.hindi,
        roman: cleanRoman,
        english: raw.english,
        pos: raw.pos,
        gender: raw.gender === 'none' ? null : raw.gender,
        category: (existing && existing.category) || "Imported from Notes",
        isInflecting: raw.pos === 'Adjective' && raw.hindi.endsWith('ा'),
        mnemonic: (existing && existing.mnemonic) || `Imported word from ${raw.sourceFile || 'notes'}: ${raw.hindi}`
      };
      state.saveCustomWord(word);
    });

    renderVocabGrid();
    updateVocabDbStatus();

    let msg = '';
    if (newCount > 0 && updatedCount > 0) {
      msg = `🎉 Successfully imported ${newCount} new words and updated ${updatedCount} existing words!`;
    } else if (newCount > 0) {
      msg = `🎉 Successfully imported ${newCount} words into your vocabulary deck!`;
    } else {
      msg = `✓ Successfully updated ${updatedCount} existing words in your vocabulary deck!`;
    }

    if (successBanner) {
      successBanner.style.display = 'block';
      successBanner.textContent = msg;
    }
    showToast(msg, 'success');
    announce(msg);

    setTimeout(() => {
      if (successBanner) successBanner.style.display = 'none';
      if (previewSection) previewSection.style.display = 'none';
      setVocabIngestState('idle');
    }, 3500);
  });

  exportDbBtn?.addEventListener('click', () => {
    const stored = safeStorage.getItem('hindi_custom_vocab');
    let custom = [];
    if (stored) {
      try { custom = JSON.parse(stored); } catch (e) { custom = []; }
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(custom, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = "hindi_custom_vocab_backup.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    showToast(`Exported ${custom.length} words to JSON file.`, 'success');
  });

  clearCustomBtn?.addEventListener('click', () => {
    if (confirm("Are you sure you want to clear all imported custom words? The core vocabulary curriculum will remain intact.")) {
      safeStorage.removeItem('hindi_custom_vocab');
      state.vocab = Array.isArray(window.VOCAB_CURRICULUM) ? [...window.VOCAB_CURRICULUM] : [];
      state.vocabFlashcardsList = [...state.vocab];
      renderVocabGrid();
      updateVocabDbStatus();
      showToast("Custom vocabulary cleared.", "info");
      announce("Custom vocabulary cleared.");
    }
  });
}


// ==========================================================================
// SECTION 20: MATRA READING PRACTICE (मात्रा वाचन अभ्यास)
// ==========================================================================

function getMatraTagClass(matraId) {
  if (['mukta', 'i', 'u', 'ri'].includes(matraId)) return 'short-vowel';
  if (['aa', 'ii', 'uu', 'e', 'ai', 'o', 'au'].includes(matraId)) return 'long-vowel';
  if (['anusvara', 'anunasika'].includes(matraId)) return 'nasal';
  if (matraId === 'half') return 'half';
  return '';
}

function detectMatraFromWord(hindi) {
  if (!hindi) return 'mukta';
  if (hindi.includes('्')) return 'half';
  if (hindi.includes('ँ')) return 'anunasika';
  if (hindi.includes('ं')) return 'anusvara';
  if (hindi.includes('ौ')) return 'au';
  if (hindi.includes('ो')) return 'o';
  if (hindi.includes('ै')) return 'ai';
  if (hindi.includes('े')) return 'e';
  if (hindi.includes('ृ')) return 'ri';
  if (hindi.includes('ू')) return 'uu';
  if (hindi.includes('ु')) return 'u';
  if (hindi.includes('ी')) return 'ii';
  if (hindi.includes('ि')) return 'i';
  if (hindi.includes('ा')) return 'aa';
  return 'mukta';
}

// Ensures Devanagari combining marks (matras, anusvara, virama, etc.) have a base consonant anchor
// (Unicode Dotted Circle \u25CC) when appearing in isolation (e.g. inside parentheses, after whitespace, or at start of text).
// Prevents OS/WebKit font engines from rendering broken box fallbacks (like ☰) or zero-width glyph collisions.
function formatSafeMatraText(str) {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/([^\u0900-\u097F\u25CC]|^)([\u0901-\u0903\u093C\u093E-\u094F])/g, function(match, prefix, mark) {
    return prefix + '\u25CC' + mark;
  });
}
window.formatSafeMatraText = formatSafeMatraText;

function getMatraNameAndSymbol(matraId) {
  const map = {
    mukta: { name: 'अ (बिना मात्रा)', symbol: '—', type: 'Inherent Schwa (अ)' },
    aa: { name: 'आ की मात्रा (◌ा)', symbol: '◌ा', type: 'Long Vowel (आ)' },
    i: { name: 'इ की मात्रा (◌ि - Chhoti I)', symbol: '◌ि', type: 'Short Vowel (इ)' },
    ii: { name: 'ई की मात्रा (◌ी - Badi I)', symbol: '◌ी', type: 'Long Vowel (ई)' },
    u: { name: 'उ की मात्रा (◌ु - Chhota U)', symbol: '◌ु', type: 'Short Vowel (उ)' },
    uu: { name: 'ऊ की मात्रा (◌ू - Bada U)', symbol: '◌ू', type: 'Long Vowel (ऊ)' },
    ri: { name: 'ऋ की मात्रा (◌ृ)', symbol: '◌ृ', type: 'Vocalic (ऋ)' },
    e: { name: 'ए की मात्रा (◌े)', symbol: '◌े', type: 'Long Vowel (ए)' },
    ai: { name: 'ऐ की मात्रा (◌ै)', symbol: '◌ै', type: 'Diphthong (ऐ)' },
    o: { name: 'ओ की मात्रा (◌ो)', symbol: '◌ो', type: 'Long Vowel (ओ)' },
    au: { name: 'औ की मात्रा (◌ौ)', symbol: '◌ौ', type: 'Diphthong (औ)' },
    anusvara: { name: 'अं की मात्रा (◌ं - अनुस्वार)', symbol: '◌ं', type: 'Nasal Dot (अनुस्वार)' },
    anunasika: { name: 'अँ की मात्रा (◌ँ - चन्द्रबिन्दु)', symbol: '◌ँ', type: 'Nasal Vowel (चन्द्रबिन्दु)' },
    half: { name: 'आधे अक्षर (◌् - हलन्त / संयुक्त)', symbol: '◌्', type: 'Half Letter / Conjunct' }
  };
  return map[matraId] || { name: 'मात्रा', symbol: '—', type: 'Vowel Sign' };
}

// --- 20.1 Matra Word Explorer ---
function initMatraLibrary() {
  const searchInput = document.getElementById('matra-search');
  const matraChips = document.querySelectorAll('#matra-filter-chips-list .filter-chip[data-matra]');
  const lengthChips = document.querySelectorAll('.filter-chip[data-matra-length]');
  const modal = document.getElementById('matra-modal');
  const modalClose = document.getElementById('modal-matra-close-btn');

  searchInput?.addEventListener('input', (e) => {
    state.matraSearchQuery = e.target.value.toLowerCase().trim();
    renderMatraGrid();
  });

  matraChips.forEach(chip => {
    chip.addEventListener('click', () => {
      matraChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.matraFilter = chip.dataset.matra;
      renderMatraGrid();
      announce(`Filtered by matra: ${chip.textContent.trim()}`);
    });
  });

  lengthChips.forEach(chip => {
    chip.addEventListener('click', () => {
      lengthChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.matraLengthFilter = chip.dataset.matraLength;
      renderMatraGrid();
      announce(`Filtered by length: ${chip.textContent.trim()}`);
    });
  });

  modalClose?.addEventListener('click', closeMatraModal);
  modal?.addEventListener('click', (e) => {
    if (e.target.id === 'matra-modal') closeMatraModal();
  });
  modal?.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMatraModal();
  });

  renderMatraGrid();
}

function renderMatraGrid() {
  const grid = document.getElementById('matra-grid');
  const countEl = document.getElementById('matra-count-label');
  if (!grid || !countEl) return;

  const filtered = state.matraWords.filter(w => {
    const q = state.matraSearchQuery;
    const matchesSearch = !q ||
      w.hindi.includes(q) ||
      (w.roman && w.roman.toLowerCase().includes(q)) ||
      (w.english && w.english.toLowerCase().includes(q)) ||
      (w.matraName && w.matraName.toLowerCase().includes(q)) ||
      (w.phonics && w.phonics.toLowerCase().includes(q)) ||
      (w.rule && w.rule.toLowerCase().includes(q));

    // By default ("all"), display words with visible matras. Mukta (no matra) is available via its dedicated filter.
    const matchesMatra = state.matraFilter === 'all'
      ? (w.matra !== 'mukta')
      : (w.matra === state.matraFilter);

    let matchesLength = true;
    if (state.matraLengthFilter !== 'all') {
      const targetLen = parseInt(state.matraLengthFilter, 10);
      const wLen = w.length || (w.hindi ? w.hindi.length : 2);
      if (targetLen === 4) {
        matchesLength = wLen >= 4;
      } else {
        matchesLength = wLen === targetLen;
      }
    }

    return matchesSearch && matchesMatra && matchesLength;
  });

  const totalVisibleMatras = state.matraWords.filter(w => w.matra !== 'mukta').length;
  if (state.matraFilter === 'all') {
    countEl.textContent = `Showing ${filtered.length} of ${totalVisibleMatras} words with matras`;
  } else if (state.matraFilter === 'mukta') {
    countEl.textContent = `Showing ${filtered.length} foundational words without matra`;
  } else {
    countEl.textContent = `Showing ${filtered.length} words`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 3rem 1rem; text-align: center; color: var(--text-muted); background: white; border-radius: var(--radius); border: 1px dashed var(--border);">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No matra words match your current search or filter.</p>
        <p style="font-size: 0.9rem;">Try selecting "All Matras" or clearing the search box.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(w => {
    const tagClass = getMatraTagClass(w.matra);
    return `
      <div class="matra-card" data-word-id="${w.id}" tabindex="0" role="button" aria-label="${w.hindi}, pronounced ${w.roman || ''}, meaning ${w.english}. Matra: ${w.matraName}. Press Enter or click for letter breakdown and audio.">
        <div class="card-header">
          <span class="matra-tag ${tagClass}">
            ${formatSafeMatraText(w.matraName)}
          </span>
          <button class="audio-btn matra-grid-audio-btn" data-speak="${w.hindi}" aria-label="Listen to pronunciation of ${w.hindi}" title="Pronounce ${w.hindi}">
            🔊
          </button>
        </div>

        <div class="matra-card-hindi">${w.hindi}</div>
        <div class="matra-card-roman">${w.roman || ''} <span style="font-weight:400; color:var(--text-muted); font-size:0.85rem;">[${w.phonics || ''}]</span></div>
        <div class="matra-card-english">${w.english}</div>

        <div class="matra-card-breakdown">
          ${formatSafeMatraText(w.breakdown || w.hindi)}
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.matra-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.audio-btn')) return;
      const wordId = card.dataset.wordId;
      const word = state.matraWords.find(w => w.id === wordId);
      if (word) openMatraModal(word);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const wordId = card.dataset.wordId;
        const word = state.matraWords.find(w => w.id === wordId);
        if (word) openMatraModal(word);
      }
    });
  });

  grid.querySelectorAll('.matra-grid-audio-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const text = btn.dataset.speak;
      speakHindi(text, btn);
    });
  });
}

function openMatraModal(word) {
  const modal = document.getElementById('matra-modal');
  const title = document.getElementById('modal-matra-title');
  const content = document.getElementById('modal-matra-content');
  if (!modal || !content) return;

  if (title) title.textContent = `${word.hindi} (${word.roman || ''}) - Matra Reference`;

  const tagClass = getMatraTagClass(word.matra);

  content.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div style="text-align: center; padding: 1.5rem 1rem; background: var(--bg); border-radius: var(--radius); border: 1px solid var(--border);">
        <div style="margin-bottom: 0.75rem;">
          <span class="matra-tag ${tagClass}" style="font-size: 0.95rem; padding: 0.35rem 0.85rem;">
            ${formatSafeMatraText(word.matraName)} &bull; ${word.matraType || 'Vowel Sign'}
          </span>
        </div>
        <div style="font-family: var(--font-hindi); font-size: 3.2rem; font-weight: 700; color: var(--secondary); margin-bottom: 0.25rem;">
          ${word.hindi}
        </div>
        <div style="font-size: 1.25rem; font-weight: 600; color: var(--primary); margin-bottom: 0.35rem;">
          ${word.roman || ''} <span style="font-weight: 400; color: var(--text-muted); font-size: 1rem;">[${word.phonics || ''}]</span>
        </div>
        <div style="font-size: 1.1rem; color: var(--text); margin-bottom: 1.25rem;">
          "${word.english}"
        </div>
        <div>
          <button id="modal-matra-speak-btn" class="matra-audio-hero-btn" style="padding: 0.65rem 1.75rem; font-size: 1.05rem;" aria-label="Listen to pronunciation of ${word.hindi}">
            <span class="speaker-icon">🔊</span> Listen to Native Pronunciation
          </button>
        </div>
      </div>

      <div class="matra-breakdown-box">
        <div class="matra-breakdown-title">
          <span>🧮</span> Letter & Matra Construction Equation
        </div>
        <div class="matra-breakdown-math">
          ${formatSafeMatraText(word.breakdown)} = <strong>${word.hindi}</strong>
        </div>
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.35rem;">
          Phonics breakdown: [${word.phonics || ''}] &bull; Word Length: ${word.length || 2} letters
        </div>
      </div>

      <div class="matra-rule-box">
        <div class="matra-rule-title">
          <span>💡</span> Reading & Pronunciation Rule
        </div>
        <div style="font-size: 0.95rem; line-height: 1.5; color: var(--text);">
          ${formatSafeMatraText(word.rule || 'Read each consonant with its attached vowel sign. The final unmarked consonant drops the inherent schwa vowel.')}
        </div>
      </div>

      ${word.examplePhrase ? `
        <div class="matra-phrase-box">
          <div class="matra-phrase-content">
            <div class="matra-phrase-label" style="font-size: 0.85rem;">
              📖 Example Phrase in Context:
            </div>
            <div class="matra-phrase-hindi" style="font-size: 1.35rem; margin: 0.2rem 0;">
              ${word.examplePhrase.hindi}
            </div>
            <div class="matra-phrase-meta" style="font-size: 0.95rem;">
              ${word.examplePhrase.roman} &bull; <span style="color:var(--text-muted); font-style:italic;">"${word.examplePhrase.english}"</span>
            </div>
          </div>
          <button type="button" id="modal-matra-phrase-speak-btn" class="matra-phrase-audio-btn" aria-label="Listen to example phrase" title="Listen to example phrase">
            <span>🔊</span> Listen
          </button>
        </div>
      ` : ''}

      <!-- Management & Data Cleanup Footer -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.75rem; padding-top:1rem; border-top:1px solid var(--border); flex-wrap:wrap; gap:0.5rem;">
        <div style="font-size:0.85rem;">
          ${!(window.MATRA_CURRICULUM || []).some(w => w.hindi === word.hindi) 
            ? '<span class="lexicon-badge-custom">✏️ Custom Imported Word</span>' 
            : '<span class="lexicon-badge-core">🔒 Core Curriculum</span>'}
        </div>
        <div style="display:flex; gap:0.5rem;">
          <button type="button" class="action-btn nav-card modal-edit-in-manager-btn" style="font-size:0.85rem; padding:0.4rem 0.85rem;">
            🛠️ Edit in Data Manager
          </button>
          ${!(window.MATRA_CURRICULUM || []).some(w => w.hindi === word.hindi) ? `
            <button type="button" class="action-btn again modal-delete-word-btn" style="font-size:0.85rem; padding:0.4rem 0.85rem;">
              🗑️ Delete Word
            </button>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  document.getElementById('modal-matra-speak-btn')?.addEventListener('click', function() {
    speakHindi(word.hindi, this);
  });

  document.getElementById('modal-matra-phrase-speak-btn')?.addEventListener('click', function() {
    if (word.examplePhrase && word.examplePhrase.hindi) {
      speakHindi(word.examplePhrase.hindi, this);
    }
  });

  modal.querySelector('.modal-edit-in-manager-btn')?.addEventListener('click', () => {
    closeMatraModal();
    openLexiconManager(word.hindi, 'matras');
  });

  modal.querySelector('.modal-delete-word-btn')?.addEventListener('click', () => {
    if (confirm(`Are you sure you want to delete "${word.hindi}" from your active matra deck?`)) {
      state.deleteCustomMatra(word.hindi);
      closeMatraModal();
      renderMatraGrid();
      showToast(`Deleted matra word "${word.hindi}".`, 'info');
      announce(`Deleted matra word ${word.hindi}`);
    }
  });

  const modalBody = document.getElementById('modal-matra-content');
  if (modalBody) modalBody.scrollTop = 0;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  updateModalBodyLock();
  announce(`Opened matra breakdown for ${word.hindi}`);
  document.getElementById('modal-matra-close-btn')?.focus();
}

function closeMatraModal() {
  const modal = document.getElementById('matra-modal');
  if (!modal || !modal.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  resetModalFullscreen('matra-modal');
  updateModalBodyLock();
  announce("Closed matra reference dialog");
}

// --- 20.2 Matra Reading Practice Station ---
function updateMatraPracticePillCount() {
  const countEl = document.getElementById('matra-needs-practice-count');
  const pill = document.getElementById('matra-filter-needs-practice-pill');
  if (!countEl) return;

  let practiceCount = 0;
  if (state.matraReviews) {
    for (const id in state.matraReviews) {
      if (state.matraReviews[id] === 'again') practiceCount++;
    }
  }
  countEl.textContent = practiceCount;
  if (pill) {
    pill.classList.toggle('has-items', practiceCount > 0);
  }
}

let contrastAudioTimer = null;

function initMatraFlashcards() {
  const container = document.getElementById('matra-flashcard-container');
  const toggleAutoBtn = document.getElementById('matra-toggle-autospeak-btn');
  const autoLabel = document.getElementById('matra-autospeak-label');
  const shuffleBtn = document.getElementById('matra-shuffle-cards-btn');
  const prevBtn = document.getElementById('matra-prev-card-btn');
  const nextBtn = document.getElementById('matra-next-card-btn');
  const againBtn = document.getElementById('matra-card-again-btn');
  const goodBtn = document.getElementById('matra-card-good-btn');
  const filterPills = document.querySelectorAll('.matra-filter-pill[data-flash-matra]');
  const contrastSubpills = document.querySelectorAll('.contrast-subpill[data-contrast-cat]');

  // Filter Pills: drill specific matra family, "Needs Practice", or "Minimal Pairs"
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const matraId = pill.dataset.flashMatra;
      filterMatraFlashcards(matraId);
    });
  });

  // Minimal Pairs Vowel Sub-category Pills
  contrastSubpills.forEach(pill => {
    pill.addEventListener('click', () => {
      contrastSubpills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.dataset.contrastCat;
      filterMinimalPairs(cat);
    });
  });

  // Auto-Speak Toggle
  toggleAutoBtn?.addEventListener('click', () => {
    state.matraAutoSpeak = !state.matraAutoSpeak;
    toggleAutoBtn.classList.toggle('active', state.matraAutoSpeak);
    if (autoLabel) autoLabel.textContent = state.matraAutoSpeak ? 'ON' : 'OFF';
    showToast(`Auto-Pronunciation: ${state.matraAutoSpeak ? 'ON (speaks on next card)' : 'OFF'}`, 'info', 2500);
    announce(`Auto-Pronunciation turned ${state.matraAutoSpeak ? 'on' : 'off'}`);
  });

  // Shuffle Cards
  shuffleBtn?.addEventListener('click', () => {
    clearSpeakingButtonState();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (contrastAudioTimer) {
      clearTimeout(contrastAudioTimer);
      contrastAudioTimer = null;
    }

    if (state.matraIsMinimalPairMode) {
      state.matraMinimalPairsList.sort(() => Math.random() - 0.5);
      state.matraMinimalPairIndex = 0;
      state.matraReadingRevealed = false;
      renderMatraFlashcard();
      showToast("Shuffled contrast pairs deck", "info", 1500);
      announce("Minimal pairs shuffled.");
      return;
    }

    state.matraFlashcardsList.sort(() => Math.random() - 0.5);
    state.matraFlashIndex = 0;
    state.matraReadingRevealed = false;
    renderMatraFlashcard();
    showToast("Shuffled reading deck", "info", 1500);
    announce("Matra reading flashcards shuffled.");
  });

  prevBtn?.addEventListener('click', () => {
    prevMatraReadingCard();
  });

  nextBtn?.addEventListener('click', () => {
    advanceMatraReadingCard();
  });

  againBtn?.addEventListener('click', () => {
    handleMatraReadingRating('again');
  });

  goodBtn?.addEventListener('click', () => {
    handleMatraReadingRating('good');
  });

  // Global keydown listeners for Matra Flashcard tab
  window.addEventListener('keydown', (e) => {
    if (state.activeModule !== 'matras' || state.activeTabType !== 'flashcard') return;
    const isModalOpen = document.getElementById('matra-modal')?.classList.contains('open') ||
                        document.getElementById('focus-modal')?.classList.contains('open') ||
                        document.getElementById('custom-quiz-modal')?.classList.contains('open') ||
                        document.getElementById('lexicon-manager-modal')?.classList.contains('open');
    if (isModalOpen) return;

    const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

    if (e.key === ' ' || e.key.toLowerCase() === 'a') {
      e.preventDefault();
      playMatraReadingAudio(false);
    } else if (e.key.toLowerCase() === 's') {
      e.preventDefault();
      playMatraReadingAudio(true);
    } else if (e.key.toLowerCase() === 'b') {
      e.preventDefault();
      playMatraSyllableAudio();
    } else if (e.key === '1') {
      e.preventDefault();
      handleMatraReadingRating('again');
    } else if (e.key === '2') {
      e.preventDefault();
      handleMatraReadingRating('good');
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevMatraReadingCard();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      advanceMatraReadingCard();
    } else if (e.key.toLowerCase() === 'r') {
      e.preventDefault();
      toggleMatraReadingDetails();
    } else if (e.key.toLowerCase() === 'p') {
      e.preventDefault();
      playMatraPhraseAudio();
    }
  });

  updateMatraPracticePillCount();
  renderMatraFlashcard();
}

function findMinimalPairForWord(hindiWord) {
  if (!hindiWord) return null;
  const allPairs = (typeof HINDI_MINIMAL_PAIRS !== 'undefined' && Array.isArray(HINDI_MINIMAL_PAIRS))
    ? HINDI_MINIMAL_PAIRS
    : ((typeof window !== 'undefined' && Array.isArray(window.HINDI_MINIMAL_PAIRS)) ? window.HINDI_MINIMAL_PAIRS : []);
  return allPairs.find(p => p.wordA.hindi === hindiWord || p.wordB.hindi === hindiWord) || null;
}

function filterMinimalPairs(catId = 'all') {
  state.matraActiveContrastCategory = catId;
  state.matraReadingRevealed = false;
  clearSpeakingButtonState();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (contrastAudioTimer) {
    clearTimeout(contrastAudioTimer);
    contrastAudioTimer = null;
  }

  const allPairs = (typeof HINDI_MINIMAL_PAIRS !== 'undefined' && Array.isArray(HINDI_MINIMAL_PAIRS))
    ? HINDI_MINIMAL_PAIRS
    : ((typeof window !== 'undefined' && Array.isArray(window.HINDI_MINIMAL_PAIRS)) ? window.HINDI_MINIMAL_PAIRS : []);

  if (catId === 'all') {
    state.matraMinimalPairsList = [...allPairs];
  } else {
    state.matraMinimalPairsList = allPairs.filter(p => p.category === catId);
  }

  state.matraMinimalPairIndex = 0;
  renderMatraFlashcard();
  const catObj = (typeof MINIMAL_PAIR_CATEGORIES !== 'undefined') ? MINIMAL_PAIR_CATEGORIES.find(c => c.id === catId) : null;
  const label = catObj ? catObj.name : catId;
  announce(`Minimal Pairs deck filtered to ${label}. ${state.matraMinimalPairsList.length} contrast pairs.`);
}

let isContrastAudioPlaying = false;

async function playContrastPairAudio(slow = false, syllabic = false) {
  if (!state.matraMinimalPairsList || !state.matraMinimalPairsList.length) return;
  const curPair = state.matraMinimalPairsList[state.matraMinimalPairIndex];
  if (!curPair) return;

  if (!state.matraReadingRevealed) {
    state.matraReadingRevealed = true;
    renderMatraFlashcard();
  }

  const heroBtn = document.getElementById('matra-pair-compare-hero-btn');
  const boxA = document.getElementById('minimal-box-word-a');
  const boxB = document.getElementById('minimal-box-word-b');

  if (window.speechSynthesis) window.speechSynthesis.cancel();
  if (contrastAudioTimer) {
    clearTimeout(contrastAudioTimer);
    contrastAudioTimer = null;
  }

  isContrastAudioPlaying = true;
  const rate = slow ? 0.68 : 0.85;

  announce(syllabic ? `Comparing syllables: ${curPair.wordA.hindi} and ${curPair.wordB.hindi}` : `Comparing ${curPair.wordA.hindi} and ${curPair.wordB.hindi}`);

  try {
    // 1. Highlight Box A and pronounce word A
    if (boxA) boxA.classList.add('highlight-a');
    if (boxB) boxB.classList.remove('highlight-b');
    await speakHindi(curPair.wordA.hindi, heroBtn, { rate, preferLocal: slow, syllabic });
    if (boxA) boxA.classList.remove('highlight-a');

    // Comfortable pause between words (550ms slow, 400ms normal)
    await new Promise(r => { contrastAudioTimer = setTimeout(r, slow ? 550 : 400); });

    // 2. Highlight Box B and pronounce word B
    if (boxB) boxB.classList.add('highlight-b');
    await speakHindi(curPair.wordB.hindi, heroBtn, { rate, preferLocal: slow, syllabic });
    if (boxB) boxB.classList.remove('highlight-b');
  } finally {
    isContrastAudioPlaying = false;
    if (boxA) boxA.classList.remove('highlight-a');
    if (boxB) boxB.classList.remove('highlight-b');
  }
}

function playMatraReadingAudio(slow = false, syllabic = false) {
  if (state.matraIsMinimalPairMode) {
    playContrastPairAudio(slow, syllabic);
    return;
  }

  if (!state.matraFlashcardsList || !state.matraFlashcardsList.length) return;
  const cur = state.matraFlashcardsList[state.matraFlashIndex];
  if (!cur) return;

  if (!state.matraReadingRevealed) {
    state.matraReadingRevealed = true;
    renderMatraFlashcard();
  }

  const btnId = syllabic ? 'matra-listen-syllable-btn' : (slow ? 'matra-listen-slow-btn' : 'matra-listen-audio-btn');
  const targetBtn = document.getElementById(btnId);
  const rate = slow ? 0.68 : 0.85;
  speakHindi(cur.hindi, targetBtn, { rate, preferLocal: slow, syllabic });
  announce(syllabic ? `Syllable breakdown: ${cur.hindi}` : (slow ? `Pronouncing slowly: ${cur.hindi}` : `Pronouncing: ${cur.hindi}`));
}

function playMatraSyllableAudio() {
  playMatraReadingAudio(true, true);
}

function toggleMatraReadingDetails() {
  state.matraReadingRevealed = !state.matraReadingRevealed;
  renderMatraFlashcard();
  announce(state.matraReadingRevealed ? "Pronunciation and breakdown details shown" : "Details hidden");
}

function playMatraPhraseAudio() {
  if (state.matraIsMinimalPairMode) return;
  if (!state.matraFlashcardsList || !state.matraFlashcardsList.length) return;
  const cur = state.matraFlashcardsList[state.matraFlashIndex];
  if (cur && cur.examplePhrase && cur.examplePhrase.hindi) {
    const phraseBtn = document.getElementById('matra-card-phrase-audio-btn');
    speakHindi(cur.examplePhrase.hindi, phraseBtn);
  }
}

function prevMatraReadingCard() {
  clearSpeakingButtonState();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (contrastAudioTimer) {
    clearTimeout(contrastAudioTimer);
    contrastAudioTimer = null;
  }

  if (state.matraIsMinimalPairMode) {
    if (!state.matraMinimalPairsList || !state.matraMinimalPairsList.length) return;
    if (state.matraMinimalPairIndex > 0) {
      state.matraMinimalPairIndex--;
    } else {
      state.matraMinimalPairIndex = state.matraMinimalPairsList.length - 1;
    }
    state.matraReadingRevealed = false;
    renderMatraFlashcard();
    return;
  }

  if (!state.matraFlashcardsList || !state.matraFlashcardsList.length) return;
  if (state.matraFlashIndex > 0) {
    state.matraFlashIndex--;
  } else {
    state.matraFlashIndex = state.matraFlashcardsList.length - 1;
  }
  state.matraReadingRevealed = false;
  renderMatraFlashcard();

  if (state.matraAutoSpeak) {
    const cur = state.matraFlashcardsList[state.matraFlashIndex];
    if (cur) speakHindi(cur.hindi);
  }
}

function advanceMatraReadingCard() {
  clearSpeakingButtonState();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (contrastAudioTimer) {
    clearTimeout(contrastAudioTimer);
    contrastAudioTimer = null;
  }

  if (state.matraIsMinimalPairMode) {
    if (!state.matraMinimalPairsList || !state.matraMinimalPairsList.length) return;
    if (state.matraMinimalPairIndex < state.matraMinimalPairsList.length - 1) {
      state.matraMinimalPairIndex++;
    } else {
      state.matraMinimalPairIndex = 0;
    }
    state.matraReadingRevealed = false;
    renderMatraFlashcard();
    return;
  }

  if (!state.matraFlashcardsList || !state.matraFlashcardsList.length) return;
  if (state.matraFlashIndex < state.matraFlashcardsList.length - 1) {
    state.matraFlashIndex++;
  } else {
    state.matraFlashIndex = 0;
  }
  state.matraReadingRevealed = false;
  renderMatraFlashcard();

  if (state.matraAutoSpeak) {
    const cur = state.matraFlashcardsList[state.matraFlashIndex];
    if (cur) speakHindi(cur.hindi);
  }
}

function handleMatraReadingRating(status) {
  if (state.matraIsMinimalPairMode) {
    if (!state.matraMinimalPairsList || !state.matraMinimalPairsList.length) return;
    const curPair = state.matraMinimalPairsList[state.matraMinimalPairIndex];
    if (!curPair) return;

    state.markMatraWord(curPair.id, status);
    updateMatraPracticePillCount();

    if (status === 'again') {
      showToast(`Saved pair (${curPair.wordA.hindi} / ${curPair.wordB.hindi}) for practice (↺)`, 'warning', 1800);
      announce(`Marked contrast pair for more practice.`);

      if (state.matraMinimalPairsList.length > 2) {
        const remaining = state.matraMinimalPairsList.slice(state.matraMinimalPairIndex + 1);
        if (!remaining.some(p => p.id === curPair.id)) {
          const offset = Math.min(3, remaining.length);
          state.matraMinimalPairsList.splice(state.matraMinimalPairIndex + 1 + offset, 0, curPair);
        }
      }
    } else {
      showToast(`Marked contrast pair as Read Correctly (✓)`, 'success', 1800);
      announce(`Marked contrast pair as read correctly.`);
    }
    advanceMatraReadingCard();
    return;
  }

  if (!state.matraFlashcardsList || !state.matraFlashcardsList.length) return;
  const cur = state.matraFlashcardsList[state.matraFlashIndex];
  if (!cur) return;

  state.markMatraWord(cur.id, status);
  updateMatraPracticePillCount();

  if (status === 'again') {
    showToast(`Saved "${cur.hindi}" for practice (↺)`, 'warning', 1800);
    announce(`Marked ${cur.hindi} for more practice.`);

    // Re-queue this word 3 cards later in the current session
    if (state.matraFlashcardsList.length > 2) {
      const remainingCards = state.matraFlashcardsList.slice(state.matraFlashIndex + 1);
      if (!remainingCards.some(w => w.id === cur.id)) {
        const offset = Math.min(3, remainingCards.length);
        state.matraFlashcardsList.splice(state.matraFlashIndex + 1 + offset, 0, cur);
      }
    }
    advanceMatraReadingCard();
  } else {
    showToast(`Marked "${cur.hindi}" as Read Correctly (✓)`, 'success', 1800);
    announce(`Marked ${cur.hindi} as read correctly.`);

    // If currently filtering "Needs Practice", remove this mastered word from the list
    if (state.matraActiveDeckFilter === 'needs-practice') {
      state.matraFlashcardsList.splice(state.matraFlashIndex, 1);
      state.matraReadingRevealed = false;
      clearSpeakingButtonState();
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      renderMatraFlashcard();
      return;
    }
    advanceMatraReadingCard();
  }
}

function filterMatraFlashcards(matraId) {
  state.matraActiveDeckFilter = matraId;
  clearSpeakingButtonState();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (contrastAudioTimer) {
    clearTimeout(contrastAudioTimer);
    contrastAudioTimer = null;
  }
  state.matraReadingRevealed = false;

  const contrastSubbar = document.getElementById('matra-contrast-subbar');

  if (matraId === 'minimal-pairs') {
    state.matraIsMinimalPairMode = true;
    if (contrastSubbar) contrastSubbar.style.display = 'flex';
    filterMinimalPairs(state.matraActiveContrastCategory || 'all');
    return;
  } else {
    state.matraIsMinimalPairMode = false;
    if (contrastSubbar) contrastSubbar.style.display = 'none';
  }

  if (matraId === 'needs-practice') {
    state.matraFlashcardsList = state.matraWords.filter(w => state.matraReviews && state.matraReviews[w.id] === 'again');
    state.matraFlashIndex = 0;
    renderMatraFlashcard();
    announce(`Filtered to words needing practice. ${state.matraFlashcardsList.length} cards.`);
    return;
  }

  if (matraId === 'all') {
    state.matraFlashcardsList = state.matraWords.filter(w => w.matra !== 'mukta');
  } else {
    state.matraFlashcardsList = state.matraWords.filter(w => w.matra === matraId);
    if (!state.matraFlashcardsList.length) {
      state.matraFlashcardsList = state.matraWords.filter(w => w.matra !== 'mukta');
    }
  }

  state.matraFlashIndex = 0;
  renderMatraFlashcard();
  const label = matraId === 'all'
    ? 'all words with matras'
    : (matraId === 'mukta' ? 'foundational words without matra' : matraId);
  announce(`Deck filtered to ${label}. ${state.matraFlashcardsList.length} cards available.`);
}

function renderMinimalPairFlashcard() {
  const container = document.getElementById('matra-flashcard-container');
  const progressEl = document.getElementById('matra-flash-progress');
  const prevBtn = document.getElementById('matra-prev-card-btn');
  const nextBtn = document.getElementById('matra-next-card-btn');
  if (!container) return;

  updateMatraPracticePillCount();

  if (!state.matraMinimalPairsList || state.matraMinimalPairsList.length === 0) {
    if (progressEl) progressEl.textContent = "No pairs";
    container.innerHTML = `
      <div class="matra-empty-reading-state">
        <div style="font-size:3.2rem; margin-bottom:0.75rem;">⚡</div>
        <h3 style="font-size:1.5rem; color:var(--secondary); margin-bottom:0.5rem;">No Minimal Pairs Found</h3>
        <p style="color:var(--text-muted); max-width:440px; margin:0 auto 1.5rem;">
          No contrast pairs match the selected category.
        </p>
        <button type="button" class="action-btn good" id="matra-empty-all-pairs-btn">
          Show All Contrast Pairs (38)
        </button>
      </div>
    `;
    document.getElementById('matra-empty-all-pairs-btn')?.addEventListener('click', () => {
      filterMinimalPairs('all');
    });
    return;
  }

  if (state.matraMinimalPairIndex >= state.matraMinimalPairsList.length) {
    state.matraMinimalPairIndex = 0;
  } else if (state.matraMinimalPairIndex < 0) {
    state.matraMinimalPairIndex = state.matraMinimalPairsList.length - 1;
  }

  const pair = state.matraMinimalPairsList[state.matraMinimalPairIndex];
  const reviewStatus = state.matraReviews ? state.matraReviews[pair.id] : null;
  const isRevealed = !!state.matraReadingRevealed;

  if (progressEl) {
    progressEl.innerHTML = `Contrast Pair <strong>${state.matraMinimalPairIndex + 1}</strong> of <strong>${state.matraMinimalPairsList.length}</strong> <span style="color:var(--text-subtle); margin-left:0.35rem;">(${escapeHtml(pair.categoryName)})</span>`;
  }

  if (prevBtn) prevBtn.disabled = state.matraMinimalPairsList.length <= 1;
  if (nextBtn) nextBtn.disabled = state.matraMinimalPairsList.length <= 1;

  container.innerHTML = `
    <div class="matra-reading-card ${isRevealed ? 'revealed' : 'unrevealed'}">
      <!-- Card Header: Category & Mastery status -->
      <div class="matra-reading-header">
        <span class="matra-tag" style="background:#ede9fe; color:#6d28d9; border:1px solid #c4b5fd;">
          ⚡ ${escapeHtml(pair.categoryName)}
        </span>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          ${reviewStatus ? `
            <span class="matra-status-badge ${reviewStatus === 'good' ? 'status-mastered' : 'status-review'}">
              ${reviewStatus === 'good' ? '✓ Mastered' : '↺ Needs Practice'}
            </span>
          ` : `
            <span class="matra-status-badge status-new">○ New Pair</span>
          `}
        </div>
      </div>

      <!-- Main Contrast Stage: Word A vs Word B -->
      <div class="minimal-pair-stage">
        <!-- Word A Box -->
        <div class="minimal-pair-box" id="minimal-box-word-a">
          <div>
            <span class="minimal-pair-matra-tag">${escapeHtml(pair.wordA.matraName)}</span>
            <div class="minimal-pair-word-hindi" lang="hi">${pair.wordA.hindi}</div>
          </div>
          <button type="button" class="minimal-pair-audio-btn" id="listen-word-a-btn" aria-label="Listen to ${pair.wordA.hindi}">
            <span>🔊</span> ${pair.wordA.hindi}
          </button>
        </div>

        <!-- Center VS Badge -->
        <div class="minimal-pair-vs-badge" aria-hidden="true">
          <div class="minimal-pair-vs-circle">VS</div>
        </div>

        <!-- Word B Box -->
        <div class="minimal-pair-box" id="minimal-box-word-b">
          <div>
            <span class="minimal-pair-matra-tag">${escapeHtml(pair.wordB.matraName)}</span>
            <div class="minimal-pair-word-hindi" lang="hi">${pair.wordB.hindi}</div>
          </div>
          <button type="button" class="minimal-pair-audio-btn" id="listen-word-b-btn" aria-label="Listen to ${pair.wordB.hindi}">
            <span>🔊</span> ${pair.wordB.hindi}
          </button>
        </div>
      </div>

      <!-- Prompt text -->
      ${!isRevealed ? `
        <div class="matra-reading-prompt">
          <span class="matra-prompt-icon">📖</span> Read both words aloud. How does the vowel length change the sound? Press <strong>Compare Audio</strong> to test yourself!
        </div>
      ` : `
        <div class="matra-reading-prompt verified">
          <span class="matra-prompt-icon">🎧</span> Listen closely to how the vowel shifts between the two words:
        </div>
      `}

      <!-- Audio Controls Row -->
      <div class="matra-audio-controls-row">
        <button type="button" class="minimal-pair-compare-hero-btn" id="matra-pair-compare-hero-btn" aria-label="Compare audio of ${pair.wordA.hindi} and ${pair.wordB.hindi} (Press Space or A)">
          <span>🎧</span> Compare Audio (${pair.wordA.hindi} ➔ ${pair.wordB.hindi}) <kbd class="listen-kbd">Space</kbd>
        </button>

        <button type="button" class="matra-listen-slow-btn" id="matra-pair-slow-compare-btn" aria-label="Listen slowly at 0.7x speed (Press S)" title="Slow compare (Key S)">
          <span>🐢</span> Slow (0.7x) <kbd class="listen-kbd">S</kbd>
        </button>

        <button type="button" class="matra-listen-syllable-btn" id="matra-pair-syllable-compare-btn" aria-label="Compare syllable-by-syllable (Press B)" title="Syllable compare (Key B)">
          <span>🔤</span> Syllables <kbd class="listen-kbd">B</kbd>
        </button>

        ${!isRevealed ? `
          <button type="button" class="matra-peek-details-btn" id="matra-pair-reveal-btn" aria-label="Check pair details without audio (Press R)">
            <span>👁️</span> Check Details
          </button>
        ` : `
          <button type="button" class="matra-peek-details-btn" id="matra-pair-hide-btn" aria-label="Hide pair details">
            <span>🙈</span> Hide Details
          </button>
        `}
      </div>

      <!-- Revealed Verification Panel -->
      ${isRevealed ? `
        <div class="matra-verified-panel">
          <!-- Contrast Phonics Secret Callout -->
          <div class="contrast-rule-box">
            <div class="contrast-rule-title">
              <span>💡</span> Vowel Contrast Secret:
            </div>
            <div>${escapeHtml(pair.contrastRule)}</div>
          </div>

          <!-- Side-by-side details grid -->
          <div class="minimal-pair-details-grid">
            <!-- Word A Details -->
            <div class="matra-verified-item">
              <div class="matra-verified-label">${escapeHtml(pair.wordA.hindi)} (${escapeHtml(pair.wordA.matraName)})</div>
              <div class="matra-verified-value-lg">
                <span style="color:var(--primary); font-weight:700;">${pair.wordA.roman}</span>
                <span class="matra-phonics-badge">${escapeHtml(pair.wordA.phonics || '')}</span>
              </div>
              <div style="font-size:1.05rem; color:var(--secondary); font-weight:600; margin:0.35rem 0;">
                "${escapeHtml(pair.wordA.english)}"
              </div>
              <div style="font-size:0.8rem; color:var(--text-muted); font-family:var(--font-hindi); margin-top:0.25rem;">
                Math: ${escapeHtml(pair.wordA.breakdown)}
              </div>
              ${pair.wordA.examplePhrase ? `
                <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.35rem; border-top:1px dashed var(--border); padding-top:0.35rem;">
                  📖 <em>"${pair.wordA.examplePhrase.hindi}" (${pair.wordA.examplePhrase.english})</em>
                </div>
              ` : ''}
            </div>

            <!-- Word B Details -->
            <div class="matra-verified-item">
              <div class="matra-verified-label">${escapeHtml(pair.wordB.hindi)} (${escapeHtml(pair.wordB.matraName)})</div>
              <div class="matra-verified-value-lg">
                <span style="color:var(--primary); font-weight:700;">${pair.wordB.roman}</span>
                <span class="matra-phonics-badge">${escapeHtml(pair.wordB.phonics || '')}</span>
              </div>
              <div style="font-size:1.05rem; color:var(--secondary); font-weight:600; margin:0.35rem 0;">
                "${escapeHtml(pair.wordB.english)}"
              </div>
              <div style="font-size:0.8rem; color:var(--text-muted); font-family:var(--font-hindi); margin-top:0.25rem;">
                Math: ${escapeHtml(pair.wordB.breakdown)}
              </div>
              ${pair.wordB.examplePhrase ? `
                <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.35rem; border-top:1px dashed var(--border); padding-top:0.35rem;">
                  📖 <em>"${pair.wordB.examplePhrase.hindi}" (${pair.wordB.examplePhrase.english})</em>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Decision Prompt Banner -->
          <div class="matra-decision-prompt-banner">
            <div>
              <span>🤔</span> <strong>Did you read both correctly and hear the contrast?</strong>
            </div>
            <div class="matra-decision-buttons-group">
              <button type="button" class="action-btn again matra-decision-again-btn" id="card-inner-again-btn" title="Need more practice on this pair (Key 1)">
                <span>↺ Need More Practice</span> <kbd>1</kbd>
              </button>
              <button type="button" class="action-btn good matra-decision-good-btn" id="card-inner-good-btn" title="I read this pair correctly (Key 2)">
                <span>✓ Read Correctly!</span> <kbd>2</kbd>
              </button>
            </div>
          </div>
        </div>
      ` : ''}
    </div>
  `;

  // Attach button events
  document.getElementById('listen-word-a-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const boxA = document.getElementById('minimal-box-word-a');
    if (boxA) boxA.classList.add('highlight-a');
    speakHindi(pair.wordA.hindi, e.currentTarget);
    setTimeout(() => boxA?.classList.remove('highlight-a'), 650);
  });

  document.getElementById('listen-word-b-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const boxB = document.getElementById('minimal-box-word-b');
    if (boxB) boxB.classList.add('highlight-b');
    speakHindi(pair.wordB.hindi, e.currentTarget);
    setTimeout(() => boxB?.classList.remove('highlight-b'), 650);
  });

  document.getElementById('matra-pair-compare-hero-btn')?.addEventListener('click', () => {
    playContrastPairAudio(false);
  });

  document.getElementById('matra-pair-slow-compare-btn')?.addEventListener('click', () => {
    playContrastPairAudio(true);
  });

  document.getElementById('matra-pair-syllable-compare-btn')?.addEventListener('click', () => {
    playContrastPairAudio(true, true);
  });

  document.getElementById('matra-pair-reveal-btn')?.addEventListener('click', () => {
    toggleMatraReadingDetails();
  });

  document.getElementById('matra-pair-hide-btn')?.addEventListener('click', () => {
    toggleMatraReadingDetails();
  });

  document.getElementById('card-inner-again-btn')?.addEventListener('click', () => {
    handleMatraReadingRating('again');
  });

  document.getElementById('card-inner-good-btn')?.addEventListener('click', () => {
    handleMatraReadingRating('good');
  });
}

function renderMatraFlashcard() {
  if (state.matraIsMinimalPairMode) {
    renderMinimalPairFlashcard();
    return;
  }

  const container = document.getElementById('matra-flashcard-container');
  const progressEl = document.getElementById('matra-flash-progress');
  const prevBtn = document.getElementById('matra-prev-card-btn');
  const nextBtn = document.getElementById('matra-next-card-btn');
  if (!container) return;

  updateMatraPracticePillCount();

  if (!state.matraFlashcardsList || state.matraFlashcardsList.length === 0) {
    if (progressEl) progressEl.textContent = "No cards";
    const isNeedsPractice = state.matraActiveDeckFilter === 'needs-practice';
    container.innerHTML = `
      <div class="matra-empty-reading-state">
        <div style="font-size:3.2rem; margin-bottom:0.75rem;">${isNeedsPractice ? '🎉' : '🔍'}</div>
        <h3 style="font-size:1.5rem; color:var(--secondary); margin-bottom:0.5rem;">
          ${isNeedsPractice ? 'No Words In Practice Queue!' : 'No Cards Found'}
        </h3>
        <p style="color:var(--text-muted); max-width:440px; margin:0 auto 1.5rem; font-size:1rem; line-height:1.5;">
          ${isNeedsPractice 
            ? 'Awesome! You do not currently have any words marked as needing practice. As you practice reading, tap <strong>"Need More Practice"</strong> on any challenging words to drill them here.' 
            : 'No matra cards match the selected filter.'}
        </p>
        <button type="button" class="action-btn good" id="matra-empty-all-btn" style="padding:0.6rem 1.4rem;">
          Drill All Matras (96 Words)
        </button>
      </div>
    `;
    document.getElementById('matra-empty-all-btn')?.addEventListener('click', () => {
      const allPill = document.querySelector('.matra-filter-pill[data-flash-matra="all"]');
      allPill?.click();
    });
    return;
  }

  if (state.matraFlashIndex >= state.matraFlashcardsList.length) {
    state.matraFlashIndex = 0;
  } else if (state.matraFlashIndex < 0) {
    state.matraFlashIndex = state.matraFlashcardsList.length - 1;
  }

  const word = state.matraFlashcardsList[state.matraFlashIndex];
  const tagClass = getMatraTagClass(word.matra);
  const reviewStatus = state.matraReviews ? state.matraReviews[word.id] : null;
  const isRevealed = !!state.matraReadingRevealed;
  const relatedPair = findMinimalPairForWord(word.hindi);
  const pairPartner = relatedPair ? ((relatedPair.wordA.hindi === word.hindi) ? relatedPair.wordB : relatedPair.wordA) : null;

  if (progressEl) {
    const deckLabel = state.matraActiveDeckFilter === 'needs-practice' 
      ? '🔥 Needs Practice' 
      : formatSafeMatraText(word.matraName);
    progressEl.innerHTML = `Card <strong>${state.matraFlashIndex + 1}</strong> of <strong>${state.matraFlashcardsList.length}</strong> <span style="color:var(--text-subtle); margin-left:0.35rem;">(${deckLabel})</span>`;
  }

  if (prevBtn) prevBtn.disabled = state.matraFlashcardsList.length <= 1;
  if (nextBtn) nextBtn.disabled = state.matraFlashcardsList.length <= 1;

  container.innerHTML = `
    <div class="matra-reading-card ${isRevealed ? 'revealed' : 'unrevealed'}">
      <!-- Card Header: Matra Badge & Practice Status -->
      <div class="matra-reading-header">
        <span class="matra-tag ${tagClass}">
          ${formatSafeMatraText(word.matraName)}
        </span>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          ${reviewStatus ? `
            <span class="matra-status-badge ${reviewStatus === 'good' ? 'status-mastered' : 'status-review'}">
              ${reviewStatus === 'good' ? '✓ Mastered' : '↺ In Review'}
            </span>
          ` : `
            <span class="matra-status-badge status-new">○ New Word</span>
          `}
        </div>
      </div>

      <!-- Main Stage: Prominent Devanagari Word for Reading Practice -->
      <div class="matra-reading-stage">
        <div class="matra-word-display" id="matra-current-hindi-word" lang="hi">
          ${word.hindi}
        </div>

        ${!isRevealed ? `
          <div class="matra-reading-prompt">
            <span class="matra-prompt-icon">📖</span> Read this word out loud, then press <strong>Listen</strong> to check your pronunciation
          </div>
        ` : `
          <div class="matra-reading-prompt verified">
            <span class="matra-prompt-icon">🎧</span> Listen and verify your pronunciation below:
          </div>
        `}
      </div>

      <!-- Audio & Pronunciation Controls Bar -->
      <div class="matra-audio-controls-row">
        <button type="button" class="matra-listen-hero-btn" id="matra-listen-audio-btn" aria-label="Listen to pronunciation of ${word.hindi} (Press Space or A)">
          <span class="speaker-icon">🔊</span>
          <span class="listen-text">Listen</span>
          <kbd class="listen-kbd">Space</kbd>
        </button>

        <button type="button" class="matra-listen-slow-btn" id="matra-listen-slow-btn" aria-label="Listen slowly at 0.7x speed (Press S)" title="Listen slowly (Key S)">
          <span>🐢</span>
          <span class="slow-text">Slow (0.7x)</span>
          <kbd class="listen-kbd">S</kbd>
        </button>

        <button type="button" class="matra-listen-syllable-btn" id="matra-listen-syllable-btn" aria-label="Listen syllable-by-syllable (Press B)" title="Breakdown by syllable (Key B)">
          <span>🔤</span>
          <span class="syllable-text">Syllables</span>
          <kbd class="listen-kbd">B</kbd>
        </button>

        ${!isRevealed ? `
          <button type="button" class="matra-peek-details-btn" id="matra-reveal-toggle-btn" aria-label="Show pronunciation & meaning details without audio (Press R)" title="Check details (Key R)">
            <span>👁️</span> Check Details
          </button>
        ` : `
          <button type="button" class="matra-peek-details-btn" id="matra-hide-toggle-btn" aria-label="Hide pronunciation & meaning details" title="Hide details">
            <span>🙈</span> Hide Details
          </button>
        `}
      </div>

      <!-- Revealed Verification Panel (Hidden until user presses Listen / Slow / Check) -->
      ${isRevealed ? `
        <div class="matra-verified-panel" id="matra-verified-panel">
          <div class="matra-verified-grid">
            
            <!-- Pronunciation & Romanization -->
            <div class="matra-verified-item translit-box">
              <div class="matra-verified-label">Pronunciation</div>
              <div class="matra-verified-value-lg">
                <span style="color:var(--primary); font-weight:700;">${word.roman || ''}</span>
                <span class="matra-phonics-badge">${word.phonics || ''}</span>
              </div>
            </div>

            <!-- English Meaning -->
            <div class="matra-verified-item meaning-box">
              <div class="matra-verified-label">English Meaning</div>
              <div class="matra-verified-value-lg" style="color:var(--secondary); font-weight:600;">
                "${word.english}"
              </div>
            </div>

          </div>

          <!-- Matra Construction Breakdown Math -->
          <div class="matra-breakdown-card">
            <div class="matra-breakdown-card-header">
              <span>🧮</span> Matra Breakdown:
            </div>
            <div class="matra-breakdown-math-text">
              ${formatSafeMatraText(word.breakdown)} = <strong style="color:var(--secondary);">${word.hindi}</strong>
            </div>
          </div>

          <!-- Reading & Phonics Rule -->
          <div class="matra-rule-card">
            <div class="matra-rule-card-header">
              <span>💡</span> Reading Tip:
            </div>
            <div class="matra-rule-card-body">
              ${formatSafeMatraText(word.rule || 'Read each consonant with its attached vowel sign.')}
            </div>
          </div>

          <!-- Confusion Buster Minimal Pair Partner Callout (if available) -->
          ${pairPartner ? `
            <div style="background:#faf5ff; border:1px solid #d8b4fe; border-radius:8px; padding:0.65rem 0.95rem; margin-bottom:0.75rem; display:flex; align-items:center; justify-content:space-between; gap:0.5rem; flex-wrap:wrap;">
              <span style="font-size:0.85rem; color:#6b21a8;">
                ⚡ <strong>Confusion Buster:</strong> Don'\''t confuse with <strong>"${pairPartner.hindi}"</strong> (${pairPartner.english})
              </span>
              <button type="button" class="action-btn" id="jump-to-minimal-pair-btn" style="padding:0.3rem 0.75rem; font-size:0.78rem; background:#7c3aed; color:white; border:none; border-radius:9999px; cursor:pointer;">
                View Contrast Pair ➔
              </button>
            </div>
          ` : ''}

          ${word.examplePhrase ? `
            <div class="matra-example-phrase-row">
              <div class="phrase-left">
                <div class="phrase-label">In Context:</div>
                <div class="phrase-hindi">${word.examplePhrase.hindi}</div>
                <div class="phrase-meta">${word.examplePhrase.roman} &bull; <em>"${word.examplePhrase.english}"</em></div>
              </div>
              <button type="button" class="matra-phrase-play-btn" id="matra-card-phrase-audio-btn" aria-label="Listen to example phrase">
                <span>🔊</span> Listen Phrase
              </button>
            </div>
          ` : ''}

          <!-- Decision Prompt Banner -->
          <div class="matra-decision-prompt-banner">
            <div>
              <span>🤔</span> <strong>Did you read it correctly?</strong>
            </div>
            <div class="matra-decision-buttons-group">
              <button type="button" class="action-btn again matra-decision-again-btn" id="card-inner-again-btn" title="Need more practice on this word (Key 1)">
                <span>↺ Need More Practice</span> <kbd>1</kbd>
              </button>
              <button type="button" class="action-btn good matra-decision-good-btn" id="card-inner-good-btn" title="I read this word correctly (Key 2)">
                <span>✓ Read Correctly!</span> <kbd>2</kbd>
              </button>
            </div>
          </div>
        </div>
      ` : ''}
    </div>
  `;

  // Attach button event listeners
  document.getElementById('matra-listen-audio-btn')?.addEventListener('click', () => {
    playMatraReadingAudio(false);
  });

  document.getElementById('matra-listen-slow-btn')?.addEventListener('click', () => {
    playMatraReadingAudio(true);
  });

  document.getElementById('matra-listen-syllable-btn')?.addEventListener('click', () => {
    playMatraSyllableAudio();
  });

  document.getElementById('matra-reveal-toggle-btn')?.addEventListener('click', () => {
    toggleMatraReadingDetails();
  });

  document.getElementById('matra-hide-toggle-btn')?.addEventListener('click', () => {
    toggleMatraReadingDetails();
  });

  document.getElementById('matra-card-phrase-audio-btn')?.addEventListener('click', () => {
    playMatraPhraseAudio();
  });

  document.getElementById('jump-to-minimal-pair-btn')?.addEventListener('click', () => {
    if (relatedPair) {
      const contrastPill = document.querySelector('.matra-filter-pill[data-flash-matra="minimal-pairs"]');
      if (contrastPill) contrastPill.click();
      const targetIdx = state.matraMinimalPairsList.findIndex(p => p.id === relatedPair.id);
      if (targetIdx !== -1) {
        state.matraMinimalPairIndex = targetIdx;
        renderMatraFlashcard();
      }
    }
  });

  document.getElementById('card-inner-again-btn')?.addEventListener('click', () => {
    handleMatraReadingRating('again');
  });

  document.getElementById('card-inner-good-btn')?.addEventListener('click', () => {
    handleMatraReadingRating('good');
  });
}

// --- 20.3 Matra Speed Match Drill ---
function initMatraSpeedMatch() {
  document.getElementById('matra-restart-match-btn')?.addEventListener('click', startMatraSpeedMatch);
  document.getElementById('matra-match-toggle-translit-btn')?.addEventListener('click', toggleSpeedMatchTransliteration);
}

function startMatraSpeedMatch() {
  const hindiCol = document.getElementById('matra-match-hindi-col');
  const engCol = document.getElementById('matra-match-english-col');
  const statusEl = document.getElementById('matra-match-status');
  const timerEl = document.getElementById('matra-match-timer');
  const scoreEl = document.getElementById('matra-match-score');
  const streakEl = document.getElementById('matra-match-streak');
  if (!hindiCol || !engCol) return;

  const isHidden = !!state.matchHideTransliteration;
  const matraTab = document.getElementById('matra-match-tab');
  if (matraTab) matraTab.classList.toggle('hide-translit', isHidden);

  if (state.matraTimerInterval) {
    clearInterval(state.matraTimerInterval);
    state.matraTimerInterval = null;
  }

  state.matraSelectedHindi = null;
  state.matraSelectedEnglish = null;
  state.matraMatchedCount = 0;
  state.matraGameStartTime = Date.now();

  const deck = state.matraWords.filter(w => w.matra !== 'mukta').sort(() => Math.random() - 0.5).slice(0, 6);
  state.matraMatchPairs = deck;

  const shuffledEng = [...deck].sort(() => Math.random() - 0.5);

  hindiCol.innerHTML = deck.map(w => {
    const tagClass = getMatraTagClass(w.matra);
    return `
      <button class="matra-match-tile hindi" data-id="${w.id}" data-type="hindi" aria-label="Hindi word: ${w.hindi}">
        <span style="font-family: var(--font-hindi); font-size: 1.5rem; font-weight: 700; color: var(--secondary);">${w.hindi}</span>
        <span class="match-roman" style="${isHidden ? 'display:none;' : ''}; font-size:0.75rem; color:var(--text-muted); font-family:var(--font-sans); font-weight:500;">${w.roman || ''}</span>
        <span class="matra-tag ${tagClass}" style="font-size:0.7rem; padding:0.15rem 0.4rem; margin-top:0.25rem;">${formatSafeMatraText(w.matraName)}</span>
      </button>
    `;
  }).join('');

  engCol.innerHTML = shuffledEng.map(w => `
    <button class="matra-match-tile" data-id="${w.id}" data-type="english" aria-label="Meaning: ${w.english}">
      <span style="font-weight: 600; color: var(--text);">${w.english}</span>
      <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 400;">[${w.phonics || ''}]</span>
    </button>
  `).join('');

  if (scoreEl) scoreEl.textContent = '0 / 6';
  if (streakEl) streakEl.textContent = `🔥 ${state.matraMatchStreak || 0}`;
  if (statusEl) statusEl.textContent = "Click a Hindi matra word, then match its sound / English meaning.";
  announce("Matra Speed Match started. 6 pairs to match.");

  // 60-second countdown timer
  let secondsRemaining = 60;
  if (timerEl) timerEl.textContent = `${secondsRemaining}s`;

  state.matraTimerInterval = setInterval(() => {
    secondsRemaining--;
    if (timerEl) timerEl.textContent = `${secondsRemaining}s`;
    if (secondsRemaining <= 0) {
      clearInterval(state.matraTimerInterval);
      state.matraTimerInterval = null;
      if (statusEl) statusEl.textContent = `⏰ Time's up! Matched ${state.matraMatchedCount} of 6 pairs.`;
      announce(`Time is up! You matched ${state.matraMatchedCount} of 6 pairs.`);
      state.matraMatchStreak = 0;
      if (streakEl) streakEl.textContent = '🔥 0';
    }
  }, 1000);

  hindiCol.querySelectorAll('.matra-match-tile').forEach(tile => {
    tile.addEventListener('click', () => handleMatraMatchSelection(tile, 'hindi'));
  });

  engCol.querySelectorAll('.matra-match-tile').forEach(tile => {
    tile.addEventListener('click', () => handleMatraMatchSelection(tile, 'english'));
  });
}

function handleMatraMatchSelection(tile, type) {
  if (tile.classList.contains('matched')) return;

  if (type === 'hindi') {
    if (tile.classList.contains('selected') || state.matraSelectedHindi === tile.dataset.id) {
      tile.classList.remove('selected');
      tile.setAttribute('aria-pressed', 'false');
      state.matraSelectedHindi = null;
      const word = state.matraWords.find(w => w.id === tile.dataset.id);
      if (word) announce(`Deselected ${word.hindi}`);
      return;
    }
    document.querySelectorAll('#matra-match-hindi-col .matra-match-tile').forEach(t => {
      t.classList.remove('selected');
      t.setAttribute('aria-pressed', 'false');
    });
    tile.classList.add('selected');
    tile.setAttribute('aria-pressed', 'true');
    state.matraSelectedHindi = tile.dataset.id;
    const word = state.matraWords.find(w => w.id === tile.dataset.id);
    if (word) speakHindi(word.hindi, tile);
  } else {
    if (tile.classList.contains('selected') || state.matraSelectedEnglish === tile.dataset.id) {
      tile.classList.remove('selected');
      tile.setAttribute('aria-pressed', 'false');
      state.matraSelectedEnglish = null;
      const word = state.matraWords.find(w => w.id === tile.dataset.id);
      if (word) announce(`Deselected English: ${word.english}`);
      return;
    }
    document.querySelectorAll('#matra-match-english-col .matra-match-tile').forEach(t => {
      t.classList.remove('selected');
      t.setAttribute('aria-pressed', 'false');
    });
    tile.classList.add('selected');
    tile.setAttribute('aria-pressed', 'true');
    state.matraSelectedEnglish = tile.dataset.id;
  }

  if (state.matraSelectedHindi && state.matraSelectedEnglish) {
    if (state.matraSelectedHindi === state.matraSelectedEnglish) {
      // Match found
      const matchedH = document.querySelector(`#matra-match-hindi-col .matra-match-tile[data-id="${state.matraSelectedHindi}"]`);
      const matchedE = document.querySelector(`#matra-match-english-col .matra-match-tile[data-id="${state.matraSelectedEnglish}"]`);
      if (matchedH) {
        matchedH.classList.remove('selected');
        matchedH.classList.add('matched');
        matchedH.disabled = true;
      }
      if (matchedE) {
        matchedE.classList.remove('selected');
        matchedE.classList.add('matched');
        matchedE.disabled = true;
      }

      state.matraMatchedCount++;
      state.matraMatchStreak = (state.matraMatchStreak || 0) + 1;
      const scoreEl = document.getElementById('matra-match-score');
      const streakEl = document.getElementById('matra-match-streak');
      if (scoreEl) scoreEl.textContent = `${state.matraMatchedCount} / 6`;
      if (streakEl) streakEl.textContent = `🔥 ${state.matraMatchStreak}`;

      const matchedWord = state.matraWords.find(w => w.id === state.matraSelectedHindi);
      announce(`Match! ${matchedWord?.hindi} matches ${matchedWord?.english}.`);

      if (state.matraMatchedCount === 6) {
        if (state.matraTimerInterval) {
          clearInterval(state.matraTimerInterval);
          state.matraTimerInterval = null;
        }
        const elapsed = Math.round((Date.now() - state.matraGameStartTime) / 1000);
        const statusEl = document.getElementById('matra-match-status');
        if (statusEl) {
          statusEl.innerHTML = `🎉 <strong>Round complete!</strong> All 6 matra words matched in ${elapsed}s!`;
        }
        announce(`Round complete! All 6 matra pairs matched in ${elapsed} seconds.`);
        showToast(`🎉 Round Complete in ${elapsed}s!`, 'success');
      }

      state.matraSelectedHindi = null;
      state.matraSelectedEnglish = null;
    } else {
      // Incorrect match
      state.matraMatchStreak = 0;
      const streakEl = document.getElementById('matra-match-streak');
      if (streakEl) streakEl.textContent = '🔥 0';

      const selH = document.querySelector('#matra-match-hindi-col .matra-match-tile.selected');
      const selE = document.querySelector('#matra-match-english-col .matra-match-tile.selected');
      selH?.classList.add('wrong');
      selE?.classList.add('wrong');

      setTimeout(() => {
        selH?.classList.remove('selected', 'wrong');
        selE?.classList.remove('selected', 'wrong');
        state.matraSelectedHindi = null;
        state.matraSelectedEnglish = null;
      }, 500);
    }
  }
}

// --- 20.4 Matra Sound & Reading Quiz ---
function initMatraQuiz() {
  document.getElementById('matra-restart-quiz-btn')?.addEventListener('click', startMatraQuizSession);
  document.getElementById('clear-matras-best-btn')?.addEventListener('click', () => promptClearQuizBestTime('matras'));
  document.getElementById('matra-next-quiz-btn')?.addEventListener('click', () => {
    state.matraQuizIndex++;
    renderMatraQuizQuestion();
  });
  updateQuizBestDisplay('matras');
}

function startMatraQuizSession() {
  state.matraQuizIndex = 0;
  state.matraQuizScore = 0;
  state.matraQuizQuestions = generateMatraQuizQuestions();
  startQuizTimer('matras');
  updateQuizBestDisplay('matras');

  const restartBtn = document.getElementById('matra-restart-quiz-btn');
  const nextBtn = document.getElementById('matra-next-quiz-btn');
  if (restartBtn) restartBtn.style.display = 'none';
  if (nextBtn) nextBtn.style.display = 'none';

  renderMatraQuizQuestion();
}

function generateMatraQuizQuestions() {
  const words = state.matraWords.filter(w => w.matra !== 'mukta').sort(() => Math.random() - 0.5);
  const questions = [];

  for (let i = 0; i < Math.min(10, words.length); i++) {
    const target = words[i];
    const qType = i % 4; // 0: Identify Matra, 1: Phonics/Vowel Distinction, 2: Construction Math, 3: Audio Listening
    const safeMatraName = formatSafeMatraText(target.matraName);

    if (qType === 0) {
      // Identify Matra
      const distractors = ['aa', 'i', 'ii', 'u', 'uu', 'ri', 'e', 'ai', 'o', 'au', 'anusvara', 'anunasika', 'half']
        .filter(m => m !== target.matra)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(m => formatSafeMatraText(getMatraNameAndSymbol(m).name));

      const options = [safeMatraName, ...distractors].sort(() => Math.random() - 0.5);

      questions.push({
        prompt: `Which vowel matra sign is used in the word <strong style="font-family:var(--font-hindi); font-size:1.6rem; color:var(--secondary);">${target.hindi}</strong> (${target.english})?`,
        options: options,
        correctIndex: options.indexOf(safeMatraName),
        explanation: `${target.hindi} uses ${safeMatraName} (${target.matraType}). Breakdown: ${formatSafeMatraText(target.breakdown)}. Rule: ${formatSafeMatraText(target.rule)}`,
        audioText: target.hindi
      });
    } else if (qType === 1) {
      // Phonics Distinction
      const options = [target, ...words.filter(w => w.matra !== target.matra).slice(0, 3)]
        .sort(() => Math.random() - 0.5);

      questions.push({
        prompt: `Which of the following words is written with the <strong>${safeMatraName}</strong>?`,
        options: options.map(w => `${w.hindi} (${w.roman || ''} - ${w.english})`),
        correctIndex: options.findIndex(w => w.id === target.id),
        explanation: `Correct! ${target.hindi} is written with ${safeMatraName}. Equation: ${formatSafeMatraText(target.breakdown)} = ${target.hindi}.`,
        audioText: target.hindi
      });
    } else if (qType === 2) {
      // Construction Math
      const otherWords = words.filter(w => w.id !== target.id).slice(0, 3);
      const options = [target, ...otherWords].sort(() => Math.random() - 0.5);

      questions.push({
        prompt: `Which Hindi word is formed by the equation:<br><strong style="font-family:var(--font-hindi); font-size:1.4rem; color:var(--primary);">${formatSafeMatraText(target.breakdown)}</strong>?`,
        options: options.map(w => `${w.hindi} (${w.english})`),
        correctIndex: options.findIndex(w => w.id === target.id),
        explanation: `${formatSafeMatraText(target.breakdown)} = ${target.hindi} ("${target.english}"). Phonics: [${target.phonics || ''}].`,
        audioText: target.hindi
      });
    } else {
      // Audio Listening
      const sameLengthOthers = words.filter(w => w.id !== target.id).slice(0, 3);
      const options = [target, ...sameLengthOthers].sort(() => Math.random() - 0.5);

      questions.push({
        prompt: `Click the speaker below to listen. Which word was pronounced?`,
        hasAudioHero: true,
        audioText: target.hindi,
        options: options.map(w => `${w.hindi} (${w.roman || ''})`),
        correctIndex: options.findIndex(w => w.id === target.id),
        explanation: `The audio pronounced ${target.hindi} (${target.roman || ''}), which means "${target.english}".`,
      });
    }
  }

  return questions;
}

function renderMatraQuizQuestion() {
  const card = document.getElementById('matra-quiz-card');
  const badge = document.getElementById('matra-quiz-score-badge');
  const nextBtn = document.getElementById('matra-next-quiz-btn');
  const restartBtn = document.getElementById('matra-restart-quiz-btn');
  if (!card) return;

  if (badge) {
    badge.textContent = `Score: ${state.matraQuizScore} / 10`;
  }

  if (state.matraQuizIndex >= state.matraQuizQuestions.length) {
    // Quiz finished
    const elapsed = stopQuizTimer('matras');
    const { isNewBest, currentBest } = checkAndUpdateQuizBestTime('matras', elapsed, state.matraQuizScore, state.matraQuizQuestions.length);
    updateQuizBestDisplay('matras');

    const percentage = Math.round((state.matraQuizScore / state.matraQuizQuestions.length) * 100);
    card.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎉</div>
        <h3 style="font-size: 1.85rem; margin-bottom: 0.5rem; color: var(--secondary);">Quiz Complete!</h3>
        <p style="font-size: 1.15rem; color: var(--text-muted); margin-bottom: 1rem;">
          You scored <strong>${state.matraQuizScore} out of ${state.matraQuizQuestions.length}</strong> (${percentage}%).
        </p>

        ${isNewBest ? `
          <div class="quiz-new-best-banner">
            🏆 New Personal Best! <strong>${formatQuizTime(elapsed)}</strong> (${state.matraQuizScore}/${state.matraQuizQuestions.length})
          </div>
        ` : ''}

        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap; margin:1rem 0 1.5rem; font-size:1rem;">
          <div style="background:var(--bg); border:1px solid var(--border); padding:0.6rem 1.2rem; border-radius:var(--radius-sm);">
            ⏱️ Time Taken: <strong>${formatQuizTime(elapsed)}</strong>
          </div>
          <div style="background:var(--bg); border:1px solid var(--border); padding:0.6rem 1.2rem; border-radius:var(--radius-sm);">
            🏆 Best Record: <strong id="matras-complete-best-record">${formatBestRecord(currentBest)}</strong>
          </div>
        </div>

        <p style="font-size: 0.95rem; color: var(--text); max-width: 500px; margin: 0 auto 1.5rem;">
          ${percentage >= 80 ? 'Outstanding reading accuracy! You have a great grasp of Devanagari vowel signs and native phonics.' : 'Good practice session! Review the cards in the Matra Flashcards tab to strengthen weaker vowel patterns.'}
        </p>

        <div style="display:flex; flex-direction:column; align-items:center; gap:0.6rem;">
          <button class="action-btn good" id="finish-matra-restart-btn" style="max-width:240px; margin:0 auto;">
            🔄 Take Quiz Again
          </button>
          ${currentBest ? `
            <button type="button" class="action-btn text-danger-btn" id="finish-matra-clear-best-btn" style="font-size:0.85rem; padding:0.35rem 0.9rem;">
              🗑️ Clear Best Time
            </button>
          ` : ''}
        </div>
      </div>
    `;
    if (nextBtn) nextBtn.style.display = 'none';
    if (restartBtn) restartBtn.style.display = 'none';
    announce(`Matra quiz finished. Your score is ${state.matraQuizScore} out of ${state.matraQuizQuestions.length} in ${formatQuizTime(elapsed)}.`);
    document.getElementById('finish-matra-restart-btn')?.addEventListener('click', startMatraQuizSession);
    document.getElementById('finish-matra-clear-best-btn')?.addEventListener('click', () => promptClearQuizBestTime('matras'));
    return;
  }

  const q = state.matraQuizQuestions[state.matraQuizIndex];
  if (nextBtn) nextBtn.style.display = 'none';
  if (restartBtn) restartBtn.style.display = 'none';

  card.innerHTML = `
    <div style="margin-bottom: 1.25rem;">
      <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted);">
        Question ${state.matraQuizIndex + 1} of ${state.matraQuizQuestions.length}
      </span>
      <div class="matra-quiz-question-text">
        ${q.prompt}
      </div>

      ${q.hasAudioHero || q.audioText ? `
        <div style="margin-top: 0.75rem;">
          <button id="matra-quiz-speaker-btn" class="matra-audio-hero-btn" style="padding: 0.45rem 1rem; font-size: 0.95rem;" aria-label="Listen to word audio">
            🔊 Listen to Pronunciation
          </button>
        </div>
      ` : ''}
    </div>

    <div class="quiz-options-list" style="display: flex; flex-direction: column; gap: 0.65rem;">
      ${q.options.map((opt, idx) => `
        <button class="quiz-opt-btn" data-index="${idx}">
          <span class="quiz-opt-letter">${String.fromCharCode(65 + idx)}.</span>
          <span class="quiz-opt-content">${opt}</span>
        </button>
      `).join('')}
    </div>

    <div id="matra-quiz-feedback" style="display: none; margin-top: 1.25rem; padding: 1rem; border-radius: var(--radius-sm);" role="status"></div>
  `;

  document.getElementById('matra-quiz-speaker-btn')?.addEventListener('click', function() {
    if (q.audioText) speakHindi(q.audioText, this);
  });

  // Auto-play audio for listening questions
  if (q.hasAudioHero && q.audioText) {
    setTimeout(() => {
      const btn = document.getElementById('matra-quiz-speaker-btn');
      speakHindi(q.audioText, btn);
    }, 200);
  }

  card.querySelectorAll('.quiz-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedIndex = parseInt(btn.dataset.index, 10);
      handleMatraQuizAnswer(btn, selectedIndex);
    });
  });
}

function handleMatraQuizAnswer(btn, selectedIndex) {
  const q = state.matraQuizQuestions[state.matraQuizIndex];
  const allBtns = document.querySelectorAll('.quiz-opt-btn');
  allBtns.forEach(b => b.disabled = true);

  const feedback = document.getElementById('matra-quiz-feedback');
  const nextBtn = document.getElementById('matra-next-quiz-btn');
  const isCorrect = selectedIndex === q.correctIndex;

  if (isCorrect) {
    state.matraQuizScore++;
    btn.classList.add('correct');
    btn.style.background = '#d1fae5';
    btn.style.borderColor = '#10b981';
    btn.style.color = '#065f46';
    if (feedback) {
      feedback.style.display = 'block';
      feedback.style.background = '#ecfdf5';
      feedback.style.border = '1px solid #a7f3d0';
      feedback.style.color = '#065f46';
      feedback.innerHTML = `<strong>✓ Correct!</strong> ${q.explanation}`;
    }
    announce(`Correct! ${q.explanation}`);
  } else {
    btn.classList.add('wrong');
    btn.style.background = '#fee2e2';
    btn.style.borderColor = '#ef4444';
    btn.style.color = '#991b1b';

    const correctBtn = document.querySelector(`.quiz-opt-btn[data-index="${q.correctIndex}"]`);
    if (correctBtn) {
      correctBtn.style.background = '#d1fae5';
      correctBtn.style.borderColor = '#10b981';
      correctBtn.style.color = '#065f46';
    }

    if (feedback) {
      feedback.style.display = 'block';
      feedback.style.background = '#fef2f2';
      feedback.style.border = '1px solid #fecaca';
      feedback.style.color = '#991b1b';
      feedback.innerHTML = `<strong>✗ Incorrect.</strong> ${q.explanation}`;
    }
    announce(`Incorrect. ${q.explanation}`);
  }

  const badge = document.getElementById('matra-quiz-score-badge');
  if (badge) badge.textContent = `Score: ${state.matraQuizScore} / 10`;
  if (nextBtn) nextBtn.style.display = 'inline-block';
}

// --- 20.5 Custom Matra Words & Storage Manager ---
function initCustomMatraForm() {
  const form = document.getElementById('add-matra-form');
  const hindiInput = document.getElementById('custom-matra-hindi');
  const romanInput = document.getElementById('custom-matra-roman');
  const englishInput = document.getElementById('custom-matra-english');
  const familySelect = document.getElementById('custom-matra-family');
  const phraseHindiInput = document.getElementById('custom-matra-phrase-hindi');
  const phraseEngInput = document.getElementById('custom-matra-phrase-english');
  const successBox = document.getElementById('add-matra-success');
  const exportBtn = document.getElementById('export-matra-db-btn');
  const clearBtn = document.getElementById('clear-custom-matra-btn');

  updateMatraDbStatus();

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const hindi = (hindiInput?.value || '').trim();
    let roman = (romanInput?.value || '').trim();
    const english = (englishInput?.value || '').trim();
    let family = familySelect?.value || 'auto';
    const phraseHindi = (phraseHindiInput?.value || '').trim();
    const phraseEng = (phraseEngInput?.value || '').trim();

    if (!hindi) {
      showToast("Please enter a Hindi word.", "warning");
      return;
    }

    if (!containsDevanagari(hindi)) {
      showToast("The Hindi word must contain Devanagari script.", "warning");
      hindiInput?.focus();
      return;
    }

    // Script verification: Romanisation must be in Latin script
    if (roman && (!isLatinScript(roman) || containsDevanagari(roman))) {
      roman = devanagariToLatin(hindi);
    } else if (!roman) {
      roman = devanagariToLatin(hindi);
    }

    if (family === 'auto') {
      family = detectMatraFromWord(hindi);
    }

    const matraMeta = getMatraNameAndSymbol(family);
    const breakdown = generateMatraBreakdown(hindi);

    const newWord = {
      id: "custom-matra-" + Date.now() + "-" + Math.random().toString(36).substr(2, 6),
      hindi: hindi,
      roman: roman,
      english: english,
      matra: family,
      matraName: matraMeta.name,
      matraVowel: matraMeta.name.split(' ')[0] || 'मात्रा',
      matraSymbol: matraMeta.symbol,
      matraType: matraMeta.type,
      phonics: roman,
      breakdown: breakdown,
      length: Array.from(hindi).length,
      rule: `Custom reading word with ${matraMeta.name}.`,
      examplePhrase: phraseHindi ? {
        hindi: phraseHindi,
        roman: devanagariToLatin(phraseHindi),
        english: phraseEng || ''
      } : null
    };

    state.saveCustomMatra(newWord);
    renderMatraGrid();
    updateMatraDbStatus();

    if (successBox) {
      successBox.style.display = 'block';
      successBox.textContent = `✓ Successfully saved "${hindi}" to your Matra Reading deck!`;
      setTimeout(() => {
        successBox.style.display = 'none';
      }, 4000);
    }

    showToast(`Added "${hindi}" to your reading deck!`, 'success');
    announce(`Added ${hindi} to your reading deck`);
    form.reset();
  });

  exportBtn?.addEventListener('click', () => {
    const stored = safeStorage.getItem('hindi_custom_matras');
    let custom = [];
    if (stored) {
      try { custom = JSON.parse(stored); } catch (e) { custom = []; }
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(custom, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = "hindi_custom_matras_backup.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    showToast(`Exported ${custom.length} custom matra words to JSON file.`, 'success');
  });

  clearBtn?.addEventListener('click', () => {
    if (confirm("Are you sure you want to clear all custom matra words? The core 106-word curriculum will remain intact.")) {
      safeStorage.removeItem('hindi_custom_matras');
      state.matraWords = Array.isArray(window.MATRA_CURRICULUM) ? [...window.MATRA_CURRICULUM] : [];
      state.matraFlashcardsList = [...state.matraWords];
      renderMatraGrid();
      updateMatraDbStatus();
      showToast("Custom matra words cleared.", "info");
      announce("Custom matra words cleared.");
    }
  });
}

function updateMatraDbStatus() {
  const label = document.getElementById('matra-db-status-label');
  if (!label) return;
  const stored = safeStorage.getItem('hindi_custom_matras');
  let count = 0;
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) count = parsed.length;
    } catch (e) {}
  }
  label.textContent = `Total custom words stored locally: ${count}`;
}

function generateMatraBreakdown(hindi) {
  if (!hindi) return '';
  return Array.from(hindi).join(' + ');
}

// =========================================================================
// 21. Data Cleanup & Lexicon Manager (डेटा परिष्कार व शब्दकोश प्रबंधक)
// =========================================================================

function auditWordAnomalies(item, module) {
  const issues = [];
  if (!item) return issues;

  // 1. Script checks
  if (item.roman && /[\u0900-\u097F]/.test(item.roman)) {
    issues.push({
      type: 'script',
      field: 'roman',
      label: 'Devanagari in Roman',
      detail: 'Roman field contains Devanagari script. Transliteration should use Latin letters.',
      severity: 'error'
    });
  }
  if (item.hindi && /[a-zA-Z]/.test(item.hindi)) {
    issues.push({
      type: 'script',
      field: 'hindi',
      label: 'Latin letters in Hindi',
      detail: 'Hindi field contains Latin letters. Word should be in Devanagari script.',
      severity: 'error'
    });
  }

  // 2. Missing Gloss / Transliteration
  if (!item.english || !item.english.trim()) {
    issues.push({
      type: 'missing',
      field: 'english',
      label: 'Missing English gloss',
      detail: 'English translation is empty.',
      severity: 'warning'
    });
  }
  if (!item.roman || !item.roman.trim()) {
    issues.push({
      type: 'missing',
      field: 'roman',
      label: 'Missing Roman transliteration',
      detail: 'Roman pronunciation guide is blank.',
      severity: 'warning'
    });
  }

  // 3. Module-specific grammatical checks
  if (module === 'vocab') {
    if (item.pos === 'Noun' && (!item.gender || item.gender === 'none' || item.gender === '—')) {
      issues.push({
        type: 'gender',
        field: 'gender',
        label: 'Noun missing gender (M/F)',
        detail: 'Nouns require a grammatical gender (Masculine or Feminine).',
        severity: 'warning'
      });
    }
  } else if (module === 'verbs') {
    if (typeof item.takesNe === 'undefined' && !item.transitivity) {
      issues.push({
        type: 'grammar',
        field: 'takesne',
        label: 'Missing transitivity rule',
        detail: 'Specify whether this verb takes "ने" in the past tense.',
        severity: 'info'
      });
    }
  }

  // 4. Combining mark checks
  if (item.hindi && /([^\u0900-\u097F\u25CC]|^)([\u0901-\u0903\u093C\u093E-\u094F])/.test(item.hindi)) {
    issues.push({
      type: 'typography',
      field: 'hindi',
      label: 'Unanchored combining mark',
      detail: 'Word contains a vowel matra mark without an attached base consonant.',
      severity: 'error'
    });
  }

  return issues;
}


function initLexiconManager() {
  state.lexiconModuleFilter = 'all'; // all | verbs | vocab | matras
  state.lexiconSourceFilter = 'all'; // all | custom | core
  state.lexiconIssuesOnly = false;
  state.lexiconSearch = '';
  state.lexiconEditingKey = null;

  // Modal open buttons
  document.getElementById('open-lexicon-manager-btn')?.addEventListener('click', () => openLexiconManager());
  document.getElementById('open-lexicon-from-verb-notes')?.addEventListener('click', () => openLexiconManager('', 'verbs'));
  document.getElementById('open-lexicon-from-vocab-notes')?.addEventListener('click', () => openLexiconManager('', 'vocab'));
  document.getElementById('open-lexicon-from-matra-notes')?.addEventListener('click', () => openLexiconManager('', 'matras'));

  // Close button & overlay click
  document.getElementById('modal-lexicon-manager-close-btn')?.addEventListener('click', closeLexiconManager);
  document.getElementById('lexicon-manager-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'lexicon-manager-modal') closeLexiconManager();
  });

  // Global Keyboard shortcut: Press D outside input to toggle Data Manager
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
    if (e.key === 'd' || e.key === 'D') {
      const modal = document.getElementById('lexicon-manager-modal');
      if (modal && modal.classList.contains('open')) {
        closeLexiconManager();
      } else {
        openLexiconManager();
      }
    } else if (e.key === 'Escape') {
      const modal = document.getElementById('lexicon-manager-modal');
      if (modal && modal.classList.contains('open')) {
        closeLexiconManager();
      }
    }
  });
}

function openLexiconManager(prefillSearch = '', filterModule = 'all') {
  const modal = document.getElementById('lexicon-manager-modal');
  if (!modal) return;

  lastFocusedElement = document.activeElement;
  if (prefillSearch) state.lexiconSearch = prefillSearch;
  if (filterModule) state.lexiconModuleFilter = filterModule;
  state.lexiconEditingKey = null;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  renderLexiconManager();
  const container = document.getElementById('modal-lexicon-manager-content');
  if (container) container.scrollTop = 0;
  updateModalBodyLock();

  const closeBtn = document.getElementById('modal-lexicon-manager-close-btn');
  const searchInput = document.getElementById('lexicon-search-input');
  setTimeout(() => {
    if (prefillSearch && searchInput) {
      searchInput.focus();
      const len = searchInput.value.length;
      searchInput.setSelectionRange(len, len);
    } else {
      closeBtn?.focus();
    }
  }, 50);
  announce("Opened Data Cleanup and Lexicon Manager");
}

function closeLexiconManager() {
  clearSpeakingButtonState();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  const modal = document.getElementById('lexicon-manager-modal');
  if (!modal || !modal.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  state.lexiconEditingKey = null;
  resetModalFullscreen('lexicon-manager-modal');
  updateModalBodyLock();
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
  announce("Closed Lexicon Manager");
}

function matchesLexiconSearch(e, rawQuery) {
  if (!rawQuery) return true;
  const q = rawQuery.toLowerCase().trim();
  if (!q) return true;
  const item = e.item || {};

  // Check Hindi
  if (item.hindi && item.hindi.toLowerCase().includes(q)) return true;
  // Check Roman
  if (item.roman && item.roman.toLowerCase().includes(q)) return true;
  // Check English
  if (item.english && item.english.toLowerCase().includes(q)) return true;
  // Check Stem
  if (item.stem && item.stem.toLowerCase().includes(q)) return true;
  // Check POS & Gender
  if (item.pos && item.pos.toLowerCase().includes(q)) return true;
  if (item.gender && item.gender.toLowerCase().includes(q)) return true;
  if (item.transitivity && item.transitivity.toLowerCase().includes(q)) return true;
  if (item.takesNe !== undefined) {
    if ((q === 'ne' || q === 'takes ne') && item.takesNe) return true;
    if ((q === 'no ne' || q === 'without ne') && !item.takesNe) return true;
  }
  // Check Matra info
  if (item.matraName && item.matraName.toLowerCase().includes(q)) return true;
  if (item.rule && item.rule.toLowerCase().includes(q)) return true;
  if (item.breakdown && item.breakdown.toLowerCase().includes(q)) return true;
  // Check Category / Cluster
  if (item.category && item.category.toLowerCase().includes(q)) return true;
  if (item.cluster && item.cluster.toLowerCase().includes(q)) return true;
  // Check Source tags
  if (q === 'custom' && e.isCustom) return true;
  if (q === 'core' && !e.isCustom) return true;
  // Check Anomalies
  if (e.anomalies && e.anomalies.length > 0) {
    if (q === 'issue' || q === 'issues' || q === 'anomaly' || q === 'anomalies') return true;
    if (e.anomalies.some(a => (a.label && a.label.toLowerCase().includes(q)) || (a.detail && a.detail.toLowerCase().includes(q)))) {
      return true;
    }
  }
  return false;
}

function renderLexiconRowsHtml(filtered, issueCount) {
  if (!filtered || filtered.length === 0) {
    return `
      <tr>
        <td colspan="6" style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
          <div style="font-size:1.8rem; margin-bottom:0.4rem;">${state.lexiconIssuesOnly && issueCount === 0 ? '🎉' : '🔍'}</div>
          <div style="font-size:1.05rem; font-weight:600;">
            ${state.lexiconIssuesOnly && issueCount === 0 ? 'Zero Issues Detected!' : 'No entries matched your search or filters.'}
          </div>
          <div style="font-size:0.85rem; margin-top:0.25rem;">
            ${state.lexiconIssuesOnly && issueCount === 0 
              ? 'All words in your curriculum and notes are formatted cleanly.' 
              : 'Try clearing the search box or selecting "All Studios".'}
          </div>
        </td>
      </tr>
    `;
  }

  return filtered.map(e => {
    const isEditing = state.lexiconEditingKey === e.key;
    const hasHindiIssue = e.anomalies.some(a => a.field === 'hindi');
    const hasRomanIssue = e.anomalies.some(a => a.field === 'roman');
    const hasEnglishIssue = e.anomalies.some(a => a.field === 'english');
    const hasGenderIssue = e.anomalies.some(a => a.field === 'gender');
    const hasNeIssue = e.anomalies.some(a => a.field === 'takesne');

    return `
      <tr data-key="${e.key}" class="${isEditing ? 'edit-row' : ''}">
        <td>
          <div class="lexicon-hindi-cell">${e.item.hindi}</div>
          ${e.anomalies.filter(a => a.type === 'typography' || a.label.includes('Hindi')).map(a => `
            <div class="lexicon-issue-tag" title="${escapeHtml(a.detail || a.label)}">${a.label}</div>
          `).join('')}
        </td>
        <td>
          <div class="lexicon-roman-cell">${e.item.roman || '<span style="color:#ef4444; font-weight:400; font-style:italic;">Missing</span>'}</div>
          ${e.anomalies.filter(a => a.label.includes('Roman')).map(a => `
            <div class="lexicon-issue-tag" title="${escapeHtml(a.detail || a.label)}">${a.label}</div>
          `).join('')}
        </td>
        <td>
          <div style="font-weight:600; color:var(--text);">${e.item.english || '<span style="color:#ef4444; font-weight:400; font-style:italic;">Missing</span>'}</div>
          ${e.anomalies.filter(a => a.label.includes('English')).map(a => `
            <div class="lexicon-issue-tag" title="${escapeHtml(a.detail || a.label)}">${a.label}</div>
          `).join('')}
        </td>
        <td>
          <div style="font-size:0.82rem; font-weight:600; color:var(--text-muted);">
            ${e.module === 'verbs' 
              ? `${e.item.transitivity || 'Transitive'} • ${e.item.takesNe ? 'Takes ने' : 'No ने'}`
              : (e.module === 'vocab'
                ? `${e.item.pos} ${e.item.gender ? `• ${e.item.gender === 'Masculine' ? '♂ M' : '♀ F'}` : ''}`
                : `${formatSafeMatraText(e.item.matraName)}`)}
          </div>
          ${e.anomalies.filter(a => a.type === 'gender' || a.type === 'grammar').map(a => `
            <div class="lexicon-issue-tag" title="${escapeHtml(a.detail || a.label)}">${a.label}</div>
          `).join('')}
        </td>
        <td>
          ${e.isCustom ? '<span class="lexicon-badge-custom">✏️ Custom</span>' : '<span class="lexicon-badge-core">🔒 Core</span>'}
        </td>
        <td style="text-align:right;">
          <div class="lexicon-row-actions" style="justify-content:flex-end;">
            <button type="button" class="lexicon-btn-icon lexicon-speak-row-btn" data-speak="${escapeHtml(e.item.hindi)}" title="Pronounce" aria-label="Pronounce ${e.item.hindi}">🔊</button>
            <button type="button" class="lexicon-btn-icon lexicon-edit-row-btn" data-key="${e.key}" title="${e.anomalies.length > 0 ? 'Fix issues in this word' : 'Edit word'}">
              ${e.anomalies.length > 0 ? '🛠️ Fix' : '✏️ Edit'}
            </button>
            ${e.isCustom ? `
              <button type="button" class="lexicon-btn-icon delete-btn lexicon-delete-row-btn" data-mod="${e.module}" data-id="${e.item.id || ''}" data-hindi="${escapeHtml(e.item.hindi)}" title="Delete word" aria-label="Delete ${e.item.hindi}">🗑️</button>
            ` : ''}
          </div>
        </td>
      </tr>
      ${isEditing ? `
        <tr class="edit-expanded-row">
          <td colspan="6" style="padding:0; background:#fffdf8;">
            <div class="lexicon-edit-box">
              <div style="font-weight:700; font-size:1.05rem; margin-bottom:0.75rem; color:var(--secondary); display:flex; justify-content:space-between; align-items:center;">
                <span>✏️ Editing "${e.item.hindi}" (${e.moduleLabel})</span>
                <span style="font-size:0.8rem; font-weight:400; color:var(--text-muted);">${e.isCustom ? 'Custom Entry' : 'Core Entry (will save as custom override)'}</span>
              </div>
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:0.75rem; margin-bottom:1rem;">
                <div>
                  <label style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); display:block; margin-bottom:3px;">Hindi (Devanagari) ${hasHindiIssue ? '⚠️' : ''}</label>
                  <input type="text" class="search-input lex-edit-hindi ${hasHindiIssue ? 'field-error' : ''}" value="${escapeHtml(e.item.hindi)}" style="font-family:var(--font-hindi); font-size:1.15rem; font-weight:700; width:100%;">
                </div>
                <div>
                  <label style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); display:block; margin-bottom:3px;">Romanization / Pronunciation ${hasRomanIssue ? '⚠️' : ''}</label>
                  <div class="input-with-action">
                    <input type="text" class="search-input lex-edit-roman ${hasRomanIssue ? 'field-error' : ''}" value="${escapeHtml(e.item.roman || '')}" placeholder="Latin letters only" style="font-size:0.95rem; flex:1;">
                    <button type="button" class="lex-auto-roman-btn" title="Auto-transliterate from Devanagari Hindi">🪄 Auto</button>
                  </div>
                </div>
                <div>
                  <label style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); display:block; margin-bottom:3px;">English Meaning ${hasEnglishIssue ? '⚠️' : ''}</label>
                  <input type="text" class="search-input lex-edit-english ${hasEnglishIssue ? 'field-error' : ''}" value="${escapeHtml(e.item.english || '')}" style="font-size:0.95rem; width:100%;">
                </div>
                ${e.module === 'vocab' ? `
                  <div>
                    <label style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); display:block; margin-bottom:3px;">Gender ${hasGenderIssue ? '⚠️' : ''}</label>
                    <select class="search-input lex-edit-gender ${hasGenderIssue ? 'field-error' : ''}" style="width:100%; padding:0.55rem;">
                      <option value="Masculine" ${e.item.gender === 'Masculine' ? 'selected' : ''}>Masculine (पुल्लिंग ♂)</option>
                      <option value="Feminine" ${e.item.gender === 'Feminine' ? 'selected' : ''}>Feminine (स्त्रीलिंग ♀)</option>
                      <option value="" ${!e.item.gender ? 'selected' : ''}>Invariable / N/A</option>
                    </select>
                  </div>
                  <div>
                    <label style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); display:block; margin-bottom:3px;">Part of Speech</label>
                    <select class="search-input lex-edit-pos" style="width:100%; padding:0.55rem;">
                      <option value="Noun" ${e.item.pos === 'Noun' ? 'selected' : ''}>Noun</option>
                      <option value="Adjective" ${e.item.pos === 'Adjective' ? 'selected' : ''}>Adjective</option>
                      <option value="Postposition" ${e.item.pos === 'Postposition' ? 'selected' : ''}>Postposition</option>
                      <option value="Pronoun" ${e.item.pos === 'Pronoun' ? 'selected' : ''}>Pronoun</option>
                      <option value="Adverb" ${e.item.pos === 'Adverb' ? 'selected' : ''}>Adverb</option>
                    </select>
                  </div>
                ` : ''}
                ${e.module === 'verbs' ? `
                  <div>
                    <label style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); display:block; margin-bottom:3px;">Past Tense 'ने' Rule ${hasNeIssue ? '⚠️' : ''}</label>
                    <select class="search-input lex-edit-takesne ${hasNeIssue ? 'field-error' : ''}" style="width:100%; padding:0.55rem;">
                      <option value="true" ${e.item.takesNe ? 'selected' : ''}>Transitive (Takes 'ने' in past)</option>
                      <option value="false" ${!e.item.takesNe ? 'selected' : ''}>Intransitive (NO 'ने' in past)</option>
                    </select>
                  </div>
                  <div>
                    <label style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); display:block; margin-bottom:3px;">Verb Stem</label>
                    <input type="text" class="search-input lex-edit-stem" value="${escapeHtml(e.item.stem || '')}" style="font-family:var(--font-hindi); font-size:1rem; width:100%;">
                  </div>
                ` : ''}
                ${e.module === 'matras' ? `
                  <div>
                    <label style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); display:block; margin-bottom:3px;">Construction Breakdown</label>
                    <input type="text" class="search-input lex-edit-breakdown" value="${escapeHtml(e.item.breakdown || '')}" style="font-family:var(--font-hindi); font-size:1rem; width:100%;">
                  </div>
                  <div>
                    <label style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); display:block; margin-bottom:3px;">Reading Rule</label>
                    <input type="text" class="search-input lex-edit-rule" value="${escapeHtml(e.item.rule || '')}" style="font-size:0.9rem; width:100%;">
                  </div>
                ` : ''}
              </div>

              <div style="display:flex; justify-content:flex-end; gap:0.65rem;">
                <button type="button" class="action-btn nav-card lex-cancel-edit-btn" style="font-size:0.85rem; padding:0.45rem 1rem;">Cancel</button>
                <button type="button" class="action-btn good lex-save-edit-btn" data-key="${e.key}" style="font-size:0.85rem; padding:0.45rem 1.25rem;">💾 Save Changes</button>
              </div>
            </div>
          </td>
        </tr>
      ` : ''}
    `;
  }).join('');
}

function renderLexiconManager() {
  const container = document.getElementById('modal-lexicon-manager-content');
  if (!container) return;

  const coreVerbsSet = new Set((window.VERB_CURRICULUM || []).map(v => (v.hindi || '').trim()));
  const coreVocabSet = new Set((window.VOCAB_CURRICULUM || []).map(w => (w.hindi || '').trim()));
  const coreMatraSet = new Set((window.MATRA_CURRICULUM || []).map(w => (w.hindi || '').trim()));

  const allEntries = [];

  // 1. Verbs
  state.verbs.forEach(v => {
    const isCustom = !coreVerbsSet.has((v.hindi || '').trim());
    const anomalies = auditWordAnomalies(v, 'verbs');
    allEntries.push({
      item: v,
      module: 'verbs',
      key: `verbs:${v.id || v.hindi}`,
      isCustom,
      moduleLabel: '⚡ Verb',
      anomalies
    });
  });

  // 2. Vocab
  state.vocab.forEach(w => {
    const isCustom = !coreVocabSet.has((w.hindi || '').trim());
    const anomalies = auditWordAnomalies(w, 'vocab');
    allEntries.push({
      item: w,
      module: 'vocab',
      key: `vocab:${w.id || w.hindi}`,
      isCustom,
      moduleLabel: '📖 Vocab',
      anomalies
    });
  });

  // 3. Matras
  state.matraWords.forEach(w => {
    const isCustom = !coreMatraSet.has((w.hindi || '').trim());
    const anomalies = auditWordAnomalies(w, 'matras');
    allEntries.push({
      item: w,
      module: 'matras',
      key: `matras:${w.id || w.hindi}`,
      isCustom,
      moduleLabel: '🔤 Matra',
      anomalies
    });
  });

  // KPI Calculations
  const totalCount = allEntries.length;
  const customCount = allEntries.filter(e => e.isCustom).length;
  const coreCount = totalCount - customCount;
  const issueCount = allEntries.filter(e => e.anomalies.length > 0).length;

  // Filter entries
  const filtered = allEntries.filter(e => {
    if (state.lexiconModuleFilter !== 'all' && e.module !== state.lexiconModuleFilter) return false;
    if (state.lexiconSourceFilter === 'custom' && !e.isCustom) return false;
    if (state.lexiconSourceFilter === 'core' && e.isCustom) return false;
    if (state.lexiconIssuesOnly && e.anomalies.length === 0) return false;
    return matchesLexiconSearch(e, state.lexiconSearch);
  });

  // Active filter checks for KPI cards
  const isTotalActive = !state.lexiconIssuesOnly && state.lexiconSourceFilter === 'all' && state.lexiconModuleFilter === 'all';
  const isCoreActive = !state.lexiconIssuesOnly && state.lexiconSourceFilter === 'core';
  const isCustomActive = !state.lexiconIssuesOnly && state.lexiconSourceFilter === 'custom';
  const isIssuesActive = state.lexiconIssuesOnly;

  container.innerHTML = `
    <!-- Top Search Hero Bar (Always Visible First) -->
    <div class="lexicon-search-hero">
      <div class="lexicon-search-wrap">
        <span class="search-icon" style="position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); pointer-events:none; font-size:1rem; opacity:0.6;">🔍</span>
        <input type="text" id="lexicon-search-input" class="lexicon-search-input-hero" placeholder="Search any Hindi word, English meaning, transliteration, stem, or anomaly tag (Press / to search)..." value="${escapeHtml(state.lexiconSearch)}" autocomplete="off" spellcheck="false" aria-label="Search lexicon words">
        <button type="button" id="lexicon-search-clear-btn" class="lexicon-clear-btn" style="${state.lexiconSearch ? '' : 'display:none;'}" title="Clear search (Esc)" aria-label="Clear search">✕</button>
      </div>
      <div class="lexicon-hero-actions">
        <button type="button" id="lexicon-dedupe-btn" class="action-btn nav-card" style="font-size:0.82rem; padding:0.6rem 0.85rem;" title="Remove duplicate custom entries">
          🧹 Clean Duplicates
        </button>
        <button type="button" id="lexicon-export-clean-btn" class="action-btn good" style="font-size:0.82rem; padding:0.6rem 0.85rem;" title="Download clean JSON backup">
          📥 Export Clean JSON
        </button>
      </div>
    </div>

    <!-- Top Summary KPI Cards (Clickable Quick-Filters) -->
    <div class="lexicon-kpi-bar" role="toolbar" aria-label="Deck Quick Filters">
      <div class="lexicon-kpi-card clickable-kpi ${isTotalActive ? 'active-kpi' : ''}" 
           id="lexicon-kpi-total-card" role="button" tabindex="0" 
           aria-pressed="${isTotalActive}" aria-label="Total words in deck: ${totalCount}. Click to view all words.">
        <span class="lexicon-kpi-val">${totalCount}</span>
        <span class="lexicon-kpi-lbl">Total Words in Deck</span>
        <span class="kpi-action-hint">${isTotalActive ? '✓ Showing all' : 'Click to view all'}</span>
      </div>
      <div class="lexicon-kpi-card clickable-kpi ${isCoreActive ? 'active-kpi' : ''}" 
           id="lexicon-kpi-core-card" role="button" tabindex="0" 
           aria-pressed="${isCoreActive}" aria-label="Core curriculum: ${coreCount} words. Click to filter core words.">
        <span class="lexicon-kpi-val">${coreCount}</span>
        <span class="lexicon-kpi-lbl">Core Curriculum (🔒)</span>
        <span class="kpi-action-hint">${isCoreActive ? '✓ Filtered core' : 'Click to filter core'}</span>
      </div>
      <div class="lexicon-kpi-card clickable-kpi ${isCustomActive ? 'active-kpi' : ''}" 
           id="lexicon-kpi-custom-card" role="button" tabindex="0" style="border-color:#fde68a; background:#fffbeb;" 
           aria-pressed="${isCustomActive}" aria-label="Custom and imported: ${customCount} words. Click to filter custom words.">
        <span class="lexicon-kpi-val" style="color:#b45309;">${customCount}</span>
        <span class="lexicon-kpi-lbl">Custom / Imported (✏️)</span>
        <span class="kpi-action-hint" style="color:#b45309;">${isCustomActive ? '✓ Filtered custom' : 'Click to filter custom'}</span>
      </div>
      <div class="lexicon-kpi-card clickable-kpi ${issueCount > 0 ? 'warning-kpi' : ''} ${isIssuesActive ? 'active-kpi' : ''}" 
           id="lexicon-kpi-issues-card" role="button" tabindex="0" 
           aria-pressed="${isIssuesActive}" aria-label="Detected issues: ${issueCount}. Click to filter to detected issues.">
        <span class="lexicon-kpi-val ${issueCount > 0 ? 'warn' : ''}">${issueCount}</span>
        <span class="lexicon-kpi-lbl">${issueCount > 0 ? '⚠️ Detected Issues' : '✓ Clean Health'}</span>
        <span class="kpi-action-hint warn-hint">
          ${issueCount > 0 ? (isIssuesActive ? '✓ Filtered issues' : 'Click to review & fix ➔') : 'All clean'}
        </span>
      </div>
    </div>

    ${state.lexiconIssuesOnly ? `
      <!-- Active Issues Triage Notice -->
      <div class="lexicon-issues-view-banner">
        <div class="lexicon-issues-title-row">
          <span style="font-size:1.3rem;">⚠️</span>
          <div>
            <div style="display:flex; align-items:center; gap:0.4rem;">
              <span style="font-weight:700; color:#92400e; font-size:0.95rem;">Filtered to Detected Issues</span>
              <span class="lexicon-issues-count-pill">${filtered.length} to fix</span>
            </div>
            <div style="font-size:0.8rem; color:#78350f; margin-top:2px;">
              Showing entries with formatting or script anomalies. Click <strong>🛠️ Fix</strong> on any row to edit and resolve fields, or <strong>🗑️</strong> to remove corrupted notes.
            </div>
          </div>
        </div>
        <button type="button" class="action-btn nav-card" id="lexicon-exit-issues-view-btn" style="font-size:0.8rem; padding:0.4rem 0.85rem;">
          ← Show All Words (${totalCount})
        </button>
      </div>
    ` : ''}

    <!-- Filter Toolbar -->
    <div class="lexicon-toolbar">
      <div class="lexicon-filter-group">
        <span style="font-size:0.8rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-right:0.25rem;">Studio:</span>
        <button type="button" class="lexicon-filter-chip ${state.lexiconModuleFilter === 'all' ? 'active' : ''}" data-mod-filter="all">All Studios (${totalCount})</button>
        <button type="button" class="lexicon-filter-chip ${state.lexiconModuleFilter === 'verbs' ? 'active' : ''}" data-mod-filter="verbs">⚡ Verbs (${state.verbs.length})</button>
        <button type="button" class="lexicon-filter-chip ${state.lexiconModuleFilter === 'vocab' ? 'active' : ''}" data-mod-filter="vocab">📖 Vocab (${state.vocab.length})</button>
        <button type="button" class="lexicon-filter-chip ${state.lexiconModuleFilter === 'matras' ? 'active' : ''}" data-mod-filter="matras">🔤 Matras (${state.matraWords.length})</button>
      </div>

      <div class="lexicon-filter-group">
        <span style="font-size:0.8rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-right:0.25rem;">Source:</span>
        <button type="button" class="lexicon-filter-chip ${state.lexiconSourceFilter === 'all' ? 'active' : ''}" data-src-filter="all">All Entries</button>
        <button type="button" class="lexicon-filter-chip ${state.lexiconSourceFilter === 'custom' ? 'active' : ''}" data-src-filter="custom">✏️ Custom Only (${customCount})</button>
        <button type="button" class="lexicon-filter-chip ${state.lexiconSourceFilter === 'core' ? 'active' : ''}" data-src-filter="core">🔒 Core Only (${coreCount})</button>
        <button type="button" class="lexicon-filter-chip anomaly-chip ${state.lexiconIssuesOnly ? 'active' : ''}" data-toggle-issues="true">
          ⚠️ Issues Only (${issueCount})
        </button>
      </div>
    </div>

    <!-- Word Table Header & Status -->
    <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem; display:flex; justify-content:space-between; align-items:center;">
      <span id="lexicon-count-status">Showing <strong>${filtered.length}</strong> of ${totalCount} words${state.lexiconSearch ? ` for "<em>${escapeHtml(state.lexiconSearch)}</em>"` : ''}</span>
      ${state.lexiconSearch || state.lexiconIssuesOnly || state.lexiconSourceFilter !== 'all' || state.lexiconModuleFilter !== 'all' ? `
        <button type="button" id="lexicon-reset-filters-btn" style="background:none; border:none; color:var(--primary); font-size:0.82rem; cursor:pointer; text-decoration:underline;">Reset all filters</button>
      ` : ''}
    </div>

    <div class="lexicon-table-wrap">
      <table class="lexicon-table">
        <thead>
          <tr>
            <th style="width:18%;">Hindi</th>
            <th style="width:18%;">Romanization</th>
            <th style="width:22%;">English Gloss</th>
            <th style="width:18%;">Attributes & Category</th>
            <th style="width:10%;">Source</th>
            <th style="width:14%; text-align:right;">Actions</th>
          </tr>
        </thead>
        <tbody id="lexicon-table-body">
          ${renderLexiconRowsHtml(filtered, issueCount)}
        </tbody>
      </table>
    </div>
  `;

  wireLexiconManagerListeners(container, allEntries, issueCount, totalCount);
}

function wireLexiconManagerListeners(container, allEntries, issueCount, totalCount) {
  // Clickable KPI Quick-Filter Cards
  const kpiTotal = container.querySelector('#lexicon-kpi-total-card');
  const kpiCore = container.querySelector('#lexicon-kpi-core-card');
  const kpiCustom = container.querySelector('#lexicon-kpi-custom-card');
  const kpiIssues = container.querySelector('#lexicon-kpi-issues-card');

  const handleTotalClick = () => {
    state.lexiconIssuesOnly = false;
    state.lexiconSourceFilter = 'all';
    state.lexiconModuleFilter = 'all';
    renderLexiconManager();
    announce("Showing all words");
  };

  const handleCoreClick = () => {
    state.lexiconIssuesOnly = false;
    state.lexiconSourceFilter = 'core';
    renderLexiconManager();
    announce("Filtered to core curriculum words");
  };

  const handleCustomClick = () => {
    state.lexiconIssuesOnly = false;
    state.lexiconSourceFilter = 'custom';
    renderLexiconManager();
    announce("Filtered to custom and imported words");
  };

  const handleIssuesClick = () => {
    state.lexiconIssuesOnly = !state.lexiconIssuesOnly;
    if (state.lexiconIssuesOnly) {
      announce("Filtered to words with detected issues");
    } else {
      announce("Exited issues filter. Showing all words");
    }
    renderLexiconManager();
  };

  if (kpiTotal) {
    kpiTotal.addEventListener('click', handleTotalClick);
    kpiTotal.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleTotalClick(); }
    });
  }

  if (kpiCore) {
    kpiCore.addEventListener('click', handleCoreClick);
    kpiCore.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCoreClick(); }
    });
  }

  if (kpiCustom) {
    kpiCustom.addEventListener('click', handleCustomClick);
    kpiCustom.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCustomClick(); }
    });
  }

  if (kpiIssues) {
    kpiIssues.addEventListener('click', handleIssuesClick);
    kpiIssues.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleIssuesClick(); }
    });
  }

  // Banner exit issues button
  container.querySelector('#lexicon-exit-issues-view-btn')?.addEventListener('click', () => {
    state.lexiconIssuesOnly = false;
    renderLexiconManager();
    announce("Showing all words");
  });

  // Studio filter chips
  container.querySelectorAll('.lexicon-filter-chip[data-mod-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      state.lexiconModuleFilter = chip.dataset.modFilter;
      renderLexiconManager();
    });
  });

  // Source filter chips
  container.querySelectorAll('.lexicon-filter-chip[data-src-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      state.lexiconSourceFilter = chip.dataset.srcFilter;
      renderLexiconManager();
    });
  });

  // Anomaly toggle chip
  container.querySelector('.lexicon-filter-chip[data-toggle-issues]')?.addEventListener('click', () => {
    state.lexiconIssuesOnly = !state.lexiconIssuesOnly;
    renderLexiconManager();
  });

  // Reset filters button
  container.querySelector('#lexicon-reset-filters-btn')?.addEventListener('click', () => {
    state.lexiconModuleFilter = 'all';
    state.lexiconSourceFilter = 'all';
    state.lexiconIssuesOnly = false;
    state.lexiconSearch = '';
    renderLexiconManager();
  });

  // Action listeners for rows
  function wireTableActionListeners() {
    // Audio pronunciation buttons
    container.querySelectorAll('.lexicon-speak-row-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.speak;
        if (text) speakHindi(text, btn);
      });
    });

    // Auto-transliterate buttons
    container.querySelectorAll('.lex-auto-roman-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const editBox = btn.closest('.lexicon-edit-box');
        const hVal = (editBox?.querySelector('.lex-edit-hindi')?.value || '').trim();
        const rInput = editBox?.querySelector('.lex-edit-roman');
        if (hVal && rInput) {
          const translit = devanagariToLatin(hVal);
          rInput.value = translit;
          rInput.focus();
          showToast(`Auto-transliterated to "${translit}".`, 'info');
        }
      });
    });

    // Edit row button
    container.querySelectorAll('.lexicon-edit-row-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.lexiconEditingKey = btn.dataset.key;
        renderLexiconManager();
      });
    });

    // Cancel edit button
    container.querySelector('.lex-cancel-edit-btn')?.addEventListener('click', () => {
      state.lexiconEditingKey = null;
      renderLexiconManager();
    });

    // Save edit button
    container.querySelector('.lex-save-edit-btn')?.addEventListener('click', (e) => {
      const key = e.currentTarget.dataset.key;
      const entry = allEntries.find(item => item.key === key);
      if (!entry) return;

      const editBox = e.currentTarget.closest('.lexicon-edit-box');
      if (!editBox) return;

      const hindiInput = editBox.querySelector('.lex-edit-hindi');
      const romanInput = editBox.querySelector('.lex-edit-roman');
      const englishInput = editBox.querySelector('.lex-edit-english');

      const hindi = (hindiInput?.value || '').trim();
      const roman = (romanInput?.value || '').trim();
      const english = (englishInput?.value || '').trim();

      if (!hindi) {
        showToast("Devanagari text cannot be empty.", "error");
        hindiInput?.focus();
        return;
      }

      // Clean up old custom entry if Hindi was renamed/corrected
      const oldHindi = entry.item.hindi;
      if (oldHindi && oldHindi !== hindi && entry.isCustom) {
        if (entry.module === 'verbs') state.deleteCustomVerb(oldHindi);
        else if (entry.module === 'vocab') state.deleteCustomVocab(oldHindi);
        else if (entry.module === 'matras') state.deleteCustomMatra(oldHindi);
      }

      let updated;
      if (entry.module === 'verbs') {
        const takesNe = editBox.querySelector('.lex-edit-takesne')?.value === 'true';
        const stem = (editBox.querySelector('.lex-edit-stem')?.value || '').trim() || hindi.replace(/ना$/, '');
        updated = {
          ...entry.item,
          hindi,
          roman,
          english,
          takesNe,
          transitivity: takesNe ? 'Transitive' : 'Intransitive',
          stem
        };
        state.saveCustomVerb(updated);
        renderVerbGrid();
        if (state.flashcardsList) state.flashcardsList = [...state.verbs];
      } else if (entry.module === 'vocab') {
        const gender = editBox.querySelector('.lex-edit-gender')?.value || '';
        const pos = editBox.querySelector('.lex-edit-pos')?.value || 'Noun';
        updated = {
          ...entry.item,
          hindi,
          roman,
          english,
          gender,
          pos
        };
        state.saveCustomWord(updated);
        renderVocabGrid();
        if (state.vocabFlashcardsList) state.vocabFlashcardsList = [...state.vocab];
      } else if (entry.module === 'matras') {
        const breakdown = (editBox.querySelector('.lex-edit-breakdown')?.value || '').trim();
        const rule = (editBox.querySelector('.lex-edit-rule')?.value || '').trim();
        updated = {
          ...entry.item,
          hindi,
          roman,
          english,
          breakdown,
          rule
        };
        state.saveCustomMatra(updated);
        renderMatraGrid();
        if (state.matraFlashcardsList) state.matraFlashcardsList = [...state.matraWords];
      }

      state.lexiconEditingKey = null;

      // Check if issues were resolved
      const remaining = auditWordAnomalies(updated, entry.module);
      if (remaining.length === 0) {
        showToast(`✓ Resolved issues for "${hindi}"!`, "success");
        announce(`Resolved issues for ${hindi}`);
      } else {
        showToast(`Updated "${hindi}". ${remaining.length} issue(s) remaining.`, "warning");
        announce(`Updated ${hindi}`);
      }

      renderLexiconManager();
    });

    // Delete row button
    container.querySelectorAll('.lexicon-delete-row-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mod = btn.dataset.mod;
        const hindi = btn.dataset.hindi;
        if (confirm(`Are you sure you want to delete "${hindi}" from your database?`)) {
          if (mod === 'verbs') {
            state.deleteCustomVerb(hindi);
            renderVerbGrid();
          } else if (mod === 'vocab') {
            state.deleteCustomVocab(hindi);
            renderVocabGrid();
          } else if (mod === 'matras') {
            state.deleteCustomMatra(hindi);
            renderMatraGrid();
          }
          showToast(`Deleted "${hindi}".`, 'info');
          announce(`Deleted ${hindi}`);
          renderLexiconManager();
        }
      });
    });
  }

  // Wire initial rows
  wireTableActionListeners();

  // Search input with live non-destructive DOM update (preserves scroll position & focus)
  const searchInput = container.querySelector('#lexicon-search-input');
  const searchClearBtn = container.querySelector('#lexicon-search-clear-btn');
  const tbody = container.querySelector('#lexicon-table-body') || container.querySelector('.lexicon-table tbody');
  const countStatus = container.querySelector('#lexicon-count-status');

  function updateFilteredView() {
    const q = (searchInput?.value || '').trim();
    state.lexiconSearch = q;
    if (searchClearBtn) {
      searchClearBtn.style.display = q ? 'inline-flex' : 'none';
    }

    const currentFiltered = allEntries.filter(e => {
      if (state.lexiconModuleFilter !== 'all' && e.module !== state.lexiconModuleFilter) return false;
      if (state.lexiconSourceFilter === 'custom' && !e.isCustom) return false;
      if (state.lexiconSourceFilter === 'core' && e.isCustom) return false;
      if (state.lexiconIssuesOnly && e.anomalies.length === 0) return false;
      return matchesLexiconSearch(e, state.lexiconSearch);
    });

    if (tbody) {
      tbody.innerHTML = renderLexiconRowsHtml(currentFiltered, issueCount);
      wireTableActionListeners();
    }

    if (countStatus) {
      countStatus.innerHTML = `Showing <strong>${currentFiltered.length}</strong> of ${totalCount} words${state.lexiconSearch ? ` for "<em>${escapeHtml(state.lexiconSearch)}</em>"` : ''}`;
    }
  }

  searchInput?.addEventListener('input', () => {
    updateFilteredView();
  });

  searchClearBtn?.addEventListener('click', () => {
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    updateFilteredView();
  });

  searchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (searchInput.value) {
        e.stopPropagation();
        searchInput.value = '';
        updateFilteredView();
      }
    }
  });

  // Quick '/' shortcut to focus search when inside the Lexicon Manager modal
  const handleModalKeyDown = (e) => {
    if (e.key === '/' && document.activeElement !== searchInput && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      searchInput?.focus();
      searchInput?.select();
    }
  };
  container.addEventListener('keydown', handleModalKeyDown);

  // Deduplicate button
  container.querySelector('#lexicon-dedupe-btn')?.addEventListener('click', () => {
    const removed = state.deduplicateAllCustomWords();
    if (removed > 0) {
      showToast(`Cleaned up ${removed} duplicate entries from your database.`, 'success');
      announce(`Cleaned up ${removed} duplicate entries`);
    } else {
      showToast("No duplicate entries found in your database.", "info");
    }
    renderVerbGrid();
    renderVocabGrid();
    renderMatraGrid();
    renderLexiconManager();
  });

  // Export clean JSON backup
  container.querySelector('#lexicon-export-clean-btn')?.addEventListener('click', () => {
    try {
      const vStored = safeStorage.getItem('hindi_custom_verbs');
      const wStored = safeStorage.getItem('hindi_custom_vocab');
      const mStored = safeStorage.getItem('hindi_custom_matras');
      const data = {
        exportedAt: new Date().toISOString(),
        customVerbs: vStored ? JSON.parse(vStored) : [],
        customVocab: wStored ? JSON.parse(wStored) : [],
        customMatras: mStored ? JSON.parse(mStored) : []
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `hindi-lexicon-clean-backup-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("Downloaded clean lexicon JSON backup.", "success");
    } catch (e) {
      showToast("Export failed: " + e.message, "error");
    }
  });
}


// ==========================================================================
// MOBILE SUPPORT: swipe gestures on flashcards + iOS speech unlock
// ==========================================================================
(function initMobileSupport() {
  if (typeof window === 'undefined' || typeof document === 'undefined' || !document.addEventListener) return;

  // iOS Safari only allows speechSynthesis after it has been started inside a
  // user gesture. speakHindi() speaks from a short setTimeout, so the very
  // first utterance can be silently dropped. Speaking an empty utterance
  // synchronously on the first touch "unlocks" the engine for the session.
  let speechUnlocked = false;
  function unlockSpeech() {
    if (speechUnlocked) return;
    speechUnlocked = true;
    try {
      if ('speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined') {
        const u = new SpeechSynthesisUtterance('');
        u.volume = 0;
        window.speechSynthesis.speak(u);
      }
    } catch (e) { /* ignore */ }
    document.removeEventListener('touchend', unlockSpeech, true);
    document.removeEventListener('click', unlockSpeech, true);
  }
  document.addEventListener('touchend', unlockSpeech, true);
  document.addEventListener('click', unlockSpeech, true);

  // Horizontal swipe on a flashcard = previous / next card.
  // Reuses each deck's existing ArrowLeft / ArrowRight keyboard handling.
  function attachSwipe(el) {
    if (!el || el.dataset.swipeBound) return;
    el.dataset.swipeBound = '1';
    let startX = 0, startY = 0, startT = 0, tracking = false;

    el.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) { tracking = false; return; }
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startT = Date.now();
      tracking = true;
    }, { passive: true });

    el.addEventListener('touchend', (e) => {
      if (!tracking) return;
      tracking = false;
      const t = e.changedTouches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      const dt = Date.now() - startT;
      // Mostly-horizontal, deliberate swipe
      if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5 || dt > 700) return;
      // Don't hijack swipes inside horizontally scrollable children
      if (e.target.closest && e.target.closest('.matra-contrast-subbar, .filter-tags, .matra-filter-bar, table')) return;
      e.preventDefault();
      const key = dx < 0 ? 'ArrowRight' : 'ArrowLeft';
      el.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }));
      el.classList.remove('swipe-left', 'swipe-right');
      void el.offsetWidth;
      el.classList.add(dx < 0 ? 'swipe-left' : 'swipe-right');
      setTimeout(() => el.classList.remove('swipe-left', 'swipe-right'), 260);
    });
  }

  function addSwipeHint(container) {
    if (!container) return;
    const actions = container.parentElement && container.parentElement.querySelector('.flashcard-actions');
    if (!actions || actions.nextElementSibling?.classList?.contains('swipe-hint')) return;
    const hint = document.createElement('div');
    hint.className = 'swipe-hint';
    hint.setAttribute('aria-hidden', 'true');
    hint.textContent = '👆 Tap card to flip · Swipe ← → to change cards';
    if (container.id === 'matra-flashcard-container') {
      hint.textContent = '👈 Swipe left or right to change cards 👉';
    }
    actions.insertAdjacentElement('afterend', hint);
  }

  function setup() {
    ['flashcard-container', 'vocab-flashcard-container', 'matra-flashcard-container'].forEach(id => {
      const el = document.getElementById(id);
      attachSwipe(el);
      addSwipeHint(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
