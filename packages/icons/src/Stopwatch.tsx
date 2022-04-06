import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M240 320c0 8.8-7.2 16-16.9 16-7.9 0-16-7.2-16-16V208c0-8.8 8.1-16 16-16 9.7 0 16.9 7.2 16.9 16v112zM127.1 16c0-8.836 8.1-16 16-16H304c8.8 0 16 7.164 16 16 0 8.84-7.2 16-16 16h-64v64.61c49.4 3.79 93.1 24.79 127.7 56.99l37-36.9c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6l-38.2 38.2C416 212.6 432 256.4 432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-109.5 84.6-199.2 192-207.39V32h-64c-8.8 0-16-7.16-16-16h-.9zm96 464c98.1 0 176.9-78.8 176.9-176s-78.8-176-176.9-176c-96.3 0-176 78.8-176 176s79.7 176 176 176z" />
  </svg>
);

const SvgStopwatch = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStopwatch;
