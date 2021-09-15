import { personalUnavailable } from "./personal.js";

const $navSection = document.querySelector('.navSection');
const $navButton = document.querySelector('.fa-bars');

$navButton.addEventListener('click', () => {
    $navSection.classList.toggle('hidden')
})

personalUnavailable();