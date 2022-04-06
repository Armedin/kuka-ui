import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m25.37 134.6 45.26-45.25c12.5-12.5 32.76-12.5 45.25 0l129.6 129.6 67.88-67.88a32.005 32.005 0 0 1 34.87-6.938C360.2 149.1 368 160.8 368 173.7V400a31.91 31.91 0 0 1-9.369 22.63C352.8 428.4 344.8 432 336 432H109.7a31.999 31.999 0 0 1-29.57-19.75 32.012 32.012 0 0 1 6.939-34.87l67.88-67.88L25.37 179.9c-12.5-12.5-12.49-32.8 0-45.3z" />
  </svg>
);

const SvgDownRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDownRightSolid;
