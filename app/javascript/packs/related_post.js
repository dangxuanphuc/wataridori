import 'owl.carousel/dist/owl.carousel.min';

$(document).on('turbolinks:load', function() {
  $('#js--related-post').owlCarousel({
    margin: 0,
    loop: true,
    lazyLoad: true,
    autoplay: true,
    items: 3,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 3,
        margin: 15
      },
      1024: {
        items: 3,
        margin: 15
      },
      1440: {
        items: 3,
        margin: 15
      }
    }
  });
})
