let user = new Object(); // "object constructor" syntax
user = {};  // "object literal" syntax

user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30,        // by key "age" store value 30
    "likes birds": true  // multiword property name must be quoted
};


// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

user.isAdmin = true;
delete user.age;

// set
user["likes birds"] = true;
// get
alert(user["likes birds"]); // true
// delete
delete user["likes birds"];


let key = "likes birds";
// same as user["likes birds"] = true;
user[key] = true;


let user1 = {
    name: "John",
    age: 30
  };
let key1 = prompt("What do you want to know about the user?", "name");
  
// access by variable
alert( user1[key1] ); // John (if enter "name")


let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
alert( bag.apple ); // 5 if fruit="apple"


function makeUser(name, age, course) {
    return {
      name: name, // same
      age, // same
      course: 2
    };
}
  
let user = makeUser("John", 30);
alert(user.name); // John