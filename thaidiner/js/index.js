// let hide = document.getElementBy("hide");
// let show = document.getElementById("show");

// hide.onclick = function() {
//     show.style.visibility = "visible";
//     hide.style.display = "none";
// }
function f1() {
    alert("f1 called");

window.onload=function(){
document.getElementById('starters').onclick = function fun(){
    alert('test');
    f1();
}
}};
$(document).ready(function() {
    $("nav").prepend('<div id="responsive-nav" style="display:none">Menu</div>');
    $("#responsive-nav").on("click", function() {
      $("nav ul").slideToggle();
    });
  
    $(window).resize(function() {
      if ($(window).innerWidth() < 768) {
        $("nav ul li").css("display", "block");
        $("nav ul").hide();
        $("#responsive-nav").show();
      } else {
        $("nav ul li").css("display", "inline-block");
        $("nav ul").show();
        $("#responsive-nav").hide();
      }
    });
  
    $(window).resize();
  });