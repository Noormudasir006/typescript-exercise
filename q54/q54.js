"use strict";
// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
Object.defineProperty(exports, "__esModule", { value: true });
function createDynamicKey(key, value) {
    let dynamicObject = {};
    dynamicObject = value;
    return dynamicObject;
}
let userPrefrence = createDynamicKey("theme", "dark");
console.log(userPrefrence);
