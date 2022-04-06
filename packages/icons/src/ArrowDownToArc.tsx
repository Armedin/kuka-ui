import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 480c123.7 0 224-100.3 224-224 0-8.8 7.2-16 16-16s16 7.2 16 16c0 141.4-114.6 256-256 256S0 397.4 0 256c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16 0 123.7 100.3 224 224 224zm11.1-133.4c-2.2 3.4-6.5 5.4-11.1 5.4s-8.9-2-12-5.4l-128-144c-5.8-6.6-5.2-16.7 1.4-22.6 5.7-5.8 16.7-5.2 21.7 1.4L240 293.9V16c0-8.836 7.2-16 16-16s16 7.164 16 16v277.9l100-112.5c5.9-6.6 16-7.2 22.6-1.4 6.6 5.9 7.2 16 .5 22.6l-128 144z" />
  </svg>
);

const SvgArrowDownToArc = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownToArc;
