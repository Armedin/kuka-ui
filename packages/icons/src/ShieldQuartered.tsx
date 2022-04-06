import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M231 7.839c16-6.773 34.1-6.772 50 .002L457.7 82.79c22 9.33 38.5 31.01 38.3 56.31-.5 100.1-41.3 281.6-213.6 364.1-16.7 7.9-36.1 7.9-52.8 0-172.35-82.5-213.11-264-214.5-364.1.77-25.3 17.22-46.98 39.2-56.31L231 7.839zM47.1 139.8c1 20 2.83 43.3 7.17 68.2H239.1V38.8L66.79 112.3c-11.28 4.7-18.85 15.4-19.69 27.5zM61.06 240c21.28 84.6 72.24 180.1 178.04 232.6V240H61.06zm210.04 0v232.6c107.6-52.5 158.6-148 179-232.6h-179zm186.7-32c4.3-24.9 6.1-48.2 6.2-68.2.1-12.1-7.5-22.8-18.8-27.5L271.1 38.77V208h186.7z" />
  </svg>
);

const SvgShieldQuartered = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldQuartered;
