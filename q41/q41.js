"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Magicians: Display magician names from an array.
let magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
