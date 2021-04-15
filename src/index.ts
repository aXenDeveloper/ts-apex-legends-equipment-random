import './styles/style.scss';
import 'tippy.js/dist/tippy.css';
import { getSettings } from './querySelectors';
import getRandomItems from './functions/getRandomItems';
import { bodyShieldsData, helmetsData, backpacksData } from './data/data';
import getRandomWeapon from './functions/getRandomWeapon';
import { weaponsData } from './data/weapons';
import tooltip from './components/tooltip/tooltip';
import { legendsData } from './data/legends';

getSettings?.addEventListener('submit', e => {
  e.preventDefault();

  console.log(getRandomItems(legendsData));
  console.log(getRandomItems(bodyShieldsData));
  console.log(getRandomItems(helmetsData));
  console.log(getRandomItems(backpacksData));

  console.log(getRandomWeapon(weaponsData));
  console.log(getRandomWeapon(weaponsData));
});

tooltip();
