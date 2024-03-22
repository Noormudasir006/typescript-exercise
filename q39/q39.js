"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//City Names: Formatting city-country pairs.
function country(city, country) {
    return (`${city}, ${country}`);
}
country("karachi", "pakistan");
console.log(country("lahore", "pakistan"));
console.log(country("mumbai", "india"));
console.log(country("tokyu", "japan"));
