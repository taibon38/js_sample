$(function() {
  var imageArea = $("#imageArea");
  for(var i=1; i<=5; i++) {
    imageArea.append("<img src='images/flower" + i + ".jpg'>");
  }

  $("#next").on("click", function() {
    if(parseInt(imageArea.css("left")) > -800) {
      toDisabled();
      imageArea.animate({ "left" : "-=200px" }, "fast", "linear", toEnabled);
    }
  });

  $("#prev").on("click", function() {
    if(parseInt(imageArea.css("left")) < 0) {
      toDisabled();
      imageArea.animate({ "left" : "+=200px" }, "fast", "linear", toEnabled).animate({ "left" : "+=200px" }, "fast", "linear", toEnabled);//-400px戻る（animateを２つつなげているため）
    }
  });
});

function toDisabled() {
  $("#prev, #next").attr("disabled", "disabled"); //disabledを追加
}//スライドショーが完了するまでは押せないようにする。
function toEnabled() {
  $("#prev, #next").removeAttr("disabled");//disabledを削除
}