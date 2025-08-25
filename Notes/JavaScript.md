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

