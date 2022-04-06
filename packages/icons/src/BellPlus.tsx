import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M223.1 160c9.7 0 16.9 7.2 16.9 16v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16.9 16-7.9 0-16-7.2-16-16v-48h-48c-7.9 0-16-7.2-16-16s8.1-16 16-16h48v-48c0-8.8 8.1-16 16-16zm-16-144c0-8.836 8.1-16 16-16 9.7 0 16.9 7.164 16.9 16v16.79C320.9 40.82 384 109 384 192v29.1c0 43.7 17.4 85.6 48.3 116.6l2.7 2.7c8.3 8.3 13 18.7 13 31.3 0 24.5-19.8 44.3-44.3 44.3H44.28C19.83 416 0 396.2 0 371.7c0-12.6 4.666-23 12.97-31.3l2.75-2.7C46.63 306.7 64 264.8 64 221.1V192c0-83 63.1-151.18 144-159.21L207.1 16zm16 48c-69.8 0-128 57.3-128 128v29.1c0 52.2-19.84 102.3-56.75 139.2L35.6 363c-2.31 2.3-4.5 5.5-4.5 8.7 0 6.8 6.4 12.3 13.18 12.3H403.7c6.8 0 12.3-5.5 12.3-12.3 0-3.2-1.3-6.4-3.6-8.7l-2.7-2.7c-37-36.9-57.7-87-57.7-139.2V192c0-70.7-57.3-128-128.9-128zm0 416c14.8 0 26.7-8.9 31.1-21.3 2.9-8.4 12.1-13.6 20.4-9.8 8.3 3 12.7 12.1 9.8 20.4-8.8 24.9-32.5 42.7-61.3 42.7-27 0-50.7-17.8-59.5-42.7-2.9-8.3 1.5-17.4 9.8-20.4 8.3-3.8 17.5 1.4 20.4 9.8 4.4 12.4 16.3 21.3 29.3 21.3z" />
  </svg>
);

const SvgBellPlus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBellPlus;
