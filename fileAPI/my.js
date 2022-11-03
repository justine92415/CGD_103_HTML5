function doFirst() {
    const theFile = document.querySelector("#theFile");
    const fileInfo = document.querySelector("#fileInfo");
    const fileContent = document.querySelector("#fileContent");
    const image = document.querySelector("#image");
    const myMovie = document.querySelector("#myMovie");
    theFile.addEventListener("change", function () {
        /* 只有一個 */
        /* let file = theFile.files[0];
        let message = "";
        message += `File name:${file.name}\n`;
        message += `File type:${file.type}\n`;
        message += `File size:${file.size}\n`;
        message += `Last modified:${file.lastModifiedDate}`; */

        /* 有很多個 */
        let files = theFile.files;
        let message = "";

        for (let i = 0; i < files.length; i++) {
            message += `File name:${files[i].name}\n`;
            message += `File type:${files[i].type}\n`;
            message += `File size:${files[i].size}\n`;
            message += `Last modified:${files[i].lastModifiedDate}`;
            message += `---------------------------------------\n`;
        }

        fileInfo.value = message;

        /*  let readFile = new FileReader();
        readFile.readAsDataURL(file);
        readFile.addEventListener("load", function () {
            image.src = readFile.result;
            image.style.maxWidth = "500px";
            image.style.maxHeight = "500px";
            myMovie.src = readFile.result;
            myMovie.width = 535;
            myMovie.controls = true;
        }); */
    });
}

window.addEventListener("load", doFirst);
