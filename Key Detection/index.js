const secretCode = 'satya';
const keysList = [];

window.addEventListener('keydown',(e)=>{
    keysList.push(e.key);
    keysList.splice(-secretCode.length,(keysList.length-secretCode.length));
    console.log(keysList);
    if(keysList.join('').includes(secretCode)){
        console.log('DING DING!!');
        cornify_add();
    }
})