import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96zm214.1 33.2c6 2.5 9.9 8.3 9.9 14.8v64h96c17.67 0 32 14.33 32 32v32c0 17.67-14.33 32-32 32h-96v64c0 6.469-3.891 12.31-9.875 14.78a15.988 15.988 0 0 1-17.44-3.469l-112-112c-6.248-6.248-6.248-16.38 0-22.62l112-112C201.3 128.1 208.1 126.7 214.1 129.2z" />
  </svg>
);

const SvgSquareLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareLeftSolid;
