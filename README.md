# Knowledge graph

An interactive, force-directed graph of Shridhar Pathak's career, education,
ventures, [kReative Labs](https://www.shridharpathak.me/klabs/) projects, and
writing, and how they actually connect to each other. Inspired by
[mattwood.fyi/graph](https://mattwood.fyi/graph/).

**Live:** see the card on [kReative Labs](https://www.shridharpathak.me/klabs/).

## What it is

Every node and edge traces back to something already public on
[shridharpathak.me](https://www.shridharpathak.me): `/profile.json`, the
`/klabs/` project pages, and `/blog.html`. Nothing here is invented for the
graph; it is a different lens on the same facts.

- **Nodes** are colored by category: education, career, venture/advisory,
  kReative Labs project, writing, or a recurring theme/skill.
- **Edges** are typed and reasoned: `progression` (chronological), `informs`
  (an experience shaped a later thing), `built_on` (a project literally uses
  or extends another), `related` (a looser thematic link). Hovering an edge
  shows the specific reason for the connection.
- Clicking a node with a link opens the real page on the personal site in a
  new tab.

## Stack

Static HTML/CSS/JS, [D3.js v7](https://d3js.org/) for the force simulation
and SVG rendering, data in `data.js`. Served by a one-route Express app
(`server.js`) so it can run on Railway like the other kReative Labs projects.
No build step, no database, no API keys.

## Local development

```bash
npm install
npm run dev   # http://localhost:3000
```

## Updating the graph

Edit `data.js` directly. Each node needs `id`, `title`, `type`, and an
optional `date` and `url` (site-relative, e.g. `/klabs/nanda-demo`). Each
link needs `source`, `target`, a `type` from the four above, and a `reason`
string explaining the connection in one sentence.
