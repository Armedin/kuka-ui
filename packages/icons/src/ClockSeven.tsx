import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M240 112c0-8.8 7.2-16 16-16s16 7.2 16 16v144c0 3.2-.9 6.2-2.7 8.9l-64 96c-4.9 7.3-14.8 9.3-22.2 4.4-7.3-4.9-9.3-14.8-4.4-22.2l61.3-91.9V112zM256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM32 256c0 123.7 100.3 224 224 224s224-100.3 224-224S379.7 32 256 32 32 132.3 32 256z" />
  </svg>
);

const SvgClockSeven = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockSeven;
