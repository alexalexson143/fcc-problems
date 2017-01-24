var coinsAndBills = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.10,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

function checkCashRegister(price, cash, cid) {
  console.log('START @@@@@@@@@@@@@@@@@@@@@@@@@');
  console.log(JSON.stringify(price));
  console.log(JSON.stringify(cash));
  console.log(JSON.stringify(cid));
  
  var change = cash - price;
  var total;
  var totalChange;
  var finalArr = [];
  
  total = cid.reduce(function(amt, slot) {
    return amt + slot[1];
  }, 0);
  
  if(total < change) {
    return 'Insufficient Funds';
  } else if(total == change) {
    return 'Closed';
  } else {
    finalArr = cid
    .reverse()
    .reduce(function(changeArr, coinBill) {
      console.log('hello', changeArr, coinBill, change);
      change  = +change.toFixed(2);
      while(change !== 0) {
        if(coinBill[1] === 0) {
          continue;
        } else if(change > coinBill[1]) {
          change -= coinBill[1];
          changeArr.push(coinBill);
          return changeArr;
        } else if(coinBill[1] > change) {
          var validChange = Math.floor(change / coinsAndBills[coinBill[0]]);
          if(validChange > 0) {
            console.log('valid change', validChange);
            var newCoinBill = [coinBill[0], validChange * coinsAndBills[coinBill[0]]];
            change -= validChange * coinsAndBills[coinBill[0]];
            changeArr.push(newCoinBill);
            return changeArr;
          } else {
            return changeArr;
          }
        } else {
          return changeArr;
        }
      }
      return changeArr;
    }, []);
  }
  
  if(change > 0) {
    return 'Insufficient Funds';
  }
  // Here is your change, ma'am.
  console.log('answer', JSON.stringify(finalArr));
  return finalArr;
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
