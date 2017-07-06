
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
var active = 'none';

function expand(x) {
  var buttonLink = x.slice(0, x.length-8);
  var ht = window.innerHeight - 172;
  if(active=='none') {
    $('#'+buttonLink).addClass('bluize');
    $('#'+x).addClass('expand').animate({
              height: ht,
          }, 500);
    active = x;
  }
  else if(active != x) {
    var toRemove = active.slice(0, active.length-8);
    $('#'+buttonLink).addClass('bluize');
    $('#'+toRemove).removeClass('bluize');
    $("#"+active).animate({
              height: 0,
          }, 500);
    setTimeout(function(){
      $("#"+active).removeClass('expand');
      $('#'+x).addClass('expand').animate({
              height: ht,
          }, 500);
    active = x;
    },500);

  }
  else {
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
  }
}
