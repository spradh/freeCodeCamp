
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) {
  return a - b;
});
  
  for(var i=0; i<arr.length;i++){
    if(num<=arr[i]){
      return i;
    }
    else{
      if(i===(arr.length-1)){
        return arr.length;
      }else{
        continue;
      }
    }
  }
}

getIndexToIns([5, 3, 20, 3], 5);
