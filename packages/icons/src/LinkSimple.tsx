import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 256C0 167.6 71.63 96 160 96h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-70.69 0-128 57.3-128 128s57.31 128 128 128h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H160C71.63 416 0 344.4 0 256zm480 160H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h112c70.7 0 128-57.3 128-128s-57.3-128-128-128H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h112c88.4 0 160 71.6 160 160s-71.6 160-160 160zm-32-176c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-8.8 0-16-7.2-16-16s7.2-16 16-16h256z" />
  </svg>
);

const SvgLinkSimple = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLinkSimple;
