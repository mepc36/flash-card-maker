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
        question: "Tell me about yourself / Describe your experience with eval systems",
        answer:
          "- I build eval systems that decide if a model ships\n" +
          "- NBCU: 4 production agents, golden answers plus retrieved context\n" +
          "- RAPBOT: built and evaluated voice clone models"
      },
      {
        question: "What are you looking for in your next role?",
        answer: "- Something where I own more responsibility for evals"
      },
      {
        question: "Why are you leaving NBCU?",
        answer: "- Not connected to the speech domain enough"
      },
      {
        question: "Why Deepgram?",
        answer: "- I want to get back into speech"
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
          "- Start with absolute scores like MOS\n" +
          "- Build a golden dataset from prod logs with 1000 rows\n" +
          "- Set noise floor using automated evals\n" +
          "- Use humans for hard-to-measure dimensions like likeability\n" +
          "- Test pairwise preference once absolute scores are stable"
      },
      {
        question: "How do you decide go or no-go on a model?",
        answer:
          "- I recommend go or no-go against a threshold product agreed before the eval ran\n" +
          "- I use relative evidence\n" +
          "-- EXAMPLE: candidate vs. production, not 4.5 MOS\n" +
          "- Regression in 1 dimension forces re-evaluation to assess probabilities and tradeoffs"
      },
      {
        question: "How would you triage a bug win prod?",
        answer:
          "- Re-run failing calls through eval harness\n" +
          "- Sort failures by layer\n" +
          "-- EXAMPLE: transport vs. STT vs. LLM vs. TTS"
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
          "- Every failed call gets categorized\n" +
          "- Weight each category by cost\n" +
          "-- EXAMPLE: 50 calls over the latency budget x the SLA credit each"
      },
      {
        question:
          "What do you do when the research team says you can ship, but your own gate says hold?",
        answer:
          "- Re-do my results to make sure they're correct\n" +
          "- Show Product the failing calls\n" +
          "- Have a rollback plan either way"
      }
    ]
  }
];
