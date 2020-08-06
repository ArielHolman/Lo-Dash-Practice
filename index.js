const _ = require("lodash")
const poop = require("lodash/fp/reverse")

const createNumbers = (amount) => {
  const arrOfNums = [3]
  let count = 0

  while (count < amount) {
    arrOfNums.push(Math.floor(Math.random() * 100))
    count++
  }

  return arrOfNums
}

console.log(createNumbers(100))

// eslint-disable-next-line prettier/prettier
const randomNumber = [
  3,
  76,
  55,
  77,
  74,
  19,
  93,
  20,
  58,
  9,
  13,
  38,
  93,
  13,
  27,
  47,
  44,
  20,
  80,
  93,
  12,
  3,
  88,
  92,
  20,
  21,
  16,
  57,
  12,
  7,
  62,
  79,
  60,
  93,
  15,
  58,
  1,
  21,
  56,
  51,
  37,
  10,
  98,
  4,
  25,
  76,
  28,
  8,
  72,
  97,
  27,
  59,
  16,
  6,
  64,
  61,
  40,
  0,
  33,
  69,
  87,
  37,
  52,
  31,
  74,
  11,
  46,
  98,
  64,
  17,
  28,
  48,
  48,
  85,
  38,
  19,
  3,
  95,
  11,
  44,
  46,
  49,
  39,
  32,
  96,
  17,
  24,
  15,
  55,
  63,
  83,
  92,
  62,
  55,
  73,
  42,
  33,
  80,
  63,
  74,
  97,
]

const myArray = [6, 7, 13, 76, 25, 0, 5]

const randomlyDivide = (arr) => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.floor(Math.random() * arr[i]))
  }
  return newArr
}

console.log(randomlyDivide(randomNumber))

console.log("chunk", _.chunk(randomNumber, 15))
console.log("reverse", poop(myArray))
console.log("without", _.without(myArray, 7, 76, 0))
console.log("shuffle", _.shuffle(myArray, 15))
console.log("min", _.min(myArray))
console.log("sum", _.sum(myArray))
console.log("indexOf", _.indexOf(myArray, 25, 0))
