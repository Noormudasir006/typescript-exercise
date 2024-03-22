//How is the original calculateArea function refactored into an arrow function, and what benefits does this refactoring offer?

function calculateArea(width: number, height: number){
    return width * height
}
calculateArea(5,7);
const calculateAreaArrow = (width: number, height: number) =>{
    return width * height
}
console.log(calculateAreaArrow(5, 7))