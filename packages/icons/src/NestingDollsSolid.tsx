import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M303.9 352c0-36.16 12.52-69.18 32.82-96h-297c-4.39 11.3-9.46 22.3-15.34 32.7-16.43 29-56.12 134.7 24.36 223.3h199.1l14.41-19.2C289.1 457 303.9 412.7 303.9 368v-16zm287.2 16v-16c0-70.69-57.32-128-128-128s-128 57.31-128 128v16c0 51.93-16.85 102.5-48.02 144H640c-31.2-41.5-48.9-92.1-48.9-144zm-127.2 64c-44.2 0-80.03-35.82-80.03-80 33.44 0 62.83-17.13 80.03-43.05C481.1 334.9 510.5 352 543.1 352c0 44.2-35 80-79.2 80zm-160-320c0-61.86-50.16-112-112-112S79.82 50.14 79.82 112v112h224.1V112zm-112 48c-35.36 0-64.02-28.65-64.02-64 0-1.107.272-2.141.326-3.234 26.62-.113 49.99-13.76 63.69-34.41 13.7 20.65 37.08 34.29 63.69 34.41.014 1.094.314 2.124.314 3.234 0 35.3-28.7 64-64 64z" />
  </svg>
);

const SvgNestingDollsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNestingDollsSolid;
