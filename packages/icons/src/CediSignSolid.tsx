import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M224 66.66c30.9 5.18 59.2 17.73 83.2 35.74 14.2 10.6 17 30.7 6.4 44.8-11.5 14.2-30.7 17-44.8 6.4-13.2-9.9-28.4-17.3-44.8-21.6v247.1c16.4-3.4 31.6-10.8 44.8-20.7 14.1-10.6 33.3-7.8 44.8 6.4 10.6 14.1 7.8 33.3-6.4 44.8-24 18-52.3 30.6-83.2 35.7V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-34.7C69.19 430.1 0 351.1 0 256 0 160.9 69.19 81.89 160 66.65V32c0-17.67 14.3-32 32-32s32 14.33 32 32v34.66zM160 132c-55.2 14.2-96 64.4-96 123.1 0 60.5 40.8 110.7 96 124V132z" />
  </svg>
);

const SvgCediSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCediSignSolid;
