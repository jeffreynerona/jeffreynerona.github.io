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

$('#profile').click(function(){ expand('profile-section'); return false; });
$('#portfolio').click(function(){ expand('portfolio-section'); return false; });
$('#contact').click(function(){ expand('contact-section'); return false; });
var active = 'none';

function expand(x) {
  window.scrollTo(0,1);
  if(active=='none') {
    $("#"+active).removeClass('expand');
      $('#'+x).addClass('expand').animate({
              height: 500,
          }, 500);
    active = x;
  }
  else if(active != x) {
    $("#"+active).animate({
              height: 0,
          }, 500);
    setTimeout(function(){
      $("#"+active).removeClass('expand');
      $('#'+x).addClass('expand').animate({
              height: 500,
          }, 500);
    active = x;
    },500);
  }
  else {
    $("#"+active).animate({
              height: 0,
          }, 500).delay(500);
    setTimeout(function(){
      $("#"+x).removeClass('expand');
    },500);
    active='none';
  }
}
