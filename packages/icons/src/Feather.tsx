import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M467.1 44.85C438.3 15.97 401.7 0 361.7 0c-46.75 0-98.13 21.88-146.9 70.63l-85.7 85.67c-79.37 79.38-71.86 210.8-53.48 257.4L4.75 484.57C1.625 487.6 0 491.8 0 496c0 8.5 6.875 16 15.1 16 4.125 0 8.25-1.5 11.37-4.75l70.87-70.87c17.25 6.75 45.76 12.11 79.26 12.11 57.12 0 127.1-15.44 178.1-65.56l85.75-85.75C531.1 206.6 529.6 107.5 467.1 44.85zM151.7 179l85.75-85.75C277.6 53.25 320.5 32 361.6 32c30.1 0 59.62 12.25 82.87 35.5 42.25 42.38 45.75 100.1 13.12 156.7h-147.2l37.25-37.25c6.25-6.25 6.25-16.38 0-22.62-6.25-6.25-16.37-6.25-22.62 0l-223.7 223.7C91.25 344.9 87.87 242.9 151.7 179zm25.8 237.4c-23.25 0-40.1-2.75-53.5-5.75l58.75-58.75 158.2.375-7.1 8C284.1 409.1 214.6 416.4 177.5 416.4zm195.4-96H214.4l63.1-64.13h156.4c-4.3 6.13-61 64.13-61 64.13z" />
  </svg>
);

const SvgFeather = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFeather;
