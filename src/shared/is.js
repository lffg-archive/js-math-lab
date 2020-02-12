/**
 * Checks one of `list`'s elements is `input`. Uses the `Object.is` algorithm.
 * This should not be used with non-primitive JavaScript types, such as object.
 *
 * @param {any} input
 * @param {any[]} list
 */
function is(input, list) {
  for (const item of list) {
    if (Object.is(input, item)) {
      return true;
    }
  }

  return false;
}

module.exports = {
  is
};
