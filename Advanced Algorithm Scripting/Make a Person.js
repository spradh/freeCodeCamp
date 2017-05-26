
var Person = function(firstAndLast) {
  // Complete the   method below and implement the others similarly
  var firstName=firstAndLast.split(" ")[0];
  var lastName=firstAndLast.split(" ")[1];

  this.getFullName = function() {
    return (firstName+" "+lastName);
  };
  this.getLastName= function(){
    return lastName;
  };
  this.getFirstName= function(){
    return firstName;
  };
  this.setFirstName= function(newFirstName){
    firstName=newFirstName;
  };
  this.setLastName= function(newLastName){
    lastName=newLastName;
  };
  this.setFullName= function(newFirstAndLast){
    firstName=newFirstAndLast.split(" ")[0];
    lastName=newFirstAndLast.split(" ")[1];
  };

};

var bob = new Person('Bob Ross');
bob.getFullName();
