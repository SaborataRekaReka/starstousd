let Stars = document.querySelector('.Stars');
let StarCheck = [];
let Test ="";

function myFunction() {
Test = Stars.value.toString(10);
Test = Test.slice(-1);
StarCheck.push(Test);
if (StarCheck[0] !== "⭐") {
  console.log(StarCheck[0]);
  console.log("НАЕБКА");
  StarCheck.pop();
  Stars.value="";
  document.getElementById("demo").innerHTML  = "МЫ ПРИНИМАЕМ ТОЛЬКО ЗВЕЗДОЧКИ!";
} else{
  console.log("НЕНАЕБКА");
  StarCheck.pop();
  document.getElementById("demo").innerHTML  = "";

  let Dollars = Stars.value;
  Dollars = Dollars.toString(10);
  Dollars =  Dollars.length;

  for (let i = 0; i < Dollars; i++) {
    document.getElementById("demo").innerHTML  = document.getElementById("demo").innerHTML  + "💲"
    };

  }
}
