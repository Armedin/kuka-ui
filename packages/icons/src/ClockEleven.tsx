import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M240 112c0-8.8 7.2-16 16-16s16 7.2 16 16v144c0 7.1-4.6 13.3-11.4 15.3-6.7 2.1-14-.6-17.9-6.4l-64-96c-4.9-7.4-2.9-17.3 4.4-22.2 7.4-4.9 17.3-2.9 22.2 4.4l33.8 52.1.9-91.2zM256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM32 256c0 123.7 100.3 224 224 224s224-100.3 224-224S379.7 32 256 32 32 132.3 32 256z" />
  </svg>
);

const SvgClockEleven = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockEleven;
