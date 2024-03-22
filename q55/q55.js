"use strict";
//Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [10, 20, 30, 40, 50, 60];
let doubleNumber = numbers.map(number => number * 2);
console.log(doubleNumber);
