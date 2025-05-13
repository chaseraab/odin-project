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