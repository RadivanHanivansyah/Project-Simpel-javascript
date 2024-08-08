const data = [
    {
        img: './img/img-1.png',
        name: 'Slick Sneakers',
        price: 79.9,
        imgStar: './img/star-1.png',
        numberReview: 31

    },
    {
        img: './img/img-2.png',
        name: 'Stride Flex',
        price: 89.99,
        imgStar: './img/star-2.png',
        numberReview: 40
    },
    {
        img: './img/img-3.png',
        name: 'Luxe Step',
        price: 129.99,
        imgStar: './img/star-3.png',
        numberReview: 50
    },
    {
        img: './img/img-4.png',
        name: 'AeroGrip Pro',
        price: 99.99,
        imgStar: './img/star-4.png',
        numberReview: 70
    }
];

let left = document.querySelector('.left');
let right = document.querySelector('.right');
let img = document.querySelector('.img-shoes');
let namaSepatu = document.querySelector('.name');
let price = document.querySelector('.price');
let reviewStar = document.querySelector('.star');
let reviewtotal = document.querySelector('.number-review');
let orderArray = 0;

function showData() {
    let arrData = data[orderArray];
    img.src = arrData.img;
    namaSepatu.textContent = arrData.name;
    price.textContent = '$' + arrData.price;
    reviewStar.src = arrData.imgStar;
    reviewtotal.textContent = arrData.numberReview + ' ' + 'Reviews(s)';
}
left.addEventListener('click', function () {
    --orderArray;
    if (orderArray < 0) {
        orderArray = data.length;
    }
    showData();
})
right.addEventListener('click', function () {
    orderArray++;
    if (orderArray > data.length) {
        orderArray = 0;
    }
    showData();
})
window.addEventListener('DOMContentLoaded', function () {
    showData();
})
