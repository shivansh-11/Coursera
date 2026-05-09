// Data types in JavaScript

let userName = "Shivansh";
let age = 30;
let isStudent = true;

// Display the profile inforation
console.log("User Profile:");
console.log("Name: " + userName);
console.log("Age:" + age);
console.log("Is Student: " + isStudent);

// Product information
let productName = "Laptop";
let price = 79999;
let inStock = true;
let productDescription =
  "A high-performance laptop suitable for gaming and work.";
// Display the product information

console.log("\nProduct Information:");
console.log("Name: " + productName);
console.log("Price: " + price);
console.log("In Stock: " + inStock);
console.log("Description: " + productDescription);

// Reading player information
let playerName = "";
const readline = require("readline-sync");
playerName = readline.question("Enter your name: ");
console.log("Welcome to the game, " + playerName + "!");
