window.addEventListener("load", function () {
    const playButton = document.querySelector("#playButton");
    const myMovie = document.querySelector("#myMovie");
    const defaultBar = document.querySelector("#defaultBar");
    const progress = document.querySelector("#progress");

    barSize = parseInt(window.getComputedStyle(defaultBar).width);
    let barPerSecond = barSize / myMovie.duration;

    myMovie.addEventListener("click", playOrPause);
    playButton.addEventListener("click", playOrPause);
    defaultBar.addEventListener("click", function (e) {
        let curWidth = e.clientX - defaultBar.offsetLeft;
        let nowTime = curWidth / barPerSecond;
        progress.style.width = `${curWidth}px`;
        myMovie.currentTime = nowTime;
        setInterval(update, 300);
    });

    function playOrPause() {
        if (!myMovie.paused && !myMovie.ended) {
            myMovie.pause();
            playButton.innerText = "Play";
        } else {
            myMovie.play();
            playButton.innerText = "Pause";
            setInterval(update, 300);
        }
    }

    function update() {
        if (!myMovie.ended) {
            progress.style.width = `${myMovie.currentTime * barPerSecond}px`;
        } else {
            playButton.innerText = "play";
            myMovie.currentTime = 0;
            progress.style.width = `0px`;
        }
    }
});
