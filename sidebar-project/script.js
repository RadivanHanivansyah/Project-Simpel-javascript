const menuBar = document.querySelector('.humbergur img');
const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.close');
menuBar.addEventListener('click', function () {
    // sidebar.classList.toggle('opacity-0');
    sidebar.classList.toggle('-translate-x-full');
    menuBar.classList.add('cursor-pointer');
})
close.addEventListener('click', function () {
    if (window.innerWidth > 768) {
        sidebar.classList.toggle('-translate-x-full');
    }
})
