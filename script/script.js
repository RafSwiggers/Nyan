function nyan() {
    var pos = 0;
    var id = setInterval(frame, 90);


    function frame() {
        document.getElementById("button").style.display = "none";
        document.getElementById("song").play();
        document.body.style.background = "url('/images/background-gif.gif')";
        for (i = 0; i < 5; i++) {
            var im = document.createElement("img");
            im.src = "/images/Nyan.png";
            document.body.appendChild(im);
            im.id = "kitty" + i;
            im.class = "kitty";
            var elem = document.getElementById("kitty" + i)
            if (pos == 100) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + '%';
                elem.style.left = pos + '%';
            }
        }
    }
    document.getElementById("button").style.display = "block";
    document.getElementById("song").pause();
    document.body.style.background = "none";
}