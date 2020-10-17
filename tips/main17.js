$(function() {
  var imageArea = $("#imageArea");    // スライドショー表示エリア
  var naviArea = $("#naviArea");      // サムネイル画像表示エリア

  // スライドショー表示エリアとサムネイル画像表示エリアの両方に画像をロード
  for(var i=1; i<=5; i++) {
    imageArea.append("<img src='images/flower" + i + ".jpg'>");
    naviArea.append("<img src='images/flower" + i + ".jpg'>");
  }

  // サムネイル画像クリック時の処理
  $("#naviArea img").on("click", moveImageArea);
});
function moveImageArea() {
  var imageArea = $("#imageArea");
  // 選択されたサムネイル画像のソースを取得
  var src = $(this).attr("src");
  // スライドショー表示エリア内で、選択したサムネイルと同じ画像の表示位置を取得
  var targetPosition = imageArea.find("img[src='" + src + "']").position().left * -1;
  // 対象画像の表示位置までアニメーションで移動
  imageArea.animate({"left" : targetPosition }, 500);
}