// Demonstrates one way to make an element flash. I'd probably use 
// setTimeout or requestAnimationFrame in the future. 

(function() {
  var flasherInterval = 0,
    $flasher = $('#flasher');

  $('#win').on('click', function() {
    if (!flasherInterval) {
      flasherInterval = setInterval(function() {
        $flasher.toggleClass('hidden');
      }, 250);
    }
  });

  $('#restart').on('click', function() {
    console.log(flasherInterval);
    clearInterval(flasherInterval);
    if (!$flasher.hasClass('hidden')) {
      $flasher.toggleClass('hidden');
    }
    flasherInterval = 0;
  });
}());