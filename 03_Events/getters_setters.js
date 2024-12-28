class user {
    constructor(email,pass){
        this.email = email;
        this.pass = pass;
    }
    get email(){
     return this._email.toUpperCase()
    }
    set email(val){
      this._email = val
    }
    get pass(){
       return this._pass.toUpperCase()
    }
    set pass(value)
    {
      this._pass = value
    }
}

const rahul = new user ("rahul","abc")
console.log(rahul.pass);
console.log(rahul.email);
