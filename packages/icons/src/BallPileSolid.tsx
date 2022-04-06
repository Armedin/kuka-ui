import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M256 248c0-44.19-35.81-80-80-80s-80 35.8-80 80 35.81 80 80 80 80-35.8 80-80zM80 352c-44.19 0-80 35.8-80 80s35.81 80 80 80 80-35.8 80-80-35.8-80-80-80zm208-192c44.19 0 80-35.81 80-80S332.2 0 288 0s-80 35.81-80 80 35.8 80 80 80zm208 192c-44.19 0-80 35.81-80 80s35.81 80 80 80 80-35.81 80-80-35.8-80-80-80zm-208 0c-44.19 0-80 35.81-80 80s35.8 80 80 80 80-35.81 80-80-35.8-80-80-80zm192-104c0-44.19-35.81-80-80-80s-80 35.8-80 80 35.81 80 80 80 80-35.8 80-80z" />
  </svg>
);

const SvgBallPileSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBallPileSolid;
