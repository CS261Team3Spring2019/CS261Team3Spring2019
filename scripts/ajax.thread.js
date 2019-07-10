function secondThread()
{
    var w = new Worker("scripts/apiObj.class.js");
    w.postMessage(true);
    w.onmessage = function(event){
        songs = new songsObj();
        songs.createSongsArray(event.data);
        myQuestions = new questionObj();
        myQuestions.setSongsObj(songs);
        console.log(myQuestions);
    };
}
