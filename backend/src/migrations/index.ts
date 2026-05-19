import * as migration_20260519_110509 from './20260519_110509';
import * as migration_20260519_131631 from './20260519_131631';

export const migrations = [
  {
    up: migration_20260519_110509.up,
    down: migration_20260519_110509.down,
    name: '20260519_110509',
  },
  {
    up: migration_20260519_131631.up,
    down: migration_20260519_131631.down,
    name: '20260519_131631'
  },
];
