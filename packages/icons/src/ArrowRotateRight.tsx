import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M255.9 32.11c79.47 0 151.8 41.76 192.1 109.4V48c0-8.84 7.2-16 16-16s16 7.16 16 16v128c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h85.85C387.5 100.7 324.9 64 256 64 150.1 64 64 150.1 64 256s86.13 192 192 192c59.48 0 114.7-26.91 151.3-73.84 5.438-7 15.48-8.281 22.47-2.75 6.953 5.438 8.187 15.5 2.75 22.44-42.8 54.75-107.3 86.05-176.7 86.05C132.4 479.9 32 379.5 32 256S132.4 32.11 255.9 32.11z" />
  </svg>
);

const SvgArrowRotateRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRotateRight;
