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

let string =
  "Eggs are required from them every day, otherwise you can find yourself among the dishes on the hosts dinner table.";

function toUpperCase(str) {
  let upperStr = str.split(" ").map((item) => item[0].toUpperCase() + item.slice(1));
  console.log(upperStr.join(" "));
}

toUpperCase(string);
