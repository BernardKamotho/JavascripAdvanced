let name = "  Alice Wanjiku "
let age = 35


console.log(name)
// 1. Removing leading/trailing spaces and build a greeting using a string literals

console.log(name.trim())

let greeting = `Hello, ${name.trim()}! You are ${age} years old.`
console.log(greeting)

// 2. Convert the greeting into uppercase
let convertedGreeting = greeting.toUpperCase()
console.log(convertedGreeting)


//3 . slice - It enables us to extract characters from given index to another
console.log(name.trim().slice(2, 4)) // output ic


// 4. includes function - it used to check whether a given character exists in a given string. It returns a boolean value (true or false)
console.log(name.trim().includes("c"))

// 5. toLowerCase() - It is used to convert all the characters of a string to lowercase
console.log(name.toLowerCase().trim())

// 6. substring() - similar to slice, it extracts part of a string
console.log(name.trim().substring(6,8).toLowerCase())

// 7. indexOf("pass a letter") - returns the position of the first accurrence of a letter.
console.log(name.trim().indexOf("W"))

// 8. length - returns the total number of characters (including spaces)
console.log(name.trim().length)


// 9. replace(old, new) - replaces first occurence of a substring 
let replacedName = name.replace("Alice", "Jessica")
console.log(replacedName)

//find out how to replace multiple occurences at once.

// 10. chartAt(index) - This function normally finds/outputs the character in a given index.
console.log("The letter on index five is: " + name.trim().charAt(4))

// 11. split(separator) - splits the string into an array
console.log(name.trim().split(" "))

// 12. endsWith(substring) - checks if the string ends with a certain value. It returns a boolean value.
console.log(name.trim().endsWith("Wanjiku"))

//13. startsWith(substring) - checks whether the string starts with a certain value
console.log(name.trim().startsWith("Alice"))

//14. repeat(n) - repeats the string n number of times.
console.log(name.trim().repeat(3))