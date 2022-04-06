import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M144 32c17.7 0 32 14.33 32 32v32.66c5.3-.44 10.6-.66 16-.66s10.7.22 16 .66V64c0-17.67 14.3-32 32-32s32 14.33 32 32v49.4c54.9 25.2 95.8 75.5 108.2 136.2 3.5 16.5-7.7 34.2-25 37.8-17.4 3.5-35.1-7.7-37.8-25-6-29.9-22.5-56-45.4-74.3V256c0 17.7-14.3 32-32 32s-32-14.3-32-32v-95.9c-5.2.2-10.6-.1-16-.1s-10.8.3-16 .1V256c0 17.7-14.3 32-32 32s-32-14.3-32-32v-67.9c-29.26 23.4-48 59.5-48 99.9 0 70.7 57.3 128 128 128h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h16.89C18.49 382 0 337.2 0 288c0-77.5 45.9-144.3 112-174.6V64c0-17.67 14.3-32 32-32z" />
  </svg>
);

const SvgLariSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLariSignSolid;
