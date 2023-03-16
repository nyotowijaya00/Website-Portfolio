var inputNumberOri = document.getElementById('input-number');
var finalOutput = document.getElementById('content-output');

document.getElementById('myButton').addEventListener('click', showFunction);

function showFunction() {
    let outputElement = document.createElement('p');
    let inputNumber = inputNumberOri.value

    if (inputNumber == 0 || inputNumber === "") {
        outputElement.innerHTML = "Invalid!";
        outputElement.style.color = "red";
    } else if (inputNumber % 3 === 0) {
        outputElement.innerHTML = "Fizz!";
    } else if (inputNumber % 5 === 0) {
        outputElement.innerHTML = "Buzz!";
    } else if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
        outputElement.innerHTML = "FizzBuzz!";
    } else {
        outputElement.innerHTML = inputNumber;
    }

    finalOutput.appendChild(outputElement);
}