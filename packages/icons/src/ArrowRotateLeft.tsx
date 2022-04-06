import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 256c0 123.5-100.4 223.9-223.9 223.9-69.41 0-133.9-31.3-176.7-86.05-5.438-6.938-4.203-17 2.75-22.44 6.984-5.531 17.03-4.25 22.47 2.75C141.3 421.1 196.5 448 256 448c105.9 0 192-86.13 192-192S361.87 64 256 64c-68.9 0-131.5 36.7-165.85 96H176c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.84 0-16-7.2-16-16V48c0-8.84 7.16-16 16-16s16 7.16 16 16v93.56C104.4 73.87 176.6 32.11 256.1 32.11 379.6 32.11 480 132.5 480 256z" />
  </svg>
);

const SvgArrowRotateLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRotateLeft;
