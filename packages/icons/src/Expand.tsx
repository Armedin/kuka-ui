import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M144 32H16C7.156 32 0 39.16 0 48v128c0 8.8 7.156 16 16 16s16-7.2 16-16V64h112c8.8 0 16-7.16 16-16s-7.2-16-16-16zm0 416H32V336c0-8.8-7.16-16-16-16s-16 7.2-16 16v128c0 8.8 7.156 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16zm288-128c-8.844 0-16 7.156-16 16v112H304c-8.844 0-16 7.156-16 16s7.156 16 16 16h128c8.844 0 16-7.156 16-16V336c0-8.8-7.2-16-16-16zm0-288H304c-8.8 0-16 7.16-16 16s7.2 16 16 16h112v112c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.84-7.2-16-16-16z" />
  </svg>
);

const SvgExpand = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgExpand;
