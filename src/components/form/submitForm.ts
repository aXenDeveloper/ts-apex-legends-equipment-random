import { randomElementsType } from './../../types/componentsType';
import { weaponsData } from '../../data/weapons';
import { helmetsData, backpacksData } from '../../data/data';
import { bodyShieldsData } from '../../data/data';
import { legendsData } from '../../data/legends';
import getRandomItems from '../../functions/getRandomItems';
import { getSettings } from '../../index';
import getRandomWeapon from '../../functions/getRandomWeapon';
import popupForm from './popupForm';

const submitForm = () => {
  getSettings?.addEventListener('submit', e => {
    e.preventDefault();

    const randomElements: randomElementsType = {
      legend: getRandomItems(legendsData),
      bodyShield: getRandomItems(bodyShieldsData),
      helmet: getRandomItems(helmetsData),
      backpack: getRandomItems(backpacksData),
      weapon1: getRandomWeapon(weaponsData),
      weapon2: getRandomWeapon(weaponsData)
    };

    popupForm(randomElements);
    console.log(randomElements);
  });
};

export default submitForm;
