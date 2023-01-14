Quiz.prototype.getQuestionByIndex = function() {
    return this.questions[this.questionIndex];
  }
  
  function Question(text, choices, answer) 
  {   this.answer = answer;   this.choices = choices;   this.text = text; }  
  Question.prototype.isCorrectAnswer = function (choice) {   return this.answer === choice; } 
  // create questions here 
  var questions = [   new Question("JavaScript supports", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),   
                      new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),   
                      new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "Django", "NodeJS"], "Django")
  ];
  