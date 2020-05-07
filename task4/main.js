var blink_speed=3000;
var values = document.getElementById("values");
var optionDiv = document.getElementById("option-div");
var optionss = document.querySelectorAll(".options");
var score = document.getElementById("score");
var start = document.getElementById("start");
var button = document.getElementById("button");
var finish = document.getElementById("finish");
var quizmain = document.getElementById("main");
var number = document.getElementById("number");
var introDiv = document.getElementById("intro-div");

var postQuiz = document.getElementById("post-quiz");
var finalText = document.getElementById("final-text");
var intro = document.getElementById("intro");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var questionElem = document.getElementById("question");

var finalScore = document.getElementById("final-score");
var restart = document.getElementById("restart");

var option4 = document.getElementById("option4");

var userScore = 0;
var counter = 2;
var questionCounter = 1;



var questions = [
    {
        question: "which player scored the fastest hat trick in the premier league",
        options:
        {
            option1: "sadio mane",
            option2: "gareth barry",
            option3: "alan peters",
            option4: "gearge owem",
            correctAns: "sadio mane"
        }
    },
    {
        question: "which player with 653 games has made the most premier league appearances",
        options:
        {
            option1: "andriana wilson",
            option2: "micheal owen",
            option3: "gareth Barry",
            option4: "elvis jones",
            correctAns: "gareth Barry"
        }
    },
    {
        question: "two players share the recored for the most premier league red cards(8)\nwho are they",
        options:
        {
            option1: "patrick vieira,richarddunne",
            option2: "gareth barry",
            option3: "sadio man",
            option4: "michea backe",
            correctAns: "patrick vieira,richarddunne"
        }
    },
    {
        question: "when was the inaugural premier league season?",
        options:
        {
            option1: "1992-93",
            option2: "1998",
            option3: "1990",
            option4: "2005",
            correctAns: "1992-93"
        }
    },
    {
        question: "how many clubs competed in the inaugural premier league season?",
        options:
        {
            option1: "3",
            option2: "56",
            option3: "20",
            option4: "45",
            correctAns: "20"
        }
    }
];



function backhover1(){
    option1.style.backgroundColor = "cyan";

};
function backhover2(){
    
    option2.style.backgroundColor = "cyan";
  
};
function backhover3(){
   
    option3.style.backgroundColor = "cyan";
};
function backhover4(){

    option4.style.backgroundColor = "cyan";
};



function leave1(){
    option1.style.backgroundColor = "rgba(85,159,247,.07)";

};
function leave2(){
    
    option2.style.backgroundColor = "rgba(85,159,247,.07)";
  
};
function leave3(){
   
    option3.style.backgroundColor = "rgba(85,159,247,.07)";
};
function leave4(){

    option4.style.backgroundColor = "rgba(85,159,247,.07)";
};

//to reverse changes for next round
function reverseChanges() {
    option1.disabled = false;
    option2.disabled = false;
    option3.disabled = false;
    option4.disabled = false;

    option1.style.backgroundColor = "rgba(85,159,247,.07)";
    option2.style.backgroundColor = "rgba(85,159,247,.07)";
    option3.style.backgroundColor = "rgba(85,159,247,.07)";
    option4.style.backgroundColor = "rgba(85,159,247,.07)";
    

    option1.style.color = "black";
    option2.style.color = "black";
    option3.style.color = "black";
    option4.style.color = "black";

    button.style.visibility = "hidden";

}

start.addEventListener("click", populateDocument);

function populateDocument() {
    values.style.visibility = "visible";
    question.style.visibility = "visible";
    optionDiv.style.visibility = "visible";
    start.style.visibility = "hidden";
    intro.style.visibility = "hidden";
    introDiv.style.display = "none";

    questionElem.textContent = questions[0].question;
    option1.textContent = questions[0].options.option1;
    option2.textContent = questions[0].options.option2;
    option3.textContent = questions[0].options.option3;
    option4.textContent = questions[0].options.option4;

    optionDiv.addEventListener("click", optionClick);

}
setInterval(blinktext,600);
var txt = "";
var count = 0;
 function blinktext(){
     var cntrl = document.getElementById('final');
     if(count==0){
         txt = cntrl.innerHTML;
     }
     if(count==2){
         cntrl.innerHTML="";
     }
     else{cntrl.innerHTML= txt}
     count++
 }




function optionClick() {
    var target = event.target;
    if(questionCounter < 5) {
        button.style.visibility = "visible";
    }
    if(questionCounter === 5) {
        finish.style.visibility = "visible";
    }
    

    if(target.classList == "options"){
        if(target.textContent == questions[questionCounter-1].options.correctAns) {
            console.log("correct");
            target.style.backgroundColor = "#42C16D";
            target.style.color = "white";
            userScore++;
            score.textContent = "Score: " + userScore + "/5";
        }
        else {
            console.log("Wrong!!");
            target.style.backgroundColor = "#F75454";
            target.style.color = "white";
            for(var i=0; i<4; i++) {
                if(optionDiv.children[i].textContent == questions[questionCounter-1].options.correctAns) {
                    if(optionDiv.children[i] != target) {
                        optionDiv.children[i].style.backgroundColor = "#42C16D";
                        optionDiv.children[i].style.color = "white";
                    }
                }
            }
        }
    }
   option1.disabled = true;
   option2.disabled = true;
   option3.disabled = true;
   option4.disabled = true;
}

button.addEventListener("click", next);

function next() {
    if(counter <= 5) {
        number.textContent = counter + "/5";
        reverseChanges();
    }
    counter++;

    questionElem.textContent = questions[questionCounter].question;
    option1.textContent = questions[questionCounter].options.option1;
    option2.textContent = questions[questionCounter].options.option2;
    option3.textContent = questions[questionCounter].options.option3;
    option4.textContent = questions[questionCounter].options.option4;
    questionCounter++;

    optionDiv.addEventListener("click", optionClick);
}

if(questionCounter === 5) {
    option1.addEventListener("click", displayfinish);
    option2.addEventListener("click", displayfinish);
    option3.addEventListener("click", displayfinish);
    option4.addEventListener("click", displayfinish);
}

function displayfinish() {
    button.style.visibility = "hidden";
    finish.style.visibility = "visible";
}


finish.addEventListener("click", displayResult);

function displayResult() {
    values.style.visibility = "hidden";
    question.style.visibility = "hidden";
    optionDiv.style.visibility = "hidden";
    finish.style.visibility = "hidden";

    postQuiz.style.visibility = "visible";

    finalText.style.visibility = "visible";
    finalScore.style.visibility = "visible";
    restart.style.visibility = "visible";

    finalScore.textContent = userScore + "/5";
}

restart.addEventListener("click", function() {
    window.location.reload(true);
});