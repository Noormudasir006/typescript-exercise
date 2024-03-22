"use strict";
// Cities: Describing cities with a function.
Object.defineProperty(exports, "__esModule", { value: true });
function cities(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
cities("karachi");
cities("lahore");
cities("istanbol", "turkey");
