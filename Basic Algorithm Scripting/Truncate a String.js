
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num>3)
  {if (str.length<=num){
    return str;
  }else{
    return str.slice(0,num-3)+"...";
  }
    }
  else{
    return str.slice(0,num)+"...";
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
