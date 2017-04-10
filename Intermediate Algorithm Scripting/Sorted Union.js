
function uniteUnique(arr) {
  arr=Array.prototype.slice.call(arguments);
  arr=arr.reduce(
  function(acc,val){
    for(var i=0;i<val.length;i++){
      if (acc.length===0){
          acc.push(val[i]);
          continue;
        }
      inside=false;
      for(var j=0;j<acc.length;j++){
        if (val[i]==acc[j]){
          inside=true;
        }
      }
      if (!inside){
        acc.push(val[i]);
      }
    }
    return acc;
  },[]);
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
