import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M231 7.838c16-6.773 34.1-6.772 50 .002l176.7 74.95c22 9.33 38.5 31.01 38.3 56.31-.5 100.1-41.3 281.6-213.6 364.1-16.7 7.9-36.1 7.9-52.8 0C57.26 420.7 16.49 239.2 16 139.1c-.13-25.3 16.32-46.98 38.3-56.31L231 7.838zM268.5 37.3c-8-3.39-17-3.39-25 0l-176.71 75C55.51 117 47.94 127.7 48 139.8c.46 94 39.33 259.8 195.4 334.5 8 3.8 17.2 3.8 25.2 0 156.1-74.7 195-240.5 195.4-334.5.1-12.1-7.5-22.8-18.8-27.5l-176.7-75z" />
  </svg>
);

const SvgShield = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShield;
