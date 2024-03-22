"use strict";
// Hello Admin: Greet users differently, especially 'admin'.
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = ['admin', 'saba', 'sidra', 'noor', 'humna'];
userNames.forEach(userName => {
    if (userName == 'admin') {
        console.log(`"hello admin", hope you are doing well`);
    }
    else {
        console.log(`hello ${userName}, how are you`);
    }
});
