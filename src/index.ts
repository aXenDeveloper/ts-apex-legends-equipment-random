import './styles/style.scss';
import { getSettings } from './querySelectors';
import getRandomItems from './functions/getRandomItems';
import { bodyShield, legends } from './data';

getSettings?.addEventListener('submit', e => {
  e.preventDefault();

  console.log(getRandomItems(legends));
  console.log(getRandomItems(bodyShield));
});
