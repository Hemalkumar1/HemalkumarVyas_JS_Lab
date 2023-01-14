function Question(text, choices, answer) 
{   this.answer = answer;   this.choices = choices;   this.text = text; }  
Question.prototype.isCorrectAnswer = function (choice) {   return this.answer === choice; } 
// create questions here 
var questions = [   new Question("JavaScript supports", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),   
                    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),   
                    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "Django", "NodeJS"], "Django")
];
// We will play a quiz // initial score is 0 // starting point is q1 => index 0 
// load all the questions in the quiz  
function Quiz(questions) 
{   this.score = 0;   this.questions = questions;   this.questionIndex = 0; }  
Quiz.prototype.getQuestionByIndex = function () {
  return this.questions[this.questionIndex];
}
Quiz.prototype.isEnded = function () 
{   return this.questionIndex === this.questions.length; }  
Quiz.prototype.checkOptionWithAnswer = function (answer) 
{   if (this.getQuestionByIndex().isCorrectAnswer(answer)) {     this.score++;   }   this.questionIndex++;
}

function handleOptionButton(id, choice) {
  var button = document.getElementById(id);
  button.onclick = function () {
    // check the answer
    quiz.checkOptionWithAnswer(choice);
    // load the next question
    loadQuestions();
  }
}
  