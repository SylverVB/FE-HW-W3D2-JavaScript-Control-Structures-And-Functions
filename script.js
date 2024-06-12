// Lesson 2: Assignment | JavaScript Control Structures & Functions

// Exploring Conditional Statements and Loops

// Problem Statement: You are tasked with creating a JavaScript program that simulates a simple online shopping experience. 
// The program should allow users to browse products, add them to a cart, and calculate the total cost of their purchase.

// Expected Outcomes:

// Upon completion of this assignment, students should be able to understand how to use conditional statements to control 
// program flow based on certain conditions.
// Students should be able to implement loops to iterate through arrays and perform repetitive tasks efficiently.
// Students will gain practical experience in solving real-world problems using JavaScript control structures.


// Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart. 
// This can be done with creating a simple variable that represents whether or not the user is logged in.

let user = "Alice"; 

function isLoggedIn(user) {   
    if (user) {
        console.log(`${user} is logged in.`);
        return true;
    } else {
        return false;
    }
}

isLoggedIn(user);

// Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products 
// to their cart. You can hard code this out by just creating item variables or for EXTRA CREDIT figure out a way to grab 
// user inputs using prompt().

// Hardcoding method:

let products = ['Book', 'Charger', "Phone"];

function displayProducts(products) {
    console.log(`These are the products in your cart:`)
    for (let product of products) {
        console.log("-", product);
    }
}

displayProducts(products);

function addProducts(products) {
    let newProducts = ['Computer', "Printer"];
    for (let newProduct of newProducts) {
        products.push(newProduct);
    }
    console.log(products); // Showing that the array newProducts was added to the array Products
    displayProducts(products); // Displaying products in a more user-friendly format
}

addProducts(products);

// EXTRA CREDIT: Using prompt():

let shoppingCart = ['Laptop', 'Backpack', 'Earphones'];
const product = prompt("Enter the product you would like to add to the cart: ");

function addProductsShoppingCart(product) {
    const lowerCaseProduct = product.toLowerCase() // Converting the input product to lowercase
    const normalizedCart = shoppingCart.map(product => product.toLowerCase()); // creating a new array with all items in the cart converted to lowercase for comparison purposes
    if (normalizedCart.includes(lowerCaseProduct)) { // Checking if the lower case product already exists in the normalized cart
        console.log(`${product} is already in your cart`);
    } else {
        shoppingCart.push(product); // Adding original product prompt to the cart
        console.log(`${product} has been added to your cart`);
    }
}

addProductsShoppingCart(product);

function displayProducts(shoppingCart) {
    console.log(`These are the products in your cart:`)
    for (let product of shoppingCart) {
        console.log("-", product);
    }
}

displayProducts(shoppingCart);

// Task 3: Calculate the total cost of the items in the cart and display it to the user.

const shoppingCartItems = [
    { name: 'Laptop', price: 1145.99},
    { name: 'Backpack', price: 127.49},
    { name: 'Earphones', price: 249},
  ];

// forEach() method:

function totalShoppingCart(shoppingCartItems) {
    let totalCost = 0;
    shoppingCartItems.forEach(item => {
        totalCost += item.price;
      })
      console.log(`The total cost of the items in the cart is $${totalCost}`);
}

totalShoppingCart(shoppingCartItems);

 // reduce() method:

const totalCost = shoppingCartItems.reduce((accumulator ,item) => {
// console.log(accumulator); // logging the accumulator
return accumulator += item.price;
}, 0);

console.log(`The total cost of the items in the cart is $${totalCost}`);


// Exploring Functions in JavaScript

// Problem Statement:
// Your task is to develop a JavaScript program that simulates a simple banking system. The program should include functions to 
// perform basic banking operations such as deposit, withdrawal, and balance inquiry.

// Expected Outcomes:

// After completing this assignment, students should demonstrate proficiency in creating and using functions to perform specific tasks.
// Students should understand the importance of function modularity and reusability in programming.
// This assignment will enable students to apply their knowledge of functions to practical scenarios, such as banking operations, 
// thereby enhancing their problem-solving skills.

// Task 1: Create a function to handle deposits into a bank account.

let balance = 0;

function bankDeposits(deposit) {
    balance += deposit;
    console.log(`Your balance is $${balance}`);
    return balance;
}

// Task 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.

function bankWithdrawal(withdrawal) {
    if (balance >= withdrawal) {
        balance -= withdrawal;
        console.log(`Your balance after withdrawal is $${balance}`);
        return balance;
    } else {
        console.log('Error: insufficient funds');
        console.log(`Your current balance is $${balance}`);
        return balance; // Returning the unchanged balance
    }
}

// Task 3: Develop a function to check the current balance of the account.

function bankBalanceDisplay(currentBalance) {
    const balanceInquiryFee = 10;
    let displayedBalance = currentBalance - balanceInquiryFee;
    console.log(`Your balance after inquiry fee: $${displayedBalance}`);
    return displayedBalance;
}

bankDeposits(1000);
bankWithdrawal(600);
bankBalanceDisplay(balance); 