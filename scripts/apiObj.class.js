function apiObjCall()
{
    this.songArray = [];
    this.totalNumSongs = 200;
    this.totalPageNum = 2;
    this.responsObj = null;
    this.apikey = "c51c885aa28518b28abb7fd7b889fd13";
    //this.apikey = "38e6b7d1ede31d19707b30be4ea6e568";
    this.apiUrl = "https://api.musixmatch.com/ws/1.1/";
    this.trackEndpoint = "chart.tracks.get";
    this.albumEndpoint = "album.get";
    this.lyricEndpoint = "track.lyrics.get";

    this.songObj = function() {
        this.artist = "";
    this.artistId = null;
    this.song = "";
    this.songId = null;
    this.cdArt = "";
    this.album = "";
    this.albumId = null;
    this.year = "";
    this.lyrics = "";
    };
}


apiObjCall.prototype.getSongsLoop = function(){
    //https://api.musixmatch.com/ws/1.1/chart.tracks.get?
    //apikey=c51c885aa28518b28abb7fd7b889fd13&country=us&
    //page=1&page_size=100&f_has_lyrics=1

    currentObj = this;
    xhttp = new XMLHttpRequest();
    jsonURL = this.apiUrl + this.trackEndpoint + "?apikey=" + this.apikey +
              "&format=jsonp&callback=callback&country=us&page=1&page_size=100&f_has_lyrics=1";
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200)
        {
            currentObj.setResponsObj(this.responseText);
            currentObj.apiReturn();
        }
    };

    xhttp.open("GET",jsonURL,false);
    xhttp.send();

};


apiObjCall.prototype.setResponsObj = function(respons){
    respons = respons.replace("callback(","");
    respons = respons.replace(");","");
    this.responsObj = JSON.parse(respons).message.body.track_list;
};

apiObjCall.prototype.setSongsArray = function(song){
    var newSong = new this.songObj();
    newSong.album = song.track.album_name;
    newSong.albumId = song.track.album_id;
    newSong.song = song.track.track_name;
    newSong.songId  = song.track.track_id;
    newSong.artist=song.track.artist_name;
    newSong.artistId = song.track.artist_id;
    this.songArray.push(newSong);
    this.setAlbYearArt();
    this.setSongLyrics();
};

apiObjCall.prototype.setAlbYearArt = function(){
    currentObj = this;
    currentSongObj = currentObj.songArray[currentObj.songArray.length - 1];
    xhttp = new XMLHttpRequest();
    jsonURL = currentObj.apiUrl + currentObj.albumEndpoint + "?apikey=" +
              currentObj.apikey +
              "&format=jsonp&callback=callback&album_id=" +
              currentSongObj.albumId;
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200)
        {
            var respons = this.responseText;
            respons = respons.replace("callback(","");
            respons = respons.replace(");","");
            var albumRespons = JSON.parse(respons);
            currentSongObj.year = albumRespons.message.body.album.album_release_date;
            currentSongObj.cdArt = albumRespons.message.body.album.album_coverart_100x100;
        }
    };

    xhttp.open("GET",jsonURL,false);
    xhttp.send();
};

apiObjCall.prototype.setSongLyrics = function(){
    currentObj = this;
    currentSongObj = currentObj.songArray[currentObj.songArray.length - 1];
    xhttp2 = new XMLHttpRequest();
    jsonURL = currentObj.apiUrl + currentObj.lyricEndpoint + "?apikey=" +
              currentObj.apikey +
              "&format=jsonp&callback=callback&track_id=" +
              currentSongObj.songId;
    xhttp2.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200)
        {
                        var respons = this.responseText;
            respons = respons.replace("callback(","");
            respons = respons.replace(");","");
            var lyricRespons = JSON.parse(respons);
            currentSongObj.lyrics = currentObj.cleanSongTxt(lyricRespons.message.body.lyrics.lyrics_body);
        }
    };

    xhttp2.open("GET",jsonURL,false);
    xhttp2.send();
};

apiObjCall.prototype.apiReturn = function(){
    //filter by track.explicit

    for(i = 0; i < this.responsObj.length; i++)
    {
        if(this.responsObj[i].track.explicit == 0)
        this.setSongsArray(this.responsObj[i]);
    }
};

apiObjCall.prototype.cleanSongTxt = function(songText){
    lookText = "******* This Lyrics is NOT for Commercial use *******";
    lookTxtLoc = songText.indexOf(lookText);

    if(lookTxtLoc != -1)
    {
       songText = songText.substring(0,lookTxtLoc);
    }

    return songText;
};


onmessage = function(event){
    var songsApiCall = new apiObjCall();
    songsApiCall.getSongsLoop();
    this.postMessage(songsApiCall.songArray);
};
