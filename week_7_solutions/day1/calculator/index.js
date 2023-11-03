const { add, subtract, multiply, divide } = require('./calculator');

// Example usage with static values
add(10, 5, (err, result) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Addition Result:", result);
    }
});

subtract(10, 5, (err, result) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Subtraction Result:", result);
    }
});

multiply(10, 5, (err, result) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Multiplication Result:", result);
    }
});

divide(10, 5, (err, result) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Division Result:", result);
    }
});
