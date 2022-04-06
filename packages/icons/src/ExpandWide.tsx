import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M144 64H16C7.156 64 0 71.16 0 80v128c0 8.8 7.156 16 16 16s16-7.2 16-16V96h112c8.8 0 16-7.16 16-16s-7.2-16-16-16zm0 352H32V304c0-8.8-7.16-16-16-16s-16 7.2-16 16v128c0 8.8 7.156 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16zm352-128c-8.8 0-16 7.2-16 16v112H368c-8.844 0-16 7.156-16 16s7.156 16 16 16h128c8.844 0 16-7.156 16-16V304c0-8.8-7.2-16-16-16zm0-224H368c-8.8 0-16 7.16-16 16s7.2 16 16 16h112v112c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.84-7.2-16-16-16z" />
  </svg>
);

const SvgExpandWide = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgExpandWide;
