function nyan() {
    document.getElementById("button").style.display = "none";
    document.getElementById("song").play();
    document.body.style.background = "url('/Nyan/images/background-gif.gif')";
    let pos = 0;
    let id = setInterval(frame, 50);
    let im = document.createElement("img");
    im.src = "/Nyan/images/Nyan.png";
    document.body.appendChild(im);
    im.id = "kitty";
    let elem = document.getElementById("kitty")

    function frame() {



        if (pos == 100) {
            clearInterval(id);


        } else {
            pos++;
            elem.style.top = pos + '%';
            elem.style.left = pos + '%';
        }
    }
    document.getElementById("button").style.display = "block";
    document.getElementById("song").pause();
    document.body.style.background = "none";
}