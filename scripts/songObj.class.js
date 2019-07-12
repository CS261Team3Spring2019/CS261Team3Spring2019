function songObj()
{
    this.artist = "";
    this.artistId = null;
    this.song = "";
    this.songId = null;
    this.cdArt = "";
    this.album = "";
    this.albumId = null;
    this.year = "";
    this.lyrics = "";

    this.beenUse = false;
    this.anwser = false;
    this.beenAnwser = false;
}

//getts
songObj.prototype.getArtist = function(){
    return this.artist;
};

songObj.prototype.getArtistId = function(){
    return this.artistId;
};

songObj.prototype.getSong = function(){
    return this.song;
};

songObj.prototype.getSongId = function(){
    return this.songId;
};

songObj.prototype.getCdArt = function(){
    return this.cdArt;
};

songObj.prototype.getAlbum = function(){
    return this.album;
};

songObj.prototype.getAlbumId = function(){
    return this.albumId;
};

songObj.prototype.getYear = function(){
    return this.year;
};

songObj.prototype.getLyrics = function(){
    return this.lyrics;
};

songObj.prototype.hasBeenUsed = function(){
    return this.beenUse;
};

songObj.prototype.isAnwser = function(){
    return this.anwser;
};

songObj.prototype.hasBeenAnwser = function(){
    return this.beenAnwser;
};


//setters
songObj.prototype.setArtist = function(artist){
    this.artist = artist;
};

songObj.prototype.setArtistId = function(id){
    this.artistId = id;
};

songObj.prototype.setSong = function(song){
    this.song = song;
};

songObj.prototype.setSongId = function(id){
    this.songId = id;
};

songObj.prototype.setCdArt = function(cdart){
    this.cdArt = cdart;
};

songObj.prototype.setAlbum = function(album){
    this.album = album;
};

songObj.prototype.setAlbumId = function(id){
    this.albumId = id;
};

songObj.prototype.setYear = function(year){
    this.year = year;
};

songObj.prototype.setLyrics = function(lyrics){
    this.lyrics = lyrics;
};

songObj.prototype.setBeenUse = function(beenUsed){
    this.beenUse = beenUsed;
};

songObj.prototype.setAnwser = function(anwser){
    this.anwser = anwser;
};

songObj.prototype.setBeenAnwser = function(beenAnwser){
    this.beenAnwser = beenAnwser;
};
