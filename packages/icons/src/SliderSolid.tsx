import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 96c35.3 0 64 28.7 64 64v64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64v64c0 35.3-28.7 64-64 64h-32c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h32zm0 64h-32v192h32V160zM32 224h192v64H32c-17.67 0-32-14.3-32-32s14.33-32 32-32z" />
  </svg>
);

const SvgSliderSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSliderSolid;
