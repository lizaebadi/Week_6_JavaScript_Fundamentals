const fizzBuzz = require('../lib/fizzBuzz')

describe('fizzBuzz', () => {

  it('returns Fizz when number is 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });


  it('returns Buzz when number is 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('returns number when not divisible by 3 or 5', () => {
    expect(fizzBuzz(8)).toBe(8);
  });

  it('returns FizzBuzz when number is 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});