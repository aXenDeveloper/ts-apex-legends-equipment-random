import { weaponsDataName } from './../../data/weapons';
import { backpacksDataName, helmetsDataName } from './../../data/data';
import { randomElementsType } from './../../types/componentsType';
import { legendsDataName } from './../../data/legends';
import popup from '../popup/popup';
import { bodyShieldsDataName } from '../../data/data';
import tooltip from '../tooltip/tooltip';

const popupForm = (randomElements: randomElementsType) => {
  const randomElementsName = {
    legend: legendsDataName[randomElements.legend],
    bodyShield: bodyShieldsDataName[randomElements.bodyShield],
    helmet: helmetsDataName[randomElements.helmet],
    backpack: backpacksDataName[randomElements.backpack],
    weapon1: weaponsDataName[randomElements.weapon1.name],
    weapon2: weaponsDataName[randomElements.weapon2.name]
  };

  const convertToImgShields: { [key: string]: string } = {
    body_shield_1: 'body',
    body_shield_2: 'body',
    body_shield_3: 'body',
    body_shield_4: 'body',
    evo_shield_1: 'evo',
    evo_shield_2: 'evo',
    evo_shield_3: 'evo',
    evo_shield_5: 'evo'
  };

  const convertToImgBackpacks: { [key: string]: string } = {
    backpack_1: 'backpack_1',
    backpack_2: 'backpack_2',
    backpack_3: 'backpack_3',
    backpack_4: 'backpack_3'
  };

  const popupSchema = `
  <div class='result'>
    <div class='result_legend'>
      <img src='./images/legends/${randomElements.legend}.png' alt='${randomElementsName.legend}'>
    </div>

    <div class='result_equipment'>
      <ul class='result_equipment_other'>
        <li class='${randomElements.bodyShield}'>
          <img src='./images/shields/${convertToImgShields[randomElements.bodyShield]}.png' alt='${
    randomElementsName.bodyShield
  }'>
        </li>

        <li class='${randomElements.helmet}'>
          <img src='./images/helmet.png' alt='${randomElementsName.helmet}'>
        </li>

        <li class='${randomElements.backpack}'>
          <img src='./images/backpacks/${
            convertToImgBackpacks[randomElements.backpack]
          }.png' alt='${randomElementsName.backpack}'>
        </li>
      </ul>
    </div>
  </div>
  `;

  popup(randomElementsName.legend, popupSchema);

  tooltip();
};

export default popupForm;
