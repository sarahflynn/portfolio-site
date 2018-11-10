const header = document.getElementById('header');
const nav = document.getElementById('nav');
const about = document.getElementById('about');
const checked = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

function makeFixed() {
    if(window.pageYOffset >= header.offsetHeight) {
        nav.classList.add('fixed');
        about.classList.add('aboutOffset');
        
    } else if (header.offsetHeight > window.pageYOffset) {
        nav.classList.remove('fixed');
        about.classList.remove('aboutOffset')
    }
}

checked.addEventListener( 'change', function() {
    if(this.checked) {
        navbar.classList.add('show-navbar');
    } else {
        navbar.classList.remove('show-navbar');
    }
});

window.onscroll = function() {
    makeFixed();
}