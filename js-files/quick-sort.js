async function quicksort() {
    disableButtons();

    await quickSort(0, arraySize - 1);
    await delay(1000);

    let bars = document.querySelectorAll(".bar");

    bars.forEach(bar => {
        bar.style.backgroundColor = "#b123ac";// purple color
    });

    enableButtons();
}

async function quickSort(start, end) {

    if (start < end) {
        const partitioningIndex = await partition(start, end);
        await quickSort(start, partitioningIndex);

        let bars = document.querySelectorAll(".bar");
        for (let i = 0; i <= partitioningIndex; i++) {
        bars[i].style.backgroundColor = "#79a001"; // green
        }

        await quickSort(partitioningIndex + 1, end)

        bars = document.querySelectorAll(".bar");
        for (let i = partitioningIndex + 1; i <= end; i++) {
            bars[i].style.backgroundColor = "#79a001"; // green
        }
    }

}


/* This function takes first element as pivot, and places all the elements smaller than the pivot on the
   left side and all the elements greater than the pivot on the right side. It returns the index of the last
   element on the smaller side*/

async function partition(start, end) {
    let bars = document.querySelectorAll(".bar");

    const pivot = bars[start];
    const pivotHeight = pivot.clientHeight;
    pivot.style.background = "#2883ac";  // blue
    await delay(delayTime);
    let i = start - 1;
    let j = end + 1;
    while (true) {
        // Find leftmost element greater than or equal to pivot

        let height1;
        do {
            i++;
            bars[i].style.backgroundColor = "#b18523"; // yellow color
            await delay(delayTime)
            height1 = bars[i].clientHeight;
            bars[i].style.backgroundColor = "#b123ac";// purple color
            pivot.style.background = "#2883ac";  // blue

        } while (height1 < pivotHeight)

        bars[i].style.backgroundColor = "#b18523"; // yellow color
        await delay(delayTime)


        // Find rightmost element smaller than or equal to pivot

        let height2;
        do {
            j--;
            bars[j].style.backgroundColor = "#b18523"; // yellow color
            await delay(delayTime)
            height2 = bars[j].clientHeight;
            bars[j].style.backgroundColor = "#b123ac";// purple color
            pivot.style.background = "#2883ac";  // blue

        } while (height2 > pivotHeight)

        bars[i].style.backgroundColor = "#b12323"; // red color
        bars[j].style.backgroundColor = "#b12323"; // red color

        // If two pointers met.
        if (i >= j) {
            await delay(delayTime)
            bars[i].style.backgroundColor = "#b123ac";// purple color
            bars[j].style.backgroundColor = "#b123ac";// purple color 
            pivot.style.background = "#2883ac";  // blue

            return j;
        } else {

            await swap(bars, i, j);
            await delay(delayTime);
            bars = document.querySelectorAll(".bar");

            bars[i].style.backgroundColor = "#b123ac";// purple color
            bars[j].style.backgroundColor = "#b123ac";// purple color
            pivot.style.background = "#2883ac";  // blue


        }


    }
}

function swap(bars, i, j) {
    return new Promise((resolve) => {

        window.requestAnimationFrame(function () {
            setTimeout(() => {
                arrayContainer.insertBefore(bars[j], bars[i]);
                bars = document.querySelectorAll(".bar");
                arrayContainer.insertBefore(bars[i + 1], bars[j].nextSibling);
                resolve();
            }, delayTime);
        });

    });

}

document.getElementById("qsb").addEventListener("click", quicksort);
