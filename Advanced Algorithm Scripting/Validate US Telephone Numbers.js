
function telephoneCheck(str) {
  // Good luck!
  var reg=/^1?\s?(\(\d{3}\)\s?|\d{3}-|\d{3}\s?)(\d{3}-|\d{3}\s?)\d{4}$/g;
  return reg.test(str);
}



telephoneCheck("(6505552368)");
