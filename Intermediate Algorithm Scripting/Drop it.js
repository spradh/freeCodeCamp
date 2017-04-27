
function dropElements(arr, func) {
  // Drop them elements.
  first=arr.filter(func)[0];
  while(arr[0]!=first){
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3,4], function(n) {return n >= 3; });
