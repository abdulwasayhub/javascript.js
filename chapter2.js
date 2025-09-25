//Comments in JS
/*
Part of Code which is not executed

//This is a single line comment

/*This is a multi-line
comment.*/

//Operators in JS
/*
Used to perform some operation on data

Arithmetic Operators
+, -, *, /
Modulus
Exponentation
Increment //++
Decrement //--


let a = 5;
let b = 2;
console.log('a = ', a, 'b = ', b)

console.log('a + b = ', a + b)
console.log('a - b = ', a - b)
console.log('a * b = ', a * b)
console.log('a / b = ', a / b)
console.log('a % b = ', a % b) //modulus
console.log('a ** b = ', a ** b) //exponent



//Unary Operator

let a = 5;
let b = 2;

//a = a + 1;
//a++
a--
console.log(a);

//a++ (post), a-- (post)
//++a (pre), --a (pre)

console.log('a-- = ', a--);
console.log('a = ', a)


//Assignment Operators
//assign values
// = += -= *= %= **=

let a = 5;
let b = 2;

a += 4 // a = a + 4
//a -= 4
//a /= 4 
//a %= 4 
//a ** 4 
console.log('a = ', a)


//Comparison Operators
//equal to ==, equal to & type ===, not  equal to !=, not equal to & type !==

let a = 5;
let b = 2;
console.log('a == b', a == b) //boolean - true/false
console.log('a != b', a != b)

let c = 15;
let d = '25';
console.log('c === d', c === d);
console.log('c !== d', c !== d);

let e = 5;
let f = 3;
console.log('e > f', e > f)
console.log('e <= f', e <= f)


//Logical Operators
//Logical AND &&, Logical OR ||, Logical NOT !

//and - both true = true
//or = one true = true
//not - change true to false, false to true

let a = 6;
let b = 5;

let cond1 = a > b; //true
let cond2 = a === 6; //true
console.log('cond1 && cond2 = ', cond1 && cond2)


//Conditional Statements
//To implement some condition in the code

//if statement
let color;
if (mode === 'dark mode'){
    color = 'black';
}


let age = 25

if (age > 18){
    console.log('you can vote')
}



//if else
let mode = 'dark'
let color;
if (mode === 'dark mode'){
    color = 'black';
}else{
    color = 'white';
}

console.log(color)

//Q2
let age = 25
if (age>=18){
    console.log('vote')
}else{
    console.log('not vote')
}


//odd or even number
//2 divide -> even
// not divisible by 2 -> odd

let num = 10;
if (num%2 === 0){
    console.log(num, 'is even')
}else{
    console.log(num, 'is odd')
}

//syntax -> rules

//else-if statements
//Q
if (age < 18){
    console.log('junior')
} else if (age > 60) {
    console.log('senior')
} else {
    console.log('middle')
}


//Q
let mode = 'dark'
let color;

if(mode === 'dark'){
    color = 'black'
} else if (mode === 'blue'){
    color = 'blue'
} else if (mode === 'red'){
    color = 'red'
}else{
    color = 'white'
}

console.log(color)


//Ternary Operators
// condition ? true output : false output
//age > 18 ? 'adult' : 'not adult';

let age = 16;
let result = age > 18 ? 'adult' : 'not adult';
console.log(result)


//Practice
//Get user to input a number using prompt('Enter a number'). Check if the number is a multipe of 5 or not

let inputNumber = 15;
if (inputNumber % 5 === 0){
    console.log('multiple of 5')
}else{
    console.log('not multiple of 5')
}
*/

//Write a code whic can givw grades to students according to their scores:
//90 - 100, A
//70-89, B
//60-69, C
//50-59, D
//0-49, F

let score = 45;
let grade;
if (score >=90 && score <= 100){
    grade = 'A';
}else if (score >=70 && score <= 89){
    grade = 'B';
}else if (score >=60 && score <= 69){
    grade = 'C';
}else if (score >=50 && score <= 59){
    grade = 'D';
}else{
    grade = 'F'
}
console.log('according to your score, your grade becomes',grade)
