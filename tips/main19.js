$(function() {
  var photoFrame = $("#photoFrame");
  for(var i=1; i<=5; i++) {
    photoFrame.find(".imageArea").append("<img src='images/flower" + i + ".jpg'>");
  }

  // 5秒置きに次の画像へ移動
  setInterval(slide, 5000);	
  // 以降の処理は削除
});

function slide() {
  $("#photoFrame").find(".imageArea").animate(
  {"left" : "-=200px"}, "fast", "linear", next);
}

currentIndex = 1;

function next() {
  // 隠れているほうのimageAreaのインデックスを算出
  var otherIndex = 1 - currentIndex;
  if(parseInt($("#imageArea" + currentIndex).css("left")) == -800) {
    // 末尾の画像を表示したときの処理
    // 隠れている方のimageAreaのleftプロパティをphotoFrameの右側に設定
    $("#imageArea" + otherIndex).css("left", "200px");
  }
  else if(parseInt($("#imageArea" + currentIndex).css("left")) == -1000) {
    // imageAreaが切り替わったタイミングでカレントインデックスを変更
    currentIndex = otherIndex;
  }	
  // toEnabled();	 削除
}
// その他の関数は削除