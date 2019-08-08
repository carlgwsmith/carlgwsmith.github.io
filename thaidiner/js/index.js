/*CARL SCRIPT*/

let mainNav = document.getElementById('nav');
let navBarToggle = document.getElementById('toggler');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('navactive');
});

