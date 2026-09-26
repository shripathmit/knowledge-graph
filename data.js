// Knowledge graph data for shridharpathak.me.
// Derived from /profile.json, /klabs/, and /blog.html on the personal site —
// every node and edge here traces back to something already public there.
// type (node): education | role | impact | venture | project | writing | skill | recognition
// type (edge): progression | delivered | informs | built_on | related
// Nodes may carry an optional one-line `summary`, shown on hover.

const GRAPH_DATA = {
  nodes: [
    // Education
    { id: "pict", title: "B.E., Computer Science — PICT", type: "education", date: "2005–2009", url: null },
    { id: "iit-bombay", title: "Research internships (×3) — IIT Bombay", type: "education", date: "2005–2009", url: "/human#more", summary: "Computer Vision Lab and NLP Lab (Computer Science); Department of Aerospace Engineering." },
    { id: "tifr", title: "Junior Research Fellow — TIFR (GRAPES-3)", type: "education", date: "2009–2010", url: null, summary: "GRAPES-3 / CERN-related detector monitoring algorithms in ROOT and C++." },
    { id: "utd", title: "M.S., Computer Science — UT Dallas", type: "education", date: "2010–2012", url: null, summary: "Specializations: distributed systems, machine learning, algorithms." },
    { id: "mit-sloan", title: "Executive MBA — MIT Sloan", type: "education", date: "2024–2026", url: "/human#more", summary: "Focus on platform economics, competitive strategy, AI and digital transformation, new ventures." },
    { id: "hbs", title: "Cross-registration, Entrepreneurship — Harvard Business School", type: "education", date: "Jan–May 2026", url: "/human#more" },

    // Career
    { id: "amzn-register", title: "SDE-1 → SDE-2, Tech Lead — Amazon Register (POS)", type: "role", date: "2012–2016", url: "/human#experience" },
    { id: "amzn-retail", title: "Manager & Tech Lead — Amazon Retail", type: "role", date: "2016–2018", url: "/human#experience" },
    { id: "amzn-alexa-india", title: "Senior TPM, Alexa India — Amazon, Bengaluru", type: "role", date: "2019–2020", url: "/human#experience" },
    { id: "amzn-alexa-principal", title: "Principal TPM & Tech Lead — Amazon Alexa", type: "role", date: "2021–2022", url: "/human#experience" },
    { id: "amzn-alexa-sr-mgr", title: "Senior Manager & Tech Lead — Amazon Alexa", type: "role", date: "2022–2023", url: "/human#experience" },
    { id: "moderna", title: "Senior Director, AI & ML — Moderna", type: "role", date: "2023–present", url: "/human#experience" },

    // Impact: what was delivered inside a role
    { id: "nautilus", title: "Project Nautilus — Southeast Asia launch", type: "impact", date: "2016–2018", url: "/human#experience", summary: "Cut a three-year country launch to nine months; two-hour delivery in Singapore." },
    { id: "alexa-voice-shopping", title: "Alexa Voice Shopping — 10 countries", type: "impact", date: "2021–2022", url: "/human#experience", summary: "US, India, Japan, Canada, France, Italy, Spain, Mexico, Ireland, and Australia." },
    { id: "alexa-mas", title: "Alexa's first multi-agent conversational switching framework", type: "impact", date: "2021–2023", url: "/human#experience", summary: "Celebrity voices and Disney partner agents; underpins a business with $50M+ ARR." },
    { id: "mod-roadmap", title: "GenAI roadmap — 20+ enterprise apps (Moderna)", type: "impact", date: "2023–present", url: "/human#experience", summary: "Conversational agents, function calling, and LLM orchestration across R&D, manufacturing, and clinical operations." },
    { id: "mod-org", title: "35+ person AI & ML engineering org (Moderna)", type: "impact", date: "2023–present", url: "/human#experience", summary: "Built from the ground up; production LLM workflows on AWS for global manufacturing." },
    { id: "mod-mas", title: "Multi-agent systems for regulated document workflows (Moderna)", type: "impact", date: "2023–present", url: "/human#experience", summary: "Fine-tuning, distillation, and RAG to automate knowledge work across regulated enterprise workflows." },
    { id: "mod-partners", title: "OpenAI & AWS strategic partnerships (Moderna)", type: "impact", date: "2023–present", url: "/human#experience", summary: "Multi-million-dollar investments and partnerships; AI capabilities translated for the C-suite." },

    // Venture / advisory
    { id: "noesis", title: "Tech Advisor — Noesis", type: "venture", date: "2025–present", url: "/human#venture", summary: "Enterprise agent workforce platform: Policy-as-Code and runtime supervision for LLM-driven multi-agent systems." },
    { id: "health-galaxy", title: "Tech & AI Advisor — EZbeat (by Health Galaxy)", type: "venture", date: "2023–present", url: "/human#more", summary: "AI Heart Score app; AI-ready architecture and scaling." },
    { id: "stanford-seed", title: "Stanford Seed Consultant", type: "venture", date: "2025–present", url: "/human#more" },

    // kReative Labs projects
    { id: "klabs-noesis", title: "Noesis (kReative Labs)", type: "project", date: "Live", url: "/klabs/noesis" },
    { id: "klabs-outr", title: "Outr", type: "project", date: "Live", url: "/klabs/outr", summary: "Researched outbound for founder-led B2B sales. You approve every send." },
    { id: "klabs-agent-eval", title: "Agent evaluation platform", type: "project", date: "Building", url: "/klabs/agent-eval" },
    { id: "klabs-unslop", title: "unslop-text", type: "project", date: "Live", url: "/klabs/unslop-text" },
    { id: "klabs-voice", title: "Ask me anything (voice agent)", type: "project", date: "Live", url: "/klabs/voice-agent" },
    { id: "klabs-mrp", title: "The machine-readable profile", type: "project", date: "Live", url: "/klabs/machine-readable-profile" },
    { id: "klabs-time", title: "Time travel interface", type: "project", date: "Live", url: "/klabs/time-travel" },
    { id: "klabs-bookwriter", title: "Book writing agents", type: "project", date: "Building", url: "/klabs/book-writing-agents" },
    { id: "klabs-aura", title: "Aura", type: "project", date: "Building", url: "/klabs/aura" },
    { id: "klabs-nanda", title: "Nanda demo", type: "project", date: "Live", url: "/klabs/nanda-demo" },
    { id: "klabs-kg", title: "Knowledge graph", type: "project", date: "Live", url: "/klabs/knowledge-graph" },
    { id: "klabs-taste", title: "Taste Network", type: "project", date: "Live · Sep 2026", url: "/klabs/taste-network", summary: "Real people compare two to five versions of something and explain why. No AI judges the work." },
    { id: "klabs-skills", title: "Agent skills (Site Analysis Analyst)", type: "project", date: "Live", url: "/klabs/skills", summary: "A public Claude Code skill that reads a codebase's own artifacts and returns a structured analysis." },

    // Writing
    { id: "blog-hello-1", title: "Hello, world", type: "writing", date: "Apr 2026", url: "/blog.html" },
    { id: "blog-hello-2", title: "Hello World... (series opener)", type: "writing", date: "Jun 2026", url: "/blog.html" },
    { id: "blog-evolution", title: "The Evolution of a Software Developer (series)", type: "writing", date: "Jul 2026", url: "/blog.html" },
    { id: "blog-evo-1", title: "Post 1: The Mainframe Era", type: "writing", date: "Jul 2026", url: "/blog.html" },
    { id: "blog-evo-2", title: "Post 2: The Web Era", type: "writing", date: "Jul 2026", url: "/blog.html" },
    { id: "blog-evo-3", title: "Post 3: The Cloud and Microservices", type: "writing", date: "Jul 2026", url: "/blog.html" },
    { id: "blog-evo-4", title: "Post 4: The Digital Coworker", type: "writing", date: "Jul 2026", url: "/blog.html" },
    { id: "blog-bottleneck", title: "The Bottleneck Moved", type: "writing", date: "Aug 2026", url: "/blog.html" },

    // Recognition
    { id: "kvpy", title: "KVPY Fellowship — Young Scientist, Engineering", type: "recognition", date: "2005–2009", url: "/human#more" },
    { id: "rice-leadership", title: "Engineering Leadership Development — Rice University", type: "recognition", date: "2018", url: "/human#more", summary: "Four courses: leadership development for engineers, high-performing teams, relationship management, self-awareness." },
    { id: "media", title: "Press: CNN Business, CNET, About Amazon India", type: "recognition", date: null, url: "/human#more", summary: "Alexa celebrity voice features, Hey Disney, and the Amitabh Bachchan voice partnership." },

    // Recurring themes / skills
    { id: "skill-multiagent", title: "Multi-agent systems", type: "skill", date: null, url: null },
    { id: "skill-voice", title: "Voice AI", type: "skill", date: null, url: null },
    { id: "skill-governance", title: "AI governance / Policy-as-Code", type: "skill", date: null, url: null },
    { id: "skill-eval", title: "AI evaluation & observability", type: "skill", date: null, url: null },
    { id: "skill-ai-native-sdlc", title: "AI-native SDLC practice", type: "skill", date: null, url: null },
    { id: "skill-distributed", title: "Distributed systems & payments infrastructure", type: "skill", date: null, url: null },
    { id: "skill-leadership", title: "Engineering org building & global delivery", type: "skill", date: null, url: null },
    { id: "skill-llm", title: "LLM orchestration, fine-tuning & RAG", type: "skill", date: null, url: null },
    { id: "skill-platform-econ", title: "Platform economics & GTM", type: "skill", date: null, url: null },
  ],

  links: [
    // Chronological progression
    { source: "pict", target: "tifr", type: "progression", reason: "KVPY fellow at PICT, then a research year at TIFR immediately after graduating." },
    { source: "tifr", target: "utd", type: "progression", reason: "Left the GRAPES-3 detector work at TIFR to start the M.S. in distributed systems and ML at UT Dallas." },
    { source: "utd", target: "amzn-register", type: "progression", reason: "Joined Amazon Register the month after finishing the UT Dallas master's." },
    { source: "amzn-register", target: "amzn-retail", type: "progression", reason: "Moved from Register's payments infrastructure into Amazon Retail's Southeast Asia launch." },
    { source: "amzn-retail", target: "amzn-alexa-india", type: "progression", reason: "Moved from Amazon Retail in Seattle to found the Alexa India team in Bengaluru immediately after Retail's Southeast Asia launch wrapped." },
    { source: "amzn-alexa-india", target: "amzn-alexa-principal", type: "progression", reason: "Grew the Alexa India team from scratch, then stepped up to Principal TPM for the multi-agent rollout." },
    { source: "amzn-alexa-principal", target: "amzn-alexa-sr-mgr", type: "progression", reason: "Voice Shopping rollout across ten countries led into the Senior Manager & Tech Lead role over conversational AI." },
    { source: "amzn-alexa-sr-mgr", target: "moderna", type: "progression", reason: "Left Alexa's multi-agent conversational framework to lead AI & ML at Moderna." },
    { source: "blog-evo-1", target: "blog-evo-2", type: "progression", reason: "Part 1 to part 2 of The Evolution of a Software Developer." },
    { source: "blog-evo-2", target: "blog-evo-3", type: "progression", reason: "Part 2 to part 3 of The Evolution of a Software Developer." },
    { source: "blog-evo-3", target: "blog-evo-4", type: "progression", reason: "Part 3 to part 4 of The Evolution of a Software Developer." },

    // Delivered: what a role actually produced
    { source: "amzn-retail", target: "nautilus", type: "delivered", reason: "Decoupled legacy US-centric systems so Amazon's first Southeast Asia retail launch took nine months instead of three years." },
    { source: "amzn-alexa-principal", target: "alexa-voice-shopping", type: "delivered", reason: "Launched Alexa Voice Shopping across ten countries." },
    { source: "amzn-alexa-sr-mgr", target: "alexa-mas", type: "delivered", reason: "Architected and launched Alexa's first multi-agent conversational switching framework, underpinning a business generating $50M+ in annual recurring revenue." },
    { source: "moderna", target: "mod-roadmap", type: "delivered", reason: "Defined and executed the GenAI roadmap for 20+ enterprise applications across R&D, manufacturing, and clinical operations." },
    { source: "moderna", target: "mod-org", type: "delivered", reason: "Built a 35+ person engineering organization delivering production LLM workflows on AWS." },
    { source: "moderna", target: "mod-mas", type: "delivered", reason: "Architected multi-agent conversational systems to automate knowledge work across regulated enterprise workflows." },
    { source: "moderna", target: "mod-partners", type: "delivered", reason: "Secured multi-million-dollar investments and partnerships with OpenAI and AWS." },

    // Informs
    { source: "amzn-alexa-sr-mgr", target: "noesis", type: "informs", reason: "Managing 35+ direct reports and 110+ partner-team reports across a multi-agent org is the direct precedent for advising a platform that manages AI agents as a workforce." },
    { source: "moderna", target: "skill-governance", type: "informs", reason: "Standing up GenAI in a regulated biopharma environment required governance and compliance built into the rollout from day one." },
    { source: "mit-sloan", target: "noesis", type: "informs", reason: "Platform economics and new-ventures coursework shaped how the Noesis GTM and pricing validation were approached." },
    { source: "amzn-alexa-india", target: "skill-voice", type: "informs", reason: "Architected the APIs and ML endpoints that put Alexa voice shopping into the Amazon India retail app." },
    { source: "noesis", target: "klabs-noesis", type: "informs", reason: "The kReative Labs entry documents the same advisory venture at the level already public in profile.json." },
    { source: "skill-governance", target: "klabs-bookwriter", type: "informs", reason: "A Noesis policy check runs as a deterministic gate before the LLM-based quality checker, catching banned patterns with 100% consistency." },
    { source: "skill-eval", target: "klabs-unslop", type: "informs", reason: "unslop-text's two-pass design (a mechanical regex scan, then an optional model pass) is the same instinct as evaluation infrastructure: catch what is deterministic before trusting judgment." },
    { source: "skill-multiagent", target: "klabs-nanda", type: "informs", reason: "The NANDA prototype's two-hop resolution and multi-agent DAG economy scene extend the same multi-agent orchestration thinking from Alexa into agent-discovery infrastructure." },
    { source: "skill-voice", target: "klabs-aura", type: "informs", reason: "Aura's voice cloning and persona Q&A is a personal-scale version of the conversational voice work from Alexa." },
    { source: "skill-voice", target: "klabs-voice", type: "informs", reason: "\"Ask me anything\" answers career questions out loud in a cloned voice, the same voice-AI thread as Alexa Voice Shopping." },
    { source: "iit-bombay", target: "tifr", type: "informs", reason: "Three undergraduate research internships led into a full research year at TIFR." },
    { source: "utd", target: "skill-distributed", type: "informs", reason: "The master's specialized in distributed systems, machine learning, and algorithms." },
    { source: "amzn-register", target: "skill-distributed", type: "informs", reason: "Fault-tolerant payment infrastructure and fraud detection for global merchant onboarding, in Java and C++." },
    { source: "nautilus", target: "skill-leadership", type: "informs", reason: "Sole technical owner aligning 26 teams across seven global organizations." },
    { source: "amzn-alexa-india", target: "skill-leadership", type: "informs", reason: "Founding technical member of Alexa India Retail, built from scratch to 16+ engineers and analysts." },
    { source: "amzn-alexa-sr-mgr", target: "skill-leadership", type: "informs", reason: "35+ direct reports and 110+ partner-team reports across 8+ countries." },
    { source: "mod-org", target: "skill-leadership", type: "informs", reason: "A second engineering organization built from zero, after Alexa India." },
    { source: "alexa-voice-shopping", target: "skill-voice", type: "informs", reason: "Ten markets meant solving missing training data, privacy constraints in Japan and the EU, and noisy audio in India." },
    { source: "amzn-alexa-principal", target: "alexa-mas", type: "informs", reason: "Led the framework's rollout for monetization and engagement measurement across celebrity personalities." },
    { source: "alexa-mas", target: "skill-multiagent", type: "informs", reason: "Multi-agent switching at consumer scale is where the multi-agent thread starts." },
    { source: "alexa-mas", target: "mod-mas", type: "informs", reason: "The same multi-agent orchestration, moved from consumer voice to regulated enterprise documents." },
    { source: "mod-mas", target: "skill-multiagent", type: "informs", reason: "Multi-agent architecture applied in a regulated enterprise setting." },
    { source: "mod-roadmap", target: "skill-llm", type: "informs", reason: "Conversational agents, function calling, and LLM orchestration at enterprise scale." },
    { source: "mod-mas", target: "skill-llm", type: "informs", reason: "Fine-tuning, distillation, and retrieval-augmented generation in production." },
    { source: "mit-sloan", target: "mod-partners", type: "informs", reason: "The EMBA supplied the frameworks for C-suite and stakeholder buy-in across R&D, quality, and regulatory teams." },
    { source: "mit-sloan", target: "skill-platform-econ", type: "informs", reason: "Platform economics, New Enterprises, and Competitive Strategy coursework." },
    { source: "skill-platform-econ", target: "noesis", type: "informs", reason: "50+ enterprise discovery calls, three design-partner pilots, and a seed-stage pricing model validated within six months." },
    { source: "skill-multiagent", target: "noesis", type: "informs", reason: "Policy-as-Code and runtime supervision for LLM-driven multi-agent systems." },
    { source: "noesis", target: "skill-eval", type: "informs", reason: "Runtime supervision is evaluation that happens while the agent is running." },
    { source: "skill-eval", target: "klabs-agent-eval", type: "informs", reason: "An evaluation platform is the evaluation theme turned into a product." },
    { source: "skill-multiagent", target: "klabs-bookwriter", type: "informs", reason: "Drafting agents hand off to a CheckerAgent, a multi-agent pipeline for long-form writing." },

    // Built on
    { source: "klabs-bookwriter", target: "noesis", type: "built_on", reason: "Integrates the actual Noesis SDK (ingest/validate) as a hard backstop before the CheckerAgent." },
    { source: "klabs-outr", target: "skill-ai-native-sdlc", type: "built_on", reason: "149 of Outr's most recent 157 commits carry a Claude co-author line; work starts in plan mode before any code changes." },
    { source: "klabs-nanda", target: "skill-ai-native-sdlc", type: "built_on", reason: "Built with Claude Code end to end; architecture directed and all output verified by running the build, demo, and test suite." },
    { source: "klabs-unslop", target: "skill-ai-native-sdlc", type: "built_on", reason: "A companion Claude skill of the same name shares its audit logic with the browser-based scanner." },
    { source: "klabs-mrp", target: "skill-ai-native-sdlc", type: "built_on", reason: "This entire personal site, including this graph, is iterated on through the same plan-then-build workflow." },
    { source: "klabs-time", target: "klabs-mrp", type: "built_on", reason: "Both pages render the exact same underlying facts from profile.json; only the visual language changes." },
    { source: "klabs-aura", target: "skill-voice", type: "built_on", reason: "Voice cloning via ElevenLabs, persona Q&A via Claude, retrieval via in-process BM25 over a private knowledge base." },
    { source: "blog-bottleneck", target: "klabs-outr", type: "built_on", reason: "The post's central case study: reading Anthropic's AI-Native SDLC playbook against Outr's actual git history." },
    { source: "klabs-outr", target: "skill-multiagent", type: "built_on", reason: "A staged pipeline: product profile, company matching, evidence research, then drafting." },
    { source: "klabs-voice", target: "klabs-mrp", type: "built_on", reason: "Answers from the same career record that profile.json publishes." },
    { source: "klabs-kg", target: "klabs-mrp", type: "built_on", reason: "Every node and edge traces back to profile.json, /klabs/, and /blog.html." },
    { source: "klabs-skills", target: "skill-ai-native-sdlc", type: "built_on", reason: "A packaged Claude Code skill that reads a codebase's own artifacts instead of guessing." },

    // Related
    { source: "blog-evolution", target: "skill-ai-native-sdlc", type: "related", reason: "The four-part series traces the same shift the playbook names directly: the bottleneck moving from writing code to the judgment around it." },
    { source: "blog-hello-2", target: "blog-evolution", type: "related", reason: "\"Hello World...\" opens the series that the four mainframe-to-digital-coworker posts complete." },
    { source: "blog-evolution", target: "blog-evo-1", type: "related", reason: "Part 1 of the four-part series." },
    { source: "blog-evolution", target: "blog-evo-2", type: "related", reason: "Part 2 of the four-part series." },
    { source: "blog-evolution", target: "blog-evo-3", type: "related", reason: "Part 3 of the four-part series." },
    { source: "blog-evolution", target: "blog-evo-4", type: "related", reason: "Part 4 of the four-part series." },
    { source: "blog-hello-1", target: "noesis", type: "related", reason: "The first post introduces the move into Tech Advisor on the enterprise agent platform, while finishing the MIT Sloan MBA." },
    { source: "blog-bottleneck", target: "klabs-bookwriter", type: "related", reason: "Cites Book writing agents' Noesis gate as another example of a deterministic check placed in front of a subjective one." },
    { source: "blog-bottleneck", target: "klabs-nanda", type: "related", reason: "Mentioned alongside Outr and unslop-text as evidence of the same AI-native build pattern recurring across projects." },
    { source: "health-galaxy", target: "skill-governance", type: "related", reason: "AI-ready architecture advisory for the AI Heart Score app touches the same governance and scaling questions as the other advisory work." },
    { source: "stanford-seed", target: "mit-sloan", type: "related", reason: "Advising global founders on scaling and AI-enabled business models draws directly on the EMBA's new-ventures and global-organizations coursework." },
    { source: "moderna", target: "mit-sloan", type: "related", reason: "The EMBA ran concurrently with the Moderna role." },
    { source: "mit-sloan", target: "hbs", type: "related", reason: "Cross-registered at Harvard Business School for Entrepreneurship through the Sloan EMBA." },
    { source: "pict", target: "iit-bombay", type: "related", reason: "Three IIT Bombay research internships ran alongside the PICT degree." },
    { source: "kvpy", target: "pict", type: "related", reason: "KVPY Young Scientist fellowship, engineering stream, held through all four PICT years." },
    { source: "amzn-retail", target: "rice-leadership", type: "related", reason: "Rice University's engineering leadership courses were taken in 2018, during the Retail manager role." },
    { source: "rice-leadership", target: "skill-leadership", type: "related", reason: "Formal leadership training alongside building and running teams." },
    { source: "alexa-mas", target: "media", type: "related", reason: "The celebrity voice features were covered by CNN Business, CNET, and About Amazon India." },
    { source: "klabs-outr", target: "skill-governance", type: "related", reason: "Nothing sends without approval, and each draft shows its evidence beside it, so approving is a judgment rather than a rubber stamp." },
    { source: "klabs-voice", target: "klabs-aura", type: "related", reason: "Both answer questions in a cloned voice: Ask me anything answers only from a curated knowledge base, Aura retrieves with BM25 and answers with Claude." },
    { source: "klabs-kg", target: "klabs-time", type: "related", reason: "A third view of the same facts, after the machine-readable profile and the time travel page." },
    { source: "klabs-taste", target: "skill-eval", type: "related", reason: "The inverse of LLM-as-judge: options go to real people, because taste is what models judge worst." },
    { source: "klabs-skills", target: "klabs-unslop", type: "related", reason: "Both ban marketing language in their output by rule." },
  ],
};
