$(function() {
  var imageArea = $("#imageArea");
  for(var i=1; i<=5; i++) {
    imageArea.append("<img src='images/flower" + i + ".jpg'>"); //imgタグにもCSSを適応してサイズ指定している。
  }

  $("#next").on("click", function() {
    if(parseInt(imageArea.css("left")) > -800) {
      imageArea.animate({ "left" : "-=200px" }, "fast", "swing");
    }
  });

  $("#prev").on("click", function() {
    if(parseInt(imageArea.css("left")) < 0) {
      imageArea.animate({ "left" : "+=200px" }, "fast", "linear");
    }
  });
});
