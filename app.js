// function invert(array) {
//   return console.log(array.map((i) => -i));
// }

// invert([1, 2, 3, 4, 5]);
// invert([1, -2, 3, -4, 5]);
// invert([]) == [];

// function fixTheMeerkat(arr) {
//   return console.log(arr.reverse());
// }

// fixTheMeerkat(["tail", "body", "head"]);

//  ["head", "body", "tail"]

// const stringToNumber = function (str) {
//   return console.log(+str);
// };

// stringToNumber("1234");

// function sumArray(arr) {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   const sum = arr.reduce((a, b) => a + b, 0) - (min + max);
//   console.log(sum);
// }

// sumArray([6, 2, 1, 8, 10]);
// sumArray([0, 1, 6, 10, 10]); //17

// Sum Numbers
// function sum(numbers) {
//   return console.log(numbers.reduce((a, b) => a + b, 0));
// }

// sum([]);
// sum([1, 5.2, 4, 0, -1]);
// function howMuchILoveYou(nbPetals) {
//   const arr = [
//     "I love you",
//     "a little",
//     "a lot",
//     "passionately",
//     "madly",
//     "not at all",
//   ];

//   return console.log(arr[nbPetals % arr.length]);
// }

// // howMuchILoveYou(42);
// howMuchILoveYou(66);
// howMuchILoveYou(8);

// function monkeyCount(n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(i + 1);
//   }
//   console.log(arr);
// }

// monkeyCount(60);

// function grow(x) {
//   return console.log(x.reduce((a, b) => a * b));
// }

// grow([3, 2, 2, 2, 2, 8]);

// function powersOfTwo(n) {
//   let arr = [];
//   for (let i = 0; i <= n; i++) {
//     arr.push(Math.pow(2, i));
//   }
//   console.log(arr);
// }

// powersOfTwo(4);

// function findMultiples(integer, limit) {
//   let arr = [];

//   for (let i = integer; i <= limit; i += integer) {
//     arr.push(i);
//   }
//   console.log(arr);
// }
// findMultiples(5, 25);

// let arr = [undefined, null, false, true];

// function countSheeps(sheep) {
//   let sumTrue = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === true) {
//       sumTrue += 1;
//     } else {
//       sumTrue += 0;
//     }
//   }
//   //
//   console.log(sheep.filter(Boolean).length);
// }

// countSheeps(arr);

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, -11, -12, -13, -14, -15];

// function countPositivesSumNegatives(arr) {
//   let positeve = arr.filter((item) => item > 0).length;
//   let negative = arr
//     .filter((item) => item < 0)
//     .reduce((a, b) => {
//       return a + b;
//     }, 0);
//   console.log([positeve, negative]);
// }

// countPositivesSumNegatives(array);

// for (let i = 0; i < arr.length; i += 0) {
//   if (arr[i] > 0) {
//     // sumPositve += arr[i];
//     modArr.push(arr[i]);
//   }
// }
// // console.log(sumPositve);

// let arrayOne = [1, 2, 3];
// let arrayTwo = [4, 5, 6];

// function arrayPlusArray(arr1, arr2) {
//   let sum = 0;
//   let allArr = [...arr1, ...arr2].reduce((a, b) => a + b, 0);
//   console.log("sum : ", allArr);
//   // return sum;
// }

// arrayPlusArray(arrayOne, arrayTwo);

// function feast(beast, dish) {
//   if (
//     beast[0] === dish[0] &&
//     beast[beast.length - 1] === dish[dish.length - 1]
//   ) {
//     return true;
//   }
//   return false;
// }

// feast("great blue heron", "garlic naan");
// feast("chickadee", "chocolate cake");
// feast("brown bear", "bear claw");

const flip = (d, arr) => {
  if (d === "R") {
    let sortArr = arr.sort();
    console.log(sortArr);
  } else if (d === "L") {
    let sortArr = arr.sort().reverse();
    console.log(sortArr);
  }
};

flip("R", [3, 2, 1, 2]);
flip("L", [1, 4, 5, 3, 5]);
