document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(
    ".button, .button-operator, .button-equals"
  );
  let currInput = "";
  let prevInput = "";
  let operator = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const val = this.getAttribute("data-val");

      if (val === "C") {
        currInput = "";
        prevInput = "";
        operator = "";
        display.textContent = "";
      } else if (val === "=") {
        if (currInput && prevInput && operator) {
          currInput = evaluate(prevInput, currInput, operator);
          display.textContent = currInput;
          prevInput = "";
          operator = "";
        }
      } else if (["+", "-", "*", "/"].includes(val)) {
        if (currInput) {
          operator = val;
          prevInput = currInput;
          currInput = "";
        }
      } else {
        currInput += val;
        display.textContent = currInput;
      }
    });
  });

  function evaluate(num1, num2, operator) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    switch (operator) {
      case "+":
        return (a + b).toString();
      case "-":
        return (a - b).toString();
      case "*":
        return (a * b).toString();
      case "/":
        return (a / b).toString();
      default:
        return "";
    }
  }
});
