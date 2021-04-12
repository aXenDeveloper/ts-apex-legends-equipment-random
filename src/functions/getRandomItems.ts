import { getSettings } from '../querySelectors';
import randomNumber from './randomNumber';

export default (arrayData: string[]) => {
  let enableItems: string[] = [];

  arrayData.map((item, index) => {
    const getCheckedInput = <HTMLInputElement>getSettings?.querySelector(`#${item}`);
    if (getCheckedInput.checked) enableItems = [...enableItems, arrayData[index]];
  });

  return enableItems[randomNumber(0, enableItems.length - 1)];
};
