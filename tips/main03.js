﻿ $(function() {
   $("input[name='size']").on("change", changeSize);
 });
 function changeSize() {
   $("#photo > img").removeClass();
   $("#photo > img").addClass($("input[name='size']:checked").val());
 }
