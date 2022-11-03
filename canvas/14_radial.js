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

    let gradient = context.createRadialGradient(350, 225, 50, 260, 225, 150);
    gradient.addColorStop(  0, 'red');
    gradient.addColorStop(  1, 'blue');       
    // gradient.addColorStop(0.5, 'yellow');       
  
    // context.fillStyle='yellow';    
    context.fillStyle=gradient;    
    context.fillRect(100, 100, 500, 250);


    //===============
    context.translate(300, 600);

    context.lineWidth=20;
    let radius = 180

    let circleGradient = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    circleGradient.addColorStop(  0, '#666');
    circleGradient.addColorStop(0.5, '#fff');
    circleGradient.addColorStop(  1, '#666');

    context.beginPath();    
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.strokeStyle=circleGradient;  
    context.stroke();
    
    context.translate(-300, -600);
    
}
window.addEventListener('load',doFirst)

