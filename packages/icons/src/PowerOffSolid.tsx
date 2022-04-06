import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 256c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.67 14.3-32 32-32s32 14.33 32 32v224zm-208 0c0 97.2 78.8 176 176 176s176-78.8 176-176c0-54.4-24.7-103.1-63.5-135.4-13.6-11.3-15.5-31.47-4.2-45.06 11.3-13.59 31.5-15.44 45.1-4.14 52.8 44 86.6 110.4 86.6 183.7C496 388.5 388.5 496 256 496S16 388.5 16 255.1c0-73.3 33.75-139.7 86.6-183.7 13.6-11.3 33.8-9.45 45.1 4.14 10.4 13.59 9.4 33.76-4.2 45.06C104.7 152.9 80 201.6 80 256z" />
  </svg>
);

const SvgPowerOffSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPowerOffSolid;
