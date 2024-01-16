let playerOneTurn = false;

console.log("Default value of bool is" ,playerOneTurn)

function toggle() {
  playerOneTurn = !playerOneTurn;
}

function startGame() {
  document.getElementById("playerIndicator").innerHTML = "Player 1, It's you're turn!";

  toggle()
}



function tdClicked(id){
  const click = "This thing on?"
  console.log(click)
  if(playerOneTurn === true) {
    document.getElementById(id).innerHTML = "X"
    document.getElementById("playerIndicator").innerHTML = "Player 2, It's you're turn!"
    toggle()
  } else {
    document.getElementById(id).innerHTML = "O"
    document.getElementById("playerIndicator").innerHTML = "Player 1, It's you're turn!"
    toggle()
  }

};