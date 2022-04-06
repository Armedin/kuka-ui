import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M479.1 223.1H32c-17.62 0-32 14.39-32 32.19 0 95.69 51.5 179 127.1 223.8 0 17.67 14.33 32 32 32h191.1c17.67 0 32-14.33 32-32 76.5-44.81 127.1-128.1 127.1-223.8 1.8-16.89-11.7-32.19-30.2-32.19zM127 192c55.3 0 83.3-26.8 92.9-64H480c17.69 0 32-14.33 32-32s-14.31-32-32-32H219.9C210.3 26.8 182.3 0 127 0 56.88 0 0 42.98 0 96s56.88 96 127 96z" />
  </svg>
);

const SvgBowlSpoonSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBowlSpoonSolid;
