import capitalize from '../src/capitalize';


test('capitalize function exists', () => {
    expect(typeof capitalize).toEqual('function');
}
);

test('capitalizes the first letter of every word in a sentence', () => {
    expect(capitalize('hi there, how is it going?')).toEqual('Hi There, How Is It Going?');
    expect(capitalize('i love breakfast at bill miller bbq')).toEqual('I Love Breakfast At Bill Miller Bbq');
    expect(capitalize('this is a sentence')).toEqual('This Is A Sentence');
}
);

test('capitalize function capitalizes first character of string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('123abc')).toBe('123abc');
    expect(capitalize('')).toBe('');
  });