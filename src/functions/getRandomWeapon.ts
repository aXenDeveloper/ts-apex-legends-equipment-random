import { getSettings } from '../querySelectors';
import { weaponsType } from '../types/dataTypes';
import randomNumber from './randomNumber';

// In production
export default (arrayData: weaponsType) => {
  let enableItems: string[] = [];

  arrayData.map((item, index) => {
    const getCheckedInput = <HTMLInputElement>getSettings?.querySelector(`#${item.name}`);
  });

  return enableItems[randomNumber(0, enableItems.length - 1)];
};
