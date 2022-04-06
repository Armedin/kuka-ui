import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M205 286.7c64.4-6.629 114.1-60.45 114.1-126.6C319.1 89.51 262.5 32 191.9 32H15.1C7.156 32 0 39.16 0 48v416c0 8.8 7.156 16 15.1 16 8.844 0 15.1-7.156 15.1-16V288h135.4l123.2 184.9c5 4.6 10 7.1 15.2 7.1 3.047 0 6.125-.875 8.859-2.688 7.359-4.906 9.344-14.84 4.437-22.19L205 286.7zM31.1 64h159.1c52.94 0 95.1 43.06 95.1 96s-43.06 96-95.1 96H31.1V64z" />
  </svg>
);

const SvgR = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgR;
