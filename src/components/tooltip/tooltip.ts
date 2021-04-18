import tippy from 'tippy.js';
import {
  backpacksData,
  backpacksDataName,
  bodyShieldsData,
  bodyShieldsDataName,
  helmetsData,
  helmetsDataName
} from '../../data/data';
import { legendsData, legendsDataName } from '../../data/legends';
import extendedMagTootlip from './extendedMagTootlip';
import hopupTooltip from './hopupTooltip';
import weaponsTootlip from './weaponsTootlip';

const tooltip = () => {
  // Legends
  legendsData.map(legend => {
    tippy(`#${legend}_tooltip`, {
      content: legendsDataName[legend]
    });
  });

  // Body Shields
  bodyShieldsData.map(bodyShield => {
    tippy(`.${bodyShield}`, {
      content: bodyShieldsDataName[bodyShield]
    });
  });

  // Helmets
  helmetsData.map(helmet => {
    tippy(`.${helmet}`, {
      content: helmetsDataName[helmet]
    });
  });

  // Backpacks
  backpacksData.map(backpack => {
    tippy(`.${backpack}`, {
      content: backpacksDataName[backpack]
    });
  });

  // Barrel Stabilizer
  extendedMagTootlip();
  hopupTooltip();
  weaponsTootlip();
};

export default tooltip;
