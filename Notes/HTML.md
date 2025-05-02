*HTML Notes*

https://www.theodinproject.com/lessons/foundations-elements-and-tags

List of HTML tags: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements

Homepages of a website should always be named "index.html"
Every HTML page should start with a doctype declaration. This tells the web browser which version of html the page should be rendered with
    <!DOCTYPE html>

Every HTML pages also needs a root HTML element which all elements will exist inside
<html lang="en">
</html>
    lang is an html element

Head element
    <head>
    Contains important meta data about our webpage and stuff required for the webpage to be rendered correctly
    Do not include any element which displays on the webpage
    Always include the meta tag with the charset inside of the head element
        This ensures the proper symbols will be displayed

Title element
    <title>
    used to give webpages a human-readable title which is displayed in our webpage's browser tab

Body element
    This is where the content will be displayed

VSCode boilerplate shortcut
    Entering '!' on the first line and pressing enter will automatically populate the page with biolerplate information

Paragraph elements can section text into blocks
<p></p>

Header elements can create headings
<h1></h1>

Strong element
<strong></strong>
    bolds text and marks as important

Em element makes text italic

When one element is nested inside of another, the nested element is a child of the element in which its nesting

Comments
<!-- This will not be visible -->
VSCode shortcut: Cmd + /

*Lists
Unordered
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

[Links and Images](odin-links-and-images/index.html)
To create a link in HTML we use the anchor element. 
<a></a>
    links require a hypertext reference attribute (href)

Opening links in a new tab
    the target attribute defines where a link will be opened
    target defaults to _self (current tab)
    _blank will open the link in a new window or tab

    The rel attribute describes the relation between the current page and the linked document
        noopener ensures that a link opened in a new tab or wndow cannot interact with or access the original page
    
        noreferrer attribute provies both privacy and security by preventing the new page from knowing where the user came from

        These attributes should always be included to provide security and privacy

Absolute and relative links

Absolute links always contain scheme://domain/path
Relative links are within our own website

Images
Images as displayed using the <img> element
Uses the src attribute to determine the location of the file

Parent Directories
use .. to nativate up a directory

Alt attribute
alt attribute is used to describe an image. It will be used in place of the image if it cannot be loaded.

Image size attributes
Not required
Good for specifying the height and width of a displayed image