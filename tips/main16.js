$(function() {
  $("#tabArea .tab").on("click", tabChange);
});
function tabChange() {
  // タブと本文の初期化
  $("#tabArea .tab").removeClass("active");
  $("#content div").hide();	

  // タブと本文の有効化
  $(this).addClass("active");
  var id = $(this).attr("id");
  $("#content-" + id).show();
}