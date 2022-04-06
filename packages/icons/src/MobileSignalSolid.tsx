import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M144 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64zm83.3 64H64V64h224v251.1c4.303-4.988 8.613-9.977 13.32-14.68C316.7 285.9 333.8 272.9 352 261.1V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h181.6c-3.5-7.3-5.6-15.4-5.6-24.9-.9-12.6 1.3-26 3.3-39.1zM512 375.1c0-13.26-10.74-23.1-23.1-23.1-37.5 0-71.51 15.25-96.13 39.88S352 450.5 352 488c0 13.3 10.7 24 23.1 24s23.1-10.74 23.1-23.1c0-48.53 39.49-88.01 88.01-88.01C501.3 399.1 512 389.3 512 375.1zm-24.9-72c13.26 0 23.1-10.74 23.1-23.1 0-13.26-10.74-23.1-23.1-23.1-61.97-.012-120.2 24.13-164 67.95-43 42.95-68 101.15-67.1 162.25 0 13.26 10.74 24 23.1 24 13.26 0 23.1-10.74 23.1-24 0-49.14 19.15-95.36 53.9-130.1 36.5-33.9 82.8-53.9 131-53.9zm-29.7 154.3c-12.5 12.5-12.5 32.76 0 45.25 12.5 12.5 32.76 12.5 45.25 0 12.5-12.5 12.5-32.76 0-45.25-12.55-12.5-32.75-12.5-45.25 0z" />
  </svg>
);

const SvgMobileSignalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMobileSignalSolid;
