//As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.

//Ask the user their name through a prompt()

//Display that name back to the user through a custom greeting welcoming them to your site.

//Display the user’s name back to them in your final message to the user.

//Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

//Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.

'use strict';
// 
function checkAnswer(question){
 question = prompt(question)
 question = question.toLowerCase() 
  console.log(question)
  if (question === 'yes' || question === 'y'){
    alert('You got it right!')
  } else if (question === 'no' || question === 'n'){
    alert('Wrong Answer.')
  }
}

var question1 = "Do I have a puppy?";
//console.log("You are correct")

var question2 = "Do I live in the Bay area?";
//console.log("You are correct")

var question3 = "Do I use a Macbook?";
//console.log("You are correct")

var question4 = "Do I like candles?";
//console.log("You are correct")

var question5 = "Do I like sugar and cream in my coffee?";
//console.log("You are correct")


var userName = prompt("What is your name?")
var response1 = 'Your name is: '
alert(response1 + userName);


checkAnswer(question2)
checkAnswer(question3)
checkAnswer(question4)
checkAnswer(question5)