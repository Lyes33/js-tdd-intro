const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters'); 

describe('capitalizeFirstLetters', () =>{

it('is a function accepting one arguments', () =>{
     // // Check that capitalizeFirst is a function
  assert.strictEqual(typeof capitalizeFirstLetters, 'function');

   // // Check that capitalizeFirst accepts one argument
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  
});

it('transform john correctly',() =>{
// // Check that capitalizeFirst transforms im john correctly
assert.strictEqual(capitalizeFirstLetters('im john'), 'Im John');

}); 

it('work for 1 string', () => {
// // Check that it works for a 1 string
assert.strictEqual(capitalizeFirstLetters('im'), 'Im');
}); 

it('work for a 1 character', () =>{
// // Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('i'), 'I');

}); 

it('work for empty string', () => {
// // // Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');

});
});