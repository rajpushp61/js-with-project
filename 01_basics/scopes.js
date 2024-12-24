// let a = 300
// if (true)
// {
//     let a = 300
//     if(true)
//     {
//         let a=10
//         const b = 20 
//         console.log("Inner:" ,a);
        
//     }
// }

// console.log("Outer",a);

function one (){
    const username = "Rahul"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}

// one();

if(true)
    {
    const username = "Rahul"
    if(username === "Rahul")
    {
        const website = 'youtube'
        // console.log(username + website);
      }
    //   console.log(website);
      
    }
    // console.log(username);
    
    //Interesting 
    
    addOne(5) // not an error
    function addOne (value){
        return num + 1
    }

    addTwo(5)// wil give error 

    const addTwo = function(num){
        return num +2
    }