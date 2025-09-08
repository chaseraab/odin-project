// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

// function alertFunction() {alert("Yay you did it!")}

// const btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click", alertFunction);

// const btn3 = document.querySelector("#btn3");
// btn3.addEventListener("click", function (e) {e.target.style.background = "blue"});
console.log("Hello")

const buttons = document.querySelectorAll("button")
console.log(buttons)
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
