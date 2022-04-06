import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M310.6 406.6c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375L64 205.3V352c0 17.69-14.33 32-32 32S0 369.69 0 352V128c0-17.69 14.33-32 32-32h224c17.67 0 32 14.31 32 32s-14.33 32-32 32H109.3l201.4 201.4c12.4 12.5 12.4 32.7-.1 45.2z" />
  </svg>
);

const SvgArrowUpLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpLeftSolid;
