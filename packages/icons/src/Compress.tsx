import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M144 320H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h112v112c0 8.8 7.2 16 16 16s16-7.2 16-16V336c0-8.8-7.2-16-16-16zm160-128h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H320V48c0-8.84-7.2-16-16-16s-16 7.16-16 16v128c0 8.8 7.2 16 16 16zm128 128H304c-8.844 0-16 7.156-16 16v128c0 8.844 7.156 16 16 16s16-7.156 16-16V352h112c8.844 0 16-7.156 16-16s-7.2-16-16-16zM144 32c-8.8 0-16 7.16-16 16v112H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h128c8.8 0 16-7.2 16-16V48c0-8.84-7.2-16-16-16z" />
  </svg>
);

const SvgCompress = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCompress;
