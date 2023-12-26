1. Functions that are part of objects are called methods.
2. Defining and Invoking a Function:-
    ```js
    function myFunction() {
    alert("hello");
    }
    myFunction();
    // calls the function once
    ```
3. Anonymous Function:- functions which do not have name 
    ```js
    (function () {
    alert("hello");
    });
    ```
4. Arrow Functions :-There's an alternative form of anonymous functions which we can use, called an arrow function.
    ```js
    textBox.addEventListener("keydown", (event) => {
    console.log(`You pressed "${event.key}".`);
    });
    ```
5. Function Scope:-  
    - The top level outside all your functions is called the global scope. 
    - Values defined in the global scope are accessible from everywhere in the code.
    - The variables and other things defined inside the function are inside their own separate scope and are unreachable from code outside the functions.
6. Parameters and Arguments:-
    ```js 
    function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
    }
    console.log(favoriteAnimal('Goat'))
    ```
    - Parameters are the items listed between the parentheses in the function declaration.
    - In the example above, the function definition is written on the first line: function `favoriteAnimal(animal)`. The parameter, `animal`.
    - This means that `animal` is just a placeholder for some future value. 
    - The last line, `favoriteAnimal('Goat')`, is where we are calling our favoriteAnimal function and passing the value `'Goat'` inside that function. Here, `'Goat'` is our argument.
7. Return Value:-
    - Return values are just what they sound like — the values that a function returns when it completes.
8. JavaScript Call Stack:-
    - A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions.
    - The JavaScript engine uses a call stack to manage execution contexts:
        - The global execution context
        - Function execution contexts
    - The call stack works based on the last-in-first-out (LIFO) principle.
    - When you execute a script, the JavaScript engine creates a global execution context and pushes it on top of the call stack.

    - Whenever a function is called, the JavaScript engine creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.If a function calls another function, the JavaScript engine creates a new function execution context for the function being called and pushes it on top of the call stack.When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.The script will stop when the call stack is empty.




