import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm64 384H192c-13.25 0-24-10.75-24-24s10.8-24 24-24h40V196.8l-14.7 9.8c-11 7.3-25.9 3.5-33.3-7.5-7.3-10.2-4.3-25.1 6.7-32.4l52-34.66a23.922 23.922 0 0 1 24.64-1.188C275.1 135 280 143.2 280 152v184h40c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgCircle1Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle1Solid;
