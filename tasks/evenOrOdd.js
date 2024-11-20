// Function to determine if a number is even or odd
const evenOrOdd = (number) => 
    // Ternary operator checks if the number is divisible by 2
    number % 2 === 0 ? "Even" : "Odd"; // If divisible by 2, return "Even", otherwise return "Odd"

// Test cases
console.log(evenOrOdd(3)); // Output: "Odd" (since 3 is not divisible by 2)
console.log(evenOrOdd(8)); // Output: "Even" (since 8 is divisible by 2)