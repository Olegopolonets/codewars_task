const inputOneValue = document.getElementById("multiplier1");
const inputTwoValue = document.getElementById("multiplier2");
const button = document.getElementById("button");
const textMultp = document.getElementById("textMultp");
const finalSum = document.getElementById("finalSum");

const validateNumber = (value) => {
  if (value === "") {
    return alert("Введіть значення");
  }

  if (/\s/.test(value)) {
    return alert("Введіть число без пробілів");
  }

  if (isNaN(value)) {
    return alert("Введіть дійсне число");
  }

  return true;
};

button.addEventListener("click", (event) => {
  event.preventDefault();
  const a = inputOneValue.value;
  const b = inputTwoValue.value;
  if (validateNumber(a) && validateNumber(b)) {
    let product = a * b;
    textMultp.textContent = product;
    let numArr = product.toString().split("");

    let result = numArr.reduce((accumulator, currentValue) => +accumulator + +currentValue, 0);

    finalSum.textContent = `${numArr}  ${result} `;
  }
});
