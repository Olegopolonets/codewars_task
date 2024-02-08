// FE_Tasks

/*
 *  1. Створи функцію, яка приймає масив чисел і повертає масив з тими ж числами, але відсортованими в порядку зростання.
 */

const numbers = [5, 3, 72, 1, 56, 907, 12.65, 23, -43, 500, 0, 999, -888];

function sortNumbers(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  console.log(sortArr);
}

sortNumbers(numbers);
