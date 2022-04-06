import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M480 256c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-224 0c0-106.9 85.1-192 192-192 106 0 192 85.1 192 192 0 106-86 192-192 192-106.9 0-192-86-192-192zm192 64c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zM188.9 205.4l43-8.6c-5.1 18.9-7.9 38.7-7.9 59.2s2.8 40.3 7.9 59.2l-43-8.6L137 352h71c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h32.13l65.47-57.3-2.2-.4C109.1 290.6 96 274.6 96 256c0-18.6 13.1-34.6 31.4-38.3l2.2-.4-65.47-58.2H32c-17.67 0-32-13.4-32-32 0-16.8 14.33-32 32-32h176c17.7 0 32 15.2 32 32 0 18.6-14.3 32-32 32h-71l51.9 46.3z" />
  </svg>
);

const SvgStarshipSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStarshipSolid;
