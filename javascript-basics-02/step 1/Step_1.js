var pic=document.querySelector("#image1");
pic.addEventListener('mouseover',ChangeImage);
pic.addEventListener('mouseout',ReturnImage);
  
function ChangeImage(){
    image = document.getElementById('image1');
    image.src=('images/image1_2.jpg');
  

}
function ReturnImage(){
    image = document.getElementById('image1');
    image.src=('images/image1.jpg');
  

}


