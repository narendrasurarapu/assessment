// Define the reverseString function
const reverseString = (input) => 
    // Convert input to an array, reverse it, and join it back into a string
    Array.from(input).reverse().join('');

// Call the function and log the result
console.log(reverseString("hello"));