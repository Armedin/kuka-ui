import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M304 304c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96zm86.4-272c26.9 0 50.9 16.79 60.1 42.04L567.5 394c15.2 41.8-15.7 86-60.1 86H68.64c-44.45 0-75.368-44.2-60.111-86L125.5 74.04C134.7 48.79 158.7 32 185.6 32h204.8zM38.59 405c-7.63 20.9 7.82 43 30.05 43H271.1v-48c0-8.8 8.1-16 16-16 9.7 0 16.9 7.2 16.9 16v48h203.4c22.2 0 37.6-22.1 30-43L420.5 85.02C415.9 72.4 403.9 64 390.4 64H304v48c0 8.8-7.2 16-16.9 16-7.9 0-16-7.2-16-16V64h-85.5c-13.5 0-25.5 8.4-30.1 21.02L38.59 405z" />
  </svg>
);

const SvgRoad = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRoad;
