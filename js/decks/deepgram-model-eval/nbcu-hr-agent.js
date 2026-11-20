const NBCU_HR_AGENT_DECK = {
  label: "Use case (NBCU HR Agent)",
  randomShuffle: false,
  cards: [
    {
      question: "What was the problem?",
      answer:
        "Wrong answers"
    },
    {
      question: "What was the rubric?",
      answer:
        "- Accuracy\n" +
        "- Faithfulness"
    },
    {
      question: "What was the dataset?",
      answer:
        "- Prompts from prod\n"
    },
    {
      question: "How did you validate the judge?",
      answer:
        "- Human spot checks of judge answers\n"
    },
    {
      question: "How did the gate work?",
      answer:
        "- GitHub action CI/CD job + slack alerts\n"
    },
    {
      question: "What were the business outcomes?",
      answer:
        "- Less human intervention"
    }
  ]
};
