$(document).on('ready', function () {
  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,

  });
  $('.slider').slick({
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  });
  $('.slider-partners').slick({
    // dots: true,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows: true,
  });
})



