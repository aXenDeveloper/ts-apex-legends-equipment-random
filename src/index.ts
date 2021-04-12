import './styles/style.scss';
import { getSettings } from './querySelectors';
import getRandomLegend from './functions/getRandomLegend';

getSettings?.addEventListener('submit', e => {
  e.preventDefault();

  console.log(getRandomLegend());
});
