
function destroyer(arr) {
  // Remove all the values
  idx=1;
  for(var i=1;i<arguments.length;i++){
  for(var j=0;j<arguments[0].length;j=idx){
    idx=arguments[0].indexOf(arguments[i]);
    if(idx===-1){
      break;
    }
    arguments[0].splice(arguments[0].indexOf(arguments[i]),1);
  }}
  return arguments[0];
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
