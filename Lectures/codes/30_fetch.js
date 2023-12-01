//The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.

//For making a request and fetching a resource, use the fetch() method.

//The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request

//Once a Response is retrieved, there are a number of methods available to define what the body content is and how it should be handled.


//A basic fetch request looks like this:
async function logMovies() {
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    console.log(movies);
  }
  
  //Here we are fetching a JSON file across the network, parsing it, and printing the data to the console. The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.

  