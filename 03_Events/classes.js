// class user {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPass(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const Pushp = new user("Pushp","p@pushp.com","123")
// console.log(Pushp.encryptPass());
// console.log(Pushp.changeUsername());

// Behind the scence

function user(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}
user.prototype.changeUsername = function(){
    return`${this.username.toUpperCase()}`
}

const Rahul = new user("Rahul","r@rahul.com","456")
console.log(Rahul.changeUsername());
