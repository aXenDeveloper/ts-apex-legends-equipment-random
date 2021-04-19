import popup from '../popup/popup';
import { randomElementsType } from './../../types/componentsType';

const popupError = (randomElements: randomElementsType) => {
  const title = '(╯°□°）╯︵ ┻━┻';

  const text = (el: string) => {
    return `You must have at least one item selected in category <span style='font-weight: 700;'>${el}</span>.`;
  };

  if (!randomElements.legend) popup(title, text('Legends'), true);
  if (!randomElements.bodyShield) popup(title, text('Shields'), true);
  if (!randomElements.helmet) popup(title, text('Helmets'), true);
  if (!randomElements.backpack) popup(title, text('Backpacks'), true);
  if (!randomElements.weapon1.name || !randomElements.weapon2.name)
    popup(title, text('Weapons'), true);
};

export default popupError;
