var fs = require('fs');

const filePath = process.argv[2];

const buf = fs.readFileSync(filePath);
const fileString = buf.toString();
const newArray = fileString.split('\n');
// console.log(newArray);
console.log(newArray.length - 1);