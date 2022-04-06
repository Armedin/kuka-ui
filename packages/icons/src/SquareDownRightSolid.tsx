import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.35-28.7-64-64-64zm-53.5 314.5c0 8.837-7.163 16-16 16H156.1a15.977 15.977 0 0 1-14.78-9.875 15.995 15.995 0 0 1 3.471-17.44l45.25-45.25L122.1 222c-12.5-12.5-12.4-32.7.1-45.2l22.63-22.63c12.47-12.47 32.67-12.57 45.17-.07l67.92 67.92 45.25-45.25a15.98 15.98 0 0 1 17.44-3.469 15.976 15.976 0 0 1 9.877 14.78V346.5z" />
  </svg>
);

const SvgSquareDownRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareDownRightSolid;
