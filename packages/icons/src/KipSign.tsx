import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M80 32c8.84 0 16 7.16 16 16v174.4L325.9 35.58a15.99 15.99 0 0 1 22.5 2.33c4.7 6.86 4.5 16.94-2.3 22.51L125.1 240H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H125.1l221 179.6c6.8 5.6 7 15.6 2.3 22.5-5.6 6.8-15.6 7-22.5 2.3L96 289.6v174.5c0 9.7-7.16 16-16 16s-16-6.3-16-16V272H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h48V48c0-8.84 7.16-16 16-16z" />
  </svg>
);

const SvgKipSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKipSign;
