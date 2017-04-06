
function sumAll(arr) {
  min=Math.min.apply(null,arr);
  max=Math.max.apply(null,arr);
  list=[];
  for(var i=min;i<max+1;i++){
    list.push(i);
  }
  var sum=list.reduce(function(acc,curr){return acc+curr;},0);
  return sum;
}

sumAll([1, 4]);
