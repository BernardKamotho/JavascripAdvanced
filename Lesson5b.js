// Async and Await in functions
// These two key words are used when the function you have is expecting some other additional info/data from outside the function.

const fetchData = async () =>{
    try{
        //Send a request to the API (This api will definetly give us a response)
        let response = await fetch('https://api.chucknorris.io/jokes/random')

        //Convert the response to JSON format (Also return a promise)
        let {created_at, value} = await response.json();

        // print the data and the joke that was generated
        console.log("Date Created: " + created_at);

        // print the joke
        console.log("Joke: " + value);
    }
    catch(error){
        // catch and handle the errors (Like bad responses etc)
        console.error("Error fetching the Data: " + error)

    }
};


// call the function to execute its content
fetchData();


//   Assignment use async to 
// https://official-joke-api.appspot.com/random_joke
// Extract and print out the contents of the setup and the punchline

// https://sengi2025.pythonanywhere.com/api/getproducts
// On the above api endpoint extract the product_name, and the price and print them out