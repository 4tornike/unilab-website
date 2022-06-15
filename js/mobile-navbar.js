var mobile = window.matchMedia('(max-width: 375px)');

if(mobile.matches) {

    var hamburger = document.getElementById('hamburger');
    var navbar = document.getElementById('navbar');
    var close = document.getElementById('close');
    
    hamburger.addEventListener('click', (e) => {
        navbar.classList.toggle('active');
    })
    close.addEventListener('click',() => {
        navbar.classList.toggle('active');
    })

}