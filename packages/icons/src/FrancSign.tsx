import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M304 32c8.8 0 16 7.16 16 16s-7.2 16-16 16H104c-4.42 0-8 3.58-8 8v120h176c8.8 0 16 7.2 16 16s-7.2 16-16 16H96v96h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H96v112c0 8.8-7.16 16-16 16s-16-7.2-16-16V352H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h48V72c0-22.09 17.91-40 40-40h200z" />
  </svg>
);

const SvgFrancSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFrancSign;
