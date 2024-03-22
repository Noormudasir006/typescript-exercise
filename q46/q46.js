"use strict";
//Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = {
    make: 'Apple',
    model: 'MacBook Pro',
    year: 2023,
    describe() {
        console.log(`this laptop is ${this.year} ${this.model} ${this.make}`);
    },
};
laptop.describe();
