var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("pdx-dev-navbar").style.top = "0";
  } else {
    document.getElementById("pdx-dev-navbar").style.top = "-62px";
  }
  prevScrollpos = currentScrollPos;
}

// Back Top
$(document).ready(function(){
  $(window).bind('scroll', function(){
    checkScrollPos();
  });
  checkScrollPos();

  $('#pdx-back-top').bind('click',function(){
      $('html, body').animate({
        scrollTop:0
      }, $(window).scrollTop() / 3);
    return false;
  });
});

function checkScrollPos() {
  if ($(window).scrollTop() > 400) {
    $('#pdx-back-top').fadeIn(1000);
  } else {
    $('#pdx-back-top').fadeOut(1000);
  }
}

$(function(){
  var $window = $(window);    //Window object
  var scrollTime = .7;      //Scroll time
  var scrollDistance = 170;   //Distance. Use smaller value for shorter scroll and greater value for longer scroll

  $window.on("mousewheel DOMMouseScroll", function(event){
    event.preventDefault();
    var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta*scrollDistance);

    TweenMax.to($window, scrollTime, {
      scrollTo : { y: finalScroll, autoKill:true },
        ease: Power1.easeOut, //For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
        autoKill: true,
        overwrite: 5
      });
  });
});

// See more btn

$(document).ready(function() {
  $(".ruby-field__seemore-btn").click(function() {
    var elem = $(".ruby-field__seemore-btn").text();
    if (elem == "See More") {
      //Stuff to do when btn is in the see more state
      $(".ruby-field__seemore-btn").text("See Less");
      $(".ruby-field__seemore-content").slideDown();
    }
    else {
      //Stuff to do when btn is in the see less state
      $(".ruby-field__seemore-btn").text("See More");
      $(".ruby-field__seemore-content").slideUp();
    }
    $('html').animate({
      scrollTop: $('.ruby-field').offset().top }, 600);
  });

  $(".frontend-field__seemore-btn").click(function() {
    var elem = $(".frontend-field__seemore-btn").text();
    if (elem == "See More") {
      //Stuff to do when btn is in the see more state
      $(".frontend-field__seemore-btn").text("See Less");
      $(".frontend-field__seemore-content").slideDown();
    }
    else {
      //Stuff to do when btn is in the see less state
      $(".frontend-field__seemore-btn").text("See More");
      $(".frontend-field__seemore-content").slideUp();
    }
    $('html').animate({
      scrollTop: $('.frontend-field').offset().top }, 600);
  });

  $(".git-field__seemore-btn").click(function() {
    var elem = $(".git-field__seemore-btn").text();
    if (elem == "See More") {
      //Stuff to do when btn is in the see more state
      $(".git-field__seemore-btn").text("See Less");
      $(".git-field__seemore-content").slideDown();
    }
    else {
      //Stuff to do when btn is in the see less state
      $(".git-field__seemore-btn").text("See More");
      $(".git-field__seemore-content").slideUp();
    }
    $('html').animate({
      scrollTop: $('.git-field').offset().top },600);
  });

  $(".docker-field__seemore-btn").click(function() {
    var elem = $(".docker-field__seemore-btn").text();
    if (elem == "See More") {
      //Stuff to do when btn is in the see more state
      $(".docker-field__seemore-btn").text("See Less");
      $(".docker-field__seemore-content").slideDown();
    }
    else {
      //Stuff to do when btn is in the see less state
      $(".docker-field__seemore-btn").text("See More");
      $(".docker-field__seemore-content").slideUp();
    }
    $('html').animate({
      scrollTop: $('.docker-field').offset().top },600);
  });

  // $(".skills-field__seemore-btn").click(function() {
  //   var elem = $(".skills-field__seemore-btn").text();
  //   if (elem == "See More") {
  //     //Stuff to do when btn is in the see more state
  //     $(".skills-field__seemore-btn").text("See Less");
  //     $(".skills-field__seemore-content").slideDown();
  //   }
  //   else {
  //     //Stuff to do when btn is in the see less state
  //     $(".skills-field__seemore-btn").text("See More");
  //     $(".skills-field__seemore-content").slideUp();
  //   }
  //   $('html').animate( {
  //     scrollTop: $('.skills-field').offset().top },600);
  // });
});

$(function(){
  $('.pdx-dev-nav-right ul li:nth-child(1) a').on('click', function(event) {
    event.preventDefault();
    console.log( $('.ruby-field').offset().top );
    $('html').animate( {
      scrollTop: $('.ruby-field').offset().top }, 300, 'easeInQuad');
  });

  $('.pdx-dev-nav-right ul li:nth-child(2) a').on('click', function(event) {
    event.preventDefault();
    console.log( $('.frontend-field').offset().top );
    $('html').animate( {
      scrollTop: $('.frontend-field').offset().top }, 700, 'easeInQuad');
  });

  $('.pdx-dev-nav-right ul li:nth-child(3) a').on('click', function(event) {
    event.preventDefault();
    console.log( $('.git-field').offset().top );
    $('html').animate( {
      scrollTop: $('.git-field').offset().top },1000, 'easeInQuad');
  });

  $('.pdx-dev-nav-right ul li:nth-child(4) a').on('click', function(event) {
    event.preventDefault();
    console.log( $('.docker-field').offset().top );
    $('html').animate( {
      scrollTop: $('.docker-field').offset().top },1000, 'easeInQuad');
  });

  $('.pdx-dev-nav-right ul li:nth-child(5) a').on('click', function(event) {
    event.preventDefault();
    console.log( $('.other-fields').offset().top );
    $('html').animate( {
      scrollTop: $('.other-fields').offset().top },1500, 'easeInQuad');
  });
});
