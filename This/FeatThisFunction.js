//Check 
var x = this
// document.getElementById('demo').innerHTML = x;

"use strict";
// document.getElementById("demo").innerHTML = myFunction();
function myFunction() {
  return this;
}

var person1 = {
    NameHero: function() {
      return this.firstName + " " + this.lastName;
    }
  }
var person2 = {
    firstName:"Super",
    lastName: "Man",
  }
var x = person1.NameHero.call(person2); 
document.getElementById("demo").innerHTML = x; 