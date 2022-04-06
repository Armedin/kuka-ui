import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96.03H336.9L269.68 6.4C265.6 2.133 260.8 0 256 0s-9.6 2.133-12.8 6.4l-67.22 89.63H64c-35.25 0-64 28.75-64 63.1v287.1C0 483.3 28.75 512 64 512h384c35.25 0 64-28.75 64-63.99V160c0-35.2-28.7-63.97-64-63.97zM480 448c0 17.6-14.4 32-32 32H64c-17.64 0-32-14.35-32-31.99V160c0-17.6 14.36-32 32-32h127.1L256 42.67l64.03 85.37H448c17.64 0 32 14.35 32 31.1V448z" />
  </svg>
);

const SvgMessageMiddleTop = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageMiddleTop;
