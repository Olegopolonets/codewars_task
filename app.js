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

//  howMuchILoveYou(42);
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
//
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
//      sumPositve += arr[i];
//     modArr.push(arr[i]);
//   }
// }
//  console.log(sumPositve);

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

/*
 *  Gravity Flip
 */
// const flip = (d, arr) => {
//   let sortArr;
//   d === "R" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
// };

// if (d === "R") {
//   sortArr = arr.sort((a, b) => a - b);
//   console.log(sortArr);
// } else if (d === "L") {
//   sortArr = arr.sort((a, b) => b - a);
//   console.log(sortArr);
// }

// flip("R", [13, 2, 62, 4, 7, 93]);
// flip("L", [1, 4, 5, 3, 5]);

/*
 *  Grasshopper - Summation
 */

// var summation = function (num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i += 1) {
//     sum += i;
//   }
//   console.log((num * (num + 1)) / 2);
// };

// summation(8);

/*
 *  Well of Ideas - Easy Version

 */

// function well(x) {
//   let goodsIdea = x.filter((item) => item === "good");
//   if (goodsIdea.length === 0) {
//     console.log("Fail!");
//   } else if (goodsIdea.length > 0 && goodsIdea.length < 2) {
//     console.log("Publish!");
//   } else {
//     console.log("I smell a series!");
//   }
// }

// well(["bad", "bad", "bad"]);
// well(["good", "bad", "bad", "bad", "bad"]);
// well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"]);

/*
 *  Find out whether the shape is a cube
 */

// var cubeChecker = function (volume, side) {
//   if (side > 0 && side * side * side === volume) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// //   return side > 0 && side * side * side === volume ? true : false;
// };

// cubeChecker(-8, -2);
// cubeChecker(0, 0);

/*
 *  String repeat
 */

// function repeatStr(n, s) {
//   let newStr = "";

//   for (let i = 0; i < n; i += 1) {
//     newStr += s;
//   }
//   console.log(newStr);
// }

// console.log(s.repeat(n));

// repeatStr(2, "ha ");

/*
 *  All Star Code Challenge #18
 */

// function strCount(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// strCount("Hello", "o");
// strCount("Hello", "l");
// strCount("", "e");

/*
 * List Filtering
 */

// function filter_list(l) {
//   console.log(l.filter((item) => typeof item == "number"));
// }

// filter_list([1, 2, "a", "b"]);

// filter_list([1, "a", "b", 0, 15]);

/*
 * Return Negative
 */

// function makeNegative(num) {
//   console.log(num > 0 ? num * -1 : num);
// }

// makeNegative(42);
// makeNegative(-42);
// makeNegative(0);
// makeNegative(10);

/*
 * Find numbers which are divisible by given number
 */

// function divisibleBy(numbers, divisor) {
//   let newArr = numbers.filter((item) => item % divisor === 0);
//   console.log(newArr);
// }

// divisibleBy([1, 2, 3, 4, 5, 6], 2);
// divisibleBy([0, 1, 2, 3, 4, 5, 6], 4);
// divisibleBy([1, 3, 5], 2);

/*
 * Get the mean of an array
 */

// function getAverage(marks) {
//   let newArr = Math.floor(marks.reduce((a, b) => a + b) / marks.length);
//   console.log(newArr);
// }

// getAverage([2, 2, 2, 2]);
// getAverage([67, 199, 21, 2]);
// getAverage([14, 63, 52, 12]);
// getAverage([1, 2, 3, 4, 5]);

/*
 * Sum of positive
 */

// function positiveSum(arr) {
//   let newArr = arr.filter((item) => item >= 0).reduce((a, b) => a + b, 0);
//   console.log(newArr);
// }

// positiveSum([1, 2, 3, 4, 5]);
// positiveSum([-1, -2, -3, -4, -5]);
// positiveSum([-1, 2, 3, 4, -5]);

/*
 * Reversed Strings
 */
// function solution(str) {
// let arr = [];
// for (let i = 0; i < str.length; i++) {
//   arr.push(str[i]);
// }
// console.log(arr.reverse().join().replace(/,/g, ""));
//   console.log(str.split("").reverse().join(""));
// }

// solution("world");
// solution("");
// solution("h");

/*
 * Rock Paper Scissors!
 */

// const rps = (p1, p2) => {
//   let winOnePlayer = 1;
//   let winTwoPlayer = 2;

//   if (p1 === p2) {
//     console.log("Draw!");
//   } else if (
//     (p1 === "rock" && p2 === "scissors") ||
//     (p1 === "scissors" && p2 === "paper") ||
//     (p1 === "paper" && p2 === "rock")
//   ) {
//     console.log(`Player ${winOnePlayer} won!`);
//   } else {
//     console.log(`Player ${winTwoPlayer} won!`);
//   }
// };

// rps("rock", "scissors");
// rps("scissors", "paper");
// rps("paper", "rock");
// rps("rock", "paper");
// rps("paper", "scissors");
// rps("rock", "rock");

/*
 * Pirates!! Are the Cannons ready!??
 */

// let a = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" };
// let b = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };

// const cannonsReady = (gunners) => {
// let count = 0;
// for (const key in gunners) {
//   if (gunners[key] === "aye") {
//     count++;
//   }
// }
// console.log(count === Object.keys(gunners).length ? "Fire!" : "Shiver me timbers!");

//  let countTrue = Object.values(gunners).filter((item) => item === "aye").length;
// console.log(countTrue === Object.keys(gunners).length ? "Fire!" : "Shiver me timbers!");
//   console.log(Object.values(gunners).some((m) => m === "nay") ? "Shiver me timbers!" : "Fire!");
// };

// cannonsReady(a);
// cannonsReady(b);

/*
 * Sum of array singles
 */
// function repeats(arr) {
//   // const counts = {};
//   // for (const num of arr) {
//   //   counts[num] = (counts[num] || 0) + 1;
//   // }

//   // let uniqueSum = 0;

//   // for (const num of arr) {
//   //   if (counts[num] === 1) {
//   //     uniqueSum += num;
//   //   }
//   // }
//   // console.log(uniqueSum);

//   let newArr = arr
//     .filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))
//     .reduce((a, b) => a + b);
//   console.log(newArr);
// }

// repeats([4, 5, 7, 5, 4, 8]); // 15
// repeats([9, 10, 19, 13, 19, 13]); // 19

/*
 * The Hashtag Generator
 */

// function generateHashtag(str) {
//   let trimStr = str.replace(/\s+/g, "");
//   if (trimStr.length >= 140 || trimStr.length === 0) {
//     return false;
//   }
//   let newArr = str.split(" ").filter((item) => item !== "");
//   let pasteStr = newArr.map((item) => item[0].toUpperCase() + item.slice(1));
//   console.log(`#${pasteStr.join("")}`);
// }

// // function generateHashtag (str) {
// //   var hash = '#';
// //   str.split(' ').map(a => {
// //     hash += a.charAt(0).toUpperCase() + a.slice(1);
// //   });
// //   return hash != '#' && hash.length <= 140 ? hash : false;
// // }

// generateHashtag("Codewars is nice");
// generateHashtag("");
// generateHashtag("Hello world");
// generateHashtag("Do We have A Hashtag    ");
// generateHashtag("");

/*
 * Remove the minimum
 */

// function removeSmallest(newArr) {
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] === Math.min(...newArr)) {
//       newArr.splice(i, 1);
//       break;
//     }
//   }
//   console.log(newArr);
// }

// removeSmallest([7, 2, 3, 4, 5, 2]);

/*
 * Shortest Word
 */

// function findShort(s) {
//   // let words = s.split(" ");
//   // let shortestWord = words[0];
//   // for (let i = 0; i < words.length; i++) {
//   //   if (words[i].length < shortestWord.length) {
//   //     shortestWord = words[i];
//   //   }
//   // }
//   // console.log(shortestWord);
//   let minLength = s.split(" ").sort((a, b) => a.length - b.length)[0].length || 0;
//   console.log(minLength);
// }

// findShort("bitcoin take over the world maybe who knows perhaps");

/*
 * Odd Ones Out!
 */

// function oddOnesOut(list) {
//   const counts = {};

//   for (const num of list) {
//     counts[num] = (counts[num] || 0) + 1;
//   }
//   console.log("counts", counts);

//   console.log(list.filter((num) => counts[num] % 2 === 0));
// }

// oddOnesOut([1, 2, 3, 1, 3, 3]);

// oddOnesOut([75, 68, 75, 47, 68]);

/*
 *  FizzBuzz
 */

// for (let i = 1; i <= 100; i += 1) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }
