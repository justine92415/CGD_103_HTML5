window.addEventListener("load", function () {
    const image = document.querySelector("#image");
    const rightbox = document.querySelector("#rightbox");

    image.addEventListener("dragstart", function (e) {
        let data = `<img src="${image.src}" alt="${image.alt}">`;
        e.dataTransfer.setData("image/png", data);
    });
    image.addEventListener("dragend", function (e) {
        image.style.visibility = "hidden";
    });
    rightbox.addEventListener("dragover", (e) => e.preventDefault());
    rightbox.addEventListener("drop", function (e) {
        e.preventDefault();
        rightbox.innerHTML = e.dataTransfer.getData("image/png");
    });
});
