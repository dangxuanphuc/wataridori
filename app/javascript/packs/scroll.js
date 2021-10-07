$(window).on("load scroll turbolinks:load", function(e) {
  var scroll_height_threshold = 400;

  if ($(window).scrollTop() > scroll_height_threshold) {
    $(".js-back-to-top").get(0).style.display = "flex";
  } else {
    $(".js-back-to-top").get(0).style.display = "none";
  }
});

$(document).on("click", ".js-back-to-top", function(e) {
  e.preventDefault();
  $("html, body").stop().animate({ scrollTop: 0 }, 0);
});
