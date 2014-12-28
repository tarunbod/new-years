$(document).ready(function() {
  $("img").on("webkitAnimationEnd", function() {
      $("p, h1").animate({opacity:1});
  });
});
