// const userEmail = "pushp.ai@google.com"

// if (userEmail) {
//     console.log("Got user email");
    
// }
// else {
//     console.log("Don't have user email");
    
// }
// Nullish Coalescing Operator (??):null defined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15
console.log(val1);

// Terniary operator 
// condition?"":""

const price  = 100
price<=80?console.log("Less than 80"):console.log("More than 80");
;
