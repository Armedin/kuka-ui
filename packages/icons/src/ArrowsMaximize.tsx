import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M416 176V86.63L246.6 256 416 425.4V336c0-8.844 7.156-16 16-16s16 7.156 16 16v128c0 8.844-7.156 16-16 16H304c-8.844 0-16-7.156-16-16s7.156-16 16-16h89.38L224 278.6 54.63 448H144c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.844 0-16-7.2-16-16V336c0-8.8 7.156-16 16-16s16 7.2 16 16v89.38L201.4 256 32 86.63V176c0 8.8-7.16 16-16 16s-16-7.2-16-16V48c0-8.84 7.156-16 16-16h128c8.8 0 16 7.16 16 16s-7.2 16-16 16H54.63L224 233.4 393.4 64H304c-8.8 0-16-7.16-16-16s7.2-16 16-16h128c8.8 0 16 7.16 16 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
  </svg>
);

const SvgArrowsMaximize = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsMaximize;
