'use strict'

let myName = "Daneen Carroll";

let myNumber = 10;
myNumber = 10e-1;
myNumber = 0x00F;
myNumber = 0o007;
myNumber = Infinity;

let myFirstName ="Daneen";
let myLastName = "Carroll";
let myFullName = 'First Name:\t${myFirstName}\nlast Name:\t{myLastName}'; 
let a = 8;
let valueA = 10;
let valueB = 5;

let total = valueA * valueB;

let fullName = '${myFirstName} ${myLastName}';
const RED = Symbol();
const ORANGE = Symbol();



console.log('Value of RED is' + RED.valueOf().toString());
console.log(RED === ORANGE);

var name = 'Daneen Carroll';
console.log(`Hello, ${name}!`);

console.log('5 is equal to"5"?');
console.log( 5 == "5");

console.log('5 is equal to"5"?');
console.log( 5 === "5");

let obj1 = {};

obj1.firstName = 'Daneen';
obj1.fullName = fullName;

let obj2 = {firstName: "Daneen", lastName: "Carroll"};

obj2.fullName = function () {
    return this.firstName + ' ' + this.lastName;
    }

console.log(obj2.fullName());

console.log(obj2);

console.log(JSON.stringify(obj2));

let myArray = [];

myArray.push("Daneen Carroll");
myArray.push(46);

let myArray2 = ['Carroll', 45];
console.log(myArray[0]);
console.log(obj1['firstname']);
console.log(obj1.fullName);

let mybirthday = new Date(1973,5,28);
console.log(myBirthday.toJSON());


