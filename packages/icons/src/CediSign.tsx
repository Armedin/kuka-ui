import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M176 0c8.8 0 16 7.164 16 16v48.04c1.3-.03 2.7-.04 3.1-.04 44.9 0 85.6 14.24 118.4 38.3 7.1 5.2 8.6 15.3 3.4 22.4-5.2 7.1-15.3 8.6-22.4 3.4-27.4-21-61.5-33-99.4-33-.4 0-1.8.92-3.1.95V415.1c1.3 0 2.7.9 3.1.9 37.9 0 72-12 99.4-32.1 7.1-5.2 17.2-3.7 22.4 3.4 5.2 7.1 3.7 17.2-3.4 22.4C280.7 433.8 240 448 195.1 448c-.4 0-1.8-.9-3.1-.9V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-51.2C69.17 428.2 0 350.3 0 256 0 161.7 69.17 83.77 160 67.23V16c0-8.836 7.2-16 16-16zm-16 412.1V99.86C86.54 115.9 32 179.1 32 256c0 76 54.54 140.1 128 156.1z" />
  </svg>
);

const SvgCediSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCediSign;
