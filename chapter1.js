//JS is a programming language. We use it to give instructions to the computer

//Input (code) --> Computer --> Output

//1, 2 +                        3

//Inside Browser

/*
//Print a message to the console
console.log('Wasay');

//<---------------->

//Variables
//Variables are conntainers for data

fullName = 'javascript'
console.log(fullName)

x = null;
y = undefined;
console.log(x)
console.log(y)

//undefined - donot know what it is
//null - know but it's empty for now

//boolean - true/false

isFollow = false;
console.log(isFollow)

//JS is a dynamically typed language

fullName = 25
console.log(fullName)
*/

//Variable Rules

/*
Variable names are case sensitive 'a' & 'A' is different
Only letters, digit, underscore(_) and $ is allowed. (not even space)
Only a letter, underscore(_) or $ should be 1st character
Reserved words cannot be variable names
*/

/*
fullname = 'wasay'
_fullname = 'wasay'
$fullname = 'wasay'

fullName = 'react js'
console.log(fullName)
console.log(fullname)
*/

//let, const, var

/* 
var: Variable can be re-declared & updated. A global scope variable. (Before 2015)
let: Variable cannot be re-declared but can be updated. A block scope variable. (ES6, ecmascript 6, in 2015)
const: Variable cannot be re-declared or updated. A block scope variable. (ES6, ecmascript 6, in 2015)
*/

/*
let fullName = 'tony stark';
let age = 24;
let totalPrice = 1000;
*/

//block scope
//let
/*
{
    let a = 5;
    console.log(a)
}
{
    let a = 10;
    console.log(a)
}
*/

//Datatype
/*
Primitve (7)
Number, String, Boolean, undefined, Null, BigInt, Symbol

Non-primitive
Objects (Arrays, Functions)
Objects --> Collection of values


let age = 24 //number
console.log(typeof age)

let name = 'tony stark' //string
console.log(typeof name)

let isFollow = true //boolean

let x = undefined //undefined

let y = null //null
console.log(typeof y) //object

let z = BigInt('123')
console.log(typeof z)

let s = Symbol('Hello')
console.log(typeof s)


//Objects - collection, key - value pair

const student = {
    fullName : 'Abdul Wasay',
    age: 24,
    cgpa: 3.12,
    isPass: true
};
console.log(student)
console.log(typeof student)
console.log(student.age) //accessing keys in objects

//obj.key
//obj['key']
*/

//Practice
//Create a const object called product to store information

const product = {
    title: 'Ball Pen',
    rating: 4,
    offer: 5,
    price: 270
};
console.log(product)

//Create a const object called profile to store information

const profile = {
    username: 'abdulwasay',
    followers: 700,
    following: 2000,
    post: 300,
    isFollow: false,
    bio: 'web developer'
}