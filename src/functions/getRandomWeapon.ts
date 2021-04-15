import { getSettings } from '../querySelectors';
import { weaponsType } from '../types/dataTypes';
import randomNumber from './randomNumber';

// In production
export default (arrayData: weaponsType) => {
  let enableItems: weaponsType = [];

  arrayData.map(item => {
    const getCheckedInput = <HTMLInputElement>document.querySelector(`#${item.name}`);

    if (getCheckedInput.checked) {
      enableItems = [
        ...enableItems,
        {
          name: item.name
        }
      ];

      item.upgrades?.map(upgrade => {
        upgrade.map(upgradeElement => {
          const getCheckedInputUpgrades = <HTMLInputElement>(
            getSettings?.querySelector(`#${item.name}_${upgradeElement}`)
          );

          console.log(getCheckedInputUpgrades.checked);
        });
      });
    }
  });

  // console.log(enableItems);

  enableItems[randomNumber(0, enableItems.length - 1)];
};
