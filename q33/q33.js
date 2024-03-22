"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ordinal Numbers: Display numbers with their ordinal suffixes.
let numbers = [1, 2, 3, 4];
numbers.forEach(number => {
    let suffix = "th";
    if (number == 1) {
        suffix = "st";
    }
    if (number == 2) {
        suffix = "nd";
    }
    if (number == 3) {
        suffix = "rd";
    }
    if (number == 4) {
        suffix = "th";
    }
    console.log(`${number}${suffix}`);
});
