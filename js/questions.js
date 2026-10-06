// Flash card data.
// Each deck has a "label" (shown in the picker) and a "cards" array.
// Each card has "question" and "answer". Answer text uses "\n" for line
// breaks so bullet structure is preserved exactly as written.
//
// To add a new deck: copy the object shape below and push it into DECKS.

window.DECKS = [
  {
    label: "FAQ Answers",
    cards: [
      {
        question: "Tell me about yourself",
        answer:
          "- Model eval engineer that builds systems to decide if a model ships\n"
      },
      {
        question: "What are you looking for in your next role?",
        answer: "- To gate releases of speech models"
      },
      {
        question: "Why are you leaving NBCU?",
        answer: "- eval audio, not text"
      },
      {
        question: "Why Deepgram?",
        answer: "- eval voice clones at scale"
      },
      {
        question: "What do you do in the week before a release?",
        answer:
          "1. Lock testing inputs (transcripts, etc.)\n" +
          "2. AUTOMATED evals on baseline and candidate models (WER)\n" +
          "3. MANUAL review of baseline & candidate outputs (pairwise preference)\n" +
          "4. Give product release notes with metrics\n" +
          "5. Prepare a rollback plan"
      },
      {
        question: "How do you tell a real regression from noise?",
        answer:
          "- Get the standard error by running multiple times with different seeds\n" +
          "- Use t-stat and p val to calculate probability that the delta is random\n" +
          "- Low P means don't ship"
      },
      {
        question: "How would you eval a model you didn't build?",
        answer:
          "- Build a golden dataset from prod logs\n" +
          "- AUTOMATED evals like WER to set a floor\n" +
          "- MANUAL evals for dimensions like likeability"
      },
      {
        question: "How do you decide go or no-go on a model?",
        answer:
          "- Set a threshold with product before eval\n" +
          "- AUTOMATED metrics on candidate and baseline models\n" +
          "- MANUAL metrics on candidate and baseline models\n" +
          "- Assess tradeoffs and probability if there's a regression in any dimension"
      },
      {
        question: "How would you triage a bug in prod?",
        answer:
          "- Rely on logs & monitoring" +
          "- Re-run failing calls through eval harness to reproduce\n" +
          "- Sort failures by layer (STT vs. LLM, etc.)\n"
      },
      {
        question: "How do you test a voice agent end-to-end before release?",
        answer:
          "- A simulated caller dials the agent with a script and a goal\n" +
          "- We score task/alignment/convo flow (T.A.F.)\n" +
          "- Humans spot-check call samples"
      },
      {
        question: "What from your eval goes on my roadmap?",
        answer:
          "- Every failed call in prod gets tallied\n" +
          "- Weight each category by cost\n" +
          "-- EXAMPLE: 50 high latency calls x SLA credits"
      },
      {
        question:
          "What do you do when the research team says you can ship, but your own gate says hold?",
        answer:
          "- Re-do my results to make sure they're correct\n" +
          "- Show Product the specific calls that are failing\n" +
          "- Have a rollback plan either way"
      }
    ]
  }
];
