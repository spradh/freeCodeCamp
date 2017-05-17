
var denom=[
  {name:'ONE HUNDRED', val:100.00},
  {name:'TWENTY', val:20.00},
  {name:'TEN', val:10.00},
  {name:'FIVE', val:5.00},
  {name:'ONE', val:1.00},
  {name:'QUARTER', val:0.25},
  {name:'DIME', val:0.10},
  {name:'NICKLE', val:0.05},
  {name:'PENNY', val:0.01},
];

  
  
function checkCashRegister(price, cash, cid) {
  var change=cash-price;
  // Here is your change, ma'am.
  var register=cid.reduce(function(total,val){total.total+=val[1];
                                             total[val[0]]=val[1];
                                             return total;},{total:0});
  
  if(register.total===change){
    return "Closed";
  }
  
  if(register.total<change){
    return "Insufficient Funds";
  }
  
  var change_arr=denom.reduce(function(acc,curr){
    var value=0;
    
    while(register[curr.name]>0 && change>=curr.val){
      change-=curr.val;
      register[curr.name]-=curr.val;
      value+=curr.val;
      
      change=Math.round(change*100)/100;
    }
    
    if (value>0){
      acc.push([curr.name,value]);
    }
    
    return acc;
  },[]);
  
  if(change_arr.length<1||change>0){
   return "Insufficient Funds";
  }
  return change_arr;
  
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

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
