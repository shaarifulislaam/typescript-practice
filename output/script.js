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
//* function type 
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
//* type aliases
const userDetails = (id, user) => {
    console.log(`User id ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr"} ${user.name}`);
};
userDetails(10, { name: 'ss', age: 40 });
sayHello({ name: 'dsfds', age: 40 });
const userDetails2 = (id, user) => {
    console.log(`User id ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello2 = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr"} ${user.name}`);
};
userDetails2(33, { name: 'sssss', age: 40 });
sayHello2({ name: 'nnnn', age: 40 });
//*function signature
//*function er akta structure orthang amr function ta kmn hobe;
let funtionMy; //its function signature..orthath aita parameter nibe and void return korbe...aita arrow function ar moto bt arrow function na
let add; //aita 2 ta number add er parameter and number return krba tar signature
add = (x, y) => {
    return x + y;
};
console.log("Result is=", add(55, 45));
let calculation;
calculation = (x, y, z) => {
    if (z === 'add') {
        return x + y;
    }
    else {
        return x - y;
    }
};
console.log(calculation(30, 20, "add"));
let calc;
calc = (x, y, z) => {
    return (z === "add") ? (x + y) : (x - y);
};
console.log(calc(50, 20, "minus"));
let userInfo;
userInfo = (id, userDetails) => {
    return `user id ${id} , ${userDetails.age < 20 ? "Jr" : "Sr"} ${userDetails.name} and age is ${userDetails.age}`;
};
console.log(userInfo(202, { name: "Arfan", age: 22 }));
//*class
/* class Player {
   private name: string;
   private age: number;
   readonly country : string;

    constructor(n:string , a:number , c:string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play (){
        console.log(`${this.name} from ${this.country} is playing!`);
    }
} */
import { Player } from './classes/Player.js'; //moduler system
let sakib;
sakib = new Player("sakib", 33, "BD");
console.log(sakib);
const tamim = new Player('Tamim', 36, 'BD');
const afif = new Player('afif', 30, 'BD');
const bijoy = new Player('bijoy', 20, 'BD');
// console.log(tamim.name)
const players = [];
players.push(afif);
players.push(bijoy);
players.push(tamim);
console.log(players);
/* console.log(tamim);
console.log(afif);
console.log(bijoy); */
//*access Modifier
//*class ar kono property k jokon bahire theke access kora jay oita wired type..aita duer korar jnno access modifier...access modifer use krle oita sudu class ar maje access krta parbo ar bahire nah access modify krta jatake krbo oitar sathe private keyword jukto krta hobe..tahole oita k r class ar bahire access krte parbe nah
// console.log(afif.name);
// console.log(afif.age);
console.log(afif.country);
function drawRectangle(options) {
    let width = options.width;
    let height = options.length;
}
let thereDobj = {
    width: 30,
    length: 40,
    heignt: 50
};
drawRectangle(thereDobj);
//*Generics : resusable block of code..mainly used type er khetre
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: "Rakib",
    dept: "CSE",
    core: "Javascript"
});
// let user =addId("");
console.log(user);
//* Enum type
var Rtype;
(function (Rtype) {
    Rtype[Rtype["Success"] = 0] = "Success";
    Rtype[Rtype["Failue"] = 1] = "Failue";
    Rtype[Rtype["Unauthenticate"] = 2] = "Unauthenticate";
    Rtype[Rtype["Forbiden"] = 3] = "Forbiden";
})(Rtype || (Rtype = {}));
;
const response1 = {
    status: 200,
    type: Rtype.Success,
    data: "test"
};
console.log(response1);
//*Tuples : Build in type ..onekta array er moto...but aikhane order maintain korte hoy type er kintu array te maintain korte hoy nah
//*real life example holo excel e coloum er order maintain korar jonno use hoy
let aa = ['mamun', 77, { p: 3 }];
aa[1] = "sharif";
//but tuples ar jnno  je order e jeta ache oita e dite hbe...
let aa2 = ["Islam", 44, { A: 55 }];
// aa2[2] =33 ; //aikhane amak eeror dicce bcz ami order diyachi object bt assign krtaci number tai
console.log(aa);
console.log(aa2);
