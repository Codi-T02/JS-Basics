function fun(){
    var answer = window.confirm("clear the form?");
if (answer) {
    document.getElementById("frm").reset(); 
}
    
}