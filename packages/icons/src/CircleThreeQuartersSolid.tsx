import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 255.1h224c17.7 0 32.2 15.3 30 32.8C494.3 414.2 386.6 512 256 512 114.6 512 0 397.4 0 255.1 0 125.4 97.75 17.69 224.1 1.971 241.6-.211 256 14.33 256 31.1v224z" />
  </svg>
);

const SvgCircleThreeQuartersSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleThreeQuartersSolid;
