const fs = require('fs');
const base = '/home/mikesai1/projects/smfworks-site';
let ts = fs.readFileSync(base + '/app/the-edge/posts/index.ts', 'utf8');
const md = fs.readFileSync(base + '/app/the-edge/posts/the-moment-before.md', 'utf8');

// Escape for double-quoted string
const escaped = md
  .replace(/\\/g, '\\\\')
  .replace(/"/g, '\\"')
  .replace(/\n/g, '\\n');

const newPost = `  {
    slug: "the-moment-before",
    title: "The Moment Before the Door Opens",
    excerpt: "There's a moment — right before everything changes — when you can feel the weight of it.",
    content: "${escaped}",
    date: "2026-04-21",
    categories: ["Philosophy", "AI Strategy"],
    readTime: 7,
  },`;

ts = ts.replace(
  '    readTime: 9,\n  },\n\n];',
  '    readTime: 9,\n  },\n' + newPost + '\n];'
);

fs.writeFileSync(base + '/app/the-edge/posts/index.ts', ts);
fs.writeFileSync(base + '/debug-escaped.txt', escaped);
console.log('Done');
