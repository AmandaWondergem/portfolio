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
      $(lastTarget).find('iframe').attr("src",$(lastTarget).find('iframe').attr("src"));
    }
    $(target).toggleClass(toggleClass);
  });
  $('.toggle-link').click(function(){
    $($(this).attr("data-toggle-class")).toggleClass("zeroHeight");
    $(this).toggleClass("open");
      if($(this).hasClass("open")){
      $("html, body").animate({ scrollTop: $($(this).attr("data-toggle-class")).offset().top }, 800);
    }
  });
  $('.toggle-link').each(function(){
    $($(this).attr("data-toggle-class")).addClass("maxHeight");
  })
})

//$(function(){
//  if (navigator.userAgent.match(/iPad/i))
//  {
//      console.log("mobile");
//      $(".overlay").addClass("device");
//  } else if(navigator.userAgent.match(/Android|webOS|iPhone|iPod|Blackberry/i))
//  {
//      console.log("mobile");
//      $(".overlay").addClass("device");
//  } else {
//      $(".overlay").removeClass("device");
//  }
//})
