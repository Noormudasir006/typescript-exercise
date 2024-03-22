//City Names: Formatting city-country pairs.
function country(city: string, country: string){
   return(`${city}, ${country}`)
}
country("karachi", "pakistan");
console.log(country("lahore", "pakistan"))
console.log(country("mumbai", "india"))
console.log(country("tokyu", "japan"))