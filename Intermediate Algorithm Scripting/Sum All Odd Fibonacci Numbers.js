function sumFibs(num){
  var prev = 0;
  var curr = 1;
  var total = 0;
  while (curr <= num) {
    if (curr % 2 !== 0) {
      total += curr;
    }
    var next = curr + prev;
    prev = curr;
    curr = next;
  }

  return total;
  
}

sumFibs(75025);
