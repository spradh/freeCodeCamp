
function myReplace(str, before, after) {
  arr=str.split(" ");
  if(before[0]==before[0].toUpperCase()){
    after=after[0].toUpperCase()+after.substring(1,after.length);
  }
  arr.splice(arr.indexOf(before),1,after);
  return arr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
