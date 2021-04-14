import tippy from 'tippy.js';
import { weaponsData, weaponsDataName } from '../../data/weapons';
import {
  barrelStabilizer,
  barrelStabilizerName,
  standardStock,
  standardStockName
} from '../../data/upgrades';
import { opticsData, opticsDataName } from '../../data/optics';

export default () => {
  // Weapons
  weaponsData.map(weapon => {
    tippy(`#${weapon.name}_tooltip`, {
      content: weaponsDataName[weapon.name]
    });
  });

  // Optics
  opticsData.map(optic => {
    tippy(`.${optic}`, {
      content: opticsDataName[optic]
    });
  });

  // Barrel Stabilizer
  barrelStabilizer.map(barrel => {
    tippy(`.${barrel}`, {
      content: barrelStabilizerName[barrel]
    });
  });

  // Standard Stock
  standardStock.map(stock => {
    tippy(`.${stock}`, {
      content: standardStockName[stock]
    });
  });
};
