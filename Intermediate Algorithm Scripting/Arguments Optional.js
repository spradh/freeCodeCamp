
function addTogether() {
  var a=arguments[0];
  if(typeof a=="number"){
    if(arguments.length==2){
      if (typeof arguments[1]=="number"){
        return a+arguments[1];
      }else{
        return undefined;
      }
    }
    else{
      return function(arg2){
        if (typeof arg2=="number"){
          return a+arg2;
        }else{
          return undefined;
        }
      };    
    }
  }else{
    return undefined;
  }
  

}

addTogether(2,3);
