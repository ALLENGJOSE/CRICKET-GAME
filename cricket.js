let scoreStr = localStorage.getItem('Score'); // to get updated from the storage
let score;
resetScore(scoreStr);
function resetScore(scoreStr){
   score = scoreStr ? JSON.parse(scoreStr) : {
  win:0,
  lost:0,
  tie:0,
}; 

// the above written code is a much better way of writing than the one below (pehle check hoga first condition , if it isnt true then it would go for the next one)
//   if(scoreStr !== undefined){ // khali nahi hai toh
//     score= JSON.parse(scoreStr);
//   }else{
//    score = {
//     win:0,
//     lost:0,
//     tie:0,
 
//   };
// }

score.displayScore = function(){
    return `Score:Won:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
  };

showResult();
}

function generatecomputerChoice(){
  let randomNumber = Math.random() * 3; 
  if( randomNumber <=1){
  return 'Bat';
  }else if( randomNumber <=2){
  return 'Ball';
  }else{
  return 'Stump';
  }
}

function getResult(userMove,computerMove){
  if(userMove === 'Bat'){
    if(computerMove ==='Ball'){
    score.win++;
    return 'User won.';
  } else if(computerMove === 'Bat') {
    score.tie++;
    return `It's a tie.`;
  } else if(computerMove ==='Stump') {
    score.lost++;
    return 'Computer has won.';
  }
  } else if(userMove ==='Ball'){
    if(computerMove === 'Ball'){
    score.tie++;
    return `It's a tie.`;
  } else if(computerMove === 'Bat') {
    score.lost++;
    return `Computer has won.`;
  } else if(computerMove === 'Stump') {
    score.win++;
    return 'User won.';
  }
  }else{
    if(computerMove === 'Ball'){
    score.lost++;
    return 'Computer has won.';
  } else if(computerMove === 'Bat') {
    score.win++;
    return 'User  won.';
  } else if(computerMove === 'Stump') {
    score.tie++;
    return `It's a tie.`;
  }
  }
}

function showResult(userMove , computerMove,result){
  localStorage.setItem('Score',JSON.stringify(score));

  document.querySelector('#user-move').innerText = 
  userMove !== undefined ? `You have chosen ${userMove}` : '';
  document.querySelector('#computer-move').innerText =
  computerMove !==undefined ? `Computer's choice is  ${computerMove}` : '';
  document.querySelector('#result').innerText = 
  result !== undefined ? result : '';
  document.querySelector('#score').innerText = score.displayScore();

  // alert(`You have chosen ${userMove}. Computer choice is ${computerMove} 
  
  // ${result}
  
  //  ${score.displayScore()};
  // `);
}