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
        answer: "How much a set's mean would move on a re-run"
      },
      {
        question: "What is a t-test in plain English?",
        answer: "Whether two means differ by more than random noise"
      },
      {
        question: "What's the mathematical formula for a t-test?",
        answer: "t = (mean_a - mean_b) / std_err_of_observed_gap_bw_means"
      },
      {
        question: "What is a p value in plain English?",
        answer: "The odds that the gap between two means is random"
      },
      {
        question: "How do you go from a t-stat to a p value?",
        answer: "Look up t on a bell curve. The area past your t is p. tiny p --> real gap."
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
        question: "rapBot: what was the problem?",
        answer: "- Did the voice clone get better or worse?"
      },
      {
        question: "rapBot: what was the rubric?",
        answer:
          "- Accuracy\n" +
          "- Similarity\n" +
          "- Latency\n"
      },
      {
        question: "rapBot: how did you measure accuracy?",
        answer:
          "WER" +
          "transcript --> Lupe model --> STT --> transcript --> compare\n"
      },
      {
        question: "rapBot: how did you measure similarity?",
        answer: "- Users pick the real one out of 2 clips"
      },
      {
        question: "rapBot: how did you measure latency?",
        answer:
          "- Moved inference from manual scaling to serverless GPUs\n" +
          "- SSE let users keep working while songs generated"
      },
      {
        question: "rapBot: what was the outcome?",
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
        question: "Twilio: what was the problem?",
        answer:
          "- Pickup rates\n" +
          "- Visibility\n" +
          "- Concurrency"
      },
      {
        question: "Twilio: what was out of scope?",
        answer: "- Disputed and legal hold accounts"
      },
      {
        question: "Twilio: what was the user story?",
        answer:
          "- I want borrowers to answer\n" +
          "- I want to see call result\n" +
          "- I want less dropped calls at peak times"
      },
      {
        question: "Twilio: what were the acceptance criteria?",
        answer:
          "- Branded calling\n" +
          "- Call outcome dashboard\n" +
          "- 2000 concurrent calls at peak"
      },
      {
        question: "Twilio: what were the deliverables?",
        answer:
          "- Dashboard in Flex\n" +
          "- 6 microservices"
      },
      {
        question: "Twilio: how did you evaluate it?",
        answer:
          "- Manual QA calls\n" +
          "- Automated load tests"
      },
      {
        question: "Twilio: what were the business outcomes?",
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
        question: "HR Agent: what was the problem?",
        answer:
          "Bad answers were getting through to end users"
      },
      {
        question: "HR Agent: what was the rubric?",
        answer:
          "- Accuracy\n" +
          "- Faithfulness"
      },
      {
        question: "HR Agent: what was the dataset?",
        answer:
          "- Real HR questions + expected answers\n"
      },
      {
        question: "HR Agent: how did you validate the judge?",
        answer:
          "- Human spot checks of judge answers\n"
      },
      {
        question: "HR Agent: how did the gate work?",
        answer:
          "- GitHub action CI/CD job + slack alerts\n"
      },
      {
        question: "HR Agent: what were the business outcomes?",
        answer:
          "- HR survey ratings rose .4"
      }
    ]
  }
];
