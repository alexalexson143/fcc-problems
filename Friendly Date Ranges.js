// 1 Use ordinal days
// 2 If date range is within one year, do not display ENDING year
// 3 If date begins CURRENT year, and ends within one year, do not display BEGINNING year
// 4 If date ENDS in the same month, do not display month or year


// Milliseconds in one day
let oneDayMill = 86400000
let monthsObj = {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'}

function makeFriendlyDates(arr) {
  // Create date object
  let dateRange = arr
    .map(date => {
      let parts = date.split('-')
      return {
        'year': parseInt(parts[0]),
        'month': monthsObj[parseInt(parts[1])],
        'day': dayMapper(parseInt(parts[2])),
        'date': new Date(parts[0], parts[1] - 1, parts[2]).getTime()
        }
      }
    )
  
  // Map day to appropriate suffix
  function dayMapper (day) {
    if(day > 10 && day < 14) {
      return day + 'th'
    }
    
    let ordDay = ''
    let rem = day % 10
    
    if(rem == 1) {
    ordDay = day + 'st'
    } else if(rem == 2) {
    ordDay = day + 'nd'
    } else if(rem == 3) {
    ordDay = day + 'rd'
    } else {
    ordDay = day + 'th'
    }
    
    return ordDay
  }
  //
  
  // Check if current year
  function isCurrentYear(frYear) {
    return 2016 == frYear
  }
  //
  
  // Compute distance of dates in DAYS
  function dateDistance(dtFrom, dtTo) {
    return (dtTo - dtFrom) / oneDayMill
  }
  //
  
  
  /************** START **************/
  // Check if same day
  if(dateRange[0].date == dateRange[1].date) {
    if(!isCurrentYear(dateRange[0].year)) {
      return [dateRange[0].month + ' ' + dateRange[0].day + ', ' + dateRange[0].year]
    } else {
      return [dateRange[0].month + ' ' + dateRange[0].day]
    }
  }
  //
  
  // Check if within 365 days
  let begDay = ''
  let endDay = ''
  let begMonth = ''
  let endMonth = ''
  let begYear = ''
  let endYear = ''
  let beginning = ''
  let ending = ''

  // Initialize permanent variables
  begDay = dateRange[0].day
  endDay = dateRange[1].day
  begMonth = dateRange[0].month
  beginning = begMonth + ' ' + begDay
  
  // If within one year
  if(dateDistance(dateRange[0].date, dateRange[1].date) < 365) {
    // endYear = '' - Do not include endYear
    
    // If started in the current year
    if(isCurrentYear(dateRange[0].year)) {
      // begYear = '' - Do not inlude current year
      
      // If ending in the same month
      if(dateRange[1].month == dateRange[0].month && dateRange[1].year == dateRange[0].year) {
        // endMonth = '' - Do not include end month
        ending = endDay
      
      } else {
        endMonth = dateRange[1].month
        ending = endMonth + ' ' + endDay
      }
    } else {
      // Include current year
      begYear = dateRange[0].year
      beginning += ', ' + begYear
      
      if(dateRange[1].month == dateRange[0].month && dateRange[1].year == dateRange[0].year) {
      // endMonth = '' - Do not include end month
        ending = endDay
      
      } else {
        endMonth = dateRange[1].month
        ending = endMonth + ' ' + endDay
      }
    }  
  } else {
    // > 365, Include everything
    begYear = dateRange[0].year
    beginning += ', ' + begYear
    
    endMonth = dateRange[1].month
    endYear = dateRange[1].year
    ending = endMonth + ' ' + endDay + ', ' + endYear
  }
  
  let finalArray = [beginning, ending] 
  return finalArray
}

makeFriendlyDates(["2022-09-05", "2023-09-05"])
