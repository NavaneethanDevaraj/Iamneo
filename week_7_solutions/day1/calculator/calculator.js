const add = (a, b, callback) => {
    const result = a + b;
    callback(null, result);
};

const subtract = (a, b, callback) => {
    const result = a - b;
    callback(null, result);
};

const multiply = (a, b, callback) => {
    const result = a * b;
    callback(null, result);
};

const divide = (a, b, callback) => {
    if (b === 0) {
        callback(new Error("Division by zero is not allowed"), null);
    } else {
        const result = a / b;
        callback(null, result);
    }
};

module.exports = {
    add,
    subtract,
    multiply,
    divide,
};
