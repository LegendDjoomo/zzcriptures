const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const scripts = [];
let re = /<script[^>]*>([\s\S]*?)<\/script>/gi;
let m;
while ((m = re.exec(html)) !== null) {
  scripts.push(m[1]);
}
console.log('Found', scripts.length, 'script blocks');
let errors = 0;
scripts.forEach((s, i) => {
  try {
    // try to create a function to validate syntax
    new Function(s);
    console.log(`Script ${i} OK`);
  } catch (e) {
    errors++;
    console.error(`Script ${i} SYNTAX ERROR:`, e.message);
    const lines = s.split('\n');
    console.error('--- snippet start ---');
    for (let j = 0; j < Math.min(10, lines.length); j++) console.error(`${j+1}: ${lines[j].slice(0,200)}`);
    console.error('--- snippet end ---');
  }
});
if (errors > 0) process.exit(1); else process.exit(0);
