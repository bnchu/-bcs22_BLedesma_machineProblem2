let B= Math.random() * 100;

let N = Math.round(B);






function guessNum(){

for(x = 1; x == x; x++){

userInput = prompt(`Guess a number between 1 and 100:`)

if (userInput < N){ alert("Too low! Guess again.")

}

else if(userInput > N){

alert("Too high! Guess again.")

}

else{

alert(`Nicely Done! you guessed the number in ${x} tries! Good effort!`)

break;
}

}

}

guessNum();