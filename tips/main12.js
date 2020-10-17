$(function(){
  $("#topbtn").hide();
  $("#topbtn").on("click", gotoTop);
  $(window).on("scroll", showTopbtn);
});
function showTopbtn() {
  if($(window).scrollTop() > 0) {
    $("#topbtn").show();
  } else {
    $("#topbtn").hide();
  }
}
function gotoTop() {
  $("html,body").animate({ "scrollTop" : "0" }, 300);
  $("#topbtn").hide();
}