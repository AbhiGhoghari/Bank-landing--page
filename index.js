

var navigation = document.querySelector(".mobile-nav");
var nav_menu = document.querySelector("#nav-menu");
var bg_image = document.querySelector(".bg-image");

navigation.addEventListener("click" , function(){
     
    nav_menu.classList.toggle('open');
    var currentColor = bg_image.style.backgroundColor;

  if (currentColor === '') {
    bg_image.style.backgroundColor = 'gray'; // Change to blue if the current color is red
  } else {
    bg_image.style.backgroundColor = ''; // Change to red if the current color is not red
  }
})