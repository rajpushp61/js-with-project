const user = {
    username:"Rahul",
    loginCount : 8,
    sigedIn: true,
    getUserDetails : function (){
        // console.log('Got 
        // user details');
        // console.log(`${this.username}`);
        // console.log(this);
        
        
        
    }
}
// console.log(user.getUserDetails());

function User(userName, loginCount, isLoggedIn){
   this.userName = userName 
   this.loginCount = loginCount
   this.isLoggedIn = isLoggedIn 

   return this;
}

const userOne = new  User('Rahul',2,3)
const userTwo = new User('Pushp',2,3)
console.log(userOne);
console.log(userTwo);
