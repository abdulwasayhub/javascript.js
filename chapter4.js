//Array
//Collectiom of items -> linear
/*
let heroes = ['ironman', 'hulk']
let marks = [96, 75, 48, 83, 66]
let info = ['rahul', 25, 'lahore']
*/
/*

let marks = [96, 75, 48, 83, 66]
console.log(marks)
console.log(marks.length)
console.log(typeof marks) //object - non primitive data type

//Array indices
console.log(marks[0])

//string - immutable
//array - mutable

//Looping over an array
//Loops -> iterable(strings, objects, array)
let heroes = ['ironman', 'hulk', 'spiderman', 'thor']

for (let i = 0; i < heroes.length; i++){
    console.log(heroes[i])
}


let heroes = ['ironman', 'hulk', 'spiderman', 'thor']

for (let hero of heroes) {
    console.log(hero)
}
*/

//Practice
//array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find average marks of entire class
/*
let marks = [85, 97, 44, 37, 76, 60]
let sum = 0
let avg;

for (let val of marks) {
    sum = sum + val
    avg = sum / marks.length
}
 console.log(avg)

//Practice
//array with prices of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% off on item. Change the array to store final price after appling offer.

let prices = [250, 645, 300, 900, 50]

for (let i = 0; i < prices.length; i++){
    console.log(prices[i] - (prices[i] * 10 / 100))
}

//Array Methods

Push(): add to end
Pop(): delete from end and return
toString(): convets array to string
concat(): join multiple arrays and returns result
unshift(): add to start
shift(): delete from start and return
*/

let foodItems = ['biryani', 'pizza']
/*
foodItems.push('burger', 'pasta')
console.log(foodItems)

let deletedItem = foodItems.pop()
console.log(foodItems)

console.log(foodItems.toString())

let marvelHeroes = ['thor', 'spiderman', 'ironman']
let dcHeroes = ['superman', 'batman']
let heroes = marvelHeroes.concat(dcHeroes)
console.log(heroes)

marvelHeroes.unshift('antman')
let val = marvelHeroes.shift()

console.log(val)
*/
/*
Slice(): returns a piece of array -> not change in orignal array, end item not included
        slice(startIndex, endIndex)
Splice(): change original array (add, remove, replace)
          splice (startIndex, delCount, newE1)
*/
//Slice
let marvelHeroes = ['thor', 'spiderman', 'ironman', 'superman', 'batman']
console.log(marvelHeroes.slice(1, 3))

//Splice
let arr = [1, 2, 3, 4, 5, 6, 7]
arr.splice(2, 0, 101)

console.log(arr)

//Practice
//array to store companies -> 'Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Neflix'

let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Neflix']
//Remove the first comapany
companies.shift()
//Remove Uber and Add Ola in its space
companies.splice(1, 1, 'Ola')
//Add Amazon at end
companies.push('Amazon')
console.log(companies)
