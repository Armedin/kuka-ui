import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368 480H16c-6.219 0-11.91-3.625-14.5-9.281-2.625-5.625-1.75-12.31 2.281-17.06L333.5 64H16C7.156 64 0 56.84 0 48s7.156-16 16-16h352c6.219 0 11.91 3.625 14.5 9.281 2.625 5.625 1.75 12.31-2.281 17.06L50.5 448H368c8.844 0 16 7.156 16 16s-7.2 16-16 16z" />
  </svg>
);

const SvgZ = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgZ;
