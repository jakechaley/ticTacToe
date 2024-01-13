let playerOneTurn = false;

console.log("Default value of bool is" ,playerOneTurn)

function toggle() {
  playerOneTurn = !playerOneTurn;
  

  console.log("It's Player one's turn!", playerOneTurn);
}

function tdClicked(event){
  const click = "This thing on?"
  console.log(click)
  if(playerOneTurn === true) {
    document.getElementById("markX").innerHTML = "X"
    document.getElementById("playerIndicator").innerHTML = "Player 1, It's you're turn!"
    toggle()
  } else {
    document.getElementById("markX").innerHTML = "O"
    document.getElementById("playerIndicator").innerHTML = "Player 2, It's you're turn!"
    toggle()
  }
  event.stopPropagation()
};