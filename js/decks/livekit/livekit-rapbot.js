const LIVEKIT_RAPBOT_DECK = {
  label: "LiveKit (rapBot)",
  randomShuffle: false,
  cards: [
    {
      question: "What was rapBot?",
      answer:
        "- App that turned user lyrics into rap songs\n" +
        "- Fine-tuned voice models\n" +
        "- Serverless GPUs"
    },
    {
      question: "What broke in rapBot's song generation in production?",
      answer: "- 10% of song requests failed w/ 502 Bad Gateway"
    },
    {
      question: "How did you find rapBot's 502 errors?",
      answer:
        "- Monitoring caught them in prod\n" +
        "- Product team confirmed"
    },
    {
      question: "Why did rapBot's 502 bug reach production?",
      answer: "- Manual QA only on warm GPUs"
    },
    {
      question: "What caused rapBot's 502 errors?",
      answer:
        "- RunPod's 90s timeout on sync calls\n" +
        "- API server held 1 request open per job\n" +
        "- Cold start + inference ran past 90s"
    },
    {
      question: "Did every rapBot cold start cause a 502?",
      answer: "- No, only cold start + long job"
    },
    {
      question: "What was the stopgap for rapBot's 502 errors?",
      answer:
        "- Raised serverless GPU idle timeout\n" +
        "- Workers stayed warm longer"
    },
    {
      question: "Why wasn't raising rapBot's idle timeout enough?",
      answer:
        "- First request after quiet still cold\n" +
        "- Paying for idle GPU time"
    },
    {
      question: "How did rapBot's job queue fix the 502 errors?",
      answer:
        "1. API server inserts job, browser gets 202\n" +
        "2. API server polls waiting jobs, sends to GPU worker\n" +
        "3. GPU worker replies 202, uploads audio\n" +
        "4. GPU worker marks job completed w/ signedUrl\n" +
        "5. API server polls completed, pushes via message broker"
    },
    {
      question: "How did you keep cold-start bugs out of rapBot's prod?",
      answer: "- Added cold GPUs to manual QA"
    },
    {
      question: "What changed for rapBot users after the job queue?",
      answer:
        "- Song failures fell from 10% to 3%\n" +
        "- 1 song at a time became 3 at once"
    },
    {
      question: "Why could rapBot users make 3 songs at once?",
      answer:
        "- Browser no longer waits on 1 request\n" +
        "- Instant 202 lets user submit another\n" +
        "- Cap of 3 set by GPU capacity"
    },
    {
      question: "Which rapBot failures remain after the job queue?",
      answer:
        "- Out of memory from long lyrics\n" +
        "- Planned fix splits lyrics, stitches audio"
    },
    {
      question: "Which rapBot job queue decisions were yours?",
      answer:
        "- All of them\n" +
        "- Biggest one, serverless vs dedicated Pods\n" +
        "- Also push results, cap 3 songs"
    },
    {
      question: "Why did rapBot stay serverless instead of dedicated Pods?",
      answer:
        "- Pods bill around the clock\n" +
        "- Fleet to run + maintain ourselves"
    },
    {
      question: "Did rapBot ever move to RunPod Pods?",
      answer:
        "- Later, Pod pool + own autoscaler\n" +
        "- RunPod retired v1 API, never migrated"
    },
    {
      question: "Why is polling rapBot's jobs table OK?",
      answer:
        "- Problem was 1 long open request, not count\n" +
        "- Each check returns in ms\n" +
        "- Cheap vs minutes of GPU time"
    },
    {
      question: "Why didn't rapBot use Postgres NOTIFY?",
      answer:
        "- Polling never loses a job\n" +
        "- Notify lost if server disconnected\n" +
        "- Jobs take minutes, 2s sooner irrelevant"
    },
    {
      question: "Why did rapBot use pg-boss over a queue service?",
      answer:
        "- Already ran Postgres, small volume\n" +
        "- Every job visible w/ SQL\n" +
        "- Higher volume would mean SQS"
    },
    {
      question: "What do HTTP 502, 504, and 524 mean?",
      answer:
        "502 --> bad or no reply behind proxy\n" +
        "504 --> proxy gave up waiting\n" +
        "524 --> Cloudflare origin silent ~100s"
    },
    {
      question: "What do HTTP 200, 201, and 202 mean?",
      answer:
        "200 --> done\n" +
        "201 --> done, something created\n" +
        "202 --> accepted, still working"
    },
    {
      question: "How does a job queue differ from pub/sub?",
      answer:
        "- Queue --> 1 consumer, kept until taken\n" +
        "- Pub/sub --> every subscriber, nothing kept"
    },
    {
      question: "How does plain polling differ from long polling?",
      answer:
        "- Plain --> ask on timer, instant answer\n" +
        "- Long --> server holds request until data"
    },
    {
      question: "How do server-sent events differ from WebSockets?",
      answer:
        "- SSE --> server-only push, auto reconnect\n" +
        "- WebSocket --> both send, 101 upgrade, manual reconnect"
    },
    {
      question: "What happens if rapBot's API server goes down?",
      answer:
        "- Open event streams lost\n" +
        "- EventSource reconnects itself\n" +
        "- Results safe in job rows, resent"
    },
    {
      question: "What would you change in rapBot today?",
      answer:
        "- Split lyrics, stitch audio for OOM\n" +
        "- DB notify instead of completed-jobs poll"
    }
  ]
};
