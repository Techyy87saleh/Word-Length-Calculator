let input   = document.getElementById('field');
let content = document.getElementById('txt');
let button  = document.getElementById('btn'); 

button.addEventListener('click',()=>{
     
     content.innerHTML = input.value.length;
});
           
