$(function() {
    var header = $(".navbar");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("navbar-scroll");
        } else {
            header.removeClass("navbar-scroll");
        }
    });
  
});