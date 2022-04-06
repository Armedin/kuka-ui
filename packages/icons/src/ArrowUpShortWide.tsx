import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M304 336h192c8.844 0 16-7.156 16-16s-7.156-16-16-16H304c-8.844 0-15.1 7.156-15.1 16s6.3 16 15.1 16zm0-128h128c8.8 0 16-7.2 16-16s-7.156-16-16-16H304c-8.844 0-15.1 7.156-15.1 16s6.3 16 15.1 16zm0-128h64c8.844 0 16-7.156 16-16s-7.2-16-16-16h-64c-8.844 0-15.1 7.156-15.1 16s6.3 16 15.1 16zm256 352H304c-8.844 0-15.1 7.156-15.1 16s6.3 16 15.1 16h256c8.844 0 16-7.156 16-16s-7.2-16-16-16zM139.3 36.69c-6.25-6.25-16.38-6.25-22.62 0l-96 96c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L112 86.63V464c0 8.844 7.157 16 16 16s16-7.2 16-16V86.63l68.69 68.69C215.8 158.4 219.9 160 224 160s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L139.3 36.69z" />
  </svg>
);

const SvgArrowUpShortWide = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpShortWide;
