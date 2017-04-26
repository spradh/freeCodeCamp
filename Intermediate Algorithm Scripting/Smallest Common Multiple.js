

function smallestCommons(arr) {
  var lcm;
  var newArr=[];
  var min=arr.reduce(function(a, b) {return Math.min(a, b);});
  var max=arr.reduce(function(a, b) {return Math.max(a, b);});                   
  for(var i=min;i<=max;i++){
    newArr.push(i);
  }
  
  for (var j=0;j<newArr.length;j++){
    if (j===0){
      lcm=newArr[j];
      continue;
    }
    
    x=0;
    newLcm=lcm;
    while(newLcm%newArr[j]!==0 ){
      x+=1;
      newLcm=x*lcm;
    }
    lcm=newLcm;
  }
  return lcm;
}


smallestCommons([1,3]);
