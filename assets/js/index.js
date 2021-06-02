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

$(document).ready(function() {
  $('#header').load('components/header.html');
  $('#contact').load('components/contact.html');
  $('#sponsors').load('components/sponsors.html');
  $('#precontact').load('components/precontact.html');
  $('#footer').load('components/footer.html');
});
