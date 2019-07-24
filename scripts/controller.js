let app = document.getElementById('app-loader')

// pageMap is a dictionary that maps the string names of each page to the actuall class for use with dynamic page loading
pageMap = {
    'splash': splash,
    'home': home,
    'instructions': instructions,
    'gameScreen': gameScreen,
    'summary': summary,
    'results': results
}

// This is where the application begins. This loads the application, starts collecting data from the api, and starts the progress bar.
window.onload = function () {
    loadPage('splash')
    //init user
    secondThread()
    loadingProgressBar()

    window.onorientationchange = reorient;
}

function reorient() {
    let noRotate = document.getElementById("noRotate")
    let hidden = noRotate.style.display
    if (hidden == 'block') {
        noRotate.style.display = 'none'
    } else {
        noRotate.style.display = 'block'
    }
}

// loadPage() is our page loading function. All navigation goes through this function
function loadPage(page) {
    // don't play the 'whoosh' sound when the app first loads.
    if(page != 'splash')
    {
        whoosh.controls = false
        whoosh.volumn = 0.3
        whoosh.play()
    }

    // Dynamically push our page content located in content.js to the DOM
    app.innerHTML = pageMap[page]

    // This keeps the "start game" button from being pressed prematurly
    if (page == 'home' & hasLoaded) {
        updateStartButton()
    }

    // logic to display the correct answer on the summary screen
    if (page == 'summary') {
        let summaryQuestionReference = currentQuestion -1
        document.getElementById('songTitle').innerHTML = myQuestions.getQuestion(summaryQuestionReference)[0].getSong()
        document.getElementById('songYear').innerHTML = myQuestions.getQuestion(summaryQuestionReference)[0].getYear()
        document.getElementById('songArtist').innerHTML = myQuestions.getQuestion(summaryQuestionReference)[0].getArtist()
        if (currentQuestion >= numQuestions) {
            document.getElementById('nextQuestion').innerHTML = 'View Results'
        }
    }

    currentPage = page
}

// This function is used to update the number of questions when a user click on one of the option buttons
function updateNumQuestions(num) {
    // Update the classes when an option button is pressed
    document.getElementById('homeOptionButtons' + num).setAttribute('class', 'optionButton selected')
    document.getElementById('homeOptionButtons' + numQuestions).setAttribute('class', 'optionButton')

    numQuestions = num
}

function startGame() {
    // Prevent the user from advancing before the game data has loaded
    if (!hasLoaded) return;

    // Set up and start the game
    siteUser = new userObj();
    currentQuestion = 0;
    myQuestions.setNumberQuestion(numQuestions)
    myQuestions.getSongAnwsers()
    getNextQuestion()
}

// Used to verify the user wants to exit the game
function confirmExit() {
    document.getElementById('confirmExit').style.display = 'flex'
    if (currentPage == 'gameScreen') {
        document.getElementById('gameContainer').setAttribute('class', 'blur')
    } else {
        document.getElementById(currentPage + 'Container').setAttribute('class', 'blur')
    }
}

// Used to verify if the answer is correct or not
function sumbitAnswer(num) {
    answerStatus = document.getElementById('answerStatus').innerHTML.toLowerCase()
    document.getElementById('answerOverlay').style.display = 'flex'
    document.getElementById('gameContainer').setAttribute('class', 'blur')
    for (let i = 0; i < 3; i++) {
        if (document.getElementById('answer' + (i + 1)).innerHTML.replace('&amp;', '&') == myQuestions.getQuestion(currentQuestion)[0].getArtist()) {
            document.getElementById('answer' + (i + 1)).setAttribute('class', 'correct')
        } else {
            document.getElementById('answer' + (i + 1)).setAttribute('class', 'incorrect')
        }
    }
    let answerWas = 'INCORRECT'
    if(num >= 1 && num <= 3)
    {
        if (!!num && document.getElementById('answer' + num).innerHTML.replace('&amp;', '&') == myQuestions.getQuestion(currentQuestion)[0].getArtist()) {
            answerWas = 'CORRECT'
            siteUser.addNumCorrect()
        } else {
            siteUser.addNumIncorrect()
        }
    }
    document.getElementById('answerStatus').innerHTML = answerWas
    currentQuestion++
}

// Used to end the game if the user selects that option.
function endGame() {
    loadPage('results')
    document.getElementById('numCorrect').innerHTML = siteUser.getNumCorrect()
    document.getElementById('numIncorrect').innerHTML = numQuestions
    numQuestions = 5
    currentQuestion = -1
    siteUser.getPercentRight();
    siteUser.getFastestTime();

}

// Used to return to the game if the user doesn't want to quit
function cancelQuit() {
    document.getElementById('confirmExit').style.display = 'none'
    if (currentPage == 'gameScreen') {
        document.getElementById('gameContainer').setAttribute('class', 'none')
    } else {
        document.getElementById(currentPage + 'Container').setAttribute('class', 'none')
    }
}

// Used to get the next question when the user is ready
function getNextQuestion() {
    if (currentQuestion >= numQuestions) {
        endGame()
        return
    }
    loadPage('gameScreen')

    document.getElementById('lyrics').innerHTML = myQuestions.getQuestion(currentQuestion)[0].getLyrics()
    let salt = Math.floor(Math.random() * 3) + 1
    for (let i = 0; i < 3; i++) {
        if (i < 1) {
            document.getElementById('answer' + ((i + salt) % 3 + 1)).innerHTML = myQuestions.getQuestion(currentQuestion)[i].getArtist()
        } else {
            document.getElementById('answer' + ((i + salt) % 3 + 1)).innerHTML = myQuestions.getQuestion(currentQuestion)[i]
        }
    }

    // Audio Controls
    tick.controls = false
    tick.volumn = 0.3

    //timer
    timer = new CountDownTimer(15)
    var timerDisplay = document.getElementById('timeRemaining')
    var timeObj = CountDownTimer.parse(15)
    var time = 15
    var forQuestionNumber = currentQuestion

    format(timeObj.seconds)
    timer.start()
    timer.onTick(format)

    function format(seconds) {
       if (forQuestionNumber != currentQuestion)
        {
            if(answerStatus == "correct" && currentPage == 'gameScreen') {
                siteUser.setFastestTime(15 - time);
            }
            return;
        }
        time = time - 1
        seconds = seconds < 10 ? "0" + seconds : seconds
        tick.play()
        timerDisplay.textContent = time + 1
        if (time <= 13 & timer.expired()) {
            sumbitAnswer(-1)
        }
    }
}

// Used to display and advance the progress bar as the app loads
function loadingProgressBar() {
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, 1);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            // Hide the progress bar when the app is loaded.
            setTimeout(function(){document.getElementById("progress").style.display = "none";}, 3000)
        } else {
            width = percentLoaded;
            elem.style.width = width + '%';
        }
    }
}
