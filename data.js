// Knowledge graph data for shridharpathak.me.
// Derived from /profile.json, /klabs/, and /blog.html on the personal site —
// every node and edge here traces back to something already public there.
// type (node): education | role | venture | project | writing | skill
// type (edge): progression | informs | built_on | related

const GRAPH_DATA = {
  nodes: [
    // Education
    { id: "pict", title: "B.E., Computer Science — PICT", type: "education", date: "2005–2009", url: null },
    { id: "tifr", title: "Junior Research Fellow — TIFR (GRAPES-3)", type: "education", date: "2009–2010", url: null },
    { id: "utd", title: "M.S., Computer Science — UT Dallas", type: "education", date: "2010–2012", url: null },
    { id: "mit-sloan", title: "Executive MBA — MIT Sloan (HBS cross-reg)", type: "education", date: "2024–2026", url: "/human#more" },

    // Career
    { id: "amzn-register", title: "SDE — Amazon Register (POS)", type: "role", date: "2012–2016", url: "/human#experience" },
    { id: "amzn-retail", title: "Manager & Tech Lead — Amazon Retail", type: "role", date: "2016–2018", url: "/human#experience" },
    { id: "amzn-alexa-india", title: "Senior TPM, Alexa India — Amazon Alexa", type: "role", date: "2018–2020", url: "/human#experience" },
    { id: "amzn-alexa-principal", title: "Principal TPM — Amazon Alexa", type: "role", date: "2020–2022", url: "/human#experience" },
    { id: "amzn-alexa-sr-mgr", title: "Senior Manager & Tech Lead — Amazon Alexa", type: "role", date: "2022–2023", url: "/human#experience" },
    { id: "moderna", title: "Senior Director, AI & ML — Moderna", type: "role", date: "2023–present", url: "/human#experience" },

    // Venture / advisory
    { id: "noesis", title: "Tech Advisor — Noesis", type: "venture", date: "2025–present", url: "/human#venture" },
    { id: "health-galaxy", title: "Founding Tech Advisor — Health Galaxy", type: "venture", date: "2024–present", url: "/human#more" },
    { id: "stanford-seed", title: "Stanford Seed Consultant", type: "venture", date: "2025–present", url: "/human#more" },

    // kReative Labs projects
    { id: "klabs-noesis", title: "Noesis (kReative Labs)", type: "project", date: "Live", url: "/klabs/noesis" },
    { id: "klabs-outr", title: "Outr", type: "project", date: "Live", url: "/klabs/outr" },
    { id: "klabs-agent-eval", title: "Agent evaluation platform", type: "project", date: "Building", url: "/klabs/agent-eval" },
    { id: "klabs-unslop", title: "unslop-text", type: "project", date: "Live", url: "/klabs/unslop-text" },
    { id: "klabs-voice", title: "Ask me anything (voice agent)", type: "project", date: "Live", url: "/klabs/voice-agent" },
    { id: "klabs-mrp", title: "The machine-readable profile", type: "project", date: "Live", url: "/klabs/machine-readable-profile" },
    { id: "klabs-time", title: "Time travel interface", type: "project", date: "Live", url: "/klabs/time-travel" },
    { id: "klabs-bookwriter", title: "Book writing agents", type: "project", date: "Building", url: "/klabs/book-writing-agents" },
    { id: "klabs-aura", title: "Aura", type: "project", date: "Building", url: "/klabs/aura" },
    { id: "klabs-nanda", title: "Nanda demo", type: "project", date: "Live", url: "/klabs/nanda-demo" },

    // Writing
    { id: "blog-hello-1", title: "Hello, world", type: "writing", date: "Apr 2026", url: "/blog.html" },
    { id: "blog-hello-2", title: "Hello World... (series opener)", type: "writing", date: "Jun 2026", url: "/blog.html" },
    { id: "blog-evolution", title: "The Evolution of a Software Developer", type: "writing", date: "Jul 2026", url: "/blog.html" },
    { id: "blog-bottleneck", title: "The Bottleneck Moved", type: "writing", date: "Aug 2026", url: "/blog.html" },

    // Recurring themes / skills
    { id: "skill-multiagent", title: "Multi-agent systems", type: "skill", date: null, url: null },
    { id: "skill-voice", title: "Voice AI", type: "skill", date: null, url: null },
    { id: "skill-governance", title: "AI governance / Policy-as-Code", type: "skill", date: null, url: null },
    { id: "skill-eval", title: "AI evaluation & observability", type: "skill", date: null, url: null },
    { id: "skill-ai-native-sdlc", title: "AI-native SDLC practice", type: "skill", date: null, url: null },
  ],

  links: [
    // Chronological progression
    { source: "pict", target: "tifr", type: "progression", reason: "KVPY fellow at PICT, then a research year at TIFR immediately after graduating." },
    { source: "tifr", target: "utd", type: "progression", reason: "Left the GRAPES-3 detector work at TIFR to start the M.S. in distributed systems and ML at UT Dallas." },
    { source: "utd", target: "amzn-register", type: "progression", reason: "Joined Amazon Register the month after finishing the UT Dallas master's." },
    { source: "amzn-register", target: "amzn-retail", type: "progression", reason: "Moved from Register's payments infrastructure into Amazon Retail's Southeast Asia launch." },
    { source: "amzn-retail", target: "amzn-alexa-india", type: "progression", reason: "Retail scope overlapped roughly seven months with the start of the Alexa India founding role." },
    { source: "amzn-alexa-india", target: "amzn-alexa-principal", type: "progression", reason: "Grew the Alexa India team from scratch, then stepped up to Principal TPM for the multi-agent rollout." },
    { source: "amzn-alexa-principal", target: "amzn-alexa-sr-mgr", type: "progression", reason: "Voice Shopping rollout across ten countries led into the Senior Manager & Tech Lead role over conversational AI." },
    { source: "amzn-alexa-sr-mgr", target: "moderna", type: "progression", reason: "Left Alexa's multi-agent conversational framework to lead AI & ML at Moderna." },

    // Informs
    { source: "amzn-alexa-sr-mgr", target: "noesis", type: "informs", reason: "Managing 35+ direct reports and 110+ partner-team reports across a multi-agent org is the direct precedent for advising a platform that manages AI agents as a workforce." },
    { source: "moderna", target: "skill-governance", type: "informs", reason: "Standing up GenAI in a regulated biopharma environment required governance and compliance built into the rollout from day one." },
    { source: "mit-sloan", target: "noesis", type: "informs", reason: "Platform economics and new-ventures coursework shaped how the Noesis GTM and pricing validation were approached." },
    { source: "moderna", target: "mit-sloan", type: "related", reason: "The EMBA ran concurrently with the Moderna role, cross-registered at Harvard Business School." },
    { source: "amzn-alexa-india", target: "skill-voice", type: "informs", reason: "Architected the APIs and ML endpoints that put Alexa voice shopping into the Amazon India retail app." },
    { source: "noesis", target: "klabs-noesis", type: "informs", reason: "The kReative Labs entry documents the same advisory venture at the level already public in profile.json." },
    { source: "noesis", target: "klabs-agent-eval", type: "related", reason: "An earlier framing of the same venture area, kept as a separate kReative Labs card rather than merged." },
    { source: "skill-governance", target: "klabs-bookwriter", type: "informs", reason: "A Noesis policy check runs as a deterministic gate before the LLM-based quality checker, catching banned patterns with 100% consistency." },
    { source: "skill-eval", target: "klabs-unslop", type: "informs", reason: "unslop-text's two-pass design (a mechanical regex scan, then an optional model pass) is the same instinct as evaluation infrastructure: catch what is deterministic before trusting judgment." },
    { source: "skill-multiagent", target: "klabs-nanda", type: "informs", reason: "The NANDA prototype's two-hop resolution and multi-agent DAG economy scene extend the same multi-agent orchestration thinking from Alexa into agent-discovery infrastructure." },
    { source: "skill-voice", target: "klabs-aura", type: "informs", reason: "Aura's voice cloning and persona Q&A is a personal-scale version of the conversational voice work from Alexa." },
    { source: "skill-voice", target: "klabs-voice", type: "informs", reason: "\"Ask me anything\" answers career questions out loud in a cloned voice, the same voice-AI thread as Alexa Voice Shopping." },

    // Built on
    { source: "klabs-bookwriter", target: "noesis", type: "built_on", reason: "Integrates the actual Noesis SDK (ingest/validate) as a hard backstop before the CheckerAgent." },
    { source: "klabs-outr", target: "skill-ai-native-sdlc", type: "built_on", reason: "149 of Outr's most recent 157 commits carry a Claude co-author line; work starts in plan mode before any code changes." },
    { source: "klabs-nanda", target: "skill-ai-native-sdlc", type: "built_on", reason: "Built with Claude Code end to end; architecture directed and all output verified by running the build, demo, and test suite." },
    { source: "klabs-unslop", target: "skill-ai-native-sdlc", type: "built_on", reason: "A companion Claude skill of the same name shares its audit logic with the browser-based scanner." },
    { source: "klabs-mrp", target: "skill-ai-native-sdlc", type: "built_on", reason: "This entire personal site, including this graph, is iterated on through the same plan-then-build workflow." },
    { source: "klabs-time", target: "klabs-mrp", type: "built_on", reason: "Both pages render the exact same underlying facts from profile.json; only the visual language changes." },
    { source: "klabs-aura", target: "skill-voice", type: "built_on", reason: "Voice cloning via ElevenLabs, persona Q&A via Claude, retrieval via in-process BM25 over a private knowledge base." },
    { source: "blog-bottleneck", target: "klabs-outr", type: "built_on", reason: "The post's central case study: reading Anthropic's AI-Native SDLC playbook against Outr's actual git history." },

    // Related
    { source: "blog-evolution", target: "skill-ai-native-sdlc", type: "related", reason: "The four-part series traces the same shift the playbook names directly: the bottleneck moving from writing code to the judgment around it." },
    { source: "blog-hello-2", target: "blog-evolution", type: "related", reason: "\"Hello World...\" opens the series that the four mainframe-to-digital-coworker posts complete." },
    { source: "blog-hello-1", target: "noesis", type: "related", reason: "The first post introduces the move into Tech Advisor on the enterprise agent platform, while finishing the MIT Sloan MBA." },
    { source: "blog-bottleneck", target: "klabs-bookwriter", type: "related", reason: "Cites Book writing agents' Noesis gate as another example of a deterministic check placed in front of a subjective one." },
    { source: "blog-bottleneck", target: "klabs-nanda", type: "related", reason: "Mentioned alongside Outr and unslop-text as evidence of the same AI-native build pattern recurring across projects." },
    { source: "health-galaxy", target: "skill-governance", type: "related", reason: "AI-ready architecture advisory for the AI Heart Score app touches the same governance and scaling questions as the other advisory work." },
    { source: "stanford-seed", target: "mit-sloan", type: "related", reason: "Advising global founders on scaling and AI-enabled business models draws directly on the EMBA's new-ventures and global-organizations coursework." },
  ],
};
