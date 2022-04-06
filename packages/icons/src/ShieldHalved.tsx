import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M457.7 82.79c22 9.33 38.5 31.01 38.3 56.31-.5 100.1-41.3 281.6-213.6 364.1-16.7 7.9-36.1 7.9-52.8 0C57.26 420.7 16.49 239.2 16 139.1c-.13-25.3 16.32-46.98 38.3-56.31L231 7.838c16-6.773 34.1-6.772 50 .002l176.7 74.95zM240 38.8 66.79 112.3C55.51 117 47.94 127.7 48 139.8c.46 93.4 38.76 257.3 192 332.8V38.8zm32 433.8c153.2-75.5 191.6-239.4 192-332.8.1-12.1-7.5-22.8-18.8-27.5L272 38.77V472.6z" />
  </svg>
);

const SvgShieldHalved = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldHalved;
