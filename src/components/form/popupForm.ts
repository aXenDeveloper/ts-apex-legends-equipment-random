import { convertToImgUpgrades } from './../../data/upgrades';
import { weaponsDataName, weaponsDataCategory } from './../../data/weapons';
import {
  backpacksDataName,
  convertToImgShields,
  helmetsDataName,
  convertToImgBackpacks
} from './../../data/data';
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

  const weaponUpgrade = (array: string[]) => {
    return array
      .map(el => {
        return `<li class='${el}'><img src="./images/weapons/upgrades/${convertToImgUpgrades[el]}.png" alt="${el}" /></li>`;
      })
      .join('');
  };

  const weapon1Upgrades = weaponUpgrade(randomElements.weapon1.upgrades);
  const weapon2Upgrades = weaponUpgrade(randomElements.weapon2.upgrades);

  const popupSchema = `
  <div class='result'>
    <div class='result_legend'>
      <img src='./images/legends/${randomElements.legend}.png' alt='${randomElementsName.legend}'>

      <ul class='result_legend_other'>
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


      <ul class='result_equipment'>
          <li class='result_equipment_item backgroundColor_${
            weaponsDataCategory[randomElements.weapon1.name]
          }'>
            <h4>${weaponsDataName[randomElements.weapon1.name]}</h4>

            <div class='result_equipment_item_img'>
              <img src='./images/weapons/${randomElements.weapon1.name}.png' alt='${
    weaponsDataName[randomElements.weapon1.name]
  }'>
            </div>
            
            ${
              weapon1Upgrades
                ? `<ul class='result_equipment_item_upgrades'>${weapon1Upgrades}</ul>`
                : ''
            }
          </li>

          <li class='result_equipment_item backgroundColor_${
            weaponsDataCategory[randomElements.weapon2.name]
          }'>
            <h4>${weaponsDataName[randomElements.weapon2.name]}</h4>

            <div class='result_equipment_item_img'>
              <img src='./images/weapons/${randomElements.weapon2.name}.png' alt='${
    weaponsDataName[randomElements.weapon2.name]
  }'>
            </div>
            
            ${
              weapon2Upgrades
                ? `<ul class='result_equipment_item_upgrades'>${weapon2Upgrades}</ul>`
                : ''
            }
          </li>
      </ul>
    
  </div>
  `;

  popup(randomElementsName.legend, popupSchema);
  tooltip();
};

export default popupForm;
