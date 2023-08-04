$("document").ready(function(){

  $(".unisex, .women, .men").hide()

    $("#unisex").click(function(){
      $(".women, .men").hide()
      $(".unisex").slideDown()
    
    })
  $("#women").click(function(){
    $(".unisex, .men").hide()
    $(".women").slideDown()
  
  })
    $("#men").click(function(){
      $(".unisex, .women").hide();
      $(".men").slideDown();
    })

//popout: click outside div to close -jQ
$(document).mouseup(function (e) {

  if ($(e.target).closest(".popout-box").length=== 0) {
    
  $(".popout-container").fadeOut(300);
  }
  });
  
//popin
$(".Eleganza").click(function(){
  $(".Eleganza-popout-container").fadeIn(100);
}) 
//popin
$(".Florence").click(function(){
  $(".Florence-popout-container").fadeIn(100);
})
//popin
$(".Fiore").click(function(){
  $(".Fiore-popout-container").fadeIn(100);
}) 
//popin
$(".Memoria").click(function(){
  $(".Memoria-popout-container").fadeIn(100);
}) 
//popin
$(".Attraente").click(function(){
  $(".Attraente-popout-container").fadeIn(100);
}) 
//popin
$(".Prestigio").click(function(){
  $(".Prestigio-popout-container").fadeIn(100);
}) 




})

