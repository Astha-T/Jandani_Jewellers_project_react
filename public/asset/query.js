

// slider event js

$('#myCarousel').carousel({
  interval: false
});
$('#carousel-thumbs').carousel({
  interval: false
});


$('[id^=carousel-selector-]').trigger(function() {
  var id_selector = $(this).attr('id');
  var id = parseInt( id_selector.substr(id_selector.lastIndexOf('-') + 1) );
  $('#myCarousel').carousel(id);
});
// Only display 3 items in nav on mobile.
if ($(window).width() < 575) {
  $('#carousel-thumbs .row div:nth-child(4)').each(function() {
    var rowBoundary = $(this);
    $('<div class="row mx-0">').insertAfter(rowBoundary.parent()).append(rowBoundary.nextAll().addBack());
  });
  $('#carousel-thumbs .carousel-item .row:nth-child(even)').each(function() {
    var boundary = $(this);
    $('<div class="carousel-item">').insertAfter(boundary.parent()).append(boundary.nextAll().addBack());
  });
}
// Hide slide arrows if too few items.
if ($('#carousel-thumbs .carousel-item').length < 2) {
  $('#carousel-thumbs [class^=carousel-control-]').remove();
  $('.machine-carousel-container #carousel-thumbs').css('padding','0 5px');
}
// when the carousel slides, auto update
$('#myCarousel').on('slide.bs.carousel', function(e) {
  var id = parseInt( $(e.relatedTarget).attr('data-slide-number') );
  $('[id^=carousel-selector-]').removeClass('selected');
  $('[id=carousel-selector-'+id+']').addClass('selected');
});
// when user swipes, go next or previous
$('#myCarousel').swipe({
  fallbackToMouseEvents: true,
  swipeLeft: function(e) {
    $('#myCarousel').carousel('next');
  },
  swipeRight: function(e) {
    $('#myCarousel').carousel('prev');
  },
  allowPageScroll: 'vertical',
  preventDefaultEvents: false,
  threshold: 75
});
/*
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
*/

$('#myCarousel .carousel-item img').on('click', function(e) {
  var src = $(e.target).attr('data-remote');
  if (src) $(this).ekkoLightbox();
});



 // open modal function

function open_signup_popup() {
  var signupvar = document.getElementById('signupModal');
  var loginvar = document.getElementById('basicModal');
  if(signupvar.style.display == 'none')
    {
      signupvar.style.display = 'block';
  }
  loginvar.style.display = 'none';

}

function open_login_popup() {
  var signupvar = document.getElementById('signupModal');
  var loginvar = document.getElementById('basicModal');
  if(loginvar.style.display = 'none')
    {
      loginvar.style.display = 'block';
  }
  signupvar.style.display = 'none';

}
function open_otp_popup() {
  var signupvar = document.getElementById('signupModal');
  var otpvar = document.getElementById('otpModal');
  var loginvar = document.getElementById('basicModal');
  if(otpvar.style.display = 'none')
    {
      otp.style.display = 'block';
  }
  signupvar.style.display = 'none';
  loginvar.style.display = 'none';
   
}

// function close_otp() 
// {
//   window.setTimeout(function(){location.reload()},800);
// }
function double_click_login(){
  var signupvar = document.getElementById('signupModal');
  signupvar.style.display = 'none';
}

function double_click_signup(){
  var loginvar = document.getElementById('basicModal');
  loginvar.style.display = 'none';
}




// form validation
function validate(event) {
  event.preventDefault();
  //Validate each form input
  $("form input[data-required]").each(function (index) {
    var $_this = $(this);
    var $_error = $_this.next(".error");
    if ($_this.val().length == 0) {
      if ($_error.length == 0) {
        $_this.after('<p class="error">' + $_this.data("error-message") + '</p>');
      }
    } else
    $_error.remove();
  });
}


$("form").on({
  "submit": function () {
    validate(event);
  },
  "change": function () {
    validate(event);
  } });