function setCookie(name,value,days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function changeRepeatIcon() {
  let icon_black = "https://res.cloudinary.com/phucdx/image/upload/v1626365020/wataridori/songs/black_newld4.png";
  let icon_white = "https://res.cloudinary.com/phucdx/image/upload/v1626365020/wataridori/songs/white_hjd775.png";

  if($(".dark-theme").length == 0) {
    $(".js--repeat").attr("src", icon_black)
  } else {
    $(".js--repeat").attr("src", icon_white)
  }
}

$(document).on("turbolinks:load", function() {
  changeRepeatIcon()
})

$(document).on("turbolinks:load", function() {
  $("img.lazy").Lazy({
    threshold : 500,
    effect : "fadeIn",
    defaultImage: "https://res.cloudinary.com/phucdx/image/upload/v1635479043/wataridori/images/loading_osm83c.gif"
  });
})

$(document).on('click', '.js--switch-theme', function() {
  let $this = $(this);
  $('body').toggleClass('dark-theme');
  $this.find('.fa-moon').toggleClass('d-none')
  $this.find('.fa-sun').toggleClass('d-none')
  let theme_status = $this.find('.fas').not('.d-none').attr('id')
  setCookie('theme', theme_status, 7);
})
