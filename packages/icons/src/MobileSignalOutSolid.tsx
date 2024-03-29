import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M310.6 246.6c12.5-12.5 12.5-32.76 0-45.25-6.2-6.25-14.4-10.25-22.6-10.25s-16.38 3.123-22.63 9.373c-12.5 12.5-12.5 32.76 0 45.25 6.248 6.248 14.44 9.373 22.63 9.373s16.4-2.196 22.6-8.496zM287.1 448h-224V64H224V0H47.1C20.6 0-.9 21.5-.9 48v416c0 26.5 21.5 48 48 48h255.1c26.5 0 48-21.5 48-48l.002-176h-64l.898 160zM144 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64zM444.1 67.95C400.2 24.14 341.1 0 280 0c-13.26 0-24.03 10.74-24.03 23.1 0 13.26 10.74 23.1 23.1 23.1 49.14 0 95.36 19.15 130.1 53.89 34.75 34.75 53.89 80.96 53.89 130.1 0 13.26 10.74 23.1 23.1 23.1C501.3 255.1 512 245.3 512 231.1c0-61.1-24.1-119.3-67.9-163.15zM279.1 96c-13.26 0-24 10.74-24 23.1s10.74 23.1 23.1 23.1c48.53 0 88.01 39.49 88.01 88.01 0 13.26 10.74 23.1 23.1 23.1S416 245.3 416 232c0-37.5-15.25-71.5-39.88-96.13S317.5 96 279.1 96z" />
  </svg>
);

const SvgMobileSignalOutSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMobileSignalOutSolid;
