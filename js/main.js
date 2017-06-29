/*Nav on Scroll*/
$(document).ready(function() {
  var h = window.innerHeight - $('nav').height();
  $(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > h ) {
      $('nav').addClass('navbar-fixed');

    }
    if ($(window).scrollTop() < h + 1 ) {
      $('nav').removeClass('navbar-fixed');

    }
  });
});

/* Smooth Scroll */
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});

$(function(){
  // Bind the swipeleftHandler callback function to the swipe event on div.box
  $( ".site-wrap" ).on( "swipeleft", swipeleftHandler );
  $( ".site-wrap" ).on( "swiperight", swiperightHandler );
  // Callback function references the event target and adds the 'swipeleft' class to it
  function swipeleftHandler( event ){
    document.getElementById('nav-trigger').checked = true;
  }
  function swiperightHandler( event ){
    document.getElementById('nav-trigger').checked = false;
  }
});
