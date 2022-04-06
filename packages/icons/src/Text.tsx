import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 48v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V64H240v384h64c8.8 0 16 7.2 16 15.1 0 8.8-7.2 16.01-16 16.01H144c-8.8 0-16-7.21-16-16.01 0-7.9 7.2-15.1 15.1-15.1H208V64H32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.84 7.163-16 16-16h416c8.8 0 16 7.16 16 16z" />
  </svg>
);

const SvgText = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgText;
