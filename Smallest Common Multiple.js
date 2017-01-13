function isPrime(maybeAPrime) {
  var thisNumberIsPrime = true;
  
  for(var j = 2; j * j <= maybeAPrime; ++j) {
    if(maybeAPrime % j === 0) {
      thisNumberIsPrime = false;
    }
  }
  
  return thisNumberIsPrime;
}


function extractPrimeMultiples(notPrimeNumber) {
  var multipleArray = [];
  
  while(!isPrime(notPrimeNumber)) {
    
    // Find multiples
    for(var k = 2; k < notPrimeNumber; ++k) {
      
      // If a multiple...
      if(notPrimeNumber % k === 0) {
        multipleArray.push(k);
        notPrimeNumber /= k;
        k = 1;
      }
    }
  }
  
  // Append last prime number
  multipleArray.push(notPrimeNumber);
  
  return multipleArray;
}


function smallestCommons(arr) {
  var scm = 0;
  var newMultiple = [];
  var tempMultiple = [];
  
  // Sort the array, min to max
  arr.sort(function(a, b) {
    return a-b;
  });
  
  
  // Complete the array range, min to max
  for(var i= 1, min = arr[0] + 1, max = arr[1]; min < max; ++min, ++i) {
    arr.splice(i, 0, min);
  }
  
  // Return all prime multiples in array and push to new array
  for(i = 0; i < arr.length; ++i) {
    
    // Test if a prime
    if(isPrime(arr[i])) {
      newMultiple.push(arr[i]);
    } else {
      tempMultiple = extractPrimeMultiples(arr[i]);
      
      // Insert new multiples
      for(var l = 0; l < tempMultiple.length; ++l) {
        newMultiple.push(tempMultiple[l]);
      }
    }
  }
  
  
  return arr;
}

smallestCommons([13,5]);
