$(document).ready(function(){
  window.onscroll = function() {myFunction()};
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      console.log(window.pageYOffset)
    } else {
      header.classList.remove("sticky");
    }
  };
  $(".cl-icon-menu").click(function(){
    $(".cl-menu-popover").css("visibility","visible")
    $(".cl-close").addClass("active")
    $(".cl-icon-menu").css("visibility","hidden")
    $(".cl-close").css("visibility","visible")
    $(".cl-icon-menu").addClass("active2")
  })
  $(".cl-close").click(function(){
    $(".cl-menu-popover").css("visibility","hidden")
    $(".cl-close").removeClass("active")
    $(".cl-close").css("visibility","hidden")
    $(".cl-icon-menu").css("visibility","visible")
    $(".cl-icon-menu").removeClass("active2")
  })
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y >= 2300) {
    $(document.getElementsByClassName('cl-logo-descripstion')).fadeIn();
  } else {
    $(document.getElementsByClassName('cl-logo-descripstion')).fadeOut();
  }
});