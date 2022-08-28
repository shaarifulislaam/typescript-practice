/* console.log("Shariful Islam");

const country = "I love Bangladesh";

console.log(country);

const sum=(a,b)=>{
    const result = a+b;
    return result;
}

console.log(sum(10,5)); */

let playerName = "Tamim";

console.log(playerName)

// playerName = 33; 

console.log(playerName);

function sum(x : number,y : number){
    return x*y;
}

console.log(sum(5,5));

//array

const fruits = ['apple' , 'banana','mango'];
const random = [];
const mixed = ["banana",true,33,false,{}];
mixed.push({name: "mamun"});
random.push(30);
random.push("Shariful");
random.push("Islam");
fruits.push("66");
console.log(fruits);
console.log(random);
console.log(mixed);

//object

let person ={
    name : "mamun",
    age : 24,
    isDeveloper : true
}
// person.country ="Bangladesh"; is not possible bcz object schema already define 3 things

console.log(person);


// explicit & union types 


//variable
let a:string;
let b:number;

a = "mamun";
b = 5;

console.log(a);
console.log(b);

//array

let per: string [] = ['mamun','karim'];

console.log(per);

let num : number[] = [30,40] ;

num.push(40);
console.log(num);

let mixedArray : (number | string | boolean)[] =[20,'sdfsd',33 , true];
mixedArray.push(true)
console.log(mixedArray);

let m : number | string =20;
m='mamun';
console.log(m);

//object
let d: object ;
let c : {
    name:string ,
    age:number | string,
    adult:boolean
};

c = {
    name:"sharif",
    age:"Twenty Four",
    adult:true
}
console.log(c);


//dynamic types (any type)

let n : any ;
n = 'nnn'
n= 30;
console.log(n);
//array type any or dynamic
let arrayN:any[] = [];
arrayN.push(20);
arrayN.push('fddksf')
arrayN.push(true);
console.log(arrayN);

//object type any or dynamic
let obj:{
    name: any,
    age : any

}

obj ={ 
    name : 'mam',
    age :'fourty'
}
console.log(obj);

//* function type 
let my : Function;
my = () =>{
    console.log('from my')
}
my();
const myFunc  =(a:number,b:number) =>{
    return a*b;
    console.log('hello');
}
console.log(myFunc(10,5));

const func2 =(a:string,b:string)=>{
    console.log(`hello ${a} and hello ${b}`);
}

func2('4','20');

//optional parameter kaw parameter thakle bt use na krle tokon optional kora jay
const func3 =(a:string,b:string,c?:string)=>{  //optional parameter use c?:string
    console.log(`hello ${a} and hello ${b}`);
}

func3('4','20');

//parameter er default value set...default value set krle r optional deya lagbe nah
const func4 =(a:string,b:string,c:string = 'true')=>{  //optional parameter use c?:string
    console.log(true)
    console.log(`hello ${a} and hello ${b}`);
}

func4('Harun','Rahman');

//function return 
//js e funtion return na krle by default undefined thake
//kintu ts e function return na krle void thkae
//void mane holo kicu nai mane kicui naai
//undefined mane its not define bt its a value

//return string

const myFunc5 = (a:string , b:string) : string=>{
    return a+b;
}

myFunc5('ham','jam');

// return number
const myFunc6 = (a:number,b:number) : number=>{
    return a+ b;
}

myFunc6(5,6);


//* type aliases

const userDetails = (id:(number|string),user:{name: string,age:number}) =>{
    console.log(`User id ${id}, name is ${user.name} and age is ${user.age}`);
}

const sayHello =(user:{name:string,age:number})=>{
    console.log(`Hello ${user.age>50 ? "Sir" : "Mr"} ${user.name}`);
}

userDetails(10,{name:'ss',age:40});
sayHello({name:'dsfds',age:40});

//implement type aliases
//type gulo aibabe declare kora thakle amra poyojone jekono jaygay use krta pari bar bar amader likha lagteche nah...akkaj bar bar kora hocce nah

type stringOrNum = (number|string);
type userType = {name: string,age:number}

const userDetails2 = (id: stringOrNum,user:userType) =>{
    console.log(`User id ${id}, name is ${user.name} and age is ${user.age}`);
}

const sayHello2 =(user:userType)=>{
    console.log(`Hello ${user.age>50 ? "Sir" : "Mr"} ${user.name}`);
}

userDetails2(33,{name:'sssss',age:40});
sayHello2({name:'nnnn',age:40});

//*function signature
//*function er akta structure orthang amr function ta kmn hobe;

let funtionMy : ()=>void; //its function signature..orthath aita parameter nibe and void return korbe...aita arrow function ar moto bt arrow function na

let add: (a:number,b:number) => number; //aita 2 ta number add er parameter and number return krba tar signature

add = (x:number,y:number) =>{
    return x+y;
}
console.log("Result is=",add(55,45));

let calculation : (a:number, b:number,c:string) => number;

calculation = (x:number,y:number,z:string) =>{
    if(z==='add'){
        return x+y;
    }else{
        return x-y;
    }
}
console.log(calculation(30,20,"add"));

let calc : (a:number,b:number,c:string) => number;

calc = (x:number,y:number,z:string) =>{
    return (z==="add") ? ( x+y) : (x-y);
}

console.log(calc(50,20,"minus"));

let userInfo :(id:number|string , userDetails:{
    name : string,
    age:number
}) => string;

userInfo = (id:number | string , userDetails:{name: string , age:number}) =>{
        return `user id ${id} , ${userDetails.age <20 ? "Jr" : "Sr"} ${userDetails.name} and age is ${userDetails.age}`
}

console.log(userInfo(202,{name:"Arfan",age:22}));


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
import {Player} from './classes/Player.js'; //moduler system


//interface import 
import {isPlayer} from "../src/interfaces/isPlayer.js"
let sakib : isPlayer;
sakib = new Player("sakib",33,"BD")
console.log(sakib)

const tamim = new Player('Tamim',36,'BD');
const afif = new Player('afif',30,'BD');
const bijoy = new Player('bijoy',20,'BD');
// console.log(tamim.name)

const players : Player[] = [];

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

//private dile oita k class ar bahire access ow krta parbo na use ow krta parbo na
// readonly khetre class ar bahire access krta parbo kintu change krta parbo nah
 
//*moduler system

//kono kicu k import export korte..project e akadik file thakte pare tokon amra modular system use krbo
//modular system e ts file k export deyar por import korar jnno import {} location e .js dite hobe
//and tsconfig.json e module k es2015 korte hobe and target k ES6 kore dite hbe
//index.html e src e type="module" add kore dite hbe


//*Interface
//interface mane structure ta kmn hobe


interface rectangleOptions {
    width: number;
    length : number;

}
function drawRectangle(options:rectangleOptions){
    let width = options.width;
    let height = options.length;
}

let thereDobj = {
    width: 30,
    length : 40,
    heignt : 50
}
drawRectangle(thereDobj);

//*Generics : resusable block of code..mainly used type er khetre

const addId =<T extends {name: string;dept:string}> (obj: T) =>{
    let id = Math.floor(Math.random()*100);
    return {...obj,id};
}

let user = addId(
    {
        name : "Rakib",
        dept: "CSE",
        core: "Javascript"
    });

    // let user =addId("");

    console.log(user);

    //* Enum type

    enum Rtype {"Success", "Failue","Unauthenticate","Forbiden"};

    interface APIResponse <T> {
        status : number;
        type : Rtype;
        data : T ;
    }

    const response1 : APIResponse<string> = {
            status: 200,
            type : Rtype.Success,
            data : "test"
    }

    console.log(response1);

    //*Tuples : Build in type ..onekta array er moto...but aikhane order maintain korte hoy type er kintu array te maintain korte hoy nah
    //*real life example holo excel e coloum er order maintain korar jonno use hoy

    let aa = ['mamun',77,{p:3}];
    aa[1] ="sharif" ;
    //but tuples ar jnno  je order e jeta ache oita e dite hbe...
    let aa2:[string ,number , object] = ["Islam" , 44 ,{A :55}];
    // aa2[2] =33 ; //aikhane amak eeror dicce bcz ami order diyachi object bt assign krtaci number tai

    console.log(aa)
    console.log(aa2)