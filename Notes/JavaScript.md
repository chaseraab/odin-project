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