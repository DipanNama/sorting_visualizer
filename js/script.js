parentDiv = document.getElementById("parentDiv");
sortBtn = document.getElementById("sortBtn");

let arr = [80, 20, 50, 70, 60, 35, 70, 120, 20, 10, 110,150,45,25,75,40,55];

let k = 0;
arr.forEach(e => {
    let innerDiv = document.createElement('div');
    innerDiv.style.height = (e * 2 + 'px');
    innerDiv.style.width = (100 / arr.length + '%')
    innerDiv.style.backgroundColor = '#' + ((1<<24)*Math.random() | 1).toString(16);
    innerDiv.setAttribute('id', 'elem' + k);
    k++;
    innerDiv.classList.add("innerDiv")
    parentDiv.appendChild(innerDiv)
})

sortBtn.addEventListener('click', () => bubbleSort(arr));

async function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            await sleep(100)
            if (arr[j] > arr[j + 1]) {
                swapNumber(arr, j);
                swapHeight(j)
            }
        }
    }
}

const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

function swapNumber(arr, j) {
    let temp = arr[j]
    arr[j] = arr[j + 1]
    arr[j + 1] = temp
}

function swapHeight(j) {
    let a = 'elem' + j;
    let b = 'elem' + (j + 1);
    let e1 = document.getElementById(a);
    let e2 = document.getElementById(b);
    let bg1 = e1.style.backgroundColor;
    let bg2 = e2.style.backgroundColor;
    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;
    e1.style.backgroundColor = bg2;
    e2.style.backgroundColor = bg1;
    e1.style.height = h2 + 'px';
    e2.style.height = h1 + 'px';
}