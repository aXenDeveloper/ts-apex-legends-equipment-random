import tippy from 'tippy.js';
import {
  extendedMagEnergy,
  extendedMagEnergyName,
  extendedMagHeavy,
  extendedMagHeavyName,
  extendedMagLight,
  extendedMagLightName
} from '../../data/extendedMag';

export default () => {
  // Energy
  extendedMagEnergy.map(extendedMag => {
    tippy(`.${extendedMag}`, {
      content: extendedMagEnergyName[extendedMag]
    });
  });

  // Heavy
  extendedMagHeavy.map(extendedMag => {
    tippy(`.${extendedMag}`, {
      content: extendedMagHeavyName[extendedMag]
    });
  });

  // Light
  extendedMagLight.map(extendedMag => {
    tippy(`.${extendedMag}`, {
      content: extendedMagLightName[extendedMag]
    });
  });
};
