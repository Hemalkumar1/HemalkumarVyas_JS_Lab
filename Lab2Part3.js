function loadQuestions() 
{   if (quiz.isEnded()) {     
    // show the result     
    showscores();   } 
    else {     
        // writing the question     
        var element = document.getElementById("question");     
        element.innerHTML = quiz.getQuestionByIndex().text;      
        // showing options     
        var choices = quiz.getQuestionByIndex().choices;     
        for (let i = 0; i < choices.length; i++) 
        {       var ele = document.getElementById("choice" + i);       
                    ele.innerHTML = choices[i];       
                    handleOptionButton("btn" + i, choices[i]);      } 
    // showing the progress
    showProgress();
  }
}

function showProgress(){
  var el = document.getElementById("progress");
  el.innerHTML = "Question " + (quiz.questionIndex+1) + " of " + quiz.questions.length;
}
function showscores()
{   var gameOverHTML = "<h1>Result<h1>";   
gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + ". Your percentage is::"+ (quiz.score/questions.length*100) +"% </h2>";   
var e = document.getElementById("quiz");   
e.innerHTML = gameOverHTML;
}

//create quiz
var quiz = new Quiz(questions);

// display quiz
loadQuestions();
