/* JavaScript Class Reference */
/* JavaScript Classes */
class Car {  // Create a class
    constructor(brand) {  // Class constructor
        this.carname = brand;  // Class body/properties
    }
}
mycar = new Car("Ford");  // Create an object of Car class

// Class Methods
constructor()
// A special method for creating and initializing objects created within a class

// Class Keywords

/* extends
// Extends a class (inherit)
static
// Defines a static method for a class
super
// Refers to the parent class */

/* JavaScript Error Reference */
// Error Object
try {
    adddlert("Welcome");
}
catch (err) {
    document.getElementById("demo").innerHTML =
        err.name + "<br>" + err.message;
}

// Error Object Properties

name
// Sets or returns an error name
message
// Sets or returns an error message (a string)

/* Error Names */
EvalError
// Deprecated - use SyntaxError instead	 
RangeError
// A number "out of range" has occurred	
ReferenceError
// An illegal reference has occurred	
SyntaxError
// A syntax error has occurred	
TypeError
// A type error has occurred	
URIError
// An error in encodeURI() has occurred

/* Non-Standard Properties and Methods */
arguments	//Deprecated
caller	//Deprecated
columnNumber	//Firefox only
description	//Microsoft only
displayName	//Firefox only
fileName	//Firefox only
lineNumber	//Firefox only
number	//Microsoft only
stack	//Firefox only

evalError()	//Deprecated
internalError()	//Firefox only
toSource()	//Non Standard

// JavaScript Boolean Reference

// JavaScript Booleans
// The Boolean() Function
Boolean(10 > 9)
    (10 > 9)

// JavaScript Boolean Methods and Properties

constructor
// Returns the function that created JavaScript's Boolean prototype
prototype
// Allows you to add properties and methods to the Boolean prototype
toString()
// Converts a boolean value to a string, and returns the result
valueOf()
// Returns the primitive value of a boolean

// JavaScript Operators Reference
// JavaScript Arithmetic Operators

// Operator	Description	Example	Result in y	Result in x
/* +	Addition	x = y + 2	y = 5	x = 7	
-	Subtraction	x = y - 2	y = 5	x = 3	
*	Multiplication	x = y * 2	y = 5	x = 10	
*	Exponentiation (ES2016)	x = y ** 2	y = 5	x = 25	
/	Division	x = y / 2	y = 5	x = 2.5	
%	Modulus (division remainder) x = y % 2 y = 5	x = 1	
++	Increment	x = ++y	y = 6	x = 6	
x = y++	y = 6	x = 5	
--	Decrement	x = --y	y = 4	x = 4	
x = y--	y = 4	x = 5 */


// JavaScript Assignment Operators 
/* Operator	Example	Same As	Result in x
=	x = y	x = y	x = 5	
+=	x += y	x = x + y	x = 15	
-=	x -= y	x = x - y	x = 5	
*=	x *= y	x = x * y	x = 50	
/=	x /= y	x = x / y	x = 2	
%=	x %= y	x = x % y	x = 0 */

// JavaScript String Operators 
/* Operator	Example	text1	text2	text3	Try it
+	text3 = text1 + text2	"Good "	"Morning"	 "Good Morning"	
+=	text1 += text2	"Good Morning"	"Morning"	"" */

/* Comparison Operators */
/* Operator	Description	Comparing	Returns
==	equal to	x == 8	false	
x == 5	true	
===	equal value and equal type	x === "5"	false	
x === 5	true	
!=	not equal	x != 8	true	
!==	not equal value or not equal type	x !== "5"	true	
x !== 5	false	
>	greater than	x > 8	false	
<	less than	x < 8	true	
>=	greater than or equal to	x >= 8	false	
<=	less than or equal to	x <= 8	true */


// Conditional (Ternary) Operator

/* Syntax	Example
variablename = (condition) ? value1:value2	

voteable = (age < 18) ? "Too young":"Old enough"; */

// Logical Operators

/* Operator	Description	Example	Try it
&&	and	(x < 10 && y > 1) is true	
||	or	(x === 5 || y === 5) is false	
!	not	!(x === y) is true */

/* JavaScript Bitwise Operators */
/* Operator	Description	Example	Same as	Result	Decimal
&	AND	x = 5 & 1	0101 & 0001	0001	 1
|	OR	x = 5 | 1	0101 | 0001	0101	 5
~	NOT	x = ~ 5	 ~0101	1010	 10
^	XOR	x = 5 ^ 1	0101 ^ 0001	0100	 4
<<	Left shift	x = 5 << 1	0101 << 1	1010	 10
>>	Right shift	x = 5 >> 1	0101 >> 1	0010	  2 */

// The typeof Operator

typeof "John"                 // Returns string
typeof 3.14                   // Returns number
typeof NaN                    // Returns number
typeof false                  // Returns boolean
typeof [1, 2, 3, 4]           // Returns object
typeof { name: 'John', age: 34 }  // Returns object
typeof new Date()             // Returns object
typeof function () { }         // Returns function
typeof myCar                  // Returns undefined (if myCar is not declared)
typeof null                   // Returns object


// The delete Operator
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
delete person.age;   // or delete person["age"];

// The in Operator
// Arrays
const cars = ["Saab", "Volvo", "BMW"];
"Saab" in cars          // Returns false (specify the index number instead of value)
0 in cars               // Returns true
1 in cars               // Returns true
4 in cars               // Returns false (does not exist)
"length" in cars        // Returns true  (length is an Array property)

// Objects
// const person = {firstName:"John", lastName:"Doe", age:50};
"firstName" in person   // Returns true
"age" in person         // Returns true

// Predefined objects
"PI" in Math            // Returns true
"NaN" in Number         // Returns true
"length" in String      // Returns true


    // The instanceof Operator

    // const cars = ["Saab", "Volvo", "BMW"];

    (cars instanceof Array)   // Returns true
    (cars instanceof Object)  // Returns true
    (cars instanceof String)  // Returns false
    (cars instanceof Number)  // Returns false


// The void Operator
/*    <a href="javascript:void(0);">
 Useless link
</a>

<a href="javascript:void(document.body.style.backgroundColor='red');">
 Click me to change the background color of body to red
</a> */

// JavaScript Statements Reference

// JavaScript Statements 
document.getElementById("demo").innerHTML = "Hello Dolly.";

/* JavaScript Statement Identifiers */
/* break	Exits a switch or a loop
class	Declares a class
const	Declares a variable with a constant value
continue	Breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop
debugger	Stops the execution of JavaScript, and calls (if available) the debugging function
do ... while	Executes a block of statements and repeats the block while a condition is true
for	Loops through a block of code a number of times
for ... in	Loops through the properties of an object
for ... of	Loops through the values of an iterable object
function	Declares a function
if ... else ... else if	Marks a block of statements to be executed depending on a condition
let	Declares a variable
return	Stops the execution of a function and returns a value from that function
switch	Marks a block of statements to be executed depending on different cases
throw	Throws (generates) an error
try ... catch ... finally	Marks the block of statements to be executed when an error occurs in a try block, and implements error handling
var	Declares a variable
while	Marks a block of statements to be executed while a condition is true */

// JavaScript JSON Reference
// JSON (JavaScript Object Notation)

// a JavaScript object...:
var myObj = { "name": "John", "age": 31, "city": "New York" };

// ...converted into JSON:
var myJSON = JSON.stringify(myObj);

// send JSON:
window.location = "demo_json.php?x=" + myJSON;

// JSON Methods
parse()
// Parses a JSON string and returns a JavaScript object
stringify()
// Convert a JavaScript object to a JSON string

// More Examples

// myJSON is text received in JSON format.
// Convert JSON into a JavaScript object:
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;

// Example
// Storing data:
myObj = { "name": "John", "age": 31, "city": "New York" };
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;