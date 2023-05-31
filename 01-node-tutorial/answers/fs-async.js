const {writeFile, appendFile} = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'temporary', 'fileB.txt');

writeFile(filePath, 'This is line 1\n', 'utf8', (err) => {
  if (err) throw err;
  console.log('Line 1 written');

  appendFile(filePath, 'This is line 2\n', 'utf8', (err) => {
    if (err) throw err;
    console.log('Line 2 written');

    appendFile(filePath, 'This is line 3\n', 'utf8', (err) => {
      if (err) throw err;
      console.log('Line 3 written');
    });
  });
});
