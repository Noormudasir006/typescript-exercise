// Ordinal Numbers: Display numbers with their ordinal suffixes.
let numbers:number[] = [1, 2, 3, 4];
numbers.forEach(number=>{
    let suffix = "th"
    if(number == 1){
        suffix = "st"
    }
    if(number == 2){
        suffix = "nd"
    }
    if(number == 3){
        suffix = "rd"
    }
    if(number == 4){
        suffix = "th"
    }
    console.log(`${number}${suffix}`)

})