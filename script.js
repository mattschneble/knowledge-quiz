//declaring global variables found in the html file
var beginQuizButton = document.getElementById("begin-quiz-button");
var countdownTimer = document.getElementById("timer");
var viewQuestion = document.getElementById("view-question");
var answerChoices = document.getElementById("answer-choices");
var quizCompletedScreen = document.getElementById("quiz-completed-screen");
var leaderboard = document.getElementById("leaderboard");
var userInitials = document.getElementById("userInitials");
var saveUserInitials = document.getElementById("save-user-initials");

//declaring global variables
var timerInterval;
var time = 90;
var questionIndex = 0;
var startingScore = 0;
var topScores = [];

//creating array of questions and answers to be used during the quiz
var questions = [
    {
        question: "What shape is the earth?",
        choices: ["Square", "Round", "Flat", "Triangle"],
        answer: "Round",
    },

    {
        question: "What is the capital of the United States?",
        choices: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],
        answer: "Washington D.C.",
    },

    {
        question: "What is the largest country in the world as determined by landmass?",
        choices: ["Russia", "China", "United States", "Canada"],
        answer: "Russia",
    },

    {
        question: "How high is the highest diving board/platform in Olympic diving competitions?",
        choices: ["10 meters", "5 meters", "3 meters", "1 meter"],
        answer: "10 meters",
    },

    {
        question: "What metal was used as the basis for the British pound?",
        choices: ["Gold", "Silver", "Copper", "Iron"],
        answer: "Silver",
    },

    {
        question: "What is the most popular sport in the world?",
        choices: ["Soccer", "American Football", "Baseball", "Basketball"],
        answer: "Soccer",
    },

    {
        question: "Who was the first explorer to sail around the world?",
        choices: ["Christopher Columbus", "Ferdinand Magellan", "Marco Polo", "Vasco da Gama"],
        answer: "Ferdinand Magellan",
    },

    {
        question: "What animal appears on the logo of both Ferrari and Porsche?",
        choices: ["Horse", "Lion", "Bull", "Tiger"],
        answer: "Horse",
    },

    {
        question: "How often is the FIFA World Cup held?",
        choices: ["Every 2 years", "Every 4 years", "Every 6 years", "Every 8 years"],
        answer: "Every 4 years",
    },

    {
        question: "How many electoral college votes does a US President need to be elected?",
        choices: ["265", "270", "275", "280"],
        answer: "270",
    }
];

function beginTimer() {
    //setting the timer to 90 seconds
    var timerInterval = setInterval(function () {
        //decrease the timer by 1 second (1000 ms) then display the new time
        time--;
        countdownTimer.textContent = "Time: " + time;

        //if the timer reaches 0, the quiz is over
        if (time <= 0) {
            clearInterval(timerInterval);
            quizCompleted();
        }
    }, 1000);
}

//create a function to start the quiz
function startQuiz() {
    //start the timer
    beginTimer();
    //begin showing questions
    showQuestion();
    //hide the begin quiz button
    beginQuizButton.style.display = "none";
}

//create a function to show the next question
function showQuestion() {
    //declare a variable to show the next question
    var nextQuestion = questions[questionIndex];
    //display the current question
    viewQuestion.textContent = nextQuestion.question;
    //clear the existing answer choices to allow for the new answer choices to be displayed
    answerChoices.textContent = "";
    //loop through the answer choices and display them
    nextQuestion.choices.forEach(function (choice, i) {
        //create a button for each answer choice
        var choiceButton = document.createElement("button");
        //display the answer choice
        choiceButton.textContent = choice;
        //add an event listener to each answer choice
        choiceButton.addEventListener("click", answerCheck);
        //append the answer choice to the answer choices div
        answerChoices.appendChild(choiceButton);
    }
    )
}

//create a function to check the answer
function answerCheck(event) {
    //declare a variable to hold the selected answer
    var selectedAnswer = event.target.textContent;
    //declare a variable to hold the correct answer
    var correctAnswer = questions[questionIndex].answer;
    //if the selected answer is correct, increase the score by 25 points
    if (selectedAnswer === correctAnswer) {
        startingScore += 25;
    }
    //if the selected answer is incorrect, decrease the timer by 15 seconds
    else {
        time -= 15;
        if (time <= 0) {
            time = 0;
        }
    }
    //increase the question index by 1 and show the next question
    questionIndex++;
    //if the question index is less than the number of questions, show the next question
    if (questionIndex < questions.length) {
        showQuestion();
    }
    //if the question index is greater than or equal to the number of questions, the quiz is over
    else {
        quizCompleted();
    }
}

//create a function to end the game
function quizCompleted() {
    //stop the timer
    clearInterval(beginTimer);
    //hide the question and answer choices
    viewQuestion.style.display = "none";
    answerChoices.style.display = "none";
    //display the quiz completed screen
    quizCompletedScreen.style.display = "block";
    //display the final score
    document.getElementById("final-score").textContent = startingScore;
}

//create a function to save the game score and initials
function saveScore() {
    //declare a variable to hold the user's initials
    var userInitials = document.getElementById('userInitials').value.trim();
    //declare a variable to hold the user's score and initials
    //ensure the user has entered their initials
    if (userInitials === "") {
        alert("Please enter your initials");
    }
    //if the user has entered their initials, save the score and initials
    else {
        var userScore = {
            initials: userInitials,
            score: startingScore
        };
        //save the score and initials to local storage
        var topScores = JSON.parse(localStorage.getItem("topScores")) || [];
        topScores.push(userScore);
        localStorage.setItem("topScores", JSON.stringify(topScores));
        //display the leaderboard
        displayLeaderboard();
    }
}

//create a function to display the leaderboard
function displayLeaderboard() {
    //hide the quiz completed screen
    quizCompletedScreen.style.display = "none";
    //display the leaderboard
    leaderboard.style.display = "block";
    //declare a variable to hold the scores and initials from local storage
    var topScores = JSON.parse(localStorage.getItem("topScores")) || [];
    //loop through the scores and initials and display them
    topScores.forEach(function (score) {
        //create a list item for each score and initials
        var scoreItem = document.createElement("li");
        //display the score and initials
        scoreItem.textContent = score.initials + " - " + score.score;
        //append the score and initials to the leaderboard
        leaderboard.appendChild(scoreItem);
    //show the start over button
    startOverButton.style.display = "block";
    }
    )
}

//create a function to start the quiz over
function startOver() {
    //reset the timer
    time = 90;
    //reset the score
    startingScore = 0;
    //reset the question index
    questionIndex = 0;
    //hide the leaderboard
    leaderboard.style.display = "none";
}

//add an event listener to the begin quiz button
beginQuizButton.addEventListener("click", startQuiz);

//add an event listener to the save initials button
var saveScoreButton = document.querySelector('#save-user-initials');
saveScoreButton.addEventListener("click", saveScore);

//add an event listener to the start over button
var startOverButton = document.querySelector('#start-over-button');
startOverButton.addEventListener("click", startOver);