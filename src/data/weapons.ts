import { dataNameType, weaponsType } from '../types/dataTypes';

export const weaponsData: weaponsType = [
  {
    name: 'havoc',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_2x4x_aog',
        'optic_3x_hcog'
      ],
      [
        'extended_energy_mag_0',
        'extended_energy_mag_1',
        'extended_energy_mag_2',
        'extended_energy_mag_3',
        'extended_energy_mag_4'
      ],
      ['standard_stock_0', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['barrel_stabilizer_0', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3'],
      ['hopup_0', 'hopup_turbocharger']
    ]
  },
  {
    name: 'flatline',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_2x4x_aog',
        'optic_3x_hcog'
      ],
      [
        'extended_heavy_mag_0',
        'extended_heavy_mag_1',
        'extended_heavy_mag_2',
        'extended_heavy_mag_3',
        'extended_heavy_mag_4'
      ],
      ['standard_stock_0', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['barrel_stabilizer_0', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3'],
      ['hopup_0', 'hopup_anvilreceiver']
    ]
  } /*
  {
    name: 'g7scout',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_2x4x_aog',
        'optic_3x_hcog'
      ],
      [
        'extended_light_mag_0',
        'extended_light_mag_1',
        'extended_light_mag_2',
        'extended_light_mag_3',
        'extended_light_mag_4'
      ],
      ['standard_stock_0', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['barrel_stabilizer_0', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3']
    ]
  },
  {
    name: 'hemlok',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_2x4x_aog',
        'optic_3x_hcog'
      ],
      [
        'extended_heavy_mag_0',
        'extended_heavy_mag_1',
        'extended_heavy_mag_2',
        'extended_heavy_mag_3',
        'extended_heavy_mag_4'
      ],
      ['standard_stock_0', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['barrel_stabilizer_0', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3']
    ]
  },
  {
    name: 'r301',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_2x4x_aog',
        'optic_3x_hcog'
      ],
      [
        'extended_light_mag_0',
        'extended_light_mag_1',
        'extended_light_mag_2',
        'extended_light_mag_3',
        'extended_light_mag_4'
      ],
      ['standard_stock_0', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['barrel_stabilizer_0', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3'],
      ['hopup_0', 'hopup_anvil-receiver']
    ]
  },
  {
    name: 'repeater3030',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_2x4x_aog',
        'optic_3x_hcog'
      ],
      [
        '',
        'extended_heavy_mag_1',
        'extended_heavy_mag_2',
        'extended_heavy_mag_3',
        'extended_heavy_mag_4'
      ],
      ['standard_stock_0', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3']
    ]
  },
  {
    name: 'alternator',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_1x_digital'
      ],
      [
        'extended_light_mag_0',
        'extended_light_mag_1',
        'extended_light_mag_2',
        'extended_light_mag_3',
        'extended_light_mag_4'
      ],
      ['standard_stock_0', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['barrel_stabilizer_0', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3']
    ]
  },
  {
    name: 'prowler',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_1x_digital'
      ]
    ]
  },
  {
    name: 'r99',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_1x_digital'
      ],
      [
        'extended_light_mag_0',
        'extended_light_mag_1',
        'extended_light_mag_2',
        'extended_light_mag_3',
        'extended_light_mag_4'
      ],
      ['standard_stock_0', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['barrel_stabilizer_0', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3']
    ]
  },
  {
    name: 'volt',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_1x_digital'
      ],
      [
        'extended_energy_mag_0',
        'extended_energy_mag_1',
        'extended_energy_mag_2',
        'extended_energy_mag_3',
        'extended_energy_mag_4'
      ],
      ['standard_stock_0', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['barrel_stabilizer_0', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3']
    ]
  },
  {
    name: 'devotion',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_2x4x_aog',
        'optic_3x_hcog'
      ],
      [
        'extended_energy_mag_0',
        'extended_energy_mag_1',
        'extended_energy_mag_2',
        'extended_energy_mag_3',
        'extended_energy_mag_4'
      ],
      ['standard_stock_0', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['barrel_stabilizer_0', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3'],
      ['hopup_0', 'hopup_turbocharger']
    ]
  },
  {
    name: 'spitfire',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_2x4x_aog',
        'optic_3x_hcog'
      ],
      [
        'extended_heavy_mag_0',
        'extended_heavy_mag_1',
        'extended_heavy_mag_2',
        'extended_heavy_mag_3',
        'extended_heavy_mag_4'
      ],
      ['standard_stock_0', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['barrel_stabilizer_0', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3']
    ]
  },
  {
    name: 'lstar',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_2x4x_aog',
        'optic_3x_hcog'
      ],
      [
        'extended_energy_mag_0',
        'extended_energy_mag_1',
        'extended_energy_mag_2',
        'extended_energy_mag_3',
        'extended_energy_mag_4'
      ]
    ]
  },
  {
    name: 'chargerifle',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_2x4x_aog',
        'optic_3x_hcog',
        'optic_4x8x_sniper',
        'optic_4x10x_sniper',
        'optic_6x_sniper'
      ],
      ['sniper_stock_0', 'sniper_stock_1', 'sniper_stock_2', 'sniper_stock_3']
    ]
  },
  {
    name: 'longbow',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_2x4x_aog',
        'optic_3x_hcog',
        'optic_4x8x_sniper',
        'optic_4x10x_sniper',
        'optic_6x_sniper'
      ],
      [
        'extended_sniper_mag_0',
        'extended_sniper_mag_1',
        'extended_sniper_mag_2',
        'extended_sniper_mag_3',
        'extended_sniper_mag_4'
      ],
      ['sniper_stock_0', 'sniper_stock_1', 'sniper_stock_2', 'sniper_stock_3'],
      ['barrel_stabilizer_0', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3'],
      ['hopup_0', 'hopup_skullpiercer']
    ]
  },
  {
    name: 'kraber'
  },
  {
    name: 'sentinel',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_2x4x_aog',
        'optic_3x_hcog',
        'optic_4x8x_sniper',
        'optic_4x10x_sniper',
        'optic_6x_sniper'
      ],
      [
        'extended_sniper_mag_0',
        'extended_sniper_mag_1',
        'extended_sniper_mag_2',
        'extended_sniper_mag_3',
        'extended_sniper_mag_4'
      ],
      ['sniper_stock_0', 'sniper_stock_1', 'sniper_stock_2', 'sniper_stock_3']
    ]
  },
  {
    name: 'tripletake',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_2x4x_aog',
        'optic_3x_hcog',
        'optic_4x8x_sniper',
        'optic_4x10x_sniper',
        'optic_6x_sniper'
      ],
      [
        'extended_sniper_mag_0',
        'extended_sniper_mag_1',
        'extended_sniper_mag_2',
        'extended_sniper_mag_3',
        'extended_sniper_mag_4'
      ],
      ['sniper_stock_0', 'sniper_stock_1', 'sniper_stock_2', 'sniper_stock_3']
    ]
  },
  {
    name: 'eva8',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_1x_digital'
      ],
      ['shotgun_bolt_0', 'shotgun_bolt_1', 'shotgun_bolt_2', 'shotgun_bolt_3']
    ]
  },
  {
    name: 'mastiff',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_1x_digital'
      ],
      ['shotgun_bolt_0', 'shotgun_bolt_1', 'shotgun_bolt_2', 'shotgun_bolt_3']
    ]
  },
  {
    name: 'mozambique',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_1x_digital'
      ],
      ['shotgun_bolt_0', 'shotgun_bolt_1', 'shotgun_bolt_2', 'shotgun_bolt_3'],
      ['hopup_0', 'hopup_hammerpoint']
    ]
  },
  {
    name: 'peacekeeper',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_1x_digital'
      ]
    ]
  },
  {
    name: 're45',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_1x_digital'
      ],
      [
        'extended_light_mag_0',
        'extended_light_mag_1',
        'extended_light_mag_2',
        'extended_light_mag_3',
        'extended_light_mag_4'
      ],
      ['barrel_stabilizer_0', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3'],
      ['hopup_0', 'hopup_quickdraw']
    ]
  },
  {
    name: 'p2020',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_1x_digital'
      ],
      [
        'extended_light_mag_0',
        'extended_light_mag_1',
        'extended_light_mag_2',
        'extended_light_mag_3',
        'extended_light_mag_4'
      ],
      ['hopup_0', 'hopup_hammerpoint', 'hopup_quickdraw']
    ]
  },
  {
    name: 'wingman',
    upgrades: [
      [
        'optic_0',
        'optic_1x_hcog',
        'optic_1x_holo',
        'optic_1x2x_holo',
        'optic_2x_hcog',
        'optic_1x_digital'
      ],
      [
        'extended_heavy_mag_0',
        'extended_heavy_mag_1',
        'extended_heavy_mag_2',
        'extended_heavy_mag_3',
        'extended_heavy_mag_4'
      ],
      ['hopup_0', 'hopup_skullpiercer', 'hopup_quickdraw']
    ]
  } */
];

export const weaponsDataName: dataNameType = {
  havoc: 'Havoc',
  flatline: 'Flatline'
  /* g7scout: 'G7-Scout',
  hemlok: 'Hemlok',
  r301: 'R-301',
  repeater3030: '30-30 Repeater',
  alternator: 'Alternator',
  prowler: 'Prowler',
  r99: 'R-99',
  volt: 'Volt',
  devotion: 'Devotion',
  spitfire: 'Spitfire',
  lstar: 'L-star',
  chargerifle: 'Charge Rifle',
  longbow: 'Longbow',
  kraber: 'Kraber',
  sentinel: 'Sentinel',
  tripletake: 'Triple Take',
  eva8: 'EVA-8',
  mastiff: 'Mastiff',
  mozambique: 'Mozambique',
  peacekeeper: 'Peacekeeper',
  re45: 'RE-45',
  p2020: 'P2020',
  wingman: 'Wingman' */
};
