// It shows a message and waits for the user to press “OK”.
alert("Hello");

// It shows a modal window with a text message and the buttons OK/Cancel.
result = prompt(title, [deflt]);


let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!

// Recommend always providing the second argument
let test = prompt("Test", ''); // <-- for IE


// Shows a modal window with a question and two buttons: OK and Cancel. The result is true if OK is pressed and false otherwise.
result = confirm(question);

let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed