
function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  var inventory=arr1.reduce(function(acc,curr){
    acc[curr[1]]=curr[0];
    return acc;    
  },{}); 
  
  inventory=arr2.reduce(function(acc,curr){
    if(acc.hasOwnProperty(curr[1])){
      acc[curr[1]]+=curr[0];
      return acc;
    }
    acc[curr[1]]=curr[0];
    return acc;    
  },inventory); 
  
  keys=Object.keys(inventory).sort();
  
  result=[];
  
  for(var i=0;i<keys.length;i++){
    result.push([inventory[keys[i]],keys[i]]);
  }
  
  return result;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
