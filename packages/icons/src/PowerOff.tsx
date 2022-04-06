import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M272 272c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.836 7.2-16 16-16s16 7.164 16 16v256zM56 256c0 110.5 89.5 200 200 200s200-89.5 200-200c0-77.4-43.9-144.5-108.3-177.79-7.8-4.05-10.9-13.71-6.9-21.56 4.1-7.85 13.8-10.92 21.6-6.86C436.1 88.34 488 166.2 488 256c0 128.1-103.9 232-232 232S24 384.1 24 256c0-89.8 51.03-167.66 125.6-206.21 7.8-4.06 17.5-.99 21.6 6.86 4 7.85.9 17.51-6.9 21.56C99.94 111.5 56 178.6 56 256z" />
  </svg>
);

const SvgPowerOff = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPowerOff;
