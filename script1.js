var nav = document.querySelector('nav');
nav.innerHTML = `<div class="nav-logo">
<h1>peolove</h1>
</div>
<input type="checkbox" id="check">
<label for="check">
<span class="hamburger"></span>
<span class="hamburger"></span>
<span class="hamburger"></span>
</label>


<div class="nav-links">
<a class="active" href="#"><span>home</span></a>
<a href="#"><span>about</span></a>
<a href="#"><span>cool</span></a>
<a href="#"><span>contract</span></a>
</div>`;


 /* var photos = document.querySelectorAll(".photo");
  
  let myarray = new Array(photos.length);
  for( let i = 0; i < photos.length; i++){
    myarray[i] = i * 360;
    photos[i].style.transform = `translateX(` + myarray[i] + `px)`;
  }
  
  
  
  function photoSlider(){
  
  for(let i = 0; i < photos.length; i++){
    myarray[i] -= 4;
    if (myarray[i] <= -360){
      myarray[i] = (photos.length -1) * 360;
    }
    photos[i].style.transform = `translateX(` + myarray[i] + `px)`;

    
   }
}

var intervalId = setInterval(photoSlider, 30);



function stopInterval() {
    clearInterval(intervalId);
  }


  function playInterval() {
    intervalId = setInterval(photoSlider, 30);
  }

var photoContainer = document.querySelector(".photo-wapper");

photoContainer.addEventListener("mouseenter",stopInterval);
photoContainer.addEventListener("mouseleave",playInterval);*/
