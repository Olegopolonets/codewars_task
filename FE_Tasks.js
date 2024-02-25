// FE_Tasks

/*
 *  1. Створи функцію, яка приймає масив чисел і повертає масив з тими ж числами, але відсортованими в порядку зростання.
 */

// const numbers = [5, 3, 72, 1, 56, 907, 12.65, 23, -43, 500, 0, 999, -888];

// function sortNumbers(arr) {
//   let sortArr = arr.sort((a, b) => a - b);
//   console.log(sortArr);
// }

// sortNumbers(numbers);

/*
 *  2. Створи функцію, яка приймає рядок і повертає новий рядок, у якому перша літера кожного слова замінена на велику
 */

// let string =
//   "Eggs are required from them every day, otherwise you can find yourself among the dishes on the hosts dinner table.";

// function toUpperCase(str) {
//   let upperStr = str.split(" ").map((item) => item[0].toUpperCase() + item.slice(1));
//   console.log(upperStr.join(" "));
// }

// // .map((item) => item.slice(0, 1) + item[1].toUpperCase() + item.slice(2)); // 2 string

// toUpperCase(string);

/*
 *  3. Створи функцію, яка приймає масив об'єктів і повертає новий масив, в якому тільки ті об'єкти, властивість "age" яких більше або рівна 18.
 */

// const arrPeople = [
//   {
//     id: "1",
//     name: "Oleh",
//     age: 5,
//   },
//   {
//     id: "2",
//     name: "Asya",
//     age: 18,
//   },
//   {
//     id: "3",
//     name: "Kira",
//     age: 19,
//   },
// ];

// function isAdult(arr) {
//   let newArr = arr.filter((item) => item.age >= 18);
//   console.log(newArr);
// }

// isAdult(arrPeople);

/*
 *  4. Створи функцію, яка приймає масив чисел і повертає середнє арифметичне цих чисел.
 */

// let arr = [12, 76, 43, 5];

// function arithmeticMean(arr) {
//   let newArr = arr.reduce((a, b) => a + b) / arr.length;
//   console.log(+newArr.toFixed(2));
// }

// arithmeticMean(arr);

/*
 *  5. Створи функцію, яка приймає рядок і повертає новий рядок, у якому всі слова з великої літери записані в оберненому порядку.
 */

// let string = "eggs are required";

// function generateHashtag(str) {
//   let hash = "";
//   let reverseStr = [...str].reverse().join("");
//   reverseStr.split(" ").map((a) => {
//     hash += a.charAt(0).toUpperCase() + a.slice(1) + " ";
//   });
//   console.log(hash);
// }

// generateHashtag(string);

/*
 *  6. Створи функцію, яка приймає два аргументи - рядок та символ, і повертає кількість входжень цього символу в рядок.
 */

// function ifInString(str, char) {
//   let countChar = str.split("").filter((item) => item === char).length;
//   console.log(countChar);
// }

// ifInString("The village is so small that its entire length could be walked in 15 minutes.", "e");

/*
 *  7. Створи функцію, яка приймає масив чисел та повертає новий масив, який містить лише унікальні числа з вихідного масиву (тобто кожне число в новому масиві зустрічається тільки один раз).
 */

// function repeats(arr) {
//   let newArr = arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));
//   console.log(newArr);
// }

// repeats([4, 5, 7, 5, 4, 8]);
// repeats([9, 10, 19, 13, 19, 13]);

/*
 *  8. Створи функцію, яка приймає масив об'єктів з властивістю age та повертає середній вік цих об'єктів.
 */
// const arrPeople = [
//   {
//     id: "1",
//     name: "Oleh",
//     age: 5,
//   },
//   {
//     id: "2",
//     name: "Asya",
//     age: 18,
//   },
//   {
//     id: "3",
//     name: "Kira",
//     age: 19,
//   },
// ];

// function middleAge(arrObj) {
//   //   let newArr = arrObj.reduce((acc, person) => acc + person.age, 0) / arrObj.length;
//   //   console.log(newArr);
//   let count = 0;
//   let elements = 0;
//   for (let i = 0; i < arrObj.length; i++) {
//     count += arrObj[i].age;
//     elements += 1;
//   }
//   console.log(count / elements);
// }

// middleAge(arrPeople);

/*
 *  9. Створи функцію, яка приймає масив об'єктів з властивістю price та повертає найбільшу ціну з цих об'єктів.
 */

// const products = [
//   {
//     name: "Apple",
//     price: 5,
//   },
//   {
//     name: "Banana",
//     price: 7,
//   },
//   {
//     name: "Tomato",
//     price: 4,
//   },
//   {
//     name: "Cucumber",
//     price: 3,
//   },
//   {
//     name: "Orange",
//     price: 6,
//   },
// ];

// function totalPrice(products) {
//   // Перевірити, чи масив products не пустий
//   if (!products || !products.length) {
//     return undefined;
//   }
//   // Встановити початкове значення максимальної ціни
//   let maxPrice = products[0].price;
//   // Перебрати масив продуктів
//   for (const product of products) {
//     // Оновити максимальну ціну, якщо поточна ціна продукту більша
//     if (product.price > maxPrice) {
//       maxPrice = product.price;
//     }
//   }

//   console.log(maxPrice);
// }

// totalPrice(products);

/*
 *  10. Створи функцію, яка приймає масив об'єктів з властивістю name та повертає новий масив,
 * який містить тільки ті об'єкти, в яких ім'я починається з певної літери.
 */
// const arrPeople = [
//   {
//     id: "1",
//     name: "Oleh",
//     age: 5,
//   },
//   {
//     id: "2",
//     name: "Asya",
//     age: 18,
//   },
//   {
//     id: "3",
//     name: "Kira",
//     age: 19,
//   },
//   {
//     id: "4",
//     name: "Katya",
//     age: 20,
//   },
// ];

// function isFirstLetterTrue(obj, letter) {
//   let correctName = [];
//   let newArr = obj.map((item) => item.name);
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i].split("")[0].toLowerCase() === letter.toLowerCase()) {
//       correctName.push(newArr[i]);
//     }
//   }
//   console.log(correctName);
// }

// isFirstLetterTrue(arrPeople, "k");

/*
 *  11. Створи функцію, яка приймає масив чисел та повертає новий масив, в якому кожен елемент є квадратом відповідного елемента вхідного масиву.
 */

// function squareNumber(arrNum) {
//   let newArr = arrNum.map((item) => Math.pow(item, 2));
//   console.log(newArr);
// }

// squareNumber([0.9, 10, 19, -13]);

/*
 *  11. Створи функцію, яка приймає рядок та повертає новий рядок, в якому кожна літера перетворена на відповідну їй цифру в ASCII таблиці charCodeAt().
 */

function stringToAscii(str) {
  let asciiString = "";
  for (let i = 0; i < str.length; i += 1) {
    asciiString += str.charCodeAt(i) + " :|: ";
  }

  console.log(asciiString);
}

stringToAscii("abcdefghijklmnopqrstuvwxyz".toLocaleUpperCase());

stringToAscii("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
