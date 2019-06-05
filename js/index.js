

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
      $('header').addClass("sticky");
    }
    else {
      $('header').removeClass("sticky");
    }
  });



  (function($) {
    "use strict";
  
    $(".bar").each(function() {
      var $bar = $(this),
        $pct = $bar.find(".pct"),
        data = $bar.data("bar");
  
      setTimeout(function() {
        $bar.css("background-color", data.color).animate(
          {
            width: $pct.html()
          },
          data.speed || 2000,
          function() {
            $pct.css({
              color: data.color,
              opacity: 1
            });
          }
        );
      }, data.delay || 0);
    });
  })(jQuery);

  var typed = new Typed('#typed', {
    strings: ['Designer', 'Developer'],
    typeSpeed: 90,
    backSpeed: 30,
    smartBackspace: true, // this is a default
    loop: true
  });