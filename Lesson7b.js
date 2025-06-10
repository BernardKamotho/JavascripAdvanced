// Data hiding/Abstraction
// This is the aspect of hiding the implementation of complex tasks and showing to the users an interactivity channel.
// users only need to know how to use something not how it has been implemented at the backed.

class CoffeeMachine {
    #startEngine(){
        console.log("Heating water....")
    }

    brew(){
        console.log("Start coffee...")
        this.#startEngine()
        console.log("Coffee is ready!")
    }
};

let coffee = new CoffeeMachine();
coffee.brew();

// Assignment: Create an example of your own demonstrating the aspect of data hiding. (Two examples).