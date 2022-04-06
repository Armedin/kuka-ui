import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M367.1 448H79.97c-26.51 0-48.01 21.49-48.01 47.1 0 9.7 7.17 16.9 16 16.9h352c8.838 0 16-7.163 16-16 .04-26.5-21.46-48-48.86-48zm49-288h-160v-48h16.01c17.6 0 31.98-14.4 31.98-32-.99-17.6-14.49-32-32.09-32h-16.01V32C256 14.4 241.6 0 223.1 0c-16.7 0-32 14.4-32 32.01V48h-16c-17.6 0-32.01 14.4-32.01 32 .01 17.6 15.31 32 32.01 32h16.01v48h-160C17.34 160 0 171.5 0 192c0 3.2.473 6.4 1.437 9.5L74.46 416h299.1l73.02-214.5c.92-3.1 1.42-6.3 1.42-9.5 0-20.4-17.9-32-31.9-32z" />
  </svg>
);

const SvgChessKingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChessKingSolid;
