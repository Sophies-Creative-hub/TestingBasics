import calculator from "../src/calculator";

test ("calculator object exists", () => {
    expect(typeof calculator).toEqual("object");
}
);

test ("calculator has add method", () => {
    expect(typeof calculator.add).toEqual("function");
}
);

test ("calculator has subtract method", () => {
    expect(typeof calculator.subtract).toEqual("function");
}
);

test ("calculator has multiply method", () => {
    expect(typeof calculator.multiply).toEqual("function");
}
);

test ("calculator has divide method", () => {
    expect(typeof calculator.divide).toEqual("function");
}
);

test ("calculator adds two numbers", () => {
    expect(calculator.add(2, 3)).toEqual(5);
}
);

test ("calculator subtracts two numbers", () => {
    expect(calculator.subtract(5, 2)).toEqual(3);
}
);

test ("calculator divides two numbers", () => {
    expect(calculator.divide(10, 2)).toEqual(5);
}
);

test ("calculator multiplies two numbers", () => {
    expect(calculator.multiply(4, 6)).toEqual(24);
}
);

test ("calculator divides by zero", () => {
    expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
}
);

