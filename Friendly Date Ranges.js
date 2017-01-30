// 1 Use ordinal days
// 2 If date range is within one year, do not display ENDING year
// 3 If date begins CURRENT year, and ends within one year, do not display BEGINNING year
// 4 If date ENDS in the same month, do not display month or year

const oneDay = 86400000
const ordinalDays = {1: 'st', 2: 'nd', 3: 'rd', 4: 'th', 5: 'th', 6: 'th', 7: 'th', 8: 'th', 9: 'th', 0: 'th'}
const months = {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'}

function makeFriendlyDates(arr) {
  // Create date object
  let begDay = ''
  let endDay = ''
  let begMonth = ''
  let endMonth = ''
  let begYear = ''
  let endYear = ''
  let dateRange = arr
    .map(date => {
      let parts = date.split('-')
      return {
        'year': parseInt(parts[0]),
        'month': parseInt(parts[1]),
        'day': parseInt(parts[2]),
        }
      }
    )
  
    .map(date => {
      date.date = new Date(date.year, date.month, date.day)
      return date
    })
  
  let today = new Date()
  let dayDiff = (dateRange[1].date - dateRange[0].date) / oneDay

  if(dayDiff <= 365) {
    // endYear = '' - See above
    
    if(today.getFullYear() == dateRange[0]) {
      // begYear = '' - See above
    } else {
      begYear = dateRange[0]
    }
    if(dateRange[1].month == dateRange[0].month) {
      // endMonth = '' - See above
    } else {
      endMonth = dateRange[1].month
    }
  } else {
    endYear = dateRange[1].year
  }
  
  begDay = dateRange[0].day
  endDay = dateRange[1].day
  begMonth = dateRange[0].month
  console.log(begDay, endDay, begMonth, endMonth, begYear, endYear)
    
  console.log(JSON.stringify(dateRange, null, 2))
  //return arr;
}

makeFriendlyDates(['2016-07-01', '2016-07-04'])
