(function(){
  'use strict';

  new WOW().init();
  var $target = $('.main');
  inView('.wow').on('enter', function(el) {
    var color = $(el).attr('data-background-color');
    $target.css('background-color', color);
    console.log("event triggered");
  });

})();
