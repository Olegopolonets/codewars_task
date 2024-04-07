const textInputOne = document.getElementById("multiplier1");
const textInputTwo = document.getElementById("multiplier2");
const button = document.getElementById("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  let a = textInputTwo.value;
  let b = textInputOne.value;
  let product = a * b;
  let numArr = product.toString().split("");
  console.log("numArr: ", numArr);
  let result = numArr.reduce((a, b) => +a + +b);
  console.log("result : ", result);
});
