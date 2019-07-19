var myQuestions = null; //question varaible
var hasLoaded = false; //To keep track of second thread completion
var siteUser = null //user object variable
let numQuestions = 5; // number of questions in game
var currentQuestion = 1; // ... the current question id
var currentPage; // string of current page should match the pageMap key
var time; // current timer
var tick = document.getElementById('tick') // Used to add sound effects to the game
var whoosh = document.getElementById('whoosh')
