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
  },
  {
    name: 'g7-scout',
    upgrades: [
      ['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '2x-4x_aog', '3x_hcog'],
      [
        '',
        'extended_light_mag_1',
        'extended_light_mag_2',
        'extended_light_mag_3',
        'extended_light_mag_4'
      ],
      ['', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3']
    ]
  },
  {
    name: 'hemlok',
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
      ['', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3']
    ]
  },
  {
    name: 'r-301',
    upgrades: [
      ['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '2x-4x_aog', '3x_hcog'],
      [
        '',
        'extended_light_mag_1',
        'extended_light_mag_2',
        'extended_light_mag_3',
        'extended_light_mag_4'
      ],
      ['', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3'],
      ['', 'anvil-receiver']
    ]
  },
  {
    name: '30-30-repeater',
    upgrades: [
      ['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '2x-4x_aog', '3x_hcog'],
      [
        '',
        'extended_heavy_mag_1',
        'extended_heavy_mag_2',
        'extended_heavy_mag_3',
        'extended_heavy_mag_4'
      ],
      ['', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3']
    ]
  },
  {
    name: 'alternator',
    upgrades: [
      ['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '1x_digital'],
      [
        '',
        'extended_light_mag_1',
        'extended_light_mag_2',
        'extended_light_mag_3',
        'extended_light_mag_4'
      ],
      ['', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3']
    ]
  },
  {
    name: 'prowler',
    upgrades: [['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '1x_digital']]
  },
  {
    name: 'r-99',
    upgrades: [
      ['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '1x_digital'],
      [
        '',
        'extended_light_mag_1',
        'extended_light_mag_2',
        'extended_light_mag_3',
        'extended_light_mag_4'
      ],
      ['', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3']
    ]
  },
  {
    name: 'volt',
    upgrades: [
      ['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '1x_digital'],
      [
        '',
        'extended_energy_mag_1',
        'extended_energy_mag_2',
        'extended_energy_mag_3',
        'extended_energy_mag_4'
      ],
      ['', 'standard_stock_1', 'standard_stock_2', 'standard_stock_3'],
      ['', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3']
    ]
  },
  {
    name: 'devotion',
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
    name: 'spitfire',
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
      ['', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3']
    ]
  },
  {
    name: 'l-star',
    upgrades: [
      ['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '2x-4x_aog', '3x_hcog'],
      [
        '',
        'extended_energy_mag_1',
        'extended_energy_mag_2',
        'extended_energy_mag_3',
        'extended_energy_mag_4'
      ]
    ]
  },
  {
    name: 'charge-rifle',
    upgrades: [
      [
        '',
        '1x_hcog',
        '1x_holo',
        '1x-2x_holo',
        '2x_hcog',
        '2x-4x_aog',
        '3x_hcog',
        '4x-8x_sniper',
        '4x-10x_sniper',
        '6x_sniper'
      ],
      ['', 'sniper_stock_1', 'sniper_stock_2', 'sniper_stock_3']
    ]
  },
  {
    name: 'longbow',
    upgrades: [
      [
        '',
        '1x_hcog',
        '1x_holo',
        '1x-2x_holo',
        '2x_hcog',
        '2x-4x_aog',
        '3x_hcog',
        '4x-8x_sniper',
        '4x-10x_sniper',
        '6x_sniper'
      ],
      [
        '',
        'extended_sniper_mag_1',
        'extended_sniper_mag_2',
        'extended_sniper_mag_3',
        'extended_sniper_mag_4'
      ],
      ['', 'sniper_stock_1', 'sniper_stock_2', 'sniper_stock_3'],
      ['', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3'],
      ['', 'skullpiercer']
    ]
  },
  {
    name: 'kraber'
  },
  {
    name: 'sentinel',
    upgrades: [
      [
        '',
        '1x_hcog',
        '1x_holo',
        '1x-2x_holo',
        '2x_hcog',
        '2x-4x_aog',
        '3x_hcog',
        '4x-8x_sniper',
        '4x-10x_sniper',
        '6x_sniper'
      ],
      [
        '',
        'extended_sniper_mag_1',
        'extended_sniper_mag_2',
        'extended_sniper_mag_3',
        'extended_sniper_mag_4'
      ],
      ['', 'sniper_stock_1', 'sniper_stock_2', 'sniper_stock_3']
    ]
  },
  {
    name: 'triple-take',
    upgrades: [
      [
        '',
        '1x_hcog',
        '1x_holo',
        '1x-2x_holo',
        '2x_hcog',
        '2x-4x_aog',
        '3x_hcog',
        '4x-8x_sniper',
        '4x-10x_sniper',
        '6x_sniper'
      ],
      [
        '',
        'extended_sniper_mag_1',
        'extended_sniper_mag_2',
        'extended_sniper_mag_3',
        'extended_sniper_mag_4'
      ],
      ['', 'sniper_stock_1', 'sniper_stock_2', 'sniper_stock_3']
    ]
  },
  {
    name: 'eva-8',
    upgrades: [
      ['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '1x_digital'],
      ['', 'shotgun_bolt_1', 'shotgun_bolt_2', 'shotgun_bolt_3']
    ]
  },
  {
    name: 'mastiff',
    upgrades: [
      ['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '1x_digital'],
      ['', 'shotgun_bolt_1', 'shotgun_bolt_2', 'shotgun_bolt_3']
    ]
  },
  {
    name: 'mozambique',
    upgrades: [
      ['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '1x_digital'],
      ['', 'shotgun_bolt_1', 'shotgun_bolt_2', 'shotgun_bolt_3'],
      ['', 'hammerpoint']
    ]
  },
  {
    name: 'peacekeepe',
    upgrades: [['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '1x_digital']]
  },
  {
    name: 're-45',
    upgrades: [
      ['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '1x_digital'],
      [
        '',
        'extended_light_mag_1',
        'extended_light_mag_2',
        'extended_light_mag_3',
        'extended_light_mag_4'
      ],
      ['', 'barrel_stabilizer_1', 'barrel_stabilizer_2', 'barrel_stabilizer_3'],
      ['', 'quickdraw']
    ]
  },
  {
    name: 'p2020',
    upgrades: [
      ['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '1x_digital'],
      [
        '',
        'extended_light_mag_1',
        'extended_light_mag_2',
        'extended_light_mag_3',
        'extended_light_mag_4'
      ],
      ['', 'hammerpoint', 'quickdraw']
    ]
  },
  {
    name: 'wingman',
    upgrades: [
      ['', '1x_hcog', '1x_holo', '1x-2x_holo', '2x_hcog', '1x_digital'],
      [
        '',
        'extended_heavy_mag_1',
        'extended_heavy_mag_2',
        'extended_heavy_mag_3',
        'extended_heavy_mag_4'
      ],
      ['', 'skullpiercer', 'quickdraw']
    ]
  }
];
