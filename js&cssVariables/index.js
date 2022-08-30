const inputs = document.querySelectorAll('.controls input');

function updateFunction(){
 //this represnts the element that invoked update function method
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}
inputs.forEach(input=>{
    input.addEventListener('change',updateFunction);
    input.addEventListener('mousemove',updateFunction);
})