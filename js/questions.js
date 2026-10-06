// Flash card data.
// Each deck has a "label" (shown in the picker) and a "cards" array.
// Each card has "question" and "answer". Answer text uses "\n" for line
// breaks so bullet structure is preserved exactly as written.
//
// To add a new deck: copy the object shape below and push it into DECKS.

window.DECKS = [
  {
    label: "Deepgram (FAQ)",
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
          "2. Run automated (WER) & manual tests (pairwise)\n" +
          "3. Give product release notes with metrics\n" +
          "4. Prepare a rollback plan"
      },
      {
        question: "How do you tell a real regression from noise?",
        answer:
          "- Get standard error\n" +
          "- Use p val to find out if delta is random\n"
      },
      {
        question: "How would you eval a model you didn't build?",
        answer:
          "- Build a golden dataset from prod logs\n" +
          "- DO AUTOMATED & MANUAL\n"
      },
      {
        question: "How do you decide go or no-go on a model?",
        answer:
          "- Set a threshold with product before eval\n" +
          "- DO AUTOMATED & MANUAL\n" +
          "- Assess tradeoffs and probability if there's a regression in any dimension"
      },
      {
        question: "How would you triage a bug in prod?",
        answer:
          "- Re-run failing calls through eval harness to reproduce\n"
      },
      {
        question: "How do you test a voice agent end-to-end before release?",
        answer:
          "- A simulated caller dials the agent with a script and a goal\n" +
          "- We score task/alignment/convo flow (T.A.F.)\n"
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
    label: "Deepgram (stats)",
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
        answer: "The difference between two means divided by its standard error"
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
        answer: "Look up t on a bell curve. The area past your t is p. Big t --> tiny p --> real gap."
      },
      {
        question: "What's the mathematical formula for a z score?",
        answer: "z = (value - mean) / std_dev"
      },
      {
        label: "Deepgram (use cases)",
        cards: [
          {
            question: "rapBot: what was the problem?",
            answer: "- Did the voice clone get better or worse after each training run?"
          },
          {
            question: "rapBot: what was the rubric?",
            answer:
              "- Accuracy, similarity, & latency\n"
          },
          {
            question: "rapBot: how did you measure accuracy?",
            answer:
              "- WER\n" +
              "--> transcript --> Lupe model --> STT --> transcript --> compare\n" +
              "- Whisper and AWS to avoid STT lineage bias"
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
              "- Automated metrics picked candidates\n" +
              "- Manual human tests picked the best candidate"
          },
          {
            question: "Twilio: what was the problem?",
            answer:
              "- Pickup rate was bad\n" +
              "- Visibility was null\n" +
              "- Concurrency was low"
          },
          {
            question: "Twilio: what was out of scope?",
            answer: "- Disputed and legal hold accounts"
          },
          {
            question: "Twilio: what was the user story?",
            answer:
              "- As a Navient agent, I want borrowers to answer when I dial\n" +
              "- I want to see the result of every call\n" +
              "- I want to dial at peak without a capacity wall"
          },
          {
            question: "Twilio: what were the acceptance criteria?",
            answer:
              "- Every outbound call carries Navient's name\n" +
              "- Every dial logs an outcome the agent can see\n" +
              "- 2000 calls per second"
          },
          {
            question: "Twilio: what were the deliverables?",
            answer:
              "- Call outcome dashboard in Twilio Flex\n" +
              "- 6 stateless microservices on AWS (a call state manager, etc.)"
          },
          {
            question: "Twilio: how did you evaluate it?",
            answer:
              "- Dashboard of call outcomes\n" +
              "- Manual QA\n" +
              "- Automated load test of 2000 calls per second"
          },
          {
            question: "Twilio: what were the business outcomes?",
            answer:
              "- Pickup rate --> 12%\n" +
              "- Agents see why every call failed\n" +
              "- Concurrency of 2000 calls per second"
          }
        ]
      }
    ]
  }
];
