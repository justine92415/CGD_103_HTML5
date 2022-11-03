/* function doFirst() {
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    const dropzone = document.querySelector("#dropzone");
    dropzone.addEventListener("dragover", dragOver);
    dropzone.addEventListener("drop", dropped);
}
function dragOver(e) {
    e.preventDefault();
}
function dropped(e) {
    e.preventDefault();

    let files = e.dataTransfer.files;

    let readFile = new FileReader();
    for (let i = 0; i < files.length; i++) {
        readFile.readAsDataURL(files[i]);

        readFile.addEventListener("load", function () {
            let image = document.createElement("img");

            image.src = readFile.result;

            let dropzone = document.querySelector("#dropzone");
            // dropzone.appendChild(image);
            dropzone.insertBefore(image, dropzone.firstChild);
        });
    }
}
window.addEventListener("load", doFirst);
 */

function doFirst() {
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    document.getElementById("dropzone").ondragover = dragOver;
    document.getElementById("dropzone").ondrop = dropped;
}
function dragOver(e) {
    e.preventDefault();
}
function dropped(e) {
    e.preventDefault();

    let files = e.dataTransfer.files;
    let readFile = new FileReader();

    for (let i = 0; i < files.length; i++) {
        readFile.readAsDataURL(files[i]);

        readFile.addEventListener("load", function () {
            // 動態新增 <img>
            // 1 建立標籤
            let image = document.createElement("img");

            // 2 將該標籤的屬性和方法寫好
            image.src = readFile.result;

            // 3 找到 parentNode，加進去
            let dropzone = document.getElementById("dropzone");
            //dropzone.appendChild(image)
            dropzone.insertBefore(image, dropzone.firstChild);
        });
    }
}
window.addEventListener("load", doFirst);
