function doFirst() {
    const dropzone = document.querySelector("#dropzone");
    const bnts = document.querySelectorAll("button");
    const image = document.querySelector("#image");
    let scaleValue = 1;
    let rotateValue = 0;
    bnts.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            switch (e.target.className) {
                case "zoomIn":
                    scaleValue += 0.1;
                    image.style.transform = `scale(${scaleValue}) rotate(${rotateValue}deg)`;
                    break;
                case "zoomOut":
                    scaleValue -= 0.1;
                    image.style.transform = `scale(${scaleValue}) rotate(${rotateValue}deg)`;
                    break;
                case "left":
                    rotateValue -= 15;
                    image.style.transform = `scale(${scaleValue}) rotate(${rotateValue}deg)`;
                    break;
                case "right":
                    rotateValue += 15;
                    image.style.transform = `scale(${scaleValue}) rotate(${rotateValue}deg)`;
                    break;
                case "delete":
                    dropzone.removeChild(image);
                    break;
            }
        });
    });

    dropzone.addEventListener("dragover", dragOver);
    dropzone.addEventListener("drop", dropped);
}
function dragOver(e) {
    e.preventDefault();
}
function dropped(e) {
    e.preventDefault();

    const image = document.querySelector("#image");
    let file = e.dataTransfer.files[0];
    document.querySelector("#fileName").innerText = file.name;

    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener("load", function () {
        image.src = readFile.result;
    });
}
window.addEventListener("load", doFirst);

/* 

function doFirst(){    
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    document.getElementById('dropzone').ondragover = dragOver
    document.getElementById('dropzone').ondrop = dropped
}
function dragOver(e){
    // console.log(e);
    e.preventDefault()
}
function dropped(e){
    e.preventDefault()

    let file = e.dataTransfer.files[0]
    fileName.innerText = file.name

    let readFile = new FileReader()
    readFile.readAsDataURL(file)
    readFile.addEventListener('load',function(){
        document.getElementById('image').src = readFile.result
    })
}
window.addEventListener('load',doFirst)

*/
