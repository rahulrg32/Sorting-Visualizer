
const inputArraySize = document.getElementById("array-size");
let arraySize = inputArraySize.value;
const inputSortingSpeed = document.getElementById("sorting-speed");
const generateArrayButton = document.getElementById("new-array-button");
const arrayContainer = document.getElementById("array-container");
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
        // bar.style.transform = `translateX(${i * 30}px)`;
        arrayContainer.appendChild(bar);
    }
}

function updateArraySize() {
    arraySize = inputArraySize.value;
    generateArray();
}

window.onload = updateArraySize();

generateArrayButton.addEventListener("click", generateArray);
inputArraySize.addEventListener("input", updateArraySize);
inputSortingSpeed.addEventListener("input", updateArraySpeed);


function updateArraySpeed() {
    sortingSpeed = inputSortingSpeed.value;
    delayTime = 5000/sortingSpeed;
}



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



function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}





function delay(delayTime) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delayTime);
    });
} 

