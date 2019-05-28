function nyan() {
    var pos = 0;
    var id = setInterval(frame, 50);
    var id = setInterval(frame2, 50);
    var im = document.createElement("img");
    im.src = "/Nyan/images/Nyan.png";
    document.body.appendChild(im);


    function frame() {
        document.getElementById("button").style.display = "none";
        document.getElementById("song").play();
        document.body.style.background = "url('/Nyan/images/background-gif.gif')";


        if (pos == 100) {
            clearInterval(id);
            document.getElementById("button").style.display = "block";
            document.getElementById("song").pause();
            document.body.style.background = "none";

        } else {
            pos++;
            im.style.top = pos + '%';
            im.style.left = pos + '%';
        }
    }


}