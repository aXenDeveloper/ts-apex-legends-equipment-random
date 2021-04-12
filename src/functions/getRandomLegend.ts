import { getSettings } from '../querySelectors';
import { legends } from '../data';
import randomNumber from './randomNumber';

export default () => {
  let enableLegends: string[] = [];

  legends.map((legend, index) => {
    const getDataLegend = <HTMLInputElement>getSettings?.querySelector(`#${legend}`);
    if (getDataLegend.checked) enableLegends = [...enableLegends, legends[index]];
  });

  const randomLegend = enableLegends[randomNumber(0, enableLegends.length - 1)];
  return randomLegend;
};
