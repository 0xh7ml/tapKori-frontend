let popover = document.getElementById('popover');
let toggleMenu = document.querySelector('.menu');
popover.addEventListener('click', () => {
    toggleMenu.classList.toggle('active');
});