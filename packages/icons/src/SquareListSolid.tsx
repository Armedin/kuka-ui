import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm128 160c0-17.7-14.3-32-32-32-17.67 0-32 14.3-32 32s14.33 32 32 32c17.7 0 32-14.3 32-32zm0-96c0-17.7-14.3-32-32-32-17.67 0-32 14.3-32 32s14.33 32 32 32c17.7 0 32-14.3 32-32zm0 192c0-17.7-14.3-32-32-32-17.67 0-32 14.3-32 32s14.33 32 32 32c17.7 0 32-14.3 32-32zm64-216c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24H192zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24H192zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24H192z" />
  </svg>
);

const SvgSquareListSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareListSolid;
