$(document).ready(function(){
  window.onscroll = function() {myFunction()};
  var header = document.getElementById("myHeader");
  //var sticky = header.offsetTop;
  function myFunction() {
    if (window.pageYOffset >= 100){
      header.classList.add("sticky");
      console.log(window.pageYOffset)
      console.log('sticky'+ ' ' +sticky)
    } else {
      header.classList.remove("sticky");
    }
  };
  $(".cl-icon-menu").click(function(){
    $(".cl-menu-popover").css("visibility","visible")
    $(".cl-close").addClass("activeClose")
    $(".cl-icon-menu").css("visibility","hidden")
    $(".cl-close").css("visibility","visible")
    $(".cl-icon-menu").addClass("activeMenu")
  })
  $(".cl-close").click(function(){
    $(".cl-menu-popover").css("visibility","hidden")
    $(".cl-close").css("visibility","hidden")
    $(".cl-close").removeClass("activeClose")
    $(".cl-icon-menu").css("visibility","visible")
    $(".cl-icon-menu").removeClass("activeMenu")
  })
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y >= 2200) {
    $(document.getElementsByClassName('cl-logo-descripstion')).fadeIn();
  } else {
    $(document.getElementsByClassName('cl-logo-descripstion')).fadeOut();
  }
});