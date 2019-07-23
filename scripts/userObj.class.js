function userObj()
{
    this.numCorrect = 0;
    this.numIncorrect = 0;
    this.fastestTime = null;
}


userObj.prototype.getNumCorrect = function(){
    return this.numCorrect;
};


userObj.prototype.addNumCorrect = function(){
    this.numCorrect++;
};


userObj.prototype.getNumIncorrect = function(){
    return this.numIncorrect;
};


userObj.prototype.addNumIncorrect = function(){
    this.numIncorrect++;
};


userObj.prototype.getFastestTime = function(){
    return this.fastestTime;
};


userObj.prototype.setFastestTime = function(fastTime){

    if(this.fastestTime != null)
    {
        if(this.fastestTime > fastTime)
        {
            this.fastestTime = fastTime;
        }
    }
    else
    {
        this.fastestTime = fastTime;
    }
};


userObj.prototype.getPercentRight = function(){
    totalQuesiton = this.numCorrect + this.numIncorrect;
    return ((this.numCorrect / totalQuesiton) * 100).toFixed(1);
};


