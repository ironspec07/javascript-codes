Certainly! While JavaScript doesn't have traditional class-based inheritance like some other programming languages, it introduced a class syntax in ECMAScript 2015 (ES6) that provides a more convenient and familiar way to work with object-oriented programming concepts.

Under the hood, JavaScript's classes are still based on prototypal inheritance. When you define a class in JavaScript, you're actually defining a constructor function and attaching methods to its prototype. This allows instances of the class to share properties and methods defined in the class.

Here's a more detailed explanation of JavaScript classes:

1. Class Declaration: You can declare a class using the `class` keyword followed by the class name. For example:

javascript
class MyClass {
  // class body
}


2. Constructor Method: The constructor method is a special method that is called when you create a new instance of a class using the `new` keyword. It is used to initialize the object's properties. For example:

javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}


3. Class Methods: You can define methods inside a class. These methods are attached to the class's prototype, which means they are shared among all instances of the class. For example:

javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}


4. Creating Instances: You can create new instances of a class using the `new` keyword followed by the class name and any necessary arguments for the constructor. For example:

javascript
const john = new Person('John', 25);


5. Inheritance: JavaScript classes support inheritance through the `extends` keyword. You can create a subclass (child class) that inherits from another class (parent class). The subclass can override methods from the parent class and add its own methods. For example:

javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // call the parent class constructor
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying hard for the ${this.grade} grade.`);
  }
}


In the code above, the `Student` class extends the `Person` class, inheriting its properties and methods. The `super` keyword is used to call the constructor of the parent class.

JavaScript's class syntax provides a more familiar and concise way to work with object-oriented programming in JavaScript, but it's important to note that it is still built on top of JavaScript's prototypal inheritance model.


## OOPS --> A programming paradime or a way/style of writing code.


## OBJECTS
--> Collection of properties and methods.
--> eg:- toLowerCase()


## Why use oop?
--> to reduce messy codes and increase code reusablity.


## parts of OOP
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
Abstraction--> 
Encapsulation-->  
Inheritance -->
Polymorphism --> 


