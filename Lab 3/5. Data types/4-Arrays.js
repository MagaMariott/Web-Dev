// Two syntaxes for creating an empty array
let arr = new Array();
arr = [];

let fruits = ["Apple", "Orange", "Plum"];
fruits = [
    "Apple",
    "Orange",
    "Plum",
];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

alert( fruits.length ); // 4
alert( fruits ); // Apple,Orange,Pear,Lemon
alert( fruits.pop() ); // remove "Lemon" and alert it
arr.push("Lemon"); // modify the array by reference


// mix of values
let array = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// get the object at index 1 and then show its name
alert( array[1].name ); // John
// get the function at index 3 and run it
array[3](); // hello


let korz = array; // copy by reference (two variables reference the same array)