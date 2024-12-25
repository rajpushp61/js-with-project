// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
    
// })

// console.log(values)

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNums.filter((num) => num>4)
// const newNum = myNums.filter((num) => {
//     return num>4})
//     const newNums = []
//     myNums.forEach((nums) => {
//         if(nums > 4){
//             newNums.push(nums)
//         }
//     })

// console.log(newNums);

//Map

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((num) => num +10)

// const newNums = myNums
//                 .map((num) => num*10 )
//                 .map((num) => num +1)
//                 .filter((num) => num >=40)

// console.log(newNums);


//Reduce function

const myNums = [1,2,3]

const initialValue = 0

const myTotal = myNums.reduce((acc, currval) => {
    console.log(`acc : ${acc} currval : ${currval}`);
    
    return acc+currval
},initialValue )

console.log(myTotal);

