let app = document.getElementById('app-loader')

pageMap = {
    'splash': splash,
    'home': home,
    'instructions': instructions,
    'gameScreen': gameScreen,
    'summary': summary,
    'results': results
}

window.onload = function () {
    loadPage('splash')
    //init user
    secondThread()
}


function loadPage(page) {
    whoosh.controls = false
    whoosh.volumn = 0.3
    whoosh.load()
    whoosh.play()
    app.innerHTML = pageMap[page]
    if (page == 'home' & hasLoaded) {
        updateStartButton()
    }
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

function updateNumQuestions(num) {
    if (num == 5) {
        document.getElementById('homeOptionButtons' + num).setAttribute('class', 'optionButton selected single')
    } else {
        document.getElementById('homeOptionButtons' + num).setAttribute('class', 'optionButton selected')
    }

    if (numQuestions == 5) {
        document.getElementById('homeOptionButtons' + numQuestions).setAttribute('class', 'optionButton single')
    } else {
        document.getElementById('homeOptionButtons' + numQuestions).setAttribute('class', 'optionButton')
    }

    numQuestions = num
}

function startGame() {
    if (!hasLoaded) return;
    siteUser = new userObj();
    currentQuestion = 0;
    myQuestions.setNumberQuestion(numQuestions)
    myQuestions.getSongAnwsers()
    getNextQuestion()
}

function confirmExit() {
    document.getElementById('confirmExit').style.display = 'flex'
    if (currentPage == 'gameScreen') {
        document.getElementById('gameContainer').setAttribute('class', 'blur')
    } else {
        document.getElementById(currentPage + 'Container').setAttribute('class', 'blur')
    }
}

function sumbitAnswer(num) {
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
    if (!!num && document.getElementById('answer' + num).innerHTML.replace('&amp;', '&') == myQuestions.getQuestion(currentQuestion)[0].getArtist()) {
        answerWas = 'CORRECT'
        siteUser.addNumCorrect()
    } else {
        siteUser.addNumIncorrect()
    }
    document.getElementById('answerStatus').innerHTML = answerWas
    console.log('next question: ' + currentQuestion)
    currentQuestion++
}

function endGame() {
    loadPage('results')
    document.getElementById('numCorrect').innerHTML = siteUser.getNumCorrect()
    document.getElementById('numIncorrect').innerHTML = numQuestions
    numQuestions = 5
}

function cancelQuit() {
    document.getElementById('confirmExit').style.display = 'none'
    if (currentPage == 'gameScreen') {
        document.getElementById('gameContainer').setAttribute('class', 'none')
    } else {
        document.getElementById(currentPage + 'Container').setAttribute('class', 'none')
    }
}

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
    // var audio = document.getElementById('soundEffects')
    tick.controls = false
    tick.volumn = 0.3
    tick.load()

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
        if (forQuestionNumber != currentQuestion) return
        time = time - 1
        seconds = seconds < 10 ? "0" + seconds : seconds
        tick.play()
        timerDisplay.textContent = time + 1
        if (time <= 13 & timer.expired()) {
            sumbitAnswer(-1)
        }
    }
}
