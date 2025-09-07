function camelize(word) {
    return word
    .split("-")
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join("")
}

console.log("Camelize");
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// Filter Range

function filterRange(arr, a, b) {
    return arr.filter(number => (number >= a && number <= b))
}

console.log("\nFilter Range");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterRange(array, 3, 8));
console.log(array);

function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filterRangeInPlace(array2, 3, 8);
console.log("\nFilter Range In Place");
console.log(array2);

function sortInDecreatingOrder(arr) {
    var temp;
    var j;
    if (arr.length < 2) {return arr}
    for (let i = 0; i < arr.length; i++) {
        for (j = i+1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr)
}

console.log("Sort in decreasing order");
let array3 = [1, 2, 4, 6, 7];
sortInDecreatingOrder(array3);

function copySorted(arr) {
    var temp;
    var j;
    let newArr = arr.slice();
    if (newArr.length < 2) {return newArr}
    for (let i = 0; i < newArr.length; i++) {
        for (j = i+1; j < newArr.length; j++) {
            if (newArr[j] < newArr[i]) {
                temp = newArr[i]
                newArr[i] = newArr[j]
                newArr[j] = temp
            }
        }
    }
    return newArr
}

console.log("Copy Sorted");
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(arr)
console.log(sorted);

function shuffle(arr) {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    if (arr.length === 1) {
        return arr
    }
    for (var i = 0; i < arr.length; i++) {
        let randomIndex = getRandomInt(arr.length - 1);
        let currValue = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = currValue
    }
    return arr
}

console.log("Shuffle");
arr = [1,3,4];
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));

function unique (arr) {
    let uniqueArr = []
    for (var i = 0; i < arr.length; i ++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log("Unique");
console.log(unique(strings));