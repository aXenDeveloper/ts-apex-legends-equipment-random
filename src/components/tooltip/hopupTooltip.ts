import tippy from 'tippy.js';
import { hopupData, hopupDataName } from '../../data/hopup';

const hopupTooltip = () => {
  hopupData.map(hopup => {
    tippy(`.${hopup}`, {
      content: hopupDataName[hopup]
    });
  });
};

export default hopupTooltip;
