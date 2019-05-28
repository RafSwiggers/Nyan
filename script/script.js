function nyan() {
    var pos = 0;
    var id = setInterval(frame, 50);
    var im = document.createElement("img");
    im.src = "/images/Nyan.png";
    document.body.appendChild(im);
    im.id = "kitty";
    var elem = document.getElementById("kitty")


    function frame() {
        document.getElementById("button").style.display = "none";
        document.getElementById("song").play();
        document.body.style.background = "url('/images/background-gif.gif')";


        if (pos == 100) {
            clearInterval(id);
            document.getElementById("button").style.display = "block";
            document.getElementById("song").pause();
            document.body.style.background = "none";

        } else {
            pos++;
            elem.style.top = pos + '%';
            elem.style.left = pos + '%';
        }
    }
}