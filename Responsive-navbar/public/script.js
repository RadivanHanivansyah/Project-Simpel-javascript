const humbergur = document.querySelector('.humbergur img');
const navbar = document.querySelector('.navbar-toogle');
console.log(navbar);
humbergur.addEventListener('click', function () {
    humbergur.classList.toggle('rotate-90');
    navbar.classList.toggle('opacity-0');
})
navbar.addEventListener('mouseout', function (e) {
    setTimeout(() => {
        humbergur.classList.remove('rotate-90');
        navbar.classList.add('opacity-0');
    }, 4000);
})