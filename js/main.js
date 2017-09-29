/*Loader*/
setTimeout(
  function() {
    $(document).ready(function() {
    $('.loader-wrap').addClass('hide');
    $('.loader').addClass('remove');
  });
}, 1500);

/*Konami code*/
cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  $('#name').html('Send Nudes');
  $('#name').addClass('enlarge');
  setTimeout(
    function() {
      $('#name').html('Jefrey Nerona');
      $('#name').removeClass('enlarge');
  }, 1000);
});

$('#profile').click(function(){
  expand('profile-section');
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
  $('#titles').html('Jeffrey Nerona')
  setTimeout(function(){
      $('#'+x).addClass('expand').animate({
            height: ht
      }, 300);
      $('header').addClass('fixed').animate({
        top: "0px"
      },300);
      $('nav').addClass('remove');
    },10);
  

  $('.content').addClass('offset');
  setTimeout(function(){
      $('#close').addClass('expand');
    },300);
}

function close() {
  bgrun = true;
  animate();
  $('#close').removeClass('expand');
  $('#name').html("Jeffrey Nerona");
  $('#titles').html("Full Stack Developer");
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