let pscore = 0
let cscore = 0


//Setting  computer random selection selection
function computerplay (){

  let random =  getRandomInt(3)

  if (random === 0){
      return "rock"
  }
  else if (random === 1){
      return "paper"
  }else{
      return  "scissors"
  }
 return
}

function getRandomInt(max) {

  return Math.floor(Math.random() * max);
}


//Setting Player Selection
let Buttons = document.querySelectorAll('img')
Buttons.forEach((button) =>{
    button.addEventListener('click', (event)=> {

        let player = event.target.id
        console.log(player)
        

        let computer = computerplay()
        Game(player, computer)
        displayingSelect(player, computer)
        return;
    })
  
})








   
  // Playing Round

  function Game(player, computer){
    const message = document.querySelector('.result')

      if (player === "rock" && computer === "scissors"){

          message.textContent = `You win ${player} beats  ${computer} `
          pscore++
       
     }
      else if (player === "paper" && computer === "rock"){

        message.textContent = `You win ${player} beats  ${computer} `
        pscore++

      }
      else if (player === "scissors" && computer === "paper" ){
        message.textContent = `You win ${player} beats  ${computer} `
        pscore++
       
        

      }
      else if (player === computer){
        message.textContent = `Its a Draw you both play ${computer} `
      }
      else {
          message.textContent = `Computer Wins ${computer} beats  ${player} ` 
        cscore++
      }
      
      score()
      
  }

  //Displaying player and computer selection

  function displayingSelect(player, computer){
    let playerSelect = document.querySelector(".player-choice-display")
    let computerSelect = document.querySelector(".computer-choice-display")

    switch (player) {
      case 'rock':
        playerSelect.textContent = '✊'
        break
      case 'paper':
        playerSelect.textContent = '✋'
        break 
      case 'scissors':
        playerSelect.textContent = '✌'
        break
    }

    switch (computer) {
      case 'rock':
        computerSelect.textContent = '✊'
        break
      case 'paper':
        computerSelect.textContent = '✋'
        break
      case 'scissors':
        computerSelect.textContent = '✌'
        break
    }


  }
  

//Setting both player and computer score 

function score() {
    let playerScorer = document.querySelector('#playerscore')
    let computerScorer = document.querySelector('#computerscore')

    playerScorer.innerHTML = `You : ${pscore}`;
    computerScorer.innerHTML = `Computer : ${cscore}`;
    choosingwinner(pscore, cscore)
}

//Choosing the winnner

function  choosingwinner(){
    const message = document.querySelector('.result')
    if (pscore >= 5 && cscore < 5) {
        message.textContent = 'Game Over. You Win!';
        pscore = 0
        cscore = 0

      } else if (pscore < 5 && cscore >= 5) {
        message.textContent = 'Game Over. You Lose!';
        pscore = 0
        cscore = 0

      } 
     
}
