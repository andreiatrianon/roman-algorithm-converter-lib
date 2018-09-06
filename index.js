const romans = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

const unitaries = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX'
};

const dozens = {
  1: 'X',
  2: 'XX',
  3: 'XXX',
  4: 'XL',
  5: 'L',
  6: 'LX',
  7: 'LXX',
  8: 'LXXX',
  9: 'XC'
};

const hundreds = {
  1: 'C',
  2: 'CC',
  3: 'CCC',
  4: 'CD',
  5: 'D',
  6: 'DC',
  7: 'DCC',
  8: 'DCCC',
  9: 'CM'
};

const millions = {
  1: 'M',
  2: 'MM',
  3: 'MMM'
};

function romanToInt(num) {
  if (num === '') {
    throw new Error('The parameter is empty, insert a roman algorithm');
  } else if (!isNaN(num)) {
    throw new Error('The parameter contains arabics algorithms, insert only romans algorithms');
  } else {
    let romanNumInArray = num.split('');
    romanNumInArray.map(el => {
      if (romans[el] === undefined) {
        throw new Error('The parameter contains arabics algorithms, insert only romans algorithms');
      }
    });
    let arrayOfConvertedNumbers = getArrayOfConvertedNumbers(romanNumInArray);
    let arrayOfNumbersToSum = getArrayOfNumbersToSum(arrayOfConvertedNumbers);
    return arrayOfNumbersToSum.reduce((total, num) => total + num);
  }
}

function getArrayOfConvertedNumbers(arrayWithRomansNumbers) {
  return arrayWithRomansNumbers.map(el => romans[el]);
}

function getArrayOfNumbersToSum(arrayWithNumbers) {
  return arrayWithNumbers.map((el, i) => {
    if (arrayWithNumbers[i + 1] > el) {
      return arrayWithNumbers[i + 1] - el;
    } else if(arrayWithNumbers[i - 1] < el) {
      return 0;
    } else {
      return el;
    }
  });
}

function intToRoman(num) {
  if (num === '') {
    throw new Error('The parameter is empty, insert a arabic algorithm');
  } else {
    let numToInt = num * 1;
    if (numToInt === 0) {
      throw new Error('The parameter is zero, insert a arabic algorithm between 1 and 3999');
    } else if (numToInt < 0) {
      throw new Error('The parameter is less than zero, insert a arabic algorithm between 1 and 3999');
    } else if (isNaN(numToInt)) {
      throw new Error('The parameter contais a text, insert a arabic algorithm without text');
    } else if (numToInt > 3999) {
      throw new Error('The parameter is greater than 3999, insert a arabic algorithm between 1 and 3999');
    } else if (numToInt % 1 !== 0) {
      throw new Error('The parameter is a float number, insert a integer number');
    } else {
      let numInArray = numToInt.toString().split('');
      if (numInArray.length === 1) {
        return unitaries[numInArray[0]];
      } else if (numInArray.length === 2) {
        return convertTwoIntDigits(numInArray);
      } else if (numInArray.length === 3) {
        return convertThreeIntDigits(numInArray);
      } else {
        return convertFourIntDigits(numInArray);
      }
    }
  }
}

function convertTwoIntDigits(arrayWithNumbers) {
  let lengthOfArray = arrayWithNumbers.length;
  if (arrayWithNumbers[1] === '0') {
    return dozens[arrayWithNumbers[lengthOfArray - 2]];
  } else {
    return dozens[arrayWithNumbers[lengthOfArray - 2]] + unitaries[arrayWithNumbers[lengthOfArray - 1]];
  }
}

function convertThreeIntDigits(arrayWithNumbers) {
  let lengthOfArray = arrayWithNumbers.length;
  if (arrayWithNumbers[1] === '0' && arrayWithNumbers[2] === '0') {
    return hundreds[arrayWithNumbers[lengthOfArray - 3]];
  } else if (arrayWithNumbers[1] === '0') {
    return hundreds[arrayWithNumbers[lengthOfArray - 3]] + unitaries[arrayWithNumbers[2]];
  } else {
    return hundreds[arrayWithNumbers[lengthOfArray - 3]] + convertTwoIntDigits(arrayWithNumbers);
  }
}

function convertFourIntDigits(arrayWithNumbers) {
  let lengthOfArray = arrayWithNumbers.length;
  if (arrayWithNumbers[1] === '0' && arrayWithNumbers[2] === '0' && arrayWithNumbers[3] === '0') {
    return millions[arrayWithNumbers[lengthOfArray - 4]];
  } else if (arrayWithNumbers[2] === '0' && arrayWithNumbers[3] === '0') {
    return millions[arrayWithNumbers[lengthOfArray - 4]] + hundreds[arrayWithNumbers[1]];
  } else if (arrayWithNumbers[1] === '0' && arrayWithNumbers[2] === '0') {
    return millions[arrayWithNumbers[lengthOfArray - 4]] + unitaries[arrayWithNumbers[3]];
  } else if (arrayWithNumbers[1] === '0') {
    return millions[arrayWithNumbers[lengthOfArray - 4]] + convertTwoIntDigits(arrayWithNumbers);
  } else {
    return millions[arrayWithNumbers[lengthOfArray - 4]] + convertThreeIntDigits(arrayWithNumbers);
  }
}

module.exports = {
  romanToInt,
  intToRoman,
};