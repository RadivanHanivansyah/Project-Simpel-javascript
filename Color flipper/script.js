//script rgb
// const container = document.querySelector('.hex');
// const tombol = document.querySelector('button');
// tombol.addEventListener('click', function () {
//     const max = Math.max(255);
//     const min = Math.min(0);
//     const red = Math.floor((Math.random() * max) + min);
//     const green = Math.floor((Math.random() * max) + min);
//     const blue = Math.floor((Math.random() * max) + min);
//     document.body.style.backgroundColor = "rgb(" + red + "," + green + ", " + blue + ")";
//     container.innerHTML = "rgb(" + red + ", " + green + ", " + blue + ");"
//     tombol.style.fontWeight = "900";
// })
//script hex
const container = document.querySelector('.hex');
const tombol = document.querySelector('button');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
tombol.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    container.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}