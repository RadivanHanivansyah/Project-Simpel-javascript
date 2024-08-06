const person = [
    {
        gambar: './img/person-2.png',
        nama: 'John',
        job: 'Data analyst',
        info: 'Halo, nama saya John, seorang Data Analyst dengan pengalaman lebih dari 5 tahun di bidang analisis data dan visualisasi. Saya ahli dalam menggunakan berbagai alat analisis data seperti Python, R, dan SQL untuk menggali wawasan berharga dari data kompleks. Dengan latar belakang di bidang statistik dan ilmu komputer, saya berkomitmen untuk membantu perusahaan mengambil keputusan berbasis data yang lebih baik.'
    },
    {
        gambar: './img/person-3.png',
        nama: 'Andreas',
        job: 'Frontend developer',
        info: 'Halo, nama saya Andreas, seorang Front End Developer dengan pengalaman lebih dari 4 tahun dalam pengembangan web. Saya mahir menggunakan teknologi seperti HTML, CSS, JavaScript, dan framework modern seperti React dan Vue.js untuk menciptakan antarmuka pengguna yang responsif dan menarik. Saya bersemangat untuk membuat pengalaman pengguna yang luar biasa dan selalu mengikuti perkembangan terbaru dalam desain dan teknologi web.'
    },
    {
        gambar: './img/person-1.jpeg',
        nama: 'Mella',
        job: 'Backend developer',
        info: 'Halo, nama saya Mella, seorang Back End Developer dengan pengalaman lebih dari 5 tahun dalam pengembangan aplikasi server-side. Saya memiliki keahlian dalam bahasa pemrograman seperti Python, Java, dan PHP, serta berpengalaman dengan berbagai framework seperti Django dan Spring. Fokus saya adalah memastikan performa, keamanan, dan skalabilitas aplikasi untuk mendukung kebutuhan bisnis yang dinamis.'
    },
    {
        gambar: './img/person-4.jpg',
        nama: 'Anita',
        job: 'IT Supoort',
        info: 'Halo, nama saya Anita, seorang IT Support dengan pengalaman lebih dari 5 tahun dalam memberikan dukungan teknis kepada pengguna. Saya ahli dalam troubleshooting, pemeliharaan sistem, dan manajemen jaringan, serta terbiasa bekerja dengan berbagai sistem operasi dan perangkat keras. Saya berdedikasi untuk memastikan setiap masalah teknis diselesaikan dengan cepat dan efisien demi kelancaran operasional perusahaan.'
    }
]
let gambar = document.querySelector('img');
let nama = document.querySelector('.nama');
let job = document.querySelector('.job');
let info = document.getElementById('info');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let random = document.querySelector('.random');

let orderArray = 0;

function showPerson() {
    let arr = person[orderArray];
    gambar.src = arr.gambar;
    nama.textContent = arr.nama;
    job.textContent = arr.job;
    info.textContent = arr.info;
}
left.addEventListener('click', function () {
    --orderArray;
    if (orderArray < 0) {
        orderArray = person.length - 1;
    }
    showPerson();
})
right.addEventListener('click', function () {
    orderArray++;
    if (orderArray > person.length - 1) {
        orderArray = 0;
    }
    showPerson();
})
random.addEventListener('click', function () {
    orderArray = Math.floor((Math.random() * person.length) + 0);
    console.log(orderArray);
    showPerson();
})
window.addEventListener('DOMContentLoaded', function () {
    showPerson();
})


