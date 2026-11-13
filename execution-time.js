
// Calculate execution time using console.time()

console.log("Execution Time Demonstration");

// Start the timer
console.time("Execution Time");

// Perform a task
let sum = 0;

for (let i = 1; i <= 1000000; i++) {
    sum += i;
}

console.log("Sum:", sum);

// Stop the timer and display execution time
console.timeEnd("Execution Time");
