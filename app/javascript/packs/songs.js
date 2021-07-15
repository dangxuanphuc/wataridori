var isPlaying = false;
var updateTimer;
var currentVolumn = 50;
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

function nextTrack() {
  $(".js--next-song").trigger("click")
}

function seekTo() {
  let seek_slider = $(".js--progress").val()
  seekto = curr_track.duration * (seek_slider / 100);
  curr_track.currentTime = seekto;
}

function setVolume(volume) {
  curr_track.volume = volume / 100;
  $(".js--volume-slider").css("width", `${volume}%`)
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    $(".js--progress").val(seekPosition);
    $(".js--progress-slider").css("width", `${seekPosition}%`)

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

$(document).on("turbolinks:load", function() {
  let track_url = $(".js--playpause-track").data("audio")
  loadTrack(track_url)
  setVolume(currentVolumn)
})

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
    data: { song_id: song_id + 1 },
    success: function() {
      let track_url = $(".js--playpause-track").data("audio")
      loadTrack(track_url)
      setVolume(currentVolumn)

      if(isPlaying == true) {
        $(".js--playpause-track").trigger("click")
        setTimeout(() => {
          $(".js--playpause-track").trigger("click")
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
    data: { song_id: song_id - 1 },
    success: function() {
      let track_url = $(".js--playpause-track").data("audio")
      loadTrack(track_url)
      setVolume(currentVolumn)

      if(isPlaying == true) {
        $(".js--playpause-track").trigger("click")
        setTimeout(() => {
          $(".js--playpause-track").trigger("click")
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

$(document).on("change", ".js--volume", function(e) {
  e.preventDefault()
  currentVolumn = $(".js--volume").val()
  setVolume(currentVolumn)
})

// $(document).on("click", ".js--volume-up", function(e) {
//   e.preventDefault()

// })
