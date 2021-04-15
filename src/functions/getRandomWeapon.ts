import { getSettings } from '../querySelectors';
import { weaponsType } from '../types/dataTypes';
import randomNumber from './randomNumber';

// In production
export default (arrayData: weaponsType) => {
  let enableItems: weaponsType = [];

  arrayData.map(weapon => {
    const getCheckedInput = <HTMLInputElement>document.querySelector(`#${weapon.name}`);

    if (getCheckedInput.checked) {
      enableItems = [
        ...enableItems,
        {
          name: weapon.name,
          upgrades: []
        }
      ];

      weapon.upgrades?.map((upgradesWeapon: string[], index: number) => {
        const arrayUpgrades = enableItems[enableItems.length - 1].upgrades;

        // Create array for upgrades category
        arrayUpgrades?.push([]);

        upgradesWeapon.map(upgradeElement => {
          const getCheckedInputUpgrades = <HTMLInputElement>(
            getSettings?.querySelector(`#${weapon.name}_${upgradeElement}`)
          );

          if (getCheckedInputUpgrades.checked && arrayUpgrades) {
            arrayUpgrades[index] = [...arrayUpgrades[index], upgradeElement];
          }
        });
      });
    }
  });

  console.log(enableItems);

  enableItems[randomNumber(0, enableItems.length - 1)];
};
