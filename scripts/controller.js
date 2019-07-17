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
    secondThread()
}


function loadPage(page) {
    app.innerHTML = pageMap[page]
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
    loadPage('gameScreen')
    myQuestions.setNumberQuestion(numQuestions)
    myQuestions.getSongAnwsers()
    getNextQuestion()
}

function confirmExit() {
    document.getElementById('confirmExit').style.display = 'flex'
}

function sumbitAnswer(num) {
    document.getElementById('answerOverlay').style.display = 'flex'
    let answerWas = 'incorrect'
    if (document.getElementById('answer' + num).innerHTML == myQuestions.getQuestion(currentQuestion)[0].getArtist()) {
        answerWas = 'correct'
    }
    document.getElementById('answerOverlay').innerHTML = answerWas
    for (let i = 0; i < 3; i++) {
        if (document.getElementById('answer' + (i + 1)).innerHTML == myQuestions.getQuestion(currentQuestion)[0].getArtist()) {
            document.getElementById('answer' + (i + 1)).setAttribute('class', 'correct')
        } else {
            document.getElementById('answer' + (i + 1)).setAttribute('class', 'incorrect')
        }
    }
}

function endGame() {
    loadPage('home')
    numQuestions = 5
}

function cancelQuit() {
    document.getElementById('confirmExit').style.display = 'none'
}

function getNextQuestion() {
    console.log(myQuestions.getQuestion(currentQuestion))
    document.getElementById('lyrics').innerHTML = myQuestions.getQuestion(currentQuestion)[0].getLyrics()
    let salt = Math.floor(Math.random() * 3) + 1
    for (let i = 0; i < 3; i++) {
        if (i < 1) {
            document.getElementById('answer' + ((i + salt) % 3 + 1)).innerHTML = myQuestions.getQuestion(currentQuestion)[i].getArtist()
        } else {
            document.getElementById('answer' + ((i + salt) % 3 + 1)).innerHTML = myQuestions.getQuestion(currentQuestion)[i]
        }
    }
}
