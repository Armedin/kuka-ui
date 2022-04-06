import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m16 159.8-16 64 96 .023V159.8H16zM512 47.99 511.997 16C511.1 7.124 504.9 0 495.1 0H16C7.125 0 .9 7.124.9 15.99l-.9 32c0 8.871 7.113 16 15.99 16L0 127.8h96V63.95h32v63.85h384l-15.99-63.85c8.89.04 15.99-7.09 15.99-15.96zM496 159.8l-368 .1v63.9l384-.023-16-63.977zm-400 64v194.9c-22 7.746-35.25 30.25-31.25 53.24C68.62 495.1 88.62 512 112 512s43.38-16.88 47.25-39.99c4-22.99-9.249-45.48-31.25-53.23V223.8H96z" />
  </svg>
);

const SvgBlindsRaisedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlindsRaisedSolid;
