import tippy from 'tippy.js';
import { hopupData, hopupDataName } from '../../data/hopup';

export default () => {
  hopupData.map(hopup => {
    tippy(`.${hopup}`, {
      content: hopupDataName[hopup]
    });
  });
};
