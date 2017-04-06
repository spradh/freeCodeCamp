
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for(var i=0;i<collection.length;i++){
  items=true;
  for(var j=0;j<Object.keys(source).length;j++){
    if(collection[i].hasOwnProperty(Object.keys(source)[j])&&collection[i][Object.keys(source)[j]]===source[Object.keys(source)[j]]){
      continue;
    }else{
      items=false;
      break;
    }
  }
    if(items){
      arr.push(collection[i]);
    }
  }  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
