$(function(){
  $("#btn").on("click", convert);
});
function convert(){
  var price = $("#price").val();
  while (price.match(/([0-9]+)([0-9]{3})/)) {
    price = price.replace(/([0-9]+)([0-9]{3})/, "$1,$2");
  }
  $("#price").val(price);
}