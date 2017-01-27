
function permAlone(str) {
  var nonRepeat = 0;
  var strArray = str.split('');
  var consecutive = /([a-z])\1/;
  
  function permuteAll(partArray, excessArray) {
    var testArray = [];
    var withConsecutive = false;
    
    partArray.forEach(function(letter) {
      if(partArray.length > 2) {
        permuteAll(partArray.slice(1), excessArray.concat(partArray[0]));
      } else {
        testArray = excessArray.concat(partArray);
        withConsecutive = consecutive.test(testArray.join(''));
        if(!withConsecutive) {
          ++nonRepeat;
        }
      }
      partArray.push(partArray.shift());
    });
  }
  
  permuteAll(strArray, []);
  
  return nonRepeat;
}

permAlone('aaabb');
