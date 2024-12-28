class user {
    constructor (userName) {
        this.userName = userName
    }
    logMe(){
        console.log(`Username is ${this.userName}`);
        
    }
}
class Teacher extends user{
    constructor(userName,email,pass){
        super(userName)
        this.email = email
        this.pass = pass
    }
    addCoure(){
        console.log(`A new course was added by ${this.userName}`);
        
    }
}
const Prashant = new Teacher("Prashant","p@prashant.com","098")
Prashant.addCoure()
Prashant.logMe()

const Rahul = new user("Rahul")
Rahul.logMe();
