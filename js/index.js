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

$(window).on('load', function() {
	$(".loader").fadeOut("slow");
  window.sr = ScrollReveal();
  sr.reveal('.me', {
    delay: 500,
    duration: 500,
    distance: '10vh'
  }, 100);
});
