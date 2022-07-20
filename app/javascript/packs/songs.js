var isPlaying = false;
var updateTimer;
var currentVolumn = 50;
let curr_track = document.createElement("audio");

var icon_active = "https://res.cloudinary.com/phucdx/image/upload/v1626365205/wataridori/songs/ideal_e8ofhg.png"
var icon_black = "https://res.cloudinary.com/phucdx/image/upload/v1626365020/wataridori/songs/black_newld4.png"
var icon_white = "https://res.cloudinary.com/phucdx/image/upload/v1626365020/wataridori/songs/white_hjd775.png"

function loadTrack(track_url) {
  clearInterval(updateTimer);

  curr_track.src = track_url;
  curr_track.load();

  updateTimer = setInterval(seekUpdate, 1000);

  if(curr_track.loop === true) {
    curr_track.addEventListener("ended", playTrack);
  } else {
    curr_track.addEventListener("ended", nextTrack);
  }
}

function playTrack() {
  curr_track.play();
  $(".pause-song").removeClass("d-none")
  $(".play-song").addClass("d-none")
  isPlaying = true
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

function seekTo(seek_slider) {
  let seekto = curr_track.duration * (seek_slider / 100);
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


function changeRepeatIcon() {
  if($(".dark-theme").length == 0) {
    $(".js--repeat").attr("src", icon_black)
  } else {
    $(".js--repeat").attr("src", icon_white)
  }
}

$(document).on("turbolinks:load", function() {
  if ($("#song-frame").length > 0) {
    let track_url = $(".js--playpause-track").data("audio")
    loadTrack(track_url)
    setVolume(currentVolumn)
  }
})

$(document).on('click', '.js--switch-theme', function() {
  if(curr_track.loop === true) {
    $(".js--repeat").attr("src", icon_active)
  } else {
    changeRepeatIcon()
  }
})

$(document).on("click", ".js--repeat", function() {
  curr_track.loop = !curr_track.loop;

  if(curr_track.loop === true) {
    $(".js--repeat").attr("src", icon_active)
  } else {
    changeRepeatIcon()
  }
})

$(document).on("click", ".js--playpause-track", function(e) {
  e.preventDefault();
  playpauseTrack();
})

$(document).on("keypress", function(e) {
  if ($("#song-frame").length !== 0 && e.keyCode === 32) {
    playpauseTrack();
  }
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
      changeRepeatIcon()

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
      changeRepeatIcon()

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

$(document).on("click", ".js--progress-seek", function(e) {
  e.preventDefault()
  $this = $(this)
  var maxWidth = $this.width()
  var pos = e.pageX - $this.offset().left
  var position = Math.round(pos / maxWidth * 100)

  if (position > 100) {
    position = 100;
  }

  seekTo(position)
})

$(document).on("click", ".js--progress-volume", function(e) {
  e.preventDefault()
  $this = $(this)
  var maxWidth = $this.width()
  var pos = e.pageX - $this.offset().left
  currentVolumn = Math.round(pos / maxWidth * 100)

  if (currentVolumn > 100) {
    currentVolumn = 100;
  }

  if (currentVolumn < 50) {
    $(".js--volume").removeClass("fa-volume-up").addClass("fa-volume-down")
  } else {
    $(".js--volume").removeClass("fa-volume-down").addClass("fa-volume-up")
  }
  setVolume(currentVolumn)
})

$(document).on("click", ".js--volume", function(e) {
  e.preventDefault()
  $(".js--progress-volume").toggleClass("d-none")
})

function sweet_confirm_dialog(url) {
  swalConfirmButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        method: "DELETE",
        url: url
      })
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalConfirmButtons.fire(
        "Cancelled",
        "Delete song was unsuccessfully!",
        "error"
      )
    }
  })
}

$(document).on("click", "a[id^=delete-song]", function(e) {
  e.preventDefault();
  const $this = $(this);
  const url = $this.attr("url");
  sweet_confirm_dialog(url);
})
