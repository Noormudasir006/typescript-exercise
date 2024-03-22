//Checking Usernames: Ensure uniqueness in usernames.

let currentUsers = ['saba', 'faiza', 'madiha', 'sana']
let newUsers = ['Saba', 'noor', 'ayesha', 'FaizA']
newUsers.forEach(newUser=>{
    if(currentUsers.some(currentUsers=>currentUsers.toLowerCase()==newUser.toLowerCase())){
        console.log(`${newUser}, enter new user name`)
    }
    else{
        console.log(`${newUser} is available`)
    }
})