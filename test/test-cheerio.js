var fs = require('fs');
var lb2br = require('../lb2br');

var sample = fs.readFileSync("sample.txt", 'utf-8');
console.log(sample);

console.log("\n\n========================\n\n");

var output = lb2br(sample);
console.log(output);
