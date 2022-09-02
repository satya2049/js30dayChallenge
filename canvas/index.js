const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); //Returns an object that provides methods and properties for drawing.

canvas.width = window.innerWidth; //interior width of the window in pixels. This includes the width of the vertical scroll bar, if one is present.
canvas.height = window.innerHeight; //interior height of the window in pixels, including the height of the horizontal scroll bar, if present.

ctx.strokeStyle = '#BADA55'; //Color
ctx.lineJoin = 'round'; //shape used to join two line segments where they meet.
ctx.lineCap = 'round';
ctx.lineWidth = 0;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


function draw(e){
    if(!isDrawing) return;
    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY];
    hue++
    hue = hue>=360 ? 0 : hue;
    direction = ctx.lineWidth >=100 || ctx.lineWidth <= 1 ? !direction : direction;
    ctx.lineWidth = direction ? ctx.lineWidth + 1 : ctx.lineWidth - 1;
}


canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',(e)=>{
    isDrawing=true;
    [lastX,lastY] = [e.offsetX,e.offsetY]
});
canvas.addEventListener('mouseup',()=>isDrawing=false);
canvas.addEventListener('mouseout',()=>isDrawing=false);

