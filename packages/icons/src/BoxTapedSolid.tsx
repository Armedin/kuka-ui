import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M50.73 58.53A48 48 0 0 1 93.67 32H192l-32 128H0L50.73 58.53zM288 160 256 32h98.3c18.2 0 34.8 10.27 43 26.53L448 160H288zm-128 96c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64h160v224c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192h160v64z" />
  </svg>
);

const SvgBoxTapedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoxTapedSolid;
