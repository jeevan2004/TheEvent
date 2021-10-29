
$('.venobox').venobox({
    bgcolor: '',
    overlayColor: 'rgba(6, 12, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff'
  });

    // Gallery carousel (uses the Owl Carousel library)
    $(".gallery-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      center:true,
      responsive: { 0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: {items: 5}
      }
    });


    $(document).ready(function () {
      $(window).on('scroll', function () {
          if ($(this).scrollTop() > 100) {
              $('#back-to-top').fadeIn();
          } else {
              $('#back-to-top').fadeOut();
          }
      });
      $('#back-to-top').click(function () {
          $("html, body").animate({
              scrollTop: 0
          }, 600);
          return false;
      });
  });

  $(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) {
            $('.main-header').addClass('sticky');
        } else {
            $('.main-header').removeClass("sticky");
        }
    });
});
