function add() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum + secondnum;
  document.getElementById("result").innerHTML = result;
}
function Subtract() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum - secondnum;
  document.getElementById("result").innerHTML = result;
}
function Multiply() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum * secondnum;
  document.getElementById("result").innerHTML = result;
}
function Divided() {
  let firstnum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstnum / secondnum;
  document.getElementById("result").innerHTML = result;
}

function calculateSquareRoot() {
  const num1 = parseFloat(document.getElementById("num1").value);
  document.getElementById("result").innerHTML = Math.sqrt(num1);
}

function calculatePower() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = Math.pow(num1, num2);
}
