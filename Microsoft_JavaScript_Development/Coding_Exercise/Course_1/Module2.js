// Variable to check if the user is logged in

let userLoggedIn = true;

// display a welcome message if the user is logged in

if (userLoggedIn) {
  console.log("Please, proceed to the checkout");
} else {
  console.log("Please log in to continue.");
}

// Variables to store the correct username and password

let correctUsername = "admin";
let correctPassword = "password123";

let loginSuccessful =
  correctUsername === "admin" && correctPassword === "password123";

console.log("Login successful:", loginSuccessful);
