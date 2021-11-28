function match(){
   var pass=document.getElementById('password');
   var conf=document.getElementById('confirmation');

   if (pass.value==conf.value){
       pass.style["border"] = "3px solid green";
       conf.style["border"] = "3px solid green";
   }
   else{
    pass.style["border"] = "3px solid red";
    conf.style["border"] = "3px solid red";
   }
}
