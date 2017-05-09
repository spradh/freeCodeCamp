function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function sym(args1) {
  var args = Array.prototype.slice.call(arguments);
  var flatten=[];
  
  //Preserverving only one copy of the
  //elements of each of the argument arrays
  for(var i=0;i<args.length;i++){
    args[i]=args[i].filter( onlyUnique );
  }
  
  //function that flattens the array
  var untangle=function(element){
    if(Array.isArray(element)){
      for(var i=0;i<element.length;i++){
        untangle(element[i]);    
    }}
    else{
      flatten.push(element);
    }};
  //flatten args
  untangle([args[0],args[1]]);
  var results=[];

  for(var k=1;k<args.length;k++){
  if(k!=1){
    flatten=[];
    untangle([results,args[k]]);
    results=[];
  }
  var count={};
  for(i=0;i<flatten.length;i++){
    if(count.hasOwnProperty(flatten[i])){
       count[flatten[i]]+=1;
    }else{
       count[flatten[i]]=1;
    }  
  }
  
  keys=Object.keys(count);
  for(var j=0;j<keys.length;j++){
    if(count[keys[j]]===1){
      results.push(parseInt(keys[j]));
    }
  }
  }
  
  return results;
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
