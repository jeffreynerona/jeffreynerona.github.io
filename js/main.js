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
var active = 'a';

function expand(x) {
  if(active != x) {
    $("#"+active).animate({
              height: 0,
          }, 500).removeClass('expand');
    active = x;
    $('#'+x).addClass('expand').animate({
              height: 500,
          }, 500);
  }
}
