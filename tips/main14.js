$(function(){
  $("#left,#right").on("click", openDoor);
});
function openDoor() {
  $("#left").animate({"left" : "-200px"}, 400);
  $("#right").animate({"left" : "400px"}, 400);
}