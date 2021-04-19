import { randomElementsType } from './../../types/componentsType';
import { weaponsData } from '../../data/weapons';
import { helmetsData, backpacksData } from '../../data/data';
import { bodyShieldsData } from '../../data/data';
import { legendsData } from '../../data/legends';
import getRandomItems from '../../functions/getRandomItems';
import { getSettings } from '../../index';
import getRandomWeapon from '../../functions/getRandomWeapon';
import popupForm from './popupForm';
import popupError from './popupError';

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

    if (
      !randomElements.legend ||
      !randomElements.bodyShield ||
      !randomElements.helmet ||
      !randomElements.backpack ||
      !randomElements.weapon1.name ||
      !randomElements.weapon2.name ||
      !randomElements.weapon1.upgrades ||
      !randomElements.weapon2.upgrades
    ) {
      popupError(randomElements);
      return;
    }

    popupForm(randomElements);
  });
};

export default submitForm;
