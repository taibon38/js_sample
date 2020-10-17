$(function() {
  $("#nav").hide();
  $(window).on("mousemove", showNaviArea);
});
function showNaviArea(e) {
  if($("#nav").is(':hidden') && e.clientY < 30) {
    $("#nav").slideDown(500);
  } else if($("#nav").is(':visible') && e.clientY >= 30){
    $("#nav").slideUp(500);
  }
}
