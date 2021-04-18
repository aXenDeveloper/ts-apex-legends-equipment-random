import { weaponsData } from './../data/weapons';
import { helmetsData, backpacksData } from './../data/data';
import { bodyShieldsData } from '../data/data';
import { legendsData } from '../data/legends';
import getRandomItems from '../functions/getRandomItems';
import { getSettings } from '../index';
import getRandomWeapon from '../functions/getRandomWeapon';
import popup from './popup/popup';

const submitForm = () => {
  getSettings?.addEventListener('submit', e => {
    e.preventDefault();
    console.log(getRandomItems(legendsData));
    console.log(getRandomItems(bodyShieldsData));
    console.log(getRandomItems(helmetsData));
    console.log(getRandomItems(backpacksData));

    console.log(getRandomWeapon(weaponsData));
    console.log(getRandomWeapon(weaponsData));

    popup('popup', 'popup');
  });
};

export default submitForm;
