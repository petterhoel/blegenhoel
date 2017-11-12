
$(window).load(function() {
     $('#loader').fadeOut(600);
});

$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    arrows: true,
    infinite: true,
    variableWidth: true,
    centerMode: true,
    speed: 600
  });
});

$(window).on('load resize', function() {
  var carouselHeight = Math.floor($(window).height()*0.8)  ;
  var imageHeight = Math.floor($(window).height()*0.7);
  $('.slick-slider').css({height: carouselHeight}); // firefox hack
  $('.image-wrapper img').css({height: imageHeight}); // only images in carousel
  if ($(window).height() < 350) {
    var smallSlideHeight = Math.floor($(window).height()*1);
    $('.slick-slide').css({height: smallSlideHeight});
  } else $('.slick-slide').css({height: smallSlideHeight}); // chrome and firefox hack
});