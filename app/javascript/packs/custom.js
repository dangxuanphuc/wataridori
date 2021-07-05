function setCookie(name,value,days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

$(document).on('click', '.js--switch-theme', function() {
  let $this = $(this);
  $('body').toggleClass('dark-theme');
  $this.find('.fa-moon').toggleClass('d-none')
  $this.find('.fa-sun').toggleClass('d-none')
  theme_status = $this.find('.fas').not('.d-none').attr('id')
  setCookie('theme', theme_status, 7);
})
