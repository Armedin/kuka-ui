import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6 27.3 411.3c-6.253 6.253-16.37 6.253-22.63 0-6.253-6.253-6.253-16.37 0-22.63L137.4 256 4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63 6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0 6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7c6.3 6.2 6.3 16.4 0 22.6z" />
  </svg>
);

const SvgXmark = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgXmark;
