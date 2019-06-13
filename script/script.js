function nyan() {
    var pos = 0;
    /* Set's the speed for the animation */
    var id = setInterval(frame, 16);
    elem = document.getElementById("kitty")


    function frame() {
        /* Removes the button, starts the song and changes the background. */
        document.getElementById("button").style.display = "none";
        document.getElementById("song").play();
        document.body.style.background = "url('/nyan/images/background-gif.gif')";
        /* The 'if' here determines the end of the animation: i.e: when we've reached this point, we clear the interval. */
        if (pos == 1000) {
            clearInterval(id);
            /* This sets the button's visibility back to 'visible', turns of the song and removes the background.*/
            document.getElementById("button").style.display = "block";
            document.getElementById("song").pause();
            document.body.style.background = "none";
        } else {
            /* Every time the loop runs, we change the value of POS. Once it reaches 1000, the 'if' part will run. */
            pos += 0.25;
            elem.style.display = "block";
            /* Every time the loop runs, it sets the left and top offest (the position of the cat on the page) to the value of POS. 
            Every time the loops runs, POS gets added to. So every time the loop runs, the position changes. */
            elem.style.top = pos + '%';
            elem.style.left = pos + '%'
        }
    }
}