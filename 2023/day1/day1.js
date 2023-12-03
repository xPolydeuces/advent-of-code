const fs = require('fs')
const filePath = '2023/day1/input.txt'

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
      console.error(`Error reading the file: ${err.message}`);
      return;
  }

  console.log(data);
});
