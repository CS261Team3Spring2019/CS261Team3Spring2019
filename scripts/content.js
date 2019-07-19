const splash = `
<div id="splashMainDiv"></div>
<div id="splashLogoContainer">
    <div id="splashLogo">
        <img src="images/Logo.svg" alt="" >
    </div>
</div>
<div id="splashContinueButtonContainer">
    <div id="splashContinueButton">
        <button type="button" onclick="loadPage('home')">CONTINUE</button>
    </div>
</div>
<div id="noRotate">
    <h2>Please don't Rotate</h2>
    <p>This game is best played in portrait mode.</p>
</div>`

const home = `
<div id="homeContainer">
    <div id="homeInnerContainer">
        <div id="homeLogo">
            <img src="images/Logo.svg" alt="" >
        </div>
        <div class="homeButton">
            <button type="button" onclick="startGame()" id="startButton" class="grey loading">LOADING</button>
        </div>
        <div class="homeButton">
            <button type="button" onclick="loadPage('instructions')">INSTRUCTIONS</button>
        </div>
        <div id="homeSetupHeader">
            <h2>– setup –</h2>
        </div>
        <div id="homeSetupOptionHeader">
            <h3>Number of Questions</h3>
        </div>
        <div id="homeQuestionOptionButtons">
            <button id="homeOptionButtons5" class="optionButton selected single" onclick="updateNumQuestions(5)">5</button>
            <button id="homeOptionButtons10" class="optionButton" onclick="updateNumQuestions(10)">10</button>
            <button id="homeOptionButtons15" class="optionButton" onclick="updateNumQuestions(15)">15</button>
        </div>
    </div>
</div>

<div id="noRotate">
    <h2>Please don't Rotate</h2>
    <p>This game is best played in portrait mode.</p>
</div>`

const instructions = `
<div id="instructionsContainer">
    <div id="instructionsInnerContainer">
        <div id="instructionsLogo">
            <img src="images/Logo.svg" alt="" >
        </div>
        <div id="instructionsSetupHeader">
            <h2>INSTRUCTIONS</h2>
            <div id="instructionsRecordImage"></div>
        </div>
        <div id="instructionsListContainer">
            <ul>
                <li><strong>Step 1</strong>: Select the number of songs you would like to guess.</li>
                <li><strong>Step 2</strong>: Click Start Game.</li>
                <li><strong>Step 3</strong>: Guess which artist sang the lyrics displayed.</li>
                <li><strong>Step 4</strong>: Continue making awsome guesses until your game is over.</li>
                <li><strong>WARNING: Don't reload or use the browsers back button our your progress will be lost.</strong></li>
            </ul>
        </div>
    </div>
</div>


<div id="backButton">
    <img src="images/BackButton.svg" onclick="loadPage('home')">
</div>

<div id="noRotate">
    <h2>Please don't Rotate</h2>
    <p>This game is best played in portrait mode.</p>
</div>`

const gameScreen = `
<div id="gameScreenFlexContainer">
    <div id="gameContainer" class=""> <!--Add blur when answer button or back button is selected.-->
        <div id="lyricsContainer">
            <pre id="lyrics">
Just a young gun with a quick fuse
I was uptight, wanna let loose
I was dreaming of bigger things
And wanna leave my own life behind

Not a yes sir, not a follower
Fit the box, fit the mold
Have a seat in the foyer, take a number
I was lightning before the thunder

Thunder, thunder
Thunder, thun’, thunder
Thun-thun-thunder, thunder, thunder
Thunder, thun’, thunder
Thun-thun-thunder, thunder
Thunder, feel the thunder
            </pre>
        </div>
        <h3>Select Your Answer:</h3>
        <div id="answerContainer">
            <button id="answer1" type="button" onclick="sumbitAnswer(1)">ANSWER 1</button>
            <button id="answer2" type="button" onclick="sumbitAnswer(2)">ANSWER 2</button>
            <button id="answer3" type="button" onclick="sumbitAnswer(3)">ANSWER 3</button>
        </div>
    </div>
</div>

<div id="backButton">
    <img src="images/BackButton.svg" onclick="confirmExit()">
</div>

<div id="timerTitle">
    <h3>TIME LEFT:</h3>
</div>

<div id="timeCountDown">
    <h3><strong id="timeRemaining">15</strong><strong>sec</strong></h3>
</div>


<!-- Hidden until answer is selected, to display properly change display to flex in css -->
<div id="answerOverlay">
    <!-- The text displayed in this button needs to be dynamically updated to either correct or incorrect -->
    <button type="button" id="answerStatus" onclick="loadPage('summary')">INCORRECT</button>
</div>

<div id="confirmExit">
    <h4>ARE YOU SURE?</h4>
    <p>This will</p>
    <p>end your game.</p>
    <div id="confirmButtons">
        <button id="confirmYes" type="button" onclick="endGame()">QUIT</button>
        <button id="confirmNo" type="button" onclick="cancelQuit()">CONTINUE</button>
    </div>
</div>

<div id="noRotate">
    <h2>Please don't Rotate</h2>
    <p>This game is best played in portrait mode.</p>
</div>`

const summary = `
<div id="summaryFlexContainer">
    <div id="summaryContainer" class=""> <!--Add blur when answer button or back button is selected.-->
        <h2 id="songTitle">SONG TITLE</h2>
        <h3>YEAR RELEASED</h3>
        <h4 id="songYear">2017</h4>
        <h3>ARTIST</h3>
        <h4 id="songArtist">Song Artist</h4>
        <button id="nextQuestion" type="button" onclick="getNextQuestion()">NEXT QUESTION</button>
    </div>
</div>

<div id="backButton">
    <img src="images/BackButton.svg" onclick="confirmExit()">
</div>

<div id="confirmExit">
    <h4>ARE YOU SURE?</h4>
    <p>This will</p>
    <p>end your game.</p>
    <div id="confirmButtons">
        <button id="confirmYes" type="button" onclick="endGame()">QUIT</button>
        <button id="confirmNo" type="button" onclick="cancelQuit()">CONTINUE</button>
    </div>
</div>

<div id="noRotate">
    <h2>Please don't Rotate</h2>
    <p>This game is best played in portrait mode.</p>
</div>`

const results = `
<div id="resultsFlexContainer">
    <div id="resultsContainer" class=""> <!--Add blur when answer button or back button is selected.-->
        <h2>HERE'S YOUR RESULTS</h2>
        <h3>You got <span id="numCorrect">11</span> out of <span id="numIncorrect">15</span> correct  </h3>
        <button id="nextQuestion" type="button" onclick="loadPage('home')">BACK TO HOME</button>
    </div>
</div>

<div id="backButton">
    <img src="images/BackButton.svg" onclick="loadPage('home')">
</div>

<div id="confirmExit">
    <h4>ARE YOU SURE?</h4>
    <p>This will</p>
    <p>end your game.</p>
    <div id="confirmButtons">
        <button id="confirmYes" type="button" onclick="endGame()">QUIT</button>
        <button id="confirmNo" type="button" onclick="cancelQuit()">CONTINUE</button>
    </div>
</div>

<div id="noRotate">
    <h2>Please don't Rotate</h2>
    <p>This game is best played in portrait mode.</p>
</div>`
