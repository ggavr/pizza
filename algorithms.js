//1 bubble sort O(n**2) quadratic difficulty
const arrr = [8, 2, 3, 4, 6, 7, 1]

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {

                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]

                swapped = true;
            }
        }
    } while (swapped)
    return arr
}

bubbleSort(arrr)

function bubbleSort2(arr) {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
            }
        }
    }

    return arr;
}

//2 Binary Search O(log n)
function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) return mid
        else if (arr[mid] < target) left = mid + 1
        else right = mid - 1
    }
    return -1
}

console.log(binarySearch(arrr, 8))

function binarySearchRec(arr, target, left = 0, right = arr.length - 1) {
    if (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found, return the index
        } else if (arr[mid] < target) {
            return binarySearch(arr, target, mid + 1, right); // Search in the right half
        } else {
            return binarySearch(arr, target, left, mid - 1); // Search in the left half
        }
    }

    return -1; // Target not found
}

