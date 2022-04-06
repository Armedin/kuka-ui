import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M96 96c0-35.35 28.7-64 64-64h416c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96zm272 32c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zM48 360c0 39.8 32.24 72 72 72h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H120C53.73 480 0 426.3 0 360V120c0-13.3 10.75-24 24-24s24 10.7 24 24v240z" />
  </svg>
);

const SvgMoneyBillsSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMoneyBillsSimpleSolid;
