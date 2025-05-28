// Object Datatype
// An object is a data type that organises data in term of key - value pairs

let student = {
    //properties of an object

    name : "James Joe",
    age : 19,
    grade: "A",
    isEnrolled: true
};

// Access the values by use of the dot notation
console.log("The name of the student is: " + student.name)
console.log("The age of the student is: " + student.age)

//Access the values by use of the brackets notation
console.log("The grade the student got is: " + student["grade"])
console.log("Is the student enrolled? " + student["isEnrolled"])

// Assignmet: create two objects of a player, a car


let user = {
    username : "jamesdoe",
    email : "jamesdoes@gmail.com"
};

// Destructuring of the properties of an object
let  {username, email} = user;
console.log(username)
console.log(email)


//  Assignment: Create an object product with properties id name, cost, quantity
//  and description. Use destructuring to extract and log them