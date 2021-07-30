const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})
// Checks for minimum 10 characters, atleast 1 lowercase, 1 uppercase, 1 special character and 1 number.
let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$/;

console.log('Welcome to the password Validator tool.');
let passwordValidator = function(){
    rl.question(`Please enter a password you'd like to validate,\nit needs to be a minimum of 10 characters, have atleast 1 lowercase, 1 upperacase, 1 number, and 1 special character\n`, function(password){
        if(regex.test(password)){
            console.log(`Congrats your password met the requirements and is valid!`)
            passwordValidator();
        } else{
            console.log('this password did not meet the requirements of being 10 characters long, with a number and a letter');
            passwordValidator();
        }
    })
    
}

passwordValidator();
