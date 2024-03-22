// Hello Admin: Greet users differently, especially 'admin'.

let userNames: string[] = ['admin', 'saba', 'sidra', 'noor', 'humna']
userNames.forEach(userName=>{
    if(userName == 'admin'){
        console.log(`"hello admin", hope you are doing well`)
    }else{
        console.log(`hello ${userName}, how are you`)
    }
})