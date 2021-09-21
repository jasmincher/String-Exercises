//Group Members: Myself, Michael, and Saul

//DrEvil
//create a function called DrEvil. It should take a single argument, an amount
//and return '<amount> dollars', except it will add '(pinky)' at the end if
//the amount is 1 million. For example:
// DrEvil(10): 10 dollars
// DrEvil(1000000): 1000000 dollars (pinky)
// answer below:

function DrEvil(dollars) {
  if (dollars < 1000000) {
    console.log(dollars + " dollars");
    return dollars + " dollars";
  } else {
    console.log(dollars + " dollars (pinky)");
    return dollars + " dollars (pinky)";
  }
}

DrEvil(10000000);

//Create a function called mixUp
//It should take in two stings, and return the concatenation of the two strings(separated by a space)
//slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.
//For example:
//mixUp('mix', 'pod'): 'pox mid'
//mixUp('dog', 'dinner'): 'dig donner'
//write answer below

function mixUp(string1, string2) {
  let firstMix = string2.slice(0, 2) + string1.slice(2, string1.length);
  let secondMix = string1.slice(0, 2) + string2.slice(2, string2.length);
  console.log(firstMix + " " + secondMix);
  return firstMix + " " + secondMix;
}

mixUp("dog", "dinner");

//Create a function called fixStart
//It should take a single argument, a string, and return a version where all occurences of its first
//character have been replaced with '*', except for the character itself.
//fixstart('babble'): 'ba**le'
//write answer below

function fixStart(string) {
  let restOfString = string.slice(1, string.length);
  let replaced = restOfString.replaceAll(string.charAt(0), "*");

  console.log(string.charAt(0) + replaced);
  return string.charAt(0) + replaced;
}

fixStart("babble");

//Create a function called verbing. It should take a single argument, a string.
//If it's length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
//in which case it should add 'ly' instead. If the string length is less than 3,
//it should leave it unchanged. For example:
//verbing('swim'): 'swimming'
//verbing('swimming'): 'swimmingly'
//verbing('go'): 'go'
//write answer below

function verbing(string) {
  if (
    string.length >= 3 &&
    string.slice(string.length - 3, string.length) !== "ing"
  ) {
    string += "ing";
  } else if (
    string.length >= 3 &&
    string.slice(string.length - 3, string.length) == "ing"
  ) {
    string += "ly";
  } else {
    string = string;
  }

  console.log(string);
}

verbing("go");

//Create a function called notBad that takes a single argument, a string
//It should find the first appearance of the substring 'not' and 'bad'
//If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
//substring with 'good' and return the result
//If it doesn't find 'not' and 'bad' in the right sequence (or at all), just
//return the original sentence
//For example
//notBad('This dinner is not that bad!'): 'This dinner is good!'
//notBad('This movie is not so bad!'): 'This movie is good!'
//notBad('This dinner is bad!'): 'This dinner is bad!'
//write answer below


function notBad(string){
let subStringNot =  string.indexOf('not');
let subStringBad = string.indexOf('bad');

let results = subStringBad - subStringNot;

if(subStringNot == -1 || subStringBad == -1 || results < 0){
    console.log(string)
    return string;
}else{
    console.log(string.slice(0, subStringNot) + 'good' + string.slice(subStringBad + 3))
    return string.slice(0, subStringNot) + 'good' + string.slice(subStringBad + 3); 
}
}


notBad("This dinner is not that bad!");