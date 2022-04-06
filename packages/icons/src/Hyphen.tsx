import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 256c0 8.8-7.2 16-16 16H16c-8.844 0-16-7.2-16-16s7.156-16 16-16h288c8.8 0 16 7.2 16 16z" />
  </svg>
);

const SvgHyphen = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHyphen;
