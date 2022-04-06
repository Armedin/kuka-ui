import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M248.2 0h15.6c16.3 0 31 9.958 37.1 25.14L482.8 480H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h13.17L211.1 25.14C217.2 9.958 231.9 0 248.2 0zm0 32c-4.1 0-6.2 1.99-7.4 5.03L191.6 160h128.8L271.2 37.03c-2.1-3.04-4.2-5.03-7.4-5.03h-15.6zm85 160H178.8l-51.2 128h256.8l-51.2-128zm64 160H114.8L63.63 480H448.4l-51.2-128z" />
  </svg>
);

const SvgTrafficCone = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrafficCone;
