// Inheritance:
// This is where one class(subclass) inherits from another class (superclass) properties and behiours of that class.

//superclass
class Animal{
    eat(){
        console.log("Animal is eating...")
    }

    drink(){
        console.log("The animal is drinking water...")
    }
};

// subclass
class Cat extends Animal{
    meow(){
        console.log("Meow...")
    }

    walk(){
        console.log("The cat can walk...")
    }
};


// create an object for the class cat
let whiskers = new Cat();

whiskers.eat();
whiskers.drink();
whiskers.walk();


// Assignment: Create a superclass called Fish. It should have atleast three method/functions and two properties. Create a subclass called Tilapia. The subclass should inherit from the super class at least one function and a property. Create an object for the class Tilapia to access the inherited properties and methods...
