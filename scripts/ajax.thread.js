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
                hasLoaded = true;
                songs = new songsObj();
                songs.createSongsArray(event.data);
                myQuestions = new questionObj();
                myQuestions.setSongsObj(songs);
                myQuestions.getSongAnwsers();
                console.log(myQuestions);
            };
        }
    }
}
