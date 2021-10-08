import Masonry from "masonry-layout"

$(document).on("turbolinks:load", function() {
  var grid = document.querySelector(".grid");
  var msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
  });
});
