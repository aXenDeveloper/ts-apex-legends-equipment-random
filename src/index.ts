import './styles/style.scss';
import 'tippy.js/dist/tippy.css';
import { getSettings } from './querySelectors';
import getRandomItems from './functions/getRandomItems';
import { bodyShields, helmets, legends, backpacks } from './data/data';
import getRandomWeapon from './functions/getRandomWeapon';
import tippy from 'tippy.js';
import { weapons } from './data/weapons';

getSettings?.addEventListener('submit', e => {
  e.preventDefault();

  console.log(getRandomItems(legends));
  console.log(getRandomItems(bodyShields));
  console.log(getRandomItems(helmets));
  console.log(getRandomItems(backpacks));

  console.log(getRandomWeapon(weapons));
});

tippy('#bangalore_tooltip', {
  content: 'Bangalore'
});
