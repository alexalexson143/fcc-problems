
function permAlone(str) {
  console.log('@@@@@@@@@@');
  var nonRepeat = 0;
  var strArray = str.split('');
  var consecutive = /([a-z])\1/;
  
  function permuteAll(partArray, excessArray) {
    var sliceArray = [];
    var wholeArray = [];
    var testArray = [];
    var withConsecutive = false;
    
    sliceArray = sliceArray.concat(partArray);
    wholeArray = excessArray.concat(sliceArray);
    
    sliceArray.forEach(function(letter) {
      if(sliceArray.length > 2) {
        permuteAll(sliceArray.slice(1), wholeArray.concat(sliceArray[0]));
      } else {
        testArray = excessArray.concat(sliceArray);
        withConsecutive = consecutive.test(testArray.join(''));
        if(!withConsecutive) {
          ++nonRepeat;
        }
        sliceArray.reverse();
        testArray = excessArray.concat(partArray);
        withConsecutive = consecutive.test(testArray.join(''));
        if(!withConsecutive) {
          ++nonRepeat;
        }
        return 0;
      }
      partArray.push(partArray.shift());
    });
  }
  
  permuteAll(strArray);
  
  //return nonRepeat;
}

//permAlone('aab');
