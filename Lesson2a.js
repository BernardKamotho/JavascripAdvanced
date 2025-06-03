// Array data type
// An array is a collection of related items which are of the same data type

let fruits = ["Banana", "apple", "orange", "grape"];

console.log(fruits[2]);

//push method : We use to add an item at the end of an array
fruits.push("mango");
console.log(fruits);

//slice method: We use it to output from a given index to another.
let somefruits = fruits.slice(1, 3);
console.log(somefruits)

//pop method : We use it to remove an item of an array that appear at the end
console.log(fruits)
fruits.pop()
console.log(fruits)
console.log("The number of items in the arrray is: " + fruits.length)

let cities = ["Nairobi", "Mombasa", "Nakuru", "Eldoret", "Meru", "Machakos"];
console.log(cities)

//the filter method is used to show the output based on some rules
let updatedCities = cities.filter(item => item !== "Meru"); //it will create an new array of cities without the city Meru
console.log(updatedCities)