import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M359.5 214.3.668 470.6C3.922 493.1 23.76 512 48 512h288c26.51 0 48-21.49 48-48V256c-9.8-13.9-17.6-27.2-24.5-41.7zM336 112V16c0-8.838-7.2-16-16-16h-32c-8.836 0-16 7.162-16 16v64c0 44.2-35.8 80-80 80s-80-35.8-80-80V16c0-8.838-7.2-16-16-16H64c-8.84 0-16 7.162-16 16v96c0 51.9-16.84 102.5-48 144v136.4l339.1-242.2c-2-12.5-3.1-25.3-3.1-38.2z" />
  </svg>
);

const SvgShirtRunningSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShirtRunningSolid;
