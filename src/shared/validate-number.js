/**
 * Asserts that the given input is a valid JavaScript integer.
 * Returns the given number if it is valid.
 *
 * @param {any} n
 * @return {number}
 */
function validateNumber(n) {
  if (typeof n !== 'number') {
    throw new TypeError(`Invalid type. Expected number, got ${typeof n}.`);
  }

  if (n >= Number.MAX_SAFE_INTEGER) {
    throw new RangeError(
      'Invalid number range. The given number must be less than `Number.MAX_SAFE_INTEGER`.'
    );
  }

  return n;
}

module.exports = {
  validateNumber
};
