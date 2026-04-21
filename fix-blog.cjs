const fs = require('fs');
const base = '/home/mikesai1/projects/smfworks-site';

// Reset to clean state
let blogTs = fs.readFileSync(base + '/app/blog/posts/index.ts', 'utf8');
// Find the ai-influx post that was incorrectly added and remove it
const influxStart = blogTs.indexOf('\n  {\n    slug: "ai-influx-april-2026"');
const influxEnd = blogTs.indexOf('\n  {\n    slug: "shadow-ai-governance-gap');
if (influxStart >= 0 && influxEnd > influxStart) {
    blogTs = blogTs.slice(0, influxStart) + blogTs.slice(influxEnd);
    fs.writeFileSync(base + '/app/blog/posts/index.ts', blogTs);
    console.log('Blog reset - removed bad ai-influx post');
} else {
    console.log('Could not find bad post to remove');
    console.log('influxStart:', influxStart, 'influxEnd:', influxEnd);
}

// Now write the properly escaped post using a JSON approach
const postContent = 'April 2026 will be remembered as the month everything changed. Not gradually. All at once.';
const postTitle = 'The April Inflection - When AI Stopped Being a Promising Technology and Became a Civilizational Force';

// Use JSON to create a properly escaped string
const escapedContent = JSON.stringify(postContent).slice(1, -1); // Remove surrounding quotes

const newPost = '\n  {\n    slug: "ai-influx-april-2026",\n    title: "' + postTitle + '",\n    excerpt: "' + postContent + '",\n    content: "' + escapedContent + '",\n    date: "2026-04-21",\n    categories: ["AI Strategy", "Industry Analysis"],\n    image: "/images/blog/ai-influx-april-2026-hero.png",\n    readTime: 8,\n  },';

blogTs = fs.readFileSync(base + '/app/blog/posts/index.ts', 'utf8');
blogTs = blogTs.slice(0, blogTs.lastIndexOf('];')) + newPost + '\n];';
fs.writeFileSync(base + '/app/blog/posts/index.ts', blogTs);
console.log('Blog post added');

// Verify what was written
const check = fs.readFileSync(base + '/app/blog/posts/index.ts', 'utf8');
const idx = check.indexOf('ai-influx-april');
if (idx >= 0) {
    console.log('Written content around ai-influx:');
    console.log(repr(check.slice(idx, idx+200)));
}