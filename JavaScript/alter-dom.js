const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.textContent = "Hi I'm Red";
paragraph.style.color = "red";
container.appendChild(paragraph)

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const newDiv = document.createElement("div");
newDiv.classList.add("newDiv");
newDiv.style.backgroundColor = "pink";
newDiv.style.border = "2px solid black";

container.appendChild(newDiv)

const h1 = document.createElement("h1")
h1.textContent = "I'm in a div"

const newDivNode = document.querySelector(".newDiv")
newDiv.appendChild(h1)

const p = document.createElement("p");
p.textContent = "ME TOO!"
newDiv.appendChild(p)

