import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 48v16h16c8.8 0 16 7.16 16 16s-7.2 16-16 16h-16v304c0 8.8-7.2 16-16 16s-16-7.2-16-16v-27.3c-23.5 26.5-57.8 43.3-96 43.3-70.7 0-128-57.3-128-128s57.3-128 128-128c38.2 0 72.5 16.8 96 43.3V96h-80c-8.8 0-16-7.16-16-16s7.2-16 16-16h80V48c0-8.84 7.2-16 16-16s16 7.16 16 16zm-32 240c0-53.9-43-96-96-96-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96 53 0 96-43 96-96zm80 160c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h352z" />
  </svg>
);

const SvgDongSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDongSign;
