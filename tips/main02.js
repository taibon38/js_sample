﻿ $(function() {
   $("#password").on("keyup", inputCheck);
 });
 function inputCheck() {
   var errors = [];
   var password = $("#password").val();
 
   if(password.length < 8 || password.length > 12) {
     errors.push("パスワードは8文字以上12文字以内で入力して下さい");
   }
   if(password.match(/[^0-9a-zA-Z]/)) {
     errors.push("パスワードは半角英数字のみ使えます");
   }
   if(!(password.match(/[0-9]/) && password.match(/[a-z]/) && password.match(/[A-Z]/))) {
     errors.push("パスワードの強度が低いです");
   }
 
   $("#message").html(errors.join("<br>"));
 }
