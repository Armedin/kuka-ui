import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M264 0c13.3 0 24 10.75 24 24s-10.7 24-24 24h-16v48h40c17.7 0 32 14.3 32 32h85.4c25.7 0 45.8 25.4 38.5 50.1l-40.4 142.1c16 1.7 28.5 15.3 28.5 31.8 0 17.7-14.3 32-32 32h-32v96c0 17.7-14.3 32-32 32H112c-17.67 0-32-14.3-32-32v-96H48c-17.67 0-32-14.3-32-32 0-16.5 12.47-30.1 28.49-31.8L4.145 178.1C-3.156 153.4 16.03 128 42.61 128H128c0-17.7 14.3-32 32-32h40V48h-16c-13.3 0-24-10.75-24-24s10.7-24 24-24h80zM128 192H74.42l36.38 127.2c0 .3.1.5-.7.8H128V192zm48 128h96V192h-96v128zm144-128v128h17l.1-.5.1-.3L373.6 192H320z" />
  </svg>
);

const SvgTowerControlSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTowerControlSolid;
