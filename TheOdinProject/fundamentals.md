### 1.JavaScript is a “dynamically typed” language i.e. we don't have to specify data types.

```javascript
// no error
let message = "hello";
message = 123456;
```
---
### 2.There are 8 basic data types in JavaScript. 
&ensp;**7 primitive data-types**   
&ensp;&ensp;1.`number`:for numbers of any kind: integer or ensp;floating-point, integers are limited by `±(253-1)`.  
&ensp;&ensp;2.`bigint`:for integer number of arbitary length.  
&ensp;&ensp;3.`string`:for strings. A string may have zero or more characters, there’s no separate single-character type.  
&ensp;&ensp;4.`boolean`:for `true/false`  
&ensp;&ensp;5.`null`:for unknown values.  
&ensp;&ensp;6.`undefined`:for unassigned values.  
&ensp;&ensp;7.`symbol`:for unique identifiers.  
&ensp;**1 non-primitive data-type**  
&ensp;&ensp;8.`object`:for more complex data structures.  

---
### 1.Numbers:
```javascript
let n = 123;
n = 12.345;
```  
Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: `Infinity`, `-Infinity` and `NaN`.  
  
&ensp;**NaN:**  
&ensp;&ensp;-`NaN` represents a computational error.   
&ensp;&ensp;-Any further mathematical operation on `NaN` returns `NaN`.  
&ensp;&ensp;-There’s only one exception to that: `NaN` ** 0 is 1.  
### 2.BigInt  
-In JavaScript, the `“number”` type cannot safely represent integer values larger than `(2^53-1)` (that’s 9007199254740991), or less than `-(2^53-1)` for negatives.  
-So to say, all odd integers greater than `(2^53-1)` can’t be stored at all in the “number” type  
-Therefore BigInt is used.  
  
### 3.String  

-A string is simply a piece of text… and is a fundamental building block of the language.
```javascript
let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
```  

#### Strings Methods
1. JavaScript String Length:
```js
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
```
2. Extracting String Parts:  
slice(start, end)  
substring(start, end)  
substr(start, length)  
```js
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
```
```js
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
```
```js
et str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
```  
3. Replacing String Content  
`replace()`
```js
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "Google");
```
4. Converting to Upper and Lower Case:
- A string is converted to upper case with `toUpperCase()`

- A string is converted to lower case with `toLowerCase()`  

5. JavaScript String concat():  
`concat()`
```js
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
```
6. JavaScript String trim():
- The `trim()` method removes whitespace from both sides of a string  
- The `trimStart()` method works like `trim()`, but removes whitespace only from the start of a string.
- The `trimEnd()` method works like `trim()`, but removes whitespace only from the end of a string.
```js
let text1 = "      Hello World!      ";
let text2 = text1.trim();
```
7. Extracting String Characters:
- There are 3 methods for extracting string characters:

  - `charAt(position)`:The charAt() method returns the character at a specified index (position) in a string
  - `charCodeAt(position)`:The charCodeAt() method returns the unicode of the character at a specified index in a string.  
  - `Property access [ ]`:
8. Converting a String to an Array:
- A string can be converted to an array with the `split()` method:
```js
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
```

### 4.Boolean(logical type):   

-`true/false`  

### 5.Object and Symbols:  

-The `object` type is special.

All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.  

-The `symbol` type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

---  
### The typeof operator  

-The `typeof` operator returns the type of the operand.

```javascript
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```







