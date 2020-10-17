$(function() {
  $("input[type='text']").on("focus", function() {
    $(this).css("background-color", "pink");
  });
  $("input[type='text']").on("blur", function() {
    $(this).css("background-color", "white");
  });
});