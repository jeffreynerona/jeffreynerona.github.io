setTimeout(
  function() {
    $(document).ready(function() {
    $('.loader-wrap').addClass('hide');
    $('.loader').addClass('remove');
  });
    }, 2000);
  cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
    $('#name').html('Send Nudes');
    $('#name').addClass('enlarge');
    setTimeout(
      function() {
        $('#name').html('Jefrey Nerona');
        $('#name').removeClass('enlarge');
    }, 1000);
  });