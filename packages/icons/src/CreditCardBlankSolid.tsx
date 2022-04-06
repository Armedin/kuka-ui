import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h448zM112 384h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16zm128 0h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H240c-8.8 0-16 7.2-16 16s7.2 16 16 16z" />
  </svg>
);

const SvgCreditCardBlankSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCreditCardBlankSolid;
