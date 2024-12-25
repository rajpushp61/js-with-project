// for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop ${i}`);  
    
//     for (let j = 0; j <= 10; j++) {
        
//         // console.log(`Inner loop ${j} outer loop ${i}`);
//         console.log(i+'*'+ j + '=' + i*j );
        
//     }
    
    
// }

// let arr = ['batman','superman','spiderman']

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
    
    
// }

// break and continue

// for (let index = 1; index <= 20; index++) {
    
//     if (index===5) {
//         console.log(`Detected 5`);
//         break;
        
        
//     }
//     console.log(`Value of i is ${index}`);
    
    
// }
for (let index = 1; index <= 20; index++) {
    
    if (index===5) {
        console.log(`Detected 5`);
        continue;        
        
    }
    console.log(`Value of i is ${index}`);
    
    
}