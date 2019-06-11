function nyan() {
    var pos = 0;
    var id = setInterval(frame, 90);
    elem = document.getElementById("kitty")


    function frame() {
        if (pos == 100) {
            clearInterval(id);
            document.getElementById("button").style.display = "block";
            document.getElementById("song").pause();
            document.body.style.background = "none";
        } else {
            pos++;
            elem.style.display = "block";
            document.getElementById("button").style.display = "none";
            document.getElementById("song").play();
            document.body.style.background = "url('/images/background-gif.gif')";
            elem.style.top = pos + '%';
            elem.style.left = pos + '%';
        }
    }
}