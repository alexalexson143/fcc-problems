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
      }
    }
  }
  
  // Append last prime number
  multipleArray.push(notPrimeNumber);
  
  return multipleArray;
}


function smallestCommons(arr) {
  var scm = 0;
  var aPrime = true;
  
  // Sort the array, min to max
  arr.sort(function(a, b) {
    return a-b;
  });
  
  
  // Complete the array range, min to max
  for(var i= 1, min = arr[0] + 1, max = arr[1]; min < max; ++min, ++i) {
    arr.splice(i, 0, min);
  }
  
  // Return all multiples in array and push to new array
  for(i = 0; i < arr.length; ++i) {
    aPrime = true;
    
    // Test if a prime
    
    
    if(!aPrime) {
      
    }
    
  }
  
  
  return arr;
}

smallestCommons([13,5]);
