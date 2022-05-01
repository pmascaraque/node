const fs = require('fs');

const filename = process.argv[2];

const file = fs.readFileSync(filename, 'utf8');

const content = file.split('\n').length - 1;

console.log(content);