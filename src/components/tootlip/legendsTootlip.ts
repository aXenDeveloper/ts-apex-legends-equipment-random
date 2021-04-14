import tippy from 'tippy.js';
import { legends, legendsName } from '../../data/legends';

export default () => {
  legends.map(legend => {
    tippy(`#${legend}_tooltip`, {
      content: legendsName[legend]
    });
  });
};
