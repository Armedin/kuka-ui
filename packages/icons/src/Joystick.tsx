import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M400 352H240V222.4c54.21-7.824 96.01-54.02 96.01-110.4 0-61.86-50.15-111.1-112-111.1S111.1 50.14 111.1 111.1c0 56.38 41.8 102.6 96.01 110.4V352h-160C21.49 352 0 373.5 0 400v64c0 26.5 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-64c0-26.5-21.5-48-48-48zM144 112c0-44.11 35.9-80 80-80s80 35.89 80 80-35.9 80-80 80-80-35.9-80-80zm272 352c0 8.822-7.178 16-16 16H48c-8.82 0-16-7.2-16-16v-64c0-8.8 7.18-16 16-16h352c8.822 0 16 7.178 16 16v64zM232 80c0-13.26-10.75-24-24-24s-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24zM64 320h64c8.844 0 16-7.156 16-16s-7.2-16-16-16H64c-8.84 0-16 7.2-16 16s7.16 16 16 16z" />
  </svg>
);

const SvgJoystick = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgJoystick;
