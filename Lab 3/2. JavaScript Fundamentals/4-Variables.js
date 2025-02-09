let message;
message = 'Hello'; // store the string 'Hello' in the variable named message
alert(message); // shows the variable content

let message1 = 'Hello!'; // define the variable and assign the value


let user = 'John', age = 25, message2 = 'Hello';

let user1 = 'John';
let age1 = 25;
let message3 = 'Hello';

let user2 = 'John',
  age2 = 25,
message4 = 'Hello';


var message5 = 'Hello';


let message6;
message6 = 'Hello!';
message6 = 'World!'; // value changed
alert(message6);


let hello = 'Hello world!';
let sms;
sms = hello;   // copy 'Hello world' from hello into message
// now two variables hold the same data
alert(hello); // Hello world!
alert(sms); // Hello world!


let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
alert($ + _); // 3


// let 1a; cannot start with a digit
// let my-name; hyphens '-' aren't allowed in the name

let имя = '...';
let 我 = '...';


// note: no "use strict" in this example
num = 5; // the variable "num" is created if it didn't exist
alert(num); // 5


const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!


const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
