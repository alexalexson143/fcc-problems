function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var total;
  
  total = cid.reduce(function(amt, slot) {
    return amt + slot[1];
  }, 0);
  
  if(total < change) {
    return 'Insufficient Funds';
  } else if(total == change) {
    return 'Closed';
  } else {
    return cid
    .reverse()
    .reduce(function(changeArr, coinBill) {
      
    }, []);
  }
  // Here is your change, ma'am.
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
