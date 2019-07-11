window.onload = function() {
    function reorient() {
        let noRotate = document.getElementById("noRotate")
        let hidden = noRotate.style.display
        if (hidden == 'block') {
            noRotate.style.display = 'none'
        } else {
            noRotate.style.display = 'block'
        } 
    }
    window.onorientationchange = reorient;
}