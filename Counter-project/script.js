let tombol = document.querySelector('.tombol');
let cetakAngka = document.querySelector('.angka')
let angka = 0;
tombol.addEventListener('click', function (event) {
    if (event.target.classList.contains("reset")) {
        angka = 0;
    } else if (event.target.classList.contains("plus")) {
        ++angka;
    } else {
        --angka;
    }
    if (angka < 0) {
        cetakAngka.style.color = 'red';
    } else if (angka == 0) {
        cetakAngka.style.color = 'black';
    } else {
        cetakAngka.style.color = 'green';
    }
    cetakAngka.textContent = angka;
})