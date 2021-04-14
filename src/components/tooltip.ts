import tippy from 'tippy.js';
import {
  backpacks,
  backpacksName,
  bodyShields,
  bodyShieldsName,
  helmets,
  helmetsName
} from '../data/data';
import { legends, legendsName } from '../data/legends';

export default () => {
  // Legends
  legends.map(legend => {
    tippy(`#${legend}_tooltip`, {
      content: legendsName[legend]
    });
  });

  // Body Shields
  bodyShields.map(bodyShield => {
    tippy(`.${bodyShield}`, {
      content: bodyShieldsName[bodyShield]
    });
  });

  // Helmets
  helmets.map(helmet => {
    tippy(`.${helmet}`, {
      content: helmetsName[helmet]
    });
  });

  // Backpacks
  backpacks.map(backpack => {
    tippy(`.${backpack}`, {
      content: backpacksName[backpack]
    });
  });

  tippy('.hopup_turbocharger', {
    content: 'Turbocharger'
  });
};
