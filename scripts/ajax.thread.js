function secondThread()
{
    var w;
    if(typeof(Worker) !== "undefined")
    {
        if(typeof(w) == "undefined")
        {
            w = new Worker("scripts/apiObj.class.js");
            w.postMessage(true);
            w.onmessage = function(event){
                songs = new songsObj();
                songs.createSongsArray(event.data);
                myQuestions = new questionObj();
                myQuestions.setSongsObj(songs);
                hasLoaded = true;
                console.log('has loaded')
                updateStartButton()
               // console.log(myQuestions);
            };
        }
    }
}


function updateStartButton() {
    try {
        document.getElementById('startButton').innerHTML = 'START GAME'
        document.getElementById('startButton').setAttribute('class', '')
    }
    catch(err) {
        // intentionally left empty
    }
}
