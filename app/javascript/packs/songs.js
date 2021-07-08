var isPlaying = false;

$(document).on("click", ".js--music-play", function(e) {
  e.preventDefault();
  $("#js--song").trigger("play");
  $(".pause-song").removeClass("d-none")
  $(".play-song").addClass("d-none")
  $(this).removeClass("js--music-play").addClass("js--music-pause")
  isPlaying = true
})

$(document).on("click", ".js--music-pause", function(e) {
  e.preventDefault();
  $("#js--song").trigger("pause");
  $(".pause-song").addClass("d-none")
  $(".play-song").removeClass("d-none")
  $(this).removeClass("js--music-pause").addClass("js--music-play")
  isPlaying = false
})

$(document).on("click", "#js--next-song", function(e) {
  e.preventDefault();
  const url = $(this).data("url");
  const song_id = $(this).data("id");

  $.ajax({
    url: url,
    method: "GET",
    dataType: "SCRIPT",
    data: { song_id: song_id, status: "next" },
    success: function() {
      if(isPlaying == true) {
        setTimeout(function() {
          $("#js--song").trigger("play");
          $(".pause-song").removeClass("d-none")
          $(".play-song").addClass("d-none")
          $(this).removeClass("js--music-play").addClass("js--music-pause")
          isPlaying = true
        }, 1000);
      } else {
        $(".pause-song").addClass("d-none")
        $(".play-song").removeClass("d-none")
        $(this).removeClass("js--music-pause").addClass("js--music-play")
        isPlaying = false
      }
    }
  })
})

$(document).on("click", "#js--prev-song", function(e) {
  e.preventDefault();
  const url = $(this).data("url");
  const song_id = $(this).data("id");

  $.ajax({
    url: url,
    method: "GET",
    dataType: "SCRIPT",
    data: { song_id: song_id, status: "prev" },
    success: function() {
      if(isPlaying == true) {
        setTimeout(function() {
          $("#js--song").trigger("play");
          $(".pause-song").removeClass("d-none")
          $(".play-song").addClass("d-none")
          $(this).removeClass("js--music-play").addClass("js--music-pause")
          isPlaying = true
        }, 1000);
      } else {
        $(".pause-song").addClass("d-none")
        $(".play-song").removeClass("d-none")
        $(this).removeClass("js--music-pause").addClass("js--music-play")
        isPlaying = false
      }
    }
  })
})

// $("#js--song").on("ended", function() {
//   $("#js--next-song").trigger("click");
// })
