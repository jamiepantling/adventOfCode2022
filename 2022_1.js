const fs = require("fs");
let string = fs.readFileSync("2022_1_data.txt").toString();
let highest = 0;
let secondHighest = 0;
let thirdHighest = 0;
let splitString = string.split("\n");
let subTotal = 0;

splitString.forEach((number, idx) => {
  if (number) subTotal += parseInt(number);
  else {
    if (subTotal > highest) {
      highest = subTotal;
      console.log("highest now: ", highest);
    }
    subTotal = 0;
  }
  if (idx == splitString.length - 1) {
    if (subTotal > highest) {
      highest = subTotal;
      console.log("highest now: ", highest);
    }
    subTotal = 0;
  }
});
splitString.forEach((number, idx) => {
  if (number) subTotal += parseInt(number);
  else {
    if (subTotal > secondHighest && subTotal != highest) {
      secondHighest = subTotal;
      console.log("second highest now: ", secondHighest);
    }
    subTotal = 0;
  }
  if (idx == splitString.length - 1) {
    if (subTotal > secondHighest && subTotal != highest) {
      secondHighest = subTotal;
      console.log("second highest now: ", secondHighest);
    }
    subTotal = 0;
  }
});
splitString.forEach((number, idx) => {
  if (number) subTotal += parseInt(number);
  else {
    if (
      subTotal > thirdHighest &&
      subTotal != highest &&
      subTotal != secondHighest
    ) {
      thirdHighest = subTotal;
      console.log("third highest now: ", thirdHighest);
    }
    subTotal = 0;
  }
  if (idx == splitString.length - 1) {
    if (
      subTotal > thirdHighest &&
      subTotal != highest &&
      subTotal != secondHighest
    ) {
      thirdHighest = subTotal;
      console.log("third highest now: ", thirdHighest);
    }
    subTotal = 0;
  }
});

console.log("total = ", highest + secondHighest + thirdHighest)
