function doFirst(){    
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    let canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')

    // 格線
    context.beginPath();
    for(let i = 0; i < 100; i++){
        let interval = i * 50
        // 水平線
        context.moveTo(           0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);

        // 垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 8);        
    }
    context.strokeStyle='rgba(0,0,0,0.3)';    
    context.stroke();
    // ============ 

    // let gradient = context.createLinearGradient(100, 100, 600, 500);
    let gradient = context.createLinearGradient(100, 300, 600, 300);
    gradient.addColorStop(  0, 'red');
    gradient.addColorStop(  1, 'blue');       
    gradient.addColorStop(0.5, 'yellow');       
  
    // context.fillStyle='yellow';    
    context.fillStyle=gradient;    
    context.fillRect(100, 100, 500, 400);
}
window.addEventListener('load',doFirst)

