
function rot13(str) { // LBH QVQ VG!
  result=[];
  arr=str.split(' ');
  
  for(var i=0;i<arr.length;i++)
    {
      word=arr[i].split('');
      for(var j=0;j<word.length;j++)
        {
          code=word[j].charCodeAt(0);
          if(64<code && code<91){
            code+=13;
            if(code>90){
              code=code-90+64;
              word[j]=String.fromCharCode(code);
            }else{
              word[j]=String.fromCharCode(code);
            }
          }
        }
      result.push(word.join(''));
    }
  
  
  return result.join(' ');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
