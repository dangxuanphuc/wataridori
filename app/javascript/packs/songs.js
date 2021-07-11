var circleLeft = null;
var barWidth = null;
var maxduration = null;
var currentTime = null;
var isPlaying = false;

// var audio = null;

// $(document).on("turbolinks:load", function() {
//   audio = $("body").find("audio").get(0);
// })


function getDuration(src) {
  return new Promise(function(resolve) {
    var audio = new Audio();
    $(audio).on("loadedmetadata", function() {
      resolve(audio.duration);
    });
    audio.src = src;
  });
}

function showDuration() {
  let song_url = $(".playBtn").data("audio")

  getDuration(song_url).then(function(duration) {
    maxduration = duration;
    $(".js--music-end").text(formatDuration(duration))
  });
}

function updateBar(x) {
  let progress = $(".js--control-progress")[0];
  let position = x - progress.offsetLeft;
  let percentage = (100 * position) / progress.offsetWidth;
  if (percentage > 100) {
    percentage = 100;
  }
  if (percentage < 0) {
    percentage = 0;
  }
  barWidth = percentage + "%";
  circleLeft = percentage + "%";
  currentTime = (maxduration * percentage) / 100;

  var updateTime = function(){
    $(".js--progress-width").css("width", barWidth)
  }

  $("#js--song").on("timeupdate", updateTime)
  $("#js--song").trigger("play");
}

function clickProgress(e) {
  isPlaying = true;
  $("#js--song").trigger("pause");
  updateBar(e.pageX);
}

function formatDuration(duration) {
  let durmin = Math.floor(duration / 60);
  let dursec = Math.floor(duration - durmin * 60);

  if (durmin < 10) {
    durmin = "0" + durmin;
  }
  if (dursec < 10) {
    dursec = "0" + dursec;
  }
  let durationFormatted = durmin + ":" + dursec;

  return durationFormatted;
}

function getCurrentTime() {
  let curmin = Math.floor(currentTime / 60);
  let cursec = Math.floor(currentTime - curmin * 60);

  if (curmin < 10) {
    curmin = "0" + curmin;
  }
  if (cursec < 10) {
    cursec = "0" + cursec;
  }
  let currentTimeFormatted = curmin + ":" + cursec;

  return currentTimeFormatted;
}

$(document).on("click", ".js--progress", function(e) {
  clickProgress(e)
})

$(document).on("turbolinks:load", function() {
  $(".playBtn").addClass("js--music-play")
  showDuration()

  let current_time = getCurrentTime();
  $(".js--music-start").text(current_time)
})

$(document).on("click", ".js--music-play", function(e) {
  e.preventDefault();
  $("#js--song").trigger("play");
  $(".pause-song").removeClass("d-none")
  $(".play-song").addClass("d-none")
  $(this).removeClass("js--music-play").addClass("js--music-pause")
  isPlaying = true

  $("#js--song").on("ended", function() {
    setTimeout(function() {
      $(".js--next-song").trigger("click");
    }, 1000);
  })
})

$(document).on("click", ".js--music-pause", function(e) {
  e.preventDefault();
  $("#js--song").trigger("pause");
  $(".pause-song").addClass("d-none")
  $(".play-song").removeClass("d-none")
  $(this).removeClass("js--music-pause").addClass("js--music-play")
  isPlaying = false
})

$(document).on("click", ".js--next-song", function(e) {
  e.preventDefault();
  let $this = $(this);
  let url = $this.data("url");
  let song_id = $this.data("id");

  $.ajax({
    url: url,
    method: "GET",
    dataType: "SCRIPT",
    data: { song_id: song_id, status: "next" },
    success: function() {
      showDuration()

      if(isPlaying == true) {
        setTimeout(function() {
          $(".playBtn").addClass("js--music-play")
          $(".js--music-play").trigger("click");
        }, 1000);
      } else {
        $(".pause-song").addClass("d-none")
        $(".play-song").removeClass("d-none")
        $(".playBtn").addClass("js--music-play")
        isPlaying = false
      }
    }
  })
})

$(document).on("click", ".js--prev-song", function(e) {
  e.preventDefault();
  let url = $(this).data("url");
  let song_id = $(this).data("id");

  $.ajax({
    url: url,
    method: "GET",
    dataType: "SCRIPT",
    data: { song_id: song_id, status: "prev" },
    success: function() {
      showDuration()

      if(isPlaying == true) {
        setTimeout(function() {
          $(".playBtn").addClass("js--music-play")
          $(".js--music-play").trigger("click");
        }, 1000);
      } else {
        $(".pause-song").addClass("d-none")
        $(".play-song").removeClass("d-none")
        $(".playBtn").addClass("js--music-play")
        isPlaying = false
      }
    }
  })
})
