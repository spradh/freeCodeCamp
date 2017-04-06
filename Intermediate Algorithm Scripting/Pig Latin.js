
function translatePigLatin(str) {
  vowels=['a','e','i','o','u'];
  for(var i=0;i<str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[0]==vowels[j]){
        str=str+'way';
        return str;
      }
      if(str[i]==vowels[j]){
        str=str.substring(i)+str.substring(0,i)+'ay';
        return str;
      }
    }
  }
}

translatePigLatin("consonant");
