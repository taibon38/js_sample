$(function() {
  // メニューをすべて隠す
  $(".menu ul").hide();
  // 閉じるボタンをすべて隠す
  $(".menu img[name='close']").hide();
  $(".menu img").on("click", visibleChange);
});
function visibleChange() {
  // クリックされたメニューを展開／折り畳みする
  $(this).parent().children().toggle();
}
