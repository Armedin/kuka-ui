import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M318 366.4c-3.8-8.7-12.5-14.4-22-14.4h-88V80c0-44.12-35.9-80-80.9-80H16C7.156 0 0 7.156 0 16s7.156 16 16 16h112c26.47 0 48 21.53 48 48v272H88c-9.547 0-18.19 5.656-22 14.41s-2.078 18.94 4.406 25.92l104 112C179.2 509.4 185.6 512 191.1 512s12.85-2.557 17.6-7.672l104-112c7.4-7.028 9.1-17.128 5.3-25.928zM277.7 384l-85.66 92.25L106.3 384h171.4z" />
  </svg>
);

const SvgTurnDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTurnDown;
