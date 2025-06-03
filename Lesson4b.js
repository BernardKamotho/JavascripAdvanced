// Loops
// Looping statements allows us to execute a block of code repeatedly until a condition is met
// We have several type of loops in JS
// 1. For loop


// structure of the for loop
// for (initilization; condition; increment/decrement){
//      code to be executed appears here
// }

for (let i = 1; i <= 5; i++){
    console.log("The values are: " + i)
}

// 2. While loop
// structure:
// initialize a variable with some values 
// while (condition){
// code to execute
// }

let j = 1;
while (j <= 5){
    console.log("The value of j is: " + j)
    j++
};


// create a while loop program that is able to print from 100 down to 30.

// 3. Do while loop
// This loop is guaranteed to run atleast once even if the condition is false.
// structure: intiliaze a variable with some new values
// do {
//  code to be executed
// } while (condition);

let k = 40;

do {
    console.log(k);
    k++;
} while (k <= 10);

// Loops can be used to loop through/iterate through an array

let countries = ["Kenya", "TZ", "Uganda", "Burundi", "Congo", "Somali", "Ethiopia"]

console.log(countries)

for (let i = 0; i < countries.length; i++){
    console.log(countries[i])
}

// Break and continue key words in loops
// continue: is a keyword that is used with the continuation of the loop is a condition is met
// break: is a keyword that is used to terminate the execution of the loop after a certain condition is met
// example 1: continue
for(let i =1; i <= 10; i++){
    console.log(i)

    if (i === 5){
        console.log("Five is here.")
    } continue;
    
};

// example2: break

for(let i =20; i <= 30; i++){
    console.log(i)
    if (i === 26) break;
}