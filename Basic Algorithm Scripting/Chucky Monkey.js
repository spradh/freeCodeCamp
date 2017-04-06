
function chunkArrayInGroups(arr, size) {
  // Break it up.
  result=[];
  for(var i=0;i<arr.length;i+=size){
    var s=[];
    if(arr.length-i<size){
      for(var j=0;j<arr.length-i;j++){
      s.push(arr[i+j]);
    }
    }else{
    for(var k=0;k<size;k++){
      s.push(arr[i+k]);
    }}
    
    result.push(s);
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
