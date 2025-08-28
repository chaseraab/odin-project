# JavaScripts Notes
## Variables and Operators
https://www.theodinproject.com/lessons/foundations-variables-and-operators

The following is how JS is called via an html page
```
<body>
    <script>
        console.log("Hello World!")
    </script>
</body>
```

JS can also be called from a file similar to CSS
```
<script src="javascript.js"></script>
```
JS files use the .js extension

### Variables
Variables can be defined with 'let'

```
        let name = "John";
        let surname = "Doe";

        console.log(name);
        console.log(surname);
```

let is not necessary when redefining variables.

'const' is used when the assigned value is permanent.

```
        const pi = 3.14;
        pi = 10;

        console.log(pi);
```
This will throw an error

'var' was the original variable declaration but has since been replaced by 'let'.

### Numbers
```
console.log((3 + 2) - 76 * (1 + 1));
```

## Installing Node.js
https://www.theodinproject.com/lessons/foundations-installing-node-js

Node.js is a JavaScript runtime environment that allows you to run JavaScript outside your web browser.

nvm (Node Version Manager) is used to install and manage node

Node is installed. To open a node console type 'node' into the console. To quit, type '.exit'.

```
chaseraab@MacBook-Pro odin-project % node
Welcome to Node.js v22.18.0.
Type ".help" for more information.
> console.log("hello world");
hello world
undefined
> .exit
chaseraab@MacBook-Pro odin-project %
```

## Data Types and Conditionals
https://www.theodinproject.com/lessons/foundations-data-types-and-conditionals

https://javascript.info/types
- JavaScript is dynamically typed
- Number type represents both integer and floating point number
    - Special numeric values: Infinity, -Infinity, NaN
    - bigInt is used for numbers greater than 9007199254740991
- Strings need to be surrounded by single quotes, double quotes or backticks
    - Single and double quotes function the same 
    - Backticks allow for extended functionality such as embedding variables or expressions
```
<script>
"use strict";

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
</script>
```
    - The expression inside `${...}` is evaluated and the result becomes part of the string

In JavaScript null means: nothing, empty or unknown instead of non-existent

Undefined means "value is not assigned"

### Strings
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings

#### Concatenation
JavaScript/string-button.html
- window.prompt() function prompts the user to answer a question via a popup dialog box

You can use + for concatenation

```
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
```

Template literals are more readable however

```
const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"
```

#### Multiline strings

```
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

#### Numbers vs Strings

```
const name = "Front ";
const number = 242;
console.log(name + number); // "Front 242"
```
The browser understands that the number should be treated like a string in this situation

The Number() function will convert a passed value into a number
The String() function will convert a passed value into a string

https://www.w3schools.com/js/js_string_methods.asp

### Conditionals

https://javascript.info/comparison
https://javascript.info/logical-operators
https://www.w3schools.com/js/js_if_else.asp

#### Single line conditions

```
let result = condition ? value1 : value2;
```

Conditions can be chained together:

```
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

```

The `?` can be a replacement for `if`

```
<!DOCTYPE html>
<script>
"use strict";

let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
</script>
```
#### Switch Statement

https://javascript.info/switch

```
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

```
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}
```

Cases can be bundled together if they desire the same result for multiple conditions

```
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
```

require() imports code from another file

### Recap questions:
What are the eight data types in JavaScript?
1. Number
2. bigInt
3. string
4. boolean
5. null
6. undefined
7. symbol
8. object

Which data type is not primitive?
Objects. A primitive type can only store a single value but objects are more complex than that.

What is the relationship between null and undefined?
undefined - a value is not assigned
null - empty or unknown

Whats the difference between single, double and backtick quotes for string?
Single and double quotes accomplish the same thing but always need to be used in conjunction with themselves. Backticks is used for string resolution.

What is the term for joining strings together?
Concatenation

Which type of quote lets you embed variables/ expressions in a string?
Backticks

How do you use escape characters in a string?
use a \ in conjunction withh the quote
```const bigmouth = 'I\'ve got no right to take my place…';```

What is the difference between the slice and substring methods?
slice extracts part of a string and returns the extracted part
Substring is different in that the second argument is the length of the string and not the position

What are the three logical operators?
|| - or
&& - and
! - not

## JavaScript Developer Tools
https://www.theodinproject.com/lessons/foundations-javascript-developer-tools

### DOM
https://developer.chrome.com/docs/devtools/dom/

Document object model
HTML initial page contents
DOM current page contents

### Device Mode
https://developer.chrome.com/docs/devtools/device-mode/

Icon at the top of the inspect window

### Debugging JavaScript

https://developer.chrome.com/docs/devtools/javascript/

The sources panel (in the inspector) is where you debug javascript
You can perform typical debugging actions from this area. It might be best to rewatch this video the first time you use it.

### Supplemental content
https://www.youtube.com/watch?v=xkzDaKwinA8

## Function Basics
https://www.theodinproject.com/lessons/foundations-function-basics

Example of a JS function:

```
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))
```

### Function Expressions
https://javascript.info/function-expressions

This is a very good article and is worth re-reading

```
let sayHi = function() {
  alert( "Hello" );
};
```

- A function expression is when the function declaration is on the right side of the assignment expression
- Does not require the function to be named

Anonymous functions have no name

```
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```
The two functions being declared inside the ask arguments are anonymous.

### JavaScript Call Stack

A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions. It has information on what function is being run and what functions are invoked from within that function.
- Also used to manage execution contexts
- LIFO (Last in first out)

The call stack will add whatever function call its currently working on to the top of the stack, this way the most recently called function will always be at the top of the stack. Once the call to that function complets, its poped off the stack and the next function call is executed.

A stack overflow is an error which occurs when the number of function calls exceeds the space provided by the stack.

### Docs on JS functions
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions
https://javascript.info/function-expressions
https://www.javascripttutorial.net/javascript-call-stack/

