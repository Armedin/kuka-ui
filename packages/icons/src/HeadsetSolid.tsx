import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M191.1 224c0-17.72-14.34-32.04-32-32.04L144 192c-35.34 0-64 28.66-64 64.08v47.79C80 339.3 108.7 368 144 368h16c17.66 0 32-14.36 32-32.06L191.1 224zM256 0C112.9 0 4.583 119.1.02 256L0 296c0 13.3 10.75 24 23.1 24S48 309.3 48 296v-40c0-114.7 93.34-207.8 208-207.8 114.7 0 208 93.1 208 207.8v144c0 22.09-17.91 40-40 40H313.3c-8.3-14.3-23.6-24-41.3-24h-30.2c-23.21 0-44.5 15.69-48.87 38.49C187 485.2 210.4 512 239.1 512H272c17.72 0 33.03-9.711 41.34-24H424c48.6 0 88-39.4 88-88V256C507.4 119.1 399.1 0 256 0zm112 368c35.34 0 64-28.7 64-64.13V256.1c0-35.4-28.7-64.1-64-64.1h-16c-17.66 0-32 14.34-32 32.04V335.9c0 17.8 14.3 32.1 32 32.1h16z" />
  </svg>
);

const SvgHeadsetSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHeadsetSolid;
