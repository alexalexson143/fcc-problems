
function smallestCommons(arr) {
  var scm = 0;
  
  // Sort the array, min to max
  arr.sort(function(a, b) {
    return a-b;
  });
  
  
  // Complete the array range, min to max
  for(var i= 1, min = arr[0] + 1, max = arr[1]; min < max; ++min, ++i) {
    arr.splice(i, 0, min);
  }
  
  return arr;
}

smallestCommons([13,5]);
