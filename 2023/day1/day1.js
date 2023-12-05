const fs = require('fs')
const filePath = '2023/day1/input.txt'

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
      console.error(`Error reading the file: ${err.message}`);
      return;
  }

  const splitFile = data.split('\n')
  const calibrationValues = []

  
  //findCalibrationValue(splitFile, calibrationValues)
  
  findWithRegex(splitFile, calibrationValues)
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

function findWithRegex(file, array) {
  const regex = /(?:one|two|three|four|five|six|seven|eight|nine|[1-9])/gi
  for (const row of file) {
    let match;
    const matches = []
    while ((match = regex.exec(row)) !== null) {
      matches.push(match[0])
    }
    const calibrationValue = parseInt(convertToNumber(matches[0])+convertToNumber(matches[matches.length-1]))
    if (!isNaN(calibrationValue)) array.push(calibrationValue)
  }
  console.log(array)
}

function convertToNumber(textNumber) {
  const numberMap = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
  };

  return numberMap[textNumber] || textNumber;
}
