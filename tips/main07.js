$(function() {
  $("#wall").show();
  var q = encodeURIComponent("アシアル株式会社");
  $.getJSON("http://search.twitter.com/search.json?callback=?&q=" + q, 
    function(data) {
      for(var i=0; i<data.results.length; i++) {
        $("table").append(
          "<tr>" +
          "<td><img src='" + data.results[i].profile_image_url + "'></td>" +
          "<td>@" + data.results[i].from_user + "</td>" +
          "<td>" + data.results[i].from_user_name + "</td>" +
          "<td>" + data.results[i].text + "</td>" +
          "</tr>"
        );
      }  // for文の閉じ括弧
      $("#wall").hide();
    }  // コールバック関数の閉じ括弧
  );
});
