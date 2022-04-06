import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.66 32 0 60.65 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96c0-35.35-28.7-64-64-64zm-25.4 198.6-112 112c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 274.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0s12.47 32.68-.03 45.18z" />
  </svg>
);

const SvgSquareChevronDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareChevronDownSolid;
