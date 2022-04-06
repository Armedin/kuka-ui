import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M432 128h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16 7.2 16 16v288c0 8.812-7.188 16-16 16H80c-8.81 0-16-7.2-16-16V176c0-8.8 7.19-16 16-16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-26.47 0-48 21.5-48 48v288c0 26.5 21.53 48 48 48h352c26.47 0 48-21.53 48-48V176c0-26.5-21.5-48-48-48zM148.7 260.7c-6.25 6.25-6.25 16.38 0 22.62l96 96c3.1 3.08 7.2 4.68 11.3 4.68s8.188-1.562 11.31-4.688l96-96c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L272 329.4V16c0-8.844-7.2-16-16-16s-16 7.156-16 16v313.4l-68.7-68.7c-6.2-6.3-16.4-6.3-22.6 0z" />
  </svg>
);

const SvgArrowDownToSquare = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownToSquare;
