import './styles/style.scss';
import { getSettings } from './querySelectors';
import getRandomItems from './functions/getRandomItems';
import { bodyShields, helmets, legends, backpacks, weapons } from './data';
import getRandomWeapon from './functions/getRandomWeapon';

getSettings?.addEventListener('submit', e => {
  e.preventDefault();

  console.log(getRandomItems(legends));
  console.log(getRandomItems(bodyShields));
  console.log(getRandomItems(helmets));
  console.log(getRandomItems(backpacks));

  console.log(getRandomWeapon(weapons));
});
