const NEBIUS_SME_1_DECK = {
  label: "Recruiter's SME",
  randomShuffle: true,
  cards: [
    {
      question: "Preferred programming language and how concurrency works with it",
      answer:
        "asyncio --> concurrent I/O\n" +
        "Threads --> blocking I/O\n" +
        "Processes --> CPU-heavy work"
    },
    {
      question: "What is diff bw virtualization and containerization?",
      answer:
        "- VM --> separate kernel, isolated machine\n" +
        "- Container --> shared kernel, isolated processes"
    },
    {
      question: "Describe 3 python libraries used for managing concurrency",
      answer:
        "asyncio --> concurrent I/O\n" +
        "concurrent.futures --> thread and process pools\n" +
        "subprocess --> launch and manage external programs"
    },
    {
      question: "What's inside a server?",
      answer:
        "C -- CPUs\n" +
        "A -- Airflow\n" +
        "M -- Motherboard\n" +
        "P -- Power\n" +
        "E -- Ethernet / network interfaces\n" +
        "R -- RAM\n" +
        "S -- Storage\n"
    },
    {
      question: "What is the stack underneath HTTPS?",
      answer:
        "HTTP -->\n" +
        "TLS -->\n" +
        "TCP -->\n" +
        "IP -->\n" +
        "Ethernet / Wi-Fi"
    },
    {
      question: "What does HTTP do?",
      answer:
        "Defines web requests and responses, such as “GET this page.”"
    },
    {
      question: "What does TLS (Transport Layer Security) do?",
      answer:
        "- Encrypts the connection and verifies the server’s identity"
    },
    {
      question: "What does TCP (Transmission Control Protocol) do?",
      answer:
        "Delivers data reliably and in order, resending missing data"
    },
    {
      question: "What does IP (Internet Protocol) do?",
      answer:
        "Routes packets between networks"
    },
    {
      question: "What is Ethernet?",
      answer:
        "Carries network data via cables"
    },
    {
      question: "What is Wi-Fi?",
      answer:
        "Carries network data via radio waves"
    },
    {
      question: "What is a kernel?",
      answer:
        "- The core of an operating system"
    },
    {
      question: "What does the kernel do?",
      answer:
        "- controls devices\n" +
        "- allocates memory\n" +
        "- schedules processes\n" +
        "- sends and receives network packets"
    },
    {
      question: "How to optimize CPU-bound Python?",
      answer:
        "- Use process pools to run work in parallel across CPU cores"
    },
    {
      question: "How to optimize I/O-bound Python?",
      answer: "- Concurrency via asyncio or thread pools"
    },
    {
      question: "How does a DNS lookup resolve?",
      answer:
        "- App asks OS resolver, checks cache and /etc/hosts\n" +
        "- Resolver asks recursive server (ISP, 8.8.8.8)\n" +
        "- Recursive asks root --> TLD (.com) --> authoritative\n" +
        "- Gets IP back, caches it per TTL"
    },
    {
      question: "What is a file descriptor?",
      answer:
        "- Integer handle the kernel gives a process for an open file, socket, or pipe\n" +
        "ex.: - 0 stdin, 1 stdout, 2 stderr\n"
    },
    {
      question: "What is a syscall?",
      answer:
        "- How a process asks the kernel to do something: open, read, write, fork, socket\n" +
        "- Switches CPU from user mode to kernel mode\n"
    },
    {
      question: "What is /proc?",
      answer:
        "- Virtual filesystem where kernel state is exposed as files\n"
    },
    {
      question: 'What is systemd?',
      answer: "Linux's system and service manager"
    }
  ]
};
