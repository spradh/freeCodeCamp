
function pairwise(arr, arg) {
  copy1=arr;
  copy2=arr;
  result=arr.reduce(function(acc,curr,idx){
    for(var i =0;i<copy1.length;i++){
      if(copy2[idx]+copy1[i]==arg && i!==idx){
        acc+=(i+idx);
        copy1[i]=NaN;
        copy2[i]=NaN;
        copy2[idx]=NaN;
        return acc;
      }
    }
    return acc;
  },0);
  return result;
}

pairwise([1, 1, 1], 2);
