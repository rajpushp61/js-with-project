class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
        
    }
    static createId(){
        return `123`
    }
}

const rahul = new user("rahul")
// console.log(rahul.createId());

class Teacher extends user {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const Iphone = new Teacher("iphone","i@phone.com")
Iphone.logMe();
