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
}
