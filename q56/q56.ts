//Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let mixedArray = ['apple', 'banana', 20, 'grapes', 30, 60, 'strawberry', 10];
let stringArray = mixedArray.filter(item=>  typeof item === "string");
console.log(stringArray)