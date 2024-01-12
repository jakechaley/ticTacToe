function tdClicked(event){
  const click = "This thing on?"
  console.log(click)
  document.getElementById("markX").innerHTML = "X"
  event.stopPropagation()
};
