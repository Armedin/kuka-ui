import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 64c0-17.67 14.33-32 32-32h80c79.5 0 144 64.47 144 144 0 58.8-35.2 109.3-85.7 131.7l51.4 128.4c6.6 16.4-1.4 35-17.8 41.6-16.4 6.6-35-1.4-41.6-17.8l-56-139.9H64v128c0 17.7-14.33 32-32 32S0 465.7 0 448V64zm64 192h48c44.2 0 80-35.8 80-80s-35.8-80-80-80H64v160zm336-96c61.9 0 112 50.1 112 112s-50.1 112-112 112h-48v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32h80zm48 112c0-26.5-21.5-48-48-48h-48v96h48c26.5 0 48-21.5 48-48z" />
  </svg>
);

const SvgRupiahSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRupiahSignSolid;
