import { calculatorMock } from "../src/calculatorMock.js";



test("calculator object exists", () => {
    expect(typeof calculatorMock).toEqual("object");
}
);

test("calculator has add method", () => {
    expect(typeof calculatorMock.add).toEqual("function");
}
);

test("calculator has subtract method", () => {
    expect(typeof calculatorMock.subtract).toEqual("function");
}
);

test("calculator has multiply method", () => {
    expect(typeof calculatorMock.multiply).toEqual("function");
}
);

test("calculator has divide method", () => {
    expect(typeof calculatorMock.divide).toEqual("function");
}
);

test("calculator adds two numbers", () => {
    calculatorMock.add.mockReturnValue(5);
    expect(calculatorMock.add(2, 3)).toEqual(5);
}
);

test("calculator subtracts two numbers", () => {
    calculatorMock.subtract.mockReturnValue(3);
    expect(calculatorMock.subtract(5, 2)).toEqual(3);
}
);

test("calculator divides two numbers", () => {
    calculatorMock.divide.mockReturnValue(5);
    expect(calculatorMock.divide(10, 2)).toEqual(5);
}
);

test("calculator multiplies two numbers", () => {
    calculatorMock.multiply.mockReturnValue(24);
    expect(calculatorMock.multiply(4, 6)).toEqual(24);
}
);

test("calculator divides by zero", () => {
    calculatorMock.divide.mockImplementation(() => { throw new Error("Cannot divide by zero") });
    expect(() => calculatorMock.divide(10, 0)).toThrow("Cannot divide by zero");
}
);
