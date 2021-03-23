const assert = require('assert');

// // // WRITE THE ACTUAL FUNCTION HERE

// // // Check that capitalizeFirst is a function
  assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// // // Check that capitalizeFirst accepts one argument
  assert.strictEqual(capitalizeFirstLetters.length, 1);

// // // Check that capitalizeFirst transforms im john correctly
 assert.strictEqual(capitalizeFirstLetters('im john'), 'Im John');

// // // Check that it works for a 1 string
  assert.strictEqual(capitalizeFirstLetters('im'), 'Im');

// // // Check that it works for a 1-character string
 assert.strictEqual(capitalizeFirstLetters('i'), 'I');

// // // Check that it works for an empty string
 assert.strictEqual(capitalizeFirstLetters(''), '');