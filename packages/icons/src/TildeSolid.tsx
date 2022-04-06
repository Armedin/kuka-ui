import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M348.1 384c-26.31 0-52.03-10.66-70.63-29.25l-152.3-152.2c-6.688-6.688-15.94-10.5-25.38-10.5C80.09 192 64 208.1 64 227.9v92.12c0 17.69-14.31 32-32 32s-32-14.31-32-32V227.9c0-55.06 44.81-99.88 99.88-99.88 26.31 0 52.03 10.66 70.63 29.25l152.3 152.2c6.688 6.688 15.94 10.5 25.38 10.5C367.9 320 384 303.9 384 284.1V192c0-17.69 14.31-32 32-32s32 14.31 32 32v92.1c0 55.1-44.8 99.9-99.9 99.9z" />
  </svg>
);

const SvgTildeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTildeSolid;
