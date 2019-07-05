

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


  function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.getElementById('status').innerHTML = "Name cannot be empty";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.getElementById('status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.getElementById('status').innerHTML = "Email format invalid";
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.getElementById('status').innerHTML = "Subject cannot be empty";
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.getElementById('status').innerHTML = "Message cannot be empty";
      return false;
  }
  document.getElementById('status').innerHTML = "Sending...";
  document.getElementById('contact-form').submit();

  }