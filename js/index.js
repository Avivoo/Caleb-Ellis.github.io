var allowAutoScroll = true;

function scrollTo(id) {
  var speed = 1000;
  var href= id;
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.get( 0 ).offsetTop;
  $(".mdl-layout__content").animate({scrollTop:position}, speed, "swing", function() {
    allowAutoScroll = true;
  });
}

$('a.scroll').click(function(){
  if (allowAutoScroll === true) {
    allowAutoScroll = false;
    scrollTo($(this).attr('href'));
  }
});

$('#top').on('mousewheel', function(e) {
  if (allowAutoScroll === true && e.deltaY <= 0) {
    allowAutoScroll = false;
    scrollTo('#aboutMe');
  }
});

$(window).on('load', function() {
	$(".loader").fadeOut("slow");
  window.sr = ScrollReveal();
  sr.reveal('.me', {
    delay: 500,
    duration: 500,
    distance: '10vh'
  }, 100);
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
        slideBy: 1
      },
      480: {
        items: 2,
        slideBy: 2
      },
      840: {
        items: 3,
        slideBy: 3
      }
    }
  });
});
