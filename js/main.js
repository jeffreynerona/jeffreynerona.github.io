
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
  var buttonLink = x.slice(0, x.length-8);
  var ht = window.innerHeight;
  $('#name').html(buttonLink.toUpperCase());
  $('#titles').html('Jeffrey Nerona')
  setTimeout(function(){
      $('#'+x).addClass('expand').animate({
            height: ht
      }, 500);
      $('header').addClass('fixed').animate({
        top: "0px"
      },500);
      $('nav').addClass('remove');
    },200);
  

  $('.content').addClass('offset');
  setTimeout(function(){
      $('#close').addClass('expand');
    },700);
}

function close() {
  $('#close').removeClass('expand');
  $('#name').html("Jeffrey Nerona");
  $('#titles').html("Web Developer | Physics Geek | Cyborg");
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
/*    
    $('#contact').removeClass('bluize');
    $('#profile').removeClass('bluize');
    $('#portfolio').removeClass('bluize');
    $("#"+active).animate({
              height: 0,
          }, 500).delay(500);
    setTimeout(function(){
      $("#"+x).removeClass('expand');
    },500);
    active='none';
    $('header').removeClass('fixed');

    $('.content').removeClass('offset');
*/
