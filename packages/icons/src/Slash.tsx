import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M3.444 6.086C8.92-.849 18.98-2.033 25.92 3.443L633.9 483.4c7 5.5 8.1 14.7 2.7 22.5-5.5 7-15.6 8.1-22.5 2.7L6.088 28.56C-.847 23.08-2.031 13.02 3.444 6.086z" />
  </svg>
);

const SvgSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSlash;
