const plusMinus = document.getElementsByClassName('plus-minus');
const answer = document.getElementsByClassName('answer');

for (let i = 0; i < plusMinus.length; i++) {
    plusMinus[i].addEventListener('click', function (e) {
        let decrease = i;
        let increase = i;
        ++increase;
        decrease--;
        if (decrease < 0) {
            decrease = plusMinus.length - 1;
        }
        if (increase > plusMinus.length - 1) {
            increase = 0;
        }
        e.target.nextElementSibling.classList.remove('hidden');
        plusMinus[increase].nextElementSibling.classList.add('hidden');
        plusMinus[decrease].nextElementSibling.classList.add('hidden');
    })
}