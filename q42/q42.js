"use strict";
//Great Magicians: Add "the Great" to magician names.
Object.defineProperty(exports, "__esModule", { value: true });
function make_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the great";
    }
}
function show_magicians(magicians) {
    for (let magician of magicians)
        ;
    console.log(magicians);
}
let magicians = ["Harry", "David", "Lisa"];
make_magicians(magicians);
show_magicians(magicians);
