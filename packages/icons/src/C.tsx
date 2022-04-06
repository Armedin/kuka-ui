import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M222.1 480C83.8 480 0 363.6 0 256.9.096 149.6 83.17 32 222.1 32 309.5 32 384 89.73 384 108.9c0 4.39-3.476 15.1-15.98 15.1-17.82.9-49.52-60-145.92-60-118.3 0-190.14 99.6-190.14 192 0 92.74 72.66 192 190.2 192 96.54 0 128.2-60.89 145.9-60.89C380.4 387.1 384 398.4 384 403.1c0 19-73.7 76.9-161.9 76.9z" />
  </svg>
);

const SvgC = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgC;
