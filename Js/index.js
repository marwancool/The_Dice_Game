
var number =  Math.floor(Math.random() * 6) + 1;


var number2 =  Math.floor(Math.random() * 6) + 1;


if (number ===1){
document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
}else if (number===2){
document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
}else if (number===3){
document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
}else if (number===4){
document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
}else if (number===5){
document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
}else{
document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
}

if (number2 ===1){
document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
}else if (number2===2){
document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
}else if (number2===3){
document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
}else if (number2===4){
document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
}else if (number2===5){
document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
}else{
document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
}


if (number>number2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}else if (number<number2){
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}else{
  document.querySelector("h1").innerHTML="Draw!";
}
