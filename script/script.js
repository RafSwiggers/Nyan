function nyan() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 50);



    function frame() {
        document.getElementById("button").style.display = "none";
        elem.style.display = "block";
        document.getElementById("song").play();
        document.body.style.background = "url('/Nyan/images/background-gif.gif')";
        elem.style.left = '5px';

        if (pos == 2000) {
            clearInterval(id);
            document.getElementById("button").style.display = "block";
            elem.style.display = "none";
            document.getElementById("song").pause();
            document.body.style.background = "none";

        } else {
            pos++;
            elem.style.top = pos + '%';
            elem.style.left = pos + '%';




        }
    }
}