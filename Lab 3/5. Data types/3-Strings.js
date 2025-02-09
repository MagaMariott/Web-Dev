let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;


function sum(a, b) {
    return a + b;
}
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.


let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList); // a list of guests, multiple lines

guestList = "Guests:\n * John\n * Pete\n * Mary";
alert(guestList); // a multiline list of guests, same as above


let str1 = "Hello\nWorld"; // two lines using a "newline symbol"
let str2 = `Hello
World`;  // two lines using a normal newline and backticks
alert(str1 == str2); // true