import tippy from 'tippy.js';
import { extendedMagEnergy, extendedMagEnergyName } from '../../data/extendedMag';

export default () => {
  // Energy
  extendedMagEnergy.map(extendedMag => {
    tippy(`.${extendedMag}`, {
      content: extendedMagEnergyName[extendedMag]
    });
  });
};
