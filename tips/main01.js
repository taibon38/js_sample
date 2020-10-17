 $(function(){
   $("#sendBtn").on("click", inputCheck);
 });
 function inputCheck(){
   var errors = [];
 
   if(!$("input[name='lastname']").val()) {
     errors.push("姓を入力してください");
   }
   if (!$("input[name='firstname']").val()) {
     errors.push("名を入力してください");
   }
   if (!$("input[name='gender']:checked").val()) {
     errors.push("性別を選択してください");
   }
 
   if(errors.length > 0) {
     $("#errorArea").html(errors.join("<br>"));
   } else {
     $("form[name='frm1']").submit();
   }
}
