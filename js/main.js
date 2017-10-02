/*Loader*/
setTimeout(
  function() {
    $(document).ready(function() {
    $('.loader-wrap').addClass('hide');
    $('.loader').addClass('remove');
  });
}, 1500);

var title = 'FULL <span class="dev">$</span>TACK <span class="dev">DEV</span>ELOPER<span class="blinking-cursor">|</span>';

/*Konami code*/
cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  $('#name').html('Send Nudes');
  $('#name').addClass('enlarge');
  setTimeout(
    function() {
      $('#name').html(title);
      $('#name').removeClass('enlarge');
  }, 1000);
});

/*Site Navigation*/
$('#about').click(function(){
  expand('about-section');
  return false; 
});
$('#portfolio').click(function(){
  expand('portfolio-section');
  return false;
});
$('#contact').click(function(){
  expand('contact-section');
  return false;
});
$('#close').click(function(){
  close();
  return false;
});

function expand(x) {
  bgrun = false;
  var buttonLink = x.slice(0, x.length-8);
  var ht = window.innerHeight;
  $('#name').html(buttonLink.toUpperCase());
  setTimeout(function(){
      $('#'+x).addClass('expand').animate({
            height: ht
      }, 300);
      $('header').addClass('fixed').animate({
        top: "0px"
      },300);
      $('nav').addClass('remove');
    },10);
  
        $('#name').addClass('namefont');
      $('#titles').addClass('titlefont');
  $('.content').addClass('offset');
  setTimeout(function(){
      $('#close').addClass('expand');
    },300);
}

function close() {
  $('#close').removeClass('expand');
  $('#name').html(title);
  $('#name').removeClass('namefont')
  $('#titles').removeClass('titlefont')
  $('.content').removeClass('offset').animate({
            height: 0
  }, 500);
  setTimeout(function(){
      $('.content').removeClass('expand');
    },500);
  $('nav').removeClass('remove');
  $('header').removeClass('fixed');
  $('header').css({
    top: 'auto'
  },500);
}