
$(window).on("load", function() {
   $(".loader").fadeOut("slow");

   $("#head").show();
   $(".pro").show();
   $(".skills").show();
   $(".projects").show();
   $(".contact").show();
   $("#foot").show();
   
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}