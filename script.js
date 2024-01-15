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

<div class="blur-slider"></div>
<div class="nav-links">
<a class="active" href="#"><span>home</span></a>
<a href="#"><span>about</span></a>
<a href="#"><span>cool</span></a>
<a href="#"><span>contract</span></a>

</div>`;

const gradientBox = document.querySelector('.banner-wapper');
var gradientAngel = 1;
function rotatGradient(){
    gradientBox.style.background = 'linear-gradient('+ gradientAngel +'deg, #2c9743 0%, #0c3e6d 100%,#bd4343 50%)';
    if(gradientAngel == 360){
        gradientAngel = 0;
    }else{
        gradientAngel += 0.5;
    }
    requestAnimationFrame(rotatGradient);
}
rotatGradient();