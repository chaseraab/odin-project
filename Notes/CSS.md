# CSS Notes

CSS is made up of various rules. These rules are made up of a aslector and a semicolon-separated list of declarations with each of those declarations being made up of a property-value pair

## Selectors
Refer to the HTML elements to which CSS rules apply

### Universal selector
Will be applied to elements of every type
```
* {
    color: purple;
}
```
Every element will have the color purple applied to it

### Type Selectors 
also known as element selectors, type selectors will select all elements of the given type

```
<div>Hello, World!</div>
<div>Hello again!</div>
<p>Hi...</p>
<div>Okay, bye.</div>

div {
  color: white;
}
```
This will apply the color white to all div elements

### Class Selectors
Selects all elements with the given class, which is just an attribute you place on an HTML element

```
<div class="alert-text">Please agree to our terms of service.</div>

.alert-text {
  color: red;
}
```

You can add multiple classes to a single element in a space-separated list like
```class="alert-text severe-alert"```

### ID Selectors
Similar to class selectors
Elements can only have a single ID but can have multiple classes
```
<div id="title">My Awesome 90's Page</div>

#title {
  background-color: red;
}
```
IDs are denoted using a hashtag
IDs should be used sparingly

### Group Selector
Both .read and .unread use color which and background-color black which is repetetive. 
```
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
```
We can combine shared declarations into a group selector
```
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
```
### Chaining Selectors
You can chain selectors in a list without separation
```
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```
Each element has two classes
```
.subsection.header {
  color: red;
}
```
This selector will be applied to any element which has both the subsection and header classes

```
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
```
This can also be done with IDs as shown above
You cannot chain two different types of selectors (ex div and p)

## Descendant Combinator
Combinators allow us to combine multiple selectors differently than either grouping or chaining them as they show a relationship between the selectors

Descendant combinators only cause elements that match the last selector to be selected if they also have an ancestor (parent) that matches the previous selector
```
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
```
Only the content classes which are inside the ancestor class will be selected

## Properties

* color - sets the text color
* background-color - sets the background color of the element

Example of property values
```
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
```
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
```
img {
  height: auto;
  width: 500px;
}
```
## Adding CSS to HTML

### External CSS
Create a separate file and linking it inside of an HTML's opening and closing <head> tags with a void <link> element
```
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
```
### Internal CSS
AKA embedded CSS
Adds CSS within the HTML file itself instead of creating a completely separate file. All rules are placed within <style> elements inside of the <head> element

Useful for making a single page different

### Inline CSS
Adds styles directly to HTML elements but isn't recommended
```
<body>
  <div style="color: white; background-color: black;">...</div>
</body>

## The Cascade of CSS
Browsers have default styles which can explain unaccounted for or unintentional results on our webpages.

The 'cascade' is what determines which rules actually get applied to our HTML. There are different factors that the cascade uses to determine this. 

### Specify
A CSS declaration that is more specific will take precedence over less specific ones. Inline styles have the highest specificity compared to selectors while each type of selector has its own specificity level that contributes to how specific a declaration is.

** Hierarchy of cascade **
1. ID selectors (most specific selector)
2. Class selectors
3. Type selectors
4. Anything else

Example:

```
<!-- index.html -->

<div class="main">
  <div class="list subsection">Red text</div>
</div>
```

```
/* rule 1 */
.subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

The div element will end up having red text since rule 2 will be applied. It will be applied as the presence of multiple classes makes it more specific.

```
<!-- index.html -->

<div class="main">
  <div class="list" id="subsection">Blue text</div>
</div>
```

```
/* rule 1 */
#subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

In this case rule 1 will be applied since the ID takes precedence over the class.

```
<!-- index.html -->

<div class="main">
  <div class="list" id="subsection">Red text on yellow background</div>
</div>
```

```
#subsection {
  background-color: yellow;
  color: blue;
}

/* rule 2 */
.main #subsection {
 color: red;
}
```

The red text gets applied since rule 2 contains an ID selector as well as a class selector which makes it more specific.

```
/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class .second-class {
  font-size: 24px;
}
```
Both rules have the same specificty.

```
/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class > .second-class {
  font-size: 24px;
}
```
Both rules have the same specificity. The '>' does not add to the specificity.

### Inheritance
CSS properties which are inherited by an elements descendants. Targetting an element directly will always override inheritance. 

```
<!-- index.html -->

<div id="parent">
  <div class="child"></div>
</div>
```

```
/* styles.css */

#parent {
  color: red;
}

.child {
  color: blue;
}
```
The child element will have the color blue since its being specifically targetted. Red from the parent is inherited.

### Rule Order
When there are 'ties' or conflicts, the last defined rule will be applied.

```
/* styles.css */

.alert {
  color: red;
}

.warning {
  color: yellow;
}
```
If an element has both alert and warning classes, the warning class will be applied since it was defined after the alert class.

## Inspecting CSS and HTML

### Inspector
You can right-click any element of a webpage and click "Inspect" or press F12

### Inspecting Elements
Elements panel shows the HTML breakdown of the current page
When an element is selected, the styles tab will show the styles applied to the selected element.

### Testing styles in the inspector
The Styles panel allows you to edit styles directly in the browser. This is helpful for testing out certain styles without editing the source code.

## The Box Model
Being able to place elements in the correct location is the most important part of web design.
Every single thing on a webpage is a rectangular box. These boxes can have other boxes in them and can sit alongside one another.
You can get an idea of the boundaries of the rectangles by using the following selector:
```
* {
  outline: 2px solid red;
}
```
How to manipulate the boxes:
* padding: increases the space between the border of a box and the content of the box
* border: adds space between the margin and the padding
* margin: increases the space between the borders of a box and the borders of adjacent boxes
  * Separates items from each other

## Learn CSS Box Model in 8 Minutes Video
https://www.youtube.com/watch?v=rIO5326FgPE&ab_channel=WebDevSimplified

One of the best ways to alter the size of your box is through padding.
Using the inspector in chrome you can see the padding, border and margin of elements
box-sizing
- Defines how the size of an element is determined
- Setting to border-box means that an elements size as set by height and width will include padding and border.
Margin is not included in the size of an element

## box-sizing: border-box video
https://www.youtube.com/watch?v=HdZHcFWcAd8

box-sizing options
- border-box
  - Set size includes border and padding
- content-box
  - Padding and border get added to the set size

Typically border-box is used because its easier to estimate the size of the element

## MDN - The Box Model
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model

### Block and inline boxes
Block boxes and inline boxes
- The type refers to how the box behaves in terms of page flow and in relation to other boxes on the page
Boxes have an inner display type and an outer display type
Display types can be set using the [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) property
Block display value:
  - The box will not break onto a new line
  - The width and height properties are respected
  - Padding, margin and border will cause other elements to be pushed away from the box
  - If width is not specified, the box will extend in the inline direction to fill the pace available in its container. 
  - HTML elements such as ```<p>``` and ```<h1>``` use block as default
