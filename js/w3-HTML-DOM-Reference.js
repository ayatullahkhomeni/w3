// HTML DOM Documents
// The Document Object
let url1 = window.document.URL;
let url2 = document.URL;

// Document Object Properties and Methods

activeElement	//Returns the currently focused element in the document
addEventListener()	//Attaches an event handler to the document
adoptNode()	//Adopts a node from another document
anchors	//Deprecated
applets	//Deprecated 
baseURI	//Returns the absolute base URI of a document
body	//Sets or returns the document's body (the <body> element)
charset	//Deprecated
characterSet	//Returns the character encoding for the document
close()	//Closes the output stream previously opened with document.open()
cookie	//Returns all name / value pairs of cookies in the document
createAttribute()	//Creates an attribute node
createComment()	//Creates a Comment node with the specified text
createDocumentFragment()	//Creates an empty DocumentFragment node
createElement()	//Creates an Element node
createEvent()	//Creates a new event
createTextNode()	//Creates a Text node
defaultView	//Returns the window object associated with a document, or null if none is available.
designMode	//Controls whether the entire document should be editable or not.
doctype	//Returns the Document Type Declaration associated with the document
documentElement	//Returns the Document Element of the document(the < html > element)
documentMode	//Deprecated
documentURI	//Sets or returns the location of the document
domain	//Returns the domain name of the server that loaded the document
domConfig	//Deprecated
embeds	//Returns a collection of all < embed > elements the document
execCommand()	//Deprecated
forms	//Returns a collection of all < form > elements in the document
getElementById()	//Returns the element that has the ID attribute with the specified value
getElementsByClassName()	//Returns an HTMLCollection containing all elements with the specified class name
getElementsByName()	//Returns an live NodeList containing all elements with the specified name
getElementsByTagName()	//Returns an HTMLCollection containing all elements with the specified tag name
hasFocus()	//Returns a Boolean value indicating whether the document has focus
head	//Returns the < head > element of the document
images	//Returns a collection of all < img > elements in the document
implementation	//Returns the DOMImplementation object that handles this document
importNode()	//Imports a node from another document
inputEncoding	//Deprecated
lastModified	//Returns the date and time the document was last modified
links	//Returns a collection of all < a > and < area > elements in the document that have a href attribute
normalize()	//Removes empty Text nodes, and joins adjacent nodes
normalizeDocument()	//Deprecated
open()	//Opens an HTML output stream to collect output from document.write()
querySelector()	//Returns the first element that matches a specified CSS selector(s) in the document
querySelectorAll()	//Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document
readyState	//Returns the(loading) status of the document
referrer	//Returns the URL of the document that loaded the current document
removeEventListener()	//Removes an event handler from the document(that has been attached with the addEventListener() method)
renameNode()	//Deprecated
scripts	//Returns a collection of < script > elements in the document
strictErrorChecking	//Deprecated
title	//Sets or returns the title of the document
URL	//Returns the full URL of the HTML document
write()	//Writes HTML expressions or JavaScript code to a document
writeln()	//Same as write(), but adds a newline character after each statement 

// HTML DOM Elements
// The Element Object
// Properties and Methods

accessKey	//Sets or returns the accesskey attribute of an element
addEventListener()	//Attaches an event handler to an element
appendChild()	//Adds(appends) a new child node to an element
attributes	//Returns a NamedNodeMap of an element's attributes
blur()	//Removes focus from an element
childElementCount	//Returns an elements's number of child elements
childNodes	//Returns a NodeList of an element's child nodes
children	//Returns an HTMLCollection of an element's child elements
classList	//Returns the class name(s) of an element
className	//Sets or returns the value of the class attribute of an element
click()	//Simulates a mouse - click on an element
clientHeight	//Returns the height of an element, including padding
clientLeft	//Returns the width of the left border of an element
clientTop	//Returns the width of the top border of an element
clientWidth	//Returns the width of an element, including padding
cloneNode()	//Clones an element
closest()	//Searches the DOM tree for the closest element that matches a CSS selector
compareDocumentPosition()	//Compares the document position of two elements
contains()	//Returns true if a node is a descendant of a node
contentEditable	//Sets or returns whether the content of an element is editable or not
dir	//Sets or returns the value of the dir attribute of an element
firstChild	//Returns the first child node of an element
firstElementChild	//Returns the first child element of an element
focus()	//Gives focus to an element
getAttribute()	//Returns the value of an element's attribute
getAttributeNode()	//Returns an attribute node
getBoundingClientRect()	//Returns the size of an element and its position relative to the viewport
getElementsByClassName()	//Returns a collection of child elements with a given class name
getElementsByTagName()	//Returns a collection of child elements with a given tag name
hasAttribute()	//Returns true if an element has a given attribute
hasAttributes()	//Returns true if an element has any attributes
hasChildNodes()	//Returns true if an element has any child nodes
id	//Sets or returns the value of the id attribute of an element
innerHTML	//Sets or returns the content of an element
innerText	//Sets or returns the text content of a node and its descendants
insertAdjacentElement()	//Inserts a new HTML element at a position relative to an element
insertAdjacentHTML()	//Inserts an HTML formatted text at a position relative to an element
insertAdjacentText()	//Inserts text into a position relative to an element
insertBefore()	//Inserts a new child node before an existing child node
isContentEditable	//Returns true if an element's content is editable
isDefaultNamespace()	//Returns true if a given namespaceURI is the default
isEqualNode()	//Checks if two elements are equal
isSameNode()	//Checks if two elements are the same node
isSupported()	//Deprecated
lang	//Sets or returns the value of the lang attribute of an element
lastChild	//Returns the last child node of an element
lastElementChild	//Returns the last child element of an element
matches()	// Returns true if an element is matched by a given CSS selector
namespaceURI	// Returns the namespace URI of an element
nextSibling	// Returns the next node at the same node tree level
nextElementSibling	// Returns the next element at the same node tree level
nodeName	// Returns the name of a node
nodeType	//Returns the node type of a node
nodeValue	//Sets or returns the value of a node
normalize()	//Joins adjacent text nodes and removes empty text nodes in an element
offsetHeight	//Returns the height of an element, including padding, border and scrollbar
offsetWidth	//Returns the width of an element, including padding, border and scrollbar
offsetLeft	//Returns the horizontal offset position of an element
offsetParent	//Returns the offset container of an element
offsetTop	//Returns the vertical offset position of an element
outerHTML	//Sets or returns the content of an element(including the start tag and the end tag)
outerText	//Sets or returns the outer text content of a node and its descendants
ownerDocument	//Returns the root element(document object) for an element
parentNode	//Returns the parent node of an element
parentElement	//Returns the parent element node of an element
previousSibling	//Returns the previous node at the same node tree level
previousElementSibling	//Returns the previous element at the same node tree level
querySelector()	//Returns the first child element that matches a CSS selector(s)
querySelectorAll()	//Returns all child elements that matches a CSS selector(s)
remove()	//Removes an element from the DOM
removeAttribute()	//Removes an attribute from an element
removeAttributeNode()	//Removes an attribute node, and returns the removed node
removeChild()	//Removes a child node from an element
removeEventListener()	//Removes an event handler that has been attached with the addEventListener() method
replaceChild()	//Replaces a child node in an element
scrollHeight	//Returns the entire height of an element, including padding
scrollIntoView()	//Scrolls the an element into the visible area of the browser window
scrollLeft	//Sets or returns the number of pixels an element's content is scrolled horizontally
scrollTop	//Sets or returns the number of pixels an element's content is scrolled vertically
scrollWidth	//Returns the entire width of an element, including padding
setAttribute()	//Sets or changes an attribute's value
setAttributeNode()	//Sets or changes an attribute node
style	//Sets or returns the value of the style attribute of an element
tabIndex	//Sets or returns the value of the tabindex attribute of an element
tagName	//Returns the tag name of an element
textContent	//Sets or returns the textual content of a node and its descendants
title	//Sets or returns the value of the title attribute of an element  
toString()	//Converts an element to a string

// HTML DOM Attributes
// The Attr Object
// NamedNodeMap

// Attribute Properties
isId	//Deprecated
name	//Returns an attribute's name
value	//Sets or returns an attribute's value
specified	//Returns true if the attribute is specified

// NamedNodeMap Properties and Methods

getNamedItem()	//Returns an attribute node (by name) from a NamedNodeMap
item()	//Returns an attribute node (by index) from a NamedNodeMap
length	//Returns the number of attributes in a NamedNodeMap
removeNamedItem()	//Removes an attribute (node)
setNamedItem()	//Sets an attribute (node) by name

// HTML DOM Events