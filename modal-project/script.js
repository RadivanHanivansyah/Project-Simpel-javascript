const silang = document.querySelector('.close');
const blend = document.querySelector('.blend');
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const textModal = document.querySelector('h2');
console.log(silang);

openModal.addEventListener('click', function () {
    modal.classList.toggle('border-t-[20px]');
    modal.classList.add('border-b-[20px]');
    blend.classList.remove('hidden');
    silang.classList.remove('hidden');
    openModal.classList.add('hidden');
    textModal.classList.replace('sm:text-5xl', 'sm:text-3xl');
    textModal.classList.replace('-translate-y-8', '-translate-y-4');
})
silang.addEventListener('click', function () {
    modal.classList.toggle('border-t-[20px]');
    modal.classList.toggle('border-b-[20px]');
    blend.classList.toggle('hidden');
    silang.classList.toggle('hidden');
    openModal.classList.toggle('hidden');
    textModal.classList.replace('sm:text-3xl', 'sm:text-5xl');
    textModal.classList.replace('-translate-y-4', '-translate-y-8');
})