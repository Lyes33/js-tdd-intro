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

//*************************Code****************************/
//*********************************************************/
function capitalizeFirstLetters(chaine){
    if (chaine !="" ){
    return chaine.split(' ')
                .map(function(mot){
                    return mot[0].toUpperCase()+mot.substr(1);
                })
                .join(' ')
    }else{
        
        return '';
         
    }
}

console.log(capitalizeFirstLetters("i am learning TDD"));