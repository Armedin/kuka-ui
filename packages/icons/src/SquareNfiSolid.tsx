import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm64 80v160c0 8.8 7.16 16 16 16s16-7.2 16-16V233.8l66.3 110.4c2.8 6.2 11 9.1 18 7.2 6.9-1.9 10.8-8.2 10.8-15.4V176c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16v102.2L93.72 167.8c-3.7-6.2-11.06-9.1-17.99-7.2C68.8 162.5 64 168.8 64 176zm160 160c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-32h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v160zm160-160c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16V176z" />
  </svg>
);

const SvgSquareNfiSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareNfiSolid;
