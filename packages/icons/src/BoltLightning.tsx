import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M379.8 197.6c5.031-7.344 5.563-16.88 1.406-24.75C377.1 164.9 368.9 160 360 160H203.4l50.84-127.1c2.969-7.375 2.062-15.78-2.406-22.38S239.1 0 232 0H56C43.97 0 33.81 8.906 32.22 20.84l-32 240a23.832 23.832 0 0 0 5.718 18.96A24.058 24.058 0 0 0 24 288h146.3l-41.78 194.1c-2.406 11.22 3.469 22.56 14 27.09 3.08 2.21 6.28 2.81 9.48 2.81 7.719 0 15.22-3.75 19.81-10.44L379.8 197.6zM190.1 256H33.15L63.02 32h157.2L164.9 170.1c-4.2 10.5 3.6 21.9 14.9 21.9h165L168.3 449.1l37.43-174.6c2.17-9.1-5.43-18.5-15.63-18.5z" />
  </svg>
);

const SvgBoltLightning = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoltLightning;
