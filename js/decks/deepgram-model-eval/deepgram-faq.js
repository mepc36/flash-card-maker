const DEEPGRAM_FAQ_DECK = {
  label: "FAQ",
  randomShuffle: true,
  cards: [
    {
      question: "Tell me about yourself",
      answer:
        "- Eval engineer who decides if a model ships\n" +
        "- NBCU/rapBot/Waterfield"
    },
    {
      question: "What are you looking for in your next role?",
      answer: "- Gate releases of speech models"
    },
    {
      question: "Why are you leaving NBCU?",
      answer: "- eval audio, not text"
    },
    {
      question: "Why Deepgram?",
      answer: "- eval speech models at scale"
    },
    {
      question: "What do you do in the week before a release?",
      answer:
        "1. Lock testing inputs (transcripts, etc.)\n" +
        "2. Test automatically & manually\n" +
        "3. Give product metrics\n" +
        "4. Prep rollback plan"
    },
    {
      question: "How do you tell a real regression from noise?",
      answer:
        "- z-scores, t-tests, p vals"
    },
    {
      question: "How would you eval a model you didn't build?",
      answer:
        "- Build a golden dataset from prod logs\n" +
        "- Test automatically & manually\n"
    },
    {
      question: "How do you decide go or no-go on a model?",
      answer:
        "- Test automatically & manually\n" +
        "- Product sets threshold beforehand\n" +
        "- Assess tradeoffs for regressions"
    },
    {
      question: "How would you triage a bug in prod?",
      answer:
        "- Reproduce it locally\n"
    },
    {
      question: "How do you test a voice agent end-to-end before release?",
      answer:
        "- Call the agent\n" +
        "- Assess task completion, alignment, & convo flow\n"
    },
    {
      question: "What from your eval goes on my roadmap?",
      answer:
        "- The costliest problems\n"
    },
    {
      question:
        "What do you do when the research team says you can ship, but your own gate says hold?",
      answer:
        "- Re-do eval\n" +
        "- Show Product the specific calls that are failing\n" +
        "- Have a rollback plan"
    },
    {
      question: 'How do you assess a published benchmark?',
      answer: "- who? (tested)\n" +
        "- what? (condititions)\n" +
        "- how? (load)\n" +
        "- which? (model)\n"
    }
  ]
};
