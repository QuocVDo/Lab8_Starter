// sum.test.js

const {sum} = require('../assets/scripts/sum.js');

//modify existing test according to instructions.
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

//test the imported sum function
test('adds 1 + 2 to equal 3 using imported sum function', () => {
  expect(sum(1,2)).toBe(3);
});

