// Flash card deck groups.
// Each deck lives in its own file under js/decks/<group>/<deck>.js and
// defines one global const (e.g. DEEPGRAM_FAQ_DECK). Each deck has a
// "label" (shown in the picker), a "randomShuffle" flag (true = shuffle
// card order, false = read in the order listed), and a "cards" array.
// Each card has "question" and "answer". Answer text uses "\n" for line
// breaks so bullet structure is preserved exactly as written.
//
// To add a new deck: copy a deck file, give its const a new name, add
// the file path to DECK_FILES in index.html, then add the const name to
// the relevant group array below (e.g. NEBIUS_DECKS).
// To add a new company/group: make a new js/decks/<group>/ dir, add a
// new group array below, and a new entry in window.DECK_GROUPS.

const LIVEKIT_DECKS = [
  LIVEKIT_RAPBOT_DECK,
  LIVEKIT_PRISM_DECK,
  LIVEKIT_NAVIENT_DECK,
  LIVEKIT_AI_WORKFLOW_DECK
];

const DEEPGRAM_RESEARCH_DECKS = [
  DEEPGRAM_RESEARCH_TRAINING_PIPELINE_DECK
];

const CODING_REVIEW_DECKS = [
  CODING_REVIEW_JS_TO_PYTHON_DECK
];

const DEEPGRAM_DECKS = [
  DEEPGRAM_FAQ_DECK,
  DEEPGRAM_STATISTICS_DECK,
  RAPBOT_MODEL_EVAL_DECK,
  NAVIENT_TWILIO_DECK,
  NBCU_HR_AGENT_DECK
];

const NEBIUS_DECKS = [
  NEBIUS_SME_1_DECK,
  NEBIUS_TECH_TUTORIALS_DECK,
  NEBIUS_CLI_TOOLS_DECK,
  NEBIUS_SME_MISC_DECK
];

const SERVICE_TITAN_DECKS = [
  SERVICE_TITAN_ALGORITHMS_DECK
];

// Each group pairs a tab label (shown in the picker) with its decks.
// Order here controls both tab order and, after flattening below,
// deck index order in window.DECKS.
window.DECK_GROUPS = [
  { label: "LiveKit", decks: LIVEKIT_DECKS },
  { label: "Deepgram Research", decks: DEEPGRAM_RESEARCH_DECKS },
  { label: "Deepgram", decks: DEEPGRAM_DECKS },
  { label: "Nebius", decks: NEBIUS_DECKS },
  { label: "Service Titan", decks: SERVICE_TITAN_DECKS },
  { label: "Coding Review", decks: CODING_REVIEW_DECKS }
];

// Flat list of every deck, derived from DECK_GROUPS above. app.js uses
// this for its flat deckIndex state; decks never need to be listed twice.
window.DECKS = window.DECK_GROUPS.reduce(function (all, group) {
  return all.concat(group.decks);
}, []);
