$(function(){
  var lastClass = "";
  var lastTarget = "";
  $('.popup-button').on('click',function(e){
    e.stopPropagation();
    var target = $(this).data('trigger');
    var toggleClass = $(this).data('class');   
    lastClass = toggleClass || lastClass;
    lastTarget = target || lastTarget;
    if($(this).hasClass('background')){
      $(lastTarget).toggleClass(lastClass);
      $(".background").hide();
      $(lastTarget).find('iframe').attr("src",$(lastTarget).find('iframe').attr("src"))
    }
    else if(!$(target).hasClass(toggleClass)){
      $("body").css("overflow","hidden")
      $(".background").show();
    }
    else {
      $(".background").hide();
      $("body").css("overflow","initial")
      $(lastTarget).find('iframe').attr("src",$(lastTarget).find('iframe').attr("src"))
    }
    $(target).toggleClass(toggleClass);
  });
})