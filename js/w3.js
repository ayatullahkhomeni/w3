/* Examples in Each Chapter */
/* My First JavaScript */
document.getElementById("btn").addEventListener('click', function () {
    document.getElementById('demo').innerHTML = Date();
})
/* JavaScript Introduction */
/* JavaScript Can Change HTML Content */
document.getElementById("btn1").addEventListener('click', function () {
    document.getElementById("demo1").innerHTML = "Hello JavaScript!";
})
/* JavaScript Can Change HTML Attribute Values */
document.getElementById("btn2").addEventListener('click', function () {
    document.getElementById('myImage').src = 'pic_bulbon.gif';
})
document.getElementById("btn3").addEventListener('click', function () {
    document.getElementById('myImage').src = 'pic_bulboff.gif';
})
/* JavaScript Can Change HTML Styles (CSS) */
document.getElementById("btn4").addEventListener('click', function () {
    document.getElementById('demo2').style.fontSize = '35px';
})
/* JavaScript Can Hide HTML Elements */
document.getElementById("btn5").addEventListener('click', function () {
    document.getElementById('demo3').style.display = 'none';
})
/* JavaScript Can Show HTML Elements */
document.getElementById("btn6").addEventListener('click', function () {
    document.getElementById('demo4').style.display = 'block';
})

var x = 5;
var y = 10;
document.getElementById("demo").innerHTML = x + y;

/* 
1. JavaScript and HTML DOM Reference 
2. JavaScript Array Reference
3. The JavaScript Array Object
*/
// Array 
const cars = ["Saab", "Volvo", "BMW"];
/* JavaScript Array Methods and Properties */
concat()
// 1. Joins arrays and returns an array with the joined arrays
constructor
// 2. Returns the function that created the Array object's prototype
copyWithin()
// 3. Copies array elements within the array, to and from specified positions
entries()
// 4. Returns a key / value pair Array Iteration Object
every()
// 5. Checks if every element in an array pass a test
fill()
// 6. Fill the elements in an array with a static value
filter()
// 7. Creates a new array with every element in an array that pass a test
find()
// 8. Returns the value of the first element in an array that pass a test
findIndex()
// 9. Returns the index of the first element in an array that pass a test
forEach()
// 10. Calls a function for each array element
from()
// 11. Creates an array from an object
includes()
// 12. Check if an array contains the specified element
indexOf()
// 13. Search the array for an element and returns its position
isArray()
// 14. Checks whether an object is an array
join()
// 15. Joins all elements of an array into a string
keys()
// 16. Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf()
// 17. Search the array for an element, starting at the end, and returns its position
length
// 18. Sets or returns the number of elements in an array
map()
// 19. Creates a new array with the result of calling a function for each array element
pop()
// 20. Removes the last element of an array, and returns that element
prototype
// 21. Allows you to add properties and methods to an Array object
push()
// 22. Adds new elements to the end of an array, and returns the new length
reduce()
// 23. Reduce the values of an array to a single value(going left - to - right)
reduceRight()
// 24. Reduce the values of an array to a single value(going right - to - left)
reverse()
// 25. Reverses the order of the elements in an array
shift()
// 26. Removes the first element of an array, and returns that element
slice()
// 27. Selects a part of an array, and returns the new array
some()
// 28. Checks if any of the elements in an array pass a test
sort()
// 29. Sorts the elements of an array
splice()
// 30. Adds / Removes elements from an array
toString()
// 31. Converts an array to a string, and returns the result
unshift()
// 32. Adds new elements to the beginning of an array, and returns the new length
valueOf()
// 33. Returns the primitive value of an array  

/* JavaScript String Reference */
// JavaScript Strings
let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';

/* String Properties and Methods
JavaScript String Methods */

charAt()
// 1. Returns the character at a specified index (position)
charCodeAt()
// 2. Returns the Unicode of the character at a specified index
concat()
// 3. Returns two or more joined strings
constructor
// 4. Returns the string's constructor function
endsWith()
// 5. Returns if a string ends with a specified value
fromCharCode()
// 6. Returns Unicode values as characters
includes()
// 7. Returns if a string contains a specified value
indexOf()
// 8. Returns the index(position) of the first occurrence of a value in a string
lastIndexOf()
// 9. Returns the index(position) of the last occurrence of a value in a string
length
// 10. Returns the length of a string
localeCompare()
// 11. Compares two strings in the current locale
match()
// 12. Searches a string for a value, or a regular expression, and returns the matches
prototype
// 13. Allows you to add properties and methods to an object
repeat()
// 14. Returns a new string with a number of copies of a string
replace()
// 15. Searches a string for a value, or a regular expression, and returns a string where the values are replaced
search()
//16. Searches a string for a value, or regular expression, and returns the index(position) of the match
slice()
// 17. Extracts a part of a string and returns a new string
split()
// 18. Splits a string into an array of substrings
startsWith()
//19. Checks whether a string begins with specified characters
substr()
// 20. Extracts a number of characters from a string, from a start index(position)
substring()
// 21. Extracts characters from a string, between two specified indices(positions)
toLocaleLowerCase()
// 22. Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()
// 23. Returns a string converted to uppercase letters, using the host's locale
toLowerCase()
// 24. Returns a string converted to lowercase letters
toString()
// 25. Returns a string or a string object as a string
toUpperCase()
// 26. Returns a string converted to uppercase letters
trim()
// 27. Returns a string with removed whitespaces
valueOf()
// 28. Returns the primitive value of a string or a string object

/* String HTML Wrapper Methods
HTML wrapper methods return a string wrapped inside an HTML tag.
These are not standard methods, and may not work as expected. */
anchor()
// 1. Displays a string as an anchor
big()
// 2. Displays a string using a big font
blink()
// 3. Displays a blinking string
bold()
// 4. Displays a string in bold
fixed()
// 5. Displays a string using a fixed-pitch font
fontcolor()
// 6. Displays a string using a specified color
fontsize()
// 7. Displays a string using a specified size
italics()
// 8. Displays a string in italic
link()
// 9. Displays a string as a hyperlink
small()
// 10. Displays a string using a small font
strike()
// 11. Displays a string with a strikethrough
sub()
// 12. Displays a string as subscript text
sup()
// 13. Displays a string as superscript text

/*
1. JavaScript Number Reference
*/
// JavaScript Numbers
let x = 3.14;     // A number with decimals
let y = 34;       // A number without decimals
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123

// JavaScript Number Methods
isFinite()
// 1. Checks whether a value is a finite number
isInteger()
// 2. Checks whether a value is an integer
isNaN()
// 3. Checks whether a value is Number.NaN
isSafeInteger()
// 4. Checks whether a value is a safe integer
toExponential(x)
// 5. Converts a number into an exponential notation
toFixed(x)
// 6. Formats a number with x numbers of digits after the decimal point
toLocaleString()
// 7. Converts a number into a string, based on the locale settings
toPrecision(x)
// 8. Formats a number to x length
toString()
// 9. Converts a number to a string
valueOf()
// 10. Returns the primitive value of a number

// JavaScript Number Properties
constructor
// 1. Returns the function that created JavaScript's Number prototype
MAX_VALUE
// 2. Returns the largest number possible in JavaScript
MIN_VALUE
// 3. Returns the smallest number possible in JavaScript
NEGATIVE_INFINITY
// 4. Represents negative infinity (returned on overflow)
NaN
// 5. Represents a "Not-a-Number" value
POSITIVE_INFINITY
// 6. Represents infinity (returned on overflow)
prototype
// 7. Allows you to add properties and methods to an object

/* JavaScript Math Reference */

// Math Object
let x = Math.PI;
let y = Math.sqrt(16);

/* Math Object Methods and Properties */

abs(x)
// 1. Returns the absolute value of x
acos(x)
// 2. Returns the arccosine of x, in radians
acosh(x)
// 3. Returns the hyperbolic arccosine of x
asin(x)
// 4. Returns the arcsine of x, in radians
asinh(x)
// 5. Returns the hyperbolic arcsine of x
atan(x)
// 6. Returns the arctangent of x as a numeric value between - PI / 2 and PI / 2 radians
atan2(y, x)
// 7. Returns the arctangent of the quotient of its arguments
atanh(x)
// 8. Returns the hyperbolic arctangent of x
cbrt(x)
// 9. Returns the cubic root of x
ceil(x)
// 10. Returns x, rounded upwards to the nearest integer
clz32(x)
// 11. Returns the number of leading zeros in a 32 - bit binary representation of x
cos(x)
// 12. Returns the cosine of x(x is in radians)
cosh(x)
// 13. Returns the hyperbolic cosine of x
E
// 14. Returns Euler's number (approx. 2.718)
exp(x)
// 15. Returns the value of Ex
expm1(x)
// 16. Returns the value of Ex minus 1
floor(x)
// 17. Returns x, rounded downwards to the nearest integer
fround(x)
// 18. Returns the nearest (32-bit single precision) float representation of a number
LN2
// 19. Returns the natural logarithm of 2 (approx. 0.693)
LN10
// 20. Returns the natural logarithm of 10 (approx. 2.302)
log(x)
// 21. Returns the natural logarithmof x
log10(x)
// 22. Returns the base-10 logarithm of x
LOG10E
// 23. Returns the base-10 logarithm of E (approx. 0.434)
log1p(x)
// 24. Returns the natural logarithm of 1 + x
log2(x)
// 25. Returns the base-2 logarithm of x
LOG2E
// 26. Returns the base-2 logarithm of E (approx. 1.442)
max(x1, x2)
// 27. Returns the number with the highest value
min(x1, x2)
// 28. Returns the number with the lowest value
PI
// 29. Returns PI (approx. 3.14)
pow(x, y)
// 30. Returns the value of x to the power of y
random()
// 31. Returns a random number between 0 and 1
round(x)
// 32. Rounds x to the nearest integer
sign(x)
// 33. Returns the sign of a number (checks whether it is positive, negative or zero)
sin(x)
// 34. Returns the sine of x (x is in radians)
sinh(x)
// 35. Returns the hyperbolic sine of x
sqrt(x)
// 36. Returns the square root of x
SQRT1_2
// 37. Returns the square root of 1/2 (approx. 0.707)
SQRT2
// 38. Returns the square root of 2 (approx. 1.414)
tan(x)
// 39. Returns the tangent of an angle
tanh(x)
// 40. Returns the hyperbolic tangent of a number
trunc(x)
// 41. Returns the integer part of a number (x)

/* JavaScript Date Reference */

// Date Object
new Date();
new Date(milliseconds);
new Date(dateString);
new Date(year, month, day, hours, minutes, seconds, milliseconds);

// JavaScript Date Methods and Properties
constructor
// 1. Returns the function that created the Date object's prototype
getDate()
// 2. Returns the day of the month (from 1-31)
getDay()
// 3. Returns the day of the week (from 0-6)
getFullYear()
// 4. Returns the year
getHours()
// 5. Returns the hour(from 0 - 23)
getMilliseconds()
// 6. Returns the milliseconds(from 0 - 999)
getMinutes()
// 7. Returns the minutes(from 0 - 59)
getMonth()
// 8. Returns the month(from 0 - 11)
getSeconds()
// 9. Returns the seconds(from 0 - 59)
getTime()
// 10. Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
getTimezoneOffset()
// 11. Returns the time difference between UTC time and local time, in minutes
getUTCDate()
// 12. Returns the day of the month, according to universal time(from 1 - 31)
getUTCDay()
// 13. Returns the day of the week, according to universal time(from 0 - 6)
getUTCFullYear()
// 14. Returns the year, according to universal time
getUTCHours()
// 15. Returns the hour, according to universal time(from 0 - 23)
getUTCMilliseconds()
// 16. Returns the milliseconds, according to universal time(from 0 - 999)
getUTCMinutes()
// 17. Returns the minutes, according to universal time(from 0 - 59)
getUTCMonth()
// 18. Returns the month, according to universal time(from 0 - 11)
getUTCSeconds()
// 19. Returns the seconds, according to universal time(from 0 - 59)
getYear()
// 20. Deprecated.Use the getFullYear() method instead
now()
// 21. Returns the number of milliseconds since midnight Jan 1, 1970
parse()
// 22. Parses a date string and returns the number of milliseconds since January 1, 1970
prototype
// 23. Allows you to add properties and methods to an object
setDate()
// 24. Sets the day of the month of a date object
setFullYear()
// 25. Sets the year of a date object
setHours()
// 26. Sets the hour of a date object
setMilliseconds()
// 27. Sets the milliseconds of a date object
setMinutes()
// 28. Set the minutes of a date object
setMonth()
// 29. Sets the month of a date object
setSeconds()
// 30. Sets the seconds of a date object
setTime()
// 31. Sets a date to a specified number of milliseconds after / before January 1, 1970
setUTCDate()
// 32. Sets the day of the month of a date object, according to universal time
setUTCFullYear()
// 33. Sets the year of a date object, according to universal time
setUTCHours()
// 34. Sets the hour of a date object, according to universal time
setUTCMilliseconds()
// 35. Sets the milliseconds of a date object, according to universal time
setUTCMinutes()
// 36. Set the minutes of a date object, according to universal time
setUTCMonth()
// 37. Sets the month of a date object, according to universal time
setUTCSeconds()
// 38. Set the seconds of a date object, according to universal time
setYear()
// 39. Deprecated.Use the setFullYear() method instead
toDateString()
// 40. Converts the date portion of a Date object into a readable string
toGMTString()
// 41. Deprecated.Use the toUTCString() method instead
toISOString()
// 42. Returns the date as a string, using the ISO standard
toJSON()
// 43. Returns the date as a string, formatted as a JSON date
toLocaleDateString()
// 44. Returns the date portion of a Date object as a string, using locale conventions
toLocaleTimeString()
// 45. Returns the time portion of a Date object as a string, using locale conventions
toLocaleString()
// 46. Converts a Date object to a string, using locale conventions
toString()
// 47. Converts a Date object to a string
toTimeString()
// 48. Converts the time portion of a Date object to a string
toUTCString()
// 49. Converts a Date object to a string, according to universal time
UTC()
// 50. Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time
valueOf()
// 51. Returns the primitive value of a Date object 

/* JavaScript Global Reference */

// JavaScript Global Methods

decodeURI()
// 1. Decodes a URI
decodeURI
Component()
// 2. Decodes a URI component
encodeURI()
// 3. Encodes a URI
encodeURI
Component()
// 4. Encodes a URI component
escape()
// 5. Deprecated.Use instead:
encodeURI()
encodeURIComponent()
eval()
// 6. Evaluates a string and executes it as if it was script code
isFinite()
// 7. Determines whether a value is a finite, legal number
isNaN()
// 8. Determines whether a value is an illegal number
Number()
// 9. Converts an object's value to a number
parseFloat()
// 10. Parses a string and returns a floating point number
parseInt()
// 11. Parses a string and returns an integer
String()
// 12. Converts an object's value to a string
unescape()
// Deprecated. Use instead:
decodeURI()
decodeURIComponent()

/* // JavaScript Global Properties */
Infinity
// 1. A numeric value that represents positive/negative infinity
NaN
// 2. "Not-a-Number" value 
undefined
// 3. Indicates that a variable has not been assigned a value
