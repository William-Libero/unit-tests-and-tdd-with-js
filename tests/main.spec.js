/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('Main', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return the number when non-multiple', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });

  it('should return 0 when 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
