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
var time = 90;
var questionIndex = 0;
var startingScore = 0;
var highScores = [];

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
        question: "How many votes does a US President need to be elected?",
        choices: ["265", "270", "275", "280"],
        answer: "270",
    }
];