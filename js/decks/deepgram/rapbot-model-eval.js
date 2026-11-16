const RAPBOT_MODEL_EVAL_DECK = {
  label: "Use case (rapBot model eval)",
  randomShuffle: false,
  cards: [
    {
      question: "What was the problem?",
      answer: "- Eval relied on vibe checks"
    },
    {
      question: "What was the rubric?",
      answer:
        "- Accuracy\n" +
        "- Similarity\n" +
        "- Latency\n"
    },
    {
      question: "How did you measure accuracy?",
      answer:
        "transcript --> TTS (lupe) --> STT (whisper) --> transcript --> WER\n"
    },
    {
      question: "How did you measure similarity?",
      answer: "- Users pick the real Lupe out of 2 clips"
    },
    {
      question: "How did you measure latency?",
      answer:
        "- Used DataDog span tags\n"
    },
    {
      question: "How did you improve those 3 dimensions?",
      answer:
        "- Normalization\n" +
        "- Expanded dataset\n" +
        "- Serverless\n"
    },
    {
      question: "What was the outcome?",
      answer:
        "- Fewer inference retries"
    }
  ]
};
