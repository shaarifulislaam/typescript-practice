"use strict";
/* console.log("Shariful Islam");

const country = "I love Bangladesh";

console.log(country);

const sum=(a,b)=>{
    const result = a+b;
    return result;
}

console.log(sum(10,5)); */
let playerName = "Tamim";
console.log(playerName);
// playerName = 33; 
console.log(playerName);
function sum(x, y) {
    return x * y;
}
console.log(sum(5, 5));
//array
const fruits = ['apple', 'banana', 'mango'];
const random = [];
const mixed = ["banana", true, 33, false, {}];
mixed.push({ name: "mamun" });
random.push(30);
random.push("Shariful");
random.push("Islam");
fruits.push("66");
console.log(fruits);
console.log(random);
console.log(mixed);
//object
let person = {
    name: "mamun",
    age: 24,
    isDeveloper: true
};
// person.country ="Bangladesh"; is not possible bcz object schema already define 3 things
console.log(person);
// explicit & union types 
//variable
let a;
let b;
a = "mamun";
b = 5;
console.log(a);
console.log(b);
//array
let per = ['mamun', 'karim'];
console.log(per);
let num = [30, 40];
num.push(40);
console.log(num);
let mixedArray = [20, 'sdfsd', 33, true];
mixedArray.push(true);
console.log(mixedArray);
let m = 20;
m = 'mamun';
console.log(m);
//object
let d;
let c;
c = {
    name: "sharif",
    age: "Twenty Four",
    adult: true
};
console.log(c);
//dynamic types (any type)
let n;
n = 'nnn';
n = 30;
console.log(n);
//array type any or dynamic
let arrayN = [];
arrayN.push(20);
arrayN.push('fddksf');
arrayN.push(true);
console.log(arrayN);
//object type any or dynamic
let obj;
obj = {
    name: 'mam',
    age: 'fourty'
};
console.log(obj);
// function type 
let my;
my = () => {
    console.log('from my');
};
my();
const myFunc = (a, b) => {
    return a * b;
    console.log('hello');
};
console.log(myFunc(10, 5));
const func2 = (a, b) => {
    console.log(`hello ${a} and hello ${b}`);
};
func2('4', '20');
//optional parameter kaw parameter thakle bt use na krle tokon optional kora jay
const func3 = (a, b, c) => {
    console.log(`hello ${a} and hello ${b}`);
};
func3('4', '20');
//parameter er default value set...default value set krle r optional deya lagbe nah
const func4 = (a, b, c = 'true') => {
    console.log(true);
    console.log(`hello ${a} and hello ${b}`);
};
func4('Harun', 'Rahman');
//function return 
//js e funtion return na krle by default undefined thake
//kintu ts e function return na krle void thkae
//void mane holo kicu nai mane kicui naai
//undefined mane its not define bt its a value
//return string
const myFunc5 = (a, b) => {
    return a + b;
};
myFunc5('ham', 'jam');
// return number
const myFunc6 = (a, b) => {
    return a + b;
};
myFunc6(5, 6);
