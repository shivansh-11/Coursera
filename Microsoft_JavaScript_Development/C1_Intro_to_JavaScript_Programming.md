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
