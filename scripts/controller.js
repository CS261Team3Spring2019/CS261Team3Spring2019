let app = document.getElementById('app-loader')

pageMap = {
    'splash': splash,
    'home': home,
    'instructions': instructions,
    'gameScreen': gameScreen,
    'summary': summary,
    'results': results
}

window.onload = function() {
    loadPage('splash')
}


function loadPage(page) {
    app.innerHTML = pageMap[page]
}

function updateNumQuestions(num) {
    if (num == 5){
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
    loadPage('gameScreen')
}

function confirmExit() {
    
}

function sumbitAnswer(num) {

}

function endGame() {

}

function cancelQuit() {

}

function getNextQuestion() {

}
