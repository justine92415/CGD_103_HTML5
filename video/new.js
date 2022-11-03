function doFirst() {
    // 先跟 HTML 畫面產生關連
    myMovie = document.getElementById("myMovie");
    playButton = document.getElementById("playButton");
    defaultBar = document.getElementById("defaultBar");
    progress = document.getElementById("progress");
    // alert(defaultBar.style.width)  // XX -- 無法直接從 JS 取得 CSS 檔案內的屬性值
    barsize = parseInt(window.getComputedStyle(defaultBar).width);
    // alert(barsize)
    upButton = document.querySelector("#upButton");
    downButton = document.querySelector("#downButton");
    mutedButton = document.querySelector("#mutedButton");
    currentVolume = document.querySelector(".currentVolume");
    console.log(myMovie.volume);

    // 再建事件聆聽功能
    playButton.addEventListener("click", playOrPause);
    myMovie.addEventListener("click", playOrPause);
    defaultBar.addEventListener("click", clickedBar);
    upButton.addEventListener("click", setVolume);
    downButton.addEventListener("click", setVolume);
    mutedButton.addEventListener("click", setVolume);
    // 全螢幕
    // fullButton.addEventListener('click',function(){
    //     myMovie.webkitEnterFullScreen()
    // })
}
function setVolume(e) {
    if (e.target === upButton) {
        console.log("upButton");
        if (myMovie.volume < 1) {
            myMovie.volume = (myMovie.volume + 0.1).toFixed(2);
        }
    }
    if (e.target === downButton) {
        console.log("downButton");
        if (myMovie.volume > 0) {
            myMovie.volume = (myMovie.volume - 0.1).toFixed(2);
        }
    }
    currentVolume.innerHTML = `currentVolume:&nbsp;${myMovie.volume}`;

    if (e.target === mutedButton) {
        if (!myMovie.muted) {
            myMovie.muted = true;
            mutedButton.innerText = `Unmuted`;
        } else {
            myMovie.muted = false;
            mutedButton.innerText = `Muted`;
        }
    }
}

function playOrPause() {
    if (!myMovie.paused && !myMovie.ended) {
        // 影片正在跑
        myMovie.pause();
        playButton.innerText = "play";
    } else {
        myMovie.play();
        playButton.innerText = "pause";
        setInterval(update, 300); // 每 300 毫秒更新捲軸
    }
}
function update() {
    if (!myMovie.ended) {
        let size = (barsize / myMovie.duration) * myMovie.currentTime;
        progress.style.width = `${size}px`;
    } else {
        playButton.innerText = "play";
        progress.style.width = `0px`;
        myMovie.currentTime = 0;
    }
}
function clickedBar(e) {
    let mouseX = e.clientX - defaultBar.offsetLeft;
    progress.style.width = `${mouseX}px`;

    let newTime = mouseX / (barsize / myMovie.duration);
    myMovie.currentTime = newTime;
}
window.addEventListener("load", doFirst);
