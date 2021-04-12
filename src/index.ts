import './styles/style.scss';
import { getSettings } from './querySelectors';
import getRandomItems from './functions/getRandomItems';
import { bodyShields, helmets, legends, backpacks } from './data';

getSettings?.addEventListener('submit', e => {
  e.preventDefault();

  console.log(getRandomItems(legends));
  console.log(getRandomItems(bodyShields));
  console.log(getRandomItems(helmets));
  console.log(getRandomItems(backpacks));
});
