
function fearNotLetter(str) {
  for(var i=0;i<str.length;i++){
    if(i===0){
      previous=str.charCodeAt(i);
    }else{
      if(previous==str.charCodeAt(i)-1){
        previous=str.charCodeAt(i);
      }else{
        return String.fromCharCode(previous+1);
      }
    }
  }
  return undefined;
}

fearNotLetter("abce");
