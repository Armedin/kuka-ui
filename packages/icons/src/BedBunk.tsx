import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M128 128c35.38 0 64-28.62 64-64S163.4 0 128 0 64 28.62 64 64s28.63 64 64 64zm0-96c17.62 0 32 14.38 32 32s-14.4 32-32 32-32-14.37-32-32 14.4-32 32-32zm0 352c35.38 0 64-28.62 64-64s-28.6-64-64-64-64 28.62-64 64 28.63 64 64 64zm0-96c17.62 0 32 14.38 32 32s-14.38 32-32 32-32-14.38-32-32 14.4-32 32-32zM464 0H240c-8.8 0-16 7.164-16 16v144H32V16c0-8.801-7.2-16-16-16S0 7.199 0 16v480c0 8.8 7.199 16 16 16s16-7.2 16-16v-48h512v48c0 8.801 7.199 16 16 16s16-7.199 16-16V112C576 50.14 525.9 0 464 0zm80 416H256V288h208c44.13 0 80 35.88 80 80v48zm0-126.2c-21-21.7-49.9-33.8-80-33.8H240c-8.9 0-16 7.1-16 16v144H32V192h512v97.8zm0-129.8H256V32h208c44.1 0 80 35.88 80 80v48z" />
  </svg>
);

const SvgBedBunk = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBedBunk;
