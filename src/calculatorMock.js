const calculatorMock = {
    add: jest.fn((a, b) => a + b),
    subtract: jest.fn((a, b) => a - b),
    multiply: jest.fn((a, b) => a * b),
    divide: jest.fn((a, b) => (b === 0 ? NaN : a / b)),
  };
  
export default calculatorMock;
  