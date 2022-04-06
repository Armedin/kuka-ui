import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m443.3 244.7-144-144c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L393.4 240H96c-8.84 0-16 7.2-16 16s7.16 16 16 16h297.4L276.7 388.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l144-144C446.4 264.2 448 260.1 448 256s-1.6-8.2-4.7-11.3zM16 64C7.156 64 0 71.16 0 80v352c0 8.8 7.156 16 16 16s16-7.2 16-16V80c0-8.84-7.16-16-16-16z" />
  </svg>
);

const SvgArrowRightFromLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRightFromLine;
