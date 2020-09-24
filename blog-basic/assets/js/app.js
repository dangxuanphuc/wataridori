$(window).load(function() {
  $('body').removeClass('preloading');
  $('#preload').delay(1000).fadeOut('slow');
});

let pdxmenu = document.querySelector('.pdx-menu');
let pdxbutton = document.querySelector('.pdx-menu__button');

toggleMenu = () => {
  pdxmenu.classList.toggle('open');
}

pdxbutton.addEventListener('click', function() {
  clearInterval(interactionPreview);
  toggleMenu();
});

let interactionPreview = setInterval(() => {
  toggleMenu();
}, 2000)

$(document).ready(function(){
  $('.pdx-slider-autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: true
  });
});

$(document).ready(function(){
  $("#site-name__dialoge").mouseover(function(){
    document.getElementById("current-field").innerHTML = "Hi,<br/> Make it awesome";
  });
  $("#site-name__dialoge").mouseout(function(){
    document.getElementById("current-field").innerHTML = "";
  });

  // Display or Hide on moving the mouse to .pdx-info ( cv) 1
  $(".pdx-info").mouseover(function(){
    document.getElementById("current-field").innerHTML = "To get<br /> my personal infor. !";
  });
  $(".pdx-info").mouseout(function(){
    document.getElementById("current-field").innerHTML = "";
  });

  // Display or Hide on moving the mouse to .pdx-dev 2
  $(".pdx-dev").mouseover(function(){
    document.getElementById("current-field").innerHTML = "Sharing Exp. <br /> on coding!";
  });

  $(".pdx-dev").mouseout(function(){
    document.getElementById("current-field").innerHTML = "";
  });
  // Display or Hide on moving the mouse to .pdx-books 3
  $(".pdx-books").mouseover(function(){
    document.getElementById("current-field").innerHTML = "Read and <br />Review Together !";
  });
  $(".pdx-books").mouseout(function(){
    document.getElementById("current-field").innerHTML = "";
  });

  // Display or Hide on moving the mouse to .pdx-photography 4
  $(".pdx-photography").mouseover(function(){
    document.getElementById("current-field").innerHTML = "Blend <br />and Retouch!";
  });
  $(".pdx-photography").mouseout(function(){
    document.getElementById("current-field").innerHTML = "";
  });

  // Display or Hide on moving the mouse to .pdx-life 5
  $(".pdx-life").mouseover(function(){
    document.getElementById("current-field").innerHTML = "Tell me <br />more about you :))";
  });
  $(".pdx-life").mouseout(function(){
    document.getElementById("current-field").innerHTML = "";
  });
});
