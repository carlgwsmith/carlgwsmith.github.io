// let hide = document.getElementBy("hide");
// let show = document.getElementById("show");

// hide.onclick = function() {
//     show.style.visibility = "visible";
//     hide.style.display = "none";
// }


function showStuff(element)  {
    var tabContents = document.getElementsByClassName('tabContent');
    for (var i = 0; i < tabContents.length; i++) { 
        tabContents[i].style.display = 'none';
    }

    // change tabsX into tabs-X in order to find the correct tab content
    var tabContentIdToShow = element.id.replace(/(\d)/g, '-$1');
    document.getElementById(tabContentIdToShow).style.display = 'block';
}