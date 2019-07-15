function songsObj()
{
    this.songsArray = [];
}


songsObj.prototype.getRandomNum = function(limit = 1){

    return Math.floor(Math.random() * limit);
};


songsObj.prototype.getSong = function(id){
    return this.songsArray[id];
};


songsObj.prototype.getArraySize = function(){
    return this.songsArray.length;
};


songsObj.prototype.getSongRandom = function(ranLimit){
    return this.songsArray[this.getRandomNum(ranLimit)];
};


songsObj.prototype.createSongsArray = function(objArray){
    for(i = 0; i < objArray.length; i++)
    {
        objSong = objArray[i];

        //create new song 
        song = new songObj();
        song.setArtist(objSong.artist);        
        song.setArtistId(objSong.artistId);        
        song.setSong(objSong.song);        
        song.setSongId(objSong.songId);        
        song.setCdArt(objSong.cdArt);        
        song.setAlbum(objSong.album);        
        song.setAlbumId(objSong.albumId);        
        song.setYear(objSong.year);        
        song.setLyrics(objSong.lyrics);

        //add song to array
        this.songsArray[i] = song;
        
    }
};
