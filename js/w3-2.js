/* JavaScript RegExp Reference */
// RegExp Object
let pattern = /w3schools/i;

/* Example explained: */
w3schools
    // 1. The pattern to search for
    / w3schools /
    // 2. A regular expression
    /w3schools/i
// 3. A case-insensitive regular expression

// Modifiers

g
// 1. Perform a global match (find all matches rather than stopping after the first match)
i
// 2. Perform case-insensitive matching
m
// 3. Perform multiline matching

/* // Brackets */
[abc]
// 1. Find any character between the brackets

/* // [^ abc] */
// 2. Find any character NOT between the brackets

[0 - 9]
    // 3. Find any character between the brackets (any digit)

    /* // [^ 0 - 9] */
    // 4. Find any character NOT between the brackets (any non-digit)

    (x | y)
    // 5. Find any of the alternatives specified

    /* Metacharacters */
    .
    /* // 1. Find a single character, except newline or line terminator
    \w
    // 2. Find a word character
    \W
    // 3. Find a non - word character   
    \d
    // 4. Find a digit
    \D
    // 5. Find a non - digit character
    \s
    // 6. Find a whitespace character
    \S
    // 7. Find a non - whitespace character
    \b
    // 8. Find a match at the beginning / end of a word, beginning like this: \bHI, end like this: HI\b
    \B
    // 9. Find a match, but not at the beginning / end of a word
    \0
    // 10. Find a NULL character
    \n
    // 11. Find a new line character
    \f
    // 12. Find a form feed character
    \r
    // 13. Find a carriage return character
    \t
    // 14. Find a tab character
    \v
    // 15. Find a vertical tab character
    \xxx
    // 16. Find the character specified by an octal number xxx
    \xdd
    // 17 Find the character specified by a hexadecimal number dd
    \udddd
    // 18. Find the Unicode character specified by a hexadecimal number dddd */

    /* // Quantifiers */

    n +
    // Matches any string that contains at least one n
    n *
    // Matches any string that contains zero or more occurrences of n
    n ?
    // Matches any string that contains zero or one occurrences of n

    /* // n{ X } */
    // Matches any string that contains a sequence of X n's

    /* // n{ X, Y } */
    // Matches any string that contains a sequence of X to Y n's

    /* // n{ X,} */
    // Matches any string that contains a sequence of at least X n's

    n$
    // Matches any string with n at the end of it
    ^ n
        // Matches any string with n at the beginning of it

/* // ?= n */
        // Matches any string that is followed by a specific string n

/* ? !n */
// Matches any string that is not followed by a specific string n

/* RegExp Object Properties */

// constructor 1. Returns the function that created the RegExp object's prototype

// global 2. Checks whether the "g" modifier is set


// ignoreCase 3. Checks whether the "i" modifier is set

// lastIndex 4. Specifies the index at which to start the next match

// multiline 5. Checks whether the "m" modifier is set

//  6. Returns the text of the RegExp pattern

// RegExp Object Methods

// compile() 1. Deprecated in version 1.5. Compiles a regular expression

// exec() 2. Tests for a match in a string. Returns the first match

// test() 3. Tests for a match in a string. Returns true or false
toString()

// 4. Returns the string value of the regular expression 