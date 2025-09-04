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
