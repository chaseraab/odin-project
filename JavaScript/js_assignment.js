function add7(number) {
    console.log(Number(number) + 7);
}
console.log("Add7")
add7(1);
add7(-7);
add7(0);
add7(10);

function multiply(n1, n2) {
    let product = Number(n1) * Number(n2);
    console.log(product);
}
console.log("Multiply")
multiply(1,2);
multiply(100, 3);
multiply(23, 54);

function capitalize(word) {
    let firstLetter = word.substring(0,1);
    let lastLetters = word.substring(1)
    let finalWord = firstLetter.toUpperCase() + lastLetters.toLowerCase();
    console.log(finalWord);
}

console.log("Capitalize");
capitalize("cHASE");
capitalize("THIS IS DOG");
capitalize("cat")

let lastLetter = function(input) {
    console.log(input[input.length - 1]);
}

console.log("Last Letter");
lastLetter("Good news everyone!");
lastLetter("To shreds you say?");
lastLetter("Rachael gets a cookie");
lastLetter("a");