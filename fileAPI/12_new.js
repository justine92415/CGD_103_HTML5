function doFirst() {
    const dropzone = document.querySelector("#dropzone");
    dropzone.addEventListener("dragover", dragOver);
    dropzone.addEventListener("drop", dropped);
}

function dragOver(e) {
    e.preventDefault();
}
function dropped(e) {
    e.preventDefault();
    const fileContent = document.querySelector("#fileContent");

    let file = e.dataTransfer.files[0];
    document.querySelector("#fileName").innerText = file.name;

    let readFile = new FileReader();
    readFile.readAsText(file);
    readFile.addEventListener("load", function () {
        fileContent.value = readFile.result;
    });
}
window.addEventListener("load", doFirst);

/* 老師寫的

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
    readFile.readAsText(file)
    readFile.addEventListener('load',function(){
        fileContent.value = readFile.result
    })
}
window.addEventListener('load',doFirst)

*/
