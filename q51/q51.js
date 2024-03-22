"use strict";
//How is the original calculateArea function refactored into an arrow function, and what benefits does this refactoring offer?
Object.defineProperty(exports, "__esModule", { value: true });
function calculateArea(width, height) {
    return width * height;
}
calculateArea(5, 7);
const calculateAreaArrow = (width, height) => {
    return width * height;
};
console.log(calculateAreaArrow(5, 7));
