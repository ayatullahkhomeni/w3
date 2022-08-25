// Window Reference
// The Window Object 
// Window Object
// Window Object Properties

closed	//Returns a boolean true if a window is closed.
console	//Returns the Console Object for the window.
//See also The Console Object.
defaultStatus	//Deprecated.
document	//Returns the Document object for the window.
//See also The Document Object.
frameElement	//Returns the frame in which the window runs.
frames	//Returns all window objects running in the window.
history	//Returns the History object for the window.
//See also The History Object.
innerHeight	//Returns the height of the window's content area (viewport) including scrollbars
innerWidth	//Returns the width of a window's content area (viewport) including scrollbars
length	//Returns the number of < iframe > elements in the current window
localStorage	//Allows to save key / value pairs in a web browser.Stores the data with no expiration date
location	//Returns the Location object for the window.
//See also the The Location Object.
name	//Sets or returns the name of a window
navigator	//Returns the Navigator object for the window.
//See also The Navigator object.
opener	//Returns a reference to the window that created the window
outerHeight	//Returns the height of the browser window, including toolbars / scrollbars
outerWidth	//Returns the width of the browser window, including toolbars / scrollbars
pageXOffset	//Returns the pixels the current document has been scrolled(horizontally) from the upper left corner of the window
pageYOffset	//Returns the pixels the current document has been scrolled(vertically) from the upper left corner of the window
parent	//Returns the parent window of the current window
screen	//Returns the Screen object for the window
//See also The Screen object
screenLeft	//Returns the horizontal coordinate of the window relative to the screen
screenTop	//Returns the vertical coordinate of the window relative to the screen
screenX	//Returns the horizontal coordinate of the window relative to the screen
screenY	//Returns the vertical coordinate of the window relative to the screen
sessionStorage	//Allows to save key / value pairs in a web browser.Stores the data for one session
scrollX	//An alias of pageXOffset
scrollY	//An alias of pageYOffset
self	//Returns the current window
status	//Deprecated.Avoid using it.
top	//Returns the topmost browser window

// Window Object Methods

alert()	//Displays an alert box with a message and an OK button
atob()	//Decodes a base - 64 encoded string
blur()	//Removes focus from the current window
btoa()	//Encodes a string in base - 64
clearInterval()	//Clears a timer set with setInterval()
clearTimeout()	//Clears a timer set with setTimeout()
close()	//Closes the current window
confirm()	//Displays a dialog box with a message and an OK and a Cancel button
focus()	//Sets focus to the current window
getComputedStyle()	//Gets the current computed CSS styles applied to an element
getSelection()	//Returns a Selection object representing the range of text selected by the user
matchMedia()	//Returns a MediaQueryList object representing the specified CSS media query string
moveBy()	//Moves a window relative to its current position
moveTo()	//Moves a window to the specified position
open()	//Opens a new browser window
print()	//Prints the content of the current window
prompt()	//Displays a dialog box that prompts the visitor for input
requestAnimationFrame()	//Requests the browser to call a function to update an animation before the next repaint
resizeBy()	//Resizes the window by the specified pixels
resizeTo()	//Resizes the window to the specified width and height
scroll()	//Deprecated.This method has been replaced by the scrollTo() method.
scrollBy()	//Scrolls the document by the specified number of pixels
scrollTo()	//Scrolls the document to the specified coordinates
setInterval()	//Calls a function or evaluates an expression at specified intervals(in milliseconds)
setTimeout()	//Calls a function or evaluates an expression after a specified number of milliseconds
stop()	//Stops the window from loading 

// Window History
// The Window History Object
let length1 = window.history.length;
let length2 = history.length;

// History Object Properties and Methods

back()	//Loads the previous URL (page) in the history list
forward()	//Loads the next URL (page) in the history list
go()	//Loads a specific URL (page) from the history list
length	//Returns the number of URLs (pages) in the history list 

// Window Location
// The Window Location Object
let origin1 = window.location.origin;
let origin2 = location.origin;

// Location Object Properties
hash	//Sets or returns the anchor part(#) of a URL
host	//Sets or returns the hostname and port number of a URL
hostname	//Sets or returns the hostname of a URL
href	//Sets or returns the entire URL
origin	//Returns the protocol, hostname and port number of a URL
pathname	//Sets or returns the path name of a URL
port	//Sets or returns the port number of a URL
protocol	//Sets or returns the protocol of a URL
search	//Sets or returns the querystring part of a URL

// Location Object Methods

assign()	//Loads a new document
reload()	//Reloads the current document
replace()	//Replaces the current document with a new one