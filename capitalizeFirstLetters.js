
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

module.exports = capitalizeFirstLetters; 