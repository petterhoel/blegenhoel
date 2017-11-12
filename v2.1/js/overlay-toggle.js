// 1. hide overlay
$("ul.overlay").hide();
// 2. When button pressed
$("button.info").click(function(){
  //2.1 Show/hide overlay
    $(this).parent(".caption").prev(".image-wrapper").children("ul.overlay").slideToggle(250); 
});