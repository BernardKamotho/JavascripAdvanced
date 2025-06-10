// classes and objects in javascript
// A class is a blueprint/template which usually contains properties and methods
// we use a keyword "class" to declare a class in js

class Dog{
    //We use a contructor to initialize properties
    // The key word "constructor" is used
    constructor(name, breed){
        // to access the properties we use "this" keyword
        this.name = name;
        this.breed = breed;
    }

    // actions => methods/funtions/behaviours
    bark(){
        console.log(`${this.name} says Woof!`)
        console.log(`${this.breed} it is a good one.`)
    }
};

// creating an object for the class Dog
// Object ~ An object is an instance of a class. Meaning => It is usually created/generated from a class.

let dog1 = new Dog("Buddy", "German Shepherd");
dog1.bark();


let dog2 = new Dog("Puppy", "Golden Retriever");
dog2.bark();

// Assignment : Create a class of a vehicle: It should have three properties and at least two methods/function.