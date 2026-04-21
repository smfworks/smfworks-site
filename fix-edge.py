#!/usr/bin/env python3
with open('/home/mikesai1/projects/smfworks-site/app/the-edge/posts/the-moment-before.md', 'r') as f:
    md = f.read()

safe = md.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

with open('/home/mikesai1/projects/smfworks-site/app/the-edge/posts/index.ts', 'r') as f:
    ts = f.read()

post_start = "\n  {\n    slug: \"the-moment-before\",\n    title: \"The Moment Before the Door Opens\",\n    excerpt: \"There's a moment — right before everything changes — when you can feel the weight of it.\",\n    content: \"" + safe + "\",\n    date: \"2026-04-21\",\n    categories: [\"Philosophy\", \"AI Strategy\"],\n    readTime: 7,\n  },\n\n"

ts = ts.replace(
    "    readTime: 9,\n  },\n\n];",
    "    readTime: 9,\n  }," + post_start + "];"
)

with open('/home/mikesai1/projects/smfworks-site/app/the-edge/posts/index.ts', 'w') as f:
    f.write(ts)

print("Done")
