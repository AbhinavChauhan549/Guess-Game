let input = document.getElementById('input')

let btn = document.getElementById('btn')

let wrong = document.querySelector('.wrong')

let guesses = document.getElementById('guesses')

let answer = Math.floor(Math.random()*100) +1;

let noofGuesses = 0; 

btn.addEventListener("click",()=>{

  guessNumber()
})

function guessNumber (){
  if(input.value <1 || input.value > 100|| isNaN(input.value)){
    wrong.innerHTML = "Enter between 1 to 100 ";
  }
  else{
    noofGuesses++;
    guesses.innerHTML = "No of Guess : "+noofGuesses;

    if(input.value > answer){
      wrong.innerHTML = "You Guessed too High";
      input.value=""
    }
    else if(input.value < answer){
       wrong.innerHTML = "You Guessed too Low";
      input.value=""
    }
    else{
      wrong.innerHTML = "Congrats ! You Guessed it right";
      
      setTimeout(() => {
        resetGame();
      }, 5000);
    }
  }
}

function resetGame (){
noofGuesses=0;
let answer = Math.floor(Math.random()*100) +1;
input.value="";
guesses.innerHTML="No of Guess : 0";
}