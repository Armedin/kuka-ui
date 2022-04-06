import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M208 48v48.66C306.6 104.8 384 187.3 384 288v176c0 8.8-7.2 16-16 16s-16-7.2-16-16V288c0-83-63.1-151.2-144-159.2V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V128.8C95.15 136.8 32 205 32 288v176c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V288C0 187.3 77.45 104.8 176 96.66V48c0-8.84 7.2-16 16-16s16 7.16 16 16z" />
  </svg>
);

const SvgManatSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgManatSign;
