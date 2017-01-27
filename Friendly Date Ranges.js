var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function makeFriendlyDates(arr) {
  var realArr = arr.map(function(date) {
    return date.split('-');
  });
  
  
  
  //dateSplit[1] = months[parseInt(dateSplit[1] - 1)];
    //dateSplit.push(dateSplit.shift());
    //return dateSplit;
  
  console.log(JSON.stringify(realArr));
  //return arr;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
