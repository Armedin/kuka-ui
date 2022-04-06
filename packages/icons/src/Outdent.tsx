import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 64c0-8.84 7.16-16 16-16h416c8.8 0 16 7.16 16 16s-7.2 16-16 16H48c-8.84 0-16-7.16-16-16zm192 128c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16zm240 112c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16h224zM32 448c0-8.8 7.16-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.84 0-16-7.2-16-16zm101.8-282.4c10.5-9.5 25.3-1.2 25.3 12.3v156.2c0 13.5-14.8 20.9-25.3 12.3l-95.7-78c-6.87-7.3-6.87-18.4 0-24.8l95.7-78zm-6.7 46.2L74.34 256l52.76 44.2v-88.4z" />
  </svg>
);

const SvgOutdent = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOutdent;
