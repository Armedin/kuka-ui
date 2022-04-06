import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M208 480h-64V349.9c62.91-8.131 112-61.9 112-128.1 0-35.09-13.27-130.1-33.02-215.6-.88-3.638-4.08-6.2-7.78-6.2H40.81a7.993 7.993 0 0 0-7.79 6.188C13.27 91.69 0 186.7 0 221.8c0 66.16 49.09 119.9 112 128.1V480H48c-8.84 0-16 7.2-16 16s7.16 16 16 16h160c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16zM195.1 32c7.057 32.58 13.06 65.88 17.75 96H42.29c4.688-30.13 10.69-63.42 17.75-96H195.1zM32 221.8c0-12.7 2.1-34.9 5.66-61.8h180.7c3.54 26.9 5.64 49.1 5.64 61.8 0 51.53-39.66 94.34-90.29 97.46-7.01.432-4.297.438-11.41 0C71.66 316.2 32 273.3 32 221.8z" />
  </svg>
);

const SvgChampagneGlass = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChampagneGlass;
