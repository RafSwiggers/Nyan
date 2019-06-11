function nyan() {
    var pos = 0;
    var id = setInterval(frame, 16);
    elem = document.getElementById("kitty")


    function frame() {
        if (pos == 1000) {
            clearInterval(id);
            document.getElementById("button").style.display = "block";
            document.getElementById("song").pause();
            document.body.style.background = "none";
        } else {
            pos += 0.25;
            elem.style.display = "block";
            document.getElementById("button").style.display = "none";
            document.getElementById("song").play();
            document.body.style.background = "url('/nyan/images/background-gif.gif')";
            elem.style.top = pos + '%';
            elem.style.left = pos + '%'
        }
    }
}