// create secret number
 var secretNumber = 4;

 var guess = Number(prompt("Guess a number"));

if (guess === secretNumber) {
	alert("YOU GOT IT RIGHT!")
}
else if (guess > secretNumber){
	alert( "Too high")
}
else {
	alert("Too low")

}