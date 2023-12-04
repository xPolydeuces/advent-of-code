const fs = require('fs')
const filePath = '2023/day1/input.txt'

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
      console.error(`Error reading the file: ${err.message}`);
      return;
  }

  const splitFile = data.split('\n')
  const calibrationValues = []

  
  findCalibrationValue(splitFile, calibrationValues)
  const result = sumCalibrationValues(calibrationValues)
  console.log(result)
});



function sumCalibrationValues(array) {
  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0);
  return sum
}

function findCalibrationValue(file,array) {
  for (const row of file) {
    let firstDigit;
    let lastDigit;
    for (const char of row) {
      if (!isNaN(parseInt(char))) {
        if (!firstDigit) firstDigit = char
        lastDigit = char
      }
    }
    if (firstDigit) array.push(parseInt(firstDigit+lastDigit))
  }
}
