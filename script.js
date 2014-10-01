window.onload = init;

function init(){
  rand();
 }
var num = 0;

function rand(){
  num = Math.floor((Math.random()*9)+1);
  $("div.game").click(function() {
      if (num == $(this).data("id")) {
      	correct();
      	$(this).effect('bounce', {times:3}, 500);
        
      } else {
          $(this).animate({"opacity": "0.25"}, "slow");
          incorrect();
      }
  });
}

function correct(){
  $("#result").html("Congratulations!! " +
  	num + " was the winning number!");
}

function incorrect(){
  $("#result").html("Wrong! Guess Again Chump!");
    guesses--;
   document.getElementById("guesses").innerHTML = guesses;
    if (guesses == 0){
   }
}
