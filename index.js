const romans = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

const arabics = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
};

function romanToInt(num) {
  if (num === '') {
    throw new Error('The parameter is empty, insert a roman algorithm');
  } else if (!isNaN(num)) {
    throw new Error('The parameter contains arabics algorithms or a space, insert only romans algorithms without space');
  } else {
    let romanNumInArray = num.split('');
    romanNumInArray.map(el => {
      if (romans[el] === undefined) {
        throw new Error('The parameter contains arabics algorithms or a space, insert only romans algorithms without space');
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
  var numToInt = num * 1;
  if (arabics[numToInt] !== undefined) {
    return arabics[numToInt];
  } else if (num === '') {
    throw new Error('The parameter is empty, insert a arabic algorithm');
  } else {
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
      let arrayOfArabicsKeys = getArrayOfKeysAsNumber(arabics);
      var remainder = numToInt;
      let arrayOfRomansNumbers = getRomansAlgorithms(arrayOfArabicsKeys, remainder);
      return joinTextsOfArray(arrayOfRomansNumbers);
    }
  }
}

function getRomansAlgorithms(arrayOfArabicsKeys, remainder) {
  let arrayOfRomansNumbers = [];
  do {
    let arrayOfFilteredKeys = arrayOfArabicsKeys.filter(toFilterArabicKeys.bind(this, remainder));
    let lastKeyOfFilteredKeys = arrayOfFilteredKeys[arrayOfFilteredKeys.length - 1];
    let romanAlgarithm = arabics[lastKeyOfFilteredKeys];
    let getRepeatTimes = getIntegerNumberFromDivision(remainder, lastKeyOfFilteredKeys);
    if (getRepeatTimes < 2) {
      arrayOfRomansNumbers.push(romanAlgarithm);
    } else {
      arrayOfRomansNumbers.push(romanAlgarithm.repeat(getRepeatTimes));
    }
    remainder = remainder % lastKeyOfFilteredKeys;
    if (arabics[remainder] !== undefined) {
      arrayOfRomansNumbers.push(arabics[remainder]);
      remainder = 0;
    }
  } 
  while(remainder !== 0);
  return arrayOfRomansNumbers;
}

function getArrayOfKeysAsNumber(obj) {
  return Object.keys(obj).map(Number);
}

function toFilterArabicKeys(num, key) {
  return ((num / key) > 1) && ((num / key) < 4);
}

function getIntegerNumberFromDivision(numOne, numTwo) {
  return parseInt(numOne / numTwo);
}

function joinTextsOfArray(arr) {
  return arr.reduce((total, num) => total + num);
}

module.exports = {
  romanToInt,
  intToRoman,
};