// 1 Use ordinal days
// 2 If date range is within one year, do not display ENDING year
// 3 If date begins CURRENT year, and ends within one year, do not display BEGINNING year
// 4 If date ENDS in the same month, do not display month or year

const oneDay = 86400000
const ordinalDays = {1: 'st', 2: 'nd', 3: 'rd', 'other': 'th'}
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
      date.date = new Date(date.year, date.month - 1, date.day)
      return date
    })
  
  console.log(JSON.stringify(dateRange, null, 2))
  console.log(dateRange[1].date, dateRange[0].date)
  
  
  let finDay = ''
  if(dateRange[1].date - dateRange[0].date === 0) {
    if(dateRange[0].day % 10 < 4) {
      finDay = dateRange[0].day.toString() + ordinalDays[dateRange[0].day % 10]
    } else {
      finDay = dateRange[0].day.toString() + ordinalDays.other
    }
    console.log(finDay)
    return [months[dateRange[0].month] + ' ' + finDay + ', ' + dateRange[0].year]
  }
  
  
  let today = new Date()
  let dayDiff = (dateRange[1].date - dateRange[0].date) / oneDay
  console.log(dayDiff)
  
  begDay = dateRange[0].day
  begDay = begDay + ordinalDays[begDay]
  endDay = dateRange[1].day
  endDay = endDay + ordinalDays[endDay]
  begMonth = dateRange[0].month
  begMonth = months[begMonth]
  let beginning = begMonth + ' ' + begDay
  
  if(dayDiff <= 365) {
    // endYear = '' - See above
    
    //today.getFullYear()
    if(2016 == dateRange[0].year) {
      // begYear = '' - See above
      
      if(dateRange[1].month == dateRange[0].month) {
      // endMonth = '' - See above
      
      } else {
        endMonth = dateRange[1].month
        endMonth = months[endMonth]
      }
    } else {
      begYear = dateRange[0].year
      beginning += ', ' + begYear
    }
    
  } else {
    begYear = dateRange[0].year
    beginning += ', ' + begYear
    
    endMonth = dateRange[1].month
    endMonth = months[endMonth]
    endYear = dateRange[1].year
  }
  
  let ending = ''
  if(endMonth !== '') {
    ending += endMonth + ' '
  }
  ending += endDay
  if(endYear !== '') {
    ending += ', ' + endYear
  }
  
  /*
  console.log('bd', begDay)
  console.log('ed', endDay)
  console.log('bm', begMonth)
  console.log('em', endMonth)
  console.log('by', begYear)
  console.log('ey', endYear)
  */
  
  let finalArray = [beginning, ending] 
  console.log(arr, 'answer', finalArray)
  return finalArray;
}

makeFriendlyDates(['2018-01-13', '2018-01-13'])
