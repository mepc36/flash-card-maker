// Flash card data.
// Each deck has a "label" (shown in the picker), a "randomShuffle" flag
// (true = shuffle card order, false = read in the order listed below),
// and a "cards" array.
// Each card has "question" and "answer". Answer text uses "\n" for line
// breaks so bullet structure is preserved exactly as written.
//
// To add a new deck: copy the object shape below and push it into DECKS.

window.DECKS = [
  {
    label: "Deepgram (FAQ)",
    randomShuffle: true,
    cards: [
      {
        question: "Tell me about yourself",
        answer:
          "- Model eval engineer who decides if a model ships\n"
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
          "- t-tests and p values"
      },
      {
        question: "How would you eval a model you didn't build?",
        answer:
          "- Build a golden dataset from prod logs\n"
      },
      {
        question: "How do you decide go or no-go on a model?",
        answer:
          "- Set a threshold with product before eval\n" +
          "- Assess tradeoffs if there's a regression"
      },
      {
        question: "How would you triage a bug in prod?",
        answer:
          "- Reproduce it locally\n"
      },
      {
        question: "How do you test a voice agent end-to-end before release?",
        answer:
          "- Call the agent & assess task completion, alignment, & convo flow\n"
      },
      {
        question: "What from your eval goes on my roadmap?",
        answer:
          "- Weigh common failure modes by cost\n" +
          "-- EXAMPLE: 50 high latency calls x SLA credits"
      },
      {
        question:
          "What do you do when the research team says you can ship, but your own gate says hold?",
        answer:
          "- Re-do eval\n" +
          "- Show Product the specific calls that are failing\n" +
          "- Have a rollback plan"
      },
    ]
  },
  {
    label: "Deepgram (statistics)",
    randomShuffle: true,
    cards: [
      {
        question: "What is sample variance in plain English?",
        answer: "The spread of values in a set"
      },
      {
        question: "What is standard error in plain English?",
        answer: "How much a set's mean would vary when re-run"
      },
      {
        question: "What is a t-test in plain English?",
        answer: "Whether two means differ by more than random noise"
      },
      {
        question: "What's the mathematical formula for a t-test?",
        answer: "t = observed_gap / std_err"
      },
      {
        question: "What is a p value in plain English?",
        answer: "The odds that the gap between two means is random"
      },
      {
        question: "How to go from t-stat to p value in plain English?",
        answer: "Look up t on a bell curve. The area past your t is p."
      },
      {
        question: "What's the mathematical formula for a z score?",
        answer: "z = (value - mean) / std_dev"
      }
    ]
  },
  {
    label: "Deepgram (rapBot)",
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
          "- Used DataDog span tags\n" +
          "- FIXES: serverless + SSE"
      },
      {
        question: "What was the outcome?",
        answer:
          "- Less user retries"
      }
    ]
  },
  {
    label: "Deepgram (Twilio)",
    randomShuffle: false,
    cards: [
      {
        question: "What was the problem?",
        answer:
          "- Pickup rates\n" +
          "- Visibility\n" +
          "- Concurrency"
      },
      {
        question: "What was out of scope?",
        answer: "- Legal hold accounts"
      },
      {
        question: "What was the user story?",
        answer:
          "- I want borrowers to answer\n" +
          "- I want to see call result\n" +
          "- I want less dropped calls at peak times"
      },
      {
        question: "What were the acceptance criteria?",
        answer:
          "- Branded calling\n" +
          "- Dashboard\n" +
          "- 2000 concurrent calls"
      },
      {
        question: "What were the deliverables?",
        answer:
          "- 6 microservices + Flex productization"
      },
      {
        question: "How did you evaluate it?",
        answer:
          "- Load tests and manual QA"
      },
      {
        question: "What were the business outcomes?",
        answer:
          "- better pickup rate\n" +
          "- less retries\n" +
          "- less dropped calls"
      }
    ]
  },
  {
    label: "Deepgram (HR Agent)",
    randomShuffle: false,
    cards: [
      {
        question: "What was the problem?",
        answer:
          "Wrong answers & hallucinations"
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
  }
];
