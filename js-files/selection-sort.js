
async function selectionSort() {

    let bars = document.querySelectorAll(".bar");

    for (let i = 0; i < arraySize; i++) {
        let min = i;
        bars[min].style.backgroundColor = "#b12323"; // red color
        await delay(delayTime);

        for (let j = i + 1; j < arraySize; j++) {

            const height1 = bars[min].clientHeight;
            const height2 = bars[j].clientHeight;

            bars[j].style.background = "#b18523"; // yellow color
            await delay(delayTime)

            if (height2 < height1) {
                if (min == i) {
                    bars[min].style.backgroundColor = "#b18523"; // yellow color
                } else {
                    bars[min].style.backgroundColor = "#b123ac"; // purple color
                }

                min = j;
                bars[min].style.backgroundColor = "#b12323"; // red color
                await delay(delayTime)
            } else {
                bars[j].style.backgroundColor = "#b123ac";// purple color
            }

        }

        if (min != i) {
            await insertBefore(bars[min], bars[i]); // insert bars[min] before bars[i];
            await delay(delayTime);
            bars = document.querySelectorAll(".bar");
            bars[min].style.backgroundColor = "#b123ac";// purple color
        }

        bars[i].style.backgroundColor = "#79a001"; // green color

    }

    await delay(2000)

    bars.forEach(bar => {
        bar.style.backgroundColor = "#b123ac"; // purple color
    });
}




document.getElementById("ssb").addEventListener("click", selectionSort);