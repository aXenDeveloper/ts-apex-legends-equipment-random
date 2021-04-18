import tippy from 'tippy.js';
import {
  extendedMagEnergy,
  extendedMagEnergyName,
  extendedMagHeavy,
  extendedMagHeavyName,
  extendedMagLight,
  extendedMagLightName,
  extendedMagSniper,
  extendedMagSniperName
} from '../../data/extendedMag';

const extendedMagTootlip = () => {
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

  // Sniper
  extendedMagSniper.map(extendedMag => {
    tippy(`.${extendedMag}`, {
      content: extendedMagSniperName[extendedMag]
    });
  });
};

export default extendedMagTootlip;
