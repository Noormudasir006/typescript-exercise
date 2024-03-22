//Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

let laptops = [
    { make: 'Dell',
    model: 'XPS 15',
    year: 2022},
   { 
   make: 'Apple',
   model: 'MacBook Pro',
   year: 2023,

   },
   {
    name: 'HP',
    model: 'Spectre x360',
    year: 2021,
   }
]

let [laptop1, laptop2] = laptops
console.log(laptop1, laptop2)