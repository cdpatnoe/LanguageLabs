# Hungarian Language Lab (Magyar Nyelvi Labor) 🇭🇺

An interactive, 100% offline-capable language learning studio for **Hungarian (Magyar)** built on the **Pluggable Language Pack Architecture** (`lang-config.js`).

## ✨ Features & Three Learning Studios

### 1. ⚡ Verb Studio (*Igék*)
- **20 Essential Hungarian Verbs** organized into 7 semantic clusters (*The Big 4 Irregulars*, *-ik Verbs & Dining*, *Motion & Movement*, *Daily Essentials*, *Study & Communication*, *Perception & Mind*, and *Objects & Actions*).
- **Definite (*Tárgyas*) vs. Indefinite (*Alanyi*) Conjugation**: Interactive conjugation matrices for Present Indefinite, Present Definite, Past (*-t/-tt*), and Imperative/Subjunctive (*-j*).
- **SRS Flashcards, Speed Match & Targeted Quizzes**: Drill conjugation, Definite vs. Indefinite object rules, and *Te* / *Ön* imperatives.
- **My Notes & Smart Parser**: Paste or upload `.txt`, `.md`, `.csv`, or `.rtf` study notes with automatic Hungarian phonetic guide generation.

### 2. 📖 Vocabulary Studio (*Szókincs*)
- **38 Core Hungarian Words** (Nouns, Adjectives, Postpositions, Adverbs, Question Words & Pronouns) across 9 categories.
- **Vowel Harmony (*Magánhangzó-harmónia*)**: Every word is classified as **🎵 Back Vowel (*Mély*)** (`a, á, o, ó, u, ú`) or **🎶 Front Vowel (*Magas*)** (`e, é, i, í, ö, ő, ü, ű`) to guide suffix selection (`-ban/-ben`, `-nak/-nek`, `-ok/-ek/-ök`).
- **Plural (`-k`) & Accusative (`-t`) Inflection Tables**: Full Nominative and Accusative singular/plural forms for nouns and predicative plural forms for adjectives.
- **5 Built-in Targeted Quiz Packs**: *Days of the Week (A hét napjai)*, *Question Words (Kérdőszavak)*, *Time & Frequency*, *Directions & Postpositions*, and *Numbers 1–10 (Számok 1–10)*, plus custom quiz creation.

### 3. 🔤 Sounds & Pairs (*Kiejtés és Betűkapcsolatok*)
- **30 Graduated Sound & Digraph Words** covering all 14 Hungarian vowels (`a/á`, `e/é`, `i/í`, `o/ó`, `u/ú`, `ö/ő`, `ü/ű`) and consonant digraphs (`sz`, `s`, `zs`, `cs`, `c`, `gy`, `ny`, `ty`, `ly`).
- **20 Minimal Contrast Pairs** across 5 confusion-buster categories (*a vs á*, *e vs é*, *o/ó vs ö/ő & u/ú vs ü/ű*, *sz vs s vs zs*, and *cs vs c & gy/ny/ty*).
- **Native `hu-HU` Web Speech Synthesis**: Normal speed (`1.0x`), Slow (`0.7x`), and Digraph-aware Syllable-by-Syllable breakdown (`sz, zs, cs, gy, ly, ny, ty, dzs` kept intact).

---

## 🧩 Reusable Language Pack Architecture (Adding More Languages)

This project separates the **Core Learning Engine** (`app.js`, `styles.css`, `index.html`) from the **Language Pack Plugin** (`lang-config.js` + 3 curriculum files):

| File | Responsibility |
| :--- | :--- |
| `lang-config.js` | Defines `window.LANGUAGE_CONFIG`: language ID, `localStorage` namespace prefix, BCP-47 speech locale (`hu-HU`), preferred voice regex, digraph-aware `splitSyllables()`, `toPhoneticGuide()`, and `detectNounTrait()` |
| `verbs-data.js` | Defines `window.VERB_CURRICULUM`: core verbs, stems, conjugation tables, and transitivity/conjugation flags |
| `vocab-data.js` | Defines `window.VOCAB_CURRICULUM`: core nouns, adjectives, postpositions, harmony/gender traits, and inflection tables |
| `matra-data.js` | Defines `window.MATRA_CATEGORIES`, `window.MATRA_CURRICULUM`, and `window.HINDI_MINIMAL_PAIRS`: sound families and minimal pairs |

To create a lab for another language (e.g., Spanish, Turkish, Finnish, Japanese, or Korean):
1. Copy the repository into a new folder.
2. Update `lang-config.js` with the new language's `id`, `storagePrefix`, `speech.bcp47`, `splitSyllables`, and `toPhoneticGuide`.
3. Replace the curriculum arrays in `verbs-data.js`, `vocab-data.js`, and `matra-data.js`.
