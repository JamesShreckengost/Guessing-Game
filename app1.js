var correctAnswer = 7;
var numofCorrectAnswers = 0;

function question6() {
  var userAnswer = prompt('Please pick a number: 1 - 40.');
  while (userAnswer < 1 || userAnswer > 40) {
    userAnswer = prompt('Incorrect. Please select a number: 1 - 40.')
  }


  var numberofGuesses = 4
  for (let i = 0; i < numberofGuesses; i++) {
    userAnswer = parseInt(userAnswer);
    console.log(i, userAnswer);
    if (i === 3 && userAnswer !== correctAnswer) {
      alert('The correct answer is 7!')
    }


    else if (userAnswer === correctAnswer) {
      numofCorrectAnswers++
      alert('Great job, You got it right!');
      break;
    }
    else if (userAnswer < correctAnswer) {
      alert('Sorry to low.');
      userAnswer = prompt('Please select a number: 1 - 40.')

    } else if (userAnswer > correctAnswer) {
      alert('Sorry to high.');
      userAnswer = prompt('Please select a number: 1 - 40.')
    } 
  }
}
question6()

