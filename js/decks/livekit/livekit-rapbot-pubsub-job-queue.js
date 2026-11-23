const LIVEKIT_RAPBOT_DECK = {
  label: "LiveKit (rapBot)",
  randomShuffle: false,
  cards: [
    {
      question: "What broke in rapBot's song generation in production?",
      answer: "- 10% of song requests failed w/ 502 Bad Gateway"
    },
    {
      question: "How did you find rapBot's 502 errors?",
      answer:
        "- App sent an alert to a Slack channel via webhook\n"
    },
    {
      question: "Why did rapBot's 502 bug reach production?",
      answer: "- Manual QA only on warm GPUs"
    },
    {
      question: "What caused rapBot's 502 errors?",
      answer:
        "cold_start_duration + inference_duration > RUNPOD_SYNC_TIMEOUT"
    },
    {
      question: "What was the stopgap for rapBot's 502 errors?",
      answer:
        "- Raise serverless GPU's idle timeout to keep workers warm longer"
    },
    {
      question: "Why wasn't raising rapBot's idle timeout enough?",
      answer:
        "- First cold request still errored"
    },
    {
      question: "How did rapBot's job queue fix the 502 errors?",
      answer:
        "- API server inserts job & returns 202\n" +
        "- API server polls waiting jobs & sends to worker\n" +
        "- GPU worker replies 202 & uploads audio\n" +
        "- GPU worker marks job completed w/ signedUrl\n" +
        "- API server polls completed jobs & pushes via message broker"
    },
    {
      question: "How did you prevent this problem from happening in the future?",
      answer: "- e2e tests that use cold GPUs"
    },
    {
      question: "Why is polling rapBot's jobs table OK?",
      answer:
        "- Polling requests are short & cheap (unlike GPU time)"
    },
    {
      question: "Why didn't rapBot use Postgres NOTIFY?",
      answer:
        "- Notify can lose a published message on server disconnect"
    },
    {
      question: "Why did rapBot use pg-boss over a queue service?",
      answer:
        "- Small volume\n" +
        "- Already had Postgres\n"
    },
    {
      question: "What do HTTP 200, 201, and 202 mean?",
      answer:
        "200 --> done\n" +
        "201 --> created\n" +
        "202 --> accepted"
    },
    {
      question: "What happens if rapBot's API server goes down?",
      answer:
        "- Open event streams lost\n" +
        "- EventSource reconnects itself\n" +
        "- Results safe in job rows"
    },
    {
      question: "What future optimizations do you have planned?",
      answer:
        "- Split up large lyrics requests and stitch them together"
    },
    {
      question: "What is a job queue?",
      answer:
        "A job queue is a list of pending work items kept in storage, such as a database table or a broker.\n" +
        "Producers add jobs to the list, and workers remove them.\n" +
        "In rapBot, the job queue was the jobs table in Postgres, managed by pg-boss."
    },
    {
      question: "What is pub/sub?",
      answer:
        "Pub/sub is a messaging pattern with three parts: publishers, named channels, and subscribers.\n" +
        "A broker sits in the middle and delivers each published message to the channel's current subscribers.\n" +
        "In rapBot, the browser was the subscriber, the API server was the publisher, and Pusher was the broker."
    },
    {
      question: "What is plain polling?",
      answer:
        "Plain polling is a client pattern of short requests repeated on a timer.\n" +
        "Each request gets an immediate answer, even when the work is not ready yet.\n" +
        "rapBot's API server polled the jobs table this way."
    },
    {
      question: "What is long polling?",
      answer:
        "Long polling is a client pattern of one long request per reply.\n" +
        "The server holds each request open until it has data or a timeout passes.\n" +
        "AWS SQS offers it, and rapBot did not use it."
    },
    {
      question: "What are server-sent events?",
      answer:
        "Server-sent events are a one-way stream inside a single HTTP response with the header Content-Type: text/event-stream.\n" +
        "The server never ends that response and writes each message to it as it happens.\n" +
        "EventSource is the browser object that opens and reads the stream."
    },
    {
      question: "What are WebSockets?",
      answer:
        "A WebSocket is a two-way connection between browser and server that stays open.\n" +
        "It starts as an HTTP GET with an Upgrade: websocket header, and the server replies 101.\n" +
        "After the upgrade, it is its own protocol and not HTTP."
    },
  ]
};
