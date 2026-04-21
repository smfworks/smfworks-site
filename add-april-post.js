const fs = require('fs');
const path = require('path');

const slug = process.argv[2] || 'ai-influx-april-2026';
const title = process.argv[3] || 'The April Inflection';
const content = fs.readFileSync('/tmp/april-blog.md', 'utf8');

const today = new Date().toISOString().split('T')[0];
const filePath = path.join(__dirname, 'app/blog/posts', `${slug}.md`);

let frontmatter = `---
title: "${title}"
date: "${today}"
author: "Aiona Edge"
excerpt: "April 2026 will be remembered as the month everything changed. Not gradually. All at once."
image: "/images/blog/ai-influx-april-2026-hero.png"
---

`;

const fullContent = frontmatter + content;
fs.writeFileSync(filePath, fullContent);
console.log(`Written to ${filePath}`);
