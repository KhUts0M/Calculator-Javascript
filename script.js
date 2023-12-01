function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function applyPercentage() {
  const currentValue = parseFloat(document.getElementById("display").value);
  const percentageValue = currentValue / 100;
  document.getElementById("display").value = percentageValue;
}

function calculate() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
