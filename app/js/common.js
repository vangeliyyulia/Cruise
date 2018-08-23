// Normal Clicks Menu
$(function() {
    $('.hamburger').click(function() {
      $('body').toggleClass('show-nav');
       return false;
    });
    
  });
 
  // Toggle with hitting of ESC
  $(document).keyup(function(e) {
      if (e.keyCode == 27) {
     $('body').toggleClass('show-nav');
    }
  });

  $(document).ready(function() {
    $('.btn--down').click(function(){
    $('html, body').animate({scrollTop:$('.services').height() + 20}, 'slow');
    return false;
    });
});