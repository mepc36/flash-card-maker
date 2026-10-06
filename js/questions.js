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
          "- I'm a model eval engineer that builds systems to decide if a model ships\n"
      },
      {
        question: "What are you looking for in your next role?",
        answer: "- Eval work that gates releases of speech models"
      },
      {
        question: "Why are you leaving NBCU?",
        answer: "- I want to eval audio, not text"
      },
      {
        question: "Why Deepgram?",
        answer: "- I want to eval voice clones at scale"
      },
      {
        question: "What do you do in the week before a release?",
        answer:
          "1. Lock testing inputs (transcripts, etc.)\n" +
          "2. Run automated evals on baseline and candidate models (WER)\n" +
          "3. Do manual review of baseline & candidate outputs (pairwise preference)\n" +
          "4. Give product release notes with metrics\n" +
          "5. Prepare a rollback plan"
      },
      {
        question: "How do you tell a real regression from noise?",
        answer:
          "- Run multiple times using different seeds\n" +
          "- Calculate standard error to filter out random noise\n" +
          "- Use t-stat and p val to calculate probability that the delta is random\n" +
          "- Low P means don't ship"
      },
      {
        question: "How would you eval a model you didn't build?",
        answer:
          "- Build a golden dataset from prod logs\n" +
          "- Set noise floor using automated evals\n" +
          "- Use humans for hard-to-measure dimensions like likeability"
      },
      {
        question: "How do you decide go or no-go on a model?",
        answer:
          "- I agree a threshold with product before eval\n" +
          "- I compare candidate and baseline on automated & manual metrics\n" +
          "- Regression in 1 dimension forces re-evaluation to assess probabilities and tradeoffs"
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
          "- We score task completion, alignment, and conversational quality\n" +
          "- Humans spot-check a sample of the calls"
      },
      {
        question: "What from your eval goes on my roadmap?",
        answer:
          "- Every failed call in prod gets tallied\n" +
          "- Weight each category by cost\n" +
          "-- EXAMPLE: 50 calls over the latency budget x the SLA credit each"
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
