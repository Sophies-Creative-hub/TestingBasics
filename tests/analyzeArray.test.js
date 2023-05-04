import analyzeArray from '../src/analyzeArray';

test('analyzeArray function exists', () => {
    expect(typeof analyzeArray).toEqual('function');
}
);

test('analyzeArray returns an object', () => {
    expect(typeof analyzeArray([1, 2, 3])).toEqual('object');
}
);

test('analyzeArray returns an object with an average property', () => {
    expect(analyzeArray([1, 2, 3])).toHaveProperty('average');
}
);

test('analyzeArray returns an object with a min property', () => {
    expect(analyzeArray([1, 2, 3])).toHaveProperty('min');
}
);

test('analyzeArray returns an object with a max property', () => {
    expect(analyzeArray([1, 2, 3])).toHaveProperty('max');
}
);

test('analyzeArray returns an object with a length property', () => {
    expect(analyzeArray([1, 2, 3])).toHaveProperty('length');
}
);


test('analyzeArray returns the correct results', () => {
    expect(analyzeArray([1, 2, 3, 4])).toEqual({ average: 2.5, min: 1, max: 4, length: 4 });
}
);


