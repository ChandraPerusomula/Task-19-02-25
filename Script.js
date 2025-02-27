
/*   JavaScript Var Statement :


           The var keyword is used to declare variables in JavaScript. It has been part of the language since its inception. When a variable is declared using var, it is function-scoped or globally-scoped, depending on where it is declared.   

     Syntax:
             
            var variable = value;

            */

            var chandra=10
            console.log(chandra)

            var x=5;
            var y=6;
            console.log( x + y )



/*  JavaScript  LET :

Absolutely! Here are a few examples of how to use the let keyword in JavaScript:

Example let :

*/

let message = "Hello, World!";
console.log(message);


for (let i = 0; i < 5; i++) {
    console.log(i);
}


// Number:

var solo=86
 var leveling=30
 console.log(typeof(solo))
 console.log(typeof(leveling))

 console.log(solo + leveling )  
 console.log(solo - leveling )  
 console.log(solo * leveling)   
 console.log(solo ** leveling)  
 console.log(solo / leveling)   
 console.log(solo % leveling)   

/*  String:
JavaScript string is a primitive data type and is used for storing and manipulating a sequence of characters. It can contain zero or more characters within single or double quotes. This article contains a wide collection of JavaScript Programming examples based on String.

example:-
*/


let sentence = "Welcome to JavaScript!";
let part = sentence.substring(11, 21);
console.log(part);



am= "Solo Leveing"
console.log(am)



/* Boolean Values :-
Very often, in programming, you will need a data type that can only have one of two values, like

YES / NO
ON / OFF
TRUE / FALSE
For this, JavaScript has a Boolean data type. It can only take the values true or false.

Example:

*/
let isTrue = true;
let isFalse = false;

console.log(isTrue);  
console.log(isFalse);


/*Understanding null in JavaScript
In JavaScript, null is a primitive value that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object is not present. This is different from undefined, which signifies that a variable has been declared but has not yet been assigned a value.
Syntax:

let number = null;
console.log("Type of number is:" ,typeof number);

Example:
*/

const var1 = null;
if (var1) {
    console.log('var1 is not null');
} else {
    console.log('var1 is null');
}

/*  JavaScript Objects:

In JavaScript, objects are a fundamental data type that allows you to store collections of data and more complex entities. Unlike primitive data types (such as Number, String, Boolean, null, undefined, and symbol), which hold a single value, objects can hold multiple values as properties. This makes objects incredibly useful for grouping related data and operations, leading to more organized and maintainable code.

*/
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
    };

    
/*
Why Use Arrays?
If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:



Syntax:

const array_name = [item1, item2, ...]; 
Example:-
*/
const fruits = ["Apple", "Banana", "Mango"];
const iterator = fruits.values();

for (const value of iterator) {
console.log(value); 
}
  
/*
Functions in JavaScript:
Functions are fundamental building blocks in JavaScript. They are blocks of code designed to perform specific tasks or calculate values. Functions can take inputs, process them, and return outputs. They can be defined in various ways and can be invoked to execute the code within them.


Syntax:

function myFun(parameter) {
    statements...
};

Example:-
*/
function myFunction(a, b) {
    return a + b;
}

// Calling the function
const result = myFunction(5, 2);
console.log(result);


