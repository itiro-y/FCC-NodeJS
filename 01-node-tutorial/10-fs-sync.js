const {readFileSync, writeFileSync} = require('fs');

// reaFileSync uses utf-8 as default
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

writeFileSync('./content/result.txt-sync.txt', `Here is the result: ${first}, ${second + '\n'}`, {flag: 'a'});

console.log('done with this tast');
console.log('starting the next one');
