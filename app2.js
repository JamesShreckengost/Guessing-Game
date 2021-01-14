//Add a 7th question that has multiple possible correct answers that are stored in an array.
//Give the user 6 attempts to guess the correct answer.
//The guesses will end once the user guesses a correct answer or they run out of attempts.
//Display all the possible correct answers to the user.
//Consider using a loop of some sort for this question.

var arrayofCorrectAnswers = ['Strawberry', 'Vanilla', 'Chocolate']
var numofCorrectAnswers = 0

function question7() {
  var userAnswer = prompt('What is My Favorite Ice Cream?');


  var numberofGuesses = 6
  for (let i = 0; i < numberofGuesses; i++) {
    for (var j = 0; j < arrayofCorrectAnswers.length; j++) {
      if (i === 5 && userAnswer !== arrayofCorrectAnswers[j]) {
        alert('The correct answers are Strawberry, Vanilla, and Chocolate!')
      }
      else if (userAnswer === arrayofCorrectAnswers[j]) {
        alert('Great job, You got it right!');
        numofCorrectAnswers++
        break;
      }
      else if (userAnswer !== arrayofCorrectAnswers[j]) {
        alert('Sorry wrong answer.');
        userAnswer = prompt('Please guess again.');
        


      }
    } break;
  }
}


question7()
alert(numofCorrectAnswers)