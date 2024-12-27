const promiseOne = new Promise(function(resolve,reject)
 {
    setTimeout(function(){
        // console.log('Async log is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    // console.log('promise consumed');
    
})

new Promise(function(resolve,reject)
{
    setTimeout(function() {
        // console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    // console.log('Async 2 resolved');
    
})
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
     resolve({username: "Rahul", email:"rahul@rah.com"})
    },1000)
})
promiseThree.then(function(user){
   console.log(user);
   
})
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = true;
      if(!err){
        resolve({username:"Pushp",pass:"123"})
      }
      else {
        reject('Error something went wrong')
      }
    },1000)
})
promiseFour
.then((user) => {
   console.log(user);
   return user.username
})
.then((username) => {
    console.log(username);
    
})
.catch((err) => {
    console.log(err);
    
})
.finally(() => {
    console.log("The promoise either resolve or rejected");
    
})

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(function(){
        let err = true;
      if(!err){
        resolve({username:"Rahul",pass:"123"})
      }
      else {
        reject('Error:')
      }
    },1000)
})

async function consumePromiseFive() {
     try{
        const response = await promiseFive
     console.log(response);
     }
     catch(err){
        console.log(err);
        
     }
}

consumePromiseFive()

// async function getAllUser() {
//   try{
//     const response = await fetch('https://api.github.com/users/rajpushp61')
//     const data = await response.json()
//     console.log(data);
//   }
//   catch(error){
//       console.log('E:',error);
      
//   }
   
// }


// getAllUser()

fetch('https://api.github.com/users/rajpushp61')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})
