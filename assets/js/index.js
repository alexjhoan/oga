$(window).on('load', function () {
  $('body').css('opacity', '1');
});

let offset

if (screen.width > 768){
  offset = 200
} else {
  offset = 0
}

new WOW({offset:offset, scrollContainer: null}).init()

$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    margin:0,
    nav:true,
})

$('.owl-project').owlCarousel({
    loop:true,
    items:1,
    margin:0,
    nav:true,
})

$('.owl-zbanner').owlCarousel({
    loop:true,
    items:1,
    margin:0,
    nav:true,
})

$(document).ready(function() {
  $('#header').load('components/header.html');
  $('#contact').load('components/contact.html');
  $('#sponsors').load('components/sponsors.html');
  $('#precontact').load('components/precontact.html');
  $('#footer').load('components/footer.html');
});

$(document).ready(function() {

  /* This is basic - uses default settings */

  $("a#single_image").fancybox();

  /* Using custom settings */

  // $("a#inline").fancybox({
  //   'hideOnContentClick': true
  // });

  /* Apply fancybox to multiple items */

  // $("a.group").fancybox({
  //   'transitionIn'  :  'elastic',
  //   'transitionOut'  :  'elastic',
  //   'speedIn'    :  600,
  //   'speedOut'    :  200,
  //   'overlayShow'  :  false
  // });

});

   // Add slideup & fadein animation to dropdown
   $('.dropdown').on('show.bs.dropdown', function(e){
      var $dropdown = $(this).find('.dropdown-menu');
      var orig_margin_top = parseInt($dropdown.css('margin-top'));
      $dropdown.css({'margin-top': (orig_margin_top + 10) + 'px', opacity: 0}).animate({'margin-top': orig_margin_top + 'px', opacity: 1}, 300, function(){
         $(this).css({'margin-top':''});
      });
   });
   // Add slidedown & fadeout animation to dropdown
   $('.dropdown').on('hide.bs.dropdown', function(e){
      var $dropdown = $(this).find('.dropdown-menu');
      var orig_margin_top = parseInt($dropdown.css('margin-top'));
      $dropdown.css({'margin-top': orig_margin_top + 'px', opacity: 1, display: 'block'}).animate({'margin-top': (orig_margin_top + 10) + 'px', opacity: 0}, 300, function(){
         $(this).css({'margin-top':'', display:''});
      });
   });
