
const inputArraySize = document.getElementById("array-size");
const inputSortingSpeed = document.getElementById("sorting-speed");
const generateArrayButton = document.getElementById("new-array-button");
const arrayContainer = document.getElementById("array-container");
const algoButtons = document.querySelectorAll(".algo-buttons button");

let arraySize = inputArraySize.value;
let sortingSpeed = inputSortingSpeed.value;
let delayTime = 5000 / sortingSpeed;

function generateArray() {
    arrayContainer.innerHTML = "";
    
    padding = 500 - ((arraySize - 5) * 200 / 95);
    arrayContainer.style.paddingLeft = `${padding}px`;
    arrayContainer.style.paddingRight = `${padding}px`;

    for (let i = 0; i < arraySize; i++) {
        barHeight = Math.floor(Math.random() * 100) + 8;
        bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${barHeight * 3}px`;
        barWidth = (100 / arraySize) * 5;
        bar.style.width = `${barWidth}px`;
        arrayContainer.appendChild(bar);
    }
}

function updateArraySize() {
    arraySize = inputArraySize.value;
    generateArray();
}

function updateArraySpeed() {
    sortingSpeed = inputSortingSpeed.value;
    delayTime = 5000/sortingSpeed;
}

window.onload = updateArraySize();

generateArrayButton.addEventListener("click", generateArray);
inputArraySize.addEventListener("input", updateArraySize);
inputSortingSpeed.addEventListener("input", updateArraySpeed);



function insertBefore(el2, el1) {
    return new Promise((resolve) => {

        window.requestAnimationFrame(function () {
            setTimeout(() => {
                arrayContainer.insertBefore(el2, el1);
                resolve();
            }, delayTime);
        });

    });
}


function delay(delayTime) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delayTime);
    });
} 


function disableButtons() {
    for (let i = 0; i < algoButtons.length; i++) {
        algoButtons[i].disabled = true;
    }

    inputArraySize.disabled = true;
    generateArrayButton.disabled = true;
}

function enableButtons() {
    for (let i = 0; i < algoButtons.length; i++) {
        algoButtons[i].disabled = false;
    }

    inputArraySize.disabled = false;
    generateArrayButton.disabled = false;
}
