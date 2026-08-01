# Course 1: Introduction to Javascript Programming

## Module 1: Getting started with programming

```javaScript
console.log("Hello World");
console.log("My name is Shivansh Singh");

// this is a inline comment in javascript
/*
This is a multiline comment in javascript
*/
```

#### Data Types in JavaScript

```javaScript
//strings
let userName = "Shivansh";

// Numbers
let userAge = 30;

// Booleans
let subscribedToNews = true;
```

```javaScript
console.log("Profile Details");
console.log("--------------");
console.log("Name: " + userName);
console.log("Age: " + userAge);
console.log("Subscribed: " + subscribedToNews);
```

To get information from the player while the game is running, we need special code that lets us ask questions and get answers. readline-sync is a tool that gives us this ability.

1.  Install the readline-sync package:

```
npm install readline-sync
```

2.  At the top of your file, add this line to use readline-sync:

```javaScript
const readline = require("readline-sync");

let playerName = "";

playerName = readline.question("What is your name? ");
```

`Git tutorial: Character Stats Lab --> Task 4`

#### 🔑 Key Points

- Variables store different types of data (strings, numbers, booleans)
- readline-sync lets us get input from the player
- String concatenation (+) combines text and variables
- console.log() displays information to the player

```javaScript
console.log(typeof userName); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
```

#### Type Conversion in JavaScript

1. Implicit Type Conversion (Type Coercion):JavaScript automatically converts types when needed.

```javaScript
let result  = 5 + "3"; // "53" ,Number 5 become string
let result = 10 - "2"; // 8, string 2 become number
console.log("10" * 2); // 20, string 10 become number
console.log(true + 1); // 2, boolean become number
```

2. Explicit Type Conversion
   You manually convert types.

```javaScript
let x = "123";
let num = Number(x); // Using Number()
let res = parseInt(x); // Using parseInt()

let pi = "3.14";
let num = parseFloat(pi); // Using parseFloat()
```

Number to String

```javaScript
let num = 100;
let str = String(num); // Using String()
```

Boolean Conversion

```javaScript
Boolean(1)       // true
Boolean(0)       // false
Boolean("")      // false
Boolean("Hello") // true
```

Truthy and Falsy Values

```JavaScript
Falsy values in JavaScript:

false
0
""
null
undefined
NaN

Everything else is generally truthy.
```

#### Strict Equality vs Loose Equality

```javaScript
Loose Equality (==)
"5" == 5 // true

Strict Equality (===)
"5" === 5 // false
```

In JavaScript, a variable name (identifier) is the name used to store data in memory.

- let: Modern and recommended for changeable values.
- var: Older way of declaring variables.
- const: Used for constants.

Camel Case (Most Common)

```javaScript
let firstName;
let totalMarks;
```

1. Rules for Variable Names

- Letters
- Digits
- \_(underscore)
- $(Dollar Sign)

```javaScript
let name;
let age1;
let _count;
let $price;
```

2. Cannot start with a digit

```javaScript
let 1name; //Invvalid
let name1; //Valid
```

3. Cannot contain spaces

```javaScript
let first name;// Invalid
let firstName; // Valid
```

4. Case Sensitive

```javaScript
let age = 20;
let Age = 30;
```

These are different variables.

5. Reserved Keywords Cannot Be Used

```javaScript
let class;
let function;
```

because they are JavaScript keywords.

#### Operation Precedence in JavaScript

Operation precedence (operator precedence) in JavaScript determines which operation is performed first when multiple operators are used in one expression.

```javaScript
let result = 2 + 3 * 4;
console.log(result); // 14
```

because \* has higher precedence than +

1. Parentheses Have Highest Priority

```javaScript
let result = (2 + 3) * 4;
console.log(result); // 20
```

#### Common Operator Precedence

| Precedence     | Operators        | Example    |
| -------------- | ---------------- | ---------- |
| Highest        | `()`             | `(2 + 3)`  |
| Unary          | `++ -- ! typeof` | `!true`    |
| Multiplication | `* / %`          | `4 * 2`    |
| Addition       | `+ -`            | `5 + 2`    |
| Comparison     | `> < >= <=`      | `a > b`    |
| Equality       | `== === != !==`  | `a === b`  |
| Logical AND    | `&&`             | `x && y`   |
| Logical OR     | `\|\|`           | `x \|\| y` |
| Assignment     | `=`              | `x = 5`    |

#### Associativity of Operators

When operators have the same precedence, JavaScript uses associativity.

Left-to-Right Associativity

```javascript
let result = (20 / 5) * 2;
console.log(result); // 8
```

- 20 / 5 = 4
- 4 \* 2 = 8

Right-to-Left Associativity: Assignment operator works right to left.

```javascript
let a, b;
a = b = 5;
```

first b = 5;
then a = 5;

##### Logical Operator Example

```javaScript
console.log(true || false && false); // true
```

&& has higher precedence than ||

- false && false = false
- true || false = true

---

## Module 2 Control Flow

#### If - Else If - Else Statement

```javaScript
if(age < 18){
   console.log("You are a minor");
}
else if(age >= 18 && age < 65){
   console.log("You are an adult");
}
else{
   console.log("You are a senior citizen");
}
```

#### Switch Statement

```javaScript
const readline = require("readline-sync");

let option = Number(
    readline.question("Enter number from 1 to 3: ")
);

switch(option) {

    case 1:
        console.log("You selected Option 1");
        break;

    case 2:
        console.log("You selected Option 2");
        break;

    case 3:
        console.log("You selected Option 3");
        break;

    default:
        console.log("Invalid Option");
}
```

#### Understanding Comparison and Logical Operators

#### Comparison Operators

Comparison operators let you test if values are equal, different, greater than, or less than each other:

```javascript
// Equal to (==) - Compares values but not types
console.log(5 == "5"); // true (different types but same value)
// Strictly equal to (===) - Compares both values and types
console.log(5 === "5"); // false (different types)
console.log(5 === 5); // true (same type and value)
// Not equal to (!=) and strictly not equal (!==)
console.log(5 != "5"); // false (same value)
console.log(5 !== "5"); // true (different types)
```

In JavaScript, "==" performs type coercion, comparing values after converting them to a common type, while "===" is a strict equality operator that compares both value and type without conversion. Similarly, "!=" is the loose inequality operator that allows type conversion, whereas "!==" is the strict inequality operator that checks both different values and different types. We'll primarily use "===" and "!==" in this course because they prevent unexpected behavior by ensuring exact matches of both value and type, which helps avoid subtle bugs and makes code more reliable and predictable.

#### Logical Operators

Logical operators allow you to combine multiple conditions and determine if statements are true or false:

```javascript
// AND (&&) - Both conditions must be true
console.log(true && true);    // true
console.log(true && false);   // false
\
// OR (||) - At least one condition must be true
console.log(true || false);   // true
console.log(false || false);  // false

// NOT (!) - Inverts the value
console.log(!true);   // false
console.log(!false);  // true
```

#### Combining Operators

You can use multiple operators together to create complex conditions that check multiple things at once:

```javascript
// Check username AND password
let correctUsername = "student123";
let correctPassword = "pass123";

// Both must be true to login successfully
let loginSuccess =
  correctUsername === "student123" && correctPassword === "pass123";
console.log("Login successful: " + loginSuccess); // true
```
