$(function() {
  $("#clothes img").on("click", changeClothes);
});
function changeClothes() {
  $("#avatar img:not(#human)").remove();
  $("#avatar").append($(this).clone());
}