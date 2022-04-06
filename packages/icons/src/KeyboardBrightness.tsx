import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M203.3 260.7c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-88.01-88c-6.25-6.2-6.25-16.4 0-22.6 6.24-6.3 16.41-6.3 22.61 0l88 88zM304 96c0-8.84 7.2-16 16-16s16 7.16 16 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V96zm220.7 76.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6l-88 88c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l88-88zM0 400c0-8.8 7.164-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16zm432-16c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h224zm192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96z" />
  </svg>
);

const SvgKeyboardBrightness = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKeyboardBrightness;
