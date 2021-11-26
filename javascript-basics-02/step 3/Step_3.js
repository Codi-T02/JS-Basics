var inp=document.querySelector("#name");
var d=document.querySelector("#di");
inp.addEventListener("input",ind);
function ind(){
    inp = document.getElementById('name')
    d = document.getElementById('di');
    d.innerHTML =  inp.value;
}