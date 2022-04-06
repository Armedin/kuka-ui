import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M208 96c0-8.84 7.2-16 16-16h32c8.8 0 16 7.16 16 16 0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm-96 64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm-96 64c0-8.8 7.16-16 16-16h32c8.84 0 16 7.2 16 16s-7.16 16-16 16H32c-8.84 0-16-7.2-16-16zm0 91.4c0-15.1 12.28-27.4 27.43-27.4H532.6c15.1 0 27.4 12.3 27.4 27.4 0 72.9-47.4 134.8-113.1 156.4.7 2.6 1.1 5.4 1.1 8.2 0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32 0-2.8.4-5.6 1.1-8.2C63.4 450.2 16 388.3 16 315.4zm123.1 126c16.1 5.3 25.2 22.2 20 37.7l256.9.9c-4.3-16.4 4.8-33.3 20.9-38.6 51.6-17 89.1-64.7 91-121.4H48.08c1.02 56.7 39.44 104.4 91.02 121.4zM256 208c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32zm144 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm144-16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32zm-240 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm-144-16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32zm192-64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32zm48 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm-144-16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32zm96-64c8.8 0 16 7.16 16 16 0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16 0-8.84 7.2-16 16-16h32z" />
  </svg>
);

const SvgBowlRice = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBowlRice;