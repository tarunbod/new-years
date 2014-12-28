$(document).ready(function() {
  $("body").on("touchstart", function(e) {
    e.preventDefault();
  });
  $("img").on("webkitAnimationEnd", function() {
      $("p, h1").animate({opacity:1});
  });
});
