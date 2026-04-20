#!/usr/bin/env node
const fs = require('fs');

const draftContent = fs.readFileSync('blog-drafts/april-20-ai-divide.md', 'utf8');

// Convert markdown to the content string - the draft content uses real markdown
// We need to escape backticks and ${} for template literal
let content = draftContent
  .replace(/\\/g, '\\\\')  // escape backslashes first
  .replace(/`/g, '\\`')    // escape backticks
  .replace(/\$\{/g, '\\${'); // escape template expressions

// Build the TypeScript post
const newPost = `  {
    slug: "ai-vault-open-road-april-2026",
    title: "The AI Vault and the Open Road — April 2026's Defining Split",
    excerpt: "The most powerful AI model ever built is locked in a vault. Here's why that matters for your strategy — and what the April 2026 divide between closed frontier models and open-source alternatives means for every business making AI decisions right now.",
    content: \`${content}\`,
    date: "2026-04-20",
    categories: ["AI Strategy", "Open Source", "Business AI"],
    image: "/images/blog/ai-divide-april-2026-hero.png",
    readTime: 10,
  },`;

// Read the posts file
let lines = fs.readFileSync('app/blog/posts/index.ts', 'utf8').split('\n');

// Find the end of posts array (line with just "];")
let endLine = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === '];') {
    endLine = i;
    break;
  }
}

if (endLine === -1) {
  console.error('Could not find end of posts array');
  process.exit(1);
}

// Add comma after previous last post
lines[endLine - 1] = lines[endLine - 1].trimEnd() + ',';

// Insert new post before ];
const newPostLines = newPost.split('\n');
lines = [...lines.slice(0, endLine), ...newPostLines, ...lines.slice(endLine)];

// Write back
fs.writeFileSync('app/blog/posts/index.ts', lines.join('\n') + '\n');

console.log(`Done. Added post before line ${endLine + 1}`);
console.log(`File now has ${lines.length} lines`);