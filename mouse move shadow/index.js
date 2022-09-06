const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
const walk = 200;


function shadow(event){
    const {offsetWidth:width,offsetHeight:height} = parent //width and height of parent including padding,border without margin

    let {offsetX:x,offsetY:y} = event; //position of x cordinate & y cordinate wrt target element.

    if(this != event.target){
        x = x + event.target.offsetLeft;
        y = y + event.target.offsetHeight;
    }

    const xWalk = Math.round((x/width*walk) - (walk/2));
    const yWalk = Math.round((y/width*walk) - (walk/2));

    child.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;



}
parent.addEventListener('mousemove',shadow);