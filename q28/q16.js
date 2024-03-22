"use strict";
//*Question 16:** More Guests: You've found a bigger dinner table, so there's room for more guests.
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ['John Smith', 'Emily Johnson', 'Michael Brown'];
console.log("I have found a bigger table for dinner");
guests.unshift('Sarah Miller');
guests.splice(2, 0, 'David Anderson');
guests.push('William Taylor');
guests.forEach(guest => {
    console.log(`dear ${guest}, whould you like to join me for dinner`);
});
