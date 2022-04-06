import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M206.7 378.1a28.34 28.34 0 0 0 34.55 0C282.6 346.3 384 259.6 384 173.6 384 65.83 312.3 0 224 0 135.6 0 64 65.83 64 173.6c0 86 101.4 172.7 142.7 204.5zM240 236c0-33.13 26.88-60 60-60h24c6.625 0 12 5.375 12 12v8c0 33.1-26.9 60-60 60h-24c-6.6 0-12-5.4-12-12v-8zm-128-40v-8c0-6.6 5.4-12 12-12h24c33.1 0 60 26.9 60 60v8c0 6.6-5.4 12-12 12h-24c-33.1 0-60-26.9-60-60zm207.7 156.5c-20.72 20.3-41.57 37.69-58.92 51.03C250.2 411.6 237.2 416 224 416s-26.23-4.43-36.78-12.51c-17.33-13.33-38.17-30.7-58.88-50.99C57.07 355.2 0 413.4 0 485.3 0 500.1 11.94 512 26.66 512H421.3c14.8 0 26.7-11.9 26.7-26.7 0-71.9-57.1-130.1-128.3-132.8z" />
  </svg>
);

const SvgUserAlienSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserAlienSolid;
