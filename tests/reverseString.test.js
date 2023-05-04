import reverseString from "../src/reverseString";

test ("reverseString function exists", () => {
    expect(typeof reverseString).toEqual("function");
}
);

test ("reverseString reverses a string", () => {
    expect(reverseString("hello")).toEqual("olleh");
}
);

test ("reverseString reverses numbers", () => {
    expect(reverseString("12345")).toEqual("54321");
}
);
