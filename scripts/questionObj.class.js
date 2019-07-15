function questionObj()
{
    this.questionArray = [];
    this.anwserArray = [];
    this.numberAnwsers = 3;
    this.numberOfQuestion = 5;
    this.songsObj = null;
}

questionObj.prototype.getSongAnwsers = function(){


    if(!this.allBeenAnwsers())
    {
        for(i = 0; i < this.numberOfQuestion; i++)
        {
            this.questionArray[i] =[];
            song = this.songsObj.getSongRandom(this.songsObj.getArraySize());

            while(!this.setQuestionAnwser(song))
            {
                song = this.songsObj.getSongRandom(this.songsObj.getArraySize());
            }

            this.questionArray[i].push(song);

            while(this.questionArray[i].length < this.numberAnwsers)
            {
                artist = this.anwserArray[this.songsObj.getRandomNum(
                                          this.anwserArray.length)];
                toAdd = false;

                for(j = 0; j < this.questionArray[i].length; j++)
                {
                    if(typeof(this.questionArray[i][j]) == "object")
                    {
                        if(artist != this.questionArray[i][j].getArtist())
                        {
                            toAdd = true;
                        }
                        else
                        {
                            toAdd = false;
                            break;
                        }
                    }
                    else
                    {
                        if(artist != this.questionArray[i][j])
                        {
                            toAdd = true;
                        }
                        else
                        {
                            toAdd = false;
                            break;
                        }
                    }
                }

                if(toAdd)
                {
                  this.questionArray[i].push(artist);
                }
            }

        }
    }
    else
    {
        this.resetBeenAnwsers();
        this.getSongAnwsers();
    }
};

questionObj.prototype.setSongsObj = function(songs){
    this.songsObj = songs;
    this.setAnwserArray();
};

questionObj.prototype.setQuestionAnwser = function(ObjSong){
    if(ObjSong.hasBeenAnwser() == false)
    {
        ObjSong.setAnwser(true);
        ObjSong.setBeenAnwser(true);
        return true;
    }
    else
    {
        return false;
    }
};

questionObj.prototype.clear = function(){
    for(i = 0; i < this.numberAnwsers; i++)
    {
        song = this.questionArray.pop();  
        song = null;
    }
};

questionObj.prototype.setNumberQuestion = function(qNum){
    this.numberOfQuestion = qNum;
};

questionObj.prototype.getNumberQuestion = function(){
    return this.numberOfQuestion;
};

questionObj.prototype.setAnwserArray = function(){
    for(i = 0; i < this.songsObj.getArraySize(); i++)
    {
        if(this.anwserArray.indexOf(this.songsObj.getSong(i).getArtist()) == -1)
        {
            this.anwserArray.push(this.songsObj.getSong(i).getArtist());
        }
    }
};


questionObj.prototype.allBeenAnwsers = function(){

    var returnVal = false;
    var countBeen = 0;
    var arrayLength = this.songsObj.getArraySize();

    for(i = 0; i < arrayLength; i++)
    {
        if(this.songsObj.getSong(i).hasBeenAnwser())
        {
            countBeen++;
        }
    }

    if(countBeen == (arrayLength - 1) || (arrayLength - countBeen) < this.numberAnwsers)
    {
        returnVal = true;
    }

    return returnVal;

};


questionObj.prototype.resetBeenAnwsers = function(){

    var arrayLength = this.songsObj.getArraySize();

    for(i = 0; i < arrayLength; i++)
    {
        this.songsObj.getSong(i).setBeenAnwser(false);
    }

};


questionObj.prototype.getQuestion = function(id){
    if(id < this.questionArray.length)
    {
        return this.questionArray[id];
    }
    else
    {
        return false;
    }
};

