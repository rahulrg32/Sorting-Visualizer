async function mergesort() {
    await mergeSort(0, arraySize - 1);

    let bars = document.querySelectorAll(".bar");

    bars.forEach(bar => {
        bar.style.backgroundColor = "#79a001"; // green
    });  

    await delay(1000);

    bars.forEach(bar => {
        bar.style.backgroundColor = "#b123ac"; // purple
    }); 


}

async function mergeSort(start, end) {

    if (start < end) {
        let mid = (start + end) / 2;
        mid = Math.trunc(mid);
        await mergeSort(start, mid);
        await mergeSort(mid + 1, end);
        await merge(start, mid, end);
    } 
}

async function merge(start, mid, end) {
    let bars = document.querySelectorAll(".bar");

    bars[start].style.background = "#2883ac";  // blue
    bars[end].style.background = "#2883ac";  // blue
    await delay(delayTime);

    let i = start;
    let j = mid + 1;

    while (i < j && j <= end) {
        bars[i].style.backgroundColor = "#b18523"; // yellow color
        bars[j].style.backgroundColor = "#b18523"; // yellow color
        await delay(delayTime);


        const height1 = bars[i].clientHeight;
        const height2 = bars[j].clientHeight;

        if (height2 < height1) {
            bars[i].style.backgroundColor = "#b12323"; // red color
            bars[j].style.backgroundColor = "#b12323"; // red color
                       
            await insertBefore(bars[j], bars[i]);  // insert bars[j] before bars[i]
            bars = document.querySelectorAll(".bar");
            await delay(delayTime);

            bars[i].style.backgroundColor = "#b123ac";// purple color
            bars[i + 1].style.backgroundColor = "#b123ac";// purple color
            await delay(delayTime);

            j++;           
        } else {
            bars[i].style.backgroundColor = "#b123ac";// purple color
            bars[j].style.backgroundColor = "#b123ac";// purple color
            await delay(delayTime);
        }

        i++;
    }
}

document.getElementById("msb").addEventListener("click", mergesort);