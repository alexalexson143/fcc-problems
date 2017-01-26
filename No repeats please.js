
function permAlone(str) {
  console.log('@@@@@@@@@@');
  var nonRepeat = 0;
  var strArray = str.split('');
  var loop = 1;
  var i = 0;
  
  // compute (n-1)!
  for(i = 1; i < strArray.length; ++i) {
      loop *= i;
  }
  
  // Loop through all letters
  nonRepeat = strArray.reduce(function(total, curLetter, index, origArr) {
    var workingArr = origArr;
    
    // loop curLetter (n-1)! times
    for(i = 0; i < loop; ++i) {
      console.log(loop);
    }
    
    return total;
  }, 0);
  
  //return nonRepeat;
}

//permAlone('aab');
