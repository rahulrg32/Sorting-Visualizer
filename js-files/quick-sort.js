async function quicksort() {
    // let bars = document.querySelectorAll(".bar");

   await quickSort(0, arraySize - 1);

   let bars = document.querySelectorAll(".bar");

    bars.forEach(bar => {
        bar.style.backgroundColor = "#79a001"; // green
    });
}

async function quickSort(start, end) {

    if (start < end) {
        const partitioningIndex = await partition(start, end);
        await quickSort(start, partitioningIndex);
        await quickSort(partitioningIndex + 1, end)
    }

}


/* This function takes first element as pivot, and places all the elements smaller than the pivot on the
   left side and all the elements greater than the pivot on the right side. It returns the index of the last
   element on the smaller side*/

async function partition(start, end) {
    let bars = document.querySelectorAll(".bar");

    const pivot = bars[start];
    const pivotHeight = pivot.clientHeight;
    let i = start - 1;
    let j = end + 1;
    while (true) {
        // Find leftmost element greater than or equal to pivot

        let height1;
        do {
            i++;
            height1 = bars[i].clientHeight;
        } while (height1 < pivotHeight)

        // Find rightmost element smaller than or equal to pivot

        let height2;
        do {
            j--;
            
            height2 = bars[j].clientHeight;
        } while (height2 > pivotHeight)

        // If two pointers met.
        if (i >= j) {
            return j;
        } else {

            await swap(bars, i, j)
            // bars[i].style.height = `${height2}px`;
            // bars[j].style.height = `${height1}px`;
            bars = document.querySelectorAll(".bar");
        }

        
    }
}

async function swap(bars, i, j) {
    await delay();
    arrayContainer.insertBefore(bars[j], bars[i]);
    bars = document.querySelectorAll(".bar");            
    arrayContainer.insertBefore(bars[i + 1], bars[j].nextSibling);
    
}

document.getElementById("qsb").addEventListener("click", quicksort);
