const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', function() {
    burgerMenu.classList.toggle('show');
});
