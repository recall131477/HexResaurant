$(document).ready(function(){
  $(".header .showmenu").click(function(){
    $(".header ul").toggleClass('open');
    $(".header .showmenu").toggleClass('click');
  });
});