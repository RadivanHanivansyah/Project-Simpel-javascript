//script rgb
const container = document.querySelector('.hex');
const tombol = document.querySelector('button');
tombol.addEventListener('click',function(){
const max = Math.max(255);
const min = Math.min(0);
const red = Math.floor((Math.random() * max) + min);
const green = Math.floor((Math.random() * max) + min);
const blue = Math.floor((Math.random() * max) + min);
document.body.style.backgroundColor = "rgb("+red+","+green+", "+blue+")";
container.innerHTML = "rgb("+red+", "+green+", "+blue+");"
tombol.style.fontWeight = "900";
})