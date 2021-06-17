$(document).on("click", "#js--next-song", function(e) {
  e.preventDefault();
  const url = $(this).data("url");
  const song_id = $(this).data("id");

  $.ajax({
    url: url,
    method: "GET",
    dataType: "SCRIPT",
    data: { song_id: song_id, status: "next" }
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
    data: { song_id: song_id, status: "prev" }
  })
})

// $(document).on("click", "#js--music", function(e) {
//   e.preventDefault();
//   const audio_url = $(this).data("audio");
//   const audio = new Audio(audio_url);
//   audio.play();
//   $(".pause-song").removeClass("d-none")
//   $(".play-song").addClass("d-none")
//   if(audio.play()) {
//     audio.pause();
//   }
// })
