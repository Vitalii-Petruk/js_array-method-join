'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedValuesFromArray = '';

    for (let index = 0; index < this.length; index++) {
      if (this[index] !== null && this[index] !== undefined) {
        joinedValuesFromArray += this[index];
      }

      if (index < this.length - 1) {
        joinedValuesFromArray += separator;
      }
    }

    return joinedValuesFromArray;
  };
}

module.exports = applyCustomJoin;
