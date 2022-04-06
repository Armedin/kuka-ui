import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M272 240h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H272v224c0 8.8-7.2 16-16.9 16-7.9 0-16-7.2-16-16V272H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h223.1V16c0-8.836 8.1-16 16-16 9.7 0 16.9 7.164 16.9 16v224z" />
  </svg>
);

const SvgPlusLarge = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlusLarge;
