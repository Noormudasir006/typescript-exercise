"use strict";
// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ['Sophia White', 'Olivia Jones', 'William Taylor', 'Sarah Miller'];
while (guests.length > 3) {
    let deletedGuest = guests.pop();
    console.log(`sorry ${deletedGuest}, we don't have enough space`);
}
guests.forEach(guest => {
    console.log(`dear ${guest}, you are still invited for the dinner`);
});
console.log(guests);
