$(document).ready(function(){

  // Navbar transparent effect
  $(".navbar-toggler").click(function(e){
    if($("nav").hasClass('navbar-light')){
      if($(window).scrollTop() < 30){
        $("nav").addClass('navbar-dark').removeClass('navbar-light');
      }
    } else {
      $("nav").removeClass('navbar-dark').addClass('navbar-light');
    }
  });
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 30) {
        $(".nav-transparent").removeClass("navbar-dark").addClass("navbar-light");
    } else {
      $(".nav-transparent").removeClass("navbar-light").addClass("navbar-dark");
    }
  });

  //Smooth scroll
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

});
