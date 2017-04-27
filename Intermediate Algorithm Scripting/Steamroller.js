function steamrollArray(arr) {
  // I'm a steamroller, baby
  result=[];
  var untangle=function(element){
    if(Array.isArray(element)){
      for(var i=0;i<element.length;i++){
        untangle(element[i]);    
    }}
    else{
      result.push(element);
    }};
  untangle(arr);
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);
