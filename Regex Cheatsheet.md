# Regex Cheatsheet
This is a cheatsheet on regular expressions based on the [Regular Expression Crash Course for Beginners](https://www.youtube.com/watch?v=ZfQFUJhPqMM) on FreecodeCamp.

## What are Regular Expressions (RegEx)?
Regular expressions define a search pattern that can be used to search for things in a string. 

## 1) Using the Test Method
Regex are used in programming to match parts of strings. You create patterns to help do that matchin. 

The test method takes a regex, applies it to a string and returns true if the pattern matches something.

Example:

let regex = /the/ 

let myString = "Hello World!";
let myRegex = /Hello/;
let result = myRegex.test(myString)

console.log(result); // 

## 2) Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

## 3) Match a Literal String with Different Possibilities
Regex has an "or" operator, which is a pipe character (|). The regex will match for any of the options when using the pipe character.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

## 4) Ignore Case While Matching
You can match both uppercase and lowercase using a flag. The "i" flag means "ignore case"

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;

let result = fccRegex.test(myString); // logs true

## 5) Extract Matches
Use the "match" method to extract matches. 

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); */ // logs "coding"

## 6) Find More Than the First Match
It's possible to search for a pattern more than once using the "g" flag.

let testStr = "Repeath, Repeath, Repeat";
let ourRegex = /Repeat/g;
testStr.match(ourRegex); // returns array of 3 elements

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // combines two flags 
let result = twinkleStar.match(starRegex);  

console.log(result); // returns ["Twinkle", "twinkle"] */ 

## 7) Match Anything with Wildcard Period
In regex, a "." is a wildcard character which can stand for anything. 

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // returns ["hum"]
hugStr.match(huRegex); // returns ["hug"]

## 8) Match Single Character with Multiple Possibilities
Match from a predefined group of chars using brackets:

let bgRegex = /b[aiu]g/; // would match bag, big or bug

## 9) Match Letters of the Alphabet

let alphabetRegex = /[a-z]/ig; // = match all upper and lowercase letters in the entire string

## 10) Match Numbers and Letters of the Alphabet

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[2-6h-s]/ig;
let result = quoteSample.match(myRegex);

console.log(result); // logs every number and letter in the defined range */

## 11) Match Single Characters Not Specified
Use the carrot character (^) for finding chars you don't want to match.

let quoteSample = "3 blind mice."
let myRegex = /[^0-9aeiou]/ig;
let result = quoteSample.match(myRegex);

console.log(result); // returns everything except vowel and numbers */

## 12) Match Characters that Occur One or More Times
Use the plus (+) character to match characters that occur more than once.

let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

console.log(result); // logs ["ss", "ss"] */

## 13) Match Characters that Occur Zero or More Times
Use the star (*) character to match characters that occur zer or more times.

let soccerWord = "goooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/

/* soccerWord.match(goRegex); // returns ["gooooo"]
gPhrase.match(goRegex); // returns ["g"]
oPhrase.match(goRegex); // returns null

## 14) Find Characters with Lazy Matching
A greedy match finds the longest possible part of a string that fits the regex pattern, while a lazy match finds the smallest possible part of a string that matches the regex pattern. Regex patterns default to greedy.

let string = "titanic";
let regex = /t[a-z]*i/; // searches for t + zero or more letters + letter i at the end
string.match(regex); // example of a greedy match, logs "titani"

// lazy match: let regex = /t[a-z]*?i/, logs "ti"

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // = Zero or more occurances of any chars = greedy match

// lazy match let myRegex= /<.*?>/; logs ["<h1>"]

let result = text.match(myRegex); // returns the whole string

## 15) Match Beginning String Patterns
Outside of brackets, a carrot character is used to match the beginning of a string

let rickyAndCal = "Cal and Ricky both like racing."
let calRegex = /^Cal/; // logs true
let result = calRegex.test(rickyAndCal);
console.log(result);

## 16) Match Ending String Patterns
Use the dollar sign ($) to match ending string patterns.

et caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose); 
console.log(result); // logs true

## 17) Match All Letters and Numbers
/\w/ = matches capital a-z, lowercase a-z, digits 0-9 and _

let alphabetRegexV2 = /\w/g;

## 18) Match Everything But Letters and Numbers
use "W" instead of "w". 

let nonAlphabetRegex = /\W/g;

## 19) Match All Numbers
\d - match all digits

let numRegex = /\d/g;

## 20) Match All Non-Numbers
use "\D"

let numRegex = /\D/g;

## 21) Match White-space
Use \s - matches a space, a carriage return, a tab, a form feed and a newline character. 

let countWhiteSpace = /\s/;

## 22) Match Non-Whitespace Characters
use \S

let countWhiteSpace = /\S/g; // logs all whitespaces as " "

## 23) Specify Upper and Lower Number of Matches
use quantity specifiers (curly brackets)

let ohRegex = /Oh{3,6} no/;

## 24) Specify Only the Lower Number of Matches
using /z{4,}/ = a number followed by a comma

## 25) Specify Exact Number of Matches
Use a single number within curly braces.

let timRegex = /Tim{4}ber/; // looks for 4 m's

## 26) Check for All or None
A question mark checks for zero or one of the preceding elements.

let favWord = "favorite";
let favRegex = /favou?rite/; // string may or may not have a "u"
let result =  favRegex.test(favWord);

## 27) Positive and Negative Lookahead
Lookaheads are patterns that tell JS to look ahead in your string to check for patterns further along. This can be useful if you want to search for multiple patterns over the same string. There are positve and negative lookaheads.

let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/; // positive LA: look for a "u", but without returning it
let qRegex = /q(?!u)/; // negative LA: make sure the "u" is NOT present later in the string
quit.match(quRegex); // returns ["q"]
noquit.match(qRegex); // returns ["q"]

## 28) Reuse Patterns Using Capture Groups
Use parentheses to group things you're searching for. You can also use them to repeat substrings using a slash and a number: "\1"

let repeatRegex = /(w+)\s\1/;

## 29) Use Capture Groups to Search and Replace
Use the replace function.

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// returns "The sky is blue."

"Code Camp".replace(/(w+)\s(\w+)/, '$2 $1');
// returns "Camp Code"

## 30) Remove Whitespace from Start to End

let hello = "      Hello, World!    ";
let wsRegex = /^\s+|\s+$/g; // pipe char means "or"
let result = hello.replace(wsRegex, "");
console.log(result);