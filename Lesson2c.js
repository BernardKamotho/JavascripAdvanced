// Object Datatype
// An object is a data type that organises data in term of key - value pairs

let student = {
    //properties of an object

    name : "James Joe",
    age : 19,
    grade: "A",
    isEnrolled: true
};

// printing out the entire object
console.log(student)
//verifying the data type
console.log("The data type of the student is: " + typeof student)

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
//Destructing it is the maching/extracting of the values of an obejct as you put them onto variables.
// Destructuring of the properties of an object
let  {username, email} = user;
console.log(username)
console.log(email)


// exmple2
let country = {
    countryname : "Kenya",
    population : 54000000,
    continent: "Africa",
    language : "Eng"
};

// The properties of the above object have been destructured as shown below
let {countryname, population, continent, language} = country;

console.log("The name of the country is: " + countryname)
console.log("The country is on " + continent+ "n continent")

//  Assignment: Create an object product with properties id name, cost, quantity
//  and description. Use destructuring to extract and log them