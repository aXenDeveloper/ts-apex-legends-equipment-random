import '../styles/style.scss';
import randomNumber from './functions/randomNumber';

const random = document.querySelector('.random');

if (random) random.innerHTML = `<div>${randomNumber(1, 10)}</div>`;
