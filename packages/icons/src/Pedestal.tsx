import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128 80c-8.8 0-16 7.16-16 16 0 8.836 7.164 16 16 16s16-7.2 16-16c0-8.84-7.2-16-16-16zm192 0c-8.836 0-16 7.162-16 16 0 8.836 7.164 16 16 16s16-7.164 16-16c0-8.84-7.2-16-16-16zm112 400h-16V64c0-35.35-28.65-64-64-64H96C60.65 0 32 28.65 32 64v416H15.96C7.146 480 0 487.2 0 496s7.173 15.99 15.99 15.99h416C440.8 511.1 448 504.8 448 496s-7.1-16-16-16zm-48 0H64V64c0-17.64 14.36-32 32-32h256c17.64 0 32 14.36 32 32v416z" />
  </svg>
);

const SvgPedestal = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPedestal;
