const fizzBuzz = () => {
    Array.from({ length: 100 }, (_, i) => i + 1).forEach((num) => {
        const output = (num % 3 === 0 ? "Fizz" : "") + (num % 5 === 0 ? "Buzz" : "") || num;
        console.log(output);
    });
};

fizzBuzz();
