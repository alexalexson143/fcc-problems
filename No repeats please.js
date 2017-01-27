
function permAlone(str) {
  console.log('@@@@@@@@@@');
  var nonRepeat = 0;
  var strArray = str.split('');
  var consecutive = /([a-z])\1/;
  
  function permuteAll(orgArray, excessArray, partArray, iteration) {
    var testArray = [];
    var withConsecutive = false;
    
    if(partArray.length > 2) {
      permuteAll(orgArray, orgArray.slice(0, iteration), partArray.slice(1), ++iteration);
    } else {
      testArray = excessArray.concat(partArray);
      withConsecutive = consecutive.test(testArray.join(''));
    }
  }
  
  strArray.forEach(function(letter) {
    permuteAll(strArray, strArray, strArray, 1);
  });
  
  //return nonRepeat;
}

//permAlone('aab');
