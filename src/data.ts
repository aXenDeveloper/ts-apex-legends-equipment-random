import { weaponsType } from './types/dataTypes';

export const legends = [
  'bangalore',
  'bloodhound',
  'caustic',
  'crypto',
  'fuse',
  'gibraltar',
  'horizon',
  'lifeline',
  'loba',
  'mirage',
  'octane',
  'pathfinder',
  'rampart',
  'revenant',
  'wattson',
  'wraith'
];

export const bodyShields = [
  'body_shield_1',
  'body_shield_2',
  'body_shield_3',
  'body_shield_4',
  'evo_shield_1',
  'evo_shield_2',
  'evo_shield_3',
  'evo_shield_5'
];

export const helmets = ['helmet_1', 'helmet_2', 'helmet_3', 'helmet_4'];
export const backpacks = ['backpack_1', 'backpack_2', 'backpack_3', 'backpack_4'];

// In production
export const weapons: weaponsType = [
  {
    name: 'havoc',
    upgrades: [
      ['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '2x-4x_aog', '3x_hcog'],
      [
        '',
        'extended_energy_mag_1',
        'extended_energy_mag_2',
        'extended_energy_mag_3',
        'extended_energy_mag_4'
      ],
      ['', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3'],
      ['', 'turbocharger']
    ]
  },
  {
    name: 'flatline',
    upgrades: [
      ['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '2x-4x_aog', '3x_hcog'],
      [
        '',
        'extended_heavy_mag_1',
        'extended_heavy_mag_2',
        'extended_heavy_mag_3',
        'extended_heavy_mag_4'
      ],
      ['', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3'],
      ['', 'anvil-receiver']
    ]
  }
];
