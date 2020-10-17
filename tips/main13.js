$(function(){
  $(window).on("scroll", peelOff);
});
function peelOff() {
  var scroll = $(window).scrollTop();
  var height = $("#over img").height();
  $("#over").css("height", height-scroll);
}