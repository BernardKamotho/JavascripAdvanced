// Javascript functions
// A function is a block of code/statements that performs a given task.

// 1. Functions without parameters
// structure of a function:
// function keyword followed by the name of the function, the statements to be printed out...

function greeting(){
    console.log("Hello there. How have you been?")
};
// calling/invoking a function
greeting();


// 2. Functions with parameters
// Parameters they are additional values that require to be passed as argument when calling a function.

function greeting(name){
    console.log(`hello ${name}. How have you been?`)
};

greeting("Bernard");
greeting("Mary");
greeting("Joseph");


// functions with multiple parameters
function sum(num1, num2, num3){
    let total = num1 + num2 + num3
    console.log("The total is: " + total)
};

sum(4, 5, 10);

// create a function to multiply four numbers(product).


// Destructuring in functions
function studentInfo({name, subject, cat1, cat2}){
    const total = cat1 + cat2 
    console.log(`${name} scored ${total} marks in ${subject}`);
};


studentInfo({
    name : "Joseph",
    subject: "Mathematics",
    cat1 : 45,
    cat2 : 42
});


// Remind yourselves on arrow functions