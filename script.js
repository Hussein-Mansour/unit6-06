function MyFunction() {

  var myAge = 18;
  var answer = document.getElementById("age").value;

  if (myAge == answer){
    document.getElementById("demo1").innerHTML = "you got it right! Do you want to play again?";
  }else {
    if (answer < myAge) {
      docement.getElementById("demo1").innerHTML = "you guessed too small,please try again.";
    };
  }else {
    if (answer > myAge) {
      docement.getElementById("demo1").innerHTML = "you guessed too big,please try again.";
    };
  }else {
    docement.getElementById("demo1").innerHTML = "Invalid asnwer,please try.";
  }