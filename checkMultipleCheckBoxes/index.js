const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
let inBetween = false;


function handleClick(e){
    if(e.shiftKey && this.checked){
        checkBoxes.forEach((checkBox)=>{
            if(this === checkBox || lastChecked === checkBox){
                inBetween = !inBetween;
            }
            if(inBetween){
                checkBox.checked = true;
            }
        });
    }
    lastChecked = this;
}
checkBoxes.forEach((checkBox) => checkBox.addEventListener('click',handleClick));