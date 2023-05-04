const calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
    divide: function(a, b) {
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
      return a / b;
    },
    multiply: function(a, b) {
      return a * b;
    }
  };
//   console.log(calculator.add(2, 3)); // Output: 5
//   console.log(calculator.subtract(5, 2)); // Output: 3
//   console.log(calculator.divide(10, 2)); // Output: 5
//   console.log(calculator.multiply(4, 6)); // Output: 24
  
export default calculator;