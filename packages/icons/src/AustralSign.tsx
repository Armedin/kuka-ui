import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M315.8 224H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H329.4l27 64H432c8.8 0 16 7.2 16 16s-7.2 16-16 16h-62.9l45.6 105.8c3.5 8.1-.3 17.5-8.5 20.9-8.1 3.5-17.5-.3-20.9-8.5L335.2 352H112.8L62.74 470.2c-3.45 8.2-12.84 12-20.97 8.5-8.14-3.4-11.95-12.8-8.51-20.9L78.01 352H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h75.55l27.05-64H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h116.2l77.1-182.23c2.5-5.92 8.3-9.77 14.7-9.77 6.4 0 12.2 3.85 14.7 9.77L315.8 224zm-34.7 0-58-134.94L166.9 224h114.2zm-127.7 32-27.1 64h195.4l-27.1-64H153.4z" />
  </svg>
);

const SvgAustralSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAustralSign;
