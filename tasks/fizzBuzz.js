// Define the fizzBuzz function
const fizzBuzz = () => {
    // Generate numbers from 1 to 100 and check divisibility
    Array.from({ length: 100 }, (_, i) => i + 1)
        .forEach((num) => {
            // Concatenate "Fizz" for multiples of 3, "Buzz" for multiples of 5, or use the number
            const output = (num % 3 === 0 ? "Fizz" : "") + (num % 5 === 0 ? "Buzz" : "") || num;
            
            // Output the result
            console.log(output);
        });
};

// Call the function
fizzBuzz();