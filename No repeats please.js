
function permAlone(str) {
  console.log('@@@@@@@@@@');
  var nonRepeat = 0;
  var strArray = str.split('');
  
  // Loop through all letters
  nonRepeat = strArray.reduce(function(total, curLetter, index, origArr) {
    var workingArr = origArr;
    var loop = 1;
    
    // compute (n-1)!
    for(i = 1; i < origArr.length; ++i) {
      loop *= i;
    }
    
    return total;
  }, 0);
  
  //return nonRepeat;
}

//permAlone('aab');
