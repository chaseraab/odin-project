# CSS Notes

CSS is made up of various rules. These rules are made up of a aslector and a semicolon-separated list of declarations with each of those declarations being made up of a property-value pair

## Selectors
Refer to the HTML elements to which CSS rules apply

### Universal selector
Will be applied to elements of every type
* {
    color: purple;
}
Every element will have the color purple applied to it

### Type Selectors 
also known as element selectors, type selectors will select all elements of the given type

<div>Hello, World!</div>
<div>Hello again!</div>
<p>Hi...</p>
<div>Okay, bye.</div>

div {
  color: white;
}
This will apply the color white to all div elements

### Class Selectors
Selects all elements with the given class, which is just an attribute you place on an HTML element

<div class="alert-text">Please agree to our terms of service.</div>

.alert-text {
  color: red;
}

You can add multiple classes to a single element in a space-separated list like
class="alert-text severe-alert"

### ID Selectors
Similar to class selectors
Elements can only have a single ID but can have multiple classes

<div id="title">My Awesome 90's Page</div>

#title {
  background-color: red;
}
IDs are denoted using a hashtag
IDs should be used sparingly

### Group Selector
Both .read and .unread use color which and background-color black which is repetetive. 

.read {
  color: white;
  background-color: black;
  /* several unique declarations */
}

.unread {
  color: white;
  background-color: black;
  /* several unique declarations */
}

We can combine shared declarations into a group selector

.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}

### Chaining Selectors
You can chain selectors in a list without separation

<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>

Each element has two classes

.subsection.header {
  color: red;
}
This selector will be applied to any element which has both the subsection and header classes

<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">
    This is where a preview for a post might go.
  </p>
</div>

.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
This can also be done with IDs as shown above
You cannot chain two different types of selectors (ex div and p)

## Descendant Combinator
Combinators allow us to combine multiple selectors differently than either grouping or chaining them as they show a relationship between the selectors

Descendant combinators only cause elements that match the last selector to be selected if they also have an ancestor (parent) that matches the previous selector

<div class="ancestor">
  <!-- A -->
  <div class="contents">
    <!-- B -->
    <div class="contents"><!-- C --></div>
  </div>
</div>

<div class="contents"><!-- D --></div>

.ancestor .contents {
  /* some declarations */
}

Only the content classes which are inside the ancestor class will be selected

## Properties

* color - sets the text color
* background-color - sets the background color of the element

Example of property values

p {
  /* hex example: */
  color: #1100ff;
}

p {
  /* rgb example: */
  color: rgb(100, 0, 127);
}

p {
  /* hsl example: */
  color: hsl(15, 82%, 56%);
}

[CSS Legal Color Values](https://www.w3schools.com/cssref/css_colors_legal.php)

* font-family - single value or comma separated list of values that determine what font an element uses
  * A list of values should often be used in the event the browser cannot find the font specified
  * ex: font-family: "Times New Roman", serif;

* font-size - size of the font
  * ex: font-size: 22px

* font-weight - affects the boldness of text
  * ex: font-weight: bold

* text-align - will elight text horizontally within an element
  * ex: text-align: center

* image heigh and width
  * We can set height or width to auto to keep it scalable with the other property

img {
  height: auto;
  width: 500px;
}

## Adding CSS to HTML

### External CSS
Create a separate file and linking it inside of an HTML's opening and closing <head> tags with a void <link> element

<!-- index.html -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>

/* styles.css */
div {
  color: white;
  background-color: black;
}

p {
  color: red;
}

### Internal CSS
AKA embedded CSS
Adds CSS within the HTML file itself instead of creating a completely separate file. All rules are placed within <style> elements inside of the <head> element

Useful for making a single page different

### Inline CSS
Adds styles directly to HTML elements but isn't recommended

<body>
  <div style="color: white; background-color: black;">...</div>
</body>

Does not use selectors