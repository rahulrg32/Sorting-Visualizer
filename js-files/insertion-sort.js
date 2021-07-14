async function insertionSort() {
    disableButtons();

    let bars = document.querySelectorAll(".bar");

    bars[0].style.backgroundColor = "#79a001";// green color
    await delay(delayTime);

    for (let i = 1; i < arraySize; i++) {
        for (let j = i - 1; j >= -1; j--) {

            if (j == -1) {
                bars[0].style.backgroundColor = "#79a001";// green color
                await delay(delayTime);
                break;
            }

            const height1 = bars[j + 1].clientHeight;
            const height2 = bars[j].clientHeight;

            // yellow color
            bars[j].style.background = "#b18523";
            bars[j + 1].style.background = "#b18523";
            await delay(delayTime)

            if (height2 <= height1) {
                // green color
                bars[j].style.backgroundColor = "#79a001";
                bars[j + 1].style.backgroundColor = "#79a001";
                await delay(delayTime);
                break;
            }

            // red color
            bars[j].style.backgroundColor = "#b12323";
            bars[j + 1].style.backgroundColor = "#b12323";

            await insertBefore(bars[j + 1], bars[j]);  // swap bars[j + 1] and bars[j]
            await delay(delayTime);
            bars = document.querySelectorAll(".bar");

            bars[j + 1].style.backgroundColor = "#79a001";// green color 

        }
    }

    await delay(1200)

    bars.forEach(bar => {
        bar.style.backgroundColor = "#b123ac"; // purple color
    });

    enableButtons();
}

document.getElementById("isb").addEventListener("click", insertionSort);