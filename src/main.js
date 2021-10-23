/* eslint-disable keyword-spacing */
/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-trailing-spaces */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
const FizzBuzz = (num) => {
  if (num === 0) return 0;
  if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if(num % 3 === 0) return 'Fizz';
  if(num % 5 === 0) return 'Buzz';
  return num;
};

export default FizzBuzz;
