import { getSettings } from '../index';
import { weaponsType } from '../types/dataTypes';
import randomNumber from './randomNumber';

const getRandomWeapon = (arrayData: weaponsType) => {
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

  const numberWeapon = randomNumber(0, enableItems.length - 1);
  const randomWeapon = enableItems[numberWeapon];
  const randomWeaponUpgrades = enableItems.find(el => el.name === randomWeapon.name)?.upgrades;
  const randomUpgrades: string[] = [];

  // Random upgrades for the random weapon
  randomWeaponUpgrades?.map(el => {
    randomUpgrades.push(el[randomNumber(0, el.length - 1)]);
  });

  return {
    name: randomWeapon.name,
    upgrades: randomUpgrades
  };
};

export default getRandomWeapon;
