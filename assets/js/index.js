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
  $("a.single_image").fancybox();

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


// --------------------------form-------------------------------

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function dataSubmited(data) {
  const requestOptions = {
    method: 'POST',
    body: data,
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch("https://www.infocasas.com.uy?mid=formulario&func=ajax_save&json=1", requestOptions)
  .then((json) => {
    setTimeout(()=>{
      if (json.status === 200) {
        $('#formSuccess').fadeIn();
      } else {
        $('#formError').fadeIn();
      }
      $('#formSending').hide();
    }, 2000)
  })
  .catch(error => {
    console.log('error', error);
    setTimeout(() => {
      $('#formSending').hide();
      $('#formError').fadeIn();
    }, 100)
  });
}

function submited(event) {
  const form = document.querySelector('#contactForm')
  let utm_source_val = ''
  const utm_campaign_val = getParameterByName('utm_campaign');
  if (url.includes('atlas')) {
    utm_source_val = "bancoatlas"
  } else {
    utm_source_val = getParameterByName('utm_source');
  }
  const data = JSON.stringify({
    nombre: form.name.value,
    apellido: "",
    email: form.email.value,
    telefono: form.phone.value,
    tel: form.phone.value,
    source: 2,
    utm_source: utm_source_val != '' ? utm_source_val : "web_oga",
    utm_campaign: utm_campaign_val != '' ? utm_campaign_val : "",
    extra: form.consult.value,
    IDpais: 2,
    IDform: 583
  })
  event.preventDefault()
  if (!form.checkValidity()) {
    event.stopPropagation()
  }else{
    dataSubmited(data)
    setTimeout(()=>{
      $(form).fadeOut();
      $('#formSending').fadeIn();
    },300)
  }
  form.classList.add('was-validated')
}
