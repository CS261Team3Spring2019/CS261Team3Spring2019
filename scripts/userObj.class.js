function userObj()
{
    this.numCorrect = 0;
    this.numIncorrect = 0;
    this.fastestTime = 0;
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
    this.fastestTime = fastTime;
};
