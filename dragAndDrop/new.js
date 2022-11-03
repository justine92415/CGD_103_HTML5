function doFirst(){    
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    image = document.getElementById('image')
    image.addEventListener('dragstart', startDrag)
    image.addEventListener('dragend', endDrag)

    console.log(image);

    rightbox = document.getElementById('rightbox')
    // rightbox.addEventListener('dragenter', function(e){e.preventDefault()})
    rightbox.addEventListener('dragover', function(e){e.preventDefault()})
    rightbox.addEventListener('drop', dropped)
}
function startDrag(e){
    // let data = `<img src="../../images/Shinnosuke/Shinnosuke3.png" alt="copy新之助">`
    let data = `<img src="${image.src}" alt="${image.alt}">`
    // 語法: e.dataTransfer.setData(type, data)
    // e.dataTransfer.setData('image/png', data)
    e.dataTransfer.setData('Shinnosuke', data)
}
function endDrag(){
    image.style.visibility = 'hidden'
}
function dropped(e){
    e.preventDefault()
    // rightbox.innerHTML = e.dataTransfer.getData('image/png')
    rightbox.innerHTML = e.dataTransfer.getData('Shinnosuke')
}
window.addEventListener('load',doFirst)