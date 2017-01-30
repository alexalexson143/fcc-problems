// 1 Use ordinal days
// 2 If date range is within one year, do not display ENDING year
// 3 If date begins CURRENT year, and ends within one year, do not display BEGINNING year
// 4 If date ENDS in the same month, do not display month or year

const ordinalDays = {1: 'st', 2: 'nd', 3: 'rd', 4: 'th', 5: 'th', 6: 'th', 7: 'th', 8: 'th', 9: 'th', 0: 'th'}
const months = {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'}

function makeFriendlyDates(arr) {
  //var realArr = arr
    //.map(date => date.split('-'))
  
  console.log(arr)
  //return arr;
}

makeFriendlyDates(['2016-07-01', '2016-07-04'])
