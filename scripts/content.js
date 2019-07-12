splash = `
<div id="splashMainDiv"></div>
<div id="splashLogoContainer">
    <div id="splashLogo">
        <img src="images/logo.svg" alt="">
    </div>
</div>
<div id="splashContinueButtonContainer">
    <div id="splashContinueButton">
        <button type="button">CONTINUE</button>
    </div>
</div>
<div id="noRotate">
    <h2>Please don't Rotate</h2>
    <p>This game is best played in portrait mode.</p>
</div>`

home = `
<div id="homeContainer">
    <div id="homeInnerContainer">
        <div id="homeLogo">
            <img src="images/logo.svg" alt="" >
        </div>
        <div class="homeButton">
            <button type="button">START GAME</button>
        </div>
        <div class="homeButton">
            <button type="button">INSTRUCTIONS</button>
        </div>
        <div id="homeSetupHeader">
            <h2>– setup –</h2>
        </div>
        <div>
            <h3>Number of Questions</h3>
        </div>
        <div id="homeQuestionOptionButtons">
            <button class="optionButton selected single">5</button>
            <button class="optionButton">10</button>
            <button class="optionButton">15</button>
        </div>
        <div>
            <h3>Seconds to Guess</h3>
        </div>
        <div id="homeQuestionOptionButtons">
            <button class="optionButton single">5</button>
            <button class="optionButton selected">10</button>
            <button class="optionButton">15</button>
        </div>
    </div>
</div>
<div id="homeContinueButtonContainer"></div>
<div id="noRotate">
    <h2>Please don't Rotate</h2>
    <p>This game is best played in portrait mode.</p>
</div>`

instructions = `
<div id="instructionsContainer">
    <div id="instructionsInnerContainer">
        <div id="instructionsLogo">
            <img src="images/logo.svg" alt="" >
        </div>
        <div id="instructionsSetupHeader">
            <h2>INSTRUCTIONS</h2>
            <div id="instructionsRecordImage"></div>
        </div>
        <div class="instructionsListContainer">
            <ul>
                <li><strong>Step 1</strong>: Select the number of songs you would like to guess</li>
                <li><strong>Step 2</strong>: Select the number of seconds you want to be able to guess</li>
                <li><strong>Step 3</strong>: Click Start Game</li>
                <li><strong>Step 4</strong>: Guess which artist sang the lyrics displayed</li>
                <li><strong>Step 5</strong>: Continue making awsome guesses until your game is over</li>
            </ul>
        </div>
    </div>
</div>
<div id="backButton">
    <a href="#"><img src="images/BackButton.svg"></a>
</div>
<div id="noRotate">
    <h2>Please don't Rotate</h2>
    <p>This game is best played in portrait mode.</p>
</div>`

gameScreen = `
<div id="flexContainer">
    <div id="gameContainer" class=""> <!--Add blur when answer selected.-->
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
            <button type="button" class="correct">ANSWER 1</button>
            <button type="button" class="incorrect">ANSWER 2</button>
            <button type="button">ANSWER 3</button>
        </div>
    </div>
</div>

<div id="backButton">
    <a href="#"><img src="images/BackButton.svg"></a>
</div>

<div id="timeCountDown">
    <h3>TIME LEFT: <strong id="timeRemaining">15sec</strong></h3>
</div>
<!-- Hidden until answer select, to display properly change display to flex in css -->
<div id="answerOverlay">
    <button type="button" id="answerStatus">INCORRECT</button>
</div>

<div id="noRotate">
    <h2>Please don't Rotate</h2>
    <p>This game is best played in portrait mode.</p>
</div>`
