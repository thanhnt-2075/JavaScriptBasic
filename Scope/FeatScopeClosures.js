// var name = "Vu";
// function init() {
//     var name = "Vu Nguyen";
//     function dispalyName() {
//         alert(window.name);
//     }
//     dispalyName();
// };
// init();


function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      console.log(this.name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();