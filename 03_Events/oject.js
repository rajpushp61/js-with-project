function mulByFive(num){
    return num*5
}
mulByFive.power = 2

console.log(mulByFive(5));
console.log(mulByFive.power);
console.log(mulByFive.prototype);


function createUser(username , score)
{
    this.username= username;
    this.score= score;
}
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`The score is ${this.score}`);
    
}
const Rahul = new createUser("Rahul",90)
const Pushp = new createUser("Pushp",80)

Rahul.printMe();