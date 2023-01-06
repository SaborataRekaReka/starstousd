let Stars = document.querySelector('.Stars');
let Dollar ="";

function myFunction() {
  // var x = Stars.value;
  // Dollar.innerHTML = "You wrote: " + x;

let Dollars = Stars.value;
Dollars = Dollars.toString(10);
Dollars =  Dollars.length;

console.log("Я долары"+ Dollars);
for (let i = 0; i < Dollars; i++) {
  Dollar  = Dollar + "	💲"
  };
  document.getElementById("demo").innerHTML = Dollar;
}
