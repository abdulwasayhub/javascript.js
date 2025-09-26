//Loops & Strings

//Loops
//Loops are used to execute a piece of code again & again

//for loop
/*
for (let i = 1; i <= 5; i++){
console.log('Wasay')
}


//initialize, stopping condition, updation

//Calculate sum of 1 to n numbers
let sum = 0;
let n = 5;
for (let i=1; i<=n; i++){
    sum = sum + i; // sum = 0 + 1 => 1, sum = 1 + 2 => 3, sum = 3 + 3 => 6, sum = 6 + 4 => 10, sum = 10 + 5 => 15
}
console.log('sum = ', sum)
*/

//Infinite Loop: A Loop that never ends

//While loop
/*
while(condition){
//do some work
}

//stopping condition - at start
//updation

let i = 1;
while(i<=5){
    console.log('i=',i)
    i++;
}


//do while loop

do {
    //do some work
} while (condition);

//atleast 1 run


let i = 20;
do {
    console.log('Wasay')
    i++;
} while (i<=10);


//for-of loop
//iterate on arrays and strings

for(let val of strVar){
    //do some work
}


let str = 'Wasay';
let size = 0;
for (let i of str){
    console.log(i)
    size++
}
console.log(size)


//for in loop
//to iterate on objects

let student = {
    name: 'Wasay',
    age: 24,
    cgpa: 3.1,
    isPass: true
};

for (let i in student){
    console.log('key= ', i, 'value= ', student[i])
}


//Practice
//Print all even numbers from 0 to 100
for (let i=0; i<=100; i++){
    if(i%2 === 0){
        console.log('even number= ', i)
    }
}


//Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gameNum = 25;
let userNum = 25;
while(userNum != gameNum){ //game
    userNum = console.log('you enter wrong number. Guess again')
}
console.log('congratulations, you entered the right number')


//Strings
//String is a sequence of characters used to represent text

let str = 'WasayMunir';
let str2 ="Abdul";
console.log(str.length) //length
console.log(str[0]) //accessing index

//Template literals
//A way to have embedded expressions in strings
let specialString = `This is a template literal`
console.log(specialString)

let obj = {
    item: 'pen',
    price: 10,
}

let output = `the cost of ${obj.item} is ${obj.price} rupees`
console.log(output) 


//String Interpolation
//To create strings by doing substitution of placeholders

//escape characters
console.log('Abdul\nWasay') //next line

//tab space - t
let str = 'Abdul\tWasay'
console.log(str.length)
*/

//String Methods
/*
These are built-in functions to manipulate a string
str.toUpperCase()
str.toLowerCase()
str.trim() //removes whitespaces
*/

/*
let str = 'Wasay'
console.log(str.toUpperCase())

//strings are immutable - unchangeable

let str2 = '    Wasay  JS   '
console.log(str.trim())
*/

/*
str.slice(start, end?)  //returns part of string - end value not includes
str1.concat(str2)  //joins str2 with str1
str.replace(searchVal, newVal)
str.charAt(idx)


let str = "hello"
//console.log(str.slice(1, 3))
let str2 = "world"
//console.log(str.concat(str2))
//console.log(str.replace('h', 'm'))
console.log(str.charAt(0))

*/

//Practice
//Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @ followed by their full name and ending with the fullname length.

let username ='wasay'
let names = '@'.concat(username)
let res = names.concat(names.length)
console.log(res)


