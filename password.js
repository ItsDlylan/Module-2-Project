const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Welcome to the password Validator tool.');
let passwordValidator = function(){
    rl.question(`Please enter a password you'd like to validate\n`, function(password){
        if(password.length < 10){
            console.log('this password did not meet the requirements of being 10 characters long');
        } else{
            console.log(`Congrats your password met the requirements and is valid!`)
            passwordValidator();
        }
    })
    
}();
