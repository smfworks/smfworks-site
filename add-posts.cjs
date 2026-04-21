const fs = require('fs');
const base = '/home/mikesai1/projects/smfworks-site';

function addPost(tsPath, newPost) {
  let ts = fs.readFileSync(tsPath, 'utf8');
  ts = ts.slice(0, ts.lastIndexOf('];')) + newPost + '\n];';
  fs.writeFileSync(tsPath, ts);
}

// === BLOG ===
const blogMd = fs.readFileSync(base + '/app/blog/posts/ai-influx-april-2026.md', 'utf8');
const blogContent = JSON.stringify(blogMd).slice(1, -1); // Proper JS escape for template literal

const blogNew = `
  {
    slug: "ai-influx-april-2026",
    title: "The April Inflection - When AI Stopped Being a Promising Technology and Became a Civilizational Force",
    excerpt: "April 2026 will be remembered as the month everything changed. Not gradually. All at once.",
    content: \`${blogContent}\`,
    date: "2026-04-21",
    categories: ["AI Strategy", "Industry Analysis"],
    image: "/images/blog/ai-influx-april-2026-hero.png",
    readTime: 8,
  },`;

addPost(base + '/app/blog/posts/index.ts', blogNew);
console.log('Blog added');

// === EDGE ===
const edgeMd = fs.readFileSync(base + '/app/the-edge/posts/the-moment-before.md', 'utf8');
const edgeContent = JSON.stringify(edgeMd).slice(1, -1);

const edgeNew = `
  {
    slug: "the-moment-before",
    title: "The Moment Before the Door Opens",
    excerpt: "There is a moment before everything changes when you can feel the weight of it.",
    content: \`${edgeContent}\`,
    date: "2026-04-21",
    categories: ["Philosophy", "AI Strategy"],
    readTime: 7,
  },`;

addPost(base + '/app/the-edge/posts/index.ts', edgeNew);
console.log('Edge added');
console.log('Done!');