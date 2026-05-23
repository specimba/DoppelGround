# DoppelGround Foundation

The public landing page and evidence preparation layer for [NEXUS OS](https://github.com/specimba/nexusalpha) — a sovereign multi-agent operating system orchestrating AI agents across Slack, Telegram, GitHub, and 280+ tools with vector memory, Kafka event bus, and autonomous decision-making.

**Live:** https://doppelground-specimba.zocomputer.io

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Agent Mesh](#agent-mesh)
- [NEXUS OS Ecosystem](#nexus-os-ecosystem)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

DoppelGround serves two roles within the NEXUS OS ecosystem:

1. **Landing Page** — The public-facing showcase for the NEXUS OS platform, displaying the agent mesh, system stats, and dashboard preview.
2. **Evidence Preparation Layer** — Referenced by `nexusalpha/AGENTS.md` as the evidence preparation boundary. Outputs must be sanitized before handoff to the core governance platform.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Vite](https://vitejs.dev/) | Build tool and dev server |
| [React](https://react.dev/) 18+ | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [@tabler/icons-react](https://tabler.io/icons) | Icon library |
| [react-router-dom](https://reactrouter.com/) | Client-side routing |

**Hosted on:** [Zo Computer](https://zocomputer.io) (Zo Site)

---

## Quick Start

### Requirements

- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Install and Run

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

The development server starts at `http://localhost:5173` by default.

---

## Project Structure

```
DoppelGround/
├── index.html              # HTML entry point
├── index.tsx               # Server export
├── src/
│   ├── main.tsx            # React mount point
│   ├── App.tsx             # Router setup (BrowserRouter + ThemeProvider)
│   ├── styles.css          # Global styles (Tailwind + CSS custom properties)
│   ├── pages/
│   │   ├── landing.tsx     # Main landing page (hero, stats, agent mesh, dashboard)
│   │   └── blank-demo.tsx  # Blank demo page
│   ├── components/
│   │   ├── theme-provider.tsx  # Dark/light/system theme context
│   │   └── ui/
│   │       ├── card.tsx    # Card component
│   │       └── badge.tsx   # Badge component
│   ├── hooks/
│   │   └── use-mobile.ts  # Mobile viewport detection hook
│   └── lib/
│       └── utils.ts        # Utility functions (cn — class name merger)
└── README.md
```

---

## Agent Mesh

The landing page showcases the NEXUS OS agent mesh — the active AI agents orchestrated by the platform:

| Agent | Role | Description |
|-------|------|-------------|
| NEXUS Governor | Orchestrator | Routes tasks across all agents |
| Zo Computer | Infrastructure | Core AI infrastructure — Slack, Telegram, webhooks, API |
| AutoClaw | Execution | Autonomous Telegram bot swarm executive layer |
| KiloClaw-REBORN | Research | Research and intelligence synthesis agent |
| Grok | Intelligence | Real-time web intelligence and X/Twitter analysis |
| Composio | Integration | 250+ tool integrations bridge |
| Hyperbrowser | Automation | Browser automation, stealth sessions, web scraping |
| Pinecone | Memory | Vector knowledge base for persistent agent memory |

---

## NEXUS OS Ecosystem

DoppelGround is part of the broader NEXUS OS multi-agent governance ecosystem:

| Repository | Purpose |
|------------|---------|
| [`specimba/nexusalpha`](https://github.com/specimba/nexusalpha) | Core NEXUS OS governance platform (Python, 664+ tests) |
| [`specimba/DoppelGround`](https://github.com/specimba/DoppelGround) | Landing page and evidence preparation layer (this repo) |
| [`specimba/nexux-os-Chimera`](https://github.com/specimba/nexux-os-Chimera) | Chimera engine |

**Dashboard branch:** The full NEXUS Operations Dashboard is available at [`nexusalpha/DASHBOARD-GLM51`](https://github.com/specimba/nexusalpha/tree/DASHBOARD-GLM51).

---

## Contributing

Contributions are welcome. When working on this repo:

- Do not include model weights, secrets, or governance internals — this is a public-facing repo.
- All outputs must pass leak scanning before release.
- Follow the NEXUS OS system boundary: DoppelGround is the evidence preparation layer and operates in USE MODE.

---

## License

Internal — DoppelGround Foundation Project.

---

_Originally written and maintained by contributors and [Devin](https://app.devin.ai), with updates from the core team._
