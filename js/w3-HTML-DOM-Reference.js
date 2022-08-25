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

//Event	Description	Belongs To
abort	//The event occurs when the loading of a media is aborted	UiEvent, Event
afterprint	//The event occurs when a page has started printing, or if the print dialogue box has been closed	Event
animationend	//The event occurs when a CSS animation has completed	AnimationEvent
animationiteration	//The event occurs when a CSS animation is repeated	AnimationEvent
animationstart	//The event occurs when a CSS animation has started	AnimationEvent
beforeprint	//The event occurs when a page is about to be printed	Event
beforeunload	//The event occurs before the document is about to be unloaded	UiEvent, Event
blur	//The event occurs when an element loses focus	FocusEvent
canplay	//The event occurs when the browser can start playing the media (when it has buffered enough to begin)	Event
canplaythrough	//The event occurs when the browser can play through the media without stopping for buffering	Event
change	//The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)	Event
click	//The event occurs when the user clicks on an element	MouseEvent
contextmenu	//The event occurs when the user right-clicks on an element to open a context menu	MouseEvent
copy	//The event occurs when the user copies the content of an element	ClipboardEvent
cut	//The event occurs when the user cuts the content of an element	ClipboardEvent
dblclick	//The event occurs when the user double-clicks on an element	MouseEvent
drag	//The event occurs when an element is being dragged	DragEvent
dragend	//The event occurs when the user has finished dragging an element	DragEvent
dragenter	//The event occurs when the dragged element enters the drop target	DragEvent
dragleave	//The event occurs when the dragged element leaves the drop target	DragEvent
dragover	//The event occurs when the dragged element is over the drop target	DragEvent
dragstart	//The event occurs when the user starts to drag an element	DragEvent
drop	//The event occurs when the dragged element is dropped on the drop target	DragEvent
durationchange	//The event occurs when the duration of the media is changed	Event
ended	//The event occurs when the media has reach the end (useful for messages like "thanks for listening")	Event
error	//The event occurs when an error occurs while loading an external file	ProgressEvent, UiEvent, Event
focus	//The event occurs when an element gets focus	FocusEvent
focusin	//The event occurs when an element is about to get focus	FocusEvent
focusout	//The event occurs when an element is about to lose focus	FocusEvent
fullscreenchange	//The event occurs when an element is displayed in fullscreen mode	Event
fullscreenerror	//The event occurs when an element can not be displayed in fullscreen mode	Event
hashchange	//The event occurs when there has been changes to the anchor part of a URL	HashChangeEvent
input	//The event occurs when an element gets user input	InputEvent, Event
invalid	//The event occurs when an element is invalid	Event
keydown	//The event occurs when the user is pressing a key	KeyboardEvent
keypress	//The event occurs when the user presses a key	KeyboardEvent
keyup	//The event occurs when the user releases a key	KeyboardEvent
load	//The event occurs when an object has loaded	UiEvent, Event
loadeddata	//The event occurs when media data is loaded	Event
loadedmetadata	//The event occurs when meta data (like dimensions and duration) are loaded	Event
loadstart	//The event occurs when the browser starts looking for the specified media	ProgressEvent
message	//The event occurs when a message is received through the event source	Event
mousedown	//The event occurs when the user presses a mouse button over an element	MouseEvent
mouseenter	//The event occurs when the pointer is moved onto an element	MouseEvent
mouseleave	//The event occurs when the pointer is moved out of an element	MouseEvent
mousemove	//The event occurs when the pointer is moving while it is over an element	MouseEvent
mouseover	//The event occurs when the pointer is moved onto an element, or onto one of its children	MouseEvent
mouseout	//The event occurs when a user moves the mouse pointer out of an element, or out of one of its children	MouseEvent
mouseup	//The event occurs when a user releases a mouse button over an element	MouseEvent
mousewheel	//Deprecated. Use the wheel event instead	WheelEvent
offline	//The event occurs when the browser starts to work offline	Event
online	//The event occurs when the browser starts to work online	Event
open	//The event occurs when a connection with the event source is opened	Event
pagehide	//The event occurs when the user navigates away from a webpage	PageTransitionEvent
pageshow	//The event occurs when the user navigates to a webpage	PageTransitionEvent
paste	//The event occurs when the user pastes some content in an element	ClipboardEvent
pause	//The event occurs when the media is paused either by the user or programmatically	Event
play	//The event occurs when the media has been started or is no longer paused	Event
playing	//The event occurs when the media is playing after having been paused or stopped for buffering	Event
popstate	//The event occurs when the window's history changes	PopStateEvent
progress	//The event occurs when the browser is in the process of getting the media data (downloading the media)	Event
ratechange	//The event occurs when the playing speed of the media is changed	Event
resize	//The event occurs when the document view is resized	UiEvent, Event
reset	//The event occurs when a form is reset	Event
scroll	//The event occurs when an element's scrollbar is being scrolled	UiEvent, Event
search	//The event occurs when the user writes something in a search field (for <input="search">)	Event
seeked	//The event occurs when the user is finished moving/skipping to a new position in the media	Event
seeking	//The event occurs when the user starts moving/skipping to a new position in the media	Event
select	//The event occurs after the user selects some text (for <input> and <textarea>)	UiEvent, Event
show	//The event occurs when a <menu> element is shown as a context menu	Event
stalled	//The event occurs when the browser is trying to get media data, but data is not available	Event
storage	//The event occurs when a Web Storage area is updated	StorageEvent
submit	//The event occurs when a form is submitted	Event
suspend	//The event occurs when the browser is intentionally not getting media data	Event
timeupdate	//The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)	Event
toggle	//The event occurs when the user opens or closes the <details> element	Event
touchcancel	//The event occurs when the touch is interrupted	TouchEvent
touchend	//The event occurs when a finger is removed from a touch screen	TouchEvent
touchmove	//The event occurs when a finger is dragged across the screen	TouchEvent
touchstart	//The event occurs when a finger is placed on a touch screen	TouchEvent
transitionend	//The event occurs when a CSS transition has completed	TransitionEvent
unload	//The event occurs once a page has unloaded (for <body>)	UiEvent, Event
volumechange	//The event occurs when the volume of the media has changed (includes setting the volume to "mute")	Event
waiting	//The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data)	Event
wheel	//The event occurs when the mouse wheel rolls up or down over an element	WheelEvent

/* // HTML DOM Event Properties and Methods */

//Property / Method	Description	Belongs To
altKey	//Returns whether the "ALT" key was pressed when the mouse event was triggered	MouseEvent
altKey	//Returns whether the "ALT" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
animationName	//Returns the name of the animation	AnimationEvent
bubbles	//Returns whether or not a specific event is a bubbling event	Event
button	//Returns which mouse button was pressed when the mouse event was triggered	MouseEvent
buttons	//Returns which mouse buttons were pressed when the mouse event was triggered	MouseEvent
cancelable	//Returns whether or not an event can have its default action prevented	Event
charCode	//Returns the Unicode character code of the key that triggered the onkeypress event	KeyboardEvent
changeTouches	//Returns a list of all the touch objects whose state changed between the previous touch and this touch	TouchEvent
clientX	//Returns the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	MouseEvent, TouchEvent
clientY	//Returns the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	MouseEvent, TouchEvent
clipboardData	//Returns an object containing the data affected by the clipboard operation	ClipboardData
code	//Returns the code of the key that triggered the event	KeyboardEvent
composed	//Returns whether the event is composed or not	Event
ctrlKey	//Returns whether the "CTRL" key was pressed when the mouse event was triggered	MouseEvent
ctrlKey	//Returns whether the "CTRL" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
currentTarget	//Returns the element whose event listeners triggered the event	Event
data	//Returns the inserted characters	InputEvent
dataTransfer	//Returns an object containing the data being dragged / dropped, or inserted / deleted	DragEvent, InputEvent
defaultPrevented	//Returns whether or not the preventDefault() method was called for the event	Event
deltaX	//Returns the horizontal scroll amount of a mouse wheel(x - axis)	WheelEvent
deltaY	//Returns the vertical scroll amount of a mouse wheel(y - axis)	WheelEvent
deltaZ	//Returns the scroll amount of a mouse wheel for the z - axis	WheelEvent
deltaMode	//Returns a number that represents the unit of measurements for delta values(pixels, lines or pages)	WheelEvent
detail	//Returns a number that indicates how many times the mouse was clicked	UiEvent
elapsedTime	//Returns the number of seconds an animation has been running	AnimationEvent
elapsedTime	//Returns the number of seconds a transition has been running	 
eventPhase	//Returns which phase of the event flow is currently being evaluated	Event
getTargetRanges()	//Returns an array containing target ranges that will be affected by the insertion / deletion	InputEvent
getModifierState()	//Returns an array containing target ranges that will be affected by the insertion / deletion	MouseEvent
inputType	//Returns the type of the change(i.e "inserting" or "deleting")	InputEvent
isComposing	//Returns whether the state of the event is composing or not	InputEvent, KeyboardEvent
isTrusted	//Returns whether or not an event is trusted	Event
key	//Returns the key value of the key represented by the event	KeyboardEvent
key	//Returns the key of the changed storage item	StorageEvent
keyCode	//Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event	KeyboardEvent
location	//Returns the location of a key on the keyboard or device	KeyboardEvent
lengthComputable	//Returns whether the length of the progress can be computable or not	ProgressEvent
loaded	//Returns how much work has been loaded	ProgressEvent
metaKey	//Returns whether the "META" key was pressed when an event was triggered	MouseEvent
metaKey	//Returns whether the "meta" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
MovementX	//Returns the horizontal coordinate of the mouse pointer relative to the position of the last mousemove event	MouseEvent
MovementY	//Returns the vertical coordinate of the mouse pointer relative to the position of the last mousemove event	MouseEvent
newValue	//Returns the new value of the changed storage item	StorageEvent
newURL	//Returns the URL of the document, after the hash has been changed	HasChangeEvent
offsetX	//Returns the horizontal coordinate of the mouse pointer relative to the position of the edge of the target element	MouseEvent
offsetY	//Returns the vertical coordinate of the mouse pointer relative to the position of the edge of the target element	MouseEvent
oldValue	//Returns the old value of the changed storage item	StorageEvent
oldURL	//Returns the URL of the document, before the hash was changed	HasChangeEvent
onemptied	//The event occurs when something bad happens and the media file is suddenly unavailable(like unexpectedly disconnects)	 
pageX	//Returns the horizontal coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	MouseEvent
pageY	//Returns the vertical coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	MouseEvent
persisted	//Returns whether the webpage was cached by the browser	PageTransitionEvent
preventDefault()	//Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur	Event
propertyName	//Returns the name of the CSS property associated with the animation or transition	AnimationEvent, TransitionEvent
pseudoElement	//Returns the name of the pseudo - element of the animation or transition	AnimationEvent, TransitionEvent
region		//MouseEvent
relatedTarget	//Returns the element related to the element that triggered the mouse event	MouseEvent
relatedTarget	//Returns the element related to the element that triggered the event	FocusEvent
repeat	//Returns whether a key is being hold down repeatedly, or not	KeyboardEvent
screenX	//Returns the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered	MouseEvent
screenY	//Returns the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered	MouseEvent
shiftKey	//Returns whether the "SHIFT" key was pressed when an event was triggered	MouseEvent
shiftKey	//Returns whether the "SHIFT" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
state	//Returns an object containing a copy of the history entries	PopStateEvent
stopImmediatePropagation()	//Prevents other listeners of the same event from being called	Event
stopPropagation()	//Prevents further propagation of an event during event flow	Event
storageArea	//Returns an object representing the affected storage object	StorageEvent
target	//Returns the element that triggered the event	Event
targetTouches	//Returns a list of all the touch objects that are in contact with the surface and where the touchstart event occured on the same target element as the current target element	TouchEvent
timeStamp	//Returns the time(in milliseconds relative to the epoch) at which the event was created	Event
total	//Returns the total amount of work that will be loaded	ProgressEvent
touches	//Returns a list of all the touch objects that are currently in contact with the surface	TouchEvent
transitionend	//The event occurs when a CSS transition has completed	TransitionEvent
type //Returns the name of the event	Event
url	//Returns the URL of the changed item's document	StorageEvent
which	//Returns which mouse button was pressed when the mouse event was triggered	MouseEvent
which	//Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event	KeyboardEvent
view	//Returns a reference to the Window object where the event occurred	UiEvent 

// HTML DOM Event Objects
// Event Objects
// The Event Object
// Other Event Objects
AnimationEvent	//For CSS animations
ClipboardEvent	//For modification of the clipboard
DragEvent	//For drag and drop interaction
FocusEvent	//For focus-related events
HashChangeEvent	//For changes in the anchor part of the URL
InputEvent	//For user input
KeyboardEvent	//For keyboard interaction
MouseEvent	//For mouse interaction
PageTransitionEvent	//For navigating to, and away from, web pages
PopStateEvent	//For changes in the history entry
ProgressEvent	//For the progress of loading external resources
StorageEvent	//For changes in the window's storage area.
TouchEvent	//For touch interaction
TransitionEvent	//For CSS transitions
UiEvent	//For user interface interaction
WheelEvent	//For mousewheel interaction

// DOM HTMLCollection
// HTMLCollection
// HTMLCollection vs NodeList
// Properties and Methods

length	//Returns the number of elements in an HTMLCollection
item()	//Returns the element at a specified index
namedItem()	//Returns the element with a specified id

// Examples
const elements2 = document.getElementsByTagName("p");
// Example
const elements = document.getElementsByTagName("p");
let numb = elements.length;
// Example
const elements1 = document.getElementsByTagName("*");
for (let i = 0; i < elements1.length; i++) {
    //.. some code..
}

/*
The Difference Between an HTMLCollection and a NodeList
A NodeList and an HTMLcollection is very much the same thing.

Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.

Both have a length property that returns the number of elements in the list (collection).

An HTMLCollection is a collection of document elements.

A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

HTMLCollection items can be accessed by their name, id, or index number.

NodeList items can only be accessed by their index number.

An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.

The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

The querySelectorAll() method returns a static NodeList.

The childNodes property returns a live NodeList.

 */

// HTML DOM Style Object
// Style object
// Style Object Properties

alignContent	//Sets or returns the alignment between the lines inside a flexible container when the items do not use all available space
alignItems	//Sets or returns the alignment for items inside a flexible container
alignSelf	//Sets or returns the alignment for selected items inside a flexible container
animation	//A shorthand property for all the animation properties below, except the animationPlayState property
animationDelay	//Sets or returns when the animation will start
animationDirection	//Sets or returns whether or not the animation should play in reverse on alternate cycles
animationDuration	//Sets or returns how many seconds or milliseconds an animation takes to complete one cycle
animationFillMode	//Sets or returns what values are applied by the animation outside the time it is executing
animationIterationCount	//Sets or returns the number of times an animation should be played
animationName	//Sets or returns a name for the @keyframes animation
animationTimingFunction	//Sets or returns the speed curve of the animation
animationPlayState	//Sets or returns whether the animation is running or paused
background	//Sets or returns all the background properties in one declaration
backgroundAttachment	//Sets or returns whether a background-image is fixed or scrolls with the page
backgroundColor	//Sets or returns the background-color of an element
backgroundImage	//Sets or returns the background-image for an element
backgroundPosition	//Sets or returns the starting position of a background-image
backgroundRepeat	//Sets or returns how to repeat (tile) a background-image
backgroundClip	//Sets or returns the painting area of the background
backgroundOrigin	//Sets or returns the positioning area of the background images
backgroundSize	//Sets or returns the size of the background image
backfaceVisibility	//Sets or returns whether or not an element should be visible when not facing the screen
border	//Sets or returns borderWidth, borderStyle, and borderColor in one declaration
borderBottom	//Sets or returns all the borderBottom properties in one declaration
borderBottomColor	//Sets or returns the color of the bottom border
borderBottomLeftRadius	//Sets or returns the shape of the border of the bottom-left corner
borderBottomRightRadius	//Sets or returns the shape of the border of the bottom-right corner
borderBottomStyle	//Sets or returns the style of the bottom border
borderBottomWidth	//Sets or returns the width of the bottom border
borderCollapse	//Sets or returns whether the table border should be collapsed into a single border, or not
borderColor	//Sets or returns the color of an element's border (can have up to four values)
borderImage	//A shorthand property for setting or returning all the borderImage properties
borderImageOutset	//Sets or returns the amount by which the border image area extends beyond the border box
borderImageRepeat	//Sets or returns whether the image-border should be repeated, rounded or stretched
borderImageSlice	//Sets or returns the inward offsets of the image-border
borderImageSource	//Sets or returns the image to be used as a border
borderImageWidth	//Sets or returns the widths of the image-border
borderLeft	//Sets or returns all the borderLeft properties in one declaration
borderLeftColor	//Sets or returns the color of the left border
borderLeftStyle	//Sets or returns the style of the left border
borderLeftWidth	//Sets or returns the width of the left border
borderRadius	//A shorthand property for setting or returning all the four borderRadius properties
borderRight	//Sets or returns all the borderRight properties in one declaration
borderRightColor	//Sets or returns the color of the right border
borderRightStyle	//Sets or returns the style of the right border
borderRightWidth	//Sets or returns the width of the right border
borderSpacing	//Sets or returns the space between cells in a table
borderStyle	//Sets or returns the style of an element's border (can have up to four values)
borderTop	//Sets or returns all the borderTop properties in one declaration
borderTopColor	//Sets or returns the color of the top border
borderTopLeftRadius	//Sets or returns the shape of the border of the top-left corner
borderTopRightRadius	//Sets or returns the shape of the border of the top-right corner
borderTopStyle	//Sets or returns the style of the top border
borderTopWidth	//Sets or returns the width of the top border
borderWidth	//Sets or returns the width of an element's border (can have up to four values)
bottom	//Sets or returns the bottom position of a positioned element
boxDecorationBreak	//Sets or returns the behaviour of the background and border of an element at page-break, or, for in-line elements, at line-break.
boxShadow	//Attaches one or more drop-shadows to the box
boxSizing	//Allows you to define certain elements to fit an area in a certain way
captionSide	//Sets or returns the position of the table caption
caretColor	//Sets or returns the caret/cursor color of an element
clear	//Sets or returns the position of the element relative to floating objects
clip	//Sets or returns which part of a positioned element is visible
color	//Sets or returns the color of the text
columnCount	//Sets or returns the number of columns an element should be divided into
columnFill	//Sets or returns how to fill columns
columnGap	//Sets or returns the gap between the columns
columnRule	//A shorthand property for setting or returning all the columnRule properties
columnRuleColor	//Sets or returns the color of the rule between columns
columnRuleStyle	//Sets or returns the style of the rule between columns
columnRuleWidth	//Sets or returns the width of the rule between columns
columns	//A shorthand property for setting or returning columnWidth and columnCount
columnSpan	//Sets or returns how many columns an element should span across
columnWidth	//Sets or returns the width of the columns
content	//Used with the :before and :after pseudo-elements, to insert generated content
counterIncrement	//Increments one or more counters
counterReset	//Creates or resets one or more counters
cursor	//Sets or returns the type of cursor to display for the mouse pointer
direction	//Sets or returns the text direction
display	//Sets or returns an element's display type
emptyCells	//Sets or returns whether to show the border and background of empty cells, or not
filter	//Sets or returns image filters (visual effects, like blur and saturation)
flex	//Sets or returns the length of the item, relative to the rest
flexBasis	//Sets or returns the initial length of a flexible item
flexDirection	//Sets or returns the direction of the flexible items
flexFlow	//A shorthand property for the flexDirection and the flexWrap properties
flexGrow	//Sets or returns how much the item will grow relative to the rest
flexShrink	//Sets or returns how the item will shrink relative to the rest
flexWrap	//Sets or returns whether the flexible items should wrap or not
cssFloat	//Sets or returns the horizontal alignment of an element
font	//Sets or returns fontStyle, fontVariant, fontWeight, fontSize, lineHeight, and fontFamily in one declaration
fontFamily	//Sets or returns the font family for text
fontSize	//Sets or returns the font size of the text
fontStyle	//Sets or returns whether the style of the font is normal, italic or oblique
fontVariant	//Sets or returns whether the font should be displayed in small capital letters
fontWeight	//Sets or returns the boldness of the font
fontSizeAdjust	//Preserves the readability of text when font fallback occurs
fontStretch	//Selects a normal, condensed, or expanded face from a font family
hangingPunctuation	//Specifies whether a punctuation character may be placed outside the line box
height	//Sets or returns the height of an element
hyphens	//Sets how to split words to improve the layout of paragraphs
icon	//Provides the author the ability to style an element with an iconic equivalent
imageOrientation	//Specifies a rotation in the right or clockwise direction that a user agent applies to an image
isolation	//Defines whether an element must create a new stacking content
justifyContent	//Sets or returns the alignment between the items inside a flexible container when the items do not use all available space.
left	//Sets or returns the left position of a positioned element
letterSpacing	//Sets or returns the space between characters in a text
lineHeight	//Sets or returns the distance between lines in a text
listStyle	//Sets or returns listStyleImage, listStylePosition, and listStyleType in one declaration
listStyleImage	//Sets or returns an image as the list-item marker
listStylePosition	//Sets or returns the position of the list-item marker
listStyleType	//Sets or returns the list-item marker type
margin	//Sets or returns the margins of an element (can have up to four values)
marginBottom	//Sets or returns the bottom margin of an element
marginLeft	//Sets or returns the left margin of an element
marginRight	//Sets or returns the right margin of an element
marginTop	//Sets or returns the top margin of an element
maxHeight	//Sets or returns the maximum height of an element
maxWidth	//Sets or returns the maximum width of an element
minHeight	//Sets or returns the minimum height of an element
minWidth	//Sets or returns the minimum width of an element
navDown	//Sets or returns where to navigate when using the arrow-down navigation key
navIndex	//Sets or returns the tabbing order for an element
navLeft	//Sets or returns where to navigate when using the arrow-left navigation key
navRight	//Sets or returns where to navigate when using the arrow-right navigation key
navUp	//Sets or returns where to navigate when using the arrow-up navigation key
objectFit	//Specifies how the contents of a replaced element should be fitted to the box established by its used height and width
objectPosition	//Specifies the alignment of the replaced element inside its box
opacity	//Sets or returns the opacity level for an element
order	//Sets or returns the order of the flexible item, relative to the rest
orphans	//Sets or returns the minimum number of lines for an element that must be left at the bottom of a page when a page break occurs inside an element
outline	//Sets or returns all the outline properties in one declaration
outlineColor	//Sets or returns the color of the outline around a element
outlineOffset	//Offsets an outline, and draws it beyond the border edge
outlineStyle	//Sets or returns the style of the outline around an element
outlineWidth	//Sets or returns the width of the outline around an element
overflow	//Sets or returns what to do with content that renders outside the element box
overflowX	//Specifies what to do with the left/right edges of the content, if it overflows the element's content area
overflowY	//Specifies what to do with the top/bottom edges of the content, if it overflows the element's content area
padding	//Sets or returns the padding of an element (can have up to four values)
paddingBottom	//Sets or returns the bottom padding of an element
paddingLeft	//Sets or returns the left padding of an element
paddingRight	//Sets or returns the right padding of an element
paddingTop	//Sets or returns the top padding of an element
pageBreakAfter	//Sets or returns the page-break behavior after an element
pageBreakBefore	//Sets or returns the page-break behavior before an element
pageBreakInside	//Sets or returns the page-break behavior inside an element
perspective	//Sets or returns the perspective on how 3D elements are viewed
perspectiveOrigin	//Sets or returns the bottom position of 3D elements
position	//Sets or returns the type of positioning method used for an element (static, relative, absolute or fixed)
quotes	//Sets or returns the type of quotation marks for embedded quotations
resize	//Sets or returns whether or not an element is resizable by the user
right	//Sets or returns the right position of a positioned element
scrollBehavior	//Specifies whether to smoothly animate the scroll position, instead of a straight jump, when the user clicks on a link within a scrollable boxt
tableLayout	//Sets or returns the way to lay out table cells, rows, and columns
tabSize	//Sets or returns the length of the tab-character
textAlign	//Sets or returns the horizontal alignment of text
textAlignLast	//Sets or returns how the last line of a block or a line right before a forced line break is aligned when text-align is "justify"
textDecoration	//Sets or returns the decoration of a text
textDecorationColor	//Sets or returns the color of the text-decoration
textDecorationLine	//Sets or returns the type of line in a text-decoration
textDecorationStyle	//Sets or returns the style of the line in a text decoration
textIndent	//Sets or returns the indentation of the first line of text
textJustify	//Sets or returns the justification method used when text-align is "justify"
textOverflow	//Sets or returns what should happen when text overflows the containing element
textShadow	//Sets or returns the shadow effect of a text
textTransform	//Sets or returns the capitalization of a text
top	//Sets or returns the top position of a positioned element
transform	//Applies a 2D or 3D transformation to an element
transformOrigin	//Sets or returns the position of transformed elements
transformStyle	//Sets or returns how nested elements are rendered in 3D space
transition	//A shorthand property for setting or returning the four transition properties
transitionProperty	//Sets or returns the CSS property that the transition effect is for
transitionDuration	//Sets or returns how many seconds or milliseconds a transition effect takes to complete
transitionTimingFunction	//Sets or returns the speed curve of the transition effect
transitionDelay	//Sets or returns when the transition effect will start
unicodeBidi	//Sets or returns whether the text should be overridden to support multiple languages in the same document
userSelect	//Sets or returns whether the text of an element can be selected or not
verticalAlign	//Sets or returns the vertical alignment of the content in an element
visibility	//Sets or returns whether an element should be visible
whiteSpace	//Sets or returns how to handle tabs, line breaks and whitespace in a text
width	//Sets or returns the width of an element
wordBreak	//Sets or returns line breaking rules for non-CJK scripts
wordSpacing	//Sets or returns the spacing between words in a text
wordWrap	//Allows long, unbreakable words to be broken and wrap to the next line
widows	//Sets or returns the minimum number of lines for an element that must be visible at the top of a page
zIndex	//Sets or returns the stack order of a positioned element 

// Access a Style Object
// Example
var x = document.getElementsByTagName("STYLE");
// Example
var x = document.getElementById("myH1").style;

// Create a Style Object
// Example
var x = document.createElement("STYLE");
// Example
document.getElementById("myH1").style.color = "red";