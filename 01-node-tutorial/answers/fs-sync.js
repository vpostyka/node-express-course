const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'temporary', 'fileA.txt');

fs.writeFileSync(filePath, 'This is line 1\n', { flag: 'w' });  // 'w' flag to create a new file
fs.writeFileSync(filePath, 'This is line 2\n', { flag: 'a' });  // 'a' flag to append to the file
fs.writeFileSync(filePath, 'This is line 3\n', { flag: 'a' });  // 'a' flag to append to the file

const data = fs.readFileSync(filePath, 'utf-8');

console.log(data);
