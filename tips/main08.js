$(function() {
  // 記事全文を隠す
  $("#content").hide();
  // 先頭から20文字分抽出
  var omit = $("#content").text().slice(0, 20);
  // 省略記事表示エリアに抽出した文字列をセット
  $("#omitText").text(omit);
  $("a[rel='all']").on("click", showAll);
});
function showAll() {
  // リンクを隠す
  $(this).hide();
  // 省略記事を隠す
  $("#omitText").hide();
  // 記事全文を表示
  $("#content").show();
}
