// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123efc"
tinderUser.name = "Rahul"
tinderUser.isloggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Rahul",
            lastname:"Jha"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}


// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('id'));


const course = {
    coursename : "js in hindi",
    price:"999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course;

// console.log(courseInstructor);
console.log(instructor);



