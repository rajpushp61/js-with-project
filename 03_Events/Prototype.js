


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",
    getSpiderPower :function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.rahul = function(){
    console.log("Rahul says hello");
    
}

// heroPower.rahul()
// myHeros.rahul()

//Inheritance 

const user = {
    name : "Rahul",
    email:"rahul@rah.com"
}
const Teacher = {
    makevideo:true
}

const TeachingSupport = {
    isAvailable: false 
}
const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "Pushp       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
    
}
anotherUserName.trueLength();