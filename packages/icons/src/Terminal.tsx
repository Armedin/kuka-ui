import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M5.113 59.72c-6.476-6.01-6.85-16.13-.837-22.61 6.014-6.47 16.134-6.85 22.614-.83L250.9 244.3c3.2 3 5.1 7.3 5.1 11.7 0 4.4-1.9 8.7-5.1 11.7l-224.01 208c-6.48 6-16.6 5.7-22.614-.8-6.013-6.5-5.638-16.6.837-22.6L216.5 256 5.113 59.72zM560 448c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16h320z" />
  </svg>
);

const SvgTerminal = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTerminal;
