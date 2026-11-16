const NEBIUS_TECH_TUTORIALS_DECK = {
  label: 'DNS',
  randomShuffle: true,
  cards: [
    {
      question: "What is SSH?",
      answer: "A protocol for securely connecting to a server over a network"
    },
    {
      question: "What happens when you SSH?",
      answer:
        "- Hostname resolves to IP address\n" +
        "- Connection opened on 22\n" +
        "- Secret keys derived via authenticated key exchange\n" +
        "- Server verified via host key\n" +
        "- Client verified via SSH key or password\n" +
        "- SSH opens a session or shell"
    },
    {
      question: "Does ssh_config handle client or server connections?",
      answer: "client"
    },
    {
      question: "Does sshd_config handle client or server connections?",
      answer: "server"
    },
    {
      question: "What does DNS convert between?",
      answer:
        "Human-readable addresses → computer-readable addresses\n"
    },
    {
      question: "What does a DNS A record convert between?",
      answer:
        "Hostname → IPv4 address\n"
    },
    {
      question: "What does a DNS AAAA record convert between?",
      answer:
        "Hostname → IPv6 address\n"
    },
    {
      question: "What does a DNS CNAME record convert between?",
      answer:
        "Alias → hostname\n"
    },
    {
      question: "What does a DNS PTR (pointer) record convert between?",
      answer:
        "IP address → hostname\n"
    },
    {
      question: "What does a kernel cgroup do?",
      answer: 'Enforces memory limits on a set of processes'
    },
    {
      question: 'What is a network router?',
      answer: 'Forwards packets between different networks'
    }
  ]
};
