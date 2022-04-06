import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M463.9 448h-15c18.25-18.38 30.1-42.13 30.1-64 0-26.5-22.13-52.75-47.87-61.13L432 224h47.88c20.36 0 35.62-18.85 31.4-38.77C500.9 136.4 466.8 96 415.9 96V64c-47.1 0-74.25 62.75-89.37 108.3L288 288.1V144C288 64.47 223.53 0 144.9 0S0 64.47 0 144c0 68.5 47.94 125.6 112 140.2-10.2 21.3-16.36 45-15.98 70.5C97.33 443.4 175.5 512 264.2 512h231.7c8.75 0 15.99-7.125 15.99-16 .01-26.4-21.59-48-47.99-48zm-48.8-288c0-8.875 7.121-16 15.1-16 8.875 0 15.98 7.125 15.98 16s-7.125 16-15.1 16c-7.98 0-15.98-7.1-15.98-16z" />
  </svg>
);

const SvgSquirrelSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquirrelSolid;
