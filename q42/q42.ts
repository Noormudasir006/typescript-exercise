//Great Magicians: Add "the Great" to magician names.

function make_magicians(magicians:string[]){
 for(let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] + "the great";
    }
}
function show_magicians(magicians: string[]){
    for(let magician of magicians);
    console.log(magicians)
}
let magicians: string[] = ["Harry", "David", "Lisa"]
make_magicians(magicians);
show_magicians(magicians)
