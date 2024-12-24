const user = {
    username :"Rahul",
    price: 999,
    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`)
        // console.log(this)
    },
    
    
}

// user.welcomeMessage();
// user.username = "Pushp"
// user.welcomeMessage();

// console.log(this);

// function fun(){
//     console.log(this);
    
// }
// fun();

const fun = () => {
    let username = "Rahul"
    // console.log(this.username);
    
}

// fun();

// const addTwo  = (num1,num2) => {
//     return num1+num2
// }

// console.log(addTwo(2,4));

// const addTwo  = (num1,num2) =>  num1+num2


// console.log(addTwo(2,4));

// Immediately Invoked Function Expressions (IIFE)

(function fun(){
    console.log(`DB CONNECTED`);
    
})();
(() => {
    console.log(`DB CONNECTED TWo`);
    
})();

((name) =>{
    console.log(`DB CONNECTED ${name}`);
    
} )("Rahul")
