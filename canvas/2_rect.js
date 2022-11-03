function doFirst(){
    
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    // let ans = window.getComputedStyle(canvas).border
    // window.getComputedStyle('物件','::before')
    // alert(ans)

    context.fillStyle='red';
    context.strokeStyle='blue';
    context.lineWidth=10;  

    context.fillRect(100,100,300,200)
    context.strokeRect(100,100,300,200)

    context.rect(700, 600, 300, 200);
    context.fill();

    context.clearRect(150, 150, 50, 50);
    
    // 橡皮擦
    // context.clearRect(0, 0, canvas.width, canvas.height)
    
}
window.addEventListener('load',doFirst)
// window.onload = doFirst
// window.onload = function(){}
// window.addEventListener('load',function(){})
// window.addEventListener('load',() => {})