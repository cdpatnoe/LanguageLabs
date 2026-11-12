# Language Labs — Workspace Rules

## 1. Multi-Computer Git Sync Workflow
This repository (`https://github.com/cdpatnoe/LanguageLabs.git`) is worked on across multiple computers.
- **Start of session:** Before making edits, check `git status` and remind the user to sync with `git fetch --all --prune && git pull --rebase` if needed.
- **Branch awareness:** Confirm which language branch is active (`main` / `hungarian` vs `hindi` / `hindi-mobile-responsive`) before editing.
- **End of session:** Whenever changes are committed, remind the user to `git push` (or offer to push) before switching computers.
- **Generated exports:** Do not commit standalone `*-mobile.html` or `*.zip` bundles to Git; rebuild them on demand when exporting.

## 2. Pluggable Language Pack Architecture
- Keep the core engine (`app.js`, `styles.css`, `index.html`) **language-agnostic** and 100% **offline-capable** (no external CDN/framework dependencies).
- Put language-specific rules (`id`, `storagePrefix`, `speech`, `isTargetScript`, `splitSyllables`, `toPhoneticGuide`, `detectNounTrait`, `ui`) in `lang-config.js`.
- Use the neutral curriculum schema in `verbs-data.js`, `vocab-data.js`, and `sounds-data.js`:
  - `target`, `phonetic`, `english`, `hasGrammarTrait`, `nounTrait`, `soundId`, `soundName`, `soundVowel`, `soundSymbol`, `soundType`.
