function doFirst(){    
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    // 格線
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

    let pic = new Image()
    pic.src = '../../images/cityscape.jpg'
    pic.addEventListener('load',function(){
        // context.drawImage(pic, 0, 0);
        context.drawImage(pic, 0, 0, canvas.width, canvas.height);
    })
    
    
    // let n = 5;
    // let n = new Number(5);  // constructor 建構函數: 功能是「給初值」
    // let n = new Number();   // 0
    // ----------------------
    // let str = 'ABC';
    // let str = new String('ABC');
    // let str = new String(); // 空字串
    // ---------------------------------------
    // let arr = [2,4,6,'ABC',true,new Date()];
    // let arr = new Array(2,4,6,'ABC',true,new Date());
    // let arr = new Array();   // []
    // ---------------------------------------
    // let ans = true;
    // let ans = new Boolean(true);
    // let ans = new Boolean();    // false
    // ---------------------------------------
    // let obj = {};
    // let obj = new Object();
    // ---------------------------------------    
    // let today = new Date('2022/10/21')   // 日期時間物件


}
window.addEventListener('load',doFirst)