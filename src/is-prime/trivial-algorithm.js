const { validateNumber } = require('../shared/validate-number');

/**
 * Checks if the given number is prime.
 *
 * @param {number} input
 * @return {boolean}
 */
function isPrime(input) {
  const number = validateNumber(input);

  // Here we will assume that a prime number must be greater or equal 2. If this
  // condition is not met, the function returns `false`, indicating that the
  // given number is not prime.
  if (number < 2) {
    return false;
  }

  // For each number where the given number is greater than `2`, iterate:
  for (let current = 2; current < number; current++) {
    // Check if the given number is divisible by the current iteration number.
    //
    // As prime numbers can only be divisible by itself and 1, if the following
    // condition is true, the number is not a prime.
    //
    // The remainder operator (`%`) will return `0` if the division has no
    // remainder, that is, is an exact division.
    if (number % current === 0) {
      // If the current condition is met, `false` is returned — as the number is
      // not prime — and the loop stops.
      return false;
    }

    // If the previous condition is not met, the `current` number is incremented
    // and the verification will repeat until the `curent` iteration number is
    // less than the given number.
  }

  // If the previous loop ended and reach this part of the code, the number is
  // prime, so we can return `true`.
  return true;
}

// Usage example:
//
//   isPrime(1); // false
//   isPrime(2); // true
//   isPrime(3); // true
//   isPrime(4); // false

module.exports = {
  isPrime
};
