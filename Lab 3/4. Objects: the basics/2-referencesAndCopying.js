let message = "Hello!";
let phrase = message;


let user = {
    name: "John"
};

let admin = user; // copy the reference
admin.name = 'Pete'; // changed by the "admin" reference
alert(user.name); // 'Pete', changes are seen from the "user" reference


let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true