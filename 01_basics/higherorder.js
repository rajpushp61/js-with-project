//for of

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     // console.log(num);
    
// }

// const greetings = "Hello world"
// for (const greet of greetings)
//      {
//         console.log(`Each element are ${greet}`);
        
// }

//Maps

const map = new Map()
map.set('In',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")
map.set('Aus',"Austrailia")

// console.log(map);


for (const [key , value] of map) {
    // console.log(key, value);
    
}
    const myObj = {
        'game1': 'NFS',
        'game2' : 'Spiderman'
    }

    // for (const [key , value] of myObj) {
    //     console.log(key , value);
        
    // }

    // for (const key in myObj) {
    //         // console.log(`${key} shortcut is for ${myObj[key]}`);
            
            
    //     }
    
    //     const programming = ["js","rb","py","c"]

    //     for (const key in programming) {
    //             console.log(programming[key]);
                
            // }
        // for (const key in map) {
        //    console.log(key);
           
        // }

        //foreach

        // const coding = ["js","ruby","c++","py"]

        // coding.forEach((key) =>{
            
        //         console.log(`Coding language is ${key}`);
                
        //     }
        // )

        const myCoding = [
            {
                languageName:'c',
                FileName:'C file'
            },
            {
                languageName:'c++',
                FileName:'c++ File'
            },
            {
                languageName:'Java',
                FileName:'Java File'
            },
        ]
        myCoding.forEach((item)=>{
            console.log(`Filename is ${item.FileName}`);
            
        })