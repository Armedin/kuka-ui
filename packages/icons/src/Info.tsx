import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M96 96c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99S64 46.33 64 64s14.33 32 32 32zm80 352h-64V176c0-8.8-7.2-16-16-16H48c-8.84 0-16 7.2-16 16s7.16 16 16 16h32v256H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h160c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgInfo = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgInfo;
