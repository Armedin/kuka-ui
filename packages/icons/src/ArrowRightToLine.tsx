import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 64c-8.8 0-16 7.16-16 16v352c0 8.844 7.156 16 16 16s16-7.156 16-16V80c0-8.84-7.2-16-16-16zm-212.7 36.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L313.4 240H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h297.4L196.7 388.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l144-144C366.4 264.2 368 260.1 368 256s-1.562-8.188-4.688-11.31L219.3 100.7z" />
  </svg>
);

const SvgArrowRightToLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRightToLine;
