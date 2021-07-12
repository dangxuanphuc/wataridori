var volume_slider = $(".volume_slider");
var track_url = "https://res.cloudinary.com/phucdx/video/upload/v1625904346/wataridori/songs/arigatou_fkqnjw.mp3";
var isPlaying = false;
var updateTimer;

let curr_track = document.createElement("audio");

function loadTrack(track_url) {
  clearInterval(updateTimer);

  curr_track.src = track_url;
  curr_track.load();

  updateTimer = setInterval(seekUpdate, 1000);

  curr_track.addEventListener("ended", nextTrack);
}

function playTrack() {
  curr_track.play();
  $(".pause-song").removeClass("d-none")
  $(".play-song").addClass("d-none")
  isPlaying = true

  $("#js--song").on("ended", function() {
    setTimeout(function() {
      $(".js--next-song").trigger("click");
    }, 1000);
  })
}

function pauseTrack() {
  curr_track.pause();
  $(".pause-song").addClass("d-none")
  $(".play-song").removeClass("d-none")
  isPlaying = false
}

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

$(document).on("click", ".js--playpause-track", function(e) {
  e.preventDefault();
  playpauseTrack();
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
      if(isPlaying == true) {
        setTimeout(function() {
          $(".js--playpause-track").trigger("click");
        }, 1000);
      } else {
        $(".pause-song").addClass("d-none")
        $(".play-song").removeClass("d-none")
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
      if(isPlaying == true) {
        setTimeout(function() {
          $(".js--playpause-track").trigger("click");
        }, 1000);
      } else {
        $(".pause-song").addClass("d-none")
        $(".play-song").removeClass("d-none")
        isPlaying = false
      }
    }
  })
})

$(document).on("change", ".js--progress", function(e) {
  e.preventDefault()
  seekTo()
})

function nextTrack() {
  $(".js--next-song").trigger("click")
}

function seekTo() {
  let seek_slider = $(".js--progress").val()
  seekto = curr_track.duration * (seek_slider / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    $(".js--progress").css("width", `${seekPosition}%`);

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time = currentMinutes + ":" + currentSeconds;
    total_duration = durationMinutes + ":" + durationSeconds;

    $(".js--current-time").text(curr_time)
    $(".js--total-duration").text(total_duration)
  }
}

loadTrack(track_url);
