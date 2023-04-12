function calculate(num1, num2, operator) {

  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Infinite";
    }
    return num1 / num2;
  }
  else if (isNaN(num1) || isNaN(num2)) {
    return "Please enter valid numbers!";
  }
  else if (operator === "") {
    return "Please select an operator!";
  }
  else {
    return null;
  }
}




function performOperations() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var result = document.getElementById("result");
  var operator = document.getElementById("operator").value;
  var button = document.getElementById("btn");

  const res = calculate(parseFloat(num1), parseFloat(num2), operator);
  button.style.borderRadius = "50%"
  button.style.padding = "10px"
  button.style.backgroundColor = "green"
  button.style.color = "white"

  result.textContent = "Result is : " + res;
  result.style.backgroundColor = "crimson"
  result.style.color = "white"
  result.style.padding = "10px 10px 10px 10px"
  result.style.border = "1px solid black"
}

