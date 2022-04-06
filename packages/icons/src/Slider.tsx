import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 96c35.3 0 64 28.7 64 64v80h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80v80c0 35.3-28.7 64-64 64h-32c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h32zm0 32h-32c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32zM16 240h208v32H16c-8.836 0-16-7.2-16-16s7.164-16 16-16z" />
  </svg>
);

const SvgSlider = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSlider;
