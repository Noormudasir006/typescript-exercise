"use strict";
//Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
Object.defineProperty(exports, "__esModule", { value: true });
let price1 = [10000, 20000, 30000];
let price2 = [40000, 50000, 60000];
let combinedPrice = [...price1, ...price2].sort((a, b) => a - b);
console.log(combinedPrice);
