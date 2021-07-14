
async function bubbleSort() {
    disableButtons();

    let bars = document.querySelectorAll(".bar");

    for (let i = 0; i < arraySize; i++) {
        for (let j = 0; j < arraySize - i - 1; j++) {

            // yellow color
            bars[j].style.background = "#b18523";
            bars[j + 1].style.background = "#b18523";

            await delay(delayTime)

            const height1 = bars[j].clientHeight;
            const height2 = bars[j + 1].clientHeight;

            if (height1 > height2) {
                // red color
                bars[j].style.backgroundColor = "#b12323";
                bars[j + 1].style.backgroundColor = "#b12323";

                await insertBefore(bars[j + 1], bars[j]);  // swap bars[j + 1] and bars[j]
                await delay(delayTime);
                bars = document.querySelectorAll(".bar");
            }

            // purple color
            bars[j].style.backgroundColor = "#b123ac";
            bars[j + 1].style.backgroundColor = "#b123ac";

            await delay(delayTime);

        }

        // green color
        bars[arraySize - i - 1].style.backgroundColor = "#79a001";
    }

    await delay(delayTime)

    bars.forEach(bar => {
        bar.style.backgroundColor = "#b123ac";
    });

    enableButtons();
}




document.getElementById("bsb").addEventListener("click", bubbleSort);