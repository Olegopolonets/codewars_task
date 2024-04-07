const inputOneValue = document.getElementById("multiplier1");
const inputTwoValue = document.getElementById("multiplier2");
const button = document.getElementById("button");
const textMultp = document.getElementById("textMultp");
const finalSum = document.getElementById("finalSum");

const validateNumber = (value) => {
  if (value === "") {
    return "Введіть значення";
  }

  if (/\s/.test(value)) {
    return "Введіть число без пробілів";
  }

  if (isNaN(value)) {
    return "Введіть дійсне число";
  }

  return true;
};

button.addEventListener("click", (event) => {
  event.preventDefault();
  const a = inputOneValue.value;
  const b = inputTwoValue.value;
  if (a === "" || isNaN(a)) {
    return alert("Введіть значення");
  }

  let product = a * b;
  textMultp.textContent = product;
  let numArr = product.toString().split("");
  console.log("numArr: ", numArr);
  let result = numArr.reduce((accumulator, currentValue) => +accumulator + +currentValue, 0);
  console.log("result : ", result);
  finalSum.textContent = result;
});
